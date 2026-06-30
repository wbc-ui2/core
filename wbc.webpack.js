const path = require('path');
const fs = require('fs');

module.exports = {
    chainWebpack: (config) => {
        // 1. Basic Rules
        if (!config.module.rules.has('vue')) {
            config.module.rule('vue').test(/\.vue$/).use('vue-loader').loader('vue-loader').end();
        }
        if (!config.module.rules.has('js')) {
            config.module.rule('js')
                .test(/\.(js|jsx)$/)
                .exclude.add(/node_modules/).end()
                .use('babel-loader')
                .loader(require.resolve('babel-loader'))
                .options({ 
                    presets: [
                        [require.resolve('@babel/preset-env'), { modules: false }],
                        require.resolve('@babel/preset-react')
                    ]
                });
        }
        config.module.rule('mjs-interop').test(/\.m?js/).merge({ resolve: { fullySpecified: false } });

        // 2. Asset Rules (REPAIRED: Support for images/videos/fonts) 🛡️🚀
        config.module.rule('assets')
            .test(/\.(png|jpe?g|gif|svg|webp|avif|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$/i)
            .type('asset/resource')
            .set('generator', { filename: 'assets/[name].[hash:8][ext]' });

        // 3. Style Rules
        const styleRules = [
            { name: 'css', test: /\.css$/ },
            { name: 'scss', test: /\.scss$/, loader: 'sass-loader', options: {} },
            { name: 'sass', test: /\.sass$/, loader: 'sass-loader', options: { sassOptions: { indentedSyntax: true } } }
        ];

        styleRules.forEach(r => {
            if (!config.module.rules.has(r.name)) {
                const rule = config.module.rule(r.name).test(r.test);
                rule.use('style-loader').loader(require.resolve('style-loader')).end();
                rule.use('css-loader').loader(require.resolve('css-loader')).end();
                rule.use('postcss-loader').loader(require.resolve('postcss-loader')).end();
                if (r.loader) {
                    rule.use(r.name + '-loader').loader(require.resolve(r.loader)).options({
                        ...r.options,
                        sassOptions: {
                           ...(r.options.sassOptions || {}),
                           api: 'modern-compiler',
                           silenceDeprecations: ['slash-div']
                        }
                    }).end();
                }
            }
        });

        // 4. Raw loaders
        config.module.rule('wbc-raw').test(/\.(txt|py|php|sh|rs|md|tex|html|xml|yaml|yml)$/).exclude.add(/index\.html/).end().use('raw-loader').loader(require.resolve('raw-loader')).end();
        config.module.rule('wbc-html-snippets').test(/sampleHtml\.js$/).use('raw-loader').loader(require.resolve('raw-loader')).end();

        // 5. Aliases ⚓️
        const projectRoot = process.cwd();
        const localR = (p) => path.resolve(projectRoot, p);
        const libDir = __dirname;
        const monoRoot = path.dirname(libDir);

        const resolveSafe = (m) => {
           try { return path.dirname(require.resolve(`${m}/package.json`)); } catch(e) { return localR(`node_modules/${m}`); }
        };

        config.resolve.alias
          .set('@', projectRoot)
          .set('@src', localR('src'))
          .set('vue$', require.resolve('vue/dist/vue.esm.js'))
          .set('vue', resolveSafe('vue'))
          .set('vuetify$', resolveSafe('vuetify'))
          .set('wbc-ui2', libDir)
          .set('@wbc-ui2/code', path.join(monoRoot, 'wb-code'))
          .set('@wbc-ui2/chart', path.join(monoRoot, 'wb-chart'))
          .set('@wbc-ui2/latex', path.join(monoRoot, 'wb-latex'))
          .set('@wbc-ui2/mermaid', path.join(monoRoot, 'wb-mermaid'))
          .set('@wbc-ui2/wiki-obj', path.join(monoRoot, 'wbc-wiki-obj'));

        config.resolve.modules
          .add(localR('node_modules'))
          .add(path.join(monoRoot, 'node_modules'))
          .add('node_modules');
          
        // Avoid HMR conflicts in monorepo if explicitly requested
        if (config.devServer.has('hot')) {
           // If HMR is still causing browser crashes, we force liveReload instead
           // config.devServer.hot(false).liveReload(true);
        }
    }
};
