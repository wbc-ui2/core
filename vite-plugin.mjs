/**
 * wbc-ui2 — Vite Plugins
 *
 * Provides Vite plugins that replicate the Webpack features
 * required by wbc-ui2 (WBC) to resolve local files.
 *
 * Usage in your vite.config.js:
 *
 *   import { wbcVitePlugin } from '@wbc-ui2/core/vite-plugin';
 *
 *   export default defineConfig({
 *       plugins: [
 *           vue(),
 *           ...wbcVitePlugin(),   // ← spread! returns an array of plugins
 *       ],
 *   });
 */
// ─── Extension Lists ───

// Standard modules (handled by Vite's normal pipeline)
// NOTE: JS/TS are NOT here — they go through raw + lazy to avoid side-effect execution
const STANDARD_EXTENSIONS =
    '{jpeg,jpg,png,gif,svg,webp,avif,bmp,ico,' +
    'mp4,webm,mov,avi,mp3,wav,flac,ogg,' +
    'json,pdf,' +
    'vue}';

// Raw files (handled as strings via ?raw)
// JS/TS are included here — loaded as raw text (no execution, no side effects)
const RAW_EXTENSIONS = '{md,txt,py,rs,php,sh,tex,html,mmd,css,scss,sass,less,styl,stylus,js,jsx,ts,tsx}';

// Directories to exclude from context scanning
const EXCLUDED_DIRS = [
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/dist-vite/**',
    '!**/dist-rollup/**',
    '!**/public/**',
    '!**/.vite/**',
    '!**/.git/**',
];

// ─── Extensions loaded as raw strings (not parsed as modules) ───
// Used by rawFileLoaderPlugin for direct imports
const RAW_EXTENSIONS_RE = /\.(md|txt|py|rs|sh|tex|php|html|mmd)$/;
const DOUBLE_UNDERSCORE_RE = /__[^/]+\.(vue|js|ts|md|php|sh|html|tex|txt|py|rs|css|scss|sass)$/;

/**
 * Plugin 1: require.context() → import.meta.glob()
 */
function requireContextPlugin(options = {}) {
    const customExcludes = options.exclude || [];
    const finalExcludes = [...EXCLUDED_DIRS, ...customExcludes];

    return {
        name: 'wbc-ui2:require-context',
        enforce: 'pre',
        transform(code, id) {
            if (!id.endsWith('.js') && !id.endsWith('.ts')) return null;
            if (id.includes('node_modules')) return null;
            if (!code.includes('require.context')) return null;

            // Strip the 3rd argument (regex) if present, so the replace matches
            // We do a pre-replace to drop the 3rd arg so the old regex works,
            // or we just update the regex to make the 3rd arg optional.
            const transformed = code.replace(
                /require\.context\(\s*["']([^"']+)["']\s*,\s*true.*?\)(?=,|;|\s*$)/gm,
                (_match, dir) => {
                    const glob = dir.endsWith('/') ? dir : dir + '/';

                    const mainPattern = `${glob}**/*.${STANDARD_EXTENSIONS}`;
                    const excludeUnderscore = `${glob}**/__*.*`;

                    const rawPattern1 = `${glob}**/*.${RAW_EXTENSIONS}`;
                    const rawPattern2 = `${glob}**/__*.*`;

                    const jsLazyPattern = `${glob}**/*.{js,jsx,ts,tsx}`;

                    const mainGlobArray = JSON.stringify([
                        mainPattern,
                        '!' + excludeUnderscore,
                        ...finalExcludes
                    ]);

                    const rawGlobArray = JSON.stringify([
                        rawPattern1,
                        rawPattern2,
                        ...finalExcludes
                    ]);

                    const jsLazyGlobArray = JSON.stringify([
                        jsLazyPattern,
                        ...finalExcludes
                    ]);

                    return `(function(){` +
                        // 1. Standard modules (images, vue, json — NOT js)
                        `var _std=import.meta.glob(${mainGlobArray},{eager:true});` +
                        // 2. Raw text (md, html, css, js — everything as text)
                        `var _r=import.meta.glob(${rawGlobArray},{eager:true,query:"?raw",import:"default"});` +
                        // 3. Lazy JS modules (for on-demand Vue component loading)
                        `var _lazy=import.meta.glob(${jsLazyGlobArray},{eager:false});` +
                        // Build merged map + separate lazy map
                        `var _prefix=${JSON.stringify(glob)};` +
                        `var _m={};` +
                        `var _lazyMap={};` +
                        // First: add all standard entries
                        `Object.keys(_std).forEach(function(k){` +
                        `var nk=k.indexOf(_prefix)===0?"./"+k.slice(_prefix.length):k;` +
                        `_m[nk]=_std[k]` +
                        `});` +
                        // Then: add raw entries (wrap as {default: text}), don't overwrite standard
                        `Object.keys(_r).forEach(function(k){` +
                        `var nk=k.indexOf(_prefix)===0?"./"+k.slice(_prefix.length):k;` +
                        `if(!_m[nk]){_m[nk]={default:_r[nk]||_r[k]}}` +
                        `});` +
                        // Store lazy importers in separate map (avoids frozen object issue)
                        `Object.keys(_lazy).forEach(function(k){` +
                        `var nk=k.indexOf(_prefix)===0?"./"+k.slice(_prefix.length):k;` +
                        `_lazyMap[nk]=_lazy[k]` +
                        `});` +
                        // Build context function
                        `function _c(k){if(!(k in _m)){throw new Error(\"Cannot find module '\"+k+\"'\")}return _m[k]}` +
                        `_c.keys=function(){return Object.keys(_m)};` +
                        // rawSource: returns raw text for code display
                        `_c.rawSource=function(k){` +
                        `var nk=k;` +
                        `var rk=k.indexOf("./")===0?_prefix+k.slice(2):k;` +
                        `return _r[rk]||_r[nk]||_r[k]||null` +
                        `};` +
                        // lazyImport: returns Promise resolving to JS module (for Vue components)
                        `_c.lazyImport=function(k){` +
                        `var norm=function(p){return p.replace(/\\/\\//g,'/').replace(/^\\.\\//,'')};` +
                        `var nk=norm(k);` +
                        `var fn=_lazyMap[k]||_lazyMap["./"+nk]||_lazyMap[nk]||_lazyMap[_prefix+nk]||_lazyMap["./"+_prefix+nk];` +
                        `if(!fn){` +
                        `  Object.keys(_lazyMap).forEach(function(lk){ if(norm(lk)===nk) fn=_lazyMap[lk] });` +
                        `}` +
                        `if(!fn && k.indexOf(_prefix)===0) fn=_lazyMap["./"+k.slice(_prefix.length)];` +
                        `if(!fn) console.warn("WBC lazyImport: could not find '"+k+"' in", Object.keys(_lazyMap));` +
                        `return fn?fn():null` +
                        `};` +
                        `return _c` +
                        `})()`;
                }
            );

            if (transformed !== code) {
                return { code: transformed, map: null };
            }
        }
    };
}

/**
 * Plugin 2: Raw file loader
 * Handles direct imports of raw files (not via require.context)
 */
function rawFileLoaderPlugin() {
    return {
        name: 'wbc-ui2:raw-file-loader',
        enforce: 'pre',
        transform(code, id) {
            // Skip files already loaded with ?raw query
            if (id.includes('?raw')) return null;

            // Exclude index.html (Vite entry point) from raw transformation
            if (id.endsWith('index.html')) return null;

            // Exclude public directory files so they are served verbatim by Vite's static file server
            if (id.includes('/public/')) return null;

            const isRawExt = RAW_EXTENSIONS_RE.test(id);
            const isDoubleUnderscore = DOUBLE_UNDERSCORE_RE.test(id);
            if (isRawExt || isDoubleUnderscore) {
                const json = JSON.stringify(code);
                return {
                    code: `export default ${json}`,
                    map: null
                };
            }
        }
    };
}

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function monorepoDevConfigPlugin() {
    return {
        name: 'wbc-ui2:monorepo-dev-config',
        config(config, env) {
            let pluginDir;
            try {
                pluginDir = path.dirname(fileURLToPath(import.meta.url));
            } catch (e) {
                pluginDir = __dirname;
            }

            const coreSrcPath = path.resolve(pluginDir, './src');
            if (!fs.existsSync(coreSrcPath)) return null;

            // Dependencies are resolved from the common monorepo root or root node_modules.
            // Plugin lives at packages/wb-core/core/, so monoRoot = packages/
            const monoRoot = path.resolve(pluginDir, '../../');
            const rootNodeModules = path.resolve(monoRoot, '../node_modules');

            const DEPS = [
                'echarts', 'mermaid', 'leaflet',
                'highlight.js', '@guolao/vue-monaco-editor', 'html2pdf.js',
                'pdfjs-dist', 'vuetify', 'lz-string', 'markdown-it',
                'vue-doc-preview', '@vue-office/excel',
                '@vue-office/docx',
                'prettier',
                'vue2-leaflet'
            ];

            const depAliases = {};
            // Only deps that ACTUALLY resolve get force-listed in optimizeDeps.include
            // below. An app that doesn't install a heavy sibling dep (e.g. wb-press docs
            // never pull pdfjs-dist / @vue-office/* / vue-doc-preview) would otherwise get
            // Vite's "Cannot optimize dependency: X, present in optimizeDeps.include"
            // warning for every unresolved entry. Aliases are still registered for all
            // DEPS (harmless when never imported); pre-bundling is gated on resolution.
            const resolvedDeps = new Set();
            DEPS.forEach(d => {
                try {
                    depAliases[d] = path.dirname(require.resolve(`${d}/package.json`));
                    resolvedDeps.add(d);
                } catch (e) {
                    depAliases[d] = path.resolve(rootNodeModules, d);
                }
            });

            // ── Build the alias list ──
            // Each package needs TWO aliases:
            //   1. Exact match (RegExp):  import X from '@wbc-ui2/table'     → wb-table/src/index.js
            //   2. Prefix match (string): import Y from '@wbc-ui2/table/src/WBTable.js' → wb-table/src/WBTable.js
            const WBC_PACKAGES = {
                '@wbc-ui2/core':       'wb-core',
                '@wbc-ui2/code':       'wb-code',
                '@wbc-ui2/js':         'wb-js',
                '@wbc-ui2/gis':        'wb-gis',
                '@wbc-ui2/chart':      'wb-chart',
                '@wbc-ui2/mermaid':    'wb-mermaid',
                '@wbc-ui2/latex':      'wb-latex',
                '@wbc-ui2/dataviewer': 'wb-dataviewer',
                '@wbc-ui2/alert':      'wb-alert',
                '@wbc-ui2/wiki-obj':   'wbc-wiki-obj',
                '@wbc-ui2/office':     'wb-office',
            };

            const wbcAliases = [];
            for (const [pkg, dir] of Object.entries(WBC_PACKAGES)) {
                const escaped = pkg.replace(/[/]/g, '\\/');
                let basePath = path.resolve(monoRoot, `${dir}/core`);
                let indexFile = path.resolve(monoRoot, `${dir}/core/src/index.js`);
                
                if (pkg === '@wbc-ui2/js') {
                    basePath = path.resolve(monoRoot, `../tools/wb-js/src`);
                    indexFile = path.resolve(monoRoot, `../tools/wb-js/src/index.js`);
                }
                
                // 1. Exact match → core/src/index.js (for: import X from '@wbc-ui2/code')
                wbcAliases.push({ find: new RegExp(`^${escaped}$`), replacement: indexFile });
                // 2. Prefix match → package's core dir (for: import Y from '@wbc-ui2/code/src/WBCode.js')
                wbcAliases.push({ find: pkg, replacement: basePath });
            }

            // Add external dependency aliases + specific subpath overrides
            wbcAliases.push(
                ...Object.keys(depAliases).map(k => ({ find: k, replacement: depAliases[k] })),
                { find: 'vuetify/lib', replacement: path.resolve(rootNodeModules, 'vuetify/lib') },
                { find: 'lodash/debounce', replacement: path.resolve(rootNodeModules, 'lodash/debounce') },
            );


            // ── MUTATE config in-place to avoid merge conflicts ──
            // Vite's mergeConfig can overwrite resolve.alias if the app also defines it.
            // By mutating directly, we guarantee the aliases are applied.
            config.resolve = config.resolve || {};
            
            // Convert existing alias object to array format if needed
            const existingAliases = config.resolve.alias || {};
            let aliasArray = [];
            if (Array.isArray(existingAliases)) {
                aliasArray = existingAliases;
            } else if (typeof existingAliases === 'object') {
                aliasArray = Object.keys(existingAliases).map(k => ({
                    find: k,
                    replacement: existingAliases[k]
                }));
            }
            // Prepend our aliases (higher priority) before existing ones
            config.resolve.alias = [...wbcAliases, ...aliasArray];
            config.resolve.dedupe = ['vue', 'vuetify', 'vuex', 'vue-router'];

            // ── Prettier v3 subpath aliases ──
            // Prettier v3 renamed parser-* to plugins/*. Add aliases for legacy imports.
            let prettierDir;
            try {
                prettierDir = path.dirname(require.resolve('prettier/package.json'));
            } catch (e) {
                prettierDir = path.resolve(rootNodeModules, 'prettier');
            }
            const prettierSubpathAliases = [
                { find: 'prettier/parser-html', replacement: path.resolve(prettierDir, 'plugins/html.mjs') },
                { find: 'prettier/parser-babel', replacement: path.resolve(prettierDir, 'plugins/babel.mjs') },
                { find: 'prettier/parser-postcss', replacement: path.resolve(prettierDir, 'plugins/postcss.mjs') },
                { find: 'prettier/parser-yaml', replacement: path.resolve(prettierDir, 'plugins/yaml.mjs') },
                { find: 'prettier/parser-typescript', replacement: path.resolve(prettierDir, 'plugins/typescript.mjs') },
                { find: 'prettier/standalone', replacement: path.resolve(prettierDir, 'standalone.mjs') },
            ];

            // Prepend prettier subpath aliases (before the generic 'prettier' alias)
            config.resolve.alias = [...prettierSubpathAliases, ...config.resolve.alias];

            // Return remaining config to be merged normally
            return {
                define: {
                    'process.env.NODE_ENV': JSON.stringify('development'),
                    'process.env.VUE_APP_BUILD_MODE': JSON.stringify('local'),
                    'process.env.IS_ROLLUP': JSON.stringify('false'),
                    'process.env.BASE_URL': JSON.stringify('/'),
                    'global': 'globalThis',
                    '__WBC_PRO__': JSON.stringify(process.env.WBC_PRO === 'true'),
                    '__WBC_DEV__': JSON.stringify(process.env.WBC_PRO === undefined),
                },
                assetsInclude: ['**/*.xlsx', '**/*.xls', '**/*.doc', '**/*.docx', '**/*.ppt', '**/*.pptx', '**/*.zip', '**/*.pdf'],
                optimizeDeps: {
                    entries: ['index.html'],
                    include: [...DEPS.filter(d => resolvedDeps.has(d) && !['vuetify', 'prettier'].includes(d)), 'vuetify/lib', 'lodash/debounce']
                },
                css: {
                    preprocessorOptions: {
                        sass: {
                            api: 'legacy',
                            quietDeps: true,
                            silenceDeprecations: ['slash-div']
                        },
                        scss: {
                            api: 'legacy',
                            quietDeps: true,
                            silenceDeprecations: ['slash-div']
                        }
                    }
                },
                server: {
                    fs: {
                        allow: [
                            path.resolve(pluginDir, './'),
                            path.resolve(monoRoot),
                            path.resolve(monoRoot, '../../'),
                        ]
                    },
                    watch: {
                        ignored: ['**/dist-cli/**', '**/dist-vite/**', '**/dist-webpack/**', '**/node_modules/**']
                    }
                }
            };
        }
    }
}

export function wbcVitePlugin(options = {}) {
    return [
        requireContextPlugin(options),
        rawFileLoaderPlugin(),
        monorepoDevConfigPlugin(),
    ];
}

export { requireContextPlugin, rawFileLoaderPlugin };
export default wbcVitePlugin;
