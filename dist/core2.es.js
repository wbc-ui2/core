import Hn from "vue";
import Fu from "vuetify/lib";
import mu from "vuex";
import { BootstrapVue as $c, IconsPlugin as Wc } from "bootstrap-vue";
function zc(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const u = Object.getOwnPropertyDescriptor(n, i);
          u && Object.defineProperty(e, i, u.get ? u : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const ms = ["en", "fr", "ar"], ve = {
  IMAGE: [".apng", ".avif", ".ico", ".gif", ".tiff", ".webp", ".jpeg", ".png", ".jpg"],
  VIDEO: [".mp4", ".avi", ".mov", ".wmv", ".avchd", ".flv", ".f4v", ".swf", ".mkv", ".webm", ".html5", ".mpeg-2"],
  AUDIO: [".mp3", ".wav", ".aiff", ".flac", ".m4a", ".ogg", ".aac", ".wma", ".ape", ".realaudio"],
  OFFICE: {
    DOCX: [".docx", ".Docx"],
    XLSX: [".xlsx", ".Xlsx"],
    GENERAL: [".doc", ".xls", ".md", ".txt", ".pptx"]
  },
  CODE: [".py", ".php", ".c", ".sh", ".rs", ".cpp"],
  TEXT: [".txt", ".tex", ".md", ".html"],
  STYLE: [".css", ".scss", ".sass"]
}, Uc = ["//www.youtube", "//youtube", "//www.youtu.be", "//youtu.be"], ii = {
  md: "markdown",
  txt: "text",
  py: "python",
  js: "javascript",
  ts: "typescript",
  json: "json",
  html: "markup",
  css: "css",
  scss: "css",
  sass: "css",
  sh: "bash",
  tex: "latex",
  rs: "rust",
  c: "c",
  cpp: "cpp",
  vue: "html",
  php: "php"
}, Hc = (e, t) => {
  if (!e || !t) return !1;
  const r = e.split("?")[0].split("#")[0].toLowerCase();
  return t.some((n) => r.endsWith(n.toLowerCase()));
}, qc = (e) => e.startsWith("http://") || e.startsWith("https://") ? "online" : e.startsWith("/") ? "served" : e.startsWith("./") || e.startsWith("../") ? "local" : "text", Gc = (e, t, r = {}) => {
  const n = {
    attrs: { title: t, src: t },
    class: "container",
    ref: "rawHtml",
    ...r
  };
  return t.includes(".ico") && (n.attrs.alt = "Icon"), e("img", n);
}, Kc = (e, t, r = {}) => e("video", {
  attrs: {
    title: t,
    src: t,
    controls: !0,
    frameborder: "0",
    allow: "autoplay; encrypted-media",
    allowfullscreen: !0,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerpolicy: "strict-origin-when-cross-origin"
  },
  class: "container",
  ref: "rawHtml",
  ...r
}), Zc = (e, t, r = {}) => e("audio", {
  attrs: {
    title: t,
    src: t,
    controls: !0,
    autoplay: !1
  },
  class: "container",
  style: {
    height: "revert",
    width: "revert"
  },
  ref: "rawHtml",
  ...r
}), Yc = (e, t, r = {}) => {
  const n = t.replace(".com/", ".com/embed/").replace(".be/", "be.com/embed/");
  return e("iframe", {
    class: "video-stream html5-main-video container",
    attrs: {
      title: t,
      src: n,
      controls: !0,
      frameborder: "0",
      allow: "autoplay; encrypted-media",
      allowfullscreen: !0,
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin"
    },
    ref: "rawHtml",
    ...r
  });
};
function Jc(e) {
  if (!e || typeof e != "object") return e;
  const { scope: t, comp: r, ...n } = e;
  return n;
}
function Xc(e) {
  return typeof e != "string" ? !1 : e.replace(/^</, "").replace(/>$/, "").includes(",");
}
function va(e) {
  if (typeof e != "string" || !e.startsWith("<") || !e.endsWith(">")) return null;
  const r = e.slice(1, -1).split(",").map((a) => a.trim()), n = r[0].replace("~", ""), i = r[1] || "", u = r[2] || "", s = {};
  return i && (s.class = i), u && (s.to = u), { comp: n, options: s, __tilde: r[0].includes("~") };
}
function Qc(e) {
  if (!e || typeof e != "object" || typeof e.comp != "string") return null;
  const t = e.options || {};
  if (Object.keys(t).filter((s) => !["class", "to"].includes(s)).length) return null;
  const n = typeof t.class == "string" ? t.class : "", i = typeof t.to == "string" ? t.to : "", u = [e.comp];
  return (n || i) && u.push(n), i && u.push(i), `<${u.join(",")}>`;
}
function el(e, t, r) {
  const n = va(e);
  if (!n) return e;
  const i = typeof (t == null ? void 0 : t.class) == "string" ? t.class : "", u = n.options.class || "", s = r ? i || u : [u, i].filter(Boolean).join(" "), a = {
    comp: (n.__tilde ? "~" : "") + n.comp,
    options: {
      ...r ? {} : n.options,
      ...t,
      ...s ? { class: s } : {}
    }
  };
  return delete a.options.scope, a;
}
function tl(e) {
  let t = (e == null ? void 0 : e.switch) === !0 ? (e == null ? void 0 : e.hComp) || (e == null ? void 0 : e.comp) : (e == null ? void 0 : e.comp) || (e == null ? void 0 : e.hComp);
  return typeof t == "string" ? t.replace("~", "").replace("*", "").replace("<", "").replace(">", "") : t;
}
function rl(e, t) {
  var u, s, a;
  const r = t || this;
  let n = (e == null ? void 0 : e.switch) === !0 ? (e == null ? void 0 : e.hOptions) || (e == null ? void 0 : e.options) : (e == null ? void 0 : e.options) || (e == null ? void 0 : e.hOptions);
  if (!n)
    return e;
  n = {
    ...n,
    ...r.menu ? (u = n == null ? void 0 : n.menu) == null ? void 0 : u.activeOptions : (s = n == null ? void 0 : n.menu) != null && s.active ? (a = n == null ? void 0 : n.menu) == null ? void 0 : a.activeRootOptions : {}
  };
  let i = [];
  return Array.isArray(n == null ? void 0 : n.rules) ? i = ((n == null ? void 0 : n.rules) || []).map((o) => {
    var c;
    return (c = r.validators) != null && c[o] ? (f) => r.validators[o](f, { lg: r.lang }) : o;
  }) : typeof (n == null ? void 0 : n.rules) == "object" && (i = Object.entries(n == null ? void 0 : n.rules).map(([o, c]) => {
    var f, p;
    return (f = r.validators) != null && f[o] && typeof c == "function" ? c : (p = r.validators) != null && p[o] && typeof c == "object" ? (l) => r.validators[o](l, c) : (l) => r.validators[o](l, { lg: r.lang, message: c });
  })), typeof n != "object" || n === null || (n.props || (n.props = {}), i.length >= 1 && (n.props.rules = i), typeof (e == null ? void 0 : e.switch) == "boolean" ? r.itemListeners[(e == null ? void 0 : e.switchEvent) || "mouseenter"] = (o) => {
    e.switch = !e.switch;
  } : e instanceof Object && (e.options = e[(e == null ? void 0 : e.switch) || "options"])), r.objLang(n, r.lang);
}
function nl(e, t, r) {
  const n = r || this;
  let i = (e == null ? void 0 : e.switch) === !0 ? (e == null ? void 0 : e.hHeader) || (e == null ? void 0 : e.header) : (e == null ? void 0 : e.header) || (e == null ? void 0 : e.hHeader);
  return i ? t("WBC", {
    keyy: `wbc-key-header-${n.computedKey}`,
    props: { item: i }
  }) : null;
}
function il(e, t, r) {
  const n = r || this;
  let i = (e == null ? void 0 : e.switch) === !0 ? (e == null ? void 0 : e.hFooter) || (e == null ? void 0 : e.footer) : (e == null ? void 0 : e.footer) || (e == null ? void 0 : e.hFooter);
  return i ? t("WBC", {
    keyy: `wbc-key-footer-${n.computedKey}`,
    props: { item: i }
  }) : null;
}
function ul(e, t, r) {
  var u, s, a, o;
  const n = r || this;
  let i = (e == null ? void 0 : e.switch) === !0 ? ((u = e == null ? void 0 : e.hOptions) == null ? void 0 : u.headers) || ((s = e == null ? void 0 : e.options) == null ? void 0 : s.headers) : ((a = e == null ? void 0 : e.options) == null ? void 0 : a.headers) || ((o = e == null ? void 0 : e.hOptions) == null ? void 0 : o.headers);
  return i ? n.toWBC_(i, t) : null;
}
function sl(e, t, r) {
  var u, s, a, o;
  const n = r || this;
  let i = (e == null ? void 0 : e.switch) === !0 ? ((u = e == null ? void 0 : e.hOptions) == null ? void 0 : u.footers) || ((s = e == null ? void 0 : e.options) == null ? void 0 : s.footers) : ((a = e == null ? void 0 : e.options) == null ? void 0 : a.footers) || ((o = e == null ? void 0 : e.hOptions) == null ? void 0 : o.footers);
  return i ? n.toWBC_(i, t) : null;
}
function al(e, t) {
  var n, i, u, s;
  return (t || this).isPlainObject(e) ? (e == null ? void 0 : e.switch) === !0 ? ((n = e == null ? void 0 : e.hOptions) == null ? void 0 : n.html) || ((i = e == null ? void 0 : e.options) == null ? void 0 : i.html) : ((u = e == null ? void 0 : e.options) == null ? void 0 : u.html) || ((s = e == null ? void 0 : e.hOptions) == null ? void 0 : s.html) : e;
}
const ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _getPathType: qc,
  _matchesFileType: Hc,
  _mergeTagWithOptions: el,
  _renderAudio: Zc,
  _renderImage: Gc,
  _renderVideo: Kc,
  _renderYouTube: Yc,
  _stripScope: Jc,
  _tagHasOptions: Xc,
  _tagStrToWBC: va,
  _wbcObjToTagStr: Qc,
  _wbcOptions: rl,
  comp: tl,
  globalFooterVN: il,
  globalHeaderVN: nl,
  html: al,
  insideFootersVN: sl,
  insideHeadersVN: ul
}, Symbol.toStringTag, { value: "Module" }));
function cl(e, t, r) {
  return typeof t == "boolean" ? r("VCheckbox", {
    ref: "rawHtml",
    keyy: `bool-${e.computedKey}-${Number(t)}`,
    props: {
      value: t
    },
    on: {
      change: (n) => {
        t = !n;
      }
    }
  }) : typeof t == "number" ? r("span", {
    ref: "rawHtml"
  }, [t]) : null;
}
function ll(e, t, r) {
  let n;
  return ["tracker", "init", "update", "init0"].includes(t == null ? void 0 : t.name) ? n = null : (t == null ? void 0 : t.length) === 0 ? n = r(t) : (t == null ? void 0 : t.length) === 1 ? n = t(r) : n = [
    r("div", { class: "red--text" }, [
      "Function got more than 1 arguments (Expected 0 or 1 argument)",
      r("div", {}, [t.toString()])
    ])
  ], n;
}
function ui(e, t) {
  const r = e.replace(/^WB/, "wb-").toLowerCase(), n = `#${e}Missing: "${r}" not registered`;
  return console.error(`[WBC-UI2] ${e} is not registered. Install the "${r}" sub-package.`), t(
    "div",
    {
      style: {
        backgroundColor: "#F8F9FA",
        color: "red",
        width: "100%",
        height: "100%",
        margin: "10px"
      }
    },
    [n]
  );
}
function si(e) {
  if (typeof e != "string") return e;
  const t = e.match(/^﻿?---\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n?/);
  return !t || !/^[ \t]*[A-Za-z_][\w-]*[ \t]*:/m.test(t[1]) ? e : e.slice(t[0].length);
}
function ar(e, t, r) {
  return Object.entries((r == null ? void 0 : r.slots) || {}).map(
    ([n, i]) => t("template", { slot: n }, [
      t("WBC", {
        key: `key-slots-${n}-${e.computedKey}`,
        props: { item: i }
      })
    ])
  );
}
function fl(e, t, r, n, i, { insideHeadersVN: u, insideFootersVN: s, extChildren: a }) {
  return t(
    "div",
    {
      ref: "rawHtml",
      class: "markdown-body " + (n == null ? void 0 : n.class) || "",
      ...n,
      on: e.itemListeners,
      key: `main-key-${e.computedKey}`
    },
    [
      u,
      (i == null ? void 0 : i.children) || i,
      t("WBHtml", {
        ...(n == null ? void 0 : n.MDOptions) || {},
        props: {
          html: e.$md.render(si(n == null ? void 0 : n.src) || "")
        }
      }),
      ...ar(e, t, n),
      a,
      s
    ]
  );
}
function pl(e, t, r, n, i, { insideHeadersVN: u, insideFootersVN: s, extChildren: a }) {
  var o, c;
  return e.$options.components.WBMermaid ? t(
    "div",
    {
      ref: "rawHtml",
      class: "markdown-body " + (n == null ? void 0 : n.class) || "",
      ...n,
      on: e.itemListeners
    },
    [
      u,
      (i == null ? void 0 : i.children) || i,
      t("WBMermaid", {
        ref: "rawHtml",
        props: {
          src: (n == null ? void 0 : n.src) || ((o = n == null ? void 0 : n.props) == null ? void 0 : o.src) || "",
          wbcObj: (n == null ? void 0 : n.wbcObj) || ((c = n == null ? void 0 : n.props) == null ? void 0 : c.wbcObj) || "",
          ...n || {}
        },
        on: e.itemListeners
      }),
      ...ar(e, t, n),
      a,
      s
    ]
  ) : ui("WBMermaid", t);
}
function hl(e, t, r, n, i, { insideHeadersVN: u, insideFootersVN: s, extChildren: a }) {
  return e.$options.components.WBChart ? t(
    "div",
    {
      ref: "rawHtml",
      ...n,
      on: e.itemListeners
    },
    [
      u,
      (i == null ? void 0 : i.children) || i,
      t("WBChart", {
        ...n || {},
        props: {
          src: n.src || {},
          ...(n == null ? void 0 : n.props) || {}
        },
        on: e.itemListeners
      }),
      ...ar(e, t, n),
      a,
      s
    ]
  ) : ui("WBChart", t);
}
function dl(e, t, r, n, i, { insideHeadersVN: u, insideFootersVN: s, extChildren: a }) {
  var o;
  return e.$options.components.WBCode ? t(
    "div",
    {
      ref: "rawHtml",
      ...n,
      on: e.itemListeners,
      key: `key-${JSON.stringify(r)}`
    },
    [
      u,
      (i == null ? void 0 : i.children) || i,
      t("WBCode", {
        props: {
          code: n.src || "",
          language: "markup",
          inline: !1,
          ...(n == null ? void 0 : n.props) || {}
        },
        class: `${(n == null ? void 0 : n.class) || ""} language-${((o = n == null ? void 0 : n.props) == null ? void 0 : o.lang) || "markup"}`
      }),
      ...ar(e, t, n),
      a,
      s
    ]
  ) : ui("WBCode", t);
}
function Vi(e, t, r, n, i, { insideHeadersVN: u, insideFootersVN: s, extChildren: a }) {
  var c;
  if (!e.$options.components.WBLatex)
    return ui("WBLatex", t);
  let o;
  return o = t("WBLatex", {
    props: {
      expression: (n == null ? void 0 : n.html) || "",
      ...(n == null ? void 0 : n.props) || {}
    },
    on: e.itemListeners
  }), t(
    ((c = n == null ? void 0 : n.props) == null ? void 0 : c["display-mode"]) == !0 ? "div" : "span",
    {
      ref: "rawHtml",
      ...n
    },
    [
      u,
      o,
      ...ar(e, t, n),
      a,
      s
    ]
  );
}
function ml(e, t, r, n, i, { insideHeadersVN: u, insideFootersVN: s, extChildren: a }) {
  return t(
    "span",
    {
      ref: "rawHtml"
    },
    [
      u,
      t(
        "VIcon",
        {
          ref: "iconHtml",
          ...n,
          on: e.itemListeners,
          key: `icon-${e.computedKey}`
        },
        [
          n == null ? void 0 : n.html
        ]
      ),
      a,
      s
    ]
  );
}
const bl = {
  MD: fl,
  WBMermaid: pl,
  WBChart: hl,
  WBCode: dl,
  tex: Vi,
  latex: Vi,
  WBLatex: Vi,
  VIcon: ml
};
function qn(e, t, r, n = {}) {
  let i = {
    language: "php",
    topBar: null,
    codeBar: [["code|yellow", "filename"], ["download", "copy"]],
    extra: "code"
  }, u = fetch(r);
  e.content.promise = u.then((s) => {
    var o, c, f, p;
    const a = s.headers.get("Content-Type") || "";
    if (e.content.response = s, a.includes("application/json"))
      return s.json().then((l) => {
        e.fileContent = l != null && l.WBC ? t("WBC", { props: { item: l == null ? void 0 : l.WBC }, ...n }) : t("JsonViewer", { props: { value: l }, ...n });
      });
    if (a.includes("image/"))
      e.fileContent = t("img", {
        attrs: { src: r },
        class: "container",
        style: {},
        ref: "rawHtml",
        ...n
      });
    else if (a.includes("video/"))
      e.fileContent = t("video", {
        attrs: {
          title: r,
          src: r,
          controls: !0,
          frameborder: "0",
          allowfullscreen: !0,
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          referrerpolicy: "strict-origin-when-cross-origin"
        },
        class: "container",
        style: { width: "auto" },
        ref: "rawHtml",
        ...n
      });
    else if (a.includes("audio/"))
      e.fileContent = t("audio", {
        attrs: {
          title: r,
          src: r,
          controls: !0,
          autoplay: !1
        },
        class: "container",
        style: { height: "revert", width: "revert" },
        ref: "rawHtml",
        ...n
      });
    else if (["/html"].some((l) => a.includes(l)) && r.includes("html") && (s != null && s.data) && !r.includes("?src"))
      e.fileContent = t("WBHtml", {
        ref: "rawHtml",
        ...n,
        props: { html: s.data }
      });
    else if ((o = r.toLowerCase()) != null && o.endsWith(".xlsx") || (c = r.toLowerCase()) != null && c.endsWith(".xls") || a.includes("excel") || a.includes("application/excel"))
      e.fileContent = t("VueOfficeExcel", {
        props: { src: r },
        class: "container",
        style: {},
        ref: "rawHtml",
        ...n
      });
    else {
      if (r.includes("html") || (f = r.toLowerCase()) != null && f.endsWith(".docx") || (p = r.toLowerCase()) != null && p.endsWith(".doc") || a.includes("msword") || a.includes("officedocument"))
        return s.text().then((l) => {
          e.fileContent = t("WBHtml", {
            title: r,
            props: { html: l },
            ...n
          });
        });
      if (a.includes("application/pdf"))
        e.fileContent = t("pdf", {
          props: { src: r },
          class: "container",
          style: {},
          ref: "rawHtml",
          ...n
        });
      else return a.includes("php") ? s.text().then((l) => {
        e.fileContent = e.renderDefaultWbcode(t, l, i);
      }) : a.includes("text/") || a.includes("application/javascript") || a.includes("application/x-python") || a.includes("application/x-tex") || a.includes("application/x-rust") || a.includes("application/x-sh") || e._matchesFileType(r, ve.CODE) || e._matchesFileType(r, ve.TEXT) || e._matchesFileType(r, ve.STYLE) || e._matchesFileType(r, [".js", ".ts", ".json", ".vue", ".jsx", ".tsx", ".mmd"]) ? s.text().then((l) => {
        var w;
        e.source = l;
        const h = ((w = r.split(".").pop()) == null ? void 0 : w.toLowerCase()) || "";
        if (l.trim().toLowerCase().startsWith("<!doctype html") && h !== "html" && h !== "htm") {
          e.fileContent = t("div", { class: "my-1 pa-1 red--text font-weight-bold" }, `#FileError: "${r}" not found (SPA fallback detected)`);
          return;
        }
        const _ = ii[h] || "text";
        h === "md" && e.$md ? e.fileContent = t("WBHtml", {
          props: { html: e.$md.render(si(l) || "") },
          ...n
        }) : (i.language = _, i.codeBar = [[`${_}`], ["download", "copy"]], i.extra = r, e.fileContent = t("WBCode", {
          props: {
            item: {
              code: l,
              language: _,
              extra: r,
              ...i
            }
          },
          ...n
        }));
      }) : s.text().then((l) => {
        l && l.trim() ? (i.language = "text", e.fileContent = e.renderDefaultWbcode(t, l, i)) : e.fileContent = t(
          "div",
          {
            style: {
              backgroundColor: "#F8F9FA",
              color: "red",
              width: "100%",
              height: "100%",
              margin: "10px"
            },
            ...n
          },
          `${r}`.startsWith("/") || `${r}`.startsWith("url://") || `${r}`.startsWith("urls://") ? [`# Url/Serving Error: WBC can not load/serve "${r}"`] : [`# Path/Type Error: WBC can not load this file ${r}`]
        );
      });
    }
  }).catch((s) => {
    e.fileContent = t("iframe", {
      attrs: {
        src: r,
        controls: !0,
        frameborder: "0",
        allow: "autoplay; encrypted-media",
        allowfullscreen: !0,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin"
      },
      class: "container white",
      style: {
        resize: "both",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        border: 0
      },
      ref: "rawHtml",
      ...n
    });
  });
}
function bs(e) {
  if (!e || typeof e != "object" || Array.isArray(e) || e.comp !== void 0 || e.options !== void 0) return !1;
  const t = ["comp", "options", "header", "footer", "hOptions", "hHeader", "hFooter", "output", "switch", "wrap", "to", "asChild"];
  for (const r of Object.keys(e)) {
    if (t.includes(r)) return !1;
    const n = e[r];
    if (typeof n == "string" && n.startsWith("<") && n.endsWith(">") && n.includes("~")) return !1;
  }
  return Object.keys(e).length > 0;
}
function In(e, t) {
  if (typeof t != "string" || t.startsWith("<") || t.includes("|") || t.includes("__")) return !1;
  const r = e._getPathType(t);
  return !["online", "served", "local", "url"].includes(r);
}
function gl(e, t, r) {
  var i, u, s, a, o, c, f, p, l, h, d, _, w, C, D, F, S, E, k, O, L, Y, Q, W, ee, ne, P, y, x;
  let n;
  if (typeof (t == null ? void 0 : t[0]) == "string" && ((i = t == null ? void 0 : t[0]) != null && i.startsWith("<")) && ((u = t == null ? void 0 : t[0]) != null && u.endsWith(">"))) {
    let A, T, R, B = t == null ? void 0 : t[0].replace("<", "").replace(">", "").split(",");
    A = B == null ? void 0 : B[0].replace("<", "").replace(">", ""), T = e.strToObj(B == null ? void 0 : B[1]), R = e.strToObj(B == null ? void 0 : B[2]), e.isNonEmpty(T) ? typeof T == "string" && (T = { class: T }) : T = {}, R && (T.to = R);
    let q = {
      comp: A,
      options: T
    };
    if ((s = t == null ? void 0 : t[0]) != null && s.includes("~")) {
      let $ = [], j = null;
      if (t.length > 1) {
        let U = t.length;
        for (let M = 1; M < t.length; M++)
          if (typeof t[M] == "string" && t[M].startsWith("<") && t[M].endsWith(">")) {
            U = M;
            break;
          }
        for (let M = 1; M < U; M++) {
          let X = t[M];
          if (In(e, X))
            $.push(X);
          else if (bs(X))
            for (const te of Object.keys(X))
              $.push(e.toWBC_(X[te], r));
          else
            $.push(e.toWBC_(X, r));
        }
        U < t.length && (j = t.slice(U));
      }
      const V = { ...T || {}, ref: "rawHtml" };
      delete V.to, n = r(
        A.replace("~", ""),
        V,
        [
          ...$,
          j ? e.toWBC_(j, r) : null
        ]
      ), e.isNonEmpty(R) && (n = r("WBLink", { props: { to: R, html: n } }));
    } else {
      let $ = A.replace("<", "").replace(">", "");
      n = t.slice(1).map((j, V) => {
        if (In(e, j))
          return r($, T || {}, [j]);
        if (Array.isArray(j)) {
          let U = j.map((M) => In(e, M) ? M : e.toWBC_(M, r));
          return r($, T || {}, U);
        }
        if (bs(j)) {
          let U = Object.keys(j).map((M) => {
            const X = j[M];
            return In(e, X) ? X : e.toWBC_(X, r);
          });
          return r($, T || {}, U);
        }
        return e.toWBC_(q, r, j);
      });
    }
  } else if (typeof ((a = t == null ? void 0 : t[0]) == null ? void 0 : a.comp) == "string" && ((c = (o = t == null ? void 0 : t[0]) == null ? void 0 : o.comp) != null && c.includes("~") || (p = (f = t == null ? void 0 : t[0]) == null ? void 0 : f.comp) != null && p.includes("*") || (h = (l = t == null ? void 0 : t[0]) == null ? void 0 : l.comp) != null && h.startsWith("<") && ((_ = (d = t == null ? void 0 : t[0]) == null ? void 0 : d.comp) != null && _.endsWith(">"))) || ["nested", "inherit", "adjacent"].includes(
    (C = (w = t == null ? void 0 : t[0]) == null ? void 0 : w.options) == null ? void 0 : C.disposition
  ) && ((F = (D = t == null ? void 0 : t[0]) == null ? void 0 : D.options) != null && F.hide)) {
    let A = [], T = e.clone(t == null ? void 0 : t[0]);
    ((E = (S = t == null ? void 0 : t[0]) == null ? void 0 : S.options) == null ? void 0 : E.disposition) == "nested" || (O = (k = t == null ? void 0 : t[0]) == null ? void 0 : k.comp) != null && O.includes("~") ? (t[0].comp.replace("<", "").replace(">", "").replace("~", ""), t[0].options.footers = t.length > 1 ? t.slice(1) : null, A = r("WBC", { props: { item: t[0], class: "brown" } })) : ((Y = (L = t == null ? void 0 : t[0]) == null ? void 0 : L.options) == null ? void 0 : Y.disposition) == "inherit" || (Q = T == null ? void 0 : T.comp) != null && Q.includes("*") ? t.slice(1).forEach((R, B) => {
      var q;
      if (e.isPlainObject(R)) {
        let $ = e.mergeObjects(T, R);
        A.push(
          r("WBC", {
            keyy: `wbc-key-arr-${B}-${e.computedKey}`,
            props: { item: $ }
          })
        );
      } else {
        let $ = {
          ...T,
          options: {
            ...(T == null ? void 0 : T.options) || {}
          }
        };
        $.options.html = [(q = $ == null ? void 0 : $.options) == null ? void 0 : q.html, R], $.comp = $.comp.replace("*", "").replace("<", "").replace(">", ""), A.push(
          r("WBC", {
            keyy: `wbc-key-arr-${e.computedKey}`,
            props: { item: $ }
          })
        );
      }
    }) : (((ee = (W = t == null ? void 0 : t[0]) == null ? void 0 : W.options) == null ? void 0 : ee.disposition) == "adjacent" || (P = (ne = t == null ? void 0 : t[0]) == null ? void 0 : ne.comp) != null && P.startsWith("<") && ((x = (y = t == null ? void 0 : t[0]) == null ? void 0 : y.comp) != null && x.endsWith(">"))) && (A = t.slice(1).map((R, B) => e.toWBC_(T, r, R))), n = A;
  } else
    n = [r("WBC", {
      ref: "rawHtml",
      keyy: `wbc-child-${e.computedKey}`,
      props: { item: t[0] }
    }), e.toWBC_(t.length > 0 ? t.slice(1) : null, r)];
  return n;
}
const ai = function(e) {
  return typeof e == "object" && e !== null && e.hasOwnProperty("context") && e.hasOwnProperty("tag");
}, yl = function(e) {
  if (typeof e != "string") return !1;
  const t = /^\d{4}-\d{2}-\d{2}$/;
  if (e.match(t) === null) return !1;
  const r = new Date(e), n = r.getTime();
  return typeof n != "number" || Number.isNaN(n) ? !1 : r.toISOString().startsWith(e);
};
function un(e) {
  return e == null || Array.isArray(e) && e.length === 0 || typeof e == "object" && Object.keys(e).length === 0 || typeof e == "string" && e.trim() === "" || e instanceof Set && e.size === 0;
}
function xl(e) {
  return !un(e);
}
function bu(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null && !(e instanceof Function);
}
var Fn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $i = { exports: {} }, gs;
function _l() {
  return gs || (gs = 1, (function(e) {
    var t = (function() {
      var r = String.fromCharCode, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", u = {};
      function s(o, c) {
        if (!u[o]) {
          u[o] = {};
          for (var f = 0; f < o.length; f++)
            u[o][o.charAt(f)] = f;
        }
        return u[o][c];
      }
      var a = {
        compressToBase64: function(o) {
          if (o == null) return "";
          var c = a._compress(o, 6, function(f) {
            return n.charAt(f);
          });
          switch (c.length % 4) {
            // To produce valid Base64
            default:
            // When could this happen ?
            case 0:
              return c;
            case 1:
              return c + "===";
            case 2:
              return c + "==";
            case 3:
              return c + "=";
          }
        },
        decompressFromBase64: function(o) {
          return o == null ? "" : o == "" ? null : a._decompress(o.length, 32, function(c) {
            return s(n, o.charAt(c));
          });
        },
        compressToUTF16: function(o) {
          return o == null ? "" : a._compress(o, 15, function(c) {
            return r(c + 32);
          }) + " ";
        },
        decompressFromUTF16: function(o) {
          return o == null ? "" : o == "" ? null : a._decompress(o.length, 16384, function(c) {
            return o.charCodeAt(c) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(o) {
          for (var c = a.compress(o), f = new Uint8Array(c.length * 2), p = 0, l = c.length; p < l; p++) {
            var h = c.charCodeAt(p);
            f[p * 2] = h >>> 8, f[p * 2 + 1] = h % 256;
          }
          return f;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(o) {
          if (o == null)
            return a.decompress(o);
          for (var c = new Array(o.length / 2), f = 0, p = c.length; f < p; f++)
            c[f] = o[f * 2] * 256 + o[f * 2 + 1];
          var l = [];
          return c.forEach(function(h) {
            l.push(r(h));
          }), a.decompress(l.join(""));
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(o) {
          return o == null ? "" : a._compress(o, 6, function(c) {
            return i.charAt(c);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(o) {
          return o == null ? "" : o == "" ? null : (o = o.replace(/ /g, "+"), a._decompress(o.length, 32, function(c) {
            return s(i, o.charAt(c));
          }));
        },
        compress: function(o) {
          return a._compress(o, 16, function(c) {
            return r(c);
          });
        },
        _compress: function(o, c, f) {
          if (o == null) return "";
          var p, l, h = {}, d = {}, _ = "", w = "", C = "", D = 2, F = 3, S = 2, E = [], k = 0, O = 0, L;
          for (L = 0; L < o.length; L += 1)
            if (_ = o.charAt(L), Object.prototype.hasOwnProperty.call(h, _) || (h[_] = F++, d[_] = !0), w = C + _, Object.prototype.hasOwnProperty.call(h, w))
              C = w;
            else {
              if (Object.prototype.hasOwnProperty.call(d, C)) {
                if (C.charCodeAt(0) < 256) {
                  for (p = 0; p < S; p++)
                    k = k << 1, O == c - 1 ? (O = 0, E.push(f(k)), k = 0) : O++;
                  for (l = C.charCodeAt(0), p = 0; p < 8; p++)
                    k = k << 1 | l & 1, O == c - 1 ? (O = 0, E.push(f(k)), k = 0) : O++, l = l >> 1;
                } else {
                  for (l = 1, p = 0; p < S; p++)
                    k = k << 1 | l, O == c - 1 ? (O = 0, E.push(f(k)), k = 0) : O++, l = 0;
                  for (l = C.charCodeAt(0), p = 0; p < 16; p++)
                    k = k << 1 | l & 1, O == c - 1 ? (O = 0, E.push(f(k)), k = 0) : O++, l = l >> 1;
                }
                D--, D == 0 && (D = Math.pow(2, S), S++), delete d[C];
              } else
                for (l = h[C], p = 0; p < S; p++)
                  k = k << 1 | l & 1, O == c - 1 ? (O = 0, E.push(f(k)), k = 0) : O++, l = l >> 1;
              D--, D == 0 && (D = Math.pow(2, S), S++), h[w] = F++, C = String(_);
            }
          if (C !== "") {
            if (Object.prototype.hasOwnProperty.call(d, C)) {
              if (C.charCodeAt(0) < 256) {
                for (p = 0; p < S; p++)
                  k = k << 1, O == c - 1 ? (O = 0, E.push(f(k)), k = 0) : O++;
                for (l = C.charCodeAt(0), p = 0; p < 8; p++)
                  k = k << 1 | l & 1, O == c - 1 ? (O = 0, E.push(f(k)), k = 0) : O++, l = l >> 1;
              } else {
                for (l = 1, p = 0; p < S; p++)
                  k = k << 1 | l, O == c - 1 ? (O = 0, E.push(f(k)), k = 0) : O++, l = 0;
                for (l = C.charCodeAt(0), p = 0; p < 16; p++)
                  k = k << 1 | l & 1, O == c - 1 ? (O = 0, E.push(f(k)), k = 0) : O++, l = l >> 1;
              }
              D--, D == 0 && (D = Math.pow(2, S), S++), delete d[C];
            } else
              for (l = h[C], p = 0; p < S; p++)
                k = k << 1 | l & 1, O == c - 1 ? (O = 0, E.push(f(k)), k = 0) : O++, l = l >> 1;
            D--, D == 0 && (D = Math.pow(2, S), S++);
          }
          for (l = 2, p = 0; p < S; p++)
            k = k << 1 | l & 1, O == c - 1 ? (O = 0, E.push(f(k)), k = 0) : O++, l = l >> 1;
          for (; ; )
            if (k = k << 1, O == c - 1) {
              E.push(f(k));
              break;
            } else O++;
          return E.join("");
        },
        decompress: function(o) {
          return o == null ? "" : o == "" ? null : a._decompress(o.length, 32768, function(c) {
            return o.charCodeAt(c);
          });
        },
        _decompress: function(o, c, f) {
          var p = [], l = 4, h = 4, d = 3, _ = "", w = [], C, D, F, S, E, k, O, L = { val: f(0), position: c, index: 1 };
          for (C = 0; C < 3; C += 1)
            p[C] = C;
          for (F = 0, E = Math.pow(2, 2), k = 1; k != E; )
            S = L.val & L.position, L.position >>= 1, L.position == 0 && (L.position = c, L.val = f(L.index++)), F |= (S > 0 ? 1 : 0) * k, k <<= 1;
          switch (F) {
            case 0:
              for (F = 0, E = Math.pow(2, 8), k = 1; k != E; )
                S = L.val & L.position, L.position >>= 1, L.position == 0 && (L.position = c, L.val = f(L.index++)), F |= (S > 0 ? 1 : 0) * k, k <<= 1;
              O = r(F);
              break;
            case 1:
              for (F = 0, E = Math.pow(2, 16), k = 1; k != E; )
                S = L.val & L.position, L.position >>= 1, L.position == 0 && (L.position = c, L.val = f(L.index++)), F |= (S > 0 ? 1 : 0) * k, k <<= 1;
              O = r(F);
              break;
            case 2:
              return "";
          }
          for (p[3] = O, D = O, w.push(O); ; ) {
            if (L.index > o)
              return "";
            for (F = 0, E = Math.pow(2, d), k = 1; k != E; )
              S = L.val & L.position, L.position >>= 1, L.position == 0 && (L.position = c, L.val = f(L.index++)), F |= (S > 0 ? 1 : 0) * k, k <<= 1;
            switch (O = F) {
              case 0:
                for (F = 0, E = Math.pow(2, 8), k = 1; k != E; )
                  S = L.val & L.position, L.position >>= 1, L.position == 0 && (L.position = c, L.val = f(L.index++)), F |= (S > 0 ? 1 : 0) * k, k <<= 1;
                p[h++] = r(F), O = h - 1, l--;
                break;
              case 1:
                for (F = 0, E = Math.pow(2, 16), k = 1; k != E; )
                  S = L.val & L.position, L.position >>= 1, L.position == 0 && (L.position = c, L.val = f(L.index++)), F |= (S > 0 ? 1 : 0) * k, k <<= 1;
                p[h++] = r(F), O = h - 1, l--;
                break;
              case 2:
                return w.join("");
            }
            if (l == 0 && (l = Math.pow(2, d), d++), p[O])
              _ = p[O];
            else if (O === h)
              _ = D + D.charAt(0);
            else
              return null;
            w.push(_), p[h++] = D + _.charAt(0), l--, D = _, l == 0 && (l = Math.pow(2, d), d++);
          }
        }
      };
      return a;
    })();
    e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
      return t;
    });
  })($i)), $i.exports;
}
var oi = _l();
const vl = /* @__PURE__ */ sn(oi), wl = /* @__PURE__ */ zc({
  __proto__: null,
  default: vl
}, [oi]), Ot = !1;
function kl(e, t, r) {
  var i, u, s, a, o, c, f, p;
  const n = {
    userTier: r,
    ...t ? { license: (u = (i = e.$store) == null ? void 0 : i.getters) == null ? void 0 : u._wbcProDetails } : {},
    nameEl: e.nameEl,
    props: e.$props,
    data: e.$data,
    toggleLoad: (l) => {
      (t || Ot) && l !== void 0 ? e.load_ = l : e.load_ = !e.load_;
    },
    toggleProtected: (l) => {
      (t || Ot) && l !== void 0 ? e.protected_ = l : e.protected_ = !e.protected_;
    },
    toggleFloat: (l) => {
      (t || Ot) && l !== void 0 ? e.float_ = l : e.float_ = !e.float_;
    },
    toggleClose: (l) => {
      (t || Ot) && l !== void 0 ? e.close_ = l : e.close_ = !e.close_;
    },
    toggleFocus: (l) => {
      (t || Ot) && l !== void 0 ? e.focus_ = l : e.focus_ = !e.focus_;
    },
    toggleDrag: (l) => {
      (t || Ot) && l !== void 0 ? e.drag_ = l : e.drag_ = !e.drag_;
    },
    toggleHide: (l) => {
      (t || Ot) && l !== void 0 ? e.hide_ = l : e.hide_ = !e.hide_;
    },
    update: (l) => {
      e.update(l);
    },
    compKey: () => e.compKey,
    lg: {
      lang: e.lang,
      get: () => {
        var l, h;
        return ((h = (l = e == null ? void 0 : e.$store) == null ? void 0 : l.state) == null ? void 0 : h.lg) || "en";
      },
      set: (l) => {
        e.$store.commit("updateLang", l);
      }
    },
    dayjs: t || Ot ? (l) => e.dayjs(l) : (l) => {
      const h = e.dayjs(l), d = e.dayjs();
      return Math.abs(d.diff(h, "day")) > 14 ? (console.warn("[WBC-UI2 Free] dayjs limited to ±14 days. Upgrade to Premium for full range."), null) : h;
    },
    emit: (l, h) => {
      e.$emit(l, h);
    },
    storage: {
      get: (l) => e.getStorage(l || e.nameEl),
      set: (l, h) => {
        e.setStorage(l || e.nameEl, h);
      }
    },
    cookies: {
      get: (l) => e.getCookie(l),
      set: (l, h) => {
        e.setCookie(l, h);
      }
    },
    key: e.key_
  };
  return Object.defineProperty(n, "data", {
    get() {
      return e.item_;
    },
    set(l) {
      typeof l == "string" || typeof l == "number" || typeof l == "boolean" ? (e.item_ = null, e.$nextTick(() => {
        e.item_ = l;
      })) : e.item_ = l;
    },
    enumerable: !0,
    configurable: !0
  }), (t || Ot) && (Object.assign(n, {
    root: (a = (s = e.$root) == null ? void 0 : s.$children) == null ? void 0 : a[0],
    ref: (l) => e.$refs[l],
    el: (l) => e.$el,
    routeParams: () => {
      var l;
      return ((l = e.$route) == null ? void 0 : l.params) || {};
    },
    val: (l) => e.val(l),
    isValid: () => e.internalValueIsValid,
    isValidFn: (l) => e.isValid(l),
    set: (l, h = "item_") => {
      e.$data[h] = l;
    },
    get: (l = "item_") => e.$data[l],
    refs: e == null ? void 0 : e.$refs,
    content: () => e.contentRegistry,
    proto: Object.getPrototypeOf(e),
    vm: e,
    emit: e.$emit,
    markdown: { md2Html: (l) => e.$md.render(l), html2Md: (l) => e.$turnDown.turndown(l) },
    store: e.$store,
    router: e.$router,
    routes: (c = (o = e == null ? void 0 : e.$router) == null ? void 0 : o.options) != null && c.routes ? Object.fromEntries(
      (p = (f = e == null ? void 0 : e.$router) == null ? void 0 : f.options) == null ? void 0 : p.routes.map((l) => [l.name, l])
    ) : null,
    watch: (l, h, d) => e.$watch(l, h, d),
    queryData: e.queryData,
    aes: { enc: e.aesEnc, dec: e.aesDec },
    lzStr: wl,
    validators: { ...e.validators || {} },
    storage: localStorage,
    cookies: { ...e.$cookies, state: e.getCookies || {} },
    dayjs: (l) => e.dayjs(l),
    trigger: (l, ...h) => {
      if (typeof e[l] == "function") return e[l](...h);
      console.warn(`[WBC-UI2 PRO] Method '${l}' not found on component instance.`);
    }
  }), Object.defineProperty(n, "focusOn", { get() {
    return e.focusOn_;
  }, set(l) {
    e.focusOn_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "protected", { get() {
    return e.protected_;
  }, set(l) {
    e.protected_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "focus", { get() {
    return e.focus_;
  }, set(l) {
    e.focus_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "load", { get() {
    return e.load_;
  }, set(l) {
    e.load_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "float", { get() {
    return e.float_;
  }, set(l) {
    e.float_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "drag", { get() {
    return e.drag_;
  }, set(l) {
    e.drag_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "close", { get() {
    return e.close_;
  }, set(l) {
    e.close_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "hide", { get() {
    return e.hide_;
  }, set(l) {
    e.hide_ = l;
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(n, "user", {
    get() {
      var l, h, d, _;
      return ((h = (l = e.$store) == null ? void 0 : l.state) == null ? void 0 : h.user) ?? ((_ = (d = e.$store) == null ? void 0 : d.getters) == null ? void 0 : _.user) ?? {};
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(n, "loggedIn", {
    get() {
      var l, h, d, _;
      return ((h = (l = e.$store) == null ? void 0 : l.state) == null ? void 0 : h.loggedIn) ?? ((_ = (d = e.$store) == null ? void 0 : d.getters) == null ? void 0 : _.loggedIn) ?? !1;
    },
    enumerable: !0,
    configurable: !0
  })), n;
}
const Cl = "_wb_core_auth";
function El() {
  try {
    const e = document.cookie.match(new RegExp(`(?:^|; )${Cl}=([^;]*)`));
    return !e || !e[1] ? null : JSON.parse(decodeURIComponent(e[1]));
  } catch {
    return null;
  }
}
function Al() {
  const e = El();
  return !e || !e.hmac || !e.status || !e.ts || e.status !== "valid" || Date.now() - e.ts >= 864e5 ? null : e.details || { validated: !0 };
}
function Sl(e, t) {
  if (Tl(e))
    return null;
  const r = e.getObjectDepth(e.item_);
  if (Array.isArray(e.item_) && e.item_.length > 10 || r > 10) {
    let i = "", u = "";
    try {
      u = JSON.stringify(e.item_), i = u.substring(0, 40), i.length === 40 && (i += "...");
    } catch {
      i = "[Complex Data]", u = "Cannot stringify: Object contains circular references (e.g. Vue components).";
    }
    return e.$emit("tier-limit", {
      depth: r,
      length: Array.isArray(e.item_) ? e.item_.length : 0,
      item: e.item_,
      snippet: i
    }), t("VAlert", {
      ref: "rawHtml",
      props: { type: "warning", dense: !0, outlined: !0, dark: !0 },
      style: { margin: "10px" }
    }, [
      t("div", { class: "font-weight-bold" }, "WBC-UI Free Tier Limit (Max 10 items/depth)"),
      t("div", { attrs: { title: u }, style: { fontSize: "0.85em", fontFamily: "monospace", opacity: 0.8, margin: "4px 0" } }, `Blocked: ${i}`),
      t("div", { style: { fontSize: "0.9em", marginTop: "6px" } }, "Upgrade to Premium for unlimited data parsing.")
    ]);
  }
  return null;
}
function Tl(e) {
  var r, n;
  if ((n = (r = e.$store) == null ? void 0 : r.state) != null && n._wbcDev)
    return !0;
  const t = Al();
  return !!(t && t.validated);
}
function wa(e, t = /* @__PURE__ */ new WeakSet()) {
  if (e === null || typeof e != "object" || e instanceof Function || e._isVue || e.$options || e.__v_isVNode || t.has(e))
    return 0;
  t.add(e);
  let r = 0;
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const i = wa(e[n], t);
      r = Math.max(r, i);
    }
  return r + 1;
}
const Dl = {
  methods: {
    startDrag(e) {
      this.draggable = !0, this.dragStartX = e.clientX - this.offsetX, this.dragStartY = e.clientY - this.offsetY, document.addEventListener("mousemove", this.doDrag), document.addEventListener("mouseup", this.endDrag), e.preventDefault();
    },
    doDrag(e) {
      this.draggable && (this.offsetX = e.clientX - this.dragStartX, this.offsetY = e.clientY - this.dragStartY);
    },
    endDrag() {
      this.draggable = !1, document.removeEventListener("mousemove", this.doDrag), document.removeEventListener("mouseup", this.endDrag);
    }
  }
}, ka = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Ht = function(e, t = /* @__PURE__ */ new WeakMap()) {
  if (e == null || typeof e != "object") return e;
  if (e._isVue || e.$options || e.__v_isVNode || e._scope || e._effects || e.vm) return "vue object cannot be cloned";
  if (e instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    return n.setTime(e.getTime()), n;
  }
  if (Array.isArray(e)) {
    const n = [];
    for (let i = 0, u = e.length; i < u; i++) n[i] = Ht(e[i], t);
    return n;
  }
  if (t.has(e)) return t.get(e);
  const r = {};
  t.set(e, r);
  for (let n in e)
    Object.prototype.hasOwnProperty.call(e, n) && !ka.has(n) && (r[n] = Ht(e[n], t));
  return r;
}, Ca = function(e, ...t) {
  (typeof e != "object" || e === null) && (e = {});
  for (const r of t)
    if (!(typeof r != "object" || r === null)) {
      for (const n in r)
        if (Object.prototype.hasOwnProperty.call(r, n) && !ka.has(n)) {
          const i = e[n], u = r[n];
          bu(u) ? e[n] = bu(i) ? Ca(i, u) : Ht(u) : Array.isArray(u) ? e[n] = Ht(u) : e[n] = u;
        }
    }
  return e;
};
function Ol(e, t) {
  function r(n) {
    return Array.isArray(n) ? n.map(r) : typeof n == "string" && t.hasOwnProperty(n) ? t[n] : n;
  }
  return e.map(r);
}
function Il(e, t, r = "default_") {
  function n(s) {
    return s.toString();
  }
  function i(s, a, o) {
    a.forEach((c, f) => {
      const p = o + n(f);
      Array.isArray(c) ? (s[p] = {}, i(s[p], c, "")) : typeof c == "string" && t.hasOwnProperty(c) ? s[p] = t[c] : s[p] = c;
    });
  }
  const u = {};
  return i(u, e, r), u;
}
function Ea(e, t) {
  if (e === null || typeof e != "object")
    return typeof e == "string" && t.hasOwnProperty(e) ? t[e] : e;
  const r = Array.isArray(e) ? [] : {};
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && (r[n] = Ea(e[n], t));
  return r;
}
function gu(e, t) {
  if (e === null || typeof e != "object")
    return typeof e == "string" && t.hasOwnProperty(e) ? t[e] : e;
  const r = Array.isArray(e) ? [] : {};
  if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) r[n] = gu(e[n], t);
  else
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = gu(e[n], t));
  return r;
}
const yu = (e, t) => {
  let r = Ht(e);
  if (typeof r == "function" || un(r) || ai(r)) return r;
  if (Array.isArray(r))
    for (let n = 0; n < r.length; n++) r[n] = yu(r[n], t);
  else if (typeof r == "object" && r !== null)
    for (let n in r)
      r.hasOwnProperty(n) && (r[n] = yu(r[n], t));
  else return t(r);
  return r;
}, Fl = (e) => {
  const t = (n) => n.toString().replace(/\s+/g, " ").trim();
  if (typeof e == "function") return t(e);
  if (typeof e != "object" || e === null) return JSON.stringify(e);
  const r = (n) => {
    const i = Array.isArray(n) ? [] : {};
    for (const [u, s] of Object.entries(n))
      typeof s == "function" ? i[u] = t(s) : typeof s == "object" && s !== null ? i[u] = r(s) : i[u] = s;
    return i;
  };
  return JSON.stringify(r(e));
}, Pl = (e, t) => {
  const r = (n) => {
    if (typeof n == "string")
      try {
        return JSON.parse(n);
      } catch {
        return t ? t(n) : n;
      }
    else if (typeof n == "object" && n !== null) {
      if (Array.isArray(n)) return n.map(r);
      const i = {};
      for (const [u, s] of Object.entries(n)) i[u] = r(s);
      return i;
    }
    return n;
  };
  return r(e);
}, Aa = function(e, t) {
  const r = Ht(e), n = (i, u) => typeof i == "function" || un(i) || ai(i) ? i : typeof i == "object" && i !== null ? Array.isArray(i) ? i.map((s) => n(s, u)) : Aa(i, u) : u && u.hasOwnProperty(i) ? u[i] : i;
  if (Array.isArray(r))
    for (let i = 0; i < r.length; i++) r[i] = n(r[i], t);
  else if (typeof r == "object" && r !== null)
    for (let i in r)
      r.hasOwnProperty(i) && (r[i] = n(r[i], t));
  else return n(r, t);
  return r;
}, Ll = ["error", "lang", "val", "txt", "json", "blob", "text", "init", "tracker", "encFn", "decFn", "resolved", "owners", "filter", "alert", "context", "item-value", "item-text"], Mn = function(e, t = {}, r = "en", n = Ll) {
  if (!e || un(e) || ai(e)) return e;
  if (typeof e == "function") return e.length >= 1 ? (...u) => e(t, ...u) : e;
  const i = Ht(e);
  if (Array.isArray(i)) {
    for (let u = 0; u < i.length; u++)
      n.includes(i[u]) || (i[u] = Mn(i[u], t, r, n));
    return i;
  }
  if (i instanceof Object) {
    for (const [u, s] of Object.entries(i))
      if (!n.includes(u))
        if (typeof s == "function") {
          if (s.length >= 2) i[u] = (...a) => s(t, ...a);
          else if (s.length === 1) {
            let a = s(t);
            a instanceof Object ? typeof a == "function" ? i[u] = a : a.hasOwnProperty(r) ? i[u] = a[r] : i[u] = Mn(a, t, r, n) : i[u] = a;
          }
        } else i[u] = Mn(s, t, r, n);
    return i;
  }
  return i;
}, Ft = function(e, t) {
  if (!(e instanceof Object) || typeof e == "function" || e === null || e === void 0 || Number.isNaN(e) || e._isVue || e.__v_isVNode) return e;
  if (Array.isArray(e)) return e.map((n) => Ft(n, t));
  if (e.hasOwnProperty(t)) return Ft(e[t], t);
  let r = { ...e };
  for (const [n, i] of Object.entries(r)) n || (r[n] = Ft(i, t));
  return r;
}, Sa = function(e) {
  let t = [];
  for (let r = 0; r < e.length; r++)
    Array.isArray(e[r]) ? t = t.concat(Sa(e[r])) : t.push(e[r]);
  return t;
}, Ta = ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "blue-grey", "grey", "shades", "black", "white", "transparent"], Nl = ["red", "pink", "purple", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "amber", "orange", "brown", "grey", "shades", "white"], Rl = function() {
  const e = "0123456789ABCDEF";
  let t = "#";
  for (let r = 0; r < 6; r++) t += e[Math.floor(Math.random() * 16)];
  return t;
}, jl = function(e, t = 1e3) {
  const i = Math.floor(Math.random() * 25 + 65), u = Math.floor(Math.random() * 25 + 65), s = Math.floor(Math.random() * t);
  return `${e}${String.fromCharCode(i, u)}${s}`;
}, Da = function(e = 0, t) {
  return Math.floor(Math.random() * (t - e) + e);
}, Oa = function(e) {
  return e[Da(0, e.length)];
}, Bl = function() {
  return Oa(Ta);
};
function Ml(e) {
  const t = [], r = (a) => {
    a.trim() && t.push({ type: "text", content: a.trim() });
  }, n = e.split(`
`);
  let i = !1, u = "";
  for (let a = 0; a < n.length; a++) {
    const c = n[a].replace(/%.*/, "").trimEnd();
    if (i) {
      const p = c.indexOf("$$");
      p !== -1 ? (u += c.slice(0, p), u.trim() && t.push({ type: "math", expression: u.trim(), displayMode: !0 }), i = !1, u = "", s(c.slice(p + 2))) : u += c + `
`;
      continue;
    }
    const f = c.indexOf("$$");
    if (f !== -1) {
      f > 0 && s(c.slice(0, f));
      const p = c.slice(f + 2), l = p.indexOf("$$");
      if (l !== -1) {
        const h = p.slice(0, l);
        h.trim() && t.push({ type: "math", expression: h.trim(), displayMode: !0 }), s(p.slice(l + 2));
      } else
        i = !0, u = "";
      continue;
    }
    s(c);
  }
  i && u.trim() && t.push({ type: "math", expression: u.trim(), displayMode: !0 });
  function s(a, o) {
    if (!a) return;
    const c = [];
    let f = 0;
    for (; f < a.length; ) {
      const d = a.indexOf("$", f);
      if (d === -1) {
        c.push({ content: a.slice(f) });
        break;
      }
      d > f && c.push({ content: a.slice(f, d) });
      const _ = a.slice(d + 1), w = _.indexOf("$");
      if (w === -1) {
        c.push({ content: a.slice(d) });
        break;
      }
      const C = _.slice(0, w);
      C.trim() && c.push({ expression: C.trim() }), f = d + 1 + w + 1;
    }
    if (c.length === 0) return;
    if (c.length === 1) {
      const d = c[0];
      d.content !== void 0 ? r(d.content) : t.push({ type: "math", expression: d.expression, displayMode: !1 });
      return;
    }
    const p = { type: "mixed", lineContent: [] };
    let l = "";
    const h = () => {
      l.trim() && (p.lineContent.push({ content: l.trim() }), l = "");
    };
    for (const d of c)
      d.content !== void 0 ? l += d.content + " " : (h(), p.lineContent.push({ expression: d.expression }));
    h(), t.push(p);
  }
  return t;
}
function Vl(e, t, r) {
  function n(i, u) {
    const s = r === void 0 || u === r;
    if (Array.isArray(i))
      for (let a = 0; a < i.length; a++)
        s && i[a] in t ? i[a] = t[i[a]] : n(i[a], u + 1);
    else if (i && typeof i == "object")
      for (const a in i)
        s && i[a] in t ? i[a] = t[i[a]] : n(i[a], u + 1);
  }
  return n(e, 0), e;
}
function Vn(e, t, r = {}) {
  const { mode: n = "first" } = r;
  if (!e || typeof e != "object" || !t || typeof t != "object")
    return n === "all" ? [] : null;
  function i(c, f) {
    const p = [];
    if (!c || typeof c != "object") return p;
    f in c && p.push(c);
    for (const l in c)
      c[l] && typeof c[l] == "object" && !Array.isArray(c[l]) && p.push(...i(c[l], f));
    return p;
  }
  function u(c, f) {
    const p = [];
    if (!c || typeof c != "object") return p;
    f in c && p.push(c[f]);
    for (const l in c)
      c[l] && typeof c[l] == "object" && !Array.isArray(c[l]) && p.push(...u(c[l], f));
    return p;
  }
  function s(c, f, p) {
    const l = {};
    return Object.keys(f).forEach((h) => {
      if (h === "_parent_") return;
      const d = f[h];
      if (d && typeof d == "object") {
        const _ = d._parent_ || h, w = i(c, h);
        if (w.length > 0) {
          const C = p === "merge" ? w[w.length - 1] : w[0], D = Vn(C, d, { mode: p });
          D && Object.keys(D).length > 0 && (l[_] = D);
        }
      } else {
        const _ = u(c, h);
        if (_.length > 0) {
          const w = d || h;
          l[w] = p === "merge" ? _[_.length - 1] : _[0];
        }
      }
    }), Object.keys(l).length > 0 ? l : null;
  }
  function a(c, f, p) {
    const l = {};
    return Object.keys(f).forEach((h) => {
      if (h === "_parent_") return;
      const d = f[h];
      if (d && typeof d == "object") {
        const _ = d._parent_ || h, w = i(c, h);
        if (w.length > p) {
          const C = Vn(w[p], d, { mode: p });
          C && Object.keys(C).length > 0 && (l[_] = C);
        }
      } else {
        const _ = u(c, h);
        if (_.length > p) {
          const w = d || h;
          l[w] = _[p];
        }
      }
    }), Object.keys(l).length > 0 ? l : null;
  }
  function o(c, f) {
    const p = Object.keys(f).filter((d) => d !== "_parent_");
    if (p.length === 0) return [];
    const l = i(c, p[0]), h = [];
    return l.forEach((d, _) => {
      const w = Vn(d, f, { mode: _ });
      w && h.push(w);
    }), h;
  }
  return n === "all" ? o(e, t) : typeof n == "number" && n >= 0 ? a(e, t, n) : s(e, t, n);
}
const Ia = /* @__PURE__ */ new Date(), Fa = Ia.toISOString(), $l = Fa.slice(0, 10), Wl = [
  "VMenu",
  "VDialog",
  "VTooltip",
  "VHover",
  "VDropdown",
  "VDatePicker",
  "VExpansionPanel",
  "VBottomSheet"
];
function zl(e, t, r, n) {
  var i, u, s, a, o, c, f, p, l, h, d, _, w, C, D, F, S;
  return n != null && n.menu ? (e.menu = ((i = e.$refs.menuHtml) == null ? void 0 : i.isActive) || !1, Wl.includes((u = n == null ? void 0 : n.menu) == null ? void 0 : u.comp) ? t(
    (s = n == null ? void 0 : n.menu) == null ? void 0 : s.comp,
    {
      ref: "menuHtml",
      ...(a = e.menu) != null && a.active ? (o = n == null ? void 0 : n.menu) == null ? void 0 : o.options : (c = n == null ? void 0 : n.menu) == null ? void 0 : c.activeOptions,
      // Vuetify 2 requires the activator via a SCOPED slot that binds the slot's
      // `on` (and `attrs`) so the component controls open/close. A plain
      // `slot:"activator"` + manual toggle triggers "The activator slot must be
      // bound" and the menu won't open. We merge the activator's own listeners
      // (e.g. a custom `event`) UNDER Vuetify's `on` so opening still works.
      scopedSlots: {
        activator: ({ on: E, attrs: k }) => {
          var L, Y, Q, W;
          const O = (e.menu ? (L = n == null ? void 0 : n.menu) == null ? void 0 : L.activeRootOptions : (Y = n == null ? void 0 : n.menu) == null ? void 0 : Y.options) || {};
          return t(
            (n == null ? void 0 : n.comp) || "VCard",
            {
              ...O,
              key: ((W = (Q = e == null ? void 0 : e.$refs) == null ? void 0 : Q.menu) == null ? void 0 : W.isActive) + e.menu,
              attrs: { ...O.attrs || {}, ...k },
              on: { ...O.on || {}, ...E }
            },
            [r]
          );
        }
      }
    },
    [
      t("WBC", {
        props: { item: n == null ? void 0 : n.menu.content }
      })
    ]
  ) : t(
    ((f = n == null ? void 0 : n.menu) == null ? void 0 : f.comp) || "div",
    {
      ...(p = n == null ? void 0 : n.menu) != null && p.active ? (h = n == null ? void 0 : n.menu) == null ? void 0 : h.activeOptions : (l = n == null ? void 0 : n.menu) == null ? void 0 : l.options
    },
    [
      t(
        (n == null ? void 0 : n.comp) || "div",
        {
          key: ((_ = (d = e == null ? void 0 : e.$refs) == null ? void 0 : d.menu) == null ? void 0 : _.isActive) + e.menu,
          ...(w = n == null ? void 0 : n.menu) != null && w.active ? (C = n == null ? void 0 : n.menu) == null ? void 0 : C.activeRootOptions : {},
          on: {
            [((D = n == null ? void 0 : n.menu) == null ? void 0 : D.event) || "click"]: () => {
              var E;
              n.menu.active = !((E = n == null ? void 0 : n.menu) != null && E.active), e.key_ = `${e.key_}_`.replace("___", "_");
            }
          }
        },
        [r]
      ),
      (F = n == null ? void 0 : n.menu) != null && F.active ? t("WBC", { props: { item: (S = n == null ? void 0 : n.menu) == null ? void 0 : S.content } }) : null
    ]
  )) : r;
}
const Ul = /* @__PURE__ */ new Set([
  "comp",
  "output",
  "props",
  "options",
  "hOptions",
  "switch",
  "footer",
  "footers",
  "header",
  "headers",
  "hFooter",
  "hHeader",
  "asChild",
  "wrap",
  "to",
  "disp",
  "mode",
  "prod",
  "key",
  "fStyle",
  "dive",
  "tbDive",
  "watch",
  "forward",
  "class",
  "style",
  "id",
  "attrs"
]);
function Hl(e, t, r, n) {
  if (!Array.isArray(r) || r.length === 0 || typeof r[0] != "string" || !r[0].startsWith("<") || !r[0].endsWith(">"))
    return null;
  const i = n == null ? void 0 : n.options, u = i && typeof i == "object" && Object.keys(i).some((p) => p !== "wrap" && p !== "scope"), s = r[0].includes("~"), o = (i == null ? void 0 : i.scope) || (s ? "root" : "container"), c = e._stripScope(i || {}), f = o === "update" ? "each+merge" : o;
  if (!u)
    return e.toWBC_(r, t);
  if (f === "container") {
    const p = i.comp || "div";
    return e.toWBC_(
      { comp: p, options: c },
      t,
      e.toWBC_(r, t)
    );
  }
  if (f === "root" && s) {
    const p = e._mergeTagWithOptions(r[0], c, !1), h = [e._wbcObjToTagStr(p) || r[0], ...r.slice(1)];
    return e.toWBC_(h, t);
  }
  if (f === "root" && !s)
    return e.toWBC_(
      { comp: i.comp || "div", options: c },
      t,
      e.toWBC_(r, t)
    );
  if (f === "each" || f === "each+merge" || f === "inherit") {
    const p = f === "each", l = s ? 1 : 0, h = [];
    s && h.push(r[0]);
    for (let d = l; d < r.length; d++) {
      const _ = r[d];
      if (!(typeof _ == "string" && _.startsWith("<") && _.endsWith(">"))) {
        h.push(_);
        continue;
      }
      if (f === "inherit" && e._tagHasOptions(_))
        h.push(_);
      else {
        const C = e._mergeTagWithOptions(_, c, p), D = e._wbcObjToTagStr(C);
        h.push(D || C);
      }
    }
    return e.toWBC_(h, t);
  }
  if (f === "wrap-each") {
    const p = i.comp || "span", l = s ? 1 : 0, h = [];
    s && h.push(r[0]);
    for (let d = l; d < r.length; d++)
      h.push({ comp: p, options: { ...c, html: r[d] } });
    return e.toWBC_(h, t);
  }
  return e.toWBC_(r, t);
}
function ql(e, t, r, n) {
  var C, D, F, S, E, k, O, L, Y, Q, W, ee, ne, P;
  let {
    externalChildren: i,
    insideHeadersVN: u,
    insideFootersVN: s,
    globalHeaderVN: a,
    globalFooterVN: o,
    externalWrapperObj: c,
    extChildren: f,
    wbcObj: p
  } = n, l, h, d, _;
  if (i && typeof i == "object" && !Array.isArray(i) && !e.isVnode(i)) {
    let y = Object.keys(i).sort().map((x) => i[x]);
    y.length > 0 && typeof y[0] == "string" && y[0].startsWith("<") && y[0].endsWith(">") ? f = e.toWBC_(y, r) : f = r("WBC", {
      key: `wbc-ext-child-${e.computedKey}`,
      props: { item: i }
    });
  } else
    f = r("WBC", {
      key: `wbc-ext-child-${e.computedKey}`,
      props: { item: i }
    });
  if (h = e._wbcOptions(t), d = e.comp(t), h && h.props && typeof h.props == "object") {
    const y = e.lang;
    let x = !1;
    const A = {};
    for (const T in h.props) {
      const R = h.props[T];
      R && typeof R == "object" && !Array.isArray(R) && Object.keys(R).length > 0 && Object.keys(R).every((B) => ms.includes(B)) ? (A[T] = Ft(R, y), x = !0) : A[T] = R;
    }
    x && (h = { ...h, props: A });
  }
  if ([
    "input",
    "checbox",
    "radio",
    "select",
    "textarea",
    "VTextField",
    "VCheckbox",
    "VTextarea",
    "VSelect",
    "VRadio",
    "VSlider",
    "VRangeSlider",
    "VSwitch",
    "VAutocomplete",
    "VDatePicker",
    "VColorPicker",
    "VMenu",
    "VRadioGroup",
    "vTimePicker"
  ].includes(d) && (e.itemListeners.input = (y) => {
    var x;
    e.internalValue = y, e.internalValueIsValid = (x = e == null ? void 0 : e.$refs[e.refName]) == null ? void 0 : x.validate(
      !0,
      y
    );
  }), h != null && h.hide || e.hide)
    l = null;
  else if (Object.keys(t).length > 0 && ms.some((y) => Object.keys(t).includes(y))) {
    const y = e.lang, x = y != null && Object.prototype.hasOwnProperty.call(t, y) ? Ft(t, y) : void 0;
    x != null && typeof x != "string" ? l = r("WBC", {
      ref: "rawHtml",
      key: `wbc-lang-${e.computedKey}-${y}`,
      props: {
        item: x
      }
    }) : l = r("WBHtml", {
      ref: "rawHtml",
      key: `wbhtml-key-${e.computedKey}-${t.length}`,
      props: {
        html: t
      }
    });
  } else if (Object.keys(t).length > 0 && !(t != null && t.comp)) {
    let y = [], x = {
      comp: ((C = t == null ? void 0 : t.options) == null ? void 0 : C.comp) || "span",
      options: {
        ...(t == null ? void 0 : t.options) || {}
        /* ,disposition:'nested' */
      }
    };
    (D = x == null ? void 0 : x.options) == null || delete D.float, (F = x == null ? void 0 : x.options) == null || delete F.drag, (S = x == null ? void 0 : x.options) == null || delete S.close;
    let A = (E = t == null ? void 0 : t.options) == null ? void 0 : E.wrap, T = Ul;
    Object.keys(t).sort().forEach((B) => {
      T.has(B) || y.push(t[B]);
    }), A && (x.comp = ((O = (k = A == null ? void 0 : A.options) == null ? void 0 : k.wrap) == null ? void 0 : O.comp) || x.comp, x.options = {
      ...((Y = (L = x == null ? void 0 : x.options) == null ? void 0 : L.wrap) == null ? void 0 : Y.options) || {},
      ...(x == null ? void 0 : x.options) || {}
    }, delete x.options.wrap);
    const R = Hl(e, r, y, t);
    R !== null ? l = R : l = e.toWBC_(x, r, y);
  } else if (Array.isArray(d)) {
    let y = e.resolveValuesWithSource(d, t);
    t != null && t.header && (y.header = t == null ? void 0 : t.header), t != null && t.footer && (y.footer = t == null ? void 0 : t.footer), t != null && t.output && (y.output = t == null ? void 0 : t.output), t != null && t.options && (y.options = t == null ? void 0 : t.options), t != null && t.hOptions && (y.hOptions = t == null ? void 0 : t.hOptions), t != null && t.switch && (y.switch = t == null ? void 0 : t.switch), t != null && t.footer && (y.footer = t == null ? void 0 : t.footer), t != null && t.header && (y.header = t == null ? void 0 : t.header), t != null && t.hFooter && (y.hFooter = t == null ? void 0 : t.hFooter), t != null && t.header && (y.header = t == null ? void 0 : t.header), t != null && t.hHeader && (y.hHeader = t == null ? void 0 : t.hHeader), t != null && t.fStyle && (y.fStyle = t == null ? void 0 : t.fStyle), t != null && t.dive && (y.dive = t == null ? void 0 : t.dive), t != null && t.update && (y.update = t == null ? void 0 : t.update), t != null && t.init && (y.init = t == null ? void 0 : t.init), t != null && t.init0 && (y.init0 = t == null ? void 0 : t.init0), t != null && t.tracker && (y.tracker = t == null ? void 0 : t.tracker), t != null && t.watch && (y.watch = t == null ? void 0 : t.watch), t != null && t.forward && (y.forward = t == null ? void 0 : t.forward), l = r("WBC", {
      ref: "arrHtml",
      key: `wbc-flat-arr-${(y.length || 0) % 1e3}`,
      props: { item: y }
    });
  } else if (typeof d == "object" && !(d.install || d.setup || d._isVue || d.$options || d.__v_isVNode || d._scope || d._effects || d.vm)) {
    const y = ["options", "header", "footer", "hOptions", "hHeader", "hFooter"], x = { ...d };
    for (const T of y) delete x[T];
    let A = e.resolveValuesWithSource(x, t);
    for (const T of y)
      d[T] !== void 0 ? A[T] = d[T] : (t == null ? void 0 : t[T]) !== void 0 && (A[T] = t[T]);
    t != null && t.output && (A.output = t == null ? void 0 : t.output), t != null && t.switch && (A.switch = t == null ? void 0 : t.switch), t != null && t.fStyle && (A.fStyle = t == null ? void 0 : t.fStyle), t != null && t.dive && (A.dive = t == null ? void 0 : t.dive), t != null && t.update && (A.update = t == null ? void 0 : t.update), t != null && t.init && (A.init = t == null ? void 0 : t.init), t != null && t.init0 && (A.init0 = t == null ? void 0 : t.init0), t != null && t.tracker && (A.tracker = t == null ? void 0 : t.tracker), t != null && t.watch && (A.watch = t == null ? void 0 : t.watch), t != null && t.forward && (A.forward = t == null ? void 0 : t.forward), A.options || (A.options = {}), l = r("WBC", {
      ref: "arrHtml",
      ...h,
      props: { item: A }
    });
  } else if (typeof d == "string" && (d.includes("|") || d.includes("+"))) {
    typeof d == "string" && (d.includes("|") || d.includes("+")) && (d = e.strToComps(d));
    let y = [];
    d.forEach((x, A) => {
      let T = {};
      if (typeof x == "string")
        T = (t == null ? void 0 : t[x.replace("~", "")]) || `<${x.replace("<", "").replace(">", "")}>`;
      else if (Array.isArray(x)) {
        let R = {
          comp: x
        };
        e.flattenArray(x).forEach((B) => {
          Object.keys(t).includes(B) && (R[B] = t[B]);
        }), T = r("WBC", {
          key: `wbc-flat-arr-${e.computedKey}`,
          props: { item: R }
        });
      } else
        T = x;
      y.push(T);
    }), l = r("WBC", {
      ref: "arrHtml",
      key: `wbc-flat-arr-${e.computedKey}`,
      props: { item: y }
    });
  } else if (typeof d == "string" && (d != null && d.startsWith("./"))) {
    let y = {
      mainContent: r("WBC", {
        ...h || {},
        props: { props: (h == null ? void 0 : h.props) || {}, item: d }
      }),
      options: {
        ...h || {}
      }
    };
    l = r("WBC", { props: { item: y } });
  } else if (typeof d == "function" && d.length == 0)
    d().then((x) => {
      let A = (x == null ? void 0 : x.default) || (x == null ? void 0 : x.name) || {};
      Hn.component(A.name, A), p.components[A.name] = A, d = A.name, typeof h == "object" && h !== null && (h.props = {
        ...A.props || {},
        ...h.props
      });
    }).catch((x) => {
    });
  else {
    let y, x, A, T = e.html(t);
    typeof (h == null ? void 0 : h.html) == "object" || typeof (h == null ? void 0 : h.html) == "function" || (Q = h == null ? void 0 : h.html) != null && Q.startsWith("https://") || (W = h == null ? void 0 : h.html) != null && W.startsWith("http://") || (ee = h == null ? void 0 : h.html) != null && ee.startsWith("/") || (ne = h == null ? void 0 : h.html) != null && ne.startsWith("./") || (P = h == null ? void 0 : h.html) != null && P.startsWith("../") || e.isVnode(h == null ? void 0 : h.html) || ["VSpacer", "VDivider"].includes(h == null ? void 0 : h.html) ? y = r("WBC", {
      key: `wbc-key-inner-html-${e.computedKey}`,
      props: { item: T }
    }) : (x = T, y = e.isNonEmpty(x) ? r("WBHtml", {
      key: `wbhtml-key-${x == null ? void 0 : x.length}-${e.computedKey}`,
      props: {
        html: x
      }
    }) : null);
    const R = bl[d];
    R ? l = R(e, r, t, h, y, {
      insideHeadersVN: u,
      insideFootersVN: s,
      extChildren: f
    }) : (_ = r(
      d,
      {
        ref: "rawHtml",
        ...h,
        on: e.itemListeners,
        key: `key-raw0-${e.computedKey}`
      },
      [
        (t == null ? void 0 : t.switch) === !0 ? A : (y == null ? void 0 : y.children) || y,
        ...ar(e, r, h)
        // footers
      ]
    ), e.vNodes.raw0 = _, l = r(
      d,
      {
        ...h,
        on: e.itemListeners
        // attrs: self.attrs
      },
      [
        u,
        (y == null ? void 0 : y.children) || y,
        ...ar(e, r, h),
        f,
        s
        // footer
        /* self.toWBC_(self.toWBC(loadDefaultComp))|| */
      ]
    )), c && (l = r(
      c.comp,
      {
        ref: "externalHtml",
        ...c.options
      },
      [l]
    )), h != null && h.to && (l = r("WBLink", {
      ref: "linkHtml",
      props: {
        to: h == null ? void 0 : h.to,
        style_: {},
        attrs: {},
        html: l
      }
    }));
  }
  return e.vNodes.main = l, e.vNodes.raw0 = _, (o || a) && (l = r(
    "div",
    {
      ref: "globalHtml",
      key: t == null ? void 0 : t.switch
    },
    [a, l, o]
  )), l = zl(e, r, l, h), { main: l, options: h, comp: d, raw0: _, extChildren: f };
}
const Gl = "\0PIPE\0", Kl = /\x00PIPE\x00/g;
function Zl(e, t) {
  var l;
  const n = e.replace(/\\\|/g, Gl).split("|").map((h) => h.replace(Kl, "|")), [i, u, s, a] = n, o = t.strToObj(u), c = t.isPlainObject(o) ? o : t.isNonEmpty(o) ? { class: o || {} } : {}, f = (l = i.split(".").pop()) == null ? void 0 : l.toLowerCase(), p = ii[f] || null;
  return { el1: i, classOrOptionsObj: c, theFileLink: s, parsedAs: a, ext: f, fileLanguage: p };
}
function Yl(e, t, r) {
  const n = e.getContext();
  if (!n)
    throw new Error(`File type "${t}" is not supported.`);
  const i = r;
  return ((s) => {
    try {
      if (!s || typeof s != "function") return null;
      const a = s.keys ? s.keys() : [];
      if (a.includes(i)) {
        const c = s(i);
        return (c == null ? void 0 : c.default) !== void 0 ? c.default : c;
      }
      const o = i.startsWith("./") ? null : "./" + i;
      if (o && a.includes(o)) {
        const c = s(o);
        return (c == null ? void 0 : c.default) !== void 0 ? c.default : c;
      }
    } catch {
    }
    return null;
  })(n);
}
function Je(e, t, r) {
  return e.loadFile(t) || Yl(e, r, t);
}
function Jl(e, t, r, n) {
  const { el1: i, classOrOptionsObj: u, parsedAs: s, ext: a, fileLanguage: o } = n, c = i.startsWith("./") ? i.substring(2) : i;
  let f, p;
  const l = s == null ? void 0 : s.toLowerCase(), d = [
    { test: i.includes(".vue") || l === "vue", type: "vue", contentType: "text/x-vue", lang: "html" },
    { test: i.includes(".py") || ["py", "python"].includes(l), type: "py", contentType: "text/x-python", lang: "python" },
    { test: i.includes(".rs") || ["rs", "rust"].includes(l), type: "rs", contentType: "text/x-rust", lang: "rust" },
    { test: i.includes(".css") || l === "css", type: "css", contentType: "text/css", lang: "css" },
    { test: i.includes(".scss") || l === "scss", type: "scss", contentType: "text/css", lang: "css" },
    { test: i.includes(".sass") || l === "sass", type: "sass", contentType: "text/css", lang: "css" },
    { test: i.includes(".php") || l === "php", type: "php", contentType: "application/x-httpd-php", lang: "php" },
    { test: i.includes(".sh") || l === "sh", type: "sh", contentType: "text/html", lang: "html" },
    { test: i.includes(".js") || i.includes(".ts") || i.includes(".json") || ["js", "ts", "json"].includes(l), type: "js", contentType: "text/javascript", lang: "javascript" },
    { test: i.includes(".md") || l === "md", type: "md", contentType: "text/x-markdown", lang: "markdown" },
    { test: i.includes(".tex") || l === "tex", type: "tex", contentType: "text/html", lang: "html" },
    { test: i.includes(".txt") || l === "txt", type: "txt", contentType: "text/html", lang: "text" },
    { test: i.includes(".html") || l === "html", type: "html", contentType: "text/html", lang: "markup" },
    { test: i.includes(".c") || i.includes(".cpp") || ["c", "cpp"].includes(l), type: "c", contentType: "text/x-csrc", lang: "c" }
  ].find((C) => C.test);
  if (d && (f = Je(r, c, d.type), p = d.lang, d.contentType), f === void 0 && (f = Je(r, c, a || "text")), !(f || r.fileContent))
    throw new Error(`#CodeFileError: ${i} not found`);
  const _ = {
    language: p || o || "WBC",
    extra: c,
    ...typeof r.resolvedWbCodeFile == "boolean" ? {} : r.resolvedWbCodeFile || {}
  }, w = r.renderDefaultWbcode(t, f, _);
  return f ? t("WBC", {
    ...u,
    props: { item: w }
  }) : r.fileContent;
}
function Xl(e, t, r, n) {
  const { el1: i, classOrOptionsObj: u } = n, s = i.startsWith("./") ? i.substring(2) : i;
  r.source = Je(r, s, "json");
  try {
    r.source = typeof r.source == "string" ? JSON.parse(r.source) : r.source;
  } catch {
  }
  if (!(r.source || r.fileContent))
    throw new Error(`#JsonFileError: ${i} not found`);
  return r.source ? r.source.WBC ? t("WBC", { ref: "rawHtml", title: i, props: { item: r.source.WBC }, ...u }) : t("JsonViewer", { ref: "rawHtml", title: i, props: { value: r.source }, ...u }) : r.fileContent;
}
function Ql(e, t, r, n) {
  const { el1: i, classOrOptionsObj: u, parsedAs: s } = n, a = i.startsWith("./") ? i.substring(2) : i;
  if (r.source = Je(r, a, "txt"), !(r.source || r.fileContent))
    throw new Error(`#TxtFileError: ${i} not found`);
  const c = {
    language: i.endsWith(".txt") ? "txt" : "text",
    extra: a,
    ...typeof r.resolvedWbCodeFile == "boolean" ? {} : r.resolvedWbCodeFile || {}
  };
  return t("WBC", {
    ...u,
    props: { item: r.renderDefaultWbcode(t, r.source, c) }
  });
}
function ef(e, t, r, n) {
  var c, f, p, l, h;
  const { el1: i, classOrOptionsObj: u, parsedAs: s } = n, a = i.startsWith("./") ? i.substring(2) : i, o = s == null ? void 0 : s.toLowerCase();
  if (r.source = Je(r, a, "js"), !(r.source || r.fileContent))
    throw new Error(`#JsFileError: ${i} not found`);
  if (typeof r.source == "string") {
    const d = /export\s+default/i.test(r.source) && /(render\s*\(|setup\s*\(|template\s*[:=`'"]|setup\s*[:=`'"])/i.test(r.source), _ = r.source.includes("@wbc-logic") || r.source.includes("@wbc-mixin");
    if (d || _ || o === "vue") {
      if (!r._jsLazyComp && !r._jsLazyLoading) {
        r._jsLazyLoading = !0;
        const D = r.getContext(), F = (c = D == null ? void 0 : D.lazyImport) == null ? void 0 : c.call(D, i);
        if (F) {
          const S = r.$createElement;
          F.then((E) => {
            var Y, Q;
            const k = (E == null ? void 0 : E.default) || E, O = r.itemAccessibility, L = E.setup || E.init || E.tracker || E.logic || typeof k == "function" && _;
            L ? ((Q = (Y = r.$store) == null ? void 0 : Y.getters) == null || Q._wbcProAuthorized, E.init && E.init(O), L && !E.init && console.warn("[WBC-UI2] Advanced JS features (setup/tracker/logic) require a PRO license."), r._jsLazyComp = {
              render: (W) => W("div", {
                class: "caption grey--text pa-1 px-2 border-dashed blue lighten-5 rounded d-inline-block"
              }, [W("v-icon", { props: { xSmall: !0, left: !0, color: "blue" } }, "mdi-cog-outline"), `Logic Provider: ${a}`])
            }, r._jsLazyLoading = !1) : k && typeof k == "object" && (k.render || k.setup || k.template) ? (r._jsLazyComp = { ...k }, r._jsLazyLoading = !1) : (r._jsLazyLoading = !1, r.fileContent = r.renderDefaultWbcode(S, r.source, { language: "javascript", extra: a })), r.$forceUpdate();
          }).catch((E) => {
            r._jsLazyLoading = !1, r.fileContent = r.renderDefaultWbcode(S, r.source, { language: "javascript", extra: a }), r.$forceUpdate();
          });
        } else
          r._jsLazyLoading = !1, r.fileContent = r.renderDefaultWbcode(r.$createElement, r.source, { language: "javascript", extra: a });
      }
      return r._jsLazyComp ? t(r._jsLazyComp, {
        props: r.props_ || r._jsLazyComp.params || {},
        ...u
      }) : r.fileContent || t("VProgressLinear", { props: { indeterminate: !0, color: "blue", height: 2 } });
    }
    const C = {
      language: i.endsWith(".ts") ? "typescript" : "javascript",
      extra: a,
      ...typeof r.resolvedWbCodeFile == "boolean" ? {} : r.resolvedWbCodeFile || {}
    };
    return t("WBC", {
      ...u,
      props: { item: r.renderDefaultWbcode(t, r.source, C) }
    });
  }
  if (r.source && typeof r.source == "object") {
    const d = r.itemAccessibility;
    return r.source.setup || r.source.init || r.source.tracker || r.source.logic ? ((p = (f = r.$store) == null ? void 0 : f.getters) == null || p._wbcProAuthorized, r.source.init && r.source.init(d), (r.source.setup || r.source.tracker || r.source.logic) && console.warn("[WBC-UI2] Advanced Object features (setup/tracker/logic) require a PRO license."), t("div", { class: "caption blue--text px-2 border-dashed rounded" }, ["Executed Object Logic: " + a])) : r.source.render || r.source.setup || r.source.template ? t(r.source, {
      props: r.props_ || r.source.params || {},
      ...u
    }) : t("WBC", { props: { item: r.source }, ...u });
  }
  if (typeof r.source == "function") {
    if (r.source.toString().includes("@wbc-logic"))
      return (h = (l = r.$store) == null ? void 0 : l.getters) == null || h._wbcProAuthorized, console.warn("[WBC-UI2] Dynamic Logic Injection Functions (@wbc-logic) require a PRO license."), t("div", { class: "caption blue--text px-2 border-dashed rounded" }, ["Executed Logic Function: " + a]);
    const d = r.source.toString();
    return t("WBC", {
      ...u,
      props: {
        item: r.renderDefaultWbcode(t, d, {
          language: "javascript",
          extra: a,
          output: {
            header: { 0: "<~VRow,pb-1 grey grey--text lighten-2 font-weight-bold mb-1>", 1: `small__${a} (Function)`, 2: "VSpacer", 3: "download", 4: "copy" },
            main: { 1: "code" },
            terminus: { 0: "<~VRow,pt-1 grey grey--text lighten-4 mt-1>", 1: "small__WBC-function-self.source", 2: "VSpacer" }
          }
        })
      }
    });
  }
  return t("v-alert", {
    props: { type: "warning", border: "left", coloredBorder: !0, elevation: 2, icon: "mdi-alert-circle" },
    class: "my-2 pa-2 orange--text"
  }, [
    t("div", { class: "font-weight-bold" }, "Unknown Content Type"),
    t("div", `The file "${i}" returned a value of type "${typeof r.source}".`),
    t("div", { class: "caption mt-1 d-block" }, "WBC lacks a direct renderer for this data type. Check the console for more details.")
  ]);
}
function tf(e, t, r, n) {
  const { el1: i, classOrOptionsObj: u, parsedAs: s } = n, a = i.startsWith("./") ? i.substring(2) : i;
  r.source = Je(r, a, "css");
  const o = s == null ? void 0 : s.toLowerCase();
  if (o === "txt" || o === "md") {
    const c = {
      language: "css",
      extra: a,
      ...typeof r.resolvedWbCodeFile == "boolean" ? {} : r.resolvedWbCodeFile || {}
    };
    return t("WBC", {
      ...u,
      props: { item: r.renderDefaultWbcode(t, r.source, c) }
    });
  }
  return t("style", {
    attrs: { type: "text/css" },
    domProps: { textContent: r.source }
  });
}
function rf(e, t, r, n) {
  var a, o, c;
  const { el1: i, classOrOptionsObj: u } = n, s = i.startsWith("./") ? i.substring(2) : i;
  if (r.source = Je(r, s, "vue"), !(r.source || r.fileContent))
    throw new Error(`#VueFileError: ${i} not found`);
  return r.source ? t(((a = r.source) == null ? void 0 : a.default) || r.source, {
    props: ((c = (o = r.source) == null ? void 0 : o.default) == null ? void 0 : c.params) || r.props_ || {},
    ...u
  }) : r.fileContent;
}
function nf(e, t, r, n) {
  var f;
  const { el1: i, classOrOptionsObj: u, parsedAs: s } = n, a = i.startsWith("./") ? i.substring(2) : i, o = (f = i.split(".").pop()) == null ? void 0 : f.toLowerCase(), c = s == null ? void 0 : s.toLowerCase();
  if (r.source = Je(r, a, o), c === "tex" || c === "latex" || o === "tex" && !s) {
    if (!r.$options.components.WBLatex)
      return t("div", {
        style: { backgroundColor: "#F8F9FA", color: "red", width: "100%", height: "100%", margin: "10px" }
      }, ['#WBLatexMissing: "wb-latex" not registered']);
    if (!(r.source || r.fileContent))
      throw new Error(`#TexFileError: ${i} not found`);
    return r.source ? t("div", { ref: "rawHtml", title: i, ...u }, [
      t("div", r.parseTexFile(r.source).map((p) => {
        if (p.type === "text") return t("div", [t("WBHtml", { props: { html: p.content } })]);
        if (p.type === "math") return t("WBLatex", { props: { expression: p.expression, "display-mode": p.displayMode ?? !1 } });
        if (p.type === "mixed")
          return t(
            "div",
            { class: "d-inline-flex align-center" },
            p.lineContent.map(
              (l) => l.expression ? t("WBLatex", { props: { expression: l.expression, "display-mode": !1 } }) : t("WBHtml", { props: { html: l.content } })
            )
          );
      }))
    ]) : r.fileContent;
  }
  if (["md", "markdown", "markup"].includes(c) || o === "md" && !s) {
    if (!(r.source || r.fileContent))
      throw new Error(`#MdFileError: ${i} not found`);
    return r.source ? t("WBHtml", { ref: "rawHtml", props: { html: r.$md.render(si(r.source)) }, ...u }) : r.fileContent;
  }
  if (!(r.source || r.fileContent))
    throw new Error(`#HtmlFileError: ${i} not found`);
  return r.source ? t("WBHtml", { ref: "rawHtml", props: { html: r.source }, ...u }) : r.fileContent;
}
function uf(e, t, r, n) {
  const { el1: i, classOrOptionsObj: u, parsedAs: s } = n, a = i.startsWith("./") ? i.substring(2) : i, o = s == null ? void 0 : s.toLowerCase();
  if (r._matchesFileType(i, ve.IMAGE) || ["image", "img", "png", "jpg", "jpeg", "gif", "svg"].includes(o)) {
    if (r.source = Je(r, a, "image"), !(r.source || r.fileContent)) throw new Error(`#ImageFileError: ${i} not found`);
    return r.source ? t("img", { attrs: { src: `${r.source}`.replace("/js/", "/") }, class: "container", ref: "rawHtml", ...u }) : r.fileContent;
  }
  if (r._matchesFileType(i, ve.VIDEO) || ["video", "mp4", "webm"].includes(o)) {
    if (r.source = Je(r, a, "video") || (i.startsWith("/") ? i : null), !(r.source || r.fileContent)) throw new Error(`#VideoFileError: ${i} not found`);
    return r.source ? r._renderVideo(t, r.source, u) : r.fileContent;
  }
  if (r._matchesFileType(i, ve.AUDIO) || ["audio", "mp3", "wav"].includes(o)) {
    if (r.source = Je(r, a, "audio"), !(r.source || r.fileContent)) throw new Error(`#AudioFileError: ${i} not found`);
    return r.source ? r._renderAudio(t, r.source, u) : r.fileContent;
  }
  return null;
}
function sf(e, t, r, n) {
  const { el1: i, classOrOptionsObj: u } = n, s = i.startsWith("./") ? i.substring(2) : i;
  if (r.source = Je(r, s, "office"), !(r.source || r.fileContent)) throw new Error(`#OfficeFileError: ${i} not found`);
  return r._matchesFileType(i, ve.OFFICE.DOCX) ? t("VueOfficeDocx", { props: { src: r.source }, class: "container", style: { top: 0, left: 0 }, ref: "rawHtml" }) : r._matchesFileType(i, ve.OFFICE.XLSX) ? t("VueOfficeExcel", { props: { src: r.source }, class: "container white", style: { top: 0, left: 0, height: "100vh", width: "100vh" }, ref: "rawHtml" }) : t("VueDocPreview", { props: { value: r.source, type: "office" }, class: "container", style: { top: 0, left: 0, width: "100vh", height: "100vh" }, ref: "rawHtml" });
}
function af(e, t, r, n) {
  const { el1: i } = n, u = i.startsWith("./") ? i.substring(2) : i;
  if (r.source = Je(r, u, "pdf"), !(r.source || r.fileContent)) throw new Error(`#PdfFileError: ${i} not found`);
  return r.source ? t("iframe", { attrs: { src: r.source }, class: "container white", style: { top: 0, left: 0, height: "100vh", width: "100vh", border: 0 }, ref: "rawHtml" }) : r.fileContent;
}
function of(e, t, r, n) {
  var c;
  const { el1: i, parsedAs: u } = n, s = u == null ? void 0 : u.toLowerCase(), a = e.split("/");
  if ((c = a[a.length - 1]) != null && c.startsWith("__") || r._matchesFileType(e, ve.CODE) || ["py", "python", "php", "c", "cpp", "sh", "rs", "rust", "code"].includes(s))
    return Jl(e, t, r, n);
  if (i.endsWith(".json") || s === "json")
    return Xl(e, t, r, n);
  if (i.endsWith(".txt") || s === "txt" || s === "text")
    return Ql(e, t, r, n);
  if (s === "js" || s === "ts" || (i.endsWith(".js") || i.endsWith(".ts")) && !u)
    return ef(e, t, r, n);
  if (r._matchesFileType(e, ve.STYLE) || ["css", "scss", "sass", "style"].includes(s))
    return tf(e, t, r, n);
  if (i.endsWith(".vue") || s === "vue")
    return rf(e, t, r, n);
  if (r._matchesFileType(e, ve.TEXT))
    return nf(e, t, r, n);
  const o = uf(e, t, r, n);
  return o !== null ? o : r._matchesFileType(e, [...ve.OFFICE.DOCX, ...ve.OFFICE.XLSX, ...ve.OFFICE.GENERAL]) || ["office", "docx", "xlsx", "doc", "xls", "pptx"].includes(s) ? sf(e, t, r, n) : i.endsWith(".pdf") || s === "pdf" ? af(e, t, r, n) : (r.fileContent || qn(r, t, e, n.classOrOptionsObj), r.fileContent);
}
function cf(e, t, r, n) {
  var o, c;
  const { el1: i, classOrOptionsObj: u, parsedAs: s, theFileLink: a } = n;
  if (s == null || s.toLowerCase(), r._matchesFileType(e, ve.OFFICE.DOCX))
    return t("VueOfficeDocx", { props: { src: i }, class: "container", style: { top: 0, left: 0 }, ref: "rawHtml" });
  if (r._matchesFileType(e, ve.OFFICE.XLSX))
    return t("VueOfficeExcel", { props: { src: i }, class: "container white", style: { top: 0, left: 0, height: "100vh", width: "100vh" }, ref: "rawHtml" });
  if (r._matchesFileType(e, ve.OFFICE.GENERAL))
    return t("VueDocPreview", { props: { url: i, type: "office" }, class: "container", style: { top: 0, left: 0, width: "100vh", height: "100vh" }, ref: "rawHtml" });
  if (r._matchesFileType(e, ve.AUDIO))
    return r._renderAudio(t, i, u);
  if (r._matchesFileType(e, ve.IMAGE))
    return r._renderImage(t, i, u);
  if (r._matchesFileType(e, ve.VIDEO))
    return r._renderVideo(t, i, u);
  if (Uc.some((f) => e.includes(f)) && !e.includes("embed"))
    return r._renderYouTube(t, i, u);
  if (r._matchesFileType(e, ve.CODE) || r._matchesFileType(e, ve.TEXT) || r._matchesFileType(e, ve.STYLE) || r._matchesFileType(e, [".js", ".ts", ".json", ".vue", ".jsx", ".tsx", ".mmd"])) {
    if (!r.mediaData && !r.fileContent) {
      const f = { ...ii, jsx: "javascript", tsx: "typescript", mmd: "markdown" }, p = (c = (o = i.split(".").pop()) == null ? void 0 : o.split("?")[0]) == null ? void 0 : c.toLowerCase(), l = f[p] || "text";
      r.content.promise = fetch(i).then((h) => h.text()).then((h) => {
        if (p === "md" && r.$md)
          r.fileContent = t("WBHtml", {
            props: { html: r.$md.render(si(h) || "") },
            ...u
          });
        else {
          const d = {
            language: l,
            topBar: null,
            codeBar: [[`${i}|green`, "filename"], ["download", "copy"]],
            outputFn: null,
            extra: i
          };
          r.fileContent = r.renderDefaultWbcode(t, h, d);
        }
      }).catch(() => {
        r.fileContent = t("iframe", {
          attrs: { src: i, frameborder: "0", allowfullscreen: !0, referrerpolicy: "strict-origin-when-cross-origin" },
          class: "container white",
          style: { resize: "both", top: 0, left: 0, height: "100%", width: "100%", border: 0 },
          ref: "rawHtml",
          ...u
        });
      });
    }
    return r.fileContent;
  }
  return !r.mediaData && !r.fileContent && qn(r, t, i, u), r.fileContent;
}
function lf(e, t, r) {
  if (typeof e == "string" && e.startsWith("<") && e.endsWith(">") && (e.match(/</g) || []).length === 1 && (e.match(/>/g) || []).length === 1) {
    let n = e.slice(1, -1);
    n.startsWith("~") && (n = n.slice(1));
    const [i, u] = n.split("|"), [s, a] = i.split(",").map((c) => c.trim()), o = {
      ref: "rawHtml",
      class: a || void 0
    };
    return u && (o.attrs = { href: u.trim() }), t(s, o);
  }
  return null;
}
function ff(e, t) {
  var f;
  let r = null, n = e;
  const i = /* @__PURE__ */ new Set();
  for (; n && !i.has(n); ) {
    i.add(n);
    const p = n.$options || {};
    if (p.__file || p.file) {
      r = p.__file || p.file;
      break;
    }
    n = ((f = n.$vnode) == null ? void 0 : f.context) || n.$parent || null;
  }
  if (!r)
    return console.warn(`[WBC] No __file found on any authoring ancestor. Cannot resolve "${t}" relatively. Serving from root.`), "/" + t.replace(/^\.[\/]/, "");
  const a = (r.substring(0, r.lastIndexOf("/") + 1) + t.replace(/^\.[\/]/, "")).split("/"), o = [];
  for (const p of a)
    p === ".." ? o.pop() : p !== "." && p !== "" && o.push(p);
  let c = "/" + o.join("/");
  return (c.startsWith("/home/") || c.startsWith("/Users/") || c.match(/^\/[a-zA-Z]:\//)) && (c = "/@fs" + c), c;
}
function pf(e, t, r, n) {
  var h;
  let i;
  if (typeof t == "string" && (t.includes("{{") || t.includes("[[")))
    return r("WBHtml", {
      ref: "rawHtml",
      keyy: `wbhtml-key-${e.computedKey}-${t.length}`,
      props: { html: t }
    });
  if (typeof t == "string" && t.includes("|")) {
    const d = t.replace(/^[a-zA-Z][\w-]*__/, "").trimStart();
    if (d.startsWith("[") || d.startsWith("{"))
      return r("WBHtml", {
        ref: "rawHtml",
        keyy: `wbhtml-key-${e.computedKey}-${t.length}`,
        props: { html: t }
      });
  }
  const u = Zl(t, e), { el1: s, classOrOptionsObj: a, theFileLink: o, parsedAs: c } = u, f = e._getPathType(t), p = c == null ? void 0 : c.toLowerCase();
  let l = !1;
  if (f === "local")
    if ((h = e.$wbcUi2Options) != null && h.context)
      i = of(t, r, e, u);
    else {
      const d = ff(e, s);
      !e.mediaData && !e.fileContent && qn(e, r, d, a), i = e.fileContent;
    }
  else if (f === "served" || f === "online")
    f === "served" ? (!e.mediaData && !e.fileContent && qn(e, r, s, a), i = e.fileContent) : i = cf(t, r, e, u);
  else if (i = lf(t, r), !i) {
    const d = e.isNonEmpty(u.classOrOptionsObj) || !!o;
    i = r("WBHtml", {
      ref: "rawHtml",
      keyy: `wbhtml-key-${e.computedKey}-${t.length}`,
      props: { html: d ? t : s }
    }), l = d;
  }
  return o && !l && (i = r("WBLink", { props: { to: o, html: i } })), c && !["css", "js", "python", "php", "rs", "sh", "md", "html", "tex", "latex", "vue", "json", "txt"].includes(p) && (i = r(
    c || "pre",
    { ...a, ref: "rawHtml", title: t },
    [i]
  )), i;
}
function hf(e, t, r) {
  var s;
  const n = e.resolvedWbCode == null ? null : e.vNodes.wbCode, i = e.resolvedWbCodeFile == null ? null : e.vNodes.wbCodeFile, u = e.resolvedWbDataViewer == null ? null : e.vNodes.wbDataViewer;
  if (n || i || u) {
    let a = {
      options: {},
      default_0: ((s = e.item_) == null ? void 0 : s.comp) == "meta" ? null : {
        options: {
          wrap: {
            comp: "VCard",
            options: {
              class: "pa-3 my-3 ",
              props: { outlined: !0, shaped: !0, rounded: !0 }
            }
          },
          html: {
            0: r,
            1: (o) => n,
            2: (o) => i,
            3: (o) => u
          }
        }
      }
    };
    return t("WBC", {
      key: `wbc-wrapper-${e.resolvedWbCode != null}-${e.resolvedWbCodeFile != null}-${e.resolvedWbDataViewer != null}-k${e.key_ || 0}`,
      props: {
        item: a,
        wbCode: null,
        wbCodeFile: null,
        wbDataViewer: null
      }
    });
  }
  return r;
}
function ys(e, t, r, n) {
  var o;
  const { _float: i, _close: u, _drag: s, _focus: a } = n;
  if (i || u || s || a || e.focusOn_) {
    let c = e.item_;
    if (!c) return r;
    let f = {
      position: "fixed",
      top: "13% ",
      left: "30%",
      "z-index": "10",
      height: "auto",
      width: "40%",
      padding: "1.8%",
      transform: `translate(${e.offsetX}px, ${e.offsetY}px)`,
      cursor: e.draggable ? "grabbing" : "grab",
      "background-color": "#FAFAFA",
      border: "1px solid grey",
      resize: "both",
      overflow: "auto"
    };
    const p = Pa(e, t, c, i), l = i ? Na(e, t, c, s) : null, h = La(e, t, c, u);
    let d = {
      options: {
        class: "pa-15",
        style: e.float_ ? f : (o = c == null ? void 0 : c.options) != null && o.focus ? { border: "1px solid black" } : {},
        html: {
          comp: e.focusOn_ ? e.focusOn_ : {
            0: {
              0: "<~VRow,mb-5 d-flex justify-end align-end>",
              1: "float",
              2: "drag",
              3: "close"
            },
            1: "main"
          },
          float: p,
          drag: l,
          close: h,
          main: r
        }
      }
    };
    return t("WBC", {
      key: `focusOn-key-${JSON.stringify(e.clone(d)).length % 1e3}`,
      props: { item: d }
    });
  }
  return r;
}
function Pa(e, t, r, n) {
  var s;
  const i = n;
  let u = {
    default: typeof e.float_ == "boolean" || n == null && e.focusOn_ ? {
      comp: "VIcon",
      options: {
        html: i == !0 ? "mdi-dock-window" : "mdi-fullscreen-exit"
      }
    } : e.float_ || ((s = r == null ? void 0 : r.options) == null ? void 0 : s.float),
    options: {
      attrs: { title: "Float Output" },
      class: " pa-2",
      on: {
        click: () => {
          e.float_ = !e.float_;
        }
      },
      style: { cursor: "pointer" }
    }
  };
  return t("WBC", { props: { item: u } });
}
function La(e, t, r, n) {
  let i = {
    default: n == !0 || n == null && e.focusOn_ ? {
      comp: "VIcon",
      options: { html: "mdi-close-box-outline" }
    } : n != !1 ? n : null,
    options: {
      attrs: { title: "Close window" },
      class: " pa-2",
      on: {
        click: () => {
          r != null && r.options && (r.options.hide = !0, r.options.close = null), e.hide_ = !0;
        }
      },
      style: { cursor: "pointer" }
    }
  };
  return t("WBC", { props: { item: i } });
}
function Na(e, t, r, n) {
  var a, o;
  if (n == null && ((a = r == null ? void 0 : r.options) == null ? void 0 : a.drag) == null) return null;
  const i = n ?? ((o = r == null ? void 0 : r.options) == null ? void 0 : o.drag);
  let u = { mousedown: e.startDrag }, s = {
    content: {
      comp: "VIcon",
      options: {
        attrs: { title: "Drag window" },
        class: " pa-2",
        html: "mdi-drag",
        on: { ...i ? u : {} }
      }
    },
    ...e.isPlainObject(e.drag_) ? e.drag_ : {}
  };
  return t("WBC", { props: { item: s } });
}
function df(e, t, r) {
  if (e.select === !0 || e.isNonEmpty(e.alertObjs)) {
    let n = {
      keyy: `key-${e.alertObjs.length}`,
      class: "pa-1 my-1",
      style: {
        backgroundColor: e.rColor,
        border: "10px dashed black"
      },
      attrs: {
        title: `=== WBC === 
 el: ${e.nameEl} 
 isVnode: ${e.isVnode(e.item_)}
`
      }
    };
    return t("div", n, [
      `${e.isVnode(e.item_) ? "VNode:" : ""}${e.nameEl}=>`,
      r,
      t("VListGroup", { props: { value: !1 } }, [
        t("JsonViewer", {
          props: {
            value: {
              item: e.item,
              item_: e.item_,
              itemAccessibility: e.itemAccessibility
            }
          }
        })
      ]),
      t("VBtn", {
        props: { value: !1 },
        on: { click: () => {
          e.select = !e.select;
        } }
      }, ["close"])
    ]);
  }
  return r;
}
function mf(e, t, r) {
  return e.lang == "ar" ? t(
    "span",
    { style: { direction: "rtl", textAlign: "right" } },
    Array.isArray(r) && r.length > 0 ? r : [r]
  ) : r;
}
function bf(e, t, r) {
  return Array.isArray(r) ? t(
    "span",
    r.filter((n) => n).map((n) => {
      var i;
      return ((i = n == null ? void 0 : n.$el) == null ? void 0 : i.children) || n;
    })
  ) : r;
}
function gf(e, t, r, n) {
  return n ? t(
    "VContainer",
    {
      ...e.isPlainObject(n) ? n : n == !0 ? { style: { border: "1px solid black" } } : {}
    },
    Array.isArray(r) && r.length > 0 ? r : [r]
  ) : r;
}
var yf = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78, 5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], Ra = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114, 8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489], xf = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫝᫠-᫫ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", ja = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-Ƛ꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Wi = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, zi = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", _f = {
  5: zi,
  "5module": zi + " export import",
  6: zi + " const class extends export import super"
}, Ba = /^in(stanceof)?$/, vf = new RegExp("[" + ja + "]"), wf = new RegExp("[" + ja + xf + "]");
function xu(e, t) {
  for (var r = 65536, n = 0; n < t.length; n += 2) {
    if (r += t[n], r > e)
      return !1;
    if (r += t[n + 1], r >= e)
      return !0;
  }
  return !1;
}
function vt(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && vf.test(String.fromCharCode(e)) : t === !1 ? !1 : xu(e, Ra);
}
function qt(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && wf.test(String.fromCharCode(e)) : t === !1 ? !1 : xu(e, Ra) || xu(e, yf);
}
var fe = function(t, r) {
  r === void 0 && (r = {}), this.label = t, this.keyword = r.keyword, this.beforeExpr = !!r.beforeExpr, this.startsExpr = !!r.startsExpr, this.isLoop = !!r.isLoop, this.isAssign = !!r.isAssign, this.prefix = !!r.prefix, this.postfix = !!r.postfix, this.binop = r.binop || null, this.updateContext = null;
};
function tt(e, t) {
  return new fe(e, { beforeExpr: !0, binop: t });
}
var rt = { beforeExpr: !0 }, We = { startsExpr: !0 }, Pu = {};
function oe(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, Pu[e] = new fe(e, t);
}
var m = {
  num: new fe("num", We),
  regexp: new fe("regexp", We),
  string: new fe("string", We),
  name: new fe("name", We),
  privateId: new fe("privateId", We),
  eof: new fe("eof"),
  // Punctuation token types.
  bracketL: new fe("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new fe("]"),
  braceL: new fe("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new fe("}"),
  parenL: new fe("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new fe(")"),
  comma: new fe(",", rt),
  semi: new fe(";", rt),
  colon: new fe(":", rt),
  dot: new fe("."),
  question: new fe("?", rt),
  questionDot: new fe("?."),
  arrow: new fe("=>", rt),
  template: new fe("template"),
  invalidTemplate: new fe("invalidTemplate"),
  ellipsis: new fe("...", rt),
  backQuote: new fe("`", We),
  dollarBraceL: new fe("${", { beforeExpr: !0, startsExpr: !0 }),
  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.
  eq: new fe("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new fe("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new fe("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new fe("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: tt("||", 1),
  logicalAND: tt("&&", 2),
  bitwiseOR: tt("|", 3),
  bitwiseXOR: tt("^", 4),
  bitwiseAND: tt("&", 5),
  equality: tt("==/!=/===/!==", 6),
  relational: tt("</>/<=/>=", 7),
  bitShift: tt("<</>>/>>>", 8),
  plusMin: new fe("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: tt("%", 10),
  star: tt("*", 10),
  slash: tt("/", 10),
  starstar: new fe("**", { beforeExpr: !0 }),
  coalesce: tt("??", 1),
  // Keyword token types.
  _break: oe("break"),
  _case: oe("case", rt),
  _catch: oe("catch"),
  _continue: oe("continue"),
  _debugger: oe("debugger"),
  _default: oe("default", rt),
  _do: oe("do", { isLoop: !0, beforeExpr: !0 }),
  _else: oe("else", rt),
  _finally: oe("finally"),
  _for: oe("for", { isLoop: !0 }),
  _function: oe("function", We),
  _if: oe("if"),
  _return: oe("return", rt),
  _switch: oe("switch"),
  _throw: oe("throw", rt),
  _try: oe("try"),
  _var: oe("var"),
  _const: oe("const"),
  _while: oe("while", { isLoop: !0 }),
  _with: oe("with"),
  _new: oe("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: oe("this", We),
  _super: oe("super", We),
  _class: oe("class", We),
  _extends: oe("extends", rt),
  _export: oe("export"),
  _import: oe("import", We),
  _null: oe("null", We),
  _true: oe("true", We),
  _false: oe("false", We),
  _in: oe("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: oe("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: oe("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: oe("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: oe("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, ze = /\r\n?|\n|\u2028|\u2029/, kf = new RegExp(ze.source, "g");
function Dr(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function Ma(e, t, r) {
  r === void 0 && (r = e.length);
  for (var n = t; n < r; n++) {
    var i = e.charCodeAt(n);
    if (Dr(i))
      return n < r - 1 && i === 13 && e.charCodeAt(n + 1) === 10 ? n + 2 : n + 1;
  }
  return -1;
}
var Va = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, Pe = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, $a = Object.prototype, Cf = $a.hasOwnProperty, Ef = $a.toString, Or = Object.hasOwn || (function(e, t) {
  return Cf.call(e, t);
}), xs = Array.isArray || (function(e) {
  return Ef.call(e) === "[object Array]";
}), _s = /* @__PURE__ */ Object.create(null);
function Wt(e) {
  return _s[e] || (_s[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function Pt(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var Af = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, Zr = function(t, r) {
  this.line = t, this.column = r;
};
Zr.prototype.offset = function(t) {
  return new Zr(this.line, this.column + t);
};
var ci = function(t, r, n) {
  this.start = r, this.end = n, t.sourceFile !== null && (this.source = t.sourceFile);
};
function Wa(e, t) {
  for (var r = 1, n = 0; ; ) {
    var i = Ma(e, n, t);
    if (i < 0)
      return new Zr(r, t - n);
    ++r, n = i;
  }
}
var _u = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
  // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
  // (the latest version the library supports). This influences
  // support for strict mode, the set of reserved words, and support
  // for new syntax features.
  ecmaVersion: null,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"`, `"module"` or `"commonjs"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called when
  // a semicolon is automatically inserted. It will be passed the
  // position of the inserted semicolon as an offset, and if
  // `locations` is enabled, it is given the location as a `{line,
  // column}` object as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: !1,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program, and an import.meta expression
  // in a script isn't considered an error.
  allowImportExportEverywhere: !1,
  // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: null,
  // When enabled, super identifiers are not constrained to
  // appearing in methods and do not raise an error when they appear elsewhere.
  allowSuperOutsideMethod: null,
  // When enabled, hashbang directive in the beginning of file is
  // allowed and treated as a line comment. Enabled by default when
  // `ecmaVersion` >= 2023.
  allowHashBang: !1,
  // By default, the parser will verify that private properties are
  // only used in places where they are valid and have been declared.
  // Set this to false to turn such checks off.
  checkPrivateFields: !0,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: !1,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  // When this option has an array as value, objects representing the
  // comments are pushed to it.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: !1,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: !1
}, vs = !1;
function Sf(e) {
  var t = {};
  for (var r in _u)
    t[r] = e && Or(e, r) ? e[r] : _u[r];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!vs && typeof console == "object" && console.warn && (vs = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), xs(t.onToken)) {
    var n = t.onToken;
    t.onToken = function(i) {
      return n.push(i);
    };
  }
  if (xs(t.onComment) && (t.onComment = Tf(t, t.onComment)), t.sourceType === "commonjs" && t.allowAwaitOutsideFunction)
    throw new Error("Cannot use allowAwaitOutsideFunction with sourceType: commonjs");
  return t;
}
function Tf(e, t) {
  return function(r, n, i, u, s, a) {
    var o = {
      type: r ? "Block" : "Line",
      value: n,
      start: i,
      end: u
    };
    e.locations && (o.loc = new ci(this, s, a)), e.ranges && (o.range = [i, u]), t.push(o);
  };
}
var or = 1, cr = 2, Lu = 4, za = 8, Nu = 16, Ua = 32, li = 64, Ha = 128, lr = 256, an = 512, qa = 1024, fi = or | cr | lr;
function Ru(e, t) {
  return cr | (e ? Lu : 0) | (t ? za : 0);
}
var Gn = 0, ju = 1, Nt = 2, Ga = 3, Ka = 4, Za = 5, Se = function(t, r, n) {
  this.options = t = Sf(t), this.sourceFile = t.sourceFile, this.keywords = Wt(_f[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var i = "";
  t.allowReserved !== !0 && (i = Wi[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (i += " await")), this.reservedWords = Wt(i);
  var u = (i ? i + " " : "") + Wi.strict;
  this.reservedWordsStrict = Wt(u), this.reservedWordsStrictBind = Wt(u + " " + Wi.strictBind), this.input = String(r), this.containsEsc = !1, n ? (this.pos = n, this.lineStart = this.input.lastIndexOf(`
`, n - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(ze).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = m.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(
    this.options.sourceType === "commonjs" ? cr : or
  ), this.regexpState = null, this.privateNameStack = [];
}, ut = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowReturn: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, allowUsing: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
Se.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
ut.inFunction.get = function() {
  return (this.currentVarScope().flags & cr) > 0;
};
ut.inGenerator.get = function() {
  return (this.currentVarScope().flags & za) > 0;
};
ut.inAsync.get = function() {
  return (this.currentVarScope().flags & Lu) > 0;
};
ut.canAwait.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], r = t.flags;
    if (r & (lr | an))
      return !1;
    if (r & cr)
      return (r & Lu) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
ut.allowReturn.get = function() {
  return !!(this.inFunction || this.options.allowReturnOutsideFunction && this.currentVarScope().flags & or);
};
ut.allowSuper.get = function() {
  var e = this.currentThisScope(), t = e.flags;
  return (t & li) > 0 || this.options.allowSuperOutsideMethod;
};
ut.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & Ha) > 0;
};
ut.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
ut.allowNewDotTarget.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], r = t.flags;
    if (r & (lr | an) || r & cr && !(r & Nu))
      return !0;
  }
  return !1;
};
ut.allowUsing.get = function() {
  var e = this.currentScope(), t = e.flags;
  return !(t & qa || !this.inModule && t & or);
};
ut.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & lr) > 0;
};
Se.extend = function() {
  for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
  for (var n = this, i = 0; i < t.length; i++)
    n = t[i](n);
  return n;
};
Se.parse = function(t, r) {
  return new this(r, t).parse();
};
Se.parseExpressionAt = function(t, r, n) {
  var i = new this(n, t, r);
  return i.nextToken(), i.parseExpression();
};
Se.tokenizer = function(t, r) {
  return new this(r, t);
};
Object.defineProperties(Se.prototype, ut);
var Ve = Se.prototype, Df = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
Ve.strictDirective = function(e) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    Pe.lastIndex = e, e += Pe.exec(this.input)[0].length;
    var t = Df.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      Pe.lastIndex = e + t[0].length;
      var r = Pe.exec(this.input), n = r.index + r[0].length, i = this.input.charAt(n);
      return i === ";" || i === "}" || ze.test(r[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(i) || i === "!" && this.input.charAt(n + 1) === "=");
    }
    e += t[0].length, Pe.lastIndex = e, e += Pe.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
Ve.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
Ve.isContextual = function(e) {
  return this.type === m.name && this.value === e && !this.containsEsc;
};
Ve.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
Ve.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
Ve.canInsertSemicolon = function() {
  return this.type === m.eof || this.type === m.braceR || ze.test(this.input.slice(this.lastTokEnd, this.start));
};
Ve.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
Ve.semicolon = function() {
  !this.eat(m.semi) && !this.insertSemicolon() && this.unexpected();
};
Ve.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
Ve.expect = function(e) {
  this.eat(e) || this.unexpected();
};
Ve.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
var pi = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
Ve.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var r = t ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, t ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
Ve.checkExpressionErrors = function(e, t) {
  if (!e)
    return !1;
  var r = e.shorthandAssign, n = e.doubleProto;
  if (!t)
    return r >= 0 || n >= 0;
  r >= 0 && this.raise(r, "Shorthand property assignments are valid only in destructuring patterns"), n >= 0 && this.raiseRecoverable(n, "Redefinition of __proto__ property");
};
Ve.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
Ve.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var K = Se.prototype;
K.parseTopLevel = function(e) {
  var t = /* @__PURE__ */ Object.create(null);
  for (e.body || (e.body = []); this.type !== m.eof; ) {
    var r = this.parseStatement(null, !0, t);
    e.body.push(r);
  }
  if (this.inModule)
    for (var n = 0, i = Object.keys(this.undefinedExports); n < i.length; n += 1) {
      var u = i[n];
      this.raiseRecoverable(this.undefinedExports[u].start, "Export '" + u + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType === "commonjs" ? "script" : this.options.sourceType, this.finishNode(e, "Program");
};
var Bu = { kind: "loop" }, Of = { kind: "switch" };
K.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  Pe.lastIndex = this.pos;
  var t = Pe.exec(this.input), r = this.pos + t[0].length, n = this.fullCharCodeAt(r);
  if (n === 91 || n === 92)
    return !0;
  if (e)
    return !1;
  if (n === 123)
    return !0;
  if (vt(n)) {
    var i = r;
    do
      r += n <= 65535 ? 1 : 2;
    while (qt(n = this.fullCharCodeAt(r)));
    if (n === 92)
      return !0;
    var u = this.input.slice(i, r);
    if (!Ba.test(u))
      return !0;
  }
  return !1;
};
K.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  Pe.lastIndex = this.pos;
  var e = Pe.exec(this.input), t = this.pos + e[0].length, r;
  return !ze.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(qt(r = this.fullCharCodeAt(t + 8)) || r === 92));
};
K.isUsingKeyword = function(e, t) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using"))
    return !1;
  Pe.lastIndex = this.pos;
  var r = Pe.exec(this.input), n = this.pos + r[0].length;
  if (ze.test(this.input.slice(this.pos, n)))
    return !1;
  if (e) {
    var i = n + 5, u;
    if (this.input.slice(n, i) !== "using" || i === this.input.length || qt(u = this.fullCharCodeAt(i)) || u === 92)
      return !1;
    Pe.lastIndex = i;
    var s = Pe.exec(this.input);
    if (n = i + s[0].length, s && ze.test(this.input.slice(i, n)))
      return !1;
  }
  var a = this.fullCharCodeAt(n);
  if (!vt(a) && a !== 92)
    return !1;
  var o = n;
  do
    n += a <= 65535 ? 1 : 2;
  while (qt(a = this.fullCharCodeAt(n)));
  if (a === 92)
    return !0;
  var c = this.input.slice(o, n);
  return !(Ba.test(c) || t && c === "of");
};
K.isAwaitUsing = function(e) {
  return this.isUsingKeyword(!0, e);
};
K.isUsing = function(e) {
  return this.isUsingKeyword(!1, e);
};
K.parseStatement = function(e, t, r) {
  var n = this.type, i = this.startNode(), u;
  switch (this.isLet(e) && (n = m._var, u = "let"), n) {
    case m._break:
    case m._continue:
      return this.parseBreakContinueStatement(i, n.keyword);
    case m._debugger:
      return this.parseDebuggerStatement(i);
    case m._do:
      return this.parseDoStatement(i);
    case m._for:
      return this.parseForStatement(i);
    case m._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(i, !1, !e);
    case m._class:
      return e && this.unexpected(), this.parseClass(i, !0);
    case m._if:
      return this.parseIfStatement(i);
    case m._return:
      return this.parseReturnStatement(i);
    case m._switch:
      return this.parseSwitchStatement(i);
    case m._throw:
      return this.parseThrowStatement(i);
    case m._try:
      return this.parseTryStatement(i);
    case m._const:
    case m._var:
      return u = u || this.value, e && u !== "var" && this.unexpected(), this.parseVarStatement(i, u);
    case m._while:
      return this.parseWhileStatement(i);
    case m._with:
      return this.parseWithStatement(i);
    case m.braceL:
      return this.parseBlock(!0, i);
    case m.semi:
      return this.parseEmptyStatement(i);
    case m._export:
    case m._import:
      if (this.options.ecmaVersion > 10 && n === m._import) {
        Pe.lastIndex = this.pos;
        var s = Pe.exec(this.input), a = this.pos + s[0].length, o = this.input.charCodeAt(a);
        if (o === 40 || o === 46)
          return this.parseExpressionStatement(i, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), n === m._import ? this.parseImport(i) : this.parseExport(i, r);
    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(i, !0, !e);
      var c = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
      if (c)
        return this.allowUsing || this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement"), c === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(i, !1, c), this.semicolon(), this.finishNode(i, "VariableDeclaration");
      var f = this.value, p = this.parseExpression();
      return n === m.name && p.type === "Identifier" && this.eat(m.colon) ? this.parseLabeledStatement(i, f, p, e) : this.parseExpressionStatement(i, p);
  }
};
K.parseBreakContinueStatement = function(e, t) {
  var r = t === "break";
  this.next(), this.eat(m.semi) || this.insertSemicolon() ? e.label = null : this.type !== m.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var n = 0; n < this.labels.length; ++n) {
    var i = this.labels[n];
    if ((e.label == null || i.name === e.label.name) && (i.kind != null && (r || i.kind === "loop") || e.label && r))
      break;
  }
  return n === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, r ? "BreakStatement" : "ContinueStatement");
};
K.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
K.parseDoStatement = function(e) {
  return this.next(), this.labels.push(Bu), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(m._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(m.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
K.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(Bu), this.enterScope(0), this.expect(m.parenL), this.type === m.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === m._var || this.type === m._const || r) {
    var n = this.startNode(), i = r ? "let" : this.value;
    return this.next(), this.parseVar(n, !0, i), this.finishNode(n, "VariableDeclaration"), this.parseForAfterInit(e, n, t);
  }
  var u = this.isContextual("let"), s = !1, a = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (a) {
    var o = this.startNode();
    return this.next(), a === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.parseVar(o, !0, a), this.finishNode(o, "VariableDeclaration"), this.parseForAfterInit(e, o, t);
  }
  var c = this.containsEsc, f = new pi(), p = this.start, l = t > -1 ? this.parseExprSubscripts(f, "await") : this.parseExpression(!0, f);
  return this.type === m._in || (s = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === m._in && this.unexpected(t), e.await = !0) : s && this.options.ecmaVersion >= 8 && (l.start === p && !c && l.type === "Identifier" && l.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = !1)), u && s && this.raise(l.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(l, !1, f), this.checkLValPattern(l), this.parseForIn(e, l)) : (this.checkExpressionErrors(f, !0), t > -1 && this.unexpected(t), this.parseFor(e, l));
};
K.parseForAfterInit = function(e, t, r) {
  return (this.type === m._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === m._in ? r > -1 && this.unexpected(r) : e.await = r > -1), this.parseForIn(e, t)) : (r > -1 && this.unexpected(r), this.parseFor(e, t));
};
K.parseFunctionStatement = function(e, t, r) {
  return this.next(), this.parseFunction(e, Kr | (r ? 0 : vu), !1, t);
};
K.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(m._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
K.parseReturnStatement = function(e) {
  return this.allowReturn || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(m.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
K.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(m.braceL), this.labels.push(Of), this.enterScope(qa);
  for (var t, r = !1; this.type !== m.braceR; )
    if (this.type === m._case || this.type === m._default) {
      var n = this.type === m._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), n ? t.test = this.parseExpression() : (r && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), r = !0, t.test = null), this.expect(m.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
K.parseThrowStatement = function(e) {
  return this.next(), ze.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var If = [];
K.parseCatchClauseParam = function() {
  var e = this.parseBindingAtom(), t = e.type === "Identifier";
  return this.enterScope(t ? Ua : 0), this.checkLValPattern(e, t ? Ka : Nt), this.expect(m.parenR), e;
};
K.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === m._catch) {
    var t = this.startNode();
    this.next(), this.eat(m.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(m._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
K.parseVarStatement = function(e, t, r) {
  return this.next(), this.parseVar(e, !1, t, r), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
K.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(Bu), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
K.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
K.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
K.parseLabeledStatement = function(e, t, r, n) {
  for (var i = 0, u = this.labels; i < u.length; i += 1) {
    var s = u[i];
    s.name === t && this.raise(r.start, "Label '" + t + "' is already declared");
  }
  for (var a = this.type.isLoop ? "loop" : this.type === m._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
    var c = this.labels[o];
    if (c.statementStart === e.start)
      c.statementStart = this.start, c.kind = a;
    else
      break;
  }
  return this.labels.push({ name: t, kind: a, statementStart: this.start }), e.body = this.parseStatement(n ? n.indexOf("label") === -1 ? n + "label" : n : "label"), this.labels.pop(), e.label = r, this.finishNode(e, "LabeledStatement");
};
K.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
K.parseBlock = function(e, t, r) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(m.braceL), e && this.enterScope(0); this.type !== m.braceR; ) {
    var n = this.parseStatement(null);
    t.body.push(n);
  }
  return r && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
K.parseFor = function(e, t) {
  return e.init = t, this.expect(m.semi), e.test = this.type === m.semi ? null : this.parseExpression(), this.expect(m.semi), e.update = this.type === m.parenR ? null : this.parseExpression(), this.expect(m.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
K.parseForIn = function(e, t) {
  var r = this.type === m._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!r || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(
    t.start,
    (r ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), e.left = t, e.right = r ? this.parseExpression() : this.parseMaybeAssign(), this.expect(m.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, r ? "ForInStatement" : "ForOfStatement");
};
K.parseVar = function(e, t, r, n) {
  for (e.declarations = [], e.kind = r; ; ) {
    var i = this.startNode();
    if (this.parseVarId(i, r), this.eat(m.eq) ? i.init = this.parseMaybeAssign(t) : !n && r === "const" && !(this.type === m._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !n && (r === "using" || r === "await using") && this.options.ecmaVersion >= 17 && this.type !== m._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + r + " declaration") : !n && i.id.type !== "Identifier" && !(t && (this.type === m._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : i.init = null, e.declarations.push(this.finishNode(i, "VariableDeclarator")), !this.eat(m.comma))
      break;
  }
  return e;
};
K.parseVarId = function(e, t) {
  e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? ju : Nt, !1);
};
var Kr = 1, vu = 2, Ya = 4;
K.parseFunction = function(e, t, r, n, i) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !n) && (this.type === m.star && t & vu && this.unexpected(), e.generator = this.eat(m.star)), this.options.ecmaVersion >= 8 && (e.async = !!n), t & Kr && (e.id = t & Ya && this.type !== m.name ? null : this.parseIdent(), e.id && !(t & vu) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? ju : Nt : Ga));
  var u = this.yieldPos, s = this.awaitPos, a = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ru(e.async, e.generator)), t & Kr || (e.id = this.type === m.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, r, !1, i), this.yieldPos = u, this.awaitPos = s, this.awaitIdentPos = a, this.finishNode(e, t & Kr ? "FunctionDeclaration" : "FunctionExpression");
};
K.parseFunctionParams = function(e) {
  this.expect(m.parenL), e.params = this.parseBindingList(m.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
K.parseClass = function(e, t) {
  this.next();
  var r = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var n = this.enterClassBody(), i = this.startNode(), u = !1;
  for (i.body = [], this.expect(m.braceL); this.type !== m.braceR; ) {
    var s = this.parseClassElement(e.superClass !== null);
    s && (i.body.push(s), s.type === "MethodDefinition" && s.kind === "constructor" ? (u && this.raiseRecoverable(s.start, "Duplicate constructor in the same class"), u = !0) : s.key && s.key.type === "PrivateIdentifier" && Ff(n, s) && this.raiseRecoverable(s.key.start, "Identifier '#" + s.key.name + "' has already been declared"));
  }
  return this.strict = r, this.next(), e.body = this.finishNode(i, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
K.parseClassElement = function(e) {
  if (this.eat(m.semi))
    return null;
  var t = this.options.ecmaVersion, r = this.startNode(), n = "", i = !1, u = !1, s = "method", a = !1;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(m.braceL))
      return this.parseClassStaticBlock(r), r;
    this.isClassElementNameStart() || this.type === m.star ? a = !0 : n = "static";
  }
  if (r.static = a, !n && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === m.star) && !this.canInsertSemicolon() ? u = !0 : n = "async"), !n && (t >= 9 || !u) && this.eat(m.star) && (i = !0), !n && !u && !i) {
    var o = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? s = o : n = o);
  }
  if (n ? (r.computed = !1, r.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), r.key.name = n, this.finishNode(r.key, "Identifier")) : this.parseClassElementName(r), t < 13 || this.type === m.parenL || s !== "method" || i || u) {
    var c = !r.static && Kn(r, "constructor"), f = c && e;
    c && s !== "method" && this.raise(r.key.start, "Constructor can't have get/set modifier"), r.kind = c ? "constructor" : s, this.parseClassMethod(r, i, u, f);
  } else
    this.parseClassField(r);
  return r;
};
K.isClassElementNameStart = function() {
  return this.type === m.name || this.type === m.privateId || this.type === m.num || this.type === m.string || this.type === m.bracketL || this.type.keyword;
};
K.parseClassElementName = function(e) {
  this.type === m.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = !1, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
};
K.parseClassMethod = function(e, t, r, n) {
  var i = e.key;
  e.kind === "constructor" ? (t && this.raise(i.start, "Constructor can't be a generator"), r && this.raise(i.start, "Constructor can't be an async method")) : e.static && Kn(e, "prototype") && this.raise(i.start, "Classes may not have a static property named prototype");
  var u = e.value = this.parseMethod(t, r, n);
  return e.kind === "get" && u.params.length !== 0 && this.raiseRecoverable(u.start, "getter should have no params"), e.kind === "set" && u.params.length !== 1 && this.raiseRecoverable(u.start, "setter should have exactly one param"), e.kind === "set" && u.params[0].type === "RestElement" && this.raiseRecoverable(u.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
};
K.parseClassField = function(e) {
  return Kn(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && Kn(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(m.eq) ? (this.enterScope(an | li), e.value = this.parseMaybeAssign(), this.exitScope()) : e.value = null, this.semicolon(), this.finishNode(e, "PropertyDefinition");
};
K.parseClassStaticBlock = function(e) {
  e.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope(lr | li); this.type !== m.braceR; ) {
    var r = this.parseStatement(null);
    e.body.push(r);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
};
K.parseClassId = function(e, t) {
  this.type === m.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, Nt, !1)) : (t === !0 && this.unexpected(), e.id = null);
};
K.parseClassSuper = function(e) {
  e.superClass = this.eat(m._extends) ? this.parseExprSubscripts(null, !1) : null;
};
K.enterClassBody = function() {
  var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(e), e.declared;
};
K.exitClassBody = function() {
  var e = this.privateNameStack.pop(), t = e.declared, r = e.used;
  if (this.options.checkPrivateFields)
    for (var n = this.privateNameStack.length, i = n === 0 ? null : this.privateNameStack[n - 1], u = 0; u < r.length; ++u) {
      var s = r[u];
      Or(t, s.name) || (i ? i.used.push(s) : this.raiseRecoverable(s.start, "Private field '#" + s.name + "' must be declared in an enclosing class"));
    }
};
function Ff(e, t) {
  var r = t.key.name, n = e[r], i = "true";
  return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (i = (t.static ? "s" : "i") + t.kind), n === "iget" && i === "iset" || n === "iset" && i === "iget" || n === "sget" && i === "sset" || n === "sset" && i === "sget" ? (e[r] = "true", !1) : n ? !0 : (e[r] = i, !1);
}
function Kn(e, t) {
  var r = e.computed, n = e.key;
  return !r && (n.type === "Identifier" && n.name === t || n.type === "Literal" && n.value === t);
}
K.parseExportAllDeclaration = function(e, t) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== m.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
};
K.parseExport = function(e, t) {
  if (this.next(), this.eat(m.star))
    return this.parseExportAllDeclaration(e, t);
  if (this.eat(m._default))
    return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement())
    e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from"))
      this.type !== m.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause());
    else {
      for (var r = 0, n = e.specifiers; r < n.length; r += 1) {
        var i = n[r];
        this.checkUnreserved(i.local), this.checkLocalExport(i.local), i.local.type === "Literal" && this.raise(i.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
K.parseExportDeclaration = function(e) {
  return this.parseStatement(null);
};
K.parseExportDefaultDeclaration = function() {
  var e;
  if (this.type === m._function || (e = this.isAsyncFunction())) {
    var t = this.startNode();
    return this.next(), e && this.next(), this.parseFunction(t, Kr | Ya, !1, e);
  } else if (this.type === m._class) {
    var r = this.startNode();
    return this.parseClass(r, "nullableID");
  } else {
    var n = this.parseMaybeAssign();
    return this.semicolon(), n;
  }
};
K.checkExport = function(e, t, r) {
  e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), Or(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"), e[t] = !0);
};
K.checkPatternExport = function(e, t) {
  var r = t.type;
  if (r === "Identifier")
    this.checkExport(e, t, t.start);
  else if (r === "ObjectPattern")
    for (var n = 0, i = t.properties; n < i.length; n += 1) {
      var u = i[n];
      this.checkPatternExport(e, u);
    }
  else if (r === "ArrayPattern")
    for (var s = 0, a = t.elements; s < a.length; s += 1) {
      var o = a[s];
      o && this.checkPatternExport(e, o);
    }
  else r === "Property" ? this.checkPatternExport(e, t.value) : r === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : r === "RestElement" && this.checkPatternExport(e, t.argument);
};
K.checkVariableExport = function(e, t) {
  if (e)
    for (var r = 0, n = t; r < n.length; r += 1) {
      var i = n[r];
      this.checkPatternExport(e, i.id);
    }
};
K.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
K.parseExportSpecifier = function(e) {
  var t = this.startNode();
  return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(
    e,
    t.exported,
    t.exported.start
  ), this.finishNode(t, "ExportSpecifier");
};
K.parseExportSpecifiers = function(e) {
  var t = [], r = !0;
  for (this.expect(m.braceL); !this.eat(m.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(m.comma), this.afterTrailingComma(m.braceR))
      break;
    t.push(this.parseExportSpecifier(e));
  }
  return t;
};
K.parseImport = function(e) {
  return this.next(), this.type === m.string ? (e.specifiers = If, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === m.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
K.parseImportSpecifier = function() {
  var e = this.startNode();
  return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, Nt), this.finishNode(e, "ImportSpecifier");
};
K.parseImportDefaultSpecifier = function() {
  var e = this.startNode();
  return e.local = this.parseIdent(), this.checkLValSimple(e.local, Nt), this.finishNode(e, "ImportDefaultSpecifier");
};
K.parseImportNamespaceSpecifier = function() {
  var e = this.startNode();
  return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, Nt), this.finishNode(e, "ImportNamespaceSpecifier");
};
K.parseImportSpecifiers = function() {
  var e = [], t = !0;
  if (this.type === m.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(m.comma)))
    return e;
  if (this.type === m.star)
    return e.push(this.parseImportNamespaceSpecifier()), e;
  for (this.expect(m.braceL); !this.eat(m.braceR); ) {
    if (t)
      t = !1;
    else if (this.expect(m.comma), this.afterTrailingComma(m.braceR))
      break;
    e.push(this.parseImportSpecifier());
  }
  return e;
};
K.parseWithClause = function() {
  var e = [];
  if (!this.eat(m._with))
    return e;
  this.expect(m.braceL);
  for (var t = {}, r = !0; !this.eat(m.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(m.comma), this.afterTrailingComma(m.braceR))
      break;
    var n = this.parseImportAttribute(), i = n.key.type === "Identifier" ? n.key.name : n.key.value;
    Or(t, i) && this.raiseRecoverable(n.key.start, "Duplicate attribute key '" + i + "'"), t[i] = !0, e.push(n);
  }
  return e;
};
K.parseImportAttribute = function() {
  var e = this.startNode();
  return e.key = this.type === m.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(m.colon), this.type !== m.string && this.unexpected(), e.value = this.parseExprAtom(), this.finishNode(e, "ImportAttribute");
};
K.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === m.string) {
    var e = this.parseLiteral(this.value);
    return Af.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
  }
  return this.parseIdent(!0);
};
K.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
K.isDirectiveCandidate = function(e) {
  return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && // Reject parenthesized strings.
  (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var st = Se.prototype;
st.toAssignable = function(e, t, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        e.type = "ObjectPattern", r && this.checkPatternErrors(r, !0);
        for (var n = 0, i = e.properties; n < i.length; n += 1) {
          var u = i[n];
          this.toAssignable(u, t), u.type === "RestElement" && (u.argument.type === "ArrayPattern" || u.argument.type === "ObjectPattern") && this.raise(u.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        e.type = "ArrayPattern", r && this.checkPatternErrors(r, !0), this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, r);
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!t)
          break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else r && this.checkPatternErrors(r, !0);
  return e;
};
st.toAssignableList = function(e, t) {
  for (var r = e.length, n = 0; n < r; n++) {
    var i = e[n];
    i && this.toAssignable(i, t);
  }
  if (r) {
    var u = e[r - 1];
    this.options.ecmaVersion === 6 && t && u && u.type === "RestElement" && u.argument.type !== "Identifier" && this.unexpected(u.argument.start);
  }
  return e;
};
st.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
};
st.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== m.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
st.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case m.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(m.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
      case m.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
st.parseBindingList = function(e, t, r, n) {
  for (var i = [], u = !0; !this.eat(e); )
    if (u ? u = !1 : this.expect(m.comma), t && this.type === m.comma)
      i.push(null);
    else {
      if (r && this.afterTrailingComma(e))
        break;
      if (this.type === m.ellipsis) {
        var s = this.parseRestBinding();
        this.parseBindingListItem(s), i.push(s), this.type === m.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else
        i.push(this.parseAssignableListItem(n));
    }
  return i;
};
st.parseAssignableListItem = function(e) {
  var t = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(t), t;
};
st.parseBindingListItem = function(e) {
  return e;
};
st.parseMaybeDefault = function(e, t, r) {
  if (r = r || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(m.eq))
    return r;
  var n = this.startNodeAt(e, t);
  return n.left = r, n.right = this.parseMaybeAssign(), this.finishNode(n, "AssignmentPattern");
};
st.checkLValSimple = function(e, t, r) {
  t === void 0 && (t = Gn);
  var n = t !== Gn;
  switch (e.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (n ? "Binding " : "Assigning to ") + e.name + " in strict mode"), n && (t === Nt && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), r && (Or(r, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), r[e.name] = !0), t !== Za && this.declareName(e.name, t, e.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      n && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return n && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, r);
    default:
      this.raise(e.start, (n ? "Binding" : "Assigning to") + " rvalue");
  }
};
st.checkLValPattern = function(e, t, r) {
  switch (t === void 0 && (t = Gn), e.type) {
    case "ObjectPattern":
      for (var n = 0, i = e.properties; n < i.length; n += 1) {
        var u = i[n];
        this.checkLValInnerPattern(u, t, r);
      }
      break;
    case "ArrayPattern":
      for (var s = 0, a = e.elements; s < a.length; s += 1) {
        var o = a[s];
        o && this.checkLValInnerPattern(o, t, r);
      }
      break;
    default:
      this.checkLValSimple(e, t, r);
  }
};
st.checkLValInnerPattern = function(e, t, r) {
  switch (t === void 0 && (t = Gn), e.type) {
    case "Property":
      this.checkLValInnerPattern(e.value, t, r);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(e.left, t, r);
      break;
    case "RestElement":
      this.checkLValPattern(e.argument, t, r);
      break;
    default:
      this.checkLValPattern(e, t, r);
  }
};
var ft = function(t, r, n, i, u) {
  this.token = t, this.isExpr = !!r, this.preserveSpace = !!n, this.override = i, this.generator = !!u;
}, xe = {
  b_stat: new ft("{", !1),
  b_expr: new ft("{", !0),
  b_tmpl: new ft("${", !1),
  p_stat: new ft("(", !1),
  p_expr: new ft("(", !0),
  q_tmpl: new ft("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new ft("function", !1),
  f_expr: new ft("function", !0),
  f_expr_gen: new ft("function", !0, !1, null, !0),
  f_gen: new ft("function", !1, !1, null, !0)
}, Ir = Se.prototype;
Ir.initialContext = function() {
  return [xe.b_stat];
};
Ir.curContext = function() {
  return this.context[this.context.length - 1];
};
Ir.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === xe.f_expr || t === xe.f_stat ? !0 : e === m.colon && (t === xe.b_stat || t === xe.b_expr) ? !t.isExpr : e === m._return || e === m.name && this.exprAllowed ? ze.test(this.input.slice(this.lastTokEnd, this.start)) : e === m._else || e === m.semi || e === m.eof || e === m.parenR || e === m.arrow ? !0 : e === m.braceL ? t === xe.b_stat : e === m._var || e === m._const || e === m.name ? !1 : !this.exprAllowed;
};
Ir.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
Ir.updateContext = function(e) {
  var t, r = this.type;
  r.keyword && e === m.dot ? this.exprAllowed = !1 : (t = r.updateContext) ? t.call(this, e) : this.exprAllowed = r.beforeExpr;
};
Ir.overrideContext = function(e) {
  this.curContext() !== e && (this.context[this.context.length - 1] = e);
};
m.parenR.updateContext = m.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === xe.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
m.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? xe.b_stat : xe.b_expr), this.exprAllowed = !0;
};
m.dollarBraceL.updateContext = function() {
  this.context.push(xe.b_tmpl), this.exprAllowed = !0;
};
m.parenL.updateContext = function(e) {
  var t = e === m._if || e === m._for || e === m._with || e === m._while;
  this.context.push(t ? xe.p_stat : xe.p_expr), this.exprAllowed = !0;
};
m.incDec.updateContext = function() {
};
m._function.updateContext = m._class.updateContext = function(e) {
  e.beforeExpr && e !== m._else && !(e === m.semi && this.curContext() !== xe.p_stat) && !(e === m._return && ze.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === m.colon || e === m.braceL) && this.curContext() === xe.b_stat) ? this.context.push(xe.f_expr) : this.context.push(xe.f_stat), this.exprAllowed = !1;
};
m.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
m.backQuote.updateContext = function() {
  this.curContext() === xe.q_tmpl ? this.context.pop() : this.context.push(xe.q_tmpl), this.exprAllowed = !1;
};
m.star.updateContext = function(e) {
  if (e === m._function) {
    var t = this.context.length - 1;
    this.context[t] === xe.f_expr ? this.context[t] = xe.f_expr_gen : this.context[t] = xe.f_gen;
  }
  this.exprAllowed = !0;
};
m.name.updateContext = function(e) {
  var t = !1;
  this.options.ecmaVersion >= 6 && e !== m.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var re = Se.prototype;
re.checkPropClash = function(e, t, r) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var n = e.key, i;
    switch (n.type) {
      case "Identifier":
        i = n.name;
        break;
      case "Literal":
        i = String(n.value);
        break;
      default:
        return;
    }
    var u = e.kind;
    if (this.options.ecmaVersion >= 6) {
      i === "__proto__" && u === "init" && (t.proto && (r ? r.doubleProto < 0 && (r.doubleProto = n.start) : this.raiseRecoverable(n.start, "Redefinition of __proto__ property")), t.proto = !0);
      return;
    }
    i = "$" + i;
    var s = t[i];
    if (s) {
      var a;
      u === "init" ? a = this.strict && s.init || s.get || s.set : a = s.init || s[u], a && this.raiseRecoverable(n.start, "Redefinition of property");
    } else
      s = t[i] = {
        init: !1,
        get: !1,
        set: !1
      };
    s[u] = !0;
  }
};
re.parseExpression = function(e, t) {
  var r = this.start, n = this.startLoc, i = this.parseMaybeAssign(e, t);
  if (this.type === m.comma) {
    var u = this.startNodeAt(r, n);
    for (u.expressions = [i]; this.eat(m.comma); )
      u.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(u, "SequenceExpression");
  }
  return i;
};
re.parseMaybeAssign = function(e, t, r) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var n = !1, i = -1, u = -1, s = -1;
  t ? (i = t.parenthesizedAssign, u = t.trailingComma, s = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new pi(), n = !0);
  var a = this.start, o = this.startLoc;
  (this.type === m.parenL || this.type === m.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
  var c = this.parseMaybeConditional(e, t);
  if (r && (c = r.call(this, c, a, o)), this.type.isAssign) {
    var f = this.startNodeAt(a, o);
    return f.operator = this.value, this.type === m.eq && (c = this.toAssignable(c, !1, t)), n || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= c.start && (t.shorthandAssign = -1), this.type === m.eq ? this.checkLValPattern(c) : this.checkLValSimple(c), f.left = c, this.next(), f.right = this.parseMaybeAssign(e), s > -1 && (t.doubleProto = s), this.finishNode(f, "AssignmentExpression");
  } else
    n && this.checkExpressionErrors(t, !0);
  return i > -1 && (t.parenthesizedAssign = i), u > -1 && (t.trailingComma = u), c;
};
re.parseMaybeConditional = function(e, t) {
  var r = this.start, n = this.startLoc, i = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return i;
  if (this.eat(m.question)) {
    var u = this.startNodeAt(r, n);
    return u.test = i, u.consequent = this.parseMaybeAssign(), this.expect(m.colon), u.alternate = this.parseMaybeAssign(e), this.finishNode(u, "ConditionalExpression");
  }
  return i;
};
re.parseExprOps = function(e, t) {
  var r = this.start, n = this.startLoc, i = this.parseMaybeUnary(t, !1, !1, e);
  return this.checkExpressionErrors(t) || i.start === r && i.type === "ArrowFunctionExpression" ? i : this.parseExprOp(i, r, n, -1, e);
};
re.parseExprOp = function(e, t, r, n, i) {
  var u = this.type.binop;
  if (u != null && (!i || this.type !== m._in) && u > n) {
    var s = this.type === m.logicalOR || this.type === m.logicalAND, a = this.type === m.coalesce;
    a && (u = m.logicalAND.binop);
    var o = this.value;
    this.next();
    var c = this.start, f = this.startLoc, p = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, i), c, f, u, i), l = this.buildBinary(t, r, e, p, o, s || a);
    return (s && this.type === m.coalesce || a && (this.type === m.logicalOR || this.type === m.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(l, t, r, n, i);
  }
  return e;
};
re.buildBinary = function(e, t, r, n, i, u) {
  n.type === "PrivateIdentifier" && this.raise(n.start, "Private identifier can only be left side of binary expression");
  var s = this.startNodeAt(e, t);
  return s.left = r, s.operator = i, s.right = n, this.finishNode(s, u ? "LogicalExpression" : "BinaryExpression");
};
re.parseMaybeUnary = function(e, t, r, n) {
  var i = this.start, u = this.startLoc, s;
  if (this.isContextual("await") && this.canAwait)
    s = this.parseAwait(n), t = !0;
  else if (this.type.prefix) {
    var a = this.startNode(), o = this.type === m.incDec;
    a.operator = this.value, a.prefix = !0, this.next(), a.argument = this.parseMaybeUnary(null, !0, o, n), this.checkExpressionErrors(e, !0), o ? this.checkLValSimple(a.argument) : this.strict && a.operator === "delete" && Ja(a.argument) ? this.raiseRecoverable(a.start, "Deleting local variable in strict mode") : a.operator === "delete" && wu(a.argument) ? this.raiseRecoverable(a.start, "Private fields can not be deleted") : t = !0, s = this.finishNode(a, o ? "UpdateExpression" : "UnaryExpression");
  } else if (!t && this.type === m.privateId)
    (n || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), s = this.parsePrivateIdent(), this.type !== m._in && this.unexpected();
  else {
    if (s = this.parseExprSubscripts(e, n), this.checkExpressionErrors(e))
      return s;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var c = this.startNodeAt(i, u);
      c.operator = this.value, c.prefix = !1, c.argument = s, this.checkLValSimple(s), this.next(), s = this.finishNode(c, "UpdateExpression");
    }
  }
  if (!r && this.eat(m.starstar))
    if (t)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(i, u, s, this.parseMaybeUnary(null, !1, !1, n), "**", !1);
  else
    return s;
};
function Ja(e) {
  return e.type === "Identifier" || e.type === "ParenthesizedExpression" && Ja(e.expression);
}
function wu(e) {
  return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && wu(e.expression) || e.type === "ParenthesizedExpression" && wu(e.expression);
}
re.parseExprSubscripts = function(e, t) {
  var r = this.start, n = this.startLoc, i = this.parseExprAtom(e, t);
  if (i.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return i;
  var u = this.parseSubscripts(i, r, n, !1, t);
  return e && u.type === "MemberExpression" && (e.parenthesizedAssign >= u.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= u.start && (e.parenthesizedBind = -1), e.trailingComma >= u.start && (e.trailingComma = -1)), u;
};
re.parseSubscripts = function(e, t, r, n, i) {
  for (var u = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, s = !1; ; ) {
    var a = this.parseSubscript(e, t, r, n, u, s, i);
    if (a.optional && (s = !0), a === e || a.type === "ArrowFunctionExpression") {
      if (s) {
        var o = this.startNodeAt(t, r);
        o.expression = a, a = this.finishNode(o, "ChainExpression");
      }
      return a;
    }
    e = a;
  }
};
re.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(m.arrow);
};
re.parseSubscriptAsyncArrow = function(e, t, r, n) {
  return this.parseArrowExpression(this.startNodeAt(e, t), r, !0, n);
};
re.parseSubscript = function(e, t, r, n, i, u, s) {
  var a = this.options.ecmaVersion >= 11, o = a && this.eat(m.questionDot);
  n && o && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var c = this.eat(m.bracketL);
  if (c || o && this.type !== m.parenL && this.type !== m.backQuote || this.eat(m.dot)) {
    var f = this.startNodeAt(t, r);
    f.object = e, c ? (f.property = this.parseExpression(), this.expect(m.bracketR)) : this.type === m.privateId && e.type !== "Super" ? f.property = this.parsePrivateIdent() : f.property = this.parseIdent(this.options.allowReserved !== "never"), f.computed = !!c, a && (f.optional = o), e = this.finishNode(f, "MemberExpression");
  } else if (!n && this.eat(m.parenL)) {
    var p = new pi(), l = this.yieldPos, h = this.awaitPos, d = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var _ = this.parseExprList(m.parenR, this.options.ecmaVersion >= 8, !1, p);
    if (i && !o && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(p, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = l, this.awaitPos = h, this.awaitIdentPos = d, this.parseSubscriptAsyncArrow(t, r, _, s);
    this.checkExpressionErrors(p, !0), this.yieldPos = l || this.yieldPos, this.awaitPos = h || this.awaitPos, this.awaitIdentPos = d || this.awaitIdentPos;
    var w = this.startNodeAt(t, r);
    w.callee = e, w.arguments = _, a && (w.optional = o), e = this.finishNode(w, "CallExpression");
  } else if (this.type === m.backQuote) {
    (o || u) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var C = this.startNodeAt(t, r);
    C.tag = e, C.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(C, "TaggedTemplateExpression");
  }
  return e;
};
re.parseExprAtom = function(e, t, r) {
  this.type === m.slash && this.readRegexp();
  var n, i = this.potentialArrowAt === this.start;
  switch (this.type) {
    case m._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), n = this.startNode(), this.next(), this.type === m.parenL && !this.allowDirectSuper && this.raise(n.start, "super() call outside constructor of a subclass"), this.type !== m.dot && this.type !== m.bracketL && this.type !== m.parenL && this.unexpected(), this.finishNode(n, "Super");
    case m._this:
      return n = this.startNode(), this.next(), this.finishNode(n, "ThisExpression");
    case m.name:
      var u = this.start, s = this.startLoc, a = this.containsEsc, o = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !a && o.name === "async" && !this.canInsertSemicolon() && this.eat(m._function))
        return this.overrideContext(xe.f_expr), this.parseFunction(this.startNodeAt(u, s), 0, !1, !0, t);
      if (i && !this.canInsertSemicolon()) {
        if (this.eat(m.arrow))
          return this.parseArrowExpression(this.startNodeAt(u, s), [o], !1, t);
        if (this.options.ecmaVersion >= 8 && o.name === "async" && this.type === m.name && !a && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return o = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(m.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(u, s), [o], !0, t);
      }
      return o;
    case m.regexp:
      var c = this.value;
      return n = this.parseLiteral(c.value), n.regex = { pattern: c.pattern, flags: c.flags }, n;
    case m.num:
    case m.string:
      return this.parseLiteral(this.value);
    case m._null:
    case m._true:
    case m._false:
      return n = this.startNode(), n.value = this.type === m._null ? null : this.type === m._true, n.raw = this.type.keyword, this.next(), this.finishNode(n, "Literal");
    case m.parenL:
      var f = this.start, p = this.parseParenAndDistinguishExpression(i, t);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(p) && (e.parenthesizedAssign = f), e.parenthesizedBind < 0 && (e.parenthesizedBind = f)), p;
    case m.bracketL:
      return n = this.startNode(), this.next(), n.elements = this.parseExprList(m.bracketR, !0, !0, e), this.finishNode(n, "ArrayExpression");
    case m.braceL:
      return this.overrideContext(xe.b_expr), this.parseObj(!1, e);
    case m._function:
      return n = this.startNode(), this.next(), this.parseFunction(n, 0);
    case m._class:
      return this.parseClass(this.startNode(), !1);
    case m._new:
      return this.parseNew();
    case m.backQuote:
      return this.parseTemplate();
    case m._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(r) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
re.parseExprAtomDefault = function() {
  this.unexpected();
};
re.parseExprImport = function(e) {
  var t = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === m.parenL && !e)
    return this.parseDynamicImport(t);
  if (this.type === m.dot) {
    var r = this.startNodeAt(t.start, t.loc && t.loc.start);
    return r.name = "import", t.meta = this.finishNode(r, "Identifier"), this.parseImportMeta(t);
  } else
    this.unexpected();
};
re.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(m.parenR) ? e.options = null : (this.expect(m.comma), this.afterTrailingComma(m.parenR) ? e.options = null : (e.options = this.parseMaybeAssign(), this.eat(m.parenR) || (this.expect(m.comma), this.afterTrailingComma(m.parenR) || this.unexpected())));
  else if (!this.eat(m.parenR)) {
    var t = this.start;
    this.eat(m.comma) && this.eat(m.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
re.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
re.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.value != null ? t.value.toString() : t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
re.parseParenExpression = function() {
  this.expect(m.parenL);
  var e = this.parseExpression();
  return this.expect(m.parenR), e;
};
re.shouldParseArrow = function(e) {
  return !this.canInsertSemicolon();
};
re.parseParenAndDistinguishExpression = function(e, t) {
  var r = this.start, n = this.startLoc, i, u = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var s = this.start, a = this.startLoc, o = [], c = !0, f = !1, p = new pi(), l = this.yieldPos, h = this.awaitPos, d;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== m.parenR; )
      if (c ? c = !1 : this.expect(m.comma), u && this.afterTrailingComma(m.parenR, !0)) {
        f = !0;
        break;
      } else if (this.type === m.ellipsis) {
        d = this.start, o.push(this.parseParenItem(this.parseRestBinding())), this.type === m.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        o.push(this.parseMaybeAssign(!1, p, this.parseParenItem));
    var _ = this.lastTokEnd, w = this.lastTokEndLoc;
    if (this.expect(m.parenR), e && this.shouldParseArrow(o) && this.eat(m.arrow))
      return this.checkPatternErrors(p, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = l, this.awaitPos = h, this.parseParenArrowList(r, n, o, t);
    (!o.length || f) && this.unexpected(this.lastTokStart), d && this.unexpected(d), this.checkExpressionErrors(p, !0), this.yieldPos = l || this.yieldPos, this.awaitPos = h || this.awaitPos, o.length > 1 ? (i = this.startNodeAt(s, a), i.expressions = o, this.finishNodeAt(i, "SequenceExpression", _, w)) : i = o[0];
  } else
    i = this.parseParenExpression();
  if (this.options.preserveParens) {
    var C = this.startNodeAt(r, n);
    return C.expression = i, this.finishNode(C, "ParenthesizedExpression");
  } else
    return i;
};
re.parseParenItem = function(e) {
  return e;
};
re.parseParenArrowList = function(e, t, r, n) {
  return this.parseArrowExpression(this.startNodeAt(e, t), r, !1, n);
};
var Pf = [];
re.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === m.dot) {
    var t = this.startNodeAt(e.start, e.loc && e.loc.start);
    t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
    var r = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), r && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
  }
  var n = this.start, i = this.startLoc;
  return e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), n, i, !0, !1), this.eat(m.parenL) ? e.arguments = this.parseExprList(m.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = Pf, this.finishNode(e, "NewExpression");
};
re.parseTemplateElement = function(e) {
  var t = e.isTagged, r = this.startNode();
  return this.type === m.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), r.value = {
    raw: this.value.replace(/\r\n?/g, `
`),
    cooked: null
  }) : r.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), r.tail = this.type === m.backQuote, this.finishNode(r, "TemplateElement");
};
re.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var r = this.startNode();
  this.next(), r.expressions = [];
  var n = this.parseTemplateElement({ isTagged: t });
  for (r.quasis = [n]; !n.tail; )
    this.type === m.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(m.dollarBraceL), r.expressions.push(this.parseExpression()), this.expect(m.braceR), r.quasis.push(n = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(r, "TemplateLiteral");
};
re.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === m.name || this.type === m.num || this.type === m.string || this.type === m.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === m.star) && !ze.test(this.input.slice(this.lastTokEnd, this.start));
};
re.parseObj = function(e, t) {
  var r = this.startNode(), n = !0, i = {};
  for (r.properties = [], this.next(); !this.eat(m.braceR); ) {
    if (n)
      n = !1;
    else if (this.expect(m.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(m.braceR))
      break;
    var u = this.parseProperty(e, t);
    e || this.checkPropClash(u, i, t), r.properties.push(u);
  }
  return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression");
};
re.parseProperty = function(e, t) {
  var r = this.startNode(), n, i, u, s;
  if (this.options.ecmaVersion >= 9 && this.eat(m.ellipsis))
    return e ? (r.argument = this.parseIdent(!1), this.type === m.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(r, "RestElement")) : (r.argument = this.parseMaybeAssign(!1, t), this.type === m.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(r, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (r.method = !1, r.shorthand = !1, (e || t) && (u = this.start, s = this.startLoc), e || (n = this.eat(m.star)));
  var a = this.containsEsc;
  return this.parsePropertyName(r), !e && !a && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(r) ? (i = !0, n = this.options.ecmaVersion >= 9 && this.eat(m.star), this.parsePropertyName(r)) : i = !1, this.parsePropertyValue(r, e, n, i, u, s, t, a), this.finishNode(r, "Property");
};
re.parseGetterSetter = function(e) {
  var t = e.key.name;
  this.parsePropertyName(e), e.value = this.parseMethod(!1), e.kind = t;
  var r = e.kind === "get" ? 0 : 1;
  if (e.value.params.length !== r) {
    var n = e.value.start;
    e.kind === "get" ? this.raiseRecoverable(n, "getter should have no params") : this.raiseRecoverable(n, "setter should have exactly one param");
  } else
    e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
};
re.parsePropertyValue = function(e, t, r, n, i, u, s, a) {
  (r || n) && this.type === m.colon && this.unexpected(), this.eat(m.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, s), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === m.parenL ? (t && this.unexpected(), e.method = !0, e.value = this.parseMethod(r, n), e.kind = "init") : !t && !a && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== m.comma && this.type !== m.braceR && this.type !== m.eq ? ((r || n) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((r || n) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = i), t ? e.value = this.parseMaybeDefault(i, u, this.copyNode(e.key)) : this.type === m.eq && s ? (s.shorthandAssign < 0 && (s.shorthandAssign = this.start), e.value = this.parseMaybeDefault(i, u, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.kind = "init", e.shorthand = !0) : this.unexpected();
};
re.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(m.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(m.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === m.num || this.type === m.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
re.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
re.parseMethod = function(e, t, r) {
  var n = this.startNode(), i = this.yieldPos, u = this.awaitPos, s = this.awaitIdentPos;
  return this.initFunction(n), this.options.ecmaVersion >= 6 && (n.generator = e), this.options.ecmaVersion >= 8 && (n.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ru(t, n.generator) | li | (r ? Ha : 0)), this.expect(m.parenL), n.params = this.parseBindingList(m.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(n, !1, !0, !1), this.yieldPos = i, this.awaitPos = u, this.awaitIdentPos = s, this.finishNode(n, "FunctionExpression");
};
re.parseArrowExpression = function(e, t, r, n) {
  var i = this.yieldPos, u = this.awaitPos, s = this.awaitIdentPos;
  return this.enterScope(Ru(r, !1) | Nu), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, n), this.yieldPos = i, this.awaitPos = u, this.awaitIdentPos = s, this.finishNode(e, "ArrowFunctionExpression");
};
re.parseFunctionBody = function(e, t, r, n) {
  var i = t && this.type !== m.braceL, u = this.strict, s = !1;
  if (i)
    e.body = this.parseMaybeAssign(n), e.expression = !0, this.checkParams(e, !1);
  else {
    var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!u || a) && (s = this.strictDirective(this.end), s && a && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var o = this.labels;
    this.labels = [], s && (this.strict = !0), this.checkParams(e, !u && !s && !t && !r && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, Za), e.body = this.parseBlock(!1, void 0, s && !u), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = o;
  }
  this.exitScope();
};
re.isSimpleParamList = function(e) {
  for (var t = 0, r = e; t < r.length; t += 1) {
    var n = r[t];
    if (n.type !== "Identifier")
      return !1;
  }
  return !0;
};
re.checkParams = function(e, t) {
  for (var r = /* @__PURE__ */ Object.create(null), n = 0, i = e.params; n < i.length; n += 1) {
    var u = i[n];
    this.checkLValInnerPattern(u, ju, t ? null : r);
  }
};
re.parseExprList = function(e, t, r, n) {
  for (var i = [], u = !0; !this.eat(e); ) {
    if (u)
      u = !1;
    else if (this.expect(m.comma), t && this.afterTrailingComma(e))
      break;
    var s = void 0;
    r && this.type === m.comma ? s = null : this.type === m.ellipsis ? (s = this.parseSpread(n), n && this.type === m.comma && n.trailingComma < 0 && (n.trailingComma = this.start)) : s = this.parseMaybeAssign(!1, n), i.push(s);
  }
  return i;
};
re.checkUnreserved = function(e) {
  var t = e.start, r = e.end, n = e.name;
  if (this.inGenerator && n === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && n === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & fi) && n === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (n === "arguments" || n === "await") && this.raise(t, "Cannot use " + n + " in class static initialization block"), this.keywords.test(n) && this.raise(t, "Unexpected keyword '" + n + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, r).indexOf("\\") !== -1)) {
    var i = this.strict ? this.reservedWordsStrict : this.reservedWords;
    i.test(n) && (!this.inAsync && n === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + n + "' is reserved"));
  }
};
re.parseIdent = function(e) {
  var t = this.parseIdentNode();
  return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
};
re.parseIdentNode = function() {
  var e = this.startNode();
  return this.type === m.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = m.name) : this.unexpected(), e;
};
re.parsePrivateIdent = function() {
  var e = this.startNode();
  return this.type === m.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
};
re.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === m.semi || this.canInsertSemicolon() || this.type !== m.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(m.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
re.parseAwait = function(e) {
  this.awaitPos || (this.awaitPos = this.start);
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
};
var Zn = Se.prototype;
Zn.raise = function(e, t) {
  var r = Wa(this.input, e);
  t += " (" + r.line + ":" + r.column + ")", this.sourceFile && (t += " in " + this.sourceFile);
  var n = new SyntaxError(t);
  throw n.pos = e, n.loc = r, n.raisedAt = this.pos, n;
};
Zn.raiseRecoverable = Zn.raise;
Zn.curPosition = function() {
  if (this.options.locations)
    return new Zr(this.curLine, this.pos - this.lineStart);
};
var Kt = Se.prototype, Lf = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [];
};
Kt.enterScope = function(e) {
  this.scopeStack.push(new Lf(e));
};
Kt.exitScope = function() {
  this.scopeStack.pop();
};
Kt.treatFunctionsAsVarInScope = function(e) {
  return e.flags & cr || !this.inModule && e.flags & or;
};
Kt.declareName = function(e, t, r) {
  var n = !1;
  if (t === Nt) {
    var i = this.currentScope();
    n = i.lexical.indexOf(e) > -1 || i.functions.indexOf(e) > -1 || i.var.indexOf(e) > -1, i.lexical.push(e), this.inModule && i.flags & or && delete this.undefinedExports[e];
  } else if (t === Ka) {
    var u = this.currentScope();
    u.lexical.push(e);
  } else if (t === Ga) {
    var s = this.currentScope();
    this.treatFunctionsAsVar ? n = s.lexical.indexOf(e) > -1 : n = s.lexical.indexOf(e) > -1 || s.var.indexOf(e) > -1, s.functions.push(e);
  } else
    for (var a = this.scopeStack.length - 1; a >= 0; --a) {
      var o = this.scopeStack[a];
      if (o.lexical.indexOf(e) > -1 && !(o.flags & Ua && o.lexical[0] === e) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(e) > -1) {
        n = !0;
        break;
      }
      if (o.var.push(e), this.inModule && o.flags & or && delete this.undefinedExports[e], o.flags & fi)
        break;
    }
  n && this.raiseRecoverable(r, "Identifier '" + e + "' has already been declared");
};
Kt.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
Kt.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
Kt.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (fi | an | lr))
      return t;
  }
};
Kt.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (fi | an | lr) && !(t.flags & Nu))
      return t;
  }
};
var hi = function(t, r, n) {
  this.type = "", this.start = r, this.end = 0, t.options.locations && (this.loc = new ci(t, n)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [r, 0]);
}, on = Se.prototype;
on.startNode = function() {
  return new hi(this, this.start, this.startLoc);
};
on.startNodeAt = function(e, t) {
  return new hi(this, e, t);
};
function Xa(e, t, r, n) {
  return e.type = t, e.end = r, this.options.locations && (e.loc.end = n), this.options.ranges && (e.range[1] = r), e;
}
on.finishNode = function(e, t) {
  return Xa.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
on.finishNodeAt = function(e, t, r, n) {
  return Xa.call(this, e, t, r, n);
};
on.copyNode = function(e) {
  var t = new hi(this, e.start, this.startLoc);
  for (var r in e)
    t[r] = e[r];
  return t;
};
var Nf = "Berf Beria_Erfe Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sidetic Sidt Sunu Sunuwar Tai_Yo Tayo Todhri Todr Tolong_Siki Tols Tulu_Tigalari Tutg Unknown Zzzz", Qa = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", eo = Qa + " Extended_Pictographic", to = eo, ro = to + " EBase EComp EMod EPres ExtPict", no = ro, Rf = no, jf = {
  9: Qa,
  10: eo,
  11: to,
  12: ro,
  13: no,
  14: Rf
}, Bf = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", Mf = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: Bf
}, ws = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", io = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", uo = io + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", so = uo + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", ao = so + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", oo = ao + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", Vf = oo + " " + Nf, $f = {
  9: io,
  10: uo,
  11: so,
  12: ao,
  13: oo,
  14: Vf
}, co = {};
function Wf(e) {
  var t = co[e] = {
    binary: Wt(jf[e] + " " + ws),
    binaryOfStrings: Wt(Mf[e]),
    nonBinary: {
      General_Category: Wt(ws),
      Script: Wt($f[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var Ui = 0, ks = [9, 10, 11, 12, 13, 14]; Ui < ks.length; Ui += 1) {
  var zf = ks[Ui];
  Wf(zf);
}
var G = Se.prototype, Yn = function(t, r) {
  this.parent = t, this.base = r || this;
};
Yn.prototype.separatedFrom = function(t) {
  for (var r = this; r; r = r.parent)
    for (var n = t; n; n = n.parent)
      if (r.base === n.base && r !== n)
        return !0;
  return !1;
};
Yn.prototype.sibling = function() {
  return new Yn(this.parent, this.base);
};
var wt = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = co[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
wt.prototype.reset = function(t, r, n) {
  var i = n.indexOf("v") !== -1, u = n.indexOf("u") !== -1;
  this.start = t | 0, this.source = r + "", this.flags = n, i && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = u && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = u && this.parser.options.ecmaVersion >= 9);
};
wt.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
wt.prototype.at = function(t, r) {
  r === void 0 && (r = !1);
  var n = this.source, i = n.length;
  if (t >= i)
    return -1;
  var u = n.charCodeAt(t);
  if (!(r || this.switchU) || u <= 55295 || u >= 57344 || t + 1 >= i)
    return u;
  var s = n.charCodeAt(t + 1);
  return s >= 56320 && s <= 57343 ? (u << 10) + s - 56613888 : u;
};
wt.prototype.nextIndex = function(t, r) {
  r === void 0 && (r = !1);
  var n = this.source, i = n.length;
  if (t >= i)
    return i;
  var u = n.charCodeAt(t), s;
  return !(r || this.switchU) || u <= 55295 || u >= 57344 || t + 1 >= i || (s = n.charCodeAt(t + 1)) < 56320 || s > 57343 ? t + 1 : t + 2;
};
wt.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
wt.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
wt.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
wt.prototype.eat = function(t, r) {
  return r === void 0 && (r = !1), this.current(r) === t ? (this.advance(r), !0) : !1;
};
wt.prototype.eatChars = function(t, r) {
  r === void 0 && (r = !1);
  for (var n = this.pos, i = 0, u = t; i < u.length; i += 1) {
    var s = u[i], a = this.at(n, r);
    if (a === -1 || a !== s)
      return !1;
    n = this.nextIndex(n, r);
  }
  return this.pos = n, !0;
};
G.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, r = e.flags, n = !1, i = !1, u = 0; u < r.length; u++) {
    var s = r.charAt(u);
    t.indexOf(s) === -1 && this.raise(e.start, "Invalid regular expression flag"), r.indexOf(s, u + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), s === "u" && (n = !0), s === "v" && (i = !0);
  }
  this.options.ecmaVersion >= 15 && n && i && this.raise(e.start, "Invalid regular expression flag");
};
function Uf(e) {
  for (var t in e)
    return !0;
  return !1;
}
G.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && Uf(e.groupNames) && (e.switchN = !0, this.regexp_pattern(e));
};
G.regexp_pattern = function(e) {
  e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames = /* @__PURE__ */ Object.create(null), e.backReferenceNames.length = 0, e.branchID = null, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(
    41
    /* ) */
  ) && e.raise("Unmatched ')'"), (e.eat(
    93
    /* ] */
  ) || e.eat(
    125
    /* } */
  )) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var t = 0, r = e.backReferenceNames; t < r.length; t += 1) {
    var n = r[t];
    e.groupNames[n] || e.raise("Invalid named capture referenced");
  }
};
G.regexp_disjunction = function(e) {
  var t = this.options.ecmaVersion >= 16;
  for (t && (e.branchID = new Yn(e.branchID, null)), this.regexp_alternative(e); e.eat(
    124
    /* | */
  ); )
    t && (e.branchID = e.branchID.sibling()), this.regexp_alternative(e);
  t && (e.branchID = e.branchID.parent), this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(
    123
    /* { */
  ) && e.raise("Lone quantifier brackets");
};
G.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
    ;
};
G.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
};
G.regexp_eatAssertion = function(e) {
  var t = e.pos;
  if (e.lastAssertionIsQuantifiable = !1, e.eat(
    94
    /* ^ */
  ) || e.eat(
    36
    /* $ */
  ))
    return !0;
  if (e.eat(
    92
    /* \ */
  )) {
    if (e.eat(
      66
      /* B */
    ) || e.eat(
      98
      /* b */
    ))
      return !0;
    e.pos = t;
  }
  if (e.eat(
    40
    /* ( */
  ) && e.eat(
    63
    /* ? */
  )) {
    var r = !1;
    if (this.options.ecmaVersion >= 9 && (r = e.eat(
      60
      /* < */
    )), e.eat(
      61
      /* = */
    ) || e.eat(
      33
      /* ! */
    ))
      return this.regexp_disjunction(e), e.eat(
        41
        /* ) */
      ) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !r, !0;
  }
  return e.pos = t, !1;
};
G.regexp_eatQuantifier = function(e, t) {
  return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(
    63
    /* ? */
  ), !0) : !1;
};
G.regexp_eatQuantifierPrefix = function(e, t) {
  return e.eat(
    42
    /* * */
  ) || e.eat(
    43
    /* + */
  ) || e.eat(
    63
    /* ? */
  ) || this.regexp_eatBracedQuantifier(e, t);
};
G.regexp_eatBracedQuantifier = function(e, t) {
  var r = e.pos;
  if (e.eat(
    123
    /* { */
  )) {
    var n = 0, i = -1;
    if (this.regexp_eatDecimalDigits(e) && (n = e.lastIntValue, e.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue), e.eat(
      125
      /* } */
    )))
      return i !== -1 && i < n && !t && e.raise("numbers out of order in {} quantifier"), !0;
    e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = r;
  }
  return !1;
};
G.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
G.regexp_eatReverseSolidusAtomEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatAtomEscape(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
G.regexp_eatUncapturingGroup = function(e) {
  var t = e.pos;
  if (e.eat(
    40
    /* ( */
  )) {
    if (e.eat(
      63
      /* ? */
    )) {
      if (this.options.ecmaVersion >= 16) {
        var r = this.regexp_eatModifiers(e), n = e.eat(
          45
          /* - */
        );
        if (r || n) {
          for (var i = 0; i < r.length; i++) {
            var u = r.charAt(i);
            r.indexOf(u, i + 1) > -1 && e.raise("Duplicate regular expression modifiers");
          }
          if (n) {
            var s = this.regexp_eatModifiers(e);
            !r && !s && e.current() === 58 && e.raise("Invalid regular expression modifiers");
            for (var a = 0; a < s.length; a++) {
              var o = s.charAt(a);
              (s.indexOf(o, a + 1) > -1 || r.indexOf(o) > -1) && e.raise("Duplicate regular expression modifiers");
            }
          }
        }
      }
      if (e.eat(
        58
        /* : */
      )) {
        if (this.regexp_disjunction(e), e.eat(
          41
          /* ) */
        ))
          return !0;
        e.raise("Unterminated group");
      }
    }
    e.pos = t;
  }
  return !1;
};
G.regexp_eatCapturingGroup = function(e) {
  if (e.eat(
    40
    /* ( */
  )) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(
      41
      /* ) */
    ))
      return e.numCapturingParens += 1, !0;
    e.raise("Unterminated group");
  }
  return !1;
};
G.regexp_eatModifiers = function(e) {
  for (var t = "", r = 0; (r = e.current()) !== -1 && Hf(r); )
    t += Pt(r), e.advance();
  return t;
};
function Hf(e) {
  return e === 105 || e === 109 || e === 115;
}
G.regexp_eatExtendedAtom = function(e) {
  return e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
G.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
};
G.regexp_eatSyntaxCharacter = function(e) {
  var t = e.current();
  return lo(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function lo(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
G.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, r = 0; (r = e.current()) !== -1 && !lo(r); )
    e.advance();
  return e.pos !== t;
};
G.regexp_eatExtendedPatternCharacter = function(e) {
  var t = e.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e.advance(), !0) : !1;
};
G.regexp_groupSpecifier = function(e) {
  if (e.eat(
    63
    /* ? */
  )) {
    this.regexp_eatGroupName(e) || e.raise("Invalid group");
    var t = this.options.ecmaVersion >= 16, r = e.groupNames[e.lastStringValue];
    if (r)
      if (t)
        for (var n = 0, i = r; n < i.length; n += 1) {
          var u = i[n];
          u.separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
        }
      else
        e.raise("Duplicate capture group name");
    t ? (r || (e.groupNames[e.lastStringValue] = [])).push(e.branchID) : e.groupNames[e.lastStringValue] = !0;
  }
};
G.regexp_eatGroupName = function(e) {
  if (e.lastStringValue = "", e.eat(
    60
    /* < */
  )) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(
      62
      /* > */
    ))
      return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
G.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += Pt(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += Pt(e.lastIntValue);
    return !0;
  }
  return !1;
};
G.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, r = this.options.ecmaVersion >= 11, n = e.current(r);
  return e.advance(r), n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (n = e.lastIntValue), qf(n) ? (e.lastIntValue = n, !0) : (e.pos = t, !1);
};
function qf(e) {
  return vt(e, !0) || e === 36 || e === 95;
}
G.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, r = this.options.ecmaVersion >= 11, n = e.current(r);
  return e.advance(r), n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (n = e.lastIntValue), Gf(n) ? (e.lastIntValue = n, !0) : (e.pos = t, !1);
};
function Gf(e) {
  return qt(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
G.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
G.regexp_eatBackReference = function(e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU)
      return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens)
      return !0;
    e.pos = t;
  }
  return !1;
};
G.regexp_eatKGroupName = function(e) {
  if (e.eat(
    107
    /* k */
  )) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
G.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
G.regexp_eatCControlLetter = function(e) {
  var t = e.pos;
  if (e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatControlLetter(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
G.regexp_eatZero = function(e) {
  return e.current() === 48 && !di(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
G.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
G.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return fo(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function fo(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
G.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = !1);
  var r = e.pos, n = t || e.switchU;
  if (e.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var i = e.lastIntValue;
      if (n && i >= 55296 && i <= 56319) {
        var u = e.pos;
        if (e.eat(
          92
          /* \ */
        ) && e.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(e, 4)) {
          var s = e.lastIntValue;
          if (s >= 56320 && s <= 57343)
            return e.lastIntValue = (i - 55296) * 1024 + (s - 56320) + 65536, !0;
        }
        e.pos = u, e.lastIntValue = i;
      }
      return !0;
    }
    if (n && e.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(e) && e.eat(
      125
      /* } */
    ) && Kf(e.lastIntValue))
      return !0;
    n && e.raise("Invalid unicode escape"), e.pos = r;
  }
  return !1;
};
function Kf(e) {
  return e >= 0 && e <= 1114111;
}
G.regexp_eatIdentityEscape = function(e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(
      47
      /* / */
    ) ? (e.lastIntValue = 47, !0) : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
G.regexp_eatDecimalEscape = function(e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do
      e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
var po = 0, Lt = 1, nt = 2;
G.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (Zf(t))
    return e.lastIntValue = -1, e.advance(), Lt;
  var r = !1;
  if (e.switchU && this.options.ecmaVersion >= 9 && ((r = t === 80) || t === 112)) {
    e.lastIntValue = -1, e.advance();
    var n;
    if (e.eat(
      123
      /* { */
    ) && (n = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(
      125
      /* } */
    ))
      return r && n === nt && e.raise("Invalid property name"), n;
    e.raise("Invalid property name");
  }
  return po;
};
function Zf(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
G.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(
    61
    /* = */
  )) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var n = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, n), Lt;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var i = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, i);
  }
  return po;
};
G.regexp_validateUnicodePropertyNameAndValue = function(e, t, r) {
  Or(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(r) || e.raise("Invalid property value");
};
G.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  if (e.unicodeProperties.binary.test(t))
    return Lt;
  if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t))
    return nt;
  e.raise("Invalid property name");
};
G.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; ho(t = e.current()); )
    e.lastStringValue += Pt(t), e.advance();
  return e.lastStringValue !== "";
};
function ho(e) {
  return fo(e) || e === 95;
}
G.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Yf(t = e.current()); )
    e.lastStringValue += Pt(t), e.advance();
  return e.lastStringValue !== "";
};
function Yf(e) {
  return ho(e) || di(e);
}
G.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
G.regexp_eatCharacterClass = function(e) {
  if (e.eat(
    91
    /* [ */
  )) {
    var t = e.eat(
      94
      /* ^ */
    ), r = this.regexp_classContents(e);
    return e.eat(
      93
      /* ] */
    ) || e.raise("Unterminated character class"), t && r === nt && e.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
G.regexp_classContents = function(e) {
  return e.current() === 93 ? Lt : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), Lt);
};
G.regexp_nonEmptyClassRanges = function(e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (t === -1 || r === -1) && e.raise("Invalid character class"), t !== -1 && r !== -1 && t > r && e.raise("Range out of order in character class");
    }
  }
};
G.regexp_eatClassAtom = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(e))
      return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || go(r)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var n = e.current();
  return n !== 93 ? (e.lastIntValue = n, e.advance(), !0) : !1;
};
G.regexp_eatClassEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    98
    /* b */
  ))
    return e.lastIntValue = 8, !0;
  if (e.switchU && e.eat(
    45
    /* - */
  ))
    return e.lastIntValue = 45, !0;
  if (!e.switchU && e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatClassControlLetter(e))
      return !0;
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
G.regexp_classSetExpression = function(e) {
  var t = Lt, r;
  if (!this.regexp_eatClassSetRange(e)) if (r = this.regexp_eatClassSetOperand(e)) {
    r === nt && (t = nt);
    for (var n = e.pos; e.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (e.current() !== 38 && (r = this.regexp_eatClassSetOperand(e))) {
        r !== nt && (t = Lt);
        continue;
      }
      e.raise("Invalid character in character class");
    }
    if (n !== e.pos)
      return t;
    for (; e.eatChars(
      [45, 45]
      /* -- */
    ); )
      this.regexp_eatClassSetOperand(e) || e.raise("Invalid character in character class");
    if (n !== e.pos)
      return t;
  } else
    e.raise("Invalid character in character class");
  for (; ; )
    if (!this.regexp_eatClassSetRange(e)) {
      if (r = this.regexp_eatClassSetOperand(e), !r)
        return t;
      r === nt && (t = nt);
    }
};
G.regexp_eatClassSetRange = function(e) {
  var t = e.pos;
  if (this.regexp_eatClassSetCharacter(e)) {
    var r = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(e)) {
      var n = e.lastIntValue;
      return r !== -1 && n !== -1 && r > n && e.raise("Range out of order in character class"), !0;
    }
    e.pos = t;
  }
  return !1;
};
G.regexp_eatClassSetOperand = function(e) {
  return this.regexp_eatClassSetCharacter(e) ? Lt : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
};
G.regexp_eatNestedClass = function(e) {
  var t = e.pos;
  if (e.eat(
    91
    /* [ */
  )) {
    var r = e.eat(
      94
      /* ^ */
    ), n = this.regexp_classContents(e);
    if (e.eat(
      93
      /* ] */
    ))
      return r && n === nt && e.raise("Negated character class may contain strings"), n;
    e.pos = t;
  }
  if (e.eat(
    92
    /* \ */
  )) {
    var i = this.regexp_eatCharacterClassEscape(e);
    if (i)
      return i;
    e.pos = t;
  }
  return null;
};
G.regexp_eatClassStringDisjunction = function(e) {
  var t = e.pos;
  if (e.eatChars(
    [92, 113]
    /* \q */
  )) {
    if (e.eat(
      123
      /* { */
    )) {
      var r = this.regexp_classStringDisjunctionContents(e);
      if (e.eat(
        125
        /* } */
      ))
        return r;
    } else
      e.raise("Invalid escape");
    e.pos = t;
  }
  return null;
};
G.regexp_classStringDisjunctionContents = function(e) {
  for (var t = this.regexp_classString(e); e.eat(
    124
    /* | */
  ); )
    this.regexp_classString(e) === nt && (t = nt);
  return t;
};
G.regexp_classString = function(e) {
  for (var t = 0; this.regexp_eatClassSetCharacter(e); )
    t++;
  return t === 1 ? Lt : nt;
};
G.regexp_eatClassSetCharacter = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  ))
    return this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e) ? !0 : e.eat(
      98
      /* b */
    ) ? (e.lastIntValue = 8, !0) : (e.pos = t, !1);
  var r = e.current();
  return r < 0 || r === e.lookahead() && Jf(r) || Xf(r) ? !1 : (e.advance(), e.lastIntValue = r, !0);
};
function Jf(e) {
  return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function Xf(e) {
  return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
G.regexp_eatClassSetReservedPunctuator = function(e) {
  var t = e.current();
  return Qf(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Qf(e) {
  return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
G.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return di(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
G.regexp_eatHexEscapeSequence = function(e) {
  var t = e.pos;
  if (e.eat(
    120
    /* x */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 2))
      return !0;
    e.switchU && e.raise("Invalid escape"), e.pos = t;
  }
  return !1;
};
G.regexp_eatDecimalDigits = function(e) {
  var t = e.pos, r = 0;
  for (e.lastIntValue = 0; di(r = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (r - 48), e.advance();
  return e.pos !== t;
};
function di(e) {
  return e >= 48 && e <= 57;
}
G.regexp_eatHexDigits = function(e) {
  var t = e.pos, r = 0;
  for (e.lastIntValue = 0; mo(r = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + bo(r), e.advance();
  return e.pos !== t;
};
function mo(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function bo(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
G.regexp_eatLegacyOctalEscapeSequence = function(e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = t * 64 + r * 8 + e.lastIntValue : e.lastIntValue = t * 8 + r;
    } else
      e.lastIntValue = t;
    return !0;
  }
  return !1;
};
G.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return go(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function go(e) {
  return e >= 48 && e <= 55;
}
G.regexp_eatFixedHexDigits = function(e, t) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var n = 0; n < t; ++n) {
    var i = e.current();
    if (!mo(i))
      return e.pos = r, !1;
    e.lastIntValue = 16 * e.lastIntValue + bo(i), e.advance();
  }
  return !0;
};
var Mu = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new ci(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, ae = Se.prototype;
ae.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Mu(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
ae.getToken = function() {
  return this.next(), new Mu(this);
};
typeof Symbol < "u" && (ae[Symbol.iterator] = function() {
  var e = this;
  return {
    next: function() {
      var t = e.getToken();
      return {
        done: t.type === m.eof,
        value: t
      };
    }
  };
});
ae.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(m.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
ae.readToken = function(e) {
  return vt(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
ae.fullCharCodeAt = function(e) {
  var t = this.input.charCodeAt(e);
  if (t <= 55295 || t >= 56320)
    return t;
  var r = this.input.charCodeAt(e + 1);
  return r <= 56319 || r >= 57344 ? t : (t << 10) + r - 56613888;
};
ae.fullCharCodeAtPos = function() {
  return this.fullCharCodeAt(this.pos);
};
ae.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, r = this.input.indexOf("*/", this.pos += 2);
  if (r === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = r + 2, this.options.locations)
    for (var n = void 0, i = t; (n = Ma(this.input, i, this.pos)) > -1; )
      ++this.curLine, i = this.lineStart = n;
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(t + 2, r),
    t,
    this.pos,
    e,
    this.curPosition()
  );
};
ae.skipLineComment = function(e) {
  for (var t = this.pos, r = this.options.onComment && this.curPosition(), n = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !Dr(n); )
    n = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(t + e, this.pos),
    t,
    this.pos,
    r,
    this.curPosition()
  );
};
ae.skipSpace = function() {
  e: for (; this.pos < this.input.length; ) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if (e > 8 && e < 14 || e >= 5760 && Va.test(String.fromCharCode(e)))
          ++this.pos;
        else
          break e;
    }
  }
};
ae.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  this.type = e, this.value = t, this.updateContext(r);
};
ae.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(m.ellipsis)) : (++this.pos, this.finishToken(m.dot));
};
ae.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(m.assign, 2) : this.finishOp(m.slash, 1);
};
ae.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), r = 1, n = e === 42 ? m.star : m.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++r, n = m.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(m.assign, r + 1) : this.finishOp(n, r);
};
ae.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61)
        return this.finishOp(m.assign, 3);
    }
    return this.finishOp(e === 124 ? m.logicalOR : m.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(m.assign, 2) : this.finishOp(e === 124 ? m.bitwiseOR : m.bitwiseAND, 1);
};
ae.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(m.assign, 2) : this.finishOp(m.bitwiseXOR, 1);
};
ae.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || ze.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(m.incDec, 2) : t === 61 ? this.finishOp(m.assign, 2) : this.finishOp(m.plusMin, 1);
};
ae.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), r = 1;
  return t === e ? (r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + r) === 61 ? this.finishOp(m.assign, r + 1) : this.finishOp(m.bitShift, r)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (r = 2), this.finishOp(m.relational, r));
};
ae.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(m.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(m.arrow)) : this.finishOp(e === 61 ? m.eq : m.prefix, 1);
};
ae.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57)
        return this.finishOp(m.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var n = this.input.charCodeAt(this.pos + 2);
        if (n === 61)
          return this.finishOp(m.assign, 3);
      }
      return this.finishOp(m.coalesce, 2);
    }
  }
  return this.finishOp(m.question, 1);
};
ae.readToken_numberSign = function() {
  var e = this.options.ecmaVersion, t = 35;
  if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), vt(t, !0) || t === 92))
    return this.finishToken(m.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + Pt(t) + "'");
};
ae.getTokenFromCode = function(e) {
  switch (e) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46:
      return this.readToken_dot();
    // Punctuation tokens.
    case 40:
      return ++this.pos, this.finishToken(m.parenL);
    case 41:
      return ++this.pos, this.finishToken(m.parenR);
    case 59:
      return ++this.pos, this.finishToken(m.semi);
    case 44:
      return ++this.pos, this.finishToken(m.comma);
    case 91:
      return ++this.pos, this.finishToken(m.bracketL);
    case 93:
      return ++this.pos, this.finishToken(m.bracketR);
    case 123:
      return ++this.pos, this.finishToken(m.braceL);
    case 125:
      return ++this.pos, this.finishToken(m.braceR);
    case 58:
      return ++this.pos, this.finishToken(m.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(m.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88)
        return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79)
          return this.readRadixNumber(8);
        if (t === 98 || t === 66)
          return this.readRadixNumber(2);
      }
    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    // Quotes produce strings.
    case 34:
    case 39:
      return this.readString(e);
    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(m.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + Pt(e) + "'");
};
ae.finishOp = function(e, t) {
  var r = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, r);
};
ae.readRegexp = function() {
  for (var e, t, r = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(r, "Unterminated regular expression");
    var n = this.input.charAt(this.pos);
    if (ze.test(n) && this.raise(r, "Unterminated regular expression"), e)
      e = !1;
    else {
      if (n === "[")
        t = !0;
      else if (n === "]" && t)
        t = !1;
      else if (n === "/" && !t)
        break;
      e = n === "\\";
    }
    ++this.pos;
  }
  var i = this.input.slice(r, this.pos);
  ++this.pos;
  var u = this.pos, s = this.readWord1();
  this.containsEsc && this.unexpected(u);
  var a = this.regexpState || (this.regexpState = new wt(this));
  a.reset(r, i, s), this.validateRegExpFlags(a), this.validateRegExpPattern(a);
  var o = null;
  try {
    o = new RegExp(i, s);
  } catch {
  }
  return this.finishToken(m.regexp, { pattern: i, flags: s, value: o });
};
ae.readInt = function(e, t, r) {
  for (var n = this.options.ecmaVersion >= 12 && t === void 0, i = r && this.input.charCodeAt(this.pos) === 48, u = this.pos, s = 0, a = 0, o = 0, c = t ?? 1 / 0; o < c; ++o, ++this.pos) {
    var f = this.input.charCodeAt(this.pos), p = void 0;
    if (n && f === 95) {
      i && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), a === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), o === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), a = f;
      continue;
    }
    if (f >= 97 ? p = f - 97 + 10 : f >= 65 ? p = f - 65 + 10 : f >= 48 && f <= 57 ? p = f - 48 : p = 1 / 0, p >= e)
      break;
    a = f, s = s * e + p;
  }
  return n && a === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === u || t != null && this.pos - u !== t ? null : s;
};
function e0(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function yo(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
ae.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return r == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (r = yo(this.input.slice(t, this.pos)), ++this.pos) : vt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(m.num, r);
};
ae.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var r = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  r && this.strict && this.raise(t, "Invalid number");
  var n = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && n === 110) {
    var i = yo(this.input.slice(t, this.pos));
    return ++this.pos, vt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(m.num, i);
  }
  r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1), n === 46 && !r && (++this.pos, this.readInt(10), n = this.input.charCodeAt(this.pos)), (n === 69 || n === 101) && !r && (n = this.input.charCodeAt(++this.pos), (n === 43 || n === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), vt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var u = e0(this.input.slice(t, this.pos), r);
  return this.finishToken(m.num, u);
};
ae.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
  } else
    t = this.readHexChar(4);
  return t;
};
ae.readString = function(e) {
  for (var t = "", r = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var n = this.input.charCodeAt(this.pos);
    if (n === e)
      break;
    n === 92 ? (t += this.input.slice(r, this.pos), t += this.readEscapedChar(!1), r = this.pos) : n === 8232 || n === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Dr(n) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(r, this.pos++), this.finishToken(m.string, t);
};
var xo = {};
ae.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === xo)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
ae.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw xo;
  this.raise(e, t);
};
ae.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || r === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === m.template || this.type === m.invalidTemplate) ? r === 36 ? (this.pos += 2, this.finishToken(m.dollarBraceL)) : (++this.pos, this.finishToken(m.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(m.template, e));
    if (r === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
    else if (Dr(r)) {
      switch (e += this.input.slice(t, this.pos), ++this.pos, r) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
    } else
      ++this.pos;
  }
};
ae.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{")
          break;
      // fall through
      case "`":
        return this.finishToken(m.invalidTemplate, this.input.slice(this.start, this.pos));
      case "\r":
        this.input[this.pos + 1] === `
` && ++this.pos;
      // fall through
      case `
`:
      case "\u2028":
      case "\u2029":
        ++this.curLine, this.lineStart = this.pos + 1;
        break;
    }
  this.raise(this.start, "Unterminated template");
};
ae.readEscapedChar = function(e) {
  var t = this.input.charCodeAt(++this.pos);
  switch (++this.pos, t) {
    case 110:
      return `
`;
    // 'n' -> '\n'
    case 114:
      return "\r";
    // 'r' -> '\r'
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    // 'x'
    case 117:
      return Pt(this.readCodePoint());
    // 'u'
    case 116:
      return "	";
    // 't' -> '\t'
    case 98:
      return "\b";
    // 'b' -> '\b'
    case 118:
      return "\v";
    // 'v' -> '\u000b'
    case 102:
      return "\f";
    // 'f' -> '\f'
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    // '\r\n'
    case 10:
      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
    case 56:
    case 57:
      if (this.strict && this.invalidStringToken(
        this.pos - 1,
        "Invalid escape sequence"
      ), e) {
        var r = this.pos - 1;
        this.invalidStringToken(
          r,
          "Invalid escape sequence in template string"
        );
      }
    default:
      if (t >= 48 && t <= 55) {
        var n = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], i = parseInt(n, 8);
        return i > 255 && (n = n.slice(0, -1), i = parseInt(n, 8)), this.pos += n.length - 1, t = this.input.charCodeAt(this.pos), (n !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(
          this.pos - 1 - n.length,
          e ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(i);
      }
      return Dr(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
  }
};
ae.readHexChar = function(e) {
  var t = this.pos, r = this.readInt(16, e);
  return r === null && this.invalidStringToken(t, "Bad character escape sequence"), r;
};
ae.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, r = this.pos, n = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var i = this.fullCharCodeAtPos();
    if (qt(i, n))
      this.pos += i <= 65535 ? 1 : 2;
    else if (i === 92) {
      this.containsEsc = !0, e += this.input.slice(r, this.pos);
      var u = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var s = this.readCodePoint();
      (t ? vt : qt)(s, n) || this.invalidStringToken(u, "Invalid Unicode escape"), e += Pt(s), r = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(r, this.pos);
};
ae.readWord = function() {
  var e = this.readWord1(), t = m.name;
  return this.keywords.test(e) && (t = Pu[e]), this.finishToken(t, e);
};
var t0 = "8.16.0";
Se.acorn = {
  Parser: Se,
  version: t0,
  defaultOptions: _u,
  Position: Zr,
  SourceLocation: ci,
  getLineInfo: Wa,
  Node: hi,
  TokenType: fe,
  tokTypes: m,
  keywordTypes: Pu,
  TokContext: ft,
  tokContexts: xe,
  isIdentifierChar: qt,
  isIdentifierStart: vt,
  Token: Mu,
  isNewLine: Dr,
  lineBreak: ze,
  lineBreakG: kf,
  nonASCIIwhitespace: Va
};
function Cs(e, t) {
  return Se.parse(e, t);
}
function r0(e, t, r, n, i) {
  r || (r = z), (function u(s, a, o) {
    var c = o || s.type;
    n0(r, c, s, a, u), t[c] && t[c](s, a);
  })(e, n, i);
}
function Vu(e, t, r) {
  r(e, t);
}
function fr(e, t, r) {
}
function n0(e, t, r, n, i) {
  if (e[t] == null)
    throw new Error("No walker function defined for node type " + t);
  e[t](r, n, i);
}
var z = {};
z.Program = z.BlockStatement = z.StaticBlock = function(e, t, r) {
  for (var n = 0, i = e.body; n < i.length; n += 1) {
    var u = i[n];
    r(u, t, "Statement");
  }
};
z.Statement = Vu;
z.EmptyStatement = fr;
z.ExpressionStatement = z.ParenthesizedExpression = z.ChainExpression = function(e, t, r) {
  return r(e.expression, t, "Expression");
};
z.IfStatement = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Statement"), e.alternate && r(e.alternate, t, "Statement");
};
z.LabeledStatement = function(e, t, r) {
  return r(e.body, t, "Statement");
};
z.BreakStatement = z.ContinueStatement = fr;
z.WithStatement = function(e, t, r) {
  r(e.object, t, "Expression"), r(e.body, t, "Statement");
};
z.SwitchStatement = function(e, t, r) {
  r(e.discriminant, t, "Expression");
  for (var n = 0, i = e.cases; n < i.length; n += 1) {
    var u = i[n];
    r(u, t);
  }
};
z.SwitchCase = function(e, t, r) {
  e.test && r(e.test, t, "Expression");
  for (var n = 0, i = e.consequent; n < i.length; n += 1) {
    var u = i[n];
    r(u, t, "Statement");
  }
};
z.ReturnStatement = z.YieldExpression = z.AwaitExpression = function(e, t, r) {
  e.argument && r(e.argument, t, "Expression");
};
z.ThrowStatement = z.SpreadElement = function(e, t, r) {
  return r(e.argument, t, "Expression");
};
z.TryStatement = function(e, t, r) {
  r(e.block, t, "Statement"), e.handler && r(e.handler, t), e.finalizer && r(e.finalizer, t, "Statement");
};
z.CatchClause = function(e, t, r) {
  e.param && r(e.param, t, "Pattern"), r(e.body, t, "Statement");
};
z.WhileStatement = z.DoWhileStatement = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.body, t, "Statement");
};
z.ForStatement = function(e, t, r) {
  e.init && r(e.init, t, "ForInit"), e.test && r(e.test, t, "Expression"), e.update && r(e.update, t, "Expression"), r(e.body, t, "Statement");
};
z.ForInStatement = z.ForOfStatement = function(e, t, r) {
  r(e.left, t, "ForInit"), r(e.right, t, "Expression"), r(e.body, t, "Statement");
};
z.ForInit = function(e, t, r) {
  e.type === "VariableDeclaration" ? r(e, t) : r(e, t, "Expression");
};
z.DebuggerStatement = fr;
z.FunctionDeclaration = function(e, t, r) {
  return r(e, t, "Function");
};
z.VariableDeclaration = function(e, t, r) {
  for (var n = 0, i = e.declarations; n < i.length; n += 1) {
    var u = i[n];
    r(u, t);
  }
};
z.VariableDeclarator = function(e, t, r) {
  r(e.id, t, "Pattern"), e.init && r(e.init, t, "Expression");
};
z.Function = function(e, t, r) {
  e.id && r(e.id, t, "Pattern");
  for (var n = 0, i = e.params; n < i.length; n += 1) {
    var u = i[n];
    r(u, t, "Pattern");
  }
  r(e.body, t, e.expression ? "Expression" : "Statement");
};
z.Pattern = function(e, t, r) {
  e.type === "Identifier" ? r(e, t, "VariablePattern") : e.type === "MemberExpression" ? r(e, t, "MemberPattern") : r(e, t);
};
z.VariablePattern = fr;
z.MemberPattern = Vu;
z.RestElement = function(e, t, r) {
  return r(e.argument, t, "Pattern");
};
z.ArrayPattern = function(e, t, r) {
  for (var n = 0, i = e.elements; n < i.length; n += 1) {
    var u = i[n];
    u && r(u, t, "Pattern");
  }
};
z.ObjectPattern = function(e, t, r) {
  for (var n = 0, i = e.properties; n < i.length; n += 1) {
    var u = i[n];
    u.type === "Property" ? (u.computed && r(u.key, t, "Expression"), r(u.value, t, "Pattern")) : u.type === "RestElement" && r(u.argument, t, "Pattern");
  }
};
z.Expression = Vu;
z.ThisExpression = z.Super = z.MetaProperty = fr;
z.ArrayExpression = function(e, t, r) {
  for (var n = 0, i = e.elements; n < i.length; n += 1) {
    var u = i[n];
    u && r(u, t, "Expression");
  }
};
z.ObjectExpression = function(e, t, r) {
  for (var n = 0, i = e.properties; n < i.length; n += 1) {
    var u = i[n];
    r(u, t);
  }
};
z.FunctionExpression = z.ArrowFunctionExpression = z.FunctionDeclaration;
z.SequenceExpression = function(e, t, r) {
  for (var n = 0, i = e.expressions; n < i.length; n += 1) {
    var u = i[n];
    r(u, t, "Expression");
  }
};
z.TemplateLiteral = function(e, t, r) {
  for (var n = 0, i = e.quasis; n < i.length; n += 1) {
    var u = i[n];
    r(u, t);
  }
  for (var s = 0, a = e.expressions; s < a.length; s += 1) {
    var o = a[s];
    r(o, t, "Expression");
  }
};
z.TemplateElement = fr;
z.UnaryExpression = z.UpdateExpression = function(e, t, r) {
  r(e.argument, t, "Expression");
};
z.BinaryExpression = z.LogicalExpression = function(e, t, r) {
  r(e.left, t, "Expression"), r(e.right, t, "Expression");
};
z.AssignmentExpression = z.AssignmentPattern = function(e, t, r) {
  r(e.left, t, "Pattern"), r(e.right, t, "Expression");
};
z.ConditionalExpression = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Expression"), r(e.alternate, t, "Expression");
};
z.NewExpression = z.CallExpression = function(e, t, r) {
  if (r(e.callee, t, "Expression"), e.arguments)
    for (var n = 0, i = e.arguments; n < i.length; n += 1) {
      var u = i[n];
      r(u, t, "Expression");
    }
};
z.MemberExpression = function(e, t, r) {
  r(e.object, t, "Expression"), e.computed && r(e.property, t, "Expression");
};
z.ExportNamedDeclaration = z.ExportDefaultDeclaration = function(e, t, r) {
  if (e.declaration && r(e.declaration, t, e.type === "ExportNamedDeclaration" || e.declaration.id ? "Statement" : "Expression"), e.source && r(e.source, t, "Expression"), e.attributes)
    for (var n = 0, i = e.attributes; n < i.length; n += 1) {
      var u = i[n];
      r(u, t);
    }
};
z.ExportAllDeclaration = function(e, t, r) {
  if (e.exported && r(e.exported, t), r(e.source, t, "Expression"), e.attributes)
    for (var n = 0, i = e.attributes; n < i.length; n += 1) {
      var u = i[n];
      r(u, t);
    }
};
z.ImportAttribute = function(e, t, r) {
  r(e.value, t, "Expression");
};
z.ImportDeclaration = function(e, t, r) {
  for (var n = 0, i = e.specifiers; n < i.length; n += 1) {
    var u = i[n];
    r(u, t);
  }
  if (r(e.source, t, "Expression"), e.attributes)
    for (var s = 0, a = e.attributes; s < a.length; s += 1) {
      var o = a[s];
      r(o, t);
    }
};
z.ImportExpression = function(e, t, r) {
  r(e.source, t, "Expression"), e.options && r(e.options, t, "Expression");
};
z.ImportSpecifier = z.ImportDefaultSpecifier = z.ImportNamespaceSpecifier = z.Identifier = z.PrivateIdentifier = z.Literal = fr;
z.TaggedTemplateExpression = function(e, t, r) {
  r(e.tag, t, "Expression"), r(e.quasi, t, "Expression");
};
z.ClassDeclaration = z.ClassExpression = function(e, t, r) {
  return r(e, t, "Class");
};
z.Class = function(e, t, r) {
  e.id && r(e.id, t, "Pattern"), e.superClass && r(e.superClass, t, "Expression"), r(e.body, t);
};
z.ClassBody = function(e, t, r) {
  for (var n = 0, i = e.body; n < i.length; n += 1) {
    var u = i[n];
    r(u, t);
  }
};
z.MethodDefinition = z.PropertyDefinition = z.Property = function(e, t, r) {
  e.computed && r(e.key, t, "Expression"), e.value && r(e.value, t, "Expression");
};
const Hi = ["constructor", "__proto__", "prototype", "getPrototypeOf", "setPrototypeOf", "callee"], qi = ["globalThis", "eval", "Function", "window", "document", "process", "Reflect", "Object", "Array", "this", "arguments", "callee"], i0 = typeof __WBC_TRUSTED_CONTENT__ < "u" && __WBC_TRUSTED_CONTENT__ === !0;
function u0(e, t = {}, r = !1) {
  if (typeof e != "string" || !e.trim()) return e;
  const i = { ...{
    window: null,
    document: null,
    fetch: null,
    localStorage: null,
    sessionStorage: null,
    process: null,
    global: null,
    XMLHttpRequest: null
  }, ...t }, u = Object.keys(i), s = Object.values(i);
  try {
    const a = e.trim();
    if (a.startsWith("(") || a.startsWith("function") || a.includes("=>")) {
      const f = new Function(...u, `"use strict"; return (${e});`)(...s);
      if (typeof f == "function")
        return f(t);
    }
    return a.startsWith("[") || a.startsWith("{") || a.startsWith("`") || a.startsWith("'") || a.startsWith('"') ? new Function(...u, `"use strict"; return (${e});`)(...s) : new Function(...u, `"use strict"; return (function(){ ${e} })();`)(...s);
  } catch {
    try {
      return new Function(...u, `"use strict"; return (${e});`)(...s);
    } catch (o) {
      r || console.error("[WBC-UI SafeEval Error]", o, "Code:", e);
      return;
    }
  }
}
function de(e, t) {
  if (e != null)
    switch (e.type) {
      case "Program":
        return s0(e, t);
      case "ExpressionStatement":
        return de(e.expression, t);
      case "BlockStatement":
        return $u(e, t);
      case "ReturnStatement":
        return e.argument ? de(e.argument, t) : void 0;
      case "Literal":
        return e.value;
      case "Identifier":
        return t[e.name];
      case "ObjectExpression": {
        const r = {};
        for (const n of e.properties) {
          const i = n.computed ? de(n.key, t) : n.key.type === "Identifier" ? n.key.name : n.key.value, u = de(n.value, t);
          r[i] = u;
        }
        return r;
      }
      case "ArrayExpression":
        return e.elements.map((r) => r ? de(r, t) : void 0);
      case "MemberExpression": {
        const r = de(e.object, t), n = e.computed ? de(e.property, t) : e.property.type === "Identifier" ? e.property.name : e.property.value;
        return r == null ? void 0 : r[n];
      }
      case "CallExpression": {
        const r = de(e.callee, t);
        if (typeof r != "function") return;
        const n = e.arguments.map((i) => de(i, t));
        return r(...n);
      }
      case "ArrowFunctionExpression":
        return a0(e, t);
      case "FunctionExpression":
        return o0(e, t);
      case "BinaryExpression":
        return c0(e, t);
      case "LogicalExpression":
        return l0(e, t);
      case "UnaryExpression":
        return f0(e, t);
      case "ConditionalExpression":
        return de(e.test, t) ? de(e.consequent, t) : de(e.alternate, t);
      case "TemplateLiteral": {
        let r = "";
        for (let n = 0; n < e.quasis.length; n++)
          r += e.quasis[n].value.cooked, n < e.expressions.length && (r += String(de(e.expressions[n], t)));
        return r;
      }
      case "SequenceExpression":
        return e.expressions.reduce((r, n) => de(n, t), void 0);
      case "AssignmentExpression":
        return p0(e, t);
      case "UpdateExpression":
        return h0(e, t);
      case "ThisExpression":
        return;
      case "NewExpression":
        throw new Error("Blocked: unsafe code pattern");
      case "VariableDeclaration":
        return;
      default:
        throw new Error(`[SafeEval] Unsupported AST node: ${e.type}`);
    }
}
function s0(e, t) {
  let r;
  for (const n of e.body)
    r = de(n, t);
  return r;
}
function $u(e, t) {
  let r;
  for (const n of e.body)
    r = de(n, t);
  return r;
}
function a0(e, t) {
  const r = e.params.map((n) => n.type === "Identifier" ? n.name : n.type === "RestElement" ? n.argument.name : null).filter(Boolean);
  return (...n) => {
    const i = Object.create(t);
    return r.forEach((u, s) => {
      i[u] = n[s];
    }), i.__proto__ = void 0, e.body.type === "BlockStatement" ? $u(e.body, i) : de(e.body, i);
  };
}
function o0(e, t) {
  const r = e.params.map((n) => n.type === "Identifier" ? n.name : n.type === "RestElement" ? n.argument.name : n.type === "AssignmentPattern" ? n.left.name : null).filter(Boolean);
  return function(...n) {
    const i = Object.create(t);
    return r.forEach((u, s) => {
      i[u] = n[s];
    }), i.__proto__ = void 0, $u(e.body, i);
  };
}
function c0(e, t) {
  const r = de(e.left, t), n = de(e.right, t);
  switch (e.operator) {
    case "+":
      return r + n;
    case "-":
      return r - n;
    case "*":
      return r * n;
    case "/":
      return r / n;
    case "%":
      return r % n;
    case "**":
      return r ** n;
    case "==":
      return r == n;
    case "!=":
      return r != n;
    case "===":
      return r === n;
    case "!==":
      return r !== n;
    case "<":
      return r < n;
    case ">":
      return r > n;
    case "<=":
      return r <= n;
    case ">=":
      return r >= n;
    case "<<":
      return r << n;
    case ">>":
      return r >> n;
    case ">>>":
      return r >>> n;
    case "&":
      return r & n;
    case "|":
      return r | n;
    case "^":
      return r ^ n;
    case "in":
      return r in n;
    case "instanceof":
      return r instanceof n;
    default:
      return;
  }
}
function l0(e, t) {
  const r = de(e.left, t);
  if (e.operator === "&&") return r && de(e.right, t);
  if (e.operator === "||") return r || de(e.right, t);
  if (e.operator === "??") return r ?? de(e.right, t);
}
function f0(e, t) {
  const r = de(e.argument, t);
  switch (e.operator) {
    case "-":
      return -r;
    case "+":
      return +r;
    case "!":
      return !r;
    case "~":
      return ~r;
    case "typeof":
      return typeof r;
    case "void":
      return;
    case "delete":
      return !0;
    default:
      return;
  }
}
function p0(e, t) {
  const r = de(e.right, t);
  if (e.left.type === "Identifier")
    t[e.left.name] = r;
  else if (e.left.type === "MemberExpression") {
    const n = de(e.left.object, t), i = e.left.computed ? de(e.left.property, t) : e.left.property.name;
    n != null && (n[i] = r);
  }
  switch (e.operator) {
    case "=":
      return r;
    case "+=":
      return t[e.left.name] = (t[e.left.name] || 0) + r;
    case "-=":
      return t[e.left.name] = (t[e.left.name] || 0) - r;
    case "*=":
      return t[e.left.name] = (t[e.left.name] || 0) * r;
    default:
      return r;
  }
}
function h0(e, t) {
  const r = e.argument.name, n = t[r] || 0;
  return e.operator === "++" && (t[r] = n + 1), e.operator === "--" && (t[r] = n - 1), e.prefix ? t[r] : n;
}
function d0(e) {
  const r = Object.assign(/* @__PURE__ */ Object.create(null), {
    window: void 0,
    document: void 0,
    fetch: void 0,
    localStorage: void 0,
    sessionStorage: void 0,
    process: void 0,
    global: void 0,
    XMLHttpRequest: void 0,
    globalThis: void 0,
    eval: void 0,
    Function: void 0,
    Reflect: void 0,
    Object: void 0,
    Array: void 0,
    setTimeout: void 0,
    setInterval: void 0,
    console: void 0,
    location: void 0,
    navigator: void 0
  }, e);
  return r.__proto__ = void 0, r;
}
const _o = (e, t = /* @__PURE__ */ new WeakSet()) => {
  if (e && typeof e == "object" && !Object.isFrozen(e)) {
    if (t.has(e) || (t.add(e), e._isVue || e instanceof Element)) return e;
    Object.freeze(e), Object.getOwnPropertyNames(e).forEach((r) => _o(e[r], t));
  }
  return e;
};
function vo(e, t = {}, r = !1, n = {}) {
  if (typeof e != "string" || !e.trim()) return e;
  if (n.trusted === !0 ? !0 : n.trusted === !1 ? !1 : i0)
    return u0(e, t, r);
  const u = e.trim();
  let s;
  try {
    s = Cs(u, { ecmaVersion: 2020 });
  } catch {
    try {
      s = Cs(`(${u})`, { ecmaVersion: 2020 });
    } catch {
      r || console.error("[SafeEval Parse Error]", e);
      return;
    }
  }
  let a = !0;
  if (r0(s, {
    Identifier(c) {
      qi.includes(c.name) && (a = !1);
    },
    Literal(c) {
      typeof c.value == "string" && Hi.includes(c.value) && (a = !1);
    },
    MemberExpression(c) {
      !c.computed && c.property.type === "Identifier" && Hi.includes(c.property.name) && (a = !1), c.computed && c.property.type !== "Literal" && (a = !1), c.computed && c.property.type === "Literal" && typeof c.property.value == "string" && Hi.includes(c.property.value) && (a = !1);
    },
    CallExpression(c) {
      c.callee.type === "Identifier" && qi.includes(c.callee.name) && (a = !1);
    },
    NewExpression(c) {
      c.callee.type === "Identifier" && qi.includes(c.callee.name) && (a = !1);
    },
    ThisExpression() {
      a = !1;
    }
  }), !a)
    throw r || console.error("[SafeEval Error] Blocked by AST Validator."), new Error("Blocked: unsafe code pattern");
  Object.keys(t).forEach((c) => {
    typeof t[c] == "object" && t[c] !== null && _o(t[c]);
  });
  const o = d0(t);
  try {
    const c = de(s, o);
    return typeof c == "function" && t && Object.keys(t).length > 0 ? c(t) : c;
  } catch (c) {
    r || console.error("[SafeEval] Interpreter Error", e, c);
    return;
  }
}
function Yr(e, t = {}) {
  if (typeof e != "string") return e;
  try {
    return JSON.parse(e);
  } catch {
    if (!(/[\(\)\{\}\[]/.test(e) || // parens/braces/brackets
    /[\+\-\*\/\%\?\:]/.test(e))) return e;
    const n = vo(e, {}, !0, t);
    return n === void 0 || typeof n == "number" && Number.isNaN(n) ? e : n;
  }
}
const Pn = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Set(), Jn = /* @__PURE__ */ new Map(), m0 = /^(https?:|mailto:|tel:|sms:|ftp:|\/\/|www\.|#)/i, b0 = /^([A-Za-z][\w-]*)__([\s\S]+)$/;
function g0(e) {
  return e.replace(/&lbrack;/g, "[").replace(/&rbrack;/g, "]").replace(/&lbrace;/g, "{").replace(/&rbrace;/g, "}").replace(/&lpar;/g, "(").replace(/&rpar;/g, ")").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&vert;/g, "|").replace(/&#95;&#95;/g, "__");
}
function Es(e) {
  if (typeof e != "string" || !e) return;
  const t = g0(e.trim());
  if (/^https?:\/\//.test(t)) return t;
  if (/^['"\d]/.test(t) && t.includes(",")) {
    const n = Yr("[" + t + "]");
    if (Array.isArray(n)) return n;
  }
  const r = Yr(t);
  return r && typeof r == "object" ? r : void 0;
}
function y0(e) {
  const t = e.match(b0);
  if (!t) return null;
  const r = t[1], n = t[2], i = n.indexOf("__");
  if (i > 0) {
    const s = Es(n.slice(i + 2));
    if (s !== void 0) return { name: r, path: n.slice(0, i), item: s };
  }
  const u = Es(n);
  return u !== void 0 ? { name: r, path: null, item: u } : null;
}
function x0(e) {
  return typeof e == "string" && (e.startsWith("./") || e.startsWith("../"));
}
function Pr(e, t) {
  return typeof e.hasRoute == "function" ? e.hasRoute(t) : typeof e.getRoutes == "function" ? e.getRoutes().some((r) => r.name === t) : Fr.has(t);
}
function _0(e, t) {
  if (typeof e.getRoutes == "function") {
    const r = e.getRoutes().find((n) => n.path === t);
    return r ? r.name : null;
  }
  return null;
}
function v0(e, t) {
  try {
    if (typeof e.resolve == "function") {
      const r = e.resolve(t), n = r && r.route || r;
      return !!(n && n.matched && n.matched.length > 0);
    }
  } catch {
  }
  return !1;
}
function w0(e, t) {
  const r = [];
  for (const n of `${e}/${t}`.split("/"))
    n === "" || n === "." || (n === ".." ? r.pop() : r.push(n));
  return "/" + r.join("/");
}
function Wu(e) {
  return (e || "").replace(/[^a-zA-Z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean).map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join("");
}
function k0(e) {
  const t = `${e}`.match(/^([^?#]*)([?#].*)?$/);
  return { core: t[1], suffix: t[2] || "" };
}
const mi = () => Promise.resolve().then(() => J1).then((e) => e.default || e);
function Ut(e) {
  const t = (n) => n.toString().replace(/\s+/g, " ").trim();
  if (typeof e == "function") return t(e);
  if (typeof e != "object" || e === null) return e;
  const r = Array.isArray(e) ? [] : {};
  for (const [n, i] of Object.entries(e))
    r[n] = typeof i == "function" ? t(i) : i && typeof i == "object" ? Ut(i) : i;
  return r;
}
function C0(e) {
  return JSON.stringify(Ut(e));
}
let ku = null;
function Mm(e) {
  ku = typeof e == "function" ? e : null;
}
function bi(e, t, r, n, i) {
  if (ku)
    try {
      const u = { name: e, path: t, item: Ut(r) };
      n !== void 0 && (u.meta = Ut(n)), i && Object.keys(i).length && (u.route = Ut(i)), ku(u);
    } catch (u) {
      console.error(`#WBCRouteSinkError: ${u.message}`);
    }
}
const As = /* @__PURE__ */ new Set();
function E0(e, t) {
  As.has(e) || (As.add(e), typeof console < "u" && console.warn(t));
}
function zu(e) {
  const t = e && typeof e == "object" && !Array.isArray(e) ? e.options : null;
  if (!t) return null;
  const r = t.route;
  if (r != null) {
    if (typeof r == "string")
      return { name: r, path: null, meta: void 0, extra: {} };
    if (typeof r == "object" && !Array.isArray(r)) {
      const { name: n, path: i, meta: u, ...s } = r;
      return !n && !i ? null : { name: n, path: i || null, meta: u, extra: s };
    }
    return null;
  }
  return t.name || t.path ? (E0(
    "options.name/path",
    "#WBCDeprecation: WBC item-route `options.name` / `options.path` are deprecated — use `options.route` (a string, or `{ name, path, meta, …guards }`). See _docs/wbc-links-routes."
  ), { name: t.name, path: t.path || null, meta: t.meta, extra: {} }) : null;
}
function A0(e, t, r) {
  if (!e || typeof e.addRoute != "function")
    throw new Error(`#WBCRouteError: router unavailable for "${t}"`);
  const { core: n, suffix: i } = k0(t), u = (r || "/").replace(/\/[^/]*$/, "") || "/", a = w0(u, n).replace(/\.[^/.]+$/, ""), o = "/wbc" + (a.startsWith("/") ? a : "/" + a);
  if (Pn.has(o))
    return { name: Pn.get(o), path: o, suffix: i };
  const c = _0(e, o);
  if (c)
    return Pn.set(o, c), { name: c, path: o, suffix: i };
  const f = a.split("/").filter(Boolean).pop() || "page", p = "WBC" + Wu(f);
  let l = p, h = 0;
  for (; Pr(e, l); ) l = p + ++h;
  return e.addRoute({
    path: o,
    name: l,
    component: mi,
    props: { item: t }
  }), Pn.set(o, l), Fr.add(l), bi(l, o, t), { name: l, path: o, suffix: i };
}
function S0(e, t) {
  var n;
  if (!e || typeof e.addRoute != "function")
    throw new Error("#WBCRouteError: router unavailable");
  if (!t || typeof t != "object" || typeof t.path != "string")
    throw new Error('#WBCRouteError: invalid route definition (needs a string "path")');
  let r = t.name;
  if (!r) {
    const i = t.path.split("/").filter(Boolean).pop() || "page";
    r = "WBC" + Wu(i);
  }
  return Pr(e, r) ? { name: r, path: t.path } : (e.addRoute({ ...t, name: r }), Fr.add(r), bi(r, t.path, (n = t.props) == null ? void 0 : n.item), { name: r, path: t.path });
}
function wo(e, t) {
  if (!e || typeof e.addRoute != "function")
    throw new Error("#WBCRouteError: router unavailable");
  const r = zu(t);
  if (!r)
    throw new Error("#WBCRouteError: item route needs options.route (a string, or { name, path })");
  const { meta: n, extra: i } = r;
  let u = r.name;
  const s = r.path || (u ? "/wbc/" + u : null);
  if (!s)
    throw new Error("#WBCRouteError: item route needs options.route with a name or path");
  if (!u) {
    const c = s.split("/").filter(Boolean).pop() || "page";
    u = "WBC" + Wu(c);
  }
  const a = JSON.stringify({
    item: Ut(t),
    meta: n ?? null,
    path: s,
    route: Object.keys(i).length ? Ut(i) : null
  }), o = Jn.get(u) !== a;
  return Pr(e, u) || (e.addRoute({
    ...i,
    // object-form guards (beforeEnter, alias, …); the lines below win
    path: s,
    name: u,
    component: mi,
    props: { item: t },
    ...n !== void 0 ? { meta: n } : {}
  }), Fr.add(u)), o && (Jn.set(u, a), bi(u, s, t, n, i)), { name: u, path: s };
}
function T0(e, t, r, n) {
  if (!e || typeof e.addRoute != "function")
    throw new Error(`#WBCRouteError: router unavailable for named route "${t}"`);
  const i = n ? n.startsWith("/") ? n : "/" + n : "/wbc/" + t, u = JSON.stringify({ item: Ut(r), path: i }), s = Jn.get(t) !== u;
  return Pr(e, t) || (e.addRoute({
    path: i,
    name: t,
    component: mi,
    props: { item: r }
  }), Fr.add(t)), s && (Jn.set(t, u), bi(t, i, r)), { name: t, path: i };
}
function D0(e, t) {
  if (!t || typeof t != "object" || Array.isArray(t) || !zu(t) || !e || typeof e.addRoute != "function") return null;
  try {
    return wo(e, t);
  } catch (r) {
    return console.error(`#WBCItemRouteError: ${r.message}`), null;
  }
}
function O0(e) {
  const t = "WBCDynamicRouting", r = "/wbc/dynamic/routing/:item";
  if (!e || typeof e.addRoute != "function")
    throw new Error("#WBCRouteError: router unavailable");
  return Pr(e, t) ? { name: t, path: r } : (e.addRoute({
    path: r,
    name: t,
    component: mi,
    props: (n) => {
      var u;
      let i = null;
      try {
        const s = oi.decompressFromEncodedURIComponent((u = n == null ? void 0 : n.params) == null ? void 0 : u.item);
        try {
          i = JSON.parse(s);
        } catch {
          i = s;
        }
      } catch {
        i = null;
      }
      return { untrusted: !0, item: i };
    }
  }), Fr.add(t), { name: t, path: r });
}
function I0(e, t, r, n) {
  const i = n === !0;
  if (t && typeof t == "object") {
    if (t.__defineRoute) {
      if (i) return { kind: "external" };
      const { __defineRoute: a, ...o } = t;
      return { kind: "route", location: { name: S0(e, o).name } };
    }
    return t.options && zu(t) ? i ? { kind: "external" } : { kind: "route", location: { name: wo(e, t).name } } : t.name || t.path ? { kind: "route", location: t } : (O0(e), {
      kind: "route",
      location: {
        name: "WBCDynamicRouting",
        params: {
          item: oi.compressToEncodedURIComponent(C0(t))
        }
      }
    });
  }
  if (typeof t != "string") return { kind: "none" };
  const u = t.trim();
  if (!u) return { kind: "none" };
  const s = y0(u);
  if (s)
    return i ? { kind: "external" } : { kind: "route", location: { name: T0(e, s.name, s.item, s.path).name } };
  if (m0.test(u)) return { kind: "external" };
  if (x0(u)) {
    if (i) return { kind: "external" };
    const a = A0(e, u, r), o = { name: a.name };
    return a.suffix && a.suffix.startsWith("#") ? o.hash = a.suffix : a.suffix && a.suffix.startsWith("?") && (o.query = Object.fromEntries(new URLSearchParams(a.suffix.slice(1)))), { kind: "route", location: o };
  }
  return e && Pr(e, u) ? { kind: "route", location: { name: u } } : u.startsWith("/") && e && v0(e, u) ? { kind: "route", location: { path: u } } : { kind: "external" };
}
const Ss = !1, F0 = {
  beforeCreate() {
    this.vNodes = {}, this.content = { input: {}, output: {} }, this.$_finalRender = null;
  },
  created() {
    var r, n, i, u, s, a, o, c, f, p, l, h, d, _, w, C, D, F, S, E, k, O, L, Y, Q, W, ee, ne, P;
    if ((n = (r = this.$store) == null ? void 0 : r.getters) == null || n._wbcDev, (this.item === void 0 || this.item === null) && this.$slots && this.$slots.default) {
      const y = this.$slots.default.map((x) => x && (x.text !== void 0 ? x.text : x.children && x.children.map((A) => A.text).join("")) || "").join("").trim();
      if (y)
        if (y.startsWith("~")) {
          const x = y.slice(1).trim();
          try {
            this.item_ = this.strToObj(x);
          } catch {
            this.item_ = x;
          }
        } else
          this.item_ = y;
      else
        this.item_ = this.item;
    } else
      this.item_ = this.item;
    if (typeof this.item_ == "string" && (this._originalItem = this.item_), typeof this.item == "string" && this.item.startsWith("~") && (this.item_ = { comp: "span", options: { html: this.item.slice(1) } }), this.wiki_ = this.wiki, this.wiki)
      if (this.wiki.includes(","))
        this.item_ = this.wiki.split(",").map((y) => {
          var x;
          return (x = this.wbcWikiObj) == null ? void 0 : x[y];
        });
      else {
        let y = (i = this.wbcWikiObj) == null ? void 0 : i[this.wiki_];
        this.item_ = y || this.item_;
      }
    if (!this.item_ || !this.item)
      return null;
    this.wrap_ = this != null && this.wrap ? {
      comp: ((u = this.wrap) == null ? void 0 : u.comp) || this.wrap,
      options: ((s = this.wrap) == null ? void 0 : s.options) || {}
    } : null, this.children_ = this.children, this.rColor = ((a = this == null ? void 0 : this.item) == null ? void 0 : a.rColor) || this.randomColor(), this.nameEl = this.global_, this.isPlainObject(this.item_) ? ((o = this.item_) != null && o.init0 && this.item_.init0(this.itemAccessibility), this.nameEl = ((f = (c = this == null ? void 0 : this.item_) == null ? void 0 : c.options) == null ? void 0 : f.global) || this.nameEl, this.refName = "main_" + this.randomKey("", 3).toLowerCase(), (p = this.item_) != null && p.options && !((h = (l = this.item_) == null ? void 0 : l.options) != null && h.ref) && (this.item_.options.ref = this.refName), (d = this.item_) != null && d.options && (this.internalValue = (w = (_ = this == null ? void 0 : this.item_) == null ? void 0 : _.options) == null ? void 0 : w.val), this.dive = (C = this.item_) == null ? void 0 : C.dive, typeof ((S = (F = (D = this.item_) == null ? void 0 : D.options) == null ? void 0 : F.props) == null ? void 0 : S.value) == "boolean" && (this.item_.options.props.value = this.item_.options.val)) : this.internalValue = this.item_, this.nameEl = this.nameEl || this.randomKey("", 3).toLowerCase();
    const e = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    if (this.global_ || (k = (E = this.item_) == null ? void 0 : E.options) != null && k.global) {
      const y = ((L = (O = this.item_) == null ? void 0 : O.options) == null ? void 0 : L.global) || this.global_;
      typeof y == "string" && e.test(y) ? global[y] = this.itemAccessibility : console.error(`[WBC-UI2] Refused to assign global name "${y}" — not a valid JS identifier. Expected pattern: /^[a-zA-Z_$][a-zA-Z0-9_$]*$/`);
    }
    this.dive && (this._preDiveItem = this.clone(this.item_), this.item_ = this.generalVal(
      this.item_,
      this.itemAccessibility,
      this.lang
    ));
    const t = ((Q = (Y = this == null ? void 0 : this.item_) == null ? void 0 : Y.options) == null ? void 0 : Q.on) || {};
    this.itemListeners = {};
    for (const [y, x] of Object.entries(t))
      typeof x == "function" ? this.itemListeners[y] = (...A) => x(this.itemAccessibility, ...A) : this.itemListeners[y] = x;
    (ee = (W = this.$store) == null ? void 0 : W.getters) == null || ee._wbcProAuthorized, (P = (ne = this.item_) == null ? void 0 : ne.watch) != null && P.length && console.warn("[WBC-UI2] Reactive watch[] orchestration requires a PRO license.");
  },
  mounted() {
    var e, t, r;
    this.isPlainObject(this.item_) && ((this.isWbcPro || Ss) && typeof ((e = this.item_) == null ? void 0 : e.init) == "function" && this.item_.init(this.itemAccessibility), (this.isWbcPro || Ss) && typeof ((t = this.item_) == null ? void 0 : t.logic) == "function" && this.item_.logic(this.itemAccessibility)), ((r = this.item_) == null ? void 0 : r.comp) == "meta" && this.setMetaParams(this.item_, this.$store.state.lg), typeof window < "u" && this.isPlainObject(this.item_) && D0(this.$router, this.item_);
  },
  updated() {
    var e, t, r;
    this.item_ instanceof Object && (e = this.item_) != null && e.updater && this.item_.updater(this.itemAccessibility), this.item_ instanceof Object && (t = this.item_) != null && t.options && (this.item_.options.isValid = this.internalValueIsValid), ((r = this.item_) == null ? void 0 : r.comp) == "meta" && this.setMetaParams(this.item_, this.$store.state.lg);
  },
  beforeDestroy() {
    this.$el && this.$el.removeEventListener("mousedown", this.handleMouseDown), document.removeEventListener("mousemove", this.doDrag), document.removeEventListener("mouseup", this.endDrag);
  }
}, P0 = {
  computed: {
    computedKey() {
      var i, u, s;
      const e = this.item_, t = e && typeof e == "object" ? e.options : null;
      let r = this.nameEl || "";
      if (t) {
        const a = t.key;
        typeof a == "string" || typeof a == "number" ? r = a : typeof a == "object" && a !== null && (r = JSON.stringify(a).slice(0, 20));
      }
      const n = [
        "key",
        this.nameEl || "",
        "n",
        r,
        this.extKey || "",
        this.key_ || "",
        this.key || ""
      ];
      if (t && t.reactiveKey) {
        const a = (i = t.val) == null ? void 0 : i.length, o = (s = (u = t.props) == null ? void 0 : u.value) == null ? void 0 : s.length;
        a !== void 0 && n.push("v", a), o !== void 0 && n.push("vv", o);
      }
      return n.join("-");
    },
    isWbcPro() {
      var e, t;
      return ((t = (e = this.$store) == null ? void 0 : e.getters) == null ? void 0 : t.isWbcPro) || !1;
    },
    wbcTier() {
      var e, t;
      return ((t = (e = this.$store) == null ? void 0 : e.getters) == null ? void 0 : t.userTier()) || "free";
    },
    itemMode: () => "itemMode",
    itemDisp: () => "itemDisp",
    itemProd: () => "itemProd",
    // CQ-4 FIX: Corrected typo from 'itemAccessebility' to 'itemAccessibility'
    itemAccessibility() {
      return kl(this, this.isWbcPro, this.wbcTier);
    },
    resolvedWbCode() {
      var e, t, r, n;
      return ((t = (e = this.item_) == null ? void 0 : e.options) == null ? void 0 : t.wbCode) != null ? (n = (r = this.item_) == null ? void 0 : r.options) == null ? void 0 : n.wbCode : this.wbCode != null ? this.wbCode : null;
    },
    resolvedWbCodeFile() {
      var e, t, r, n;
      return ((t = (e = this.item_) == null ? void 0 : e.options) == null ? void 0 : t.wbCodeFile) != null ? (n = (r = this.item_) == null ? void 0 : r.options) == null ? void 0 : n.wbCodeFile : this.wbCodeFile != null ? this.wbCodeFile : null;
    },
    resolvedWbDataViewer() {
      var e, t, r, n;
      return ((t = (e = this.item_) == null ? void 0 : e.options) == null ? void 0 : t.wbDataViewer) != null ? (n = (r = this.item_) == null ? void 0 : r.options) == null ? void 0 : n.wbDataViewer : this.wbDataViewer != null ? this.wbDataViewer : null;
    },
    resolvedHide() {
      var e, t;
      return this.hide_ != null ? this.hide_ : ((t = (e = this.item_) == null ? void 0 : e.options) == null ? void 0 : t.hide) != null ? this.item_.options.hide : this.hide != null ? this.hide : null;
    },
    itemFileLanguage() {
      var n;
      const e = typeof this.item_ == "string" ? this.item_ : this._originalItem;
      if (typeof e != "string") return null;
      const t = ii, r = (n = e.split(".").pop()) == null ? void 0 : n.toLowerCase();
      return t[r] || null;
    },
    lang() {
      var e, t, r, n, i;
      return ((t = (e = this == null ? void 0 : this.item_) == null ? void 0 : e.options) == null ? void 0 : t.lang) || ((n = (r = this == null ? void 0 : this.$store) == null ? void 0 : r.state) == null ? void 0 : n.lg) || ((i = this.getCookies()) == null ? void 0 : i.lg) || "en";
    }
  }
};
function ko(e) {
  if (typeof e != "string")
    return e;
  {
    const t = [];
    let r = t, n = "", i = 0;
    for (let u = 0; u < e.length; u++) {
      const s = e[u];
      s === "|" && i === 0 ? (n.length > 0 && (r.push(n), n = ""), r.push([]), r = r[r.length - 1]) : s === "+" && i === 0 ? n.length > 0 && (r.push(n), n = "") : s === "(" ? (i++, n += s) : (s === ")" && i--, n += s);
    }
    return n.length > 0 && r.push(n), t;
  }
}
function L0(e, t, r, n) {
  if (!n) return e;
  try {
    const i = n.enc.Utf8.parse(t), u = n.enc.Utf8.parse(r), s = n.enc.Utf8.parse(e);
    return n.AES.encrypt(s, i, {
      iv: u,
      mode: n.mode.CBC,
      padding: n.pad.Pkcs7
    }).ciphertext.toString();
  } catch (i) {
    return console.error("[WBC-UI SafeEval AES Error]", i), e;
  }
}
function N0(e, t, r, n) {
  if (!n) return e;
  try {
    const i = n.enc.Utf8.parse(t), u = n.enc.Utf8.parse(r), s = n.enc.Hex.parse(e), a = n.enc.Base64.stringify(s);
    return n.AES.decrypt(a, i, {
      iv: u,
      mode: n.mode.CBC,
      padding: n.pad.Pkcs7
    }).toString(n.enc.Utf8);
  } catch (i) {
    return console.error("[WBC-UI SafeEval AES Decrypt Error]", i), e;
  }
}
function Co(e, t, r) {
  const n = typeof Vue < "u" && Vue.CryptoJS ? Vue.CryptoJS : null;
  return n ? L0(e, t, r, n) : (console.warn("[WBC] vue-cryptojs is not installed — aesEnc unavailable"), "");
}
function Eo(e, t, r) {
  const n = typeof Vue < "u" && Vue.CryptoJS ? Vue.CryptoJS : null;
  return n ? N0(e, t, r, n) : (console.warn("[WBC] vue-cryptojs is not installed — aesDec unavailable"), "");
}
const R0 = {
  props: {
    /**
     * Main UI definition object. Can be a string, object, array, function, or VNode.
     * Defines the component structure, layout, and behavior using WBC syntax.
     * @type {string|object|array|function|VNode}
     * @default null
     */
    item: {
      type: [String, Object, Array, Function, Number],
      default: () => null
    },
    /**
     * Code display configuration for showing the WBC item source code.
     * Controls the visibility and appearance of the code block panel (PRO/DEV only).
     * Supports options: activator, collapsed, and additional WBCode props.
     * @type {boolean|object}
     * @default null
     */
    wbCode: {
      type: [Boolean, Object],
      default: () => null
    },
    /**
     * File code display configuration for showing linked file source code.
     * Controls the visibility and appearance of file content code blocks (PRO/DEV only).
     * Supports options: activator, collapsed, language, and additional WBCode props.
     * @type {boolean|object}
     * @default null
     */
    wbCodeFile: {
      type: [Boolean, Object],
      default: () => null
    },
    /**
     * Data viewer configuration for displaying item data in a table format.
     * Controls the visibility and appearance of the data viewer panel (PRO/DEV only).
     * Supports options: activator, collapsed, and additional WBDataViewer props.
     * @type {boolean|object}
     * @default null
     */
    wbDataViewer: {
      type: [Boolean, Object],
      default: () => null
    },
    /**
     * Additional props to pass through to rendered components.
     * Falls back to $route.params if not provided.
     * @type {object}
     * @default null
     */
    props: {
      type: Object,
      default: () => null
    },
    /**
     * Access protection flag or configuration. When true or an object,
     * displays a "Forbidden access" alert instead of the content.
     * Can be a boolean, string (custom message), or object with alert options.
     * @type {boolean|string|object}
     * @default false
     */
    protected: {
      type: [Boolean, String, Object],
      default: () => !1
    },
    /**
     * Loading state flag or configuration. When active, displays a loading
     * spinner instead of content. Can be a boolean, string (custom message),
     * or object with { active, options } for custom loading component.
     * @type {boolean|string|object}
     * @default false
     */
    load: {
      type: [Boolean, String, Object],
      default: () => !1
    },
    /**
     * Floating window configuration. When set, wraps content in a floating/draggable panel
     * with float icon in the corner.
     * @type {boolean|object}
     * @default null
     */
    float: {
      type: [Boolean, Object],
      default: () => null
    },
    /**
     * External child components or content to inject into the rendered output.
     * Passed to renderObject for integration with the item's children slots.
     * @type {array|object}
     * @default null
     */
    children: {
      type: [Array, Object],
      default: () => null
    },
    /**
     * Wrapper component configuration. Wraps the main rendered content
     * inside a specified WBC component definition.
     * Can be a string (component name) or object (WBC item definition).
     * @type {string|object}
     * @default null
     */
    wrap: {
      type: [String, Object],
      default: () => null
    },
    /**
     * External key for component identification and caching.
     * Stored internally as extKey_ and used for unique component instances.
     * @type {string}
     * @default ""
     */
    extKey: {
      type: String,
      default: () => ""
    },
    /**
     * Wiki integration flag. When true, enables wiki-specific rendering
     * and requires the WBCWikiObj to be registered. Shows error if missing.
     * @type {boolean}
     * @default null
     */
    wiki: {
      type: Boolean,
      default: () => null
    },
    /**
     * Transform flag controlling item transformation during rendering.
     * When true (default), enables item parsing and transformation logic.
     * @type {boolean}
     * @default true
     */
    transform: {
      type: Boolean,
      default: () => !0
    },
    /**
     * Global reference string for accessing shared/global state or components.
     * Stored internally as global_ and used for cross-component communication.
     * @type {string}
     * @default null
     */
    global: {
      type: String,
      default: () => null
    },
    /**
     * Hide flag. When true, renders nothing (returns null).
     * Can also be set via item.options.hide for conditional hiding.
     * @type {boolean}
     * @default null
     */
    hide: {
      type: Boolean,
      default: () => null
    },
    /**
     * Close button configuration. When set, renders a close icon
     * that can be used to dismiss or close the component.
     * @type {boolean|object}
     * @default null
     */
    close: {
      type: [Boolean, Object],
      default: () => null
    },
    /**
     * Drag handle configuration. When set, renders a drag icon
     * that enables dragging/moving the component.
     * @type {boolean|object}
     * @default null
     */
    drag: {
      type: [Boolean, Object],
      default: () => null
    },
    /**
     * Focus target identifier. Specifies which element or component
     * should receive focus when this component is rendered.
     * @type {string}
     * @default null
     */
    focusOn: {
      type: String,
      default: () => null
    },
    /**
     * Security boundary flag. Set `true` when this WBC renders content from an
     * UNTRUSTED source (e.g. a descriptor decompressed from a URL — the dynamic
     * playground route). It forces the hardened AST-sandbox evaluator for this
     * component AND its whole subtree (propagated via provide/inject), so embedded
     * handler strings can never run as real `new Function` closures — even in a
     * build where `__WBC_TRUSTED_CONTENT__` makes authored content eval full-power.
     * Authored `.md` content leaves this `false` and stays fully interactive.
     * @type {boolean}
     * @default false
     */
    untrusted: {
      type: Boolean,
      default: () => !1
    }
  }
}, j0 = {
  data() {
    var e;
    return {
      fileContent: null,
      source: null,
      protected_: null,
      wbCode_: this.wbCode != null ? this.wbCode : null,
      wbCodeFile_: this.wbCodeFile != null ? this.wbCodeFile : null,
      wbDataViewer_: this.wbDataViewer != null ? this.wbDataViewer : null,
      props_: this.props || ((e = this == null ? void 0 : this.$route) == null ? void 0 : e.params),
      wiki_: null,
      main: null,
      internalValue: null,
      internalValueIsValid: null,
      load_: this == null ? void 0 : this.load,
      float_: null,
      hide_: null,
      close_: null,
      focus_: null,
      drag_: null,
      focusOn_: null,
      menu: !1,
      switch: !1,
      wbcItem: null,
      compMedia: null,
      mediaData: null,
      codeMirroMode: "text/html",
      media: null,
      item_: {},
      _originalItem: null,
      watch_: [],
      rColor: null,
      mainItemTextArea: {
        class: "white",
        label: "Object/array to parse",
        rules: [],
        key: "main-item"
      },
      draggable: !1,
      dragStartX: 0,
      dragStartY: 0,
      offsetX: 0,
      offsetY: 0,
      alertObjs: [],
      children_: null,
      extKey_: this.extKey,
      key_: 0,
      wrap_: null,
      data: null,
      select: !1,
      itemListeners: {},
      attrs: {},
      dive: !1,
      nameEl: null,
      AsyncComponent: null,
      isComponentLoaded: !1,
      refName: null,
      global_: this.global,
      _jsLazyComp: null,
      _jsLazyLoading: !1
    };
  }
}, B0 = {
  watch: {
    // PERF-4 FIX: Batch syncVNodes calls to prevent excessive updates.
    // Initial sync happens in render() rather than immediately.
    // $_syncPending flag batches multiple watcher triggers into a single call.
    resolvedWbCode: {
      handler() {
        this._scheduleSyncVNodes();
      }
    },
    resolvedWbCodeFile: {
      handler() {
        this._scheduleSyncVNodes();
      }
    },
    resolvedWbDataViewer: {
      handler() {
        this._scheduleSyncVNodes();
      }
    },
    item: {
      handler(e) {
        this.item_ = e, this.dive && (this._preDiveItem = this.clone(this.item_), this.item_ = this.generalVal(
          this.item_,
          this.itemAccessibility,
          this.lang
        )), this._scheduleSyncVNodes();
      },
      deep: !0
    },
    "item_.options.val"(e) {
      this.internalValue = e;
    },
    internalValue(e) {
      var t;
      (t = this == null ? void 0 : this.item_) != null && t.options ? this.item_.options.val = e : this.item_ = e;
    },
    "item_.options.props.value"(e) {
      this.internalValue = e, this.item_.options.val = e;
    },
    "$store.state.lg"(e, t) {
      this.$cookies.set("lg", e), this.dive && this._preDiveItem && (this.item_ = this.generalVal(
        this.clone(this._preDiveItem),
        this.itemAccessibility,
        e
      )), this.key_ += 1;
    }
  }
}, M0 = (e) => ` ${e}`.replace(/_/g, " ").replace(/ ./g, (t) => t.toUpperCase()).trim(), V0 = function(e) {
  return typeof e != "string" ? e : e.toLowerCase().split(" ").map(function(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }).join(" ");
}, $0 = function(e) {
  if (typeof e == "object" || !e)
    return "";
  var t, r, n, i, u;
  for (n = e.replace(/([^\W_]+[^\s-]*) */g, function(s) {
    return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
  }), i = ["A", "An", "The", "And", "But", "Or", "For", "Nor", "As", "At", "By", "For", "From", "In", "Into", "Near", "Of", "On", "Onto", "To", "With"], t = 0, r = i.length; t < r; t++)
    n = n.replace(new RegExp("\\s" + i[t] + "\\s", "g"), function(s) {
      return s.toLowerCase();
    });
  for (u = ["Id", "Tv"], t = 0, r = u.length; t < r; t++)
    n = n.replace(new RegExp("\\b" + u[t] + "\\b", "g"), u[t].toUpperCase());
  return n;
}, W0 = function(e) {
  return typeof e != "string" ? e : e.replace(/[_-]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2").replace(/^./, (t) => t.toUpperCase()).replace(/\s+/g, " ");
};
function z0(e) {
  const t = Math.floor(e / 60), r = e % 60;
  return r == 0 ? `${t}h` : `${t}h ${r}m`;
}
const U0 = function(e) {
  return e.replace(/^([A-Z])/, (t) => t.toLowerCase()).replace(/([a-z])([A-Z])/g, "$1-$2");
};
function H0(e) {
  return e.split(/\r?\n/).map((t) => `<p>${t}</p>`).join("");
}
function q0(e) {
  if (!e) return "";
  if (typeof e != "string")
    try {
      e = JSON.stringify(e, null, 2);
    } catch {
      e = String(e);
    }
  return e.split(/\n+/).map((t) => t.trim()).filter((t) => t.length).map((t) => `<p>${t}</p>`).join(`
`);
}
async function G0(e, t = null) {
  var r;
  if (typeof e != "string") return e;
  try {
    const n = await import("prettier/standalone");
    let i = null, u = [];
    if (t && (i = {
      html: "html",
      htm: "html",
      vue: "vue",
      js: "babel",
      javascript: "babel",
      jsx: "babel",
      ts: "babel-ts",
      typescript: "babel-ts",
      tsx: "babel-ts",
      css: "css",
      scss: "scss",
      less: "less",
      json: "json",
      json5: "json5",
      markdown: "markdown",
      md: "markdown",
      graphql: "graphql",
      yaml: "yaml",
      yml: "yaml"
    }[t.toLowerCase()] || "html"), !i) {
      const [s, a, o, c] = await Promise.all([
        import("prettier/parser-html"),
        import("prettier/parser-babel"),
        import("prettier/parser-postcss"),
        import("prettier/parser-yaml").catch(() => null)
      ]);
      u = [s, a, o], c && u.push(c), i = ((r = n.getSupportInfo) == null ? void 0 : r.call(n).languages.flatMap((f) => f.parsers).find((f) => {
        try {
          return n.format(e.slice(0, 1e3), { parser: f, plugins: u }), !0;
        } catch {
          return !1;
        }
      })) || "html";
    }
    return ["html", "vue", "markdown"].includes(i) ? u = [await import("prettier/parser-html")] : i.includes("babel") ? u = [await import("prettier/parser-babel")] : ["css", "scss", "less", "postcss"].includes(i) ? u = [await import("prettier/parser-postcss")] : ["yaml", "yml"].includes(i) && (u = [await import("prettier/parser-yaml")]), n.format(e, {
      parser: i,
      plugins: u,
      tabWidth: 2,
      useTabs: !1,
      printWidth: 100,
      semi: !0,
      singleQuote: !0,
      trailingComma: "es5",
      bracketSameLine: !1,
      htmlWhitespaceSensitivity: "css",
      vueIndentScriptAndStyle: !0
    });
  } catch (n) {
    return console.warn("[formatCode] Failed:", n.message), e;
  }
}
function gi(e, { indentSize: t = 4, removeComments: r = !0 } = {}) {
  if (!e || typeof e != "string") return e;
  let n = e.trim();
  r && (n = n.replace(/<!--[\s\S]*?-->/g, "").replace(/<!---->/g, ""));
  const i = " ".repeat(t);
  let u = 0, s = "";
  const a = n.replace(/></g, "> <").split(/(<[^>]+>)/g).filter(Boolean);
  let o = !1;
  for (let c of a) {
    const f = c.trim(), p = /^</.test(f), l = /^<\//.test(f), h = /\/>$/.test(f);
    if (p)
      l && !h && (u = Math.max(0, u - 1)), s += `
` + i.repeat(u) + f, o = !0, !l && !h && u++;
    else {
      const d = c.trim();
      d && ((o || s.endsWith(`
`)) && (s += `
` + i.repeat(u)), s += d, o = !1);
    }
  }
  return s.trim() + `
`;
}
const K0 = (e) => gi(e, { indentSize: 4 }), Z0 = (e) => gi(e, { indentSize: 2 }), Y0 = gi;
function Uu(e, { indent: t = 4 } = {}) {
  if (typeof e == "string")
    try {
      e = JSON.parse(e);
    } catch {
      return e;
    }
  return JSON.stringify(e, null, " ".repeat(t));
}
const J0 = (e) => Uu(e, { indent: 2 }), X0 = (e) => Uu(e, { indent: 4 });
function cn(e, { indent: t = 4 } = {}) {
  if (typeof e == "string")
    try {
      const n = JSON.parse(e);
      return JSON.stringify(n, null, t);
    } catch {
      return e;
    }
  if (typeof e != "object" || e === null)
    return typeof e == "function" ? `function ${e.name || ""}() { ... }` : e === void 0 ? "undefined" : String(e);
  const r = " ".repeat(t);
  return JSON.stringify(e, (n, i) => typeof i == "function" ? `[Function${i.name ? ` ${i.name}` : ""}]` : i === void 0 ? "[undefined]" : typeof i == "symbol" || typeof i == "bigint" ? i.toString() + (typeof i == "bigint" ? "n" : "") : i, r);
}
const Q0 = cn, ep = (e, t = 4) => cn(e, { indent: t }), tp = (e) => cn(e, { indent: 2 }), rp = (e) => cn(e, { indent: 4 }), np = (e) => {
};
/*! @license DOMPurify 3.4.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.8/LICENSE */
function Ts(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ip(e) {
  if (Array.isArray(e)) return e;
}
function up(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, u, s, a = [], o = !0, c = !1;
    try {
      if (u = (r = r.call(e)).next, t !== 0) for (; !(o = (n = u.call(r)).done) && (a.push(n.value), a.length !== t); o = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!o && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw i;
      }
    }
    return a;
  }
}
function sp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ap(e, t) {
  return ip(e) || up(e, t) || op(e, t) || sp();
}
function op(e, t) {
  if (e) {
    if (typeof e == "string") return Ts(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ts(e, t) : void 0;
  }
}
const Ao = Object.entries, Ds = Object.setPrototypeOf, cp = Object.isFrozen, lp = Object.getPrototypeOf, fp = Object.getOwnPropertyDescriptor;
let Be = Object.freeze, it = Object.seal, kr = Object.create, So = typeof Reflect < "u" && Reflect, Cu = So.apply, Eu = So.construct;
Be || (Be = function(t) {
  return t;
});
it || (it = function(t) {
  return t;
});
Cu || (Cu = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++)
    i[u - 2] = arguments[u];
  return t.apply(r, i);
});
Eu || (Eu = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const nr = Ee(Array.prototype.forEach), pp = Ee(Array.prototype.lastIndexOf), Os = Ee(Array.prototype.pop), xr = Ee(Array.prototype.push), hp = Ee(Array.prototype.splice), je = Array.isArray, Hr = Ee(String.prototype.toLowerCase), Gi = Ee(String.prototype.toString), Is = Ee(String.prototype.match), _r = Ee(String.prototype.replace), Fs = Ee(String.prototype.indexOf), dp = Ee(String.prototype.trim), mp = Ee(Number.prototype.toString), bp = Ee(Boolean.prototype.toString), Ps = typeof BigInt > "u" ? null : Ee(BigInt.prototype.toString), Ls = typeof Symbol > "u" ? null : Ee(Symbol.prototype.toString), we = Ee(Object.prototype.hasOwnProperty), Ur = Ee(Object.prototype.toString), Ie = Ee(RegExp.prototype.test), vr = gp(TypeError);
function Ee(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Cu(e, t, n);
  };
}
function gp(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Eu(e, r);
  };
}
function se(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Hr;
  if (Ds && Ds(e, null), !je(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const u = r(i);
      u !== i && (cp(t) || (t[n] = u), i = u);
    }
    e[i] = !0;
  }
  return e;
}
function yp(e) {
  for (let t = 0; t < e.length; t++)
    we(e, t) || (e[t] = null);
  return e;
}
function Fe(e) {
  const t = kr(null);
  for (const n of Ao(e)) {
    var r = ap(n, 2);
    const i = r[0], u = r[1];
    we(e, i) && (je(u) ? t[i] = yp(u) : u && typeof u == "object" && u.constructor === Object ? t[i] = Fe(u) : t[i] = u);
  }
  return t;
}
function xp(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return mp(e);
    case "boolean":
      return bp(e);
    case "bigint":
      return Ps ? Ps(e) : "0";
    case "symbol":
      return Ls ? Ls(e) : "Symbol()";
    case "undefined":
      return Ur(e);
    case "function":
    case "object": {
      if (e === null)
        return Ur(e);
      const t = e, r = gt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Ur(n);
      }
      return Ur(e);
    }
    default:
      return Ur(e);
  }
}
function gt(e, t) {
  for (; e !== null; ) {
    const n = fp(e, t);
    if (n) {
      if (n.get)
        return Ee(n.get);
      if (typeof n.value == "function")
        return Ee(n.value);
    }
    e = lp(e);
  }
  function r() {
    return null;
  }
  return r;
}
function _p(e) {
  try {
    return Ie(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ns = Be(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ki = Be(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Zi = Be(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), vp = Be(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Yi = Be(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), wp = Be(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rs = Be(["#text"]), js = Be(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ji = Be(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Bs = Be(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ln = Be(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), kp = it(/{{[\w\W]*|^[\w\W]*}}/g), Cp = it(/<%[\w\W]*|^[\w\W]*%>/g), Ep = it(/\${[\w\W]*/g), Ap = it(/^data-[\-\w.\u00B7-\uFFFF]+$/), Sp = it(/^aria-[\-\w]+$/), Ms = it(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Tp = it(/^(?:\w+script|data):/i), Dp = it(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Op = it(/^html$/i), Ip = it(/^[a-z][.\w]*(-[.\w]+)+$/i), bt = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, Fp = function() {
  return typeof window > "u" ? null : window;
}, Pp = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const u = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(u, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + u + " could not be created."), null;
  }
}, Vs = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function To() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fp();
  const t = (Z) => To(Z);
  if (t.version = "3.4.8", t.removed = [], !e || !e.document || e.document.nodeType !== bt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const u = e.HTMLTemplateElement, s = e.Node, a = e.Element, o = e.NodeFilter, c = e.NamedNodeMap;
  c === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, p = e.trustedTypes, l = a.prototype, h = gt(l, "cloneNode"), d = gt(l, "remove"), _ = gt(l, "nextSibling"), w = gt(l, "childNodes"), C = gt(l, "parentNode"), D = gt(l, "shadowRoot"), F = gt(l, "attributes"), S = s && s.prototype ? gt(s.prototype, "nodeType") : null, E = s && s.prototype ? gt(s.prototype, "nodeName") : null;
  if (typeof u == "function") {
    const Z = r.createElement("template");
    Z.content && Z.content.ownerDocument && (r = Z.content.ownerDocument);
  }
  let k, O = "", L = 0;
  const Y = function(g) {
    if (L > 0)
      throw vr('The configured TRUSTED_TYPES_POLICY.createHTML must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose createHTML wraps DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
    L++;
    try {
      return k.createHTML(g);
    } finally {
      L--;
    }
  }, Q = r, W = Q.implementation, ee = Q.createNodeIterator, ne = Q.createDocumentFragment, P = Q.getElementsByTagName, y = n.importNode;
  let x = Vs();
  t.isSupported = typeof Ao == "function" && typeof C == "function" && W && W.createHTMLDocument !== void 0;
  const A = kp, T = Cp, R = Ep, B = Ap, q = Sp, $ = Tp, j = Dp, V = Ip;
  let U = Ms, M = null;
  const X = se({}, [...Ns, ...Ki, ...Zi, ...Yi, ...Rs]);
  let te = null;
  const Ae = se({}, [...js, ...Ji, ...Bs, ...Ln]);
  let ie = Object.seal(kr(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Oe = null, He = null;
  const Ne = Object.seal(kr(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let dn = !0, Nr = !0, mn = !1, bn = !0, ht = !1, Zt = !0, Qe = !1, Yt = !1, Rt = !1, Re = !1, Jt = !1, Xt = !1, gn = !0, yn = !1;
  const Qt = "user-content-";
  let pr = !0, jt = !1, Et = {}, qe = null;
  const Rr = se({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let xn = null;
  const dt = se({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const _n = se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), er = "http://www.w3.org/1998/Math/MathML", hr = "http://www.w3.org/2000/svg", Ge = "http://www.w3.org/1999/xhtml";
  let et = Ge, jr = !1, at = null;
  const Si = se({}, [er, hr, Ge], Gi);
  let Br = se({}, ["mi", "mo", "mn", "ms", "mtext"]), Mr = se({}, ["annotation-xml"]);
  const Ti = se({}, ["title", "style", "font", "a", "script"]);
  let tr = null;
  const ot = ["application/xhtml+xml", "text/html"], Di = "text/html";
  let _e = null, Mt = null;
  const Oi = r.createElement("form"), vn = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, mt = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Mt && Mt === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = Fe(g), tr = // eslint-disable-next-line unicorn/prefer-includes
    ot.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? Di : g.PARSER_MEDIA_TYPE, _e = tr === "application/xhtml+xml" ? Gi : Hr, M = we(g, "ALLOWED_TAGS") && je(g.ALLOWED_TAGS) ? se({}, g.ALLOWED_TAGS, _e) : X, te = we(g, "ALLOWED_ATTR") && je(g.ALLOWED_ATTR) ? se({}, g.ALLOWED_ATTR, _e) : Ae, at = we(g, "ALLOWED_NAMESPACES") && je(g.ALLOWED_NAMESPACES) ? se({}, g.ALLOWED_NAMESPACES, Gi) : Si, Bt = we(g, "ADD_URI_SAFE_ATTR") && je(g.ADD_URI_SAFE_ATTR) ? se(Fe(_n), g.ADD_URI_SAFE_ATTR, _e) : _n, xn = we(g, "ADD_DATA_URI_TAGS") && je(g.ADD_DATA_URI_TAGS) ? se(Fe(dt), g.ADD_DATA_URI_TAGS, _e) : dt, qe = we(g, "FORBID_CONTENTS") && je(g.FORBID_CONTENTS) ? se({}, g.FORBID_CONTENTS, _e) : Rr, Oe = we(g, "FORBID_TAGS") && je(g.FORBID_TAGS) ? se({}, g.FORBID_TAGS, _e) : Fe({}), He = we(g, "FORBID_ATTR") && je(g.FORBID_ATTR) ? se({}, g.FORBID_ATTR, _e) : Fe({}), Et = we(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? Fe(g.USE_PROFILES) : g.USE_PROFILES : !1, dn = g.ALLOW_ARIA_ATTR !== !1, Nr = g.ALLOW_DATA_ATTR !== !1, mn = g.ALLOW_UNKNOWN_PROTOCOLS || !1, bn = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ht = g.SAFE_FOR_TEMPLATES || !1, Zt = g.SAFE_FOR_XML !== !1, Qe = g.WHOLE_DOCUMENT || !1, Re = g.RETURN_DOM || !1, Jt = g.RETURN_DOM_FRAGMENT || !1, Xt = g.RETURN_TRUSTED_TYPE || !1, Rt = g.FORCE_BODY || !1, gn = g.SANITIZE_DOM !== !1, yn = g.SANITIZE_NAMED_PROPS || !1, pr = g.KEEP_CONTENT !== !1, jt = g.IN_PLACE || !1, U = _p(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : Ms, et = typeof g.NAMESPACE == "string" ? g.NAMESPACE : Ge, Br = we(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Fe(g.MATHML_TEXT_INTEGRATION_POINTS) : se({}, ["mi", "mo", "mn", "ms", "mtext"]), Mr = we(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? Fe(g.HTML_INTEGRATION_POINTS) : se({}, ["annotation-xml"]);
    const N = we(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? Fe(g.CUSTOM_ELEMENT_HANDLING) : kr(null);
    if (ie = kr(null), we(N, "tagNameCheck") && vn(N.tagNameCheck) && (ie.tagNameCheck = N.tagNameCheck), we(N, "attributeNameCheck") && vn(N.attributeNameCheck) && (ie.attributeNameCheck = N.attributeNameCheck), we(N, "allowCustomizedBuiltInElements") && typeof N.allowCustomizedBuiltInElements == "boolean" && (ie.allowCustomizedBuiltInElements = N.allowCustomizedBuiltInElements), ht && (Nr = !1), Jt && (Re = !0), Et && (M = se({}, Rs), te = kr(null), Et.html === !0 && (se(M, Ns), se(te, js)), Et.svg === !0 && (se(M, Ki), se(te, Ji), se(te, Ln)), Et.svgFilters === !0 && (se(M, Zi), se(te, Ji), se(te, Ln)), Et.mathMl === !0 && (se(M, Yi), se(te, Bs), se(te, Ln))), Ne.tagCheck = null, Ne.attributeCheck = null, we(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? Ne.tagCheck = g.ADD_TAGS : je(g.ADD_TAGS) && (M === X && (M = Fe(M)), se(M, g.ADD_TAGS, _e))), we(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? Ne.attributeCheck = g.ADD_ATTR : je(g.ADD_ATTR) && (te === Ae && (te = Fe(te)), se(te, g.ADD_ATTR, _e))), we(g, "ADD_URI_SAFE_ATTR") && je(g.ADD_URI_SAFE_ATTR) && se(Bt, g.ADD_URI_SAFE_ATTR, _e), we(g, "FORBID_CONTENTS") && je(g.FORBID_CONTENTS) && (qe === Rr && (qe = Fe(qe)), se(qe, g.FORBID_CONTENTS, _e)), we(g, "ADD_FORBID_CONTENTS") && je(g.ADD_FORBID_CONTENTS) && (qe === Rr && (qe = Fe(qe)), se(qe, g.ADD_FORBID_CONTENTS, _e)), pr && (M["#text"] = !0), Qe && se(M, ["html", "head", "body"]), M.table && (se(M, ["tbody"]), delete Oe.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw vr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw vr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const H = k;
      k = g.TRUSTED_TYPES_POLICY;
      try {
        O = Y("");
      } catch (le) {
        throw k = H, le;
      }
    } else
      k === void 0 && g.TRUSTED_TYPES_POLICY !== null && (k = Pp(p, i)), k && typeof O == "string" && (O = Y(""));
    (x.uponSanitizeElement.length > 0 || x.uponSanitizeAttribute.length > 0) && M === X && (M = Fe(M)), x.uponSanitizeAttribute.length > 0 && te === Ae && (te = Fe(te)), Be && Be(g), Mt = g;
  }, wn = se({}, [...Ki, ...Zi, ...vp]), kn = se({}, [...Yi, ...wp]), Ii = function(g) {
    let N = C(g);
    (!N || !N.tagName) && (N = {
      namespaceURI: et,
      tagName: "template"
    });
    const H = Hr(g.tagName), le = Hr(N.tagName);
    return at[g.namespaceURI] ? g.namespaceURI === hr ? N.namespaceURI === Ge ? H === "svg" : N.namespaceURI === er ? H === "svg" && (le === "annotation-xml" || Br[le]) : !!wn[H] : g.namespaceURI === er ? N.namespaceURI === Ge ? H === "math" : N.namespaceURI === hr ? H === "math" && Mr[le] : !!kn[H] : g.namespaceURI === Ge ? N.namespaceURI === hr && !Mr[le] || N.namespaceURI === er && !Br[le] ? !1 : !kn[H] && (Ti[H] || !wn[H]) : !!(tr === "application/xhtml+xml" && at[g.namespaceURI]) : !1;
  }, Ke = function(g) {
    xr(t.removed, {
      element: g
    });
    try {
      C(g).removeChild(g);
    } catch {
      d(g);
    }
  }, At = function(g, N) {
    try {
      xr(t.removed, {
        attribute: N.getAttributeNode(g),
        from: N
      });
    } catch {
      xr(t.removed, {
        attribute: null,
        from: N
      });
    }
    if (N.removeAttribute(g), g === "is")
      if (Re || Jt)
        try {
          Ke(N);
        } catch {
        }
      else
        try {
          N.setAttribute(g, "");
        } catch {
        }
  }, St = function(g) {
    let N = null, H = null;
    if (Rt)
      g = "<remove></remove>" + g;
    else {
      const he = Is(g, /^[\r\n\t ]+/);
      H = he && he[0];
    }
    tr === "application/xhtml+xml" && et === Ge && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const le = k ? Y(g) : g;
    if (et === Ge)
      try {
        N = new f().parseFromString(le, tr);
      } catch {
      }
    if (!N || !N.documentElement) {
      N = W.createDocument(et, "template", null);
      try {
        N.documentElement.innerHTML = jr ? O : le;
      } catch {
      }
    }
    const ue = N.body || N.documentElement;
    return g && H && ue.insertBefore(r.createTextNode(H), ue.childNodes[0] || null), et === Ge ? P.call(N, Qe ? "html" : "body")[0] : Qe ? N.documentElement : ue;
  }, Cn = function(g) {
    return ee.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      o.SHOW_ELEMENT | o.SHOW_COMMENT | o.SHOW_TEXT | o.SHOW_PROCESSING_INSTRUCTION | o.SHOW_CDATA_SECTION,
      null
    );
  }, Vr = function(g) {
    var N, H;
    g.normalize();
    const le = ee.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      o.SHOW_TEXT | o.SHOW_COMMENT | o.SHOW_CDATA_SECTION | o.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ue = le.nextNode();
    for (; ue; ) {
      let ke = ue.data;
      nr([A, T, R], ($e) => {
        ke = _r(ke, $e, " ");
      }), ue.data = ke, ue = le.nextNode();
    }
    const he = (N = (H = g.querySelectorAll) === null || H === void 0 ? void 0 : H.call(g, "template")) !== null && N !== void 0 ? N : [];
    nr(Array.from(he), (ke) => {
      Vt(ke.content) && Vr(ke.content);
    });
  }, dr = function(g) {
    const N = E ? E(g) : null;
    return typeof N != "string" || _e(N) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    g.attributes !== F(g) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    g.nodeType !== S(g) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    g.childNodes !== w(g);
  }, Vt = function(g) {
    if (!S || typeof g != "object" || g === null)
      return !1;
    try {
      return S(g) === bt.documentFragment;
    } catch {
      return !1;
    }
  }, mr = function(g) {
    if (!S || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof S(g) == "number";
    } catch {
      return !1;
    }
  };
  function ct(Z, g, N) {
    nr(Z, (H) => {
      H.call(t, g, N, Mt);
    });
  }
  const br = function(g) {
    let N = null;
    if (ct(x.beforeSanitizeElements, g, null), dr(g))
      return Ke(g), !0;
    const H = _e(E ? E(g) : g.nodeName);
    if (ct(x.uponSanitizeElement, g, {
      tagName: H,
      allowedTags: M
    }), Zt && g.hasChildNodes() && !mr(g.firstElementChild) && Ie(/<[/\w!]/g, g.innerHTML) && Ie(/<[/\w!]/g, g.textContent) || Zt && g.namespaceURI === Ge && H === "style" && mr(g.firstElementChild) || g.nodeType === bt.progressingInstruction || Zt && g.nodeType === bt.comment && Ie(/<[/\w]/g, g.data))
      return Ke(g), !0;
    if (Oe[H] || !(Ne.tagCheck instanceof Function && Ne.tagCheck(H)) && !M[H]) {
      if (!Oe[H] && yr(H) && (ie.tagNameCheck instanceof RegExp && Ie(ie.tagNameCheck, H) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(H)))
        return !1;
      if (pr && !qe[H]) {
        const ue = C(g), he = w(g);
        if (he && ue) {
          const ke = he.length;
          for (let $e = ke - 1; $e >= 0; --$e) {
            const Ze = h(he[$e], !0);
            ue.insertBefore(Ze, _(g));
          }
        }
      }
      return Ke(g), !0;
    }
    return (S ? S(g) : g.nodeType) === bt.element && !Ii(g) || (H === "noscript" || H === "noembed" || H === "noframes") && Ie(/<\/no(script|embed|frames)/i, g.innerHTML) ? (Ke(g), !0) : (ht && g.nodeType === bt.text && (N = g.textContent, nr([A, T, R], (ue) => {
      N = _r(N, ue, " ");
    }), g.textContent !== N && (xr(t.removed, {
      element: g.cloneNode()
    }), g.textContent = N)), ct(x.afterSanitizeElements, g, null), !1);
  }, En = function(g, N, H) {
    if (He[N] || gn && (N === "id" || N === "name") && (H in r || H in Oi))
      return !1;
    const le = te[N] || Ne.attributeCheck instanceof Function && Ne.attributeCheck(N, g);
    if (!(Nr && !He[N] && Ie(B, N))) {
      if (!(dn && Ie(q, N))) {
        if (!le || He[N]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(yr(g) && (ie.tagNameCheck instanceof RegExp && Ie(ie.tagNameCheck, g) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(g)) && (ie.attributeNameCheck instanceof RegExp && Ie(ie.attributeNameCheck, N) || ie.attributeNameCheck instanceof Function && ie.attributeNameCheck(N, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            N === "is" && ie.allowCustomizedBuiltInElements && (ie.tagNameCheck instanceof RegExp && Ie(ie.tagNameCheck, H) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(H)))
          ) return !1;
        } else if (!Bt[N]) {
          if (!Ie(U, _r(H, j, ""))) {
            if (!((N === "src" || N === "xlink:href" || N === "href") && g !== "script" && Fs(H, "data:") === 0 && xn[g])) {
              if (!(mn && !Ie($, _r(H, j, "")))) {
                if (H)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, gr = se({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), yr = function(g) {
    return !gr[Hr(g)] && Ie(V, g);
  }, An = function(g) {
    ct(x.beforeSanitizeAttributes, g, null);
    const N = g.attributes;
    if (!N || dr(g))
      return;
    const H = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: te,
      forceKeepAttr: void 0
    };
    let le = N.length;
    for (; le--; ) {
      const ue = N[le], he = ue.name, ke = ue.namespaceURI, $e = ue.value, Ze = _e(he), $r = $e;
      let Ce = he === "value" ? $r : dp($r);
      if (H.attrName = Ze, H.attrValue = Ce, H.keepAttr = !0, H.forceKeepAttr = void 0, ct(x.uponSanitizeAttribute, g, H), Ce = H.attrValue, yn && (Ze === "id" || Ze === "name") && Fs(Ce, Qt) !== 0 && (At(he, g), Ce = Qt + Ce), Zt && Ie(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ce)) {
        At(he, g);
        continue;
      }
      if (Ze === "attributename" && Is(Ce, "href")) {
        At(he, g);
        continue;
      }
      if (H.forceKeepAttr)
        continue;
      if (!H.keepAttr) {
        At(he, g);
        continue;
      }
      if (!bn && Ie(/\/>/i, Ce)) {
        At(he, g);
        continue;
      }
      ht && nr([A, T, R], (Tn) => {
        Ce = _r(Ce, Tn, " ");
      });
      const Sn = _e(g.nodeName);
      if (!En(Sn, Ze, Ce)) {
        At(he, g);
        continue;
      }
      if (k && typeof p == "object" && typeof p.getAttributeType == "function" && !ke)
        switch (p.getAttributeType(Sn, Ze)) {
          case "TrustedHTML": {
            Ce = Y(Ce);
            break;
          }
          case "TrustedScriptURL": {
            Ce = k.createScriptURL(Ce);
            break;
          }
        }
      if (Ce !== $r)
        try {
          ke ? g.setAttributeNS(ke, he, Ce) : g.setAttribute(he, Ce), dr(g) ? Ke(g) : Os(t.removed);
        } catch {
          At(he, g);
        }
    }
    ct(x.afterSanitizeAttributes, g, null);
  }, Tt = function(g) {
    let N = null;
    const H = Cn(g);
    for (ct(x.beforeSanitizeShadowDOM, g, null); N = H.nextNode(); )
      if (ct(x.uponSanitizeShadowNode, N, null), br(N), An(N), Vt(N.content) && Tt(N.content), (S ? S(N) : N.nodeType) === bt.element) {
        const ue = D ? D(N) : N.shadowRoot;
        Vt(ue) && (Dt(ue), Tt(ue));
      }
    ct(x.afterSanitizeShadowDOM, g, null);
  }, Dt = function(g) {
    const N = S ? S(g) : g.nodeType;
    if (N === bt.element) {
      const ue = D ? D(g) : g.shadowRoot;
      Vt(ue) && (Dt(ue), Tt(ue));
    }
    const H = w ? w(g) : g.childNodes;
    if (!H)
      return;
    const le = [];
    nr(H, (ue) => {
      xr(le, ue);
    });
    for (const ue of le)
      Dt(ue);
    if (N === bt.element) {
      const ue = E ? E(g) : null;
      if (typeof ue == "string" && _e(ue) === "template") {
        const he = g.content;
        Vt(he) && Dt(he);
      }
    }
  };
  return t.sanitize = function(Z) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, H = null, le = null, ue = null;
    if (jr = !Z, jr && (Z = "<!-->"), typeof Z != "string" && !mr(Z) && (Z = xp(Z), typeof Z != "string"))
      throw vr("dirty is not a string, aborting");
    if (!t.isSupported)
      return Z;
    if (Yt || mt(g), t.removed = [], typeof Z == "string" && (jt = !1), jt) {
      const $e = E ? E(Z) : Z.nodeName;
      if (typeof $e == "string") {
        const Ze = _e($e);
        if (!M[Ze] || Oe[Ze])
          throw vr("root node is forbidden and cannot be sanitized in-place");
      }
      if (dr(Z))
        throw vr("root node is clobbered and cannot be sanitized in-place");
      Dt(Z);
    } else if (mr(Z))
      N = St("<!---->"), H = N.ownerDocument.importNode(Z, !0), H.nodeType === bt.element && H.nodeName === "BODY" || H.nodeName === "HTML" ? N = H : N.appendChild(H), Dt(H);
    else {
      if (!Re && !ht && !Qe && // eslint-disable-next-line unicorn/prefer-includes
      Z.indexOf("<") === -1)
        return k && Xt ? Y(Z) : Z;
      if (N = St(Z), !N)
        return Re ? null : Xt ? O : "";
    }
    N && Rt && Ke(N.firstChild);
    const he = Cn(jt ? Z : N);
    for (; le = he.nextNode(); )
      br(le), An(le), Vt(le.content) && Tt(le.content);
    if (jt)
      return ht && Vr(Z), Z;
    if (Re) {
      if (ht && Vr(N), Jt)
        for (ue = ne.call(N.ownerDocument); N.firstChild; )
          ue.appendChild(N.firstChild);
      else
        ue = N;
      return (te.shadowroot || te.shadowrootmode) && (ue = y.call(n, ue, !0)), ue;
    }
    let ke = Qe ? N.outerHTML : N.innerHTML;
    return Qe && M["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && Ie(Op, N.ownerDocument.doctype.name) && (ke = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + ke), ht && nr([A, T, R], ($e) => {
      ke = _r(ke, $e, " ");
    }), k && Xt ? Y(ke) : ke;
  }, t.setConfig = function() {
    let Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    mt(Z), Yt = !0;
  }, t.clearConfig = function() {
    Mt = null, Yt = !1;
  }, t.isValidAttribute = function(Z, g, N) {
    Mt || mt({});
    const H = _e(Z), le = _e(g);
    return En(H, le, N);
  }, t.addHook = function(Z, g) {
    typeof g == "function" && xr(x[Z], g);
  }, t.removeHook = function(Z, g) {
    if (g !== void 0) {
      const N = pp(x[Z], g);
      return N === -1 ? void 0 : hp(x[Z], N, 1)[0];
    }
    return Os(x[Z]);
  }, t.removeHooks = function(Z) {
    x[Z] = [];
  }, t.removeAllHooks = function() {
    x = Vs();
  }, t;
}
var Lp = To();
function Do(e) {
  return typeof e != "string" ? e : Lp.sanitize(e, { ADD_ATTR: ["target"] });
}
const Np = function(e) {
  const t = document.createElement("textarea");
  t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
};
function yi(e, t = {}) {
  const { removeEmpty: r = ["span", "div", "i", "em"], collapseWrappers: n = ["span", "div", "i"], removeComments: i = !0, trimWhitespace: u = !0 } = t;
  if (!e || typeof e != "string") return e;
  const s = document.createElement("div");
  if (s.innerHTML = e, i) {
    const c = document.createTreeWalker(s, NodeFilter.SHOW_COMMENT);
    let f;
    for (; f = c.nextNode(); ) f.remove();
  }
  s.querySelectorAll("*").forEach((c) => {
    c.getAttributeNames().filter((f) => /^data-v-/.test(f)).forEach((f) => c.removeAttribute(f));
  });
  const a = n.join(",");
  let o = !0;
  for (; o; )
    o = !1, s.querySelectorAll(a).forEach((c) => {
      c.children.length === 1 && c.textContent.trim() === c.firstChild.textContent.trim() && !Array.from(c.attributes).some((f) => !/^data-v-/.test(f.name)) && (c.parentNode.insertBefore(c.firstChild, c), c.remove(), o = !0);
    });
  return r.length > 0 && s.querySelectorAll(r.join(",")).forEach((c) => {
    c.children.length === 0 && c.textContent.trim() === "" && !Array.from(c.attributes).some((f) => !/^data-v-/.test(f.name)) && c.remove();
  }), s.innerHTML;
}
function Rp(e) {
  return yi(e, { removeEmpty: ["span", "div", "i"], collapseWrappers: ["span", "div", "i"] });
}
const jp = (e) => yi(e, { removeEmpty: ["span", "div"], collapseWrappers: ["span", "div"] }), Bp = (e) => yi(e, { removeEmpty: ["span"], collapseWrappers: ["span"] });
function $n(e, t, r = {}) {
  var o, c, f, p, l, h;
  const { removeEmpty: n = ["span", "div"], collapseWrappers: i = ["span", "div"] } = r;
  if (!e) return null;
  if (e.componentOptions) {
    if ((o = e.children) != null && o.length) {
      const d = e.children.map((_) => $n(_, t, r)).filter(Boolean);
      return d.length === 0 ? null : t(e.componentOptions.Ctor, { ...e.data, props: e.componentOptions.propsData }, d);
    }
    return e;
  }
  if (!e.tag) return (c = e.text) != null && c.trim() ? e.text : null;
  const u = e.tag.toLowerCase(), s = e.data || {};
  if (s.on || s.nativeOn || s.ref || s.directives || s.attrs || s.domProps || s.class || s.style) return a(e);
  if (i.includes(u) && ((f = e.children) == null ? void 0 : f.length) === 1 && !((p = e.text) != null && p.trim())) return $n(e.children[0], t, r);
  if (n.includes(u) && !((l = e.children) != null && l.length) && !((h = e.text) != null && h.trim())) return null;
  return a(e);
  function a(d) {
    var w, C;
    const _ = (d.children || []).map((D) => $n(D, t, r)).filter(Boolean);
    return _.length === 0 && !((w = d.text) != null && w.trim()) ? null : t(d.tag, d.data, ((C = d.text) == null ? void 0 : C.trim()) || _);
  }
}
function Mp({ obj_request: e, encFn: t = null, decFn: r = null, cacheName: n = null }) {
  if (!e || Object.keys(e).length === 0) return null;
  const { data: i, url: u, head: s, method: a = "get", actions: o = [] } = e;
  let c = i;
  t && typeof t == "function" && (c = t(e));
  let f;
  n && localStorage.getItem(`${n}_query`) == c && localStorage.getItem(`${n}_resp`) ? f = Promise.resolve({ body: localStorage.getItem(`${n}_resp`) }) : (f = fetch(u, {
    method: a.toUpperCase(),
    headers: { "Content-Type": "application/json", ...s || {} },
    body: a.toLowerCase() !== "get" ? JSON.stringify({ body: c }) : void 0
  }).then(async (l) => {
    const h = await l.text();
    let d;
    try {
      d = JSON.parse(h);
    } catch {
      d = h;
    }
    return { body: d, status: l.status, ok: l.ok };
  }), n && (localStorage.setItem(`${n}_query`, c), f.then((l) => localStorage.setItem(`${n}_resp`, l.body))));
  for (const l of o)
    f = f.then((h) => {
      const d = r && typeof r == "function" ? r(h, e) : h.body;
      try {
        h.data = JSON.parse(d);
      } catch {
        h.data = d;
      }
      return h;
    }).then(l == null ? void 0 : l[0]).catch((h) => Promise.reject(h)).catch(l == null ? void 0 : l[1]);
  return f;
}
const Vp = (e, t = "en") => {
  const r = ["description", "keywords", "author", "viewport", "robots", "theme-color", "twitter:card", "twitter:site", "twitter:creator", "twitter:title", "twitter:description", "twitter:image"], n = ["og:title", "og:type", "og:url", "og:image", "og:description", "og:site_name", "og:locale"], i = [...r, ...n];
  if (e != null && e.title && (document.title = Ft(e.title, t)), e != null && e.favIcon) {
    let u = Ft(e.favIcon, t), s = document.querySelector('link[rel="icon"]') || document.createElement("link");
    s.rel = "icon", s.href = u, s.parentNode || document.head.appendChild(s);
  }
  Object.entries(e || {}).forEach(([u, s]) => {
    if (u === "title" || u === "favIcon" || !i.includes(u)) return;
    let a = Ft(s, t), o = n.includes(u) ? "property" : "name", c = document.querySelector(`meta[${o}='${u}']`);
    c ? c.content = a : (c = document.createElement("meta"), c.setAttribute(o, u), c.content = a, document.head.appendChild(c));
  });
}, $p = (e = "lg", t = "en") => {
  try {
    const r = document.cookie.match(new RegExp(`(?:^|; )${e}=([^;]*)`));
    if (r) return decodeURIComponent(r[1]);
    const n = navigator.language || navigator.userLanguage;
    if (n) return n.split("-")[0];
  } catch {
  }
  return t;
}, xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aesDec: Eo,
  aesEnc: Co,
  beautifyHtml: K0,
  camelToKebab: U0,
  capitalizeWords: M0,
  cleanMinimal: jp,
  cleanVueHtml: yi,
  cleanVueVNode: $n,
  clone: Ht,
  colorLibelle: Nl,
  copyToClipboard: Np,
  detectLang: $p,
  extractSubObject: Vn,
  flattenArray: Sa,
  fmtJS: ep,
  fmtJS2: tp,
  fmtJS4: rp,
  formatCode: G0,
  formatHtml: gi,
  formatHtml2: Z0,
  formatJS: cn,
  formatJSON: Uu,
  formatToStr: W0,
  generalVal: Mn,
  getObjectDepth: wa,
  indexMapWithSource: Il,
  isDate: yl,
  isEmpty: un,
  isNonEmpty: xl,
  isPlainObject: bu,
  isVnode: ai,
  json2: J0,
  json4: X0,
  logJS: np,
  mapObjectWithSource: Ea,
  mapWithSource: Ol,
  mergeObjects: Ca,
  minsToHours: z0,
  objLang: Ft,
  paragraphsFromText: q0,
  parse: Pl,
  parseTexFile: Ml,
  pretty: Y0,
  prettyJS: Q0,
  project: Aa,
  purifyHtml: Rp,
  queryData: Mp,
  randColLib: Bl,
  randInt: Da,
  randItem: Oa,
  randomColor: Rl,
  randomKey: jl,
  removeEmptySpans: Bp,
  replaceInObject: Vl,
  resolveValuesWithSource: gu,
  safeEval: vo,
  sanitizeHtml: Do,
  setMetaParams: Vp,
  strToComps: ko,
  strToObj: Yr,
  stringify: Fl,
  textToParagraphs: H0,
  titleCase: V0,
  toTitleCase: $0,
  today: Ia,
  todayISO: Fa,
  todayStr: $l,
  transfObj: yu,
  vuetifyColorList: Ta
}, Symbol.toStringTag, { value: "Module" }));
function Oo(e, t, r, n, i, u, s, a) {
  var o = typeof e == "function" ? e.options : e;
  return u && (o._scopeId = "data-v-" + u), {
    exports: e,
    options: o
  };
}
const Wp = {
  name: "WBLink",
  inheritAttrs: !1,
  inject: {
    // Inherit an ancestor's "untrusted" verdict from the WBC/WBHtml subtree.
    // When set, route registration (name__ routes, file-ref routes, __defineRoute,
    // options.route self-registration) is blocked — untrusted content cannot create
    // persistent named vue-router routes. See registerWbcRoute.resolveWbLinkTarget.
    wbcUntrustedInjected: { default: !1 }
  },
  // Re-provide so nested WBLink instances (e.g. links inside rendered html)
  // also inherit the untrusted flag — the verdict cascades through the subtree.
  provide() {
    return { wbcUntrustedInjected: this.wbcUntrustedInjected === !0 };
  },
  props: {
    to: {},
    html: "",
    style_: {},
    attrs_: {},
    inactiveClass: String
  },
  data() {
    return {
      // Resolved vue-router location when `to` points at a route (a `./`/`../`
      // file ref → auto-registered WBC route, an existing named route like
      // "AboutView", a route path like "/about", or a route-definition object).
      // null → render a plain <a> (external URL / in-page anchor / unknown).
      routeLoc: null
    };
  },
  created() {
    this.resolveTarget();
  },
  watch: {
    // Links rarely change target, but stay correct if `to` is reassigned.
    to() {
      this.routeLoc = null, this.resolveTarget();
    }
  },
  methods: {
    // Register-off-render (spec §7): resolve `to` once into a route location or
    // an external link. Any failure (no router, bad def) is swallowed so the
    // link still renders as a plain <a>.
    resolveTarget() {
      var e;
      try {
        const t = this.wbcUntrustedInjected === !0, r = I0(this.$router, this.to, (e = this.$route) == null ? void 0 : e.path, t);
        this.routeLoc = r.kind === "route" ? r.location : null;
      } catch (t) {
        console.error(`#WBLinkRouteError: ${t.message}`), this.routeLoc = null;
      }
    }
  },
  render(e) {
    if (this.routeLoc)
      return e(
        "RouterLink",
        {
          ...this.attrs_,
          props: { to: this.routeLoc },
          style: { "text-decoration": "none", ...this.style_ }
        },
        [this.html]
      );
    const t = typeof this.to == "string" ? this.to.trim() : this.to;
    let r = {
      props: {},
      style: { "text-decoration": "none", ...this.style_ },
      attrs: { href: t, ...this.attrs_ }
    };
    return typeof t == "string" && t[t.length - 1] === ">" && (r.attrs.href = t.slice(0, -1), r.attrs.target = "_blank"), typeof this.html == "object" ? e("a", r, [this == null ? void 0 : this.html]) : !this.to || !this.html ? e("span", r, this == null ? void 0 : this.html) : (r = {
      props: {},
      style: { "text-decoration": "none", ...this.style_ },
      domProps: {
        innerHTML: Do([this == null ? void 0 : this.html].join(""))
      },
      attrs: { href: t, ...this.attrs_ }
    }, e("a", r));
  },
  components: {}
}, zp = null, Up = null;
var Hp = /* @__PURE__ */ Oo(
  Wp,
  zp,
  Up,
  !1,
  null,
  null
);
const _i = Hp.exports;
var Wn = { exports: {} }, zn = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var qp = zn.exports, $s;
function Io() {
  return $s || ($s = 1, (function(e, t) {
    (function(n, i) {
      e.exports = i();
    })(qp, function() {
      return (
        /******/
        (function() {
          var r = {
            /***/
            686: (
              /***/
              (function(u, s, a) {
                a.d(s, {
                  default: function() {
                    return (
                      /* binding */
                      q
                    );
                  }
                });
                var o = a(279), c = /* @__PURE__ */ a.n(o), f = a(370), p = /* @__PURE__ */ a.n(f), l = a(817), h = /* @__PURE__ */ a.n(l);
                function d($) {
                  try {
                    return document.execCommand($);
                  } catch {
                    return !1;
                  }
                }
                var _ = function(j) {
                  var V = h()(j);
                  return d("cut"), V;
                }, w = _;
                function C($) {
                  var j = document.documentElement.getAttribute("dir") === "rtl", V = document.createElement("textarea");
                  V.style.fontSize = "12pt", V.style.border = "0", V.style.padding = "0", V.style.margin = "0", V.style.position = "absolute", V.style[j ? "right" : "left"] = "-9999px";
                  var U = window.pageYOffset || document.documentElement.scrollTop;
                  return V.style.top = "".concat(U, "px"), V.setAttribute("readonly", ""), V.value = $, V;
                }
                var D = function(j, V) {
                  var U = C(j);
                  V.container.appendChild(U);
                  var M = h()(U);
                  return d("copy"), U.remove(), M;
                }, F = function(j) {
                  var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    container: document.body
                  }, U = "";
                  return typeof j == "string" ? U = D(j, V) : j instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(j == null ? void 0 : j.type) ? U = D(j.value, V) : (U = h()(j), d("copy")), U;
                }, S = F;
                function E($) {
                  "@babel/helpers - typeof";
                  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? E = function(V) {
                    return typeof V;
                  } : E = function(V) {
                    return V && typeof Symbol == "function" && V.constructor === Symbol && V !== Symbol.prototype ? "symbol" : typeof V;
                  }, E($);
                }
                var k = function() {
                  var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, V = j.action, U = V === void 0 ? "copy" : V, M = j.container, X = j.target, te = j.text;
                  if (U !== "copy" && U !== "cut")
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                  if (X !== void 0)
                    if (X && E(X) === "object" && X.nodeType === 1) {
                      if (U === "copy" && X.hasAttribute("disabled"))
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                      if (U === "cut" && (X.hasAttribute("readonly") || X.hasAttribute("disabled")))
                        throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                    } else
                      throw new Error('Invalid "target" value, use a valid Element');
                  if (te)
                    return S(te, {
                      container: M
                    });
                  if (X)
                    return U === "cut" ? w(X) : S(X, {
                      container: M
                    });
                }, O = k;
                function L($) {
                  "@babel/helpers - typeof";
                  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? L = function(V) {
                    return typeof V;
                  } : L = function(V) {
                    return V && typeof Symbol == "function" && V.constructor === Symbol && V !== Symbol.prototype ? "symbol" : typeof V;
                  }, L($);
                }
                function Y($, j) {
                  if (!($ instanceof j))
                    throw new TypeError("Cannot call a class as a function");
                }
                function Q($, j) {
                  for (var V = 0; V < j.length; V++) {
                    var U = j[V];
                    U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty($, U.key, U);
                  }
                }
                function W($, j, V) {
                  return j && Q($.prototype, j), V && Q($, V), $;
                }
                function ee($, j) {
                  if (typeof j != "function" && j !== null)
                    throw new TypeError("Super expression must either be null or a function");
                  $.prototype = Object.create(j && j.prototype, { constructor: { value: $, writable: !0, configurable: !0 } }), j && ne($, j);
                }
                function ne($, j) {
                  return ne = Object.setPrototypeOf || function(U, M) {
                    return U.__proto__ = M, U;
                  }, ne($, j);
                }
                function P($) {
                  var j = A();
                  return function() {
                    var U = T($), M;
                    if (j) {
                      var X = T(this).constructor;
                      M = Reflect.construct(U, arguments, X);
                    } else
                      M = U.apply(this, arguments);
                    return y(this, M);
                  };
                }
                function y($, j) {
                  return j && (L(j) === "object" || typeof j == "function") ? j : x($);
                }
                function x($) {
                  if ($ === void 0)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return $;
                }
                function A() {
                  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                    })), !0;
                  } catch {
                    return !1;
                  }
                }
                function T($) {
                  return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(V) {
                    return V.__proto__ || Object.getPrototypeOf(V);
                  }, T($);
                }
                function R($, j) {
                  var V = "data-clipboard-".concat($);
                  if (j.hasAttribute(V))
                    return j.getAttribute(V);
                }
                var B = /* @__PURE__ */ (function($) {
                  ee(V, $);
                  var j = P(V);
                  function V(U, M) {
                    var X;
                    return Y(this, V), X = j.call(this), X.resolveOptions(M), X.listenClick(U), X;
                  }
                  return W(V, [{
                    key: "resolveOptions",
                    value: function() {
                      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                      this.action = typeof M.action == "function" ? M.action : this.defaultAction, this.target = typeof M.target == "function" ? M.target : this.defaultTarget, this.text = typeof M.text == "function" ? M.text : this.defaultText, this.container = L(M.container) === "object" ? M.container : document.body;
                    }
                    /**
                     * Adds a click event listener to the passed trigger.
                     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                     */
                  }, {
                    key: "listenClick",
                    value: function(M) {
                      var X = this;
                      this.listener = p()(M, "click", function(te) {
                        return X.onClick(te);
                      });
                    }
                    /**
                     * Defines a new `ClipboardAction` on each click event.
                     * @param {Event} e
                     */
                  }, {
                    key: "onClick",
                    value: function(M) {
                      var X = M.delegateTarget || M.currentTarget, te = this.action(X) || "copy", Ae = O({
                        action: te,
                        container: this.container,
                        target: this.target(X),
                        text: this.text(X)
                      });
                      this.emit(Ae ? "success" : "error", {
                        action: te,
                        text: Ae,
                        trigger: X,
                        clearSelection: function() {
                          X && X.focus(), window.getSelection().removeAllRanges();
                        }
                      });
                    }
                    /**
                     * Default `action` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultAction",
                    value: function(M) {
                      return R("action", M);
                    }
                    /**
                     * Default `target` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultTarget",
                    value: function(M) {
                      var X = R("target", M);
                      if (X)
                        return document.querySelector(X);
                    }
                    /**
                     * Allow fire programmatically a copy action
                     * @param {String|HTMLElement} target
                     * @param {Object} options
                     * @returns Text copied.
                     */
                  }, {
                    key: "defaultText",
                    /**
                     * Default `text` lookup function.
                     * @param {Element} trigger
                     */
                    value: function(M) {
                      return R("text", M);
                    }
                    /**
                     * Destroy lifecycle.
                     */
                  }, {
                    key: "destroy",
                    value: function() {
                      this.listener.destroy();
                    }
                  }], [{
                    key: "copy",
                    value: function(M) {
                      var X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                        container: document.body
                      };
                      return S(M, X);
                    }
                    /**
                     * Allow fire programmatically a cut action
                     * @param {String|HTMLElement} target
                     * @returns Text cutted.
                     */
                  }, {
                    key: "cut",
                    value: function(M) {
                      return w(M);
                    }
                    /**
                     * Returns the support of the given action, or all actions if no action is
                     * given.
                     * @param {String} [action]
                     */
                  }, {
                    key: "isSupported",
                    value: function() {
                      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], X = typeof M == "string" ? [M] : M, te = !!document.queryCommandSupported;
                      return X.forEach(function(Ae) {
                        te = te && !!document.queryCommandSupported(Ae);
                      }), te;
                    }
                  }]), V;
                })(c()), q = B;
              })
            ),
            /***/
            828: (
              /***/
              (function(u) {
                var s = 9;
                if (typeof Element < "u" && !Element.prototype.matches) {
                  var a = Element.prototype;
                  a.matches = a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector;
                }
                function o(c, f) {
                  for (; c && c.nodeType !== s; ) {
                    if (typeof c.matches == "function" && c.matches(f))
                      return c;
                    c = c.parentNode;
                  }
                }
                u.exports = o;
              })
            ),
            /***/
            438: (
              /***/
              (function(u, s, a) {
                var o = a(828);
                function c(l, h, d, _, w) {
                  var C = p.apply(this, arguments);
                  return l.addEventListener(d, C, w), {
                    destroy: function() {
                      l.removeEventListener(d, C, w);
                    }
                  };
                }
                function f(l, h, d, _, w) {
                  return typeof l.addEventListener == "function" ? c.apply(null, arguments) : typeof d == "function" ? c.bind(null, document).apply(null, arguments) : (typeof l == "string" && (l = document.querySelectorAll(l)), Array.prototype.map.call(l, function(C) {
                    return c(C, h, d, _, w);
                  }));
                }
                function p(l, h, d, _) {
                  return function(w) {
                    w.delegateTarget = o(w.target, h), w.delegateTarget && _.call(l, w);
                  };
                }
                u.exports = f;
              })
            ),
            /***/
            879: (
              /***/
              (function(u, s) {
                s.node = function(a) {
                  return a !== void 0 && a instanceof HTMLElement && a.nodeType === 1;
                }, s.nodeList = function(a) {
                  var o = Object.prototype.toString.call(a);
                  return a !== void 0 && (o === "[object NodeList]" || o === "[object HTMLCollection]") && "length" in a && (a.length === 0 || s.node(a[0]));
                }, s.string = function(a) {
                  return typeof a == "string" || a instanceof String;
                }, s.fn = function(a) {
                  var o = Object.prototype.toString.call(a);
                  return o === "[object Function]";
                };
              })
            ),
            /***/
            370: (
              /***/
              (function(u, s, a) {
                var o = a(879), c = a(438);
                function f(d, _, w) {
                  if (!d && !_ && !w)
                    throw new Error("Missing required arguments");
                  if (!o.string(_))
                    throw new TypeError("Second argument must be a String");
                  if (!o.fn(w))
                    throw new TypeError("Third argument must be a Function");
                  if (o.node(d))
                    return p(d, _, w);
                  if (o.nodeList(d))
                    return l(d, _, w);
                  if (o.string(d))
                    return h(d, _, w);
                  throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                }
                function p(d, _, w) {
                  return d.addEventListener(_, w), {
                    destroy: function() {
                      d.removeEventListener(_, w);
                    }
                  };
                }
                function l(d, _, w) {
                  return Array.prototype.forEach.call(d, function(C) {
                    C.addEventListener(_, w);
                  }), {
                    destroy: function() {
                      Array.prototype.forEach.call(d, function(C) {
                        C.removeEventListener(_, w);
                      });
                    }
                  };
                }
                function h(d, _, w) {
                  return c(document.body, d, _, w);
                }
                u.exports = f;
              })
            ),
            /***/
            817: (
              /***/
              (function(u) {
                function s(a) {
                  var o;
                  if (a.nodeName === "SELECT")
                    a.focus(), o = a.value;
                  else if (a.nodeName === "INPUT" || a.nodeName === "TEXTAREA") {
                    var c = a.hasAttribute("readonly");
                    c || a.setAttribute("readonly", ""), a.select(), a.setSelectionRange(0, a.value.length), c || a.removeAttribute("readonly"), o = a.value;
                  } else {
                    a.hasAttribute("contenteditable") && a.focus();
                    var f = window.getSelection(), p = document.createRange();
                    p.selectNodeContents(a), f.removeAllRanges(), f.addRange(p), o = f.toString();
                  }
                  return o;
                }
                u.exports = s;
              })
            ),
            /***/
            279: (
              /***/
              (function(u) {
                function s() {
                }
                s.prototype = {
                  on: function(a, o, c) {
                    var f = this.e || (this.e = {});
                    return (f[a] || (f[a] = [])).push({
                      fn: o,
                      ctx: c
                    }), this;
                  },
                  once: function(a, o, c) {
                    var f = this;
                    function p() {
                      f.off(a, p), o.apply(c, arguments);
                    }
                    return p._ = o, this.on(a, p, c);
                  },
                  emit: function(a) {
                    var o = [].slice.call(arguments, 1), c = ((this.e || (this.e = {}))[a] || []).slice(), f = 0, p = c.length;
                    for (f; f < p; f++)
                      c[f].fn.apply(c[f].ctx, o);
                    return this;
                  },
                  off: function(a, o) {
                    var c = this.e || (this.e = {}), f = c[a], p = [];
                    if (f && o)
                      for (var l = 0, h = f.length; l < h; l++)
                        f[l].fn !== o && f[l].fn._ !== o && p.push(f[l]);
                    return p.length ? c[a] = p : delete c[a], this;
                  }
                }, u.exports = s, u.exports.TinyEmitter = s;
              })
            )
            /******/
          }, n = {};
          function i(u) {
            if (n[u])
              return n[u].exports;
            var s = n[u] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return r[u](s, s.exports, i), s.exports;
          }
          return (function() {
            i.n = function(u) {
              var s = u && u.__esModule ? (
                /******/
                function() {
                  return u.default;
                }
              ) : (
                /******/
                function() {
                  return u;
                }
              );
              return i.d(s, { a: s }), s;
            };
          })(), (function() {
            i.d = function(u, s) {
              for (var a in s)
                i.o(s, a) && !i.o(u, a) && Object.defineProperty(u, a, { enumerable: !0, get: s[a] });
            };
          })(), (function() {
            i.o = function(u, s) {
              return Object.prototype.hasOwnProperty.call(u, s);
            };
          })(), i(686);
        })().default
      );
    });
  })(zn)), zn.exports;
}
var Gp = Wn.exports, Ws;
function Kp() {
  return Ws || (Ws = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n(Hn, Io());
    })(Gp, function(r, n) {
      return s = {}, i.m = u = [function(a, o, c) {
        function f(p, l, h, d, _, w, C, D) {
          var F, S, E = typeof p == "function" ? p.options : p;
          return l && (E.render = l, E.staticRenderFns = h, E._compiled = !0), d && (E.functional = !0), w && (E._scopeId = "data-v-" + w), C ? (F = function(k) {
            (k = k || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ > "u" || (k = __VUE_SSR_CONTEXT__), _ && _.call(this, k), k && k._registeredComponents && k._registeredComponents.add(C);
          }, E._ssrRegister = F) : _ && (F = D ? function() {
            _.call(this, (E.functional ? this.parent : this).$root.$options.shadowRoot);
          } : _), F && (E.functional ? (E._injectStyles = F, S = E.render, E.render = function(k, O) {
            return F.call(O), S(k, O);
          }) : (D = E.beforeCreate, E.beforeCreate = D ? [].concat(D, F) : [F])), { exports: p, options: E };
        }
        c.d(o, "a", function() {
          return f;
        });
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(2), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(a, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), h(c(29));
        var f = h(c(21)), p = h(c(41)), l = c(42);
        function h(d) {
          return d && d.__esModule ? d : { default: d };
        }
        o.default = { name: "JsonViewer", components: { JsonBox: f.default }, props: { value: { type: [Object, Array, String, Number, Boolean, Function], required: !0 }, expanded: { type: Boolean, default: !1 }, expandDepth: { type: Number, default: 1 }, copyable: { type: [Boolean, Object], default: !1 }, sort: { type: Boolean, default: !1 }, boxed: { type: Boolean, default: !1 }, theme: { type: String, default: "jv-light" }, timeformat: { type: Function, default: function(d) {
          return d.toLocaleString();
        } }, previewMode: { type: Boolean, default: !1 }, showArrayIndex: { type: Boolean, default: !0 }, showDoubleQuotes: { type: Boolean, default: !1 } }, provide: function() {
          return { expandDepth: this.expandDepth, timeformat: this.timeformat, onKeyclick: this.onKeyclick };
        }, data: function() {
          return { copied: !1, expandableCode: !1, expandCode: this.expanded };
        }, computed: { jvClass: function() {
          return "jv-container " + this.theme + (this.boxed ? " boxed" : "");
        }, copyText: function() {
          var d = this.copyable;
          return { copyText: d.copyText || "copy", copiedText: d.copiedText || "copied!", timeout: d.timeout || 2e3, align: d.align };
        } }, watch: { value: function() {
          this.onResized();
        } }, mounted: function() {
          var d = this;
          this.debounceResized = (0, l.debounce)(this.debResized.bind(this), 200), this.boxed && this.$refs.jsonBox && (this.onResized(), this.$refs.jsonBox.$el.addEventListener("resized", this.onResized, !0)), this.copyable && new p.default(this.$refs.clip, { container: this.$refs.viewer, text: function() {
            return JSON.stringify(d.value, null, 2);
          } }).on("success", function(_) {
            d.onCopied(_);
          });
        }, methods: { onResized: function() {
          this.debounceResized();
        }, debResized: function() {
          var d = this;
          this.$nextTick(function() {
            d.$refs.jsonBox && (250 <= d.$refs.jsonBox.$el.clientHeight ? d.expandableCode = !0 : d.expandableCode = !1);
          });
        }, onCopied: function(d) {
          var _ = this;
          this.copied || (this.copied = !0, setTimeout(function() {
            _.copied = !1;
          }, this.copyText.timeout), this.$emit("copied", d));
        }, toggleExpandCode: function() {
          this.expandCode = !this.expandCode;
        }, onKeyclick: function(d) {
          this.$emit("keyclick", d);
        } } };
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(4), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(a, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
          return typeof S;
        } : function(S) {
          return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
        }, p = F(c(30)), l = F(c(31)), h = F(c(32)), d = F(c(33)), _ = F(c(34)), w = F(c(35)), C = F(c(36)), D = F(c(37));
        function F(S) {
          return S && S.__esModule ? S : { default: S };
        }
        o.default = { name: "JsonBox", inject: ["expandDepth", "onKeyclick"], props: { value: { type: [Object, Array, String, Number, Boolean, Function, Date], default: null }, keyName: { type: String, default: "" }, sort: Boolean, depth: { type: Number, default: 0 }, previewMode: Boolean, forceExpand: Boolean, showArrayIndex: Boolean, showDoubleQuotes: Boolean, path: { type: String, default: "$" } }, data: function() {
          return { expand: !0, forceExpandMe: this.forceExpand };
        }, mounted: function() {
          this.expand = this.previewMode || !(this.depth >= this.expandDepth) || this.forceExpandMe;
        }, methods: { toggle: function() {
          this.expand = !this.expand, this.dispatchEvent();
        }, toggleAll: function() {
          this.expand = !this.expand, this.forceExpandMe = this.expand, this.dispatchEvent();
        }, dispatchEvent: function() {
          try {
            this.$el.dispatchEvent(new Event("resized"));
          } catch {
            var S = document.createEvent("Event");
            S.initEvent("resized", !0, !1), this.$el.dispatchEvent(S);
          }
        }, getPath: function() {
          for (var S = [this.keyName], E = this.$parent; E.depth; ) E.$el.classList.contains("jv-node") && S.push(E.keyName), E = E.$parent;
          return S.reverse();
        } }, render: function(S) {
          var E = this, k = [], O = void 0;
          this.value === null || this.value === void 0 ? O = l.default : Array.isArray(this.value) ? O = w.default : Object.prototype.toString.call(this.value) === "[object Date]" ? O = D.default : f(this.value) === "object" ? O = _.default : typeof this.value == "number" ? O = h.default : typeof this.value == "string" ? O = p.default : typeof this.value == "boolean" ? O = d.default : typeof this.value == "function" && (O = C.default);
          var L = this.keyName && this.value && (Array.isArray(this.value) || f(this.value) === "object" && Object.prototype.toString.call(this.value) !== "[object Date]");
          return !this.previewMode && L && k.push(S("span", { class: { "jv-toggle": !0, open: !!this.expand }, on: { click: function(Y) {
            Y.altKey ? E.toggleAll() : E.toggle();
          } } })), this.keyName && k.push(S("span", { class: { "jv-key": !0 }, domProps: { innerText: this.showDoubleQuotes ? '"' + this.keyName + '":' : this.keyName + ":" }, on: { click: function() {
            E.onKeyclick(E.path);
          } } })), k.push(S(O, { class: { "jv-push": !0 }, props: { jsonValue: this.value, keyName: this.keyName, sort: this.sort, depth: this.depth, expand: this.expand, previewMode: this.previewMode, forceExpand: this.forceExpandMe, showArrayIndex: this.showArrayIndex, showDoubleQuotes: this.showDoubleQuotes, path: this.path }, on: { "update:expand": function(Y) {
            E.expand = Y;
          }, "update:expandAll": function(Y) {
            E.expand = Y, E.forceExpandMe = E.expand;
          } } })), S("div", { class: { "jv-node": !0, "jv-key-node": !!this.keyName && !L, toggle: !this.previewMode && L } }, k);
        } };
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(6), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(a, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var f = /^\w+:\/\//;
        o.default = { name: "JsonString", props: { jsonValue: { type: String, required: !0 } }, data: function() {
          return { expand: !0, canExtend: !1 };
        }, mounted: function() {
          this.$refs.itemRef.offsetHeight > this.$refs.holderRef.offsetHeight && (this.canExtend = !0);
        }, methods: { toggle: function() {
          this.expand = !this.expand;
        } }, render: function(p) {
          var l = this.jsonValue, h = f.test(l), d = void 0;
          return this.expand ? (d = { class: { "jv-item": !0, "jv-string": !0 }, ref: "itemRef" }).domProps = h ? { innerHTML: '"' + (l = '<a href="' + l + '" target="_blank" class="jv-link">' + l + "</a>").toString() + '"' } : { innerText: '"' + l.toString() + '"' } : d = { class: { "jv-ellipsis": !0 }, on: { click: this.toggle }, domProps: { innerText: "..." } }, p("span", {}, [this.canExtend && p("span", { class: { "jv-toggle": !0, open: this.expand }, on: { click: this.toggle } }), p("span", { class: { "jv-holder-node": !0 }, ref: "holderRef" }), p("span", d)]);
        } };
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(8), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(a, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), o.default = { name: "JsonUndefined", functional: !0, props: { jsonValue: { type: Object, default: null } }, render: function(f, p) {
          return f("span", { class: { "jv-item": !0, "jv-undefined": !0 }, domProps: { innerText: p.props.jsonValue === null ? "null" : "undefined" } });
        } };
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(10), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(a, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), o.default = { name: "JsonNumber", functional: !0, props: { jsonValue: { type: Number, required: !0 } }, render: function(f, h) {
          var l = h.props, h = Number.isInteger(l.jsonValue);
          return f("span", { class: { "jv-item": !0, "jv-number": !0, "jv-number-integer": h, "jv-number-float": !h }, domProps: { innerText: l.jsonValue.toString() } });
        } };
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(12), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(a, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), o.default = { name: "JsonBoolean", functional: !0, props: { jsonValue: Boolean }, render: function(f, p) {
          return f("span", { class: { "jv-item": !0, "jv-boolean": !0 }, domProps: { innerText: p.props.jsonValue.toString() } });
        } };
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(14), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(a, o, f) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var f = f(21), p = (f = f) && f.__esModule ? f : { default: f };
        o.default = { name: "JsonObject", props: { jsonValue: { type: Object, required: !0 }, keyName: { type: String, default: "" }, depth: { type: Number, default: 0 }, expand: Boolean, forceExpand: Boolean, sort: Boolean, previewMode: Boolean, showArrayIndex: Boolean, showDoubleQuotes: Boolean, path: String }, data: function() {
          return { value: {} };
        }, computed: { ordered: function() {
          var l = this;
          if (!this.sort) return this.value;
          var h = {};
          return Object.keys(this.value).sort().forEach(function(d) {
            h[d] = l.value[d];
          }), h;
        } }, watch: { jsonValue: function(l) {
          this.setValue(l);
        } }, mounted: function() {
          this.setValue(this.jsonValue);
        }, methods: { setValue: function(l) {
          var h = this;
          setTimeout(function() {
            h.value = l;
          }, 0);
        }, toggle: function() {
          this.$emit("update:expand", !this.expand), this.dispatchEvent();
        }, toggleAll: function() {
          this.$emit("update:expandAll", !this.expand), this.dispatchEvent();
        }, dispatchEvent: function() {
          try {
            this.$el.dispatchEvent(new Event("resized"));
          } catch {
            var l = document.createEvent("Event");
            l.initEvent("resized", !0, !1), this.$el.dispatchEvent(l);
          }
        } }, render: function(l) {
          var h, d = this, _ = [];
          if (this.previewMode || this.keyName || _.push(l("span", { class: { "jv-toggle": !0, open: !!this.expand }, on: { click: function(C) {
            C.altKey ? d.toggleAll() : d.toggle();
          } } })), _.push(l("span", { class: { "jv-item": !0, "jv-object": !0 }, domProps: { innerText: "{" } })), this.expand) for (var w in this.ordered) this.ordered.hasOwnProperty(w) && (h = this.ordered[w], _.push(l(p.default, { key: w, props: { sort: this.sort, keyName: w, depth: this.depth + 1, value: h, previewMode: this.previewMode, forceExpand: this.forceExpand, showArrayIndex: this.showArrayIndex, showDoubleQuotes: this.showDoubleQuotes, path: this.path + "." + w } })));
          return !this.expand && Object.keys(this.value).length && _.push(l("span", { class: { "jv-ellipsis": !0 }, on: { click: function(C) {
            C.altKey ? d.toggleAll() : d.toggle();
          } }, attrs: { title: "click to reveal object content (keys: " + Object.keys(this.ordered).join(", ") + ")" }, domProps: { innerText: "..." } })), _.push(l("span", { class: { "jv-item": !0, "jv-object": !0 }, domProps: { innerText: "}" } })), l("span", _);
        } };
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(16), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(a, o, f) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var f = f(21), p = (f = f) && f.__esModule ? f : { default: f };
        o.default = { name: "JsonArray", props: { jsonValue: { type: Array, required: !0 }, keyName: { type: String, default: "" }, depth: { type: Number, default: 0 }, sort: Boolean, expand: Boolean, forceExpand: Boolean, previewMode: Boolean, showArrayIndex: Boolean, showDoubleQuotes: Boolean, path: String }, data: function() {
          return { value: [] };
        }, watch: { jsonValue: function(l) {
          this.setValue(l);
        } }, mounted: function() {
          this.setValue(this.jsonValue);
        }, methods: { setValue: function(l) {
          var h = this, d = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 0;
          d === 0 && (this.value = []), setTimeout(function() {
            l.length > d && (h.value.push(l[d]), h.setValue(l, d + 1));
          }, 0);
        }, toggle: function() {
          this.$emit("update:expand", !this.expand), this.dispatchEvent();
        }, toggleAll: function() {
          this.$emit("update:expandAll", !this.expand), this.dispatchEvent();
        }, dispatchEvent: function() {
          try {
            this.$el.dispatchEvent(new Event("resized"));
          } catch {
            var l = document.createEvent("Event");
            l.initEvent("resized", !0, !1), this.$el.dispatchEvent(l);
          }
        } }, render: function(l) {
          var h = this, d = [];
          return this.previewMode || this.keyName || d.push(l("span", { class: { "jv-toggle": !0, open: !!this.expand }, on: { click: function(_) {
            _.altKey ? h.toggleAll() : h.toggle();
          } } })), d.push(l("span", { class: { "jv-item": !0, "jv-array": !0 }, domProps: { innerText: "[" } })), this.expand && this.value.forEach(function(_, w) {
            d.push(l(p.default, { key: w, props: { sort: h.sort, keyName: h.showArrayIndex ? "" + w : "", depth: h.depth + 1, value: _, previewMode: h.previewMode, forceExpand: h.forceExpand, showArrayIndex: h.showArrayIndex, showDoubleQuotes: h.showDoubleQuotes, path: h.path + "." + w } }));
          }), !this.expand && this.value.length && d.push(l("span", { class: { "jv-ellipsis": !0 }, on: { click: function(_) {
            _.altKey ? h.toggleAll() : h.toggle();
          } }, attrs: { title: "click to reveal " + this.value.length + " hidden items" }, domProps: { innerText: "..." } })), d.push(l("span", { class: { "jv-item": !0, "jv-array": !0 }, domProps: { innerText: "]" } })), l("span", d);
        } };
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(18), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(a, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), o.default = { name: "JsonFunction", functional: !0, props: { jsonValue: { type: Function, required: !0 } }, render: function(f, p) {
          return f("span", { class: { "jv-item": !0, "jv-function": !0 }, attrs: { title: p.props.jsonValue.toString() }, domProps: { innerHTML: "&lt;function&gt;" } });
        } };
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(20), l = c.n(p);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        o.default = l.a;
      }, function(a, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), o.default = { name: "JsonDate", inject: ["timeformat"], functional: !0, props: { jsonValue: { type: Date, required: !0 } }, render: function(f, l) {
          var h = l.props, l = l.injections, h = h.jsonValue;
          return f("span", { class: { "jv-item": !0, "jv-string": !0 }, domProps: { innerText: '"' + (0, l.timeformat)(h) + '"' } });
        } };
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(3);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        c(38);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/json-box.vue", o.default = l.exports;
      }, function(a, o, c) {
        function f() {
          var l = this, h = l.$createElement;
          return (h = l._self._c || h)("div", { ref: "viewer", class: l.jvClass }, [l.copyable ? h("div", { class: "jv-tooltip " + (l.copyText.align || "right") }, [h("span", { ref: "clip", staticClass: "jv-button", class: { copied: l.copied } }, [l._t("copy", function() {
            return [l._v(`
        ` + l._s(l.copied ? l.copyText.copiedText : l.copyText.copyText) + `
      `)];
          }, { copied: l.copied })], 2)]) : l._e(), l._v(" "), h("div", { staticClass: "jv-code", class: { open: l.expandCode, boxed: l.boxed } }, [h("json-box", { ref: "jsonBox", attrs: { value: l.value, sort: l.sort, "preview-mode": l.previewMode, "show-array-index": l.showArrayIndex, "show-double-quotes": l.showDoubleQuotes }, on: { keyclick: l.onKeyclick } })], 1), l._v(" "), l.expandableCode && l.boxed ? h("div", { staticClass: "jv-more", on: { click: l.toggleExpandCode } }, [h("span", { staticClass: "jv-toggle", class: { open: !!l.expandCode } })]) : l._e()]);
        }
        var p = [];
        f._withStripped = !0, c.d(o, "a", function() {
          return f;
        }), c.d(o, "b", function() {
          return p;
        });
      }, function(a, o, c) {
        var f = c(39);
        typeof f == "string" && (f = [[a.i, f, ""]]);
        var p = { hmr: !0, transform: void 0 };
        c(25)(f, p), f.locals && (a.exports = f.locals);
      }, function(a, o, c) {
        a.exports = function(f) {
          var p = [];
          return p.toString = function() {
            return this.map(function(l) {
              var h = (function(d, _) {
                var w = d[1] || "", C = d[3];
                return C ? _ && typeof btoa == "function" ? (d = (function(D) {
                  return D = btoa(unescape(encodeURIComponent(JSON.stringify(D)))), D = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(D), "/*# ".concat(D, " */");
                })(C), _ = C.sources.map(function(D) {
                  return "/*# sourceURL=".concat(C.sourceRoot || "").concat(D, " */");
                }), [w].concat(_).concat([d]).join(`
`)) : [w].join(`
`) : w;
              })(l, f);
              return l[2] ? "@media ".concat(l[2], " {").concat(h, "}") : h;
            }).join("");
          }, p.i = function(l, h, d) {
            typeof l == "string" && (l = [[null, l, ""]]);
            var _ = {};
            if (d) for (var w = 0; w < this.length; w++) {
              var C = this[w][0];
              C != null && (_[C] = !0);
            }
            for (var D = 0; D < l.length; D++) {
              var F = [].concat(l[D]);
              d && _[F[0]] || (h && (F[2] ? F[2] = "".concat(h, " and ").concat(F[2]) : F[2] = h), p.push(F));
            }
          }, p;
        };
      }, function(a, o, c) {
        var f, p, l, h = {}, d = (f = function() {
          return window && document && document.all && !window.atob;
        }, function() {
          return p = p === void 0 ? f.apply(this, arguments) : p;
        }), _ = (l = {}, function(P) {
          if (l[P] === void 0) {
            var y = (function(x) {
              return document.querySelector(x);
            }).call(this, P);
            if (y instanceof window.HTMLIFrameElement) try {
              y = y.contentDocument.head;
            } catch {
              y = null;
            }
            l[P] = y;
          }
          return l[P];
        }), w = null, C = 0, D = [], F = c(40);
        function S(P, y) {
          for (var x = 0; x < P.length; x++) {
            var A = P[x], T = h[A.id];
            if (T) {
              T.refs++;
              for (var R = 0; R < T.parts.length; R++) T.parts[R](A.parts[R]);
              for (; R < A.parts.length; R++) T.parts.push(Q(A.parts[R], y));
            } else {
              for (var B = [], R = 0; R < A.parts.length; R++) B.push(Q(A.parts[R], y));
              h[A.id] = { id: A.id, refs: 1, parts: B };
            }
          }
        }
        function E(P, y) {
          for (var x = [], A = {}, T = 0; T < P.length; T++) {
            var B = P[T], R = y.base ? B[0] + y.base : B[0], B = { css: B[1], media: B[2], sourceMap: B[3] };
            A[R] ? A[R].parts.push(B) : x.push(A[R] = { id: R, parts: [B] });
          }
          return x;
        }
        function k(P, y) {
          var x = _(P.insertInto);
          if (!x) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var A = D[D.length - 1];
          if (P.insertAt === "top") A ? A.nextSibling ? x.insertBefore(y, A.nextSibling) : x.appendChild(y) : x.insertBefore(y, x.firstChild), D.push(y);
          else if (P.insertAt === "bottom") x.appendChild(y);
          else {
            if (typeof P.insertAt != "object" || !P.insertAt.before) throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
            P = _(P.insertInto + " " + P.insertAt.before), x.insertBefore(y, P);
          }
        }
        function O(P) {
          P.parentNode !== null && (P.parentNode.removeChild(P), 0 <= (P = D.indexOf(P)) && D.splice(P, 1));
        }
        function L(P) {
          var y = document.createElement("style");
          return P.attrs.type = "text/css", Y(y, P.attrs), k(P, y), y;
        }
        function Y(P, y) {
          Object.keys(y).forEach(function(x) {
            P.setAttribute(x, y[x]);
          });
        }
        function Q(P, y) {
          var x, A, T, R, B;
          if (y.transform && P.css) {
            if (!(R = y.transform(P.css))) return function() {
            };
            P.css = R;
          }
          return T = y.singleton ? (B = C++, x = w = w || L(y), A = ne.bind(null, x, B, !1), ne.bind(null, x, B, !0)) : P.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (R = y, B = document.createElement("link"), R.attrs.type = "text/css", R.attrs.rel = "stylesheet", Y(B, R.attrs), k(R, B), x = B, A = (function(q, $, M) {
            var V = M.css, U = M.sourceMap, M = $.convertToAbsoluteUrls === void 0 && U;
            ($.convertToAbsoluteUrls || M) && (V = F(V)), U && (V += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(U)))) + " */"), U = new Blob([V], { type: "text/css" }), V = q.href, q.href = URL.createObjectURL(U), V && URL.revokeObjectURL(V);
          }).bind(null, x, y), function() {
            O(x), x.href && URL.revokeObjectURL(x.href);
          }) : (x = L(y), A = (function(q, V) {
            var j = V.css, V = V.media;
            if (V && q.setAttribute("media", V), q.styleSheet) q.styleSheet.cssText = j;
            else {
              for (; q.firstChild; ) q.removeChild(q.firstChild);
              q.appendChild(document.createTextNode(j));
            }
          }).bind(null, x), function() {
            O(x);
          }), A(P), function(q) {
            q ? q.css === P.css && q.media === P.media && q.sourceMap === P.sourceMap || A(P = q) : T();
          };
        }
        a.exports = function(P, y) {
          if (typeof DEBUG < "u" && DEBUG && typeof document != "object") throw new Error("The style-loader cannot be used in a non-browser environment");
          (y = y || {}).attrs = typeof y.attrs == "object" ? y.attrs : {}, y.singleton || typeof y.singleton == "boolean" || (y.singleton = d()), y.insertInto || (y.insertInto = "head"), y.insertAt || (y.insertAt = "bottom");
          var x = E(P, y);
          return S(x, y), function(A) {
            for (var T = [], R = 0; R < x.length; R++) {
              var B = x[R];
              (q = h[B.id]).refs--, T.push(q);
            }
            A && S(E(A, y), y);
            for (var q, R = 0; R < T.length; R++) if ((q = T[R]).refs === 0) {
              for (var $ = 0; $ < q.parts.length; $++) q.parts[$]();
              delete h[q.id];
            }
          };
        };
        var W, ee = (W = [], function(P, y) {
          return W[P] = y, W.filter(Boolean).join(`
`);
        });
        function ne(P, y, T, A) {
          var T = T ? "" : A.css;
          P.styleSheet ? P.styleSheet.cssText = ee(y, T) : (A = document.createTextNode(T), (T = P.childNodes)[y] && P.removeChild(T[y]), T.length ? P.insertBefore(A, T[y]) : P.appendChild(A));
        }
      }, function(a, o, c) {
        var f = c(44);
        typeof f == "string" && (f = [[a.i, f, ""]]);
        var p = { hmr: !0, transform: void 0 };
        c(25)(f, p), f.locals && (a.exports = f.locals);
      }, function(a, o, f) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        var f = f(28), p = (f = f) && f.__esModule ? f : { default: f };
        o.default = Object.assign(p.default, { install: function(l) {
          l.component("JsonViewer", p.default);
        } });
      }, function(a, o, c) {
        c.r(o);
        var f, h = c(22), p = c(1);
        for (f in p) f !== "default" && (function(d) {
          c.d(o, d, function() {
            return p[d];
          });
        })(f);
        c(43);
        var l = c(0), h = Object(l.a)(p.default, h.a, h.b, !1, null, null, null);
        h.options.__file = "lib/json-viewer.vue", o.default = h.exports;
      }, function(a, o) {
        a.exports = r;
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(5);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-string.vue", o.default = l.exports;
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(7);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-undefined.vue", o.default = l.exports;
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(9);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-number.vue", o.default = l.exports;
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(11);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-boolean.vue", o.default = l.exports;
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(13);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-object.vue", o.default = l.exports;
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(15);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-array.vue", o.default = l.exports;
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(17);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-function.vue", o.default = l.exports;
      }, function(a, o, c) {
        c.r(o);
        var f, p = c(19);
        for (f in p) f !== "default" && (function(h) {
          c.d(o, h, function() {
            return p[h];
          });
        })(f);
        var l = c(0), l = Object(l.a)(p.default, void 0, void 0, !1, null, null, null);
        l.options.__file = "lib/types/json-date.vue", o.default = l.exports;
      }, function(a, o, c) {
        c(23);
      }, function(a, o, c) {
        (o = c(24)(!1)).push([a.i, `.jv-node{position:relative}.jv-node:after{content:','}.jv-node:last-of-type:after{content:''}.jv-node.toggle{margin-left:13px !important}.jv-node .jv-node{margin-left:25px}
`, ""]), a.exports = o;
      }, function(a, o) {
        a.exports = function(c) {
          var f = typeof window < "u" && window.location;
          if (!f) throw new Error("fixUrls requires window.location");
          if (!c || typeof c != "string") return c;
          var p = f.protocol + "//" + f.host, l = p + f.pathname.replace(/\/[^\/]*$/, "/");
          return c.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(h, _) {
            var _ = _.trim().replace(/^"(.*)"$/, function(w, C) {
              return C;
            }).replace(/^'(.*)'$/, function(w, C) {
              return C;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(_) ? h : (_ = _.indexOf("//") === 0 ? _ : _.indexOf("/") === 0 ? p + _ : l + _.replace(/^\.\//, ""), "url(" + JSON.stringify(_) + ")");
          });
        };
      }, function(a, o) {
        a.exports = n;
      }, function(a, o, c) {
        Object.defineProperty(o, "__esModule", { value: !0 }), o.debounce = function(f, p) {
          var l = Date.now(), h = void 0;
          return function() {
            for (var d = arguments.length, _ = Array(d), w = 0; w < d; w++) _[w] = arguments[w];
            Date.now() - l < p && h && clearTimeout(h), h = setTimeout(function() {
              f.apply(void 0, _);
            }, p), l = Date.now();
          };
        };
      }, function(a, o, c) {
        c(26);
      }, function(a, o, l) {
        var f = l(24), p = l(45), l = l(46);
        o = f(!1), l = p(l), o.push([a.i, ".jv-container{box-sizing:border-box;position:relative}.jv-container.boxed{border:1px solid #eee;border-radius:6px}.jv-container.boxed:hover{box-shadow:0 2px 7px rgba(0,0,0,0.15);border-color:transparent;position:relative}.jv-container.jv-light{background:#fff;white-space:nowrap;color:#525252;font-size:14px;font-family:Consolas, Menlo, Courier, monospace}.jv-container.jv-light .jv-ellipsis{color:#999;background-color:#eee;display:inline-block;line-height:0.9;font-size:0.9em;padding:0px 4px 2px 4px;margin:0 4px;border-radius:3px;vertical-align:2px;cursor:pointer;-webkit-user-select:none;user-select:none}.jv-container.jv-light .jv-button{color:#49b3ff}.jv-container.jv-light .jv-key{color:#111111;margin-right:4px}.jv-container.jv-light .jv-item.jv-array{color:#111111}.jv-container.jv-light .jv-item.jv-boolean{color:#fc1e70}.jv-container.jv-light .jv-item.jv-function{color:#067bca}.jv-container.jv-light .jv-item.jv-number{color:#fc1e70}.jv-container.jv-light .jv-item.jv-object{color:#111111}.jv-container.jv-light .jv-item.jv-undefined{color:#e08331}.jv-container.jv-light .jv-item.jv-string{color:#42b983;word-break:break-word;white-space:normal}.jv-container.jv-light .jv-item.jv-string .jv-link{color:#0366d6}.jv-container.jv-light .jv-code .jv-toggle:before{padding:0px 2px;border-radius:2px}.jv-container.jv-light .jv-code .jv-toggle:hover:before{background:#eee}.jv-container .jv-code{overflow:hidden;padding:30px 20px}.jv-container .jv-code.boxed{max-height:300px}.jv-container .jv-code.open{max-height:initial !important;overflow:visible;overflow-x:auto;padding-bottom:45px}.jv-container .jv-toggle{background-image:url(" + l + `);background-repeat:no-repeat;background-size:contain;background-position:center center;cursor:pointer;width:10px;height:10px;margin-right:2px;display:inline-block;-webkit-transition:-webkit-transform 0.1s;transition:-webkit-transform 0.1s;transition:transform 0.1s;transition:transform 0.1s, -webkit-transform 0.1s}.jv-container .jv-toggle.open{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.jv-container .jv-more{position:absolute;z-index:1;bottom:0;left:0;right:0;height:40px;width:100%;text-align:center;cursor:pointer}.jv-container .jv-more .jv-toggle{position:relative;top:40%;z-index:2;color:#888;-webkit-transition:all 0.1s;transition:all 0.1s;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.jv-container .jv-more .jv-toggle.open{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.jv-container .jv-more:after{content:"";width:100%;height:100%;position:absolute;bottom:0;left:0;z-index:1;background:-webkit-linear-gradient(top, rgba(0,0,0,0) 20%, rgba(230,230,230,0.3) 100%);background:linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(230,230,230,0.3) 100%);-webkit-transition:all 0.1s;transition:all 0.1s}.jv-container .jv-more:hover .jv-toggle{top:50%;color:#111}.jv-container .jv-more:hover:after{background:-webkit-linear-gradient(top, rgba(0,0,0,0) 20%, rgba(230,230,230,0.3) 100%);background:linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(230,230,230,0.3) 100%)}.jv-container .jv-button{position:relative;cursor:pointer;display:inline-block;padding:5px;z-index:5}.jv-container .jv-button.copied{opacity:0.4;cursor:default}.jv-container .jv-tooltip{position:absolute}.jv-container .jv-tooltip.right{right:15px}.jv-container .jv-tooltip.left{left:15px}.jv-container .j-icon{font-size:12px}
`, ""]), a.exports = o;
      }, function(a, o, c) {
        a.exports = function(f, p) {
          return p = p || {}, typeof (f = f && f.__esModule ? f.default : f) != "string" ? f : (/^['"].*['"]$/.test(f) && (f = f.slice(1, -1)), p.hash && (f += p.hash), /["'() \t\n]/.test(f) || p.needQuotes ? '"'.concat(f.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : f);
        };
      }, function(a, o) {
        a.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE2IiB3aWR0aD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIAo8cG9seWdvbiBwb2ludHM9IjAsMCA4LDggMCwxNiIKc3R5bGU9ImZpbGw6IzY2NjtzdHJva2U6cHVycGxlO3N0cm9rZS13aWR0aDowIiAvPgo8L3N2Zz4=";
      }], i.c = s, i.d = function(a, o, c) {
        i.o(a, o) || Object.defineProperty(a, o, { enumerable: !0, get: c });
      }, i.r = function(a) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
      }, i.t = function(a, o) {
        if (1 & o && (a = i(a)), 8 & o || 4 & o && typeof a == "object" && a && a.__esModule) return a;
        var c = /* @__PURE__ */ Object.create(null);
        if (i.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: a }), 2 & o && typeof a != "string") for (var f in a) i.d(c, f, (function(p) {
          return a[p];
        }).bind(null, f));
        return c;
      }, i.n = function(a) {
        var o = a && a.__esModule ? function() {
          return a.default;
        } : function() {
          return a;
        };
        return i.d(o, "a", o), o;
      }, i.o = function(a, o) {
        return Object.prototype.hasOwnProperty.call(a, o);
      }, i.p = "", i(i.s = 27);
      function i(a) {
        if (s[a]) return s[a].exports;
        var o = s[a] = { i: a, l: !1, exports: {} };
        return u[a].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
      }
      var u, s;
    });
  })(Wn)), Wn.exports;
}
var Zp = Kp();
const Au = /* @__PURE__ */ sn(Zp), zs = {};
function Yp(e) {
  let t = zs[e];
  if (t)
    return t;
  t = zs[e] = [];
  for (let r = 0; r < 128; r++) {
    const n = String.fromCharCode(r);
    t.push(n);
  }
  for (let r = 0; r < e.length; r++) {
    const n = e.charCodeAt(r);
    t[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  }
  return t;
}
function Ar(e, t) {
  typeof t != "string" && (t = Ar.defaultChars);
  const r = Yp(t);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(n) {
    let i = "";
    for (let u = 0, s = n.length; u < s; u += 3) {
      const a = parseInt(n.slice(u + 1, u + 3), 16);
      if (a < 128) {
        i += r[a];
        continue;
      }
      if ((a & 224) === 192 && u + 3 < s) {
        const o = parseInt(n.slice(u + 4, u + 6), 16);
        if ((o & 192) === 128) {
          const c = a << 6 & 1984 | o & 63;
          c < 128 ? i += "��" : i += String.fromCharCode(c), u += 3;
          continue;
        }
      }
      if ((a & 240) === 224 && u + 6 < s) {
        const o = parseInt(n.slice(u + 4, u + 6), 16), c = parseInt(n.slice(u + 7, u + 9), 16);
        if ((o & 192) === 128 && (c & 192) === 128) {
          const f = a << 12 & 61440 | o << 6 & 4032 | c & 63;
          f < 2048 || f >= 55296 && f <= 57343 ? i += "���" : i += String.fromCharCode(f), u += 6;
          continue;
        }
      }
      if ((a & 248) === 240 && u + 9 < s) {
        const o = parseInt(n.slice(u + 4, u + 6), 16), c = parseInt(n.slice(u + 7, u + 9), 16), f = parseInt(n.slice(u + 10, u + 12), 16);
        if ((o & 192) === 128 && (c & 192) === 128 && (f & 192) === 128) {
          let p = a << 18 & 1835008 | o << 12 & 258048 | c << 6 & 4032 | f & 63;
          p < 65536 || p > 1114111 ? i += "����" : (p -= 65536, i += String.fromCharCode(55296 + (p >> 10), 56320 + (p & 1023))), u += 9;
          continue;
        }
      }
      i += "�";
    }
    return i;
  });
}
Ar.defaultChars = ";/?:@&=+$,#";
Ar.componentChars = "";
const Us = {};
function Jp(e) {
  let t = Us[e];
  if (t)
    return t;
  t = Us[e] = [];
  for (let r = 0; r < 128; r++) {
    const n = String.fromCharCode(r);
    /^[0-9a-z]$/i.test(n) ? t.push(n) : t.push("%" + ("0" + r.toString(16).toUpperCase()).slice(-2));
  }
  for (let r = 0; r < e.length; r++)
    t[e.charCodeAt(r)] = e[r];
  return t;
}
function ln(e, t, r) {
  typeof t != "string" && (r = t, t = ln.defaultChars), typeof r > "u" && (r = !0);
  const n = Jp(t);
  let i = "";
  for (let u = 0, s = e.length; u < s; u++) {
    const a = e.charCodeAt(u);
    if (r && a === 37 && u + 2 < s && /^[0-9a-f]{2}$/i.test(e.slice(u + 1, u + 3))) {
      i += e.slice(u, u + 3), u += 2;
      continue;
    }
    if (a < 128) {
      i += n[a];
      continue;
    }
    if (a >= 55296 && a <= 57343) {
      if (a >= 55296 && a <= 56319 && u + 1 < s) {
        const o = e.charCodeAt(u + 1);
        if (o >= 56320 && o <= 57343) {
          i += encodeURIComponent(e[u] + e[u + 1]), u++;
          continue;
        }
      }
      i += "%EF%BF%BD";
      continue;
    }
    i += encodeURIComponent(e[u]);
  }
  return i;
}
ln.defaultChars = ";/?:@&=+$,-_.!~*'()#";
ln.componentChars = "-_.!~*'()";
function Hu(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function Xn() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Xp = /^([a-z0-9.+-]+:)/i, Qp = /:[0-9]*$/, eh = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, th = ["<", ">", '"', "`", " ", "\r", `
`, "	"], rh = ["{", "}", "|", "\\", "^", "`"].concat(th), nh = ["'"].concat(rh), Hs = ["%", "/", "?", ";", "#"].concat(nh), qs = ["/", "?", "#"], ih = 255, Gs = /^[+a-z0-9A-Z_-]{0,63}$/, uh = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Ks = {
  javascript: !0,
  "javascript:": !0
}, Zs = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function qu(e, t) {
  if (e && e instanceof Xn) return e;
  const r = new Xn();
  return r.parse(e, t), r;
}
Xn.prototype.parse = function(e, t) {
  let r, n, i, u = e;
  if (u = u.trim(), !t && e.split("#").length === 1) {
    const c = eh.exec(u);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let s = Xp.exec(u);
  if (s && (s = s[0], r = s.toLowerCase(), this.protocol = s, u = u.substr(s.length)), (t || s || u.match(/^\/\/[^@\/]+@[^@\/]+/)) && (i = u.substr(0, 2) === "//", i && !(s && Ks[s]) && (u = u.substr(2), this.slashes = !0)), !Ks[s] && (i || s && !Zs[s])) {
    let c = -1;
    for (let d = 0; d < qs.length; d++)
      n = u.indexOf(qs[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    let f, p;
    c === -1 ? p = u.lastIndexOf("@") : p = u.lastIndexOf("@", c), p !== -1 && (f = u.slice(0, p), u = u.slice(p + 1), this.auth = f), c = -1;
    for (let d = 0; d < Hs.length; d++)
      n = u.indexOf(Hs[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    c === -1 && (c = u.length), u[c - 1] === ":" && c--;
    const l = u.slice(0, c);
    u = u.slice(c), this.parseHost(l), this.hostname = this.hostname || "";
    const h = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!h) {
      const d = this.hostname.split(/\./);
      for (let _ = 0, w = d.length; _ < w; _++) {
        const C = d[_];
        if (C && !C.match(Gs)) {
          let D = "";
          for (let F = 0, S = C.length; F < S; F++)
            C.charCodeAt(F) > 127 ? D += "x" : D += C[F];
          if (!D.match(Gs)) {
            const F = d.slice(0, _), S = d.slice(_ + 1), E = C.match(uh);
            E && (F.push(E[1]), S.unshift(E[2])), S.length && (u = S.join(".") + u), this.hostname = F.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > ih && (this.hostname = ""), h && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const a = u.indexOf("#");
  a !== -1 && (this.hash = u.substr(a), u = u.slice(0, a));
  const o = u.indexOf("?");
  return o !== -1 && (this.search = u.substr(o), u = u.slice(0, o)), u && (this.pathname = u), Zs[r] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
Xn.prototype.parseHost = function(e) {
  let t = Qp.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Ar,
  encode: ln,
  format: Hu,
  parse: qu
}, Symbol.toStringTag, { value: "Module" })), Fo = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Po = /[\0-\x1F\x7F-\x9F]/, ah = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Gu = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Lo = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, No = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: Fo,
  Cc: Po,
  Cf: ah,
  P: Gu,
  S: Lo,
  Z: No
}, Symbol.toStringTag, { value: "Module" })), ch = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), lh = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var Xi;
const fh = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), ph = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (Xi = String.fromCodePoint) !== null && Xi !== void 0 ? Xi : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function hh(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = fh.get(e)) !== null && t !== void 0 ? t : e;
}
var De;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(De || (De = {}));
const dh = 32;
var zt;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(zt || (zt = {}));
function Su(e) {
  return e >= De.ZERO && e <= De.NINE;
}
function mh(e) {
  return e >= De.UPPER_A && e <= De.UPPER_F || e >= De.LOWER_A && e <= De.LOWER_F;
}
function bh(e) {
  return e >= De.UPPER_A && e <= De.UPPER_Z || e >= De.LOWER_A && e <= De.LOWER_Z || Su(e);
}
function gh(e) {
  return e === De.EQUALS || bh(e);
}
var Te;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(Te || (Te = {}));
var It;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(It || (It = {}));
class yh {
  constructor(t, r, n) {
    this.decodeTree = t, this.emitCodePoint = r, this.errors = n, this.state = Te.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = It.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = Te.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(t, r) {
    switch (this.state) {
      case Te.EntityStart:
        return t.charCodeAt(r) === De.NUM ? (this.state = Te.NumericStart, this.consumed += 1, this.stateNumericStart(t, r + 1)) : (this.state = Te.NamedEntity, this.stateNamedEntity(t, r));
      case Te.NumericStart:
        return this.stateNumericStart(t, r);
      case Te.NumericDecimal:
        return this.stateNumericDecimal(t, r);
      case Te.NumericHex:
        return this.stateNumericHex(t, r);
      case Te.NamedEntity:
        return this.stateNamedEntity(t, r);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(t, r) {
    return r >= t.length ? -1 : (t.charCodeAt(r) | dh) === De.LOWER_X ? (this.state = Te.NumericHex, this.consumed += 1, this.stateNumericHex(t, r + 1)) : (this.state = Te.NumericDecimal, this.stateNumericDecimal(t, r));
  }
  addToNumericResult(t, r, n, i) {
    if (r !== n) {
      const u = n - r;
      this.result = this.result * Math.pow(i, u) + parseInt(t.substr(r, u), i), this.consumed += u;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(t, r) {
    const n = r;
    for (; r < t.length; ) {
      const i = t.charCodeAt(r);
      if (Su(i) || mh(i))
        r += 1;
      else
        return this.addToNumericResult(t, n, r, 16), this.emitNumericEntity(i, 3);
    }
    return this.addToNumericResult(t, n, r, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(t, r) {
    const n = r;
    for (; r < t.length; ) {
      const i = t.charCodeAt(r);
      if (Su(i))
        r += 1;
      else
        return this.addToNumericResult(t, n, r, 10), this.emitNumericEntity(i, 2);
    }
    return this.addToNumericResult(t, n, r, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(t, r) {
    var n;
    if (this.consumed <= r)
      return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === De.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === It.Strict)
      return 0;
    return this.emitCodePoint(hh(this.result), this.consumed), this.errors && (t !== De.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(t, r) {
    const { decodeTree: n } = this;
    let i = n[this.treeIndex], u = (i & zt.VALUE_LENGTH) >> 14;
    for (; r < t.length; r++, this.excess++) {
      const s = t.charCodeAt(r);
      if (this.treeIndex = xh(n, i, this.treeIndex + Math.max(1, u), s), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === It.Attribute && // We shouldn't have consumed any characters after the entity,
        (u === 0 || // And there should be no invalid characters.
        gh(s)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (i = n[this.treeIndex], u = (i & zt.VALUE_LENGTH) >> 14, u !== 0) {
        if (s === De.SEMI)
          return this.emitNamedEntityData(this.treeIndex, u, this.consumed + this.excess);
        this.decodeMode !== It.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var t;
    const { result: r, decodeTree: n } = this, i = (n[r] & zt.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(r, i, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(t, r, n) {
    const { decodeTree: i } = this;
    return this.emitCodePoint(r === 1 ? i[t] & ~zt.VALUE_LENGTH : i[t + 1], n), r === 3 && this.emitCodePoint(i[t + 2], n), n;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var t;
    switch (this.state) {
      case Te.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== It.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case Te.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case Te.NumericHex:
        return this.emitNumericEntity(0, 3);
      case Te.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case Te.EntityStart:
        return 0;
    }
  }
}
function Ro(e) {
  let t = "";
  const r = new yh(e, (n) => t += ph(n));
  return function(i, u) {
    let s = 0, a = 0;
    for (; (a = i.indexOf("&", a)) >= 0; ) {
      t += i.slice(s, a), r.startEntity(u);
      const c = r.write(
        i,
        // Skip the "&"
        a + 1
      );
      if (c < 0) {
        s = a + r.end();
        break;
      }
      s = a + c, a = c === 0 ? s + 1 : s;
    }
    const o = t + i.slice(s);
    return t = "", o;
  };
}
function xh(e, t, r, n) {
  const i = (t & zt.BRANCH_LENGTH) >> 7, u = t & zt.JUMP_TABLE;
  if (i === 0)
    return u !== 0 && n === u ? r : -1;
  if (u) {
    const o = n - u;
    return o < 0 || o >= i ? -1 : e[r + o] - 1;
  }
  let s = r, a = s + i - 1;
  for (; s <= a; ) {
    const o = s + a >>> 1, c = e[o];
    if (c < n)
      s = o + 1;
    else if (c > n)
      a = o - 1;
    else
      return e[o + i];
  }
  return -1;
}
const jo = Ro(ch);
Ro(lh);
function _h(e, t = It.Legacy) {
  return jo(e, t);
}
function vh(e) {
  return jo(e, It.Strict);
}
function wh(e) {
  return Object.prototype.toString.call(e);
}
function Ku(e) {
  return wh(e) === "[object String]";
}
const kh = Object.prototype.hasOwnProperty;
function Ch(e, t) {
  return kh.call(e, t);
}
function vi(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(r) {
    if (r) {
      if (typeof r != "object")
        throw new TypeError(r + "must be object");
      Object.keys(r).forEach(function(n) {
        e[n] = r[n];
      });
    }
  }), e;
}
function Bo(e, t, r) {
  return [].concat(e.slice(0, t), r, e.slice(t + 1));
}
function Zu(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function Jr(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), r = 56320 + (e & 1023);
    return String.fromCharCode(t, r);
  }
  return String.fromCharCode(e);
}
const Mo = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Eh = /&([a-z#][a-z0-9]{1,31});/gi, Ah = new RegExp(Mo.source + "|" + Eh.source, "gi"), Sh = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Th(e, t) {
  if (t.charCodeAt(0) === 35 && Sh.test(t)) {
    const n = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return Zu(n) ? Jr(n) : e;
  }
  const r = _h(e);
  return r !== e ? r : e;
}
function Dh(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(Mo, "$1");
}
function Sr(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(Ah, function(t, r, n) {
    return r || Th(t, n);
  });
}
const Oh = /[&<>"]/, Ih = /[&<>"]/g, Fh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Ph(e) {
  return Fh[e];
}
function Gt(e) {
  return Oh.test(e) ? e.replace(Ih, Ph) : e;
}
const Lh = /[.?*+^$[\]\\(){}|-]/g;
function Nh(e) {
  return e.replace(Lh, "\\$&");
}
function be(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function Xr(e) {
  if (e >= 8192 && e <= 8202)
    return !0;
  switch (e) {
    case 9:
    // \t
    case 10:
    // \n
    case 11:
    // \v
    case 12:
    // \f
    case 13:
    // \r
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function Vo(e) {
  return Gu.test(e) || Lo.test(e);
}
function Qr(e) {
  return Vo(Jr(e));
}
function en(e) {
  switch (e) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function wi(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
function Ys(e) {
  return e === 32 || e === 9 || e === 10 || e === 13;
}
function ki(e) {
  let t = 0;
  for (; t < e.length && Ys(e.charCodeAt(t)); t++)
    ;
  let r = e.length - 1;
  for (; r >= t && Ys(e.charCodeAt(r)); r--)
    ;
  return e.slice(t, r + 1);
}
const Rh = { mdurl: sh, ucmicro: oh }, jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: Bo,
  asciiTrim: ki,
  assign: vi,
  escapeHtml: Gt,
  escapeRE: Nh,
  fromCodePoint: Jr,
  has: Ch,
  isMdAsciiPunct: en,
  isPunctChar: Vo,
  isPunctCharCode: Qr,
  isSpace: be,
  isString: Ku,
  isValidEntityCode: Zu,
  isWhiteSpace: Xr,
  lib: Rh,
  normalizeReference: wi,
  unescapeAll: Sr,
  unescapeMd: Dh
}, Symbol.toStringTag, { value: "Module" }));
function Bh(e, t, r) {
  let n, i, u, s;
  const a = e.posMax, o = e.pos;
  for (e.pos = t + 1, n = 1; e.pos < a; ) {
    if (u = e.src.charCodeAt(e.pos), u === 93 && (n--, n === 0)) {
      i = !0;
      break;
    }
    if (s = e.pos, e.md.inline.skipToken(e), u === 91) {
      if (s === e.pos - 1)
        n++;
      else if (r)
        return e.pos = o, -1;
    }
  }
  let c = -1;
  return i && (c = e.pos), e.pos = o, c;
}
function Mh(e, t, r) {
  let n, i = t;
  const u = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (e.charCodeAt(i) === 60) {
    for (i++; i < r; ) {
      if (n = e.charCodeAt(i), n === 10 || n === 60)
        return u;
      if (n === 62)
        return u.pos = i + 1, u.str = Sr(e.slice(t + 1, i)), u.ok = !0, u;
      if (n === 92 && i + 1 < r) {
        i += 2;
        continue;
      }
      i++;
    }
    return u;
  }
  let s = 0;
  for (; i < r && (n = e.charCodeAt(i), !(n === 32 || n < 32 || n === 127)); ) {
    if (n === 92 && i + 1 < r) {
      if (e.charCodeAt(i + 1) === 32)
        break;
      i += 2;
      continue;
    }
    if (n === 40 && (s++, s > 32))
      return u;
    if (n === 41) {
      if (s === 0)
        break;
      s--;
    }
    i++;
  }
  return t === i || s !== 0 || (u.str = Sr(e.slice(t, i)), u.pos = i, u.ok = !0), u;
}
function Vh(e, t, r, n) {
  let i, u = t;
  const s = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (n)
    s.str = n.str, s.marker = n.marker;
  else {
    if (u >= r)
      return s;
    let a = e.charCodeAt(u);
    if (a !== 34 && a !== 39 && a !== 40)
      return s;
    t++, u++, a === 40 && (a = 41), s.marker = a;
  }
  for (; u < r; ) {
    if (i = e.charCodeAt(u), i === s.marker)
      return s.pos = u + 1, s.str += Sr(e.slice(t, u)), s.ok = !0, s;
    if (i === 40 && s.marker === 41)
      return s;
    i === 92 && u + 1 < r && u++, u++;
  }
  return s.can_continue = !0, s.str += Sr(e.slice(t, u)), s;
}
const $h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Mh,
  parseLinkLabel: Bh,
  parseLinkTitle: Vh
}, Symbol.toStringTag, { value: "Module" })), kt = {};
kt.code_inline = function(e, t, r, n, i) {
  const u = e[t];
  return "<code" + i.renderAttrs(u) + ">" + Gt(u.content) + "</code>";
};
kt.code_block = function(e, t, r, n, i) {
  const u = e[t];
  return "<pre" + i.renderAttrs(u) + "><code>" + Gt(e[t].content) + `</code></pre>
`;
};
kt.fence = function(e, t, r, n, i) {
  const u = e[t], s = u.info ? Sr(u.info).trim() : "";
  let a = "", o = "";
  if (s) {
    const f = s.split(/(\s+)/g);
    a = f[0], o = f.slice(2).join("");
  }
  let c;
  if (r.highlight ? c = r.highlight(u.content, a, o) || Gt(u.content) : c = Gt(u.content), c.indexOf("<pre") === 0)
    return c + `
`;
  if (s) {
    const f = u.attrIndex("class"), p = u.attrs ? u.attrs.slice() : [];
    f < 0 ? p.push(["class", r.langPrefix + a]) : (p[f] = p[f].slice(), p[f][1] += " " + r.langPrefix + a);
    const l = {
      attrs: p
    };
    return `<pre><code${i.renderAttrs(l)}>${c}</code></pre>
`;
  }
  return `<pre><code${i.renderAttrs(u)}>${c}</code></pre>
`;
};
kt.image = function(e, t, r, n, i) {
  const u = e[t];
  return u.attrs[u.attrIndex("alt")][1] = i.renderInlineAsText(u.children, r, n), i.renderToken(e, t, r);
};
kt.hardbreak = function(e, t, r) {
  return r.xhtmlOut ? `<br />
` : `<br>
`;
};
kt.softbreak = function(e, t, r) {
  return r.breaks ? r.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
kt.text = function(e, t) {
  return Gt(e[t].content);
};
kt.html_block = function(e, t) {
  return e[t].content;
};
kt.html_inline = function(e, t) {
  return e[t].content;
};
function Lr() {
  this.rules = vi({}, kt);
}
Lr.prototype.renderAttrs = function(t) {
  let r, n, i;
  if (!t.attrs)
    return "";
  for (i = "", r = 0, n = t.attrs.length; r < n; r++)
    i += " " + Gt(t.attrs[r][0]) + '="' + Gt(t.attrs[r][1]) + '"';
  return i;
};
Lr.prototype.renderToken = function(t, r, n) {
  const i = t[r];
  let u = "";
  if (i.hidden)
    return "";
  i.block && i.nesting !== -1 && r && t[r - 1].hidden && (u += `
`), u += (i.nesting === -1 ? "</" : "<") + i.tag, u += this.renderAttrs(i), i.nesting === 0 && n.xhtmlOut && (u += " /");
  let s = !1;
  if (i.block && (s = !0, i.nesting === 1 && r + 1 < t.length)) {
    const a = t[r + 1];
    (a.type === "inline" || a.hidden || a.nesting === -1 && a.tag === i.tag) && (s = !1);
  }
  return u += s ? `>
` : ">", u;
};
Lr.prototype.renderInline = function(e, t, r) {
  let n = "";
  const i = this.rules;
  for (let u = 0, s = e.length; u < s; u++) {
    const a = e[u].type;
    typeof i[a] < "u" ? n += i[a](e, u, t, r, this) : n += this.renderToken(e, u, t);
  }
  return n;
};
Lr.prototype.renderInlineAsText = function(e, t, r) {
  let n = "";
  for (let i = 0, u = e.length; i < u; i++)
    switch (e[i].type) {
      case "text":
        n += e[i].content;
        break;
      case "image":
        n += this.renderInlineAsText(e[i].children, t, r);
        break;
      case "html_inline":
      case "html_block":
        n += e[i].content;
        break;
      case "softbreak":
      case "hardbreak":
        n += `
`;
        break;
    }
  return n;
};
Lr.prototype.render = function(e, t, r) {
  let n = "";
  const i = this.rules;
  for (let u = 0, s = e.length; u < s; u++) {
    const a = e[u].type;
    a === "inline" ? n += this.renderInline(e[u].children, t, r) : typeof i[a] < "u" ? n += i[a](e, u, t, r, this) : n += this.renderToken(e, u, t, r);
  }
  return n;
};
function Ue() {
  this.__rules__ = [], this.__cache__ = null;
}
Ue.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
Ue.prototype.__compile__ = function() {
  const e = this, t = [""];
  e.__rules__.forEach(function(r) {
    r.enabled && r.alt.forEach(function(n) {
      t.indexOf(n) < 0 && t.push(n);
    });
  }), e.__cache__ = {}, t.forEach(function(r) {
    e.__cache__[r] = [], e.__rules__.forEach(function(n) {
      n.enabled && (r && n.alt.indexOf(r) < 0 || e.__cache__[r].push(n.fn));
    });
  });
};
Ue.prototype.at = function(e, t, r) {
  const n = this.__find__(e), i = r || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[n].fn = t, this.__rules__[n].alt = i.alt || [], this.__cache__ = null;
};
Ue.prototype.before = function(e, t, r, n) {
  const i = this.__find__(e), u = n || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(i, 0, {
    name: t,
    enabled: !0,
    fn: r,
    alt: u.alt || []
  }), this.__cache__ = null;
};
Ue.prototype.after = function(e, t, r, n) {
  const i = this.__find__(e), u = n || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(i + 1, 0, {
    name: t,
    enabled: !0,
    fn: r,
    alt: u.alt || []
  }), this.__cache__ = null;
};
Ue.prototype.push = function(e, t, r) {
  const n = r || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: n.alt || []
  }), this.__cache__ = null;
};
Ue.prototype.enable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const r = [];
  return e.forEach(function(n) {
    const i = this.__find__(n);
    if (i < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[i].enabled = !0, r.push(n);
  }, this), this.__cache__ = null, r;
};
Ue.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(r) {
    r.enabled = !1;
  }), this.enable(e, t);
};
Ue.prototype.disable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const r = [];
  return e.forEach(function(n) {
    const i = this.__find__(n);
    if (i < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[i].enabled = !1, r.push(n);
  }, this), this.__cache__ = null, r;
};
Ue.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function pt(e, t, r) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = r, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
pt.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const r = this.attrs;
  for (let n = 0, i = r.length; n < i; n++)
    if (r[n][0] === t)
      return n;
  return -1;
};
pt.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
pt.prototype.attrSet = function(t, r) {
  const n = this.attrIndex(t), i = [t, r];
  n < 0 ? this.attrPush(i) : this.attrs[n] = i;
};
pt.prototype.attrGet = function(t) {
  const r = this.attrIndex(t);
  let n = null;
  return r >= 0 && (n = this.attrs[r][1]), n;
};
pt.prototype.attrJoin = function(t, r) {
  const n = this.attrIndex(t);
  n < 0 ? this.attrPush([t, r]) : this.attrs[n][1] = this.attrs[n][1] + " " + r;
};
function $o(e, t, r) {
  this.src = e, this.env = r, this.tokens = [], this.inlineMode = !1, this.md = t;
}
$o.prototype.Token = pt;
const Wh = /\r\n?|\n/g, zh = /\0/g;
function Uh(e) {
  let t;
  t = e.src.replace(Wh, `
`), t = t.replace(zh, "�"), e.src = t;
}
function Hh(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function qh(e) {
  const t = e.tokens;
  for (let r = 0, n = t.length; r < n; r++) {
    const i = t[r];
    i.type === "inline" && e.md.inline.parse(i.content, e.md, e.env, i.children);
  }
}
function Gh(e) {
  return /^<a[>\s]/i.test(e);
}
function Kh(e) {
  return /^<\/a\s*>/i.test(e);
}
function Zh(e) {
  const t = e.tokens;
  if (e.md.options.linkify)
    for (let r = 0, n = t.length; r < n; r++) {
      if (t[r].type !== "inline" || !e.md.linkify.pretest(t[r].content))
        continue;
      let i = t[r].children, u = 0;
      for (let s = i.length - 1; s >= 0; s--) {
        const a = i[s];
        if (a.type === "link_close") {
          for (s--; i[s].level !== a.level && i[s].type !== "link_open"; )
            s--;
          continue;
        }
        if (a.type === "html_inline" && (Gh(a.content) && u > 0 && u--, Kh(a.content) && u++), !(u > 0) && a.type === "text" && e.md.linkify.test(a.content)) {
          const o = a.content;
          let c = e.md.linkify.match(o);
          const f = [];
          let p = a.level, l = 0;
          c.length > 0 && c[0].index === 0 && s > 0 && i[s - 1].type === "text_special" && (c = c.slice(1));
          for (let h = 0; h < c.length; h++) {
            const d = c[h].url, _ = e.md.normalizeLink(d);
            if (!e.md.validateLink(_))
              continue;
            let w = c[h].text;
            c[h].schema ? c[h].schema === "mailto:" && !/^mailto:/i.test(w) ? w = e.md.normalizeLinkText("mailto:" + w).replace(/^mailto:/, "") : w = e.md.normalizeLinkText(w) : w = e.md.normalizeLinkText("http://" + w).replace(/^http:\/\//, "");
            const C = c[h].index;
            if (C > l) {
              const E = new e.Token("text", "", 0);
              E.content = o.slice(l, C), E.level = p, f.push(E);
            }
            const D = new e.Token("link_open", "a", 1);
            D.attrs = [["href", _]], D.level = p++, D.markup = "linkify", D.info = "auto", f.push(D);
            const F = new e.Token("text", "", 0);
            F.content = w, F.level = p, f.push(F);
            const S = new e.Token("link_close", "a", -1);
            S.level = --p, S.markup = "linkify", S.info = "auto", f.push(S), l = c[h].lastIndex;
          }
          if (l < o.length) {
            const h = new e.Token("text", "", 0);
            h.content = o.slice(l), h.level = p, f.push(h);
          }
          t[r].children = i = Bo(i, s, f);
        }
      }
    }
}
const Wo = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Yh = /\((c|tm|r)\)/i, Jh = /\((c|tm|r)\)/ig, Xh = {
  c: "©",
  r: "®",
  tm: "™"
};
function Qh(e, t) {
  return Xh[t.toLowerCase()];
}
function ed(e) {
  let t = 0;
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    n.type === "text" && !t && (n.content = n.content.replace(Jh, Qh)), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function td(e) {
  let t = 0;
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    n.type === "text" && !t && Wo.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function rd(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (Yh.test(e.tokens[t].content) && ed(e.tokens[t].children), Wo.test(e.tokens[t].content) && td(e.tokens[t].children));
}
const nd = /['"]/, Js = /['"]/g, Xs = "’";
function Nn(e, t, r, n) {
  e[t] || (e[t] = []), e[t].push({ pos: r, ch: n });
}
function id(e, t) {
  let r = "", n = 0;
  t.sort((i, u) => i.pos - u.pos);
  for (let i = 0; i < t.length; i++) {
    const u = t[i];
    r += e.slice(n, u.pos) + u.ch, n = u.pos + 1;
  }
  return r + e.slice(n);
}
function ud(e, t) {
  let r;
  const n = [], i = {};
  for (let u = 0; u < e.length; u++) {
    const s = e[u], a = e[u].level;
    for (r = n.length - 1; r >= 0 && !(n[r].level <= a); r--)
      ;
    if (n.length = r + 1, s.type !== "text")
      continue;
    const o = s.content;
    let c = 0;
    const f = o.length;
    e:
      for (; c < f; ) {
        Js.lastIndex = c;
        const p = Js.exec(o);
        if (!p)
          break;
        let l = !0, h = !0;
        c = p.index + 1;
        const d = p[0] === "'";
        let _ = 32;
        if (p.index - 1 >= 0)
          _ = o.charCodeAt(p.index - 1);
        else
          for (r = u - 1; r >= 0 && !(e[r].type === "softbreak" || e[r].type === "hardbreak"); r--)
            if (e[r].content) {
              _ = e[r].content.charCodeAt(e[r].content.length - 1);
              break;
            }
        let w = 32;
        if (c < f)
          w = o.charCodeAt(c);
        else
          for (r = u + 1; r < e.length && !(e[r].type === "softbreak" || e[r].type === "hardbreak"); r++)
            if (e[r].content) {
              w = e[r].content.charCodeAt(0);
              break;
            }
        const C = en(_) || Qr(_), D = en(w) || Qr(w), F = Xr(_), S = Xr(w);
        if (S ? l = !1 : D && (F || C || (l = !1)), F ? h = !1 : C && (S || D || (h = !1)), w === 34 && p[0] === '"' && _ >= 48 && _ <= 57 && (h = l = !1), l && h && (l = C, h = D), !l && !h) {
          d && Nn(i, u, p.index, Xs);
          continue;
        }
        if (h)
          for (r = n.length - 1; r >= 0; r--) {
            let E = n[r];
            if (n[r].level < a)
              break;
            if (E.single === d && n[r].level === a) {
              E = n[r];
              let k, O;
              d ? (k = t.md.options.quotes[2], O = t.md.options.quotes[3]) : (k = t.md.options.quotes[0], O = t.md.options.quotes[1]), Nn(i, u, p.index, O), Nn(i, E.token, E.pos, k), n.length = r;
              continue e;
            }
          }
        l ? n.push({
          token: u,
          pos: p.index,
          single: d,
          level: a
        }) : h && d && Nn(i, u, p.index, Xs);
      }
  }
  Object.keys(i).forEach(function(u) {
    e[u].content = id(e[u].content, i[u]);
  });
}
function sd(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !nd.test(e.tokens[t].content) || ud(e.tokens[t].children, e);
}
function ad(e) {
  let t, r;
  const n = e.tokens, i = n.length;
  for (let u = 0; u < i; u++) {
    if (n[u].type !== "inline") continue;
    const s = n[u].children, a = s.length;
    for (t = 0; t < a; t++)
      s[t].type === "text_special" && (s[t].type = "text");
    for (t = r = 0; t < a; t++)
      s[t].type === "text" && t + 1 < a && s[t + 1].type === "text" ? s[t + 1].content = s[t].content + s[t + 1].content : (t !== r && (s[r] = s[t]), r++);
    t !== r && (s.length = r);
  }
}
const Qi = [
  ["normalize", Uh],
  ["block", Hh],
  ["inline", qh],
  ["linkify", Zh],
  ["replacements", rd],
  ["smartquotes", sd],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", ad]
];
function Yu() {
  this.ruler = new Ue();
  for (let e = 0; e < Qi.length; e++)
    this.ruler.push(Qi[e][0], Qi[e][1]);
}
Yu.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let r = 0, n = t.length; r < n; r++)
    t[r](e);
};
Yu.prototype.State = $o;
function Ct(e, t, r, n) {
  this.src = e, this.md = t, this.env = r, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const i = this.src;
  for (let u = 0, s = 0, a = 0, o = 0, c = i.length, f = !1; s < c; s++) {
    const p = i.charCodeAt(s);
    if (!f)
      if (be(p)) {
        a++, p === 9 ? o += 4 - o % 4 : o++;
        continue;
      } else
        f = !0;
    (p === 10 || s === c - 1) && (p !== 10 && s++, this.bMarks.push(u), this.eMarks.push(s), this.tShift.push(a), this.sCount.push(o), this.bsCount.push(0), f = !1, a = 0, o = 0, u = s + 1);
  }
  this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
Ct.prototype.push = function(e, t, r) {
  const n = new pt(e, t, r);
  return n.block = !0, r < 0 && this.level--, n.level = this.level, r > 0 && this.level++, this.tokens.push(n), n;
};
Ct.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
Ct.prototype.skipEmptyLines = function(t) {
  for (let r = this.lineMax; t < r && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
Ct.prototype.skipSpaces = function(t) {
  for (let r = this.src.length; t < r; t++) {
    const n = this.src.charCodeAt(t);
    if (!be(n))
      break;
  }
  return t;
};
Ct.prototype.skipSpacesBack = function(t, r) {
  if (t <= r)
    return t;
  for (; t > r; )
    if (!be(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
Ct.prototype.skipChars = function(t, r) {
  for (let n = this.src.length; t < n && this.src.charCodeAt(t) === r; t++)
    ;
  return t;
};
Ct.prototype.skipCharsBack = function(t, r, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (r !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
Ct.prototype.getLines = function(t, r, n, i) {
  if (t >= r)
    return "";
  const u = new Array(r - t);
  for (let s = 0, a = t; a < r; a++, s++) {
    let o = 0;
    const c = this.bMarks[a];
    let f = c, p;
    for (a + 1 < r || i ? p = this.eMarks[a] + 1 : p = this.eMarks[a]; f < p && o < n; ) {
      const l = this.src.charCodeAt(f);
      if (be(l))
        l === 9 ? o += 4 - (o + this.bsCount[a]) % 4 : o++;
      else if (f - c < this.tShift[a])
        o++;
      else
        break;
      f++;
    }
    o > n ? u[s] = new Array(o - n + 1).join(" ") + this.src.slice(f, p) : u[s] = this.src.slice(f, p);
  }
  return u.join("");
};
Ct.prototype.Token = pt;
const od = 65536;
function eu(e, t) {
  const r = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  return e.src.slice(r, n);
}
function Qs(e) {
  const t = [], r = e.length;
  let n = 0, i = e.charCodeAt(n), u = !1, s = 0, a = "";
  for (; n < r; )
    i === 124 && (u ? (a += e.substring(s, n - 1), s = n) : (t.push(a + e.substring(s, n)), a = "", s = n + 1)), u = i === 92, n++, i = e.charCodeAt(n);
  return t.push(a + e.substring(s)), t;
}
function cd(e, t, r, n) {
  if (t + 2 > r)
    return !1;
  let i = t + 1;
  if (e.sCount[i] < e.blkIndent || e.sCount[i] - e.blkIndent >= 4)
    return !1;
  let u = e.bMarks[i] + e.tShift[i];
  if (u >= e.eMarks[i])
    return !1;
  const s = e.src.charCodeAt(u++);
  if (s !== 124 && s !== 45 && s !== 58 || u >= e.eMarks[i])
    return !1;
  const a = e.src.charCodeAt(u++);
  if (a !== 124 && a !== 45 && a !== 58 && !be(a) || s === 45 && be(a))
    return !1;
  for (; u < e.eMarks[i]; ) {
    const S = e.src.charCodeAt(u);
    if (S !== 124 && S !== 45 && S !== 58 && !be(S))
      return !1;
    u++;
  }
  let o = eu(e, t + 1), c = o.split("|");
  const f = [];
  for (let S = 0; S < c.length; S++) {
    const E = c[S].trim();
    if (!E) {
      if (S === 0 || S === c.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(E))
      return !1;
    E.charCodeAt(E.length - 1) === 58 ? f.push(E.charCodeAt(0) === 58 ? "center" : "right") : E.charCodeAt(0) === 58 ? f.push("left") : f.push("");
  }
  if (o = eu(e, t).trim(), o.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  c = Qs(o), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
  const p = c.length;
  if (p === 0 || p !== f.length)
    return !1;
  if (n)
    return !0;
  const l = e.parentType;
  e.parentType = "table";
  const h = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), _ = [t, 0];
  d.map = _;
  const w = e.push("thead_open", "thead", 1);
  w.map = [t, t + 1];
  const C = e.push("tr_open", "tr", 1);
  C.map = [t, t + 1];
  for (let S = 0; S < c.length; S++) {
    const E = e.push("th_open", "th", 1);
    f[S] && (E.attrs = [["style", "text-align:" + f[S]]]);
    const k = e.push("inline", "", 0);
    k.content = c[S].trim(), k.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let D, F = 0;
  for (i = t + 2; i < r && !(e.sCount[i] < e.blkIndent); i++) {
    let S = !1;
    for (let k = 0, O = h.length; k < O; k++)
      if (h[k](e, i, r, !0)) {
        S = !0;
        break;
      }
    if (S || (o = eu(e, i).trim(), !o) || e.sCount[i] - e.blkIndent >= 4 || (c = Qs(o), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), F += p - c.length, F > od))
      break;
    if (i === t + 2) {
      const k = e.push("tbody_open", "tbody", 1);
      k.map = D = [t + 2, 0];
    }
    const E = e.push("tr_open", "tr", 1);
    E.map = [i, i + 1];
    for (let k = 0; k < p; k++) {
      const O = e.push("td_open", "td", 1);
      f[k] && (O.attrs = [["style", "text-align:" + f[k]]]);
      const L = e.push("inline", "", 0);
      L.content = c[k] ? c[k].trim() : "", L.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return D && (e.push("tbody_close", "tbody", -1), D[1] = i), e.push("table_close", "table", -1), _[1] = i, e.parentType = l, e.line = i, !0;
}
function ld(e, t, r) {
  if (e.sCount[t] - e.blkIndent < 4)
    return !1;
  let n = t + 1, i = n;
  for (; n < r; ) {
    if (e.isEmpty(n)) {
      n++;
      continue;
    }
    if (e.sCount[n] - e.blkIndent >= 4) {
      n++, i = n;
      continue;
    }
    break;
  }
  e.line = i;
  const u = e.push("code_block", "code", 0);
  return u.content = e.getLines(t, i, 4 + e.blkIndent, !1) + `
`, u.map = [t, e.line], !0;
}
function fd(e, t, r, n) {
  let i = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || i + 3 > u)
    return !1;
  const s = e.src.charCodeAt(i);
  if (s !== 126 && s !== 96)
    return !1;
  let a = i;
  i = e.skipChars(i, s);
  let o = i - a;
  if (o < 3)
    return !1;
  const c = e.src.slice(a, i), f = e.src.slice(i, u);
  if (s === 96 && f.indexOf(String.fromCharCode(s)) >= 0)
    return !1;
  if (n)
    return !0;
  let p = t, l = !1;
  for (; p++, !(p >= r || (i = a = e.bMarks[p] + e.tShift[p], u = e.eMarks[p], i < u && e.sCount[p] < e.blkIndent)); )
    if (e.src.charCodeAt(i) === s && !(e.sCount[p] - e.blkIndent >= 4) && (i = e.skipChars(i, s), !(i - a < o) && (i = e.skipSpaces(i), !(i < u)))) {
      l = !0;
      break;
    }
  o = e.sCount[t], e.line = p + (l ? 1 : 0);
  const h = e.push("fence", "code", 0);
  return h.info = f, h.content = e.getLines(t + 1, p, o, !0), h.markup = c, h.map = [t, e.line], !0;
}
function pd(e, t, r, n) {
  let i = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  const s = e.lineMax;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(i) !== 62)
    return !1;
  if (n)
    return !0;
  const a = [], o = [], c = [], f = [], p = e.md.block.ruler.getRules("blockquote"), l = e.parentType;
  e.parentType = "blockquote";
  let h = !1, d;
  for (d = t; d < r; d++) {
    const F = e.sCount[d] < e.blkIndent;
    if (i = e.bMarks[d] + e.tShift[d], u = e.eMarks[d], i >= u)
      break;
    if (e.src.charCodeAt(i++) === 62 && !F) {
      let E = e.sCount[d] + 1, k, O;
      e.src.charCodeAt(i) === 32 ? (i++, E++, O = !1, k = !0) : e.src.charCodeAt(i) === 9 ? (k = !0, (e.bsCount[d] + E) % 4 === 3 ? (i++, E++, O = !1) : O = !0) : k = !1;
      let L = E;
      for (a.push(e.bMarks[d]), e.bMarks[d] = i; i < u; ) {
        const Y = e.src.charCodeAt(i);
        if (be(Y))
          Y === 9 ? L += 4 - (L + e.bsCount[d] + (O ? 1 : 0)) % 4 : L++;
        else
          break;
        i++;
      }
      h = i >= u, o.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (k ? 1 : 0), c.push(e.sCount[d]), e.sCount[d] = L - E, f.push(e.tShift[d]), e.tShift[d] = i - e.bMarks[d];
      continue;
    }
    if (h)
      break;
    let S = !1;
    for (let E = 0, k = p.length; E < k; E++)
      if (p[E](e, d, r, !0)) {
        S = !0;
        break;
      }
    if (S) {
      e.lineMax = d, e.blkIndent !== 0 && (a.push(e.bMarks[d]), o.push(e.bsCount[d]), f.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
      break;
    }
    a.push(e.bMarks[d]), o.push(e.bsCount[d]), f.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] = -1;
  }
  const _ = e.blkIndent;
  e.blkIndent = 0;
  const w = e.push("blockquote_open", "blockquote", 1);
  w.markup = ">";
  const C = [t, 0];
  w.map = C, e.md.block.tokenize(e, t, d);
  const D = e.push("blockquote_close", "blockquote", -1);
  D.markup = ">", e.lineMax = s, e.parentType = l, C[1] = e.line;
  for (let F = 0; F < f.length; F++)
    e.bMarks[F + t] = a[F], e.tShift[F + t] = f[F], e.sCount[F + t] = c[F], e.bsCount[F + t] = o[F];
  return e.blkIndent = _, !0;
}
function hd(e, t, r, n) {
  const i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let u = e.bMarks[t] + e.tShift[t];
  const s = e.src.charCodeAt(u++);
  if (s !== 42 && s !== 45 && s !== 95)
    return !1;
  let a = 1;
  for (; u < i; ) {
    const c = e.src.charCodeAt(u++);
    if (c !== s && !be(c))
      return !1;
    c === s && a++;
  }
  if (a < 3)
    return !1;
  if (n)
    return !0;
  e.line = t + 1;
  const o = e.push("hr", "hr", 0);
  return o.map = [t, e.line], o.markup = Array(a + 1).join(String.fromCharCode(s)), !0;
}
function ea(e, t) {
  const r = e.eMarks[t];
  let n = e.bMarks[t] + e.tShift[t];
  const i = e.src.charCodeAt(n++);
  if (i !== 42 && i !== 45 && i !== 43)
    return -1;
  if (n < r) {
    const u = e.src.charCodeAt(n);
    if (!be(u))
      return -1;
  }
  return n;
}
function ta(e, t) {
  const r = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  let i = r;
  if (i + 1 >= n)
    return -1;
  let u = e.src.charCodeAt(i++);
  if (u < 48 || u > 57)
    return -1;
  for (; ; ) {
    if (i >= n)
      return -1;
    if (u = e.src.charCodeAt(i++), u >= 48 && u <= 57) {
      if (i - r >= 10)
        return -1;
      continue;
    }
    if (u === 41 || u === 46)
      break;
    return -1;
  }
  return i < n && (u = e.src.charCodeAt(i), !be(u)) ? -1 : i;
}
function dd(e, t) {
  const r = e.level + 2;
  for (let n = t + 2, i = e.tokens.length - 2; n < i; n++)
    e.tokens[n].level === r && e.tokens[n].type === "paragraph_open" && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2);
}
function md(e, t, r, n) {
  let i, u, s, a, o = t, c = !0;
  if (e.sCount[o] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[o] - e.listIndent >= 4 && e.sCount[o] < e.blkIndent)
    return !1;
  let f = !1;
  n && e.parentType === "paragraph" && e.sCount[o] >= e.blkIndent && (f = !0);
  let p, l, h;
  if ((h = ta(e, o)) >= 0) {
    if (p = !0, s = e.bMarks[o] + e.tShift[o], l = Number(e.src.slice(s, h - 1)), f && l !== 1) return !1;
  } else if ((h = ea(e, o)) >= 0)
    p = !1;
  else
    return !1;
  if (f && e.skipSpaces(h) >= e.eMarks[o])
    return !1;
  if (n)
    return !0;
  const d = e.src.charCodeAt(h - 1), _ = e.tokens.length;
  p ? (a = e.push("ordered_list_open", "ol", 1), l !== 1 && (a.attrs = [["start", l]])) : a = e.push("bullet_list_open", "ul", 1);
  const w = [o, 0];
  a.map = w, a.markup = String.fromCharCode(d);
  let C = !1;
  const D = e.md.block.ruler.getRules("list"), F = e.parentType;
  for (e.parentType = "list"; o < r; ) {
    u = h, i = e.eMarks[o];
    const S = e.sCount[o] + h - (e.bMarks[o] + e.tShift[o]);
    let E = S;
    for (; u < i; ) {
      const y = e.src.charCodeAt(u);
      if (y === 9)
        E += 4 - (E + e.bsCount[o]) % 4;
      else if (y === 32)
        E++;
      else
        break;
      u++;
    }
    const k = u;
    let O;
    k >= i ? O = 1 : O = E - S, O > 4 && (O = 1);
    const L = S + O;
    a = e.push("list_item_open", "li", 1), a.markup = String.fromCharCode(d);
    const Y = [o, 0];
    a.map = Y, p && (a.info = e.src.slice(s, h - 1));
    const Q = e.tight, W = e.tShift[o], ee = e.sCount[o], ne = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = L, e.tight = !0, e.tShift[o] = k - e.bMarks[o], e.sCount[o] = E, k >= i && e.isEmpty(o + 1) ? e.line = Math.min(e.line + 2, r) : e.md.block.tokenize(e, o, r, !0), (!e.tight || C) && (c = !1), C = e.line - o > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = ne, e.tShift[o] = W, e.sCount[o] = ee, e.tight = Q, a = e.push("list_item_close", "li", -1), a.markup = String.fromCharCode(d), o = e.line, Y[1] = o, o >= r || e.sCount[o] < e.blkIndent || e.sCount[o] - e.blkIndent >= 4)
      break;
    let P = !1;
    for (let y = 0, x = D.length; y < x; y++)
      if (D[y](e, o, r, !0)) {
        P = !0;
        break;
      }
    if (P)
      break;
    if (p) {
      if (h = ta(e, o), h < 0)
        break;
      s = e.bMarks[o] + e.tShift[o];
    } else if (h = ea(e, o), h < 0)
      break;
    if (d !== e.src.charCodeAt(h - 1))
      break;
  }
  return p ? a = e.push("ordered_list_close", "ol", -1) : a = e.push("bullet_list_close", "ul", -1), a.markup = String.fromCharCode(d), w[1] = o, e.line = o, e.parentType = F, c && dd(e, _), !0;
}
function bd(e, t, r, n) {
  let i = e.bMarks[t] + e.tShift[t], u = e.eMarks[t], s = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(i) !== 91)
    return !1;
  function a(D) {
    const F = e.lineMax;
    if (D >= F || e.isEmpty(D))
      return null;
    let S = !1;
    if (e.sCount[D] - e.blkIndent > 3 && (S = !0), e.sCount[D] < 0 && (S = !0), !S) {
      const O = e.md.block.ruler.getRules("reference"), L = e.parentType;
      e.parentType = "reference";
      let Y = !1;
      for (let Q = 0, W = O.length; Q < W; Q++)
        if (O[Q](e, D, F, !0)) {
          Y = !0;
          break;
        }
      if (e.parentType = L, Y)
        return null;
    }
    const E = e.bMarks[D] + e.tShift[D], k = e.eMarks[D];
    return e.src.slice(E, k + 1);
  }
  let o = e.src.slice(i, u + 1);
  u = o.length;
  let c = -1;
  for (i = 1; i < u; i++) {
    const D = o.charCodeAt(i);
    if (D === 91)
      return !1;
    if (D === 93) {
      c = i;
      break;
    } else if (D === 10) {
      const F = a(s);
      F !== null && (o += F, u = o.length, s++);
    } else if (D === 92 && (i++, i < u && o.charCodeAt(i) === 10)) {
      const F = a(s);
      F !== null && (o += F, u = o.length, s++);
    }
  }
  if (c < 0 || o.charCodeAt(c + 1) !== 58)
    return !1;
  for (i = c + 2; i < u; i++) {
    const D = o.charCodeAt(i);
    if (D === 10) {
      const F = a(s);
      F !== null && (o += F, u = o.length, s++);
    } else if (!be(D)) break;
  }
  const f = e.md.helpers.parseLinkDestination(o, i, u);
  if (!f.ok)
    return !1;
  const p = e.md.normalizeLink(f.str);
  if (!e.md.validateLink(p))
    return !1;
  i = f.pos;
  const l = i, h = s, d = i;
  for (; i < u; i++) {
    const D = o.charCodeAt(i);
    if (D === 10) {
      const F = a(s);
      F !== null && (o += F, u = o.length, s++);
    } else if (!be(D)) break;
  }
  let _ = e.md.helpers.parseLinkTitle(o, i, u);
  for (; _.can_continue; ) {
    const D = a(s);
    if (D === null) break;
    o += D, i = u, u = o.length, s++, _ = e.md.helpers.parseLinkTitle(o, i, u, _);
  }
  let w;
  for (i < u && d !== i && _.ok ? (w = _.str, i = _.pos) : (w = "", i = l, s = h); i < u; ) {
    const D = o.charCodeAt(i);
    if (!be(D))
      break;
    i++;
  }
  if (i < u && o.charCodeAt(i) !== 10 && w)
    for (w = "", i = l, s = h; i < u; ) {
      const D = o.charCodeAt(i);
      if (!be(D))
        break;
      i++;
    }
  if (i < u && o.charCodeAt(i) !== 10)
    return !1;
  const C = wi(o.slice(1, c));
  return C ? (n || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[C] > "u" && (e.env.references[C] = { title: w, href: p }), e.line = s), !0) : !1;
}
const gd = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], yd = "[a-zA-Z_:][a-zA-Z0-9:._-]*", xd = "[^\"'=<>`\\x00-\\x20]+", _d = "'[^']*'", vd = '"[^"]*"', wd = "(?:" + xd + "|" + _d + "|" + vd + ")", kd = "(?:\\s+" + yd + "(?:\\s*=\\s*" + wd + ")?)", zo = "<[A-Za-z][A-Za-z0-9\\-]*" + kd + "*\\s*\\/?>", Uo = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Cd = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", Ed = "<[?][\\s\\S]*?[?]>", Ad = "<![A-Za-z][^>]*>", Sd = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Td = new RegExp("^(?:" + zo + "|" + Uo + "|" + Cd + "|" + Ed + "|" + Ad + "|" + Sd + ")"), Dd = new RegExp("^(?:" + zo + "|" + Uo + ")"), ir = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + gd.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Dd.source + "\\s*$"), /^$/, !1]
];
function Od(e, t, r, n) {
  let i = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(i) !== 60)
    return !1;
  let s = e.src.slice(i, u), a = 0;
  for (; a < ir.length && !ir[a][0].test(s); a++)
    ;
  if (a === ir.length)
    return !1;
  if (n)
    return ir[a][2];
  let o = t + 1;
  const c = ir[a][1].test("");
  if (!ir[a][1].test(s)) {
    for (; o < r && !(e.sCount[o] < e.blkIndent && (c || !e.isEmpty(o))); o++)
      if (i = e.bMarks[o] + e.tShift[o], u = e.eMarks[o], s = e.src.slice(i, u), ir[a][1].test(s)) {
        s.length !== 0 && o++;
        break;
      }
  }
  e.line = o;
  const f = e.push("html_block", "", 0);
  return f.map = [t, o], f.content = e.getLines(t, o, e.blkIndent, !0), !0;
}
function Id(e, t, r, n) {
  let i = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let s = e.src.charCodeAt(i);
  if (s !== 35 || i >= u)
    return !1;
  let a = 1;
  for (s = e.src.charCodeAt(++i); s === 35 && i < u && a <= 6; )
    a++, s = e.src.charCodeAt(++i);
  if (a > 6 || i < u && !be(s))
    return !1;
  if (n)
    return !0;
  u = e.skipSpacesBack(u, i);
  const o = e.skipCharsBack(u, 35, i);
  o > i && be(e.src.charCodeAt(o - 1)) && (u = o), e.line = t + 1;
  const c = e.push("heading_open", "h" + String(a), 1);
  c.markup = "########".slice(0, a), c.map = [t, e.line];
  const f = e.push("inline", "", 0);
  f.content = ki(e.src.slice(i, u)), f.map = [t, e.line], f.children = [];
  const p = e.push("heading_close", "h" + String(a), -1);
  return p.markup = "########".slice(0, a), !0;
}
function Fd(e, t, r) {
  const n = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  const i = e.parentType;
  e.parentType = "paragraph";
  let u = 0, s, a = t + 1;
  for (; a < r && !e.isEmpty(a); a++) {
    if (e.sCount[a] - e.blkIndent > 3)
      continue;
    if (e.sCount[a] >= e.blkIndent) {
      let h = e.bMarks[a] + e.tShift[a];
      const d = e.eMarks[a];
      if (h < d && (s = e.src.charCodeAt(h), (s === 45 || s === 61) && (h = e.skipChars(h, s), h = e.skipSpaces(h), h >= d))) {
        u = s === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[a] < 0)
      continue;
    let l = !1;
    for (let h = 0, d = n.length; h < d; h++)
      if (n[h](e, a, r, !0)) {
        l = !0;
        break;
      }
    if (l)
      break;
  }
  if (!u)
    return e.parentType = i, !1;
  const o = ki(e.getLines(t, a, e.blkIndent, !1));
  e.line = a + 1;
  const c = e.push("heading_open", "h" + String(u), 1);
  c.markup = String.fromCharCode(s), c.map = [t, e.line];
  const f = e.push("inline", "", 0);
  f.content = o, f.map = [t, e.line - 1], f.children = [];
  const p = e.push("heading_close", "h" + String(u), -1);
  return p.markup = String.fromCharCode(s), e.parentType = i, !0;
}
function Pd(e, t, r) {
  const n = e.md.block.ruler.getRules("paragraph"), i = e.parentType;
  let u = t + 1;
  for (e.parentType = "paragraph"; u < r && !e.isEmpty(u); u++) {
    if (e.sCount[u] - e.blkIndent > 3 || e.sCount[u] < 0)
      continue;
    let c = !1;
    for (let f = 0, p = n.length; f < p; f++)
      if (n[f](e, u, r, !0)) {
        c = !0;
        break;
      }
    if (c)
      break;
  }
  const s = ki(e.getLines(t, u, e.blkIndent, !1));
  e.line = u;
  const a = e.push("paragraph_open", "p", 1);
  a.map = [t, e.line];
  const o = e.push("inline", "", 0);
  return o.content = s, o.map = [t, e.line], o.children = [], e.push("paragraph_close", "p", -1), e.parentType = i, !0;
}
const Rn = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", cd, ["paragraph", "reference"]],
  ["code", ld],
  ["fence", fd, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", pd, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", hd, ["paragraph", "reference", "blockquote", "list"]],
  ["list", md, ["paragraph", "reference", "blockquote"]],
  ["reference", bd],
  ["html_block", Od, ["paragraph", "reference", "blockquote"]],
  ["heading", Id, ["paragraph", "reference", "blockquote"]],
  ["lheading", Fd],
  ["paragraph", Pd]
];
function Ci() {
  this.ruler = new Ue();
  for (let e = 0; e < Rn.length; e++)
    this.ruler.push(Rn[e][0], Rn[e][1], { alt: (Rn[e][2] || []).slice() });
}
Ci.prototype.tokenize = function(e, t, r) {
  const n = this.ruler.getRules(""), i = n.length, u = e.md.options.maxNesting;
  let s = t, a = !1;
  for (; s < r && (e.line = s = e.skipEmptyLines(s), !(s >= r || e.sCount[s] < e.blkIndent)); ) {
    if (e.level >= u) {
      e.line = r;
      break;
    }
    const o = e.line;
    let c = !1;
    for (let f = 0; f < i; f++)
      if (c = n[f](e, s, r, !1), c) {
        if (o >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!c) throw new Error("none of the block rules matched");
    e.tight = !a, e.isEmpty(e.line - 1) && (a = !0), s = e.line, s < r && e.isEmpty(s) && (a = !0, s++, e.line = s);
  }
};
Ci.prototype.parse = function(e, t, r, n) {
  if (!e)
    return;
  const i = new this.State(e, t, r, n);
  this.tokenize(i, i.line, i.lineMax);
};
Ci.prototype.State = Ct;
function fn(e, t, r, n) {
  this.src = e, this.env = r, this.md = t, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
fn.prototype.pushPending = function() {
  const e = new pt("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
fn.prototype.push = function(e, t, r) {
  this.pending && this.pushPending();
  const n = new pt(e, t, r);
  let i = null;
  return r < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, r > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], i = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(i), n;
};
fn.prototype.scanDelims = function(e, t) {
  const r = this.posMax, n = this.src.charCodeAt(e);
  let i;
  if (e === 0)
    i = 32;
  else if (e === 1)
    i = this.src.charCodeAt(0), (i & 63488) === 55296 && (i = 65533);
  else if (i = this.src.charCodeAt(e - 1), (i & 64512) === 56320) {
    const w = this.src.charCodeAt(e - 2);
    i = (w & 64512) === 55296 ? 65536 + (w - 55296 << 10) + (i - 56320) : 65533;
  } else (i & 64512) === 55296 && (i = 65533);
  let u = e;
  for (; u < r && this.src.charCodeAt(u) === n; )
    u++;
  const s = u - e;
  let a = u < r ? this.src.charCodeAt(u) : 32;
  if ((a & 64512) === 55296) {
    const w = this.src.charCodeAt(u + 1);
    a = (w & 64512) === 56320 ? 65536 + (a - 55296 << 10) + (w - 56320) : 65533;
  } else (a & 64512) === 56320 && (a = 65533);
  const o = en(i) || Qr(i), c = en(a) || Qr(a), f = Xr(i), p = Xr(a), l = !p && (!c || f || o), h = !f && (!o || p || c);
  return { can_open: l && (t || !h || o), can_close: h && (t || !l || c), length: s };
};
fn.prototype.Token = pt;
function Ld(e) {
  switch (e) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Nd(e, t) {
  let r = e.pos;
  for (; r < e.posMax && !Ld(e.src.charCodeAt(r)); )
    r++;
  return r === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, r)), e.pos = r, !0);
}
const Rd = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function jd(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const r = e.pos, n = e.posMax;
  if (r + 3 > n || e.src.charCodeAt(r) !== 58 || e.src.charCodeAt(r + 1) !== 47 || e.src.charCodeAt(r + 2) !== 47) return !1;
  const i = e.pending.match(Rd);
  if (!i) return !1;
  const u = i[1], s = e.md.linkify.matchAtStart(e.src.slice(r - u.length));
  if (!s) return !1;
  let a = s.url;
  if (a.length <= u.length) return !1;
  let o = a.length;
  for (; o > 0 && a.charCodeAt(o - 1) === 42; )
    o--;
  o !== a.length && (a = a.slice(0, o));
  const c = e.md.normalizeLink(a);
  if (!e.md.validateLink(c)) return !1;
  if (!t) {
    e.pending = e.pending.slice(0, -u.length);
    const f = e.push("link_open", "a", 1);
    f.attrs = [["href", c]], f.markup = "linkify", f.info = "auto";
    const p = e.push("text", "", 0);
    p.content = e.md.normalizeLinkText(a);
    const l = e.push("link_close", "a", -1);
    l.markup = "linkify", l.info = "auto";
  }
  return e.pos += a.length - u.length, !0;
}
function Bd(e, t) {
  let r = e.pos;
  if (e.src.charCodeAt(r) !== 10)
    return !1;
  const n = e.pending.length - 1, i = e.posMax;
  if (!t)
    if (n >= 0 && e.pending.charCodeAt(n) === 32)
      if (n >= 1 && e.pending.charCodeAt(n - 1) === 32) {
        let u = n - 1;
        for (; u >= 1 && e.pending.charCodeAt(u - 1) === 32; ) u--;
        e.pending = e.pending.slice(0, u), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (r++; r < i && be(e.src.charCodeAt(r)); )
    r++;
  return e.pos = r, !0;
}
const Ju = [];
for (let e = 0; e < 256; e++)
  Ju.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  Ju[e.charCodeAt(0)] = 1;
});
function Md(e, t) {
  let r = e.pos;
  const n = e.posMax;
  if (e.src.charCodeAt(r) !== 92 || (r++, r >= n)) return !1;
  let i = e.src.charCodeAt(r);
  if (i === 10) {
    for (t || e.push("hardbreak", "br", 0), r++; r < n && (i = e.src.charCodeAt(r), !!be(i)); )
      r++;
    return e.pos = r, !0;
  }
  let u = e.src[r];
  if (i >= 55296 && i <= 56319 && r + 1 < n) {
    const a = e.src.charCodeAt(r + 1);
    a >= 56320 && a <= 57343 && (u += e.src[r + 1], r++);
  }
  const s = "\\" + u;
  if (!t) {
    const a = e.push("text_special", "", 0);
    i < 256 && Ju[i] !== 0 ? a.content = u : a.content = s, a.markup = s, a.info = "escape";
  }
  return e.pos = r + 1, !0;
}
function Vd(e, t) {
  let r = e.pos;
  if (e.src.charCodeAt(r) !== 96)
    return !1;
  const i = r;
  r++;
  const u = e.posMax;
  for (; r < u && e.src.charCodeAt(r) === 96; )
    r++;
  const s = e.src.slice(i, r), a = s.length;
  if (e.backticksScanned && (e.backticks[a] || 0) <= i)
    return t || (e.pending += s), e.pos += a, !0;
  let o = r, c;
  for (; (c = e.src.indexOf("`", o)) !== -1; ) {
    for (o = c + 1; o < u && e.src.charCodeAt(o) === 96; )
      o++;
    const f = o - c;
    if (f === a) {
      if (!t) {
        const p = e.push("code_inline", "code", 0);
        p.markup = s, p.content = e.src.slice(r, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = o, !0;
    }
    e.backticks[f] = c;
  }
  return e.backticksScanned = !0, t || (e.pending += s), e.pos += a, !0;
}
function $d(e, t) {
  const r = e.pos, n = e.src.charCodeAt(r);
  if (t || n !== 126)
    return !1;
  const i = e.scanDelims(e.pos, !0);
  let u = i.length;
  const s = String.fromCharCode(n);
  if (u < 2)
    return !1;
  let a;
  u % 2 && (a = e.push("text", "", 0), a.content = s, u--);
  for (let o = 0; o < u; o += 2)
    a = e.push("text", "", 0), a.content = s + s, e.delimiters.push({
      marker: n,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: i.can_open,
      close: i.can_close
    });
  return e.pos += i.length, !0;
}
function ra(e, t) {
  let r;
  const n = [], i = t.length;
  for (let u = 0; u < i; u++) {
    const s = t[u];
    if (s.marker !== 126 || s.end === -1)
      continue;
    const a = t[s.end];
    r = e.tokens[s.token], r.type = "s_open", r.tag = "s", r.nesting = 1, r.markup = "~~", r.content = "", r = e.tokens[a.token], r.type = "s_close", r.tag = "s", r.nesting = -1, r.markup = "~~", r.content = "", e.tokens[a.token - 1].type === "text" && e.tokens[a.token - 1].content === "~" && n.push(a.token - 1);
  }
  for (; n.length; ) {
    const u = n.pop();
    let s = u + 1;
    for (; s < e.tokens.length && e.tokens[s].type === "s_close"; )
      s++;
    s--, u !== s && (r = e.tokens[s], e.tokens[s] = e.tokens[u], e.tokens[u] = r);
  }
}
function Wd(e) {
  const t = e.tokens_meta, r = e.tokens_meta.length;
  ra(e, e.delimiters);
  for (let n = 0; n < r; n++)
    t[n] && t[n].delimiters && ra(e, t[n].delimiters);
}
const Ho = {
  tokenize: $d,
  postProcess: Wd
};
function zd(e, t) {
  const r = e.pos, n = e.src.charCodeAt(r);
  if (t || n !== 95 && n !== 42)
    return !1;
  const i = e.scanDelims(e.pos, n === 42);
  for (let u = 0; u < i.length; u++) {
    const s = e.push("text", "", 0);
    s.content = String.fromCharCode(n), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: n,
      // Total length of these series of delimiters.
      //
      length: i.length,
      // A position of the token this delimiter corresponds to.
      //
      token: e.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: i.can_open,
      close: i.can_close
    });
  }
  return e.pos += i.length, !0;
}
function na(e, t) {
  const r = t.length;
  for (let n = r - 1; n >= 0; n--) {
    const i = t[n];
    if (i.marker !== 95 && i.marker !== 42 || i.end === -1)
      continue;
    const u = t[i.end], s = n > 0 && t[n - 1].end === i.end + 1 && // check that first two markers match and adjacent
    t[n - 1].marker === i.marker && t[n - 1].token === i.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    t[i.end + 1].token === u.token + 1, a = String.fromCharCode(i.marker), o = e.tokens[i.token];
    o.type = s ? "strong_open" : "em_open", o.tag = s ? "strong" : "em", o.nesting = 1, o.markup = s ? a + a : a, o.content = "";
    const c = e.tokens[u.token];
    c.type = s ? "strong_close" : "em_close", c.tag = s ? "strong" : "em", c.nesting = -1, c.markup = s ? a + a : a, c.content = "", s && (e.tokens[t[n - 1].token].content = "", e.tokens[t[i.end + 1].token].content = "", n--);
  }
}
function Ud(e) {
  const t = e.tokens_meta, r = e.tokens_meta.length;
  na(e, e.delimiters);
  for (let n = 0; n < r; n++)
    t[n] && t[n].delimiters && na(e, t[n].delimiters);
}
const qo = {
  tokenize: zd,
  postProcess: Ud
};
function Hd(e, t) {
  let r, n, i, u, s = "", a = "", o = e.pos, c = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const f = e.pos, p = e.posMax, l = e.pos + 1, h = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (h < 0)
    return !1;
  let d = h + 1;
  if (d < p && e.src.charCodeAt(d) === 40) {
    for (c = !1, d++; d < p && (r = e.src.charCodeAt(d), !(!be(r) && r !== 10)); d++)
      ;
    if (d >= p)
      return !1;
    if (o = d, i = e.md.helpers.parseLinkDestination(e.src, d, e.posMax), i.ok) {
      for (s = e.md.normalizeLink(i.str), e.md.validateLink(s) ? d = i.pos : s = "", o = d; d < p && (r = e.src.charCodeAt(d), !(!be(r) && r !== 10)); d++)
        ;
      if (i = e.md.helpers.parseLinkTitle(e.src, d, e.posMax), d < p && o !== d && i.ok)
        for (a = i.str, d = i.pos; d < p && (r = e.src.charCodeAt(d), !(!be(r) && r !== 10)); d++)
          ;
    }
    (d >= p || e.src.charCodeAt(d) !== 41) && (c = !0), d++;
  }
  if (c) {
    if (typeof e.env.references > "u")
      return !1;
    if (d < p && e.src.charCodeAt(d) === 91 ? (o = d + 1, d = e.md.helpers.parseLinkLabel(e, d), d >= 0 ? n = e.src.slice(o, d++) : d = h + 1) : d = h + 1, n || (n = e.src.slice(l, h)), u = e.env.references[wi(n)], !u)
      return e.pos = f, !1;
    s = u.href, a = u.title;
  }
  if (!t) {
    e.pos = l, e.posMax = h;
    const _ = e.push("link_open", "a", 1), w = [["href", s]];
    _.attrs = w, a && w.push(["title", a]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = d, e.posMax = p, !0;
}
function qd(e, t) {
  let r, n, i, u, s, a, o, c, f = "";
  const p = e.pos, l = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const h = e.pos + 2, d = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (d < 0)
    return !1;
  if (u = d + 1, u < l && e.src.charCodeAt(u) === 40) {
    for (u++; u < l && (r = e.src.charCodeAt(u), !(!be(r) && r !== 10)); u++)
      ;
    if (u >= l)
      return !1;
    for (c = u, a = e.md.helpers.parseLinkDestination(e.src, u, e.posMax), a.ok && (f = e.md.normalizeLink(a.str), e.md.validateLink(f) ? u = a.pos : f = ""), c = u; u < l && (r = e.src.charCodeAt(u), !(!be(r) && r !== 10)); u++)
      ;
    if (a = e.md.helpers.parseLinkTitle(e.src, u, e.posMax), u < l && c !== u && a.ok)
      for (o = a.str, u = a.pos; u < l && (r = e.src.charCodeAt(u), !(!be(r) && r !== 10)); u++)
        ;
    else
      o = "";
    if (u >= l || e.src.charCodeAt(u) !== 41)
      return e.pos = p, !1;
    u++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (u < l && e.src.charCodeAt(u) === 91 ? (c = u + 1, u = e.md.helpers.parseLinkLabel(e, u), u >= 0 ? i = e.src.slice(c, u++) : u = d + 1) : u = d + 1, i || (i = e.src.slice(h, d)), s = e.env.references[wi(i)], !s)
      return e.pos = p, !1;
    f = s.href, o = s.title;
  }
  if (!t) {
    n = e.src.slice(h, d);
    const _ = [];
    e.md.inline.parse(
      n,
      e.md,
      e.env,
      _
    );
    const w = e.push("image", "img", 0), C = [["src", f], ["alt", ""]];
    w.attrs = C, w.children = _, w.content = n, o && C.push(["title", o]);
  }
  return e.pos = u, e.posMax = l, !0;
}
const Gd = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, Kd = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function Zd(e, t) {
  let r = e.pos;
  if (e.src.charCodeAt(r) !== 60)
    return !1;
  const n = e.pos, i = e.posMax;
  for (; ; ) {
    if (++r >= i) return !1;
    const s = e.src.charCodeAt(r);
    if (s === 60) return !1;
    if (s === 62) break;
  }
  const u = e.src.slice(n + 1, r);
  if (Kd.test(u)) {
    const s = e.md.normalizeLink(u);
    if (!e.md.validateLink(s))
      return !1;
    if (!t) {
      const a = e.push("link_open", "a", 1);
      a.attrs = [["href", s]], a.markup = "autolink", a.info = "auto";
      const o = e.push("text", "", 0);
      o.content = e.md.normalizeLinkText(u);
      const c = e.push("link_close", "a", -1);
      c.markup = "autolink", c.info = "auto";
    }
    return e.pos += u.length + 2, !0;
  }
  if (Gd.test(u)) {
    const s = e.md.normalizeLink("mailto:" + u);
    if (!e.md.validateLink(s))
      return !1;
    if (!t) {
      const a = e.push("link_open", "a", 1);
      a.attrs = [["href", s]], a.markup = "autolink", a.info = "auto";
      const o = e.push("text", "", 0);
      o.content = e.md.normalizeLinkText(u);
      const c = e.push("link_close", "a", -1);
      c.markup = "autolink", c.info = "auto";
    }
    return e.pos += u.length + 2, !0;
  }
  return !1;
}
function Yd(e) {
  return /^<a[>\s]/i.test(e);
}
function Jd(e) {
  return /^<\/a\s*>/i.test(e);
}
function Xd(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function Qd(e, t) {
  if (!e.md.options.html)
    return !1;
  const r = e.posMax, n = e.pos;
  if (e.src.charCodeAt(n) !== 60 || n + 2 >= r)
    return !1;
  const i = e.src.charCodeAt(n + 1);
  if (i !== 33 && i !== 63 && i !== 47 && !Xd(i))
    return !1;
  const u = e.src.slice(n).match(Td);
  if (!u)
    return !1;
  if (!t) {
    const s = e.push("html_inline", "", 0);
    s.content = u[0], Yd(s.content) && e.linkLevel++, Jd(s.content) && e.linkLevel--;
  }
  return e.pos += u[0].length, !0;
}
const e1 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, t1 = /^&([a-z][a-z0-9]{1,31});/i;
function r1(e, t) {
  const r = e.pos, n = e.posMax;
  if (e.src.charCodeAt(r) !== 38 || r + 1 >= n) return !1;
  if (e.src.charCodeAt(r + 1) === 35) {
    const u = e.src.slice(r).match(e1);
    if (u) {
      if (!t) {
        const s = u[1][0].toLowerCase() === "x" ? parseInt(u[1].slice(1), 16) : parseInt(u[1], 10), a = e.push("text_special", "", 0);
        a.content = Zu(s) ? Jr(s) : Jr(65533), a.markup = u[0], a.info = "entity";
      }
      return e.pos += u[0].length, !0;
    }
  } else {
    const u = e.src.slice(r).match(t1);
    if (u) {
      const s = vh(u[0]);
      if (s !== u[0]) {
        if (!t) {
          const a = e.push("text_special", "", 0);
          a.content = s, a.markup = u[0], a.info = "entity";
        }
        return e.pos += u[0].length, !0;
      }
    }
  }
  return !1;
}
function ia(e) {
  const t = {}, r = e.length;
  if (!r) return;
  let n = 0, i = -2;
  const u = [];
  for (let s = 0; s < r; s++) {
    const a = e[s];
    if (u.push(0), (e[n].marker !== a.marker || i !== a.token - 1) && (n = s), i = a.token, a.length = a.length || 0, !a.close) continue;
    t.hasOwnProperty(a.marker) || (t[a.marker] = [-1, -1, -1, -1, -1, -1]);
    const o = t[a.marker][(a.open ? 3 : 0) + a.length % 3];
    let c = n - u[n] - 1, f = c;
    for (; c > o; c -= u[c] + 1) {
      const p = e[c];
      if (p.marker === a.marker && p.open && p.end < 0) {
        let l = !1;
        if ((p.close || a.open) && (p.length + a.length) % 3 === 0 && (p.length % 3 !== 0 || a.length % 3 !== 0) && (l = !0), !l) {
          const h = c > 0 && !e[c - 1].open ? u[c - 1] + 1 : 0;
          u[s] = s - c + h, u[c] = h, a.open = !1, p.end = s, p.close = !1, f = -1, i = -2;
          break;
        }
      }
    }
    f !== -1 && (t[a.marker][(a.open ? 3 : 0) + (a.length || 0) % 3] = f);
  }
}
function n1(e) {
  const t = e.tokens_meta, r = e.tokens_meta.length;
  ia(e.delimiters);
  for (let n = 0; n < r; n++)
    t[n] && t[n].delimiters && ia(t[n].delimiters);
}
function i1(e) {
  let t, r, n = 0;
  const i = e.tokens, u = e.tokens.length;
  for (t = r = 0; t < u; t++)
    i[t].nesting < 0 && n--, i[t].level = n, i[t].nesting > 0 && n++, i[t].type === "text" && t + 1 < u && i[t + 1].type === "text" ? i[t + 1].content = i[t].content + i[t + 1].content : (t !== r && (i[r] = i[t]), r++);
  t !== r && (i.length = r);
}
const tu = [
  ["text", Nd],
  ["linkify", jd],
  ["newline", Bd],
  ["escape", Md],
  ["backticks", Vd],
  ["strikethrough", Ho.tokenize],
  ["emphasis", qo.tokenize],
  ["link", Hd],
  ["image", qd],
  ["autolink", Zd],
  ["html_inline", Qd],
  ["entity", r1]
], ru = [
  ["balance_pairs", n1],
  ["strikethrough", Ho.postProcess],
  ["emphasis", qo.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", i1]
];
function pn() {
  this.ruler = new Ue();
  for (let e = 0; e < tu.length; e++)
    this.ruler.push(tu[e][0], tu[e][1]);
  this.ruler2 = new Ue();
  for (let e = 0; e < ru.length; e++)
    this.ruler2.push(ru[e][0], ru[e][1]);
}
pn.prototype.skipToken = function(e) {
  const t = e.pos, r = this.ruler.getRules(""), n = r.length, i = e.md.options.maxNesting, u = e.cache;
  if (typeof u[t] < "u") {
    e.pos = u[t];
    return;
  }
  let s = !1;
  if (e.level < i) {
    for (let a = 0; a < n; a++)
      if (e.level++, s = r[a](e, !0), e.level--, s) {
        if (t >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  s || e.pos++, u[t] = e.pos;
};
pn.prototype.tokenize = function(e) {
  const t = this.ruler.getRules(""), r = t.length, n = e.posMax, i = e.md.options.maxNesting;
  for (; e.pos < n; ) {
    const u = e.pos;
    let s = !1;
    if (e.level < i) {
      for (let a = 0; a < r; a++)
        if (s = t[a](e, !1), s) {
          if (u >= e.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (s) {
      if (e.pos >= n)
        break;
      continue;
    }
    e.pending += e.src[e.pos++];
  }
  e.pending && e.pushPending();
};
pn.prototype.parse = function(e, t, r, n) {
  const i = new this.State(e, t, r, n);
  this.tokenize(i);
  const u = this.ruler2.getRules(""), s = u.length;
  for (let a = 0; a < s; a++)
    u[a](i);
};
pn.prototype.State = fn;
function u1(e) {
  const t = {};
  e = e || {}, t.src_Any = Fo.source, t.src_Cc = Po.source, t.src_Z = No.source, t.src_P = Gu.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const r = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + r + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + r + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + r + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + r + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function Tu(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(r) {
    r && Object.keys(r).forEach(function(n) {
      e[n] = r[n];
    });
  }), e;
}
function Ei(e) {
  return Object.prototype.toString.call(e);
}
function s1(e) {
  return Ei(e) === "[object String]";
}
function a1(e) {
  return Ei(e) === "[object Object]";
}
function o1(e) {
  return Ei(e) === "[object RegExp]";
}
function ua(e) {
  return Ei(e) === "[object Function]";
}
function c1(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const Go = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function l1(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t || Go.hasOwnProperty(r);
  }, !1);
}
const f1 = {
  "http:": {
    validate: function(e, t, r) {
      const n = e.slice(t);
      return r.re.http || (r.re.http = new RegExp(
        "^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path,
        "i"
      )), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(e, t, r) {
      const n = e.slice(t);
      return r.re.no_http || (r.re.no_http = new RegExp(
        "^" + r.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path,
        "i"
      )), r.re.no_http.test(n) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : n.match(r.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(e, t, r) {
      const n = e.slice(t);
      return r.re.mailto || (r.re.mailto = new RegExp(
        "^" + r.re.src_email_name + "@" + r.re.src_host_strict,
        "i"
      )), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0;
    }
  }
}, p1 = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", h1 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function d1(e) {
  return function(t, r) {
    const n = t.slice(r);
    return e.test(n) ? n.match(e)[0].length : 0;
  };
}
function sa() {
  return function(e, t) {
    t.normalize(e);
  };
}
function Qn(e) {
  const t = e.re = u1(e.__opts__), r = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || r.push(p1), r.push(t.src_xn), t.src_tlds = r.join("|");
  function n(a) {
    return a.replace("%TLDS%", t.src_tlds);
  }
  t.email_fuzzy = RegExp(n(t.tpl_email_fuzzy), "i"), t.email_fuzzy_global = RegExp(n(t.tpl_email_fuzzy), "ig"), t.link_fuzzy = RegExp(n(t.tpl_link_fuzzy), "i"), t.link_fuzzy_global = RegExp(n(t.tpl_link_fuzzy), "ig"), t.link_no_ip_fuzzy = RegExp(n(t.tpl_link_no_ip_fuzzy), "i"), t.link_no_ip_fuzzy_global = RegExp(n(t.tpl_link_no_ip_fuzzy), "ig"), t.host_fuzzy_test = RegExp(n(t.tpl_host_fuzzy_test), "i");
  const i = [];
  e.__compiled__ = {};
  function u(a, o) {
    throw new Error('(LinkifyIt) Invalid schema "' + a + '": ' + o);
  }
  Object.keys(e.__schemas__).forEach(function(a) {
    const o = e.__schemas__[a];
    if (o === null)
      return;
    const c = { validate: null, link: null };
    if (e.__compiled__[a] = c, a1(o)) {
      o1(o.validate) ? c.validate = d1(o.validate) : ua(o.validate) ? c.validate = o.validate : u(a, o), ua(o.normalize) ? c.normalize = o.normalize : o.normalize ? u(a, o) : c.normalize = sa();
      return;
    }
    if (s1(o)) {
      i.push(a);
      return;
    }
    u(a, o);
  }), i.forEach(function(a) {
    e.__compiled__[e.__schemas__[a]] && (e.__compiled__[a].validate = e.__compiled__[e.__schemas__[a]].validate, e.__compiled__[a].normalize = e.__compiled__[e.__schemas__[a]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: sa() };
  const s = Object.keys(e.__compiled__).filter(function(a) {
    return a.length > 0 && e.__compiled__[a];
  }).map(c1).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + s + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + s + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  );
}
function Ko(e, t, r, n) {
  const i = e.slice(r, n);
  this.schema = t.toLowerCase(), this.index = r, this.lastIndex = n, this.raw = i, this.text = i, this.url = i;
}
function Xe(e, t) {
  if (!(this instanceof Xe))
    return new Xe(e, t);
  t || l1(e) && (t = e, e = {}), this.__opts__ = Tu({}, Go, t), this.__schemas__ = Tu({}, f1, e), this.__compiled__ = {}, this.__tlds__ = h1, this.__tlds_replaced__ = !1, this.re = {}, Qn(this);
}
Xe.prototype.add = function(t, r) {
  return this.__schemas__[t] = r, Qn(this), this;
};
Xe.prototype.set = function(t) {
  return this.__opts__ = Tu(this.__opts__, t), this;
};
Xe.prototype.test = function(t) {
  if (!t.length)
    return !1;
  let r, n;
  if (this.re.schema_test.test(t)) {
    for (n = this.re.schema_search, n.lastIndex = 0; (r = n.exec(t)) !== null; )
      if (this.testSchemaAt(t, r[2], n.lastIndex))
        return !0;
  }
  return !!(this.__opts__.fuzzyLink && this.__compiled__["http:"] && t.search(this.re.host_fuzzy_test) >= 0 && t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy) !== null || this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && t.indexOf("@") >= 0 && t.match(this.re.email_fuzzy) !== null);
};
Xe.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
Xe.prototype.testSchemaAt = function(t, r, n) {
  return this.__compiled__[r.toLowerCase()] ? this.__compiled__[r.toLowerCase()].validate(t, n, this) : 0;
};
Xe.prototype.match = function(t) {
  const r = [], n = [], i = [], u = [];
  let s, a, o;
  function c(l, h) {
    return l ? h ? l.index !== h.index ? l.index < h.index ? l : h : l.lastIndex >= h.lastIndex ? l : h : l : h;
  }
  if (!t.length)
    return null;
  if (this.re.schema_test.test(t))
    for (o = this.re.schema_search, o.lastIndex = 0; (s = o.exec(t)) !== null; )
      a = this.testSchemaAt(t, s[2], o.lastIndex), a && n.push({
        schema: s[2],
        index: s.index + s[1].length,
        lastIndex: s.index + s[0].length + a
      });
  if (this.__opts__.fuzzyLink && this.__compiled__["http:"])
    for (o = this.__opts__.fuzzyIP ? this.re.link_fuzzy_global : this.re.link_no_ip_fuzzy_global, o.lastIndex = 0; (s = o.exec(t)) !== null; )
      i.push({
        schema: "",
        index: s.index + s[1].length,
        lastIndex: s.index + s[0].length
      });
  if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"])
    for (o = this.re.email_fuzzy_global, o.lastIndex = 0; (s = o.exec(t)) !== null; )
      u.push({
        schema: "mailto:",
        index: s.index + s[1].length,
        lastIndex: s.index + s[0].length
      });
  const f = [0, 0, 0];
  let p = 0;
  for (; ; ) {
    const l = [
      n[f[0]],
      u[f[1]],
      i[f[2]]
    ], h = c(c(l[0], l[1]), l[2]);
    if (!h)
      break;
    if (h === l[0] ? f[0]++ : h === l[1] ? f[1]++ : f[2]++, h.index < p)
      continue;
    const d = new Ko(t, h.schema, h.index, h.lastIndex);
    this.__compiled__[d.schema].normalize(d, this), r.push(d), p = h.lastIndex;
  }
  return r.length ? r : null;
};
Xe.prototype.matchAtStart = function(t) {
  if (!t.length) return null;
  const r = this.re.schema_at_start.exec(t);
  if (!r) return null;
  const n = this.testSchemaAt(t, r[2], r[0].length);
  if (!n) return null;
  const i = new Ko(t, r[2], r.index + r[1].length, r.index + r[0].length + n);
  return this.__compiled__[i.schema].normalize(i, this), i;
};
Xe.prototype.tlds = function(t, r) {
  return t = Array.isArray(t) ? t : [t], r ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(n, i, u) {
    return n !== u[i - 1];
  }).reverse(), Qn(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, Qn(this), this);
};
Xe.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Xe.prototype.onCompile = function() {
};
const Er = 2147483647, yt = 36, Xu = 1, tn = 26, m1 = 38, b1 = 700, Zo = 72, Yo = 128, Jo = "-", g1 = /^xn--/, y1 = /[^\0-\x7F]/, x1 = /[\x2E\u3002\uFF0E\uFF61]/g, _1 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, nu = yt - Xu, xt = Math.floor, iu = String.fromCharCode;
function $t(e) {
  throw new RangeError(_1[e]);
}
function v1(e, t) {
  const r = [];
  let n = e.length;
  for (; n--; )
    r[n] = t(e[n]);
  return r;
}
function Xo(e, t) {
  const r = e.split("@");
  let n = "";
  r.length > 1 && (n = r[0] + "@", e = r[1]), e = e.replace(x1, ".");
  const i = e.split("."), u = v1(i, t).join(".");
  return n + u;
}
function Qo(e) {
  const t = [];
  let r = 0;
  const n = e.length;
  for (; r < n; ) {
    const i = e.charCodeAt(r++);
    if (i >= 55296 && i <= 56319 && r < n) {
      const u = e.charCodeAt(r++);
      (u & 64512) == 56320 ? t.push(((i & 1023) << 10) + (u & 1023) + 65536) : (t.push(i), r--);
    } else
      t.push(i);
  }
  return t;
}
const w1 = (e) => String.fromCodePoint(...e), k1 = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : yt;
}, aa = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, ec = function(e, t, r) {
  let n = 0;
  for (e = r ? xt(e / b1) : e >> 1, e += xt(e / t); e > nu * tn >> 1; n += yt)
    e = xt(e / nu);
  return xt(n + (nu + 1) * e / (e + m1));
}, tc = function(e) {
  const t = [], r = e.length;
  let n = 0, i = Yo, u = Zo, s = e.lastIndexOf(Jo);
  s < 0 && (s = 0);
  for (let a = 0; a < s; ++a)
    e.charCodeAt(a) >= 128 && $t("not-basic"), t.push(e.charCodeAt(a));
  for (let a = s > 0 ? s + 1 : 0; a < r; ) {
    const o = n;
    for (let f = 1, p = yt; ; p += yt) {
      a >= r && $t("invalid-input");
      const l = k1(e.charCodeAt(a++));
      l >= yt && $t("invalid-input"), l > xt((Er - n) / f) && $t("overflow"), n += l * f;
      const h = p <= u ? Xu : p >= u + tn ? tn : p - u;
      if (l < h)
        break;
      const d = yt - h;
      f > xt(Er / d) && $t("overflow"), f *= d;
    }
    const c = t.length + 1;
    u = ec(n - o, c, o == 0), xt(n / c) > Er - i && $t("overflow"), i += xt(n / c), n %= c, t.splice(n++, 0, i);
  }
  return String.fromCodePoint(...t);
}, rc = function(e) {
  const t = [];
  e = Qo(e);
  const r = e.length;
  let n = Yo, i = 0, u = Zo;
  for (const o of e)
    o < 128 && t.push(iu(o));
  const s = t.length;
  let a = s;
  for (s && t.push(Jo); a < r; ) {
    let o = Er;
    for (const f of e)
      f >= n && f < o && (o = f);
    const c = a + 1;
    o - n > xt((Er - i) / c) && $t("overflow"), i += (o - n) * c, n = o;
    for (const f of e)
      if (f < n && ++i > Er && $t("overflow"), f === n) {
        let p = i;
        for (let l = yt; ; l += yt) {
          const h = l <= u ? Xu : l >= u + tn ? tn : l - u;
          if (p < h)
            break;
          const d = p - h, _ = yt - h;
          t.push(
            iu(aa(h + d % _, 0))
          ), p = xt(d / _);
        }
        t.push(iu(aa(p, 0))), u = ec(i, c, a === s), i = 0, ++a;
      }
    ++i, ++n;
  }
  return t.join("");
}, C1 = function(e) {
  return Xo(e, function(t) {
    return g1.test(t) ? tc(t.slice(4).toLowerCase()) : t;
  });
}, E1 = function(e) {
  return Xo(e, function(t) {
    return y1.test(t) ? "xn--" + rc(t) : t;
  });
}, nc = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: Qo,
    encode: w1
  },
  decode: tc,
  encode: rc,
  toASCII: E1,
  toUnicode: C1
}, A1 = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, S1 = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, T1 = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, D1 = {
  default: A1,
  zero: S1,
  commonmark: T1
}, O1 = /^(vbscript|javascript|file|data):/, I1 = /^data:image\/(gif|png|jpeg|webp);/;
function F1(e) {
  const t = e.trim().toLowerCase();
  return O1.test(t) ? I1.test(t) : !0;
}
const ic = ["http:", "https:", "mailto:"];
function P1(e) {
  const t = qu(e, !0);
  if (t.hostname && (!t.protocol || ic.indexOf(t.protocol) >= 0))
    try {
      t.hostname = nc.toASCII(t.hostname);
    } catch {
    }
  return ln(Hu(t));
}
function L1(e) {
  const t = qu(e, !0);
  if (t.hostname && (!t.protocol || ic.indexOf(t.protocol) >= 0))
    try {
      t.hostname = nc.toUnicode(t.hostname);
    } catch {
    }
  return Ar(Hu(t), Ar.defaultChars + "%");
}
function Me(e, t) {
  if (!(this instanceof Me))
    return new Me(e, t);
  t || Ku(e) || (t = e || {}, e = "default"), this.inline = new pn(), this.block = new Ci(), this.core = new Yu(), this.renderer = new Lr(), this.linkify = new Xe(), this.validateLink = F1, this.normalizeLink = P1, this.normalizeLinkText = L1, this.utils = jh, this.helpers = vi({}, $h), this.options = {}, this.configure(e), t && this.set(t);
}
Me.prototype.set = function(e) {
  return vi(this.options, e), this;
};
Me.prototype.configure = function(e) {
  const t = this;
  if (Ku(e)) {
    const r = e;
    if (e = D1[r], !e)
      throw new Error('Wrong `markdown-it` preset "' + r + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(r) {
    e.components[r].rules && t[r].ruler.enableOnly(e.components[r].rules), e.components[r].rules2 && t[r].ruler2.enableOnly(e.components[r].rules2);
  }), this;
};
Me.prototype.enable = function(e, t) {
  let r = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(i) {
    r = r.concat(this[i].ruler.enable(e, !0));
  }, this), r = r.concat(this.inline.ruler2.enable(e, !0));
  const n = e.filter(function(i) {
    return r.indexOf(i) < 0;
  });
  if (n.length && !t)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
  return this;
};
Me.prototype.disable = function(e, t) {
  let r = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(i) {
    r = r.concat(this[i].ruler.disable(e, !0));
  }, this), r = r.concat(this.inline.ruler2.disable(e, !0));
  const n = e.filter(function(i) {
    return r.indexOf(i) < 0;
  });
  if (n.length && !t)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
  return this;
};
Me.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
Me.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const r = new this.core.State(e, this, t);
  return this.core.process(r), r.tokens;
};
Me.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
Me.prototype.parseInline = function(e, t) {
  const r = new this.core.State(e, this, t);
  return r.inlineMode = !0, this.core.process(r), r.tokens;
};
Me.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
var oa = !1, Tr = { false: "push", true: "unshift", after: "push", before: "unshift" }, ei = { isPermalinkSymbol: !0 };
function Du(e, t, r, n) {
  var i;
  if (!oa) {
    var u = "Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#permalinks";
    typeof process == "object" && process && process.emitWarning ? process.emitWarning(u) : console.warn(u), oa = !0;
  }
  var s = [Object.assign(new r.Token("link_open", "a", 1), { attrs: [].concat(t.permalinkClass ? [["class", t.permalinkClass]] : [], [["href", t.permalinkHref(e, r)]], Object.entries(t.permalinkAttrs(e, r))) }), Object.assign(new r.Token("html_block", "", 0), { content: t.permalinkSymbol, meta: ei }), new r.Token("link_close", "a", -1)];
  t.permalinkSpace && r.tokens[n + 1].children[Tr[t.permalinkBefore]](Object.assign(new r.Token("text", "", 0), { content: " " })), (i = r.tokens[n + 1].children)[Tr[t.permalinkBefore]].apply(i, s);
}
function uc(e) {
  return "#" + e;
}
function sc(e) {
  return {};
}
var N1 = { class: "header-anchor", symbol: "#", renderHref: uc, renderAttrs: sc };
function hn(e) {
  function t(r) {
    return r = Object.assign({}, t.defaults, r), function(n, i, u, s) {
      return e(n, r, i, u, s);
    };
  }
  return t.defaults = Object.assign({}, N1), t.renderPermalinkImpl = e, t;
}
function Qu(e) {
  var t = [], r = e.filter(function(n) {
    if (n[0] !== "class") return !0;
    t.push(n[1]);
  });
  return t.length > 0 && r.unshift(["class", t.join(" ")]), r;
}
var Ai = hn(function(e, t, r, n, i) {
  var u, s = [Object.assign(new n.Token("link_open", "a", 1), { attrs: Qu([].concat(t.class ? [["class", t.class]] : [], [["href", t.renderHref(e, n)]], t.ariaHidden ? [["aria-hidden", "true"]] : [], Object.entries(t.renderAttrs(e, n)))) }), Object.assign(new n.Token("html_inline", "", 0), { content: t.symbol, meta: ei }), new n.Token("link_close", "a", -1)];
  if (t.space) {
    var a = typeof t.space == "string" ? t.space : " ";
    n.tokens[i + 1].children[Tr[t.placement]](Object.assign(new n.Token(typeof t.space == "string" ? "html_inline" : "text", "", 0), { content: a }));
  }
  (u = n.tokens[i + 1].children)[Tr[t.placement]].apply(u, s);
});
Object.assign(Ai.defaults, { space: !0, placement: "after", ariaHidden: !1 });
var ur = hn(Ai.renderPermalinkImpl);
ur.defaults = Object.assign({}, Ai.defaults, { ariaHidden: !0 });
var ac = hn(function(e, t, r, n, i) {
  var u = [Object.assign(new n.Token("link_open", "a", 1), { attrs: Qu([].concat(t.class ? [["class", t.class]] : [], [["href", t.renderHref(e, n)]], Object.entries(t.renderAttrs(e, n)))) })].concat(t.safariReaderFix ? [new n.Token("span_open", "span", 1)] : [], n.tokens[i + 1].children, t.safariReaderFix ? [new n.Token("span_close", "span", -1)] : [], [new n.Token("link_close", "a", -1)]);
  n.tokens[i + 1] = Object.assign(new n.Token("inline", "", 0), { children: u });
});
Object.assign(ac.defaults, { safariReaderFix: !1 });
var ca = hn(function(e, t, r, n, i) {
  var u;
  if (!["visually-hidden", "aria-label", "aria-describedby", "aria-labelledby"].includes(t.style)) throw new Error("`permalink.linkAfterHeader` called with unknown style option `" + t.style + "`");
  if (!["aria-describedby", "aria-labelledby"].includes(t.style) && !t.assistiveText) throw new Error("`permalink.linkAfterHeader` called without the `assistiveText` option in `" + t.style + "` style");
  if (t.style === "visually-hidden" && !t.visuallyHiddenClass) throw new Error("`permalink.linkAfterHeader` called without the `visuallyHiddenClass` option in `visually-hidden` style");
  var s = n.tokens[i + 1].children.filter(function(p) {
    return p.type === "text" || p.type === "code_inline";
  }).reduce(function(p, l) {
    return p + l.content;
  }, ""), a = [], o = [];
  if (t.class && o.push(["class", t.class]), o.push(["href", t.renderHref(e, n)]), o.push.apply(o, Object.entries(t.renderAttrs(e, n))), t.style === "visually-hidden") {
    if (a.push(Object.assign(new n.Token("span_open", "span", 1), { attrs: [["class", t.visuallyHiddenClass]] }), Object.assign(new n.Token("text", "", 0), { content: t.assistiveText(s) }), new n.Token("span_close", "span", -1)), t.space) {
      var c = typeof t.space == "string" ? t.space : " ";
      a[Tr[t.placement]](Object.assign(new n.Token(typeof t.space == "string" ? "html_inline" : "text", "", 0), { content: c }));
    }
    a[Tr[t.placement]](Object.assign(new n.Token("span_open", "span", 1), { attrs: [["aria-hidden", "true"]] }), Object.assign(new n.Token("html_inline", "", 0), { content: t.symbol, meta: ei }), new n.Token("span_close", "span", -1));
  } else a.push(Object.assign(new n.Token("html_inline", "", 0), { content: t.symbol, meta: ei }));
  t.style === "aria-label" ? o.push(["aria-label", t.assistiveText(s)]) : ["aria-describedby", "aria-labelledby"].includes(t.style) && o.push([t.style, e]);
  var f = [Object.assign(new n.Token("link_open", "a", 1), { attrs: Qu(o) })].concat(a, [new n.Token("link_close", "a", -1)]);
  (u = n.tokens).splice.apply(u, [i + 3, 0].concat(f)), t.wrapper && (n.tokens.splice(i, 0, Object.assign(new n.Token("html_block", "", 0), { content: t.wrapper[0] + `
` })), n.tokens.splice(i + 3 + f.length + 1, 0, Object.assign(new n.Token("html_block", "", 0), { content: t.wrapper[1] + `
` })));
});
function la(e, t, r, n) {
  var i = e, u = n;
  if (r && Object.prototype.hasOwnProperty.call(t, i)) throw new Error("User defined `id` attribute `" + e + "` is not unique. Please fix it in your Markdown to continue.");
  for (; Object.prototype.hasOwnProperty.call(t, i); ) i = e + "-" + u, u += 1;
  return t[i] = !0, i;
}
function _t(e, t) {
  t = Object.assign({}, _t.defaults, t), e.core.ruler.push("anchor", function(r) {
    for (var n, i = {}, u = r.tokens, s = Array.isArray(t.level) ? (n = t.level, function(p) {
      return n.includes(p);
    }) : /* @__PURE__ */ (function(p) {
      return function(l) {
        return l >= p;
      };
    })(t.level), a = 0; a < u.length; a++) {
      var o = u[a];
      if (o.type === "heading_open" && s(Number(o.tag.substr(1)))) {
        var c = t.getTokensText(u[a + 1].children), f = o.attrGet("id");
        f = f == null ? la(f = t.slugifyWithState ? t.slugifyWithState(c, r) : t.slugify(c), i, !1, t.uniqueSlugStartIndex) : la(f, i, !0, t.uniqueSlugStartIndex), o.attrSet("id", f), t.tabIndex !== !1 && o.attrSet("tabindex", "" + t.tabIndex), typeof t.permalink == "function" ? t.permalink(f, t, r, a) : (t.permalink || t.renderPermalink && t.renderPermalink !== Du) && t.renderPermalink(f, t, r, a), a = u.indexOf(o), t.callback && t.callback(o, { slug: f, title: c });
      }
    }
  });
}
Object.assign(ca.defaults, { style: "visually-hidden", space: !0, placement: "after", wrapper: null }), _t.permalink = { __proto__: null, legacy: Du, renderHref: uc, renderAttrs: sc, makePermalink: hn, linkInsideHeader: Ai, ariaHidden: ur, headerLink: ac, linkAfterHeader: ca }, _t.defaults = { level: 1, slugify: function(e) {
  return encodeURIComponent(String(e).trim().toLowerCase().replace(/\s+/g, "-"));
}, uniqueSlugStartIndex: 1, tabIndex: "-1", getTokensText: function(e) {
  return e.filter(function(t) {
    return ["text", "code_inline"].includes(t.type);
  }).map(function(t) {
    return t.content;
  }).join("");
}, permalink: !1, renderPermalink: Du, permalinkClass: ur.defaults.class, permalinkSpace: ur.defaults.space, permalinkSymbol: "¶", permalinkBefore: ur.defaults.placement === "before", permalinkHref: ur.defaults.renderHref, permalinkAttrs: ur.defaults.renderAttrs }, _t.default = _t;
const es = (e) => e && (e.default || e), R1 = es(Au), j1 = es(Me), ti = es(_t);
_t.permalink && !ti.permalink && (ti.permalink = _t.permalink);
const Cr = "", B1 = new RegExp(Cr + "([A-Za-z0-9+/=]*)" + Cr, "g"), M1 = {
  name: "WBHtml",
  props: {
    /**
     * HTML content to render. Supports WBC's custom markup syntax including
     * [[component|styles|link]] patterns, {{wrapper}}content{{/wrapper}} syntax,
     * multilingual objects, and markdown. Can be a string, object, or array.
     * @type {string|object|array}
     * @default null
     */
    html: null
  },
  // --- Eval trust boundary (security) ---
  // Inherit the ancestor WBC's "untrusted" verdict and re-provide it, so nested
  // WBC/WBHtml below an untrusted root keep evaluating in the AST sandbox. See
  // utils/security.js and the `untrusted` prop on WBC.
  inject: {
    wbcUntrustedInjected: { default: !1 }
  },
  provide() {
    return { wbcUntrustedInjected: this.wbcUntrustedInjected === !0 };
  },
  data() {
    return {
      viewMeta: null,
      html_: this.html || "",
      MarkdownIt: new j1({
        html: !0,
        linkify: !0,
        typographer: !0,
        breaks: !1
      }).use(ti, {
        permalink: ti.permalink.headerLink({
          safariReaderFix: !0
        }),
        slugify: (e) => e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
      })
    };
  },
  render(e) {
    let t = this.mainRender(this.html_, e);
    return typeof t == "string" ? e("span", { key: `${this.html_}` }, t) : Array.isArray(t) ? e("span", { key: `${this.html_}` }, [t]) : this.mainRender(this.html_, e);
  },
  methods: {
    mainRender(e, t) {
      try {
        return this._mainRender(e, t);
      } catch (r) {
        const n = typeof e == "string" ? e : JSON.stringify(e);
        console.error(`-WBHtml Error-:
[message]:${r.message}
[error]:${r}
[html]:${n}`);
        const i = n.length > 80 ? n.slice(0, 80) + "…" : n;
        return t("div", {
          style: {
            padding: "10px",
            margin: "10px",
            border: "1px solid #ff5252",
            borderRadius: "4px",
            backgroundColor: "#fff1f1",
            color: "#c62828",
            fontFamily: "sans-serif",
            fontSize: "13px"
          }
        }, [
          t("div", { style: { fontWeight: "bold", marginBottom: "5px" } }, `#WBHtmlError: ${r.message}`),
          t("div", { style: { fontSize: "12px", opacity: 0.85, marginTop: "4px", wordBreak: "break-all" } }, `Source: ${i}`)
        ]);
      }
    },
    _mainRender(e, t) {
      var u, s, a, o;
      const r = this._parsePipeForm(e);
      if (r) return t("WBC", { props: { item: r } });
      let n = this.objLang(e, (s = (u = this == null ? void 0 : this.$store) == null ? void 0 : u.state) == null ? void 0 : s.lg), i = this.styling(n);
      if (i) {
        if (["string", "number", "boolean"].includes(typeof i))
          return t("span", {
            domProps: {
              innerHTML: this.sanitizeHtml(this.strToObj(i))
              // innerHTML: this.strToObj(el),
            }
          }).children;
        if (Array.isArray(i)) {
          let c = [];
          return i.forEach((f) => {
            var C, D, F, S, E, k;
            let p = [];
            for (let O of (f == null ? void 0 : f[1]) || []) {
              let L, Y, Q = typeof O == "string" ? null : this.strToObj(O == null ? void 0 : O[2]), W = typeof O == "string" ? O : O[0], ee;
              if (O[0].trimStart().startsWith("~"))
                ee = "WBC", W = O[0];
              else if (O[0].includes("__")) {
                let ne = O[0].split("__")[0];
                /^[a-zA-Z][a-zA-Z0-9-]*$/.test(ne.trim()) ? (ee = ne, W = O[0].split("__").slice(1).join("__")) : W = O[0];
              }
              if (ee && (ee = ee.trim()), ee && ee !== "WBC" && ee !== "MD" && !/^[a-zA-Z][a-zA-Z0-9-]*$/.test(ee))
                throw new Error(`Bad tag "${ee}"`);
              if (typeof O == "string" ? (Y = {}, L = {}) : O != null && O[1] && ((C = O == null ? void 0 : O[1]) != null && C.includes("__")) ? (Y = this.strToObj((D = O[1].split("__")) == null ? void 0 : D[0]), L = this.strToObj(O[1].split("__").slice(1).join("__"))) : (Y = {}, L = this.strToObj((O == null ? void 0 : O[1]) || {})), typeof L == "string" && (L = { class: L }), typeof Y == "string" && (Y = { class: Y }), ["", "null", "undefined"].includes(typeof O == "string" ? O : O[0]))
                return t("div", {}, ["null"]);
              {
                let ne;
                if (typeof W == "string" && (W != null && W.startsWith("./")) ? ee = "WBC" : ee == "MD" && typeof W == "string" && (W = this.MarkdownIt.render(W)), this.isNonEmpty(Q) ? ne = t("WBLink", {
                  ...ee == "MD" ? {
                    ...L,
                    class: "markdown-body " + ((L == null ? void 0 : L.class) || "")
                  } : L,
                  props: {
                    to: this.strToObj(O[2]),
                    html: W,
                    style_: {},
                    attrs_: {}
                  }
                }) : ee == "WBC" || (L ? ne = t("span", {
                  ...L,
                  domProps: {
                    innerHTML: this.sanitizeHtml(this.objLang(
                      this.strToObj(W),
                      (S = (F = this == null ? void 0 : this.$store) == null ? void 0 : F.state) == null ? void 0 : S.lg
                    ))
                  }
                }) : ne = this.objLang(
                  this.strToObj(W),
                  (k = (E = this == null ? void 0 : this.$store) == null ? void 0 : E.state) == null ? void 0 : k.lg
                )), ee)
                  if (ee == "tex" || ee == "latex" || `${ee}`.toLowerCase() == "latex") {
                    let P;
                    ee == "tex" ? P = [
                      t("WBLatex", {
                        ...L,
                        props: {
                          expression: W
                        }
                      })
                    ] : P = this.parseTexFile(W || "").map((x) => {
                      if (x.type === "text")
                        return t("div", [
                          t("WBHtml", {
                            props: {
                              html: x.content + " "
                            }
                          })
                        ]);
                      if (x.type === "math")
                        return t("WBLatex", {
                          props: {
                            expression: x.expression,
                            "display-mode": x.displayMode ?? !1
                          }
                        });
                      if (x.type === "mixed")
                        return t(
                          "div",
                          { class: "d-inline-flex align-center" },
                          x.lineContent.map((A) => A.expression ? t("WBLatex", {
                            props: {
                              expression: A.expression,
                              "display-mode": !1
                            }
                          }) : t("WBHtml", {
                            props: { html: " " + A.content + " " }
                          }))
                        );
                    });
                    let y = t(
                      "span",
                      {
                        ...Y
                      },
                      P
                    );
                    this.isNonEmpty(Q) && (y = t("WBLink", {
                      props: {
                        to: this.strToObj(O[2]),
                        html: y,
                        style_: {},
                        attrs_: {}
                      }
                    })), p.push(y);
                  } else if (ee == "WBC") {
                    const P = W.trimStart().startsWith("~") ? W.trimStart().slice(1) : W;
                    let y = this.strToObj(P);
                    p.push(
                      t("WBC", {
                        props: { item: y }
                      })
                    );
                  } else W.startsWith("~") ? p.push(
                    t(ee, {
                      props: this.strToObj(W.slice(1))
                    })
                  ) : p.push(
                    t(
                      ee == "MD" ? "div" : this.charCoding(ee, [
                        ["&vert;", "\\|"],
                        ["&#95;&#95;", "__"],
                        ["\\", ""],
                        ["&lbrack;", "["],
                        ["&rbrack;", "]"],
                        ["&lbrace;", "{"],
                        ["&rbrace;", "}"],
                        ["&lpar;", "("],
                        ["&rpar;", ")"],
                        ["&lt;", "<"],
                        ["&gt;", ">"]
                      ]),
                      {
                        ...ee == "MD" ? {
                          ...L,
                          class: "markdown-body " + ((L == null ? void 0 : L.class) || "")
                        } : {},
                        ...Y
                      },
                      [ne]
                    )
                  );
                else
                  p.push(ne);
              }
            }
            let l = "span", h = {}, d = null;
            if (typeof f[0] == "string" && ([l, h, d] = f[0].split("|")), typeof l == "string" && (l = l.trim()), l && l !== "WBC" && l !== "MD" && !/^[a-zA-Z][a-zA-Z0-9-]*$/.test(l))
              throw new Error(`Bad tag "${l}"`);
            let _ = this.strToObj(h);
            typeof _ == "string" && (_ = {
              class: _
            }), d && (p = t("WBLink", {
              props: {
                to: this.strToObj(d),
                html: p,
                style_: {},
                attrs_: {}
              }
            }));
            let w = t(l, { ..._ }, [p]);
            c.push(w);
          }), c;
        } else if (typeof i == "object") {
          let c = this.objLang(i, (o = (a = this == null ? void 0 : this.$store) == null ? void 0 : a.state) == null ? void 0 : o.lg);
          return this.mainRender(this.styling(c), t);
        }
      } else return null;
    },
    styling(e) {
      let t = e;
      return typeof e != "string" ? `${JSON.stringify(e)}` : (typeof e == "string" && e.indexOf("[[") == 0 && (e = "{{span}}" + e), typeof e == "string" && e.indexOf("[[") != 0 && !e.startsWith("{{") && e.slice(-2) !== "]]" && (e = "{{span}}[[" + e + "]]"), typeof e == "string" && (e.includes("[[") || e.includes("]]") || e.includes("|") || e.includes("{{") || e.includes("}}")) && (e[0] != "{" || e[e.length - 1] != "}") && (t = e.split("{{").filter((r) => !!r).map(
        (r) => r.split("}}").map((n) => n.includes("[[") || n.includes("]]") ? n.replace(/\[\[/g, "**").replace(/\]\]/g, "**").split("**").filter((i) => !!i).map((i) => i.split("|")) : n)
      )), this.strToObj(t));
    },
    charCoding(e, t) {
      return typeof e != "string" || t.forEach((r) => {
        const [n, i] = r;
        e = e.split(n).join(i);
      }), e;
    },
    // Verbatim/raw-text regions (code-display panels, <script>/<style> examples, and the
    // copy-button's data-clipboard-text attribute) often contain WBC syntax being *documented*
    // — literal [[ ]] {{ }} __ | sequences. Those must NOT drive WBC's markup tokenization,
    // or the bracket/`**` pairing in styling() mis-aligns and a chunk of surrounding HTML is
    // parsed as a tag ("Bad tag"). Encode ONLY the tokenizer's marker *sequences* to entities:
    // they render as the exact same glyphs but are inert to the tokenizer. Single { [ _ are
    // left intact so real CSS/code (and legit single-char content) is untouched.
    // `*` is encoded too: styling() converts [[ ]] → `**` and SPLITS on `**`, so a literal
    // `**` in a fence (e.g. a glob `'./content/**/*.md'`) injects a phantom split boundary
    // that mis-pairs the surrounding brackets and truncates the block. `&#42;` renders as the
    // exact same glyph but carries no `**` for the splitter to trip on.
    protectCodeRegions(e) {
      if (typeof e != "string" || e.indexOf("<") === -1) return e;
      const t = (r) => r.split("[[").join("&lbrack;&lbrack;").split("]]").join("&rbrack;&rbrack;").split("{{").join("&lbrace;&lbrace;").split("}}").join("&rbrace;&rbrace;").split("__").join("&#95;&#95;").split("*").join("&#42;").split("|").join("&vert;");
      return e.replace(/<(pre|code|script|style|textarea)\b[\s\S]*?<\/\1>/gi, t).replace(/data-clipboard-text="[^"]*"/gi, t);
    },
    // ── WBC / general-component PAYLOAD protection ──────────────────────────────────
    // A WBC alias (`~{…}` / `~[…]`) or component-object payload (`WBC__{…}`, `Comp__~{…}`)
    // is an arbitrary JS object/array literal. Its braces, brackets, pipes and quotes collide
    // head-on with the WBC tokenizer (styling() splits on `{{` `}}` `[[` `]]` `|`; created()'s
    // charCoding rewrites `}}}`→`} }}` etc.) AND, for the bare (non-comment) form, markdown-it
    // has already smart-quoted (`'`→`’`) and HTML-escaped (`"`→`&quot;`) the source. Either way a
    // deeply-nested payload (`…{c13:{c131:131}}}}`) is shredded before strToObj ever sees it.
    //
    // Fix: lift each payload OUT of the tokenizer's reach. Balanced-scan the literal, normalize
    // its quotes back to straight ASCII, base64-encode it (base64's alphabet shares no character
    // with any tokenizer marker), and leave `MARK<base64>MARK` in its place. The `~`/`WBC__`/`__`
    // prefix is preserved so existing routing still recognises the block; the inert blob is then
    // decoded back to source at the strToObj parse boundary (and in display paths, as a fallback).
    protectWbcPayloads(e) {
      if (typeof e != "string") return e;
      const t = /(?:~|WBC__)(\{|\[)/g;
      let r = "", n = 0, i;
      for (; i = t.exec(e); ) {
        const u = i.index + i[0].length - 1, s = this._scanBalancedPayload(e, u);
        if (s === -1) continue;
        const a = this._normalizePayloadQuotes(e.slice(u, s));
        r += e.slice(n, u) + Cr + this._encodePayload(a) + Cr, n = s, t.lastIndex = s;
      }
      return n === 0 ? e : r + e.slice(n);
    },
    // Decode any `MARK<base64>MARK` blobs back to their raw payload source.
    unprotectWbcPayloads(e) {
      return typeof e != "string" || e.indexOf(Cr) === -1 ? e : e.replace(B1, (t, r) => this._decodePayload(r));
    },
    // Balanced scan from an opening `{`/`[`, returning the index AFTER its matching close (or -1).
    // String literals (incl. markdown-it's curly-quote pairs) are skipped so braces inside strings
    // never throw off the depth count.
    _scanBalancedPayload(e, t) {
      const r = { "'": "'", '"': '"', "`": "`", "‘": "’", "“": "”" };
      let n = 0, i = null;
      for (let u = t; u < e.length; u++) {
        const s = e[u];
        if (i) {
          if (s === "\\") {
            u++;
            continue;
          }
          s === i && (i = null);
          continue;
        }
        if (r[s]) {
          i = r[s];
          continue;
        }
        if (s === "{" || s === "[") n++;
        else if ((s === "}" || s === "]") && --n === 0)
          return u + 1;
      }
      return -1;
    },
    // Reverse markdown-it's typographic + HTML-entity mangling so the lifted payload is valid JS.
    _normalizePayloadQuotes(e) {
      return e.replace(/[‘’‚‛]/g, "'").replace(/[“”„‟]/g, '"').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#0*39;/g, "'").replace(/&#x0*27;/gi, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    },
    _encodePayload(e) {
      try {
        return btoa(unescape(encodeURIComponent(e)));
      } catch {
        try {
          return btoa(e);
        } catch {
          return e;
        }
      }
    },
    _decodePayload(e) {
      try {
        return decodeURIComponent(escape(atob(e)));
      } catch {
        try {
          return atob(e);
        } catch {
          return e;
        }
      }
    },
    // ── Dev-only shorthand explainer ───────────────────────────────────────────
    // Exposes the WBC item a shorthand string compiles to, for debugging. Only
    // available in dev builds (__WBC_DEV__). Returns null when the input is not a
    // pipe-form shorthand (legacy string markup returns null — use the component's
    // own render output to debug that path).
    explainShorthand(e) {
      return null;
    },
    // ── Pipe-form parser (internal) ────────────────────────────────────────────
    // Parses a pipe-delimited shorthand string into the WBC item it would produce.
    // Returns the compiled item (object/array) when the input matches the pipe form,
    // or null when the input is legacy string markup (falls through to styling()).
    // Throws descriptive errors on malformed input when `opts.diagnostics` is true.
    //
    // Split on ROOT-level pipes only. Pipes inside the content's array/object literal
    // (or inside quotes) belong to the inner items' own `text|class|link` markup and
    // MUST be preserved — e.g. VTabs__['44444|blue|link', …]|red__pink|HomeView has 3
    // root segments, not 5. Walk left→right tracking [ ] { } ( ) depth + quote state.
    _splitTopLevel(e, t) {
      const r = [];
      let n = 0, i = null, u = "";
      for (let s = 0; s < e.length; s++) {
        const a = e[s];
        if (i)
          u += a, a === i && e[s - 1] !== "\\" && (i = null);
        else if (a === "'" || a === '"' || a === "`")
          i = a, u += a;
        else if (a === "[" || a === "{" || a === "(")
          n++, u += a;
        else if (a === "]" || a === "}" || a === ")")
          n--, u += a;
        else if (a === "|" && n === 0) {
          if (u === "" && r.length === 0 && t != null && t.diagnostics)
            throw new Error("Pipe form segment 0 is empty");
          r.push(u), u = "";
        } else
          u += a;
      }
      if (u === "" && r.length > 0 && t != null && t.diagnostics)
        throw new Error("Pipe form ends with an empty segment");
      return r.push(u), r;
    },
    _parsePipeForm(e, t) {
      if (typeof e != "string" || !e.includes("|")) return null;
      const r = (t == null ? void 0 : t.diagnostics) === !0, n = this._splitTopLevel(e, t);
      if (n.length < 1) return null;
      let i = null, u = n[0];
      if (n[0].includes("__")) {
        const C = n[0].indexOf("__"), D = n[0].slice(0, C).trim();
        /^[a-zA-Z][a-zA-Z0-9-]*$/.test(D) && (i = D, u = n[0].slice(C + 2));
      }
      if (u.trimStart().startsWith("[[")) return null;
      const s = this.strToObj(u);
      if (!s || typeof s != "object") return null;
      if (r) {
        if (n.length > 1 && n[1] !== "" && this.strToObj(n[1]) === void 0)
          throw new Error(`Pipe segment 1 didn't parse as a WBC style/options: "${n[1]}"`);
        if (n.length > 2) {
          const C = n.slice(2).join("|");
          if (C && this.strToObj(C) === void 0)
            throw new Error(`Pipe segment 2 (link) didn't parse: "${C}"`);
        }
      }
      const a = Array.isArray(s), o = a ? [] : Object.keys(s), c = a || o.length > 0 && o.every((C) => /^\d+$/.test(C)), f = (C, D) => {
        const F = D === void 0 || D === "" ? void 0 : this.strToObj(D);
        return F && typeof F == "object" && !Array.isArray(F) ? Object.assign(C, F) : this.isNonEmpty(F) && (C.class = F), C;
      }, p = n.length > 1 ? n[1] : "";
      let l = p, h = "";
      if (p.includes("__")) {
        const C = p.indexOf("__");
        l = p.slice(0, C), h = p.slice(C + 2);
      }
      const d = n.length > 2 ? n.slice(2).join("|") : "", _ = d ? this.strToObj(d) : void 0;
      if (c) {
        let C = a ? s.slice() : o.sort((S, E) => S - E).map((S) => s[S]);
        const D = h && h.trim() ? h : "";
        D && (C = C.map(
          (S) => typeof S == "string" && S.startsWith("<") && S.endsWith(">") ? S : { options: f({ html: S }, D) }
        ));
        let F = C;
        return i && (F = ["<~" + i + "," + (l || "") + (this.isNonEmpty(_) ? "," + d : "") + ">", ...C]), F;
      }
      let w;
      if (i)
        w = {
          comp: i,
          options: {
            ...f({}, l),
            html: { a: s, options: f({}, h) }
          }
        }, this.isNonEmpty(_) && (w.options.to = _);
      else {
        const C = f({ html: s }, n.length > 1 ? n[1] : void 0);
        this.isNonEmpty(_) && (C.to = _), w = { options: C };
      }
      return w;
    },
    ...Object.fromEntries(
      Object.entries(xi).filter(
        ([e, t]) => typeof t == "function"
      )
    ),
    // Trust-aware override of the spread `strToObj` (defined AFTER the spread so it wins).
    // Forces the AST sandbox for url-supplied / untrusted subtrees.
    strToObj(e, t) {
      typeof e == "string" && e.indexOf(Cr) !== -1 && (e = this.unprotectWbcPayloads(e));
      const r = this.wbcUntrustedInjected === !0;
      return Yr(e, { trusted: !r, ...t || {} });
    }
  },
  components: {
    JsonViewer: R1,
    WBLink: _i
  },
  created() {
    typeof this.html_ == "string" && (this.html_ = this.html_.replace(
      /<!--\s*(\[\[[\s\S]*?\]\])\s*-->/g,
      "$1"
    )), this.html_ = this.protectCodeRegions(this.html_), this.html_ = this.protectWbcPayloads(this.html_), this.html_ = this.charCoding(this.html_, [
      ["<p>", "<p>[["],
      ["</p>", "]]</p>"],
      ["\\|", "&vert;"],
      ["\\__", "&#95;&#95;"],
      ["\\{", "&lbrace;"],
      ["\\}", "&rbrace;"],
      ["\\[", "&lbrack;"],
      ["\\]", "&rbrack;"],
      ["\\(", "&lpar;"],
      ["\\)", "&rpar;"],
      ["\\<", "&lt;"],
      ["\\>", "&gt;"],
      ["-->", ""],
      ["]]]", "] ]]"],
      ["[[[", "[[ ["],
      ["}}}", "} }}"],
      ["{{{", "{{ {"]
    ]);
  }
}, V1 = null, $1 = null;
var W1 = /* @__PURE__ */ Oo(
  M1,
  V1,
  $1,
  !1,
  null,
  "e028e1e6"
);
const ts = W1.exports, rn = Hn.default || Hn, oc = mu.default || mu;
rn.prototype.hasOwnProperty("$store") || rn.use(oc);
function z1(e = "lg", t = "en") {
  let r = t;
  try {
    const n = document.cookie.match(new RegExp(`(?:^|; )${e}=([^;]*)`));
    if (n && n[1])
      return decodeURIComponent(n[1]);
    const i = navigator.language || navigator.userLanguage;
    i && (r = i.split("-")[0]), document.cookie = `${e}=${encodeURIComponent(r)}; path=/; max-age=31536000; SameSite=Lax`;
  } catch (n) {
    console.warn("detectLang() failed:", n);
  }
  return r;
}
function uu() {
  try {
    const e = document.cookie.match(/(?:^|; )_wb_core_auth=([^;]*)/);
    if (e && e[1]) {
      const t = JSON.parse(decodeURIComponent(e[1]));
      if (!t.hmac) return null;
      if (t.status === "valid" && Date.now() - t.ts < 864e5)
        return { validated: !0 };
    }
  } catch {
  }
  return null;
}
const U1 = !1, H1 = !1, q1 = {
  lg: z1(),
  _wbcDev: U1,
  _wbcPro: H1,
  keyIndex: 0,
  // Unified Tier System
  tiers: {
    core: { authorized: !!uu(), details: typeof uu() == "object" ? uu() : null },
    code: { authorized: !1, details: null },
    table: { authorized: !1, details: null },
    gis: { authorized: !1, details: null },
    chart: { authorized: !1, details: null }
  },
  _wbcProValidationStarted: {}
  // Track which packages started validation
}, G1 = {
  updateLang: (e, t) => {
    e.lg = t;
  },
  updateKeyIndex: (e, t) => {
    e.keyIndex = t;
  },
  setWbcProAuthorized: (e, t) => {
    e.tiers.core || (e.tiers.core = {}), e.tiers.core.authorized = t;
  },
  setWbcProDetails: (e, t) => {
    e.tiers.core || (e.tiers.core = {}), e.tiers.core.details = t;
  },
  setTierStatus: (e, { pkg: t, authorized: r, details: n }) => {
    rn.set(e.tiers, t, { authorized: r, details: n });
  }
}, K1 = {
  lg: (e) => e.lg,
  keyIndex: (e) => e.keyIndex,
  _wbcProAuthorized: (e) => {
    var t;
    return e._wbcDev || !1 || ((t = e.tiers.core) == null ? void 0 : t.authorized);
  },
  _wbcProDetails: (e) => {
    var t;
    return e._wbcDev ? { premiumKey: "DEV_MODE", status: "active" } : (t = e.tiers.core) == null ? void 0 : t.details;
  },
  _wbcDev: (e) => e._wbcDev,
  isPackageAuthorized: (e) => (t) => !!e._wbcDev,
  isWbcPro: (e, t) => t.isPackageAuthorized("core"),
  userTier: (e, t) => (r = "core") => e._wbcDev ? "development" : "free"
}, Z1 = {
  setLang: (e, t) => {
    rn.$cookies.get("lg") ? e.commit("updateLang", t) : (e.commit("updateLang", "en"), rn.$cookies.set("lg", "en"));
  },
  setKeyIndex: (e, t) => {
    t > 1e3 ? e.commit("updateKeyIndex", 0) : e.commit("updateKeyIndex", t);
  }
};
let qr = new oc.Store({
  state: q1,
  getters: K1,
  mutations: G1,
  actions: Z1,
  modules: {}
});
const fa = !1;
let su = null;
const cc = () => (su || (su = new Fu({
  theme: {
    dark: !1,
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  icons: { iconfont: "mdi" },
  breakpoint: { mobileBreakpoint: "sm" }
})), su), Y1 = cc(), nn = {
  ...F0,
  render(e) {
    var t, r, n, i, u, s, a, o, c, f, p, l, h, d, _, w, C, D, F, S, E, k, O, L, Y, Q;
    try {
      if (this.wiki && !this.wbcWikiObj)
        return e(
          "div",
          {
            style: {
              backgroundColor: "#F8F9FA",
              color: "red",
              width: "100%",
              height: "100%",
              margin: "10px"
            }
          },
          ['#WBCWikiObjMissing: "wbc-wiki-obj" not registered']
        );
      if (this.isEmpty(this.item_))
        return null;
      const W = Sl(this, e);
      if (W)
        return W;
      let ee = {
        title: ((t = this.item_) == null ? void 0 : t.title) || ((r = this.$route) == null ? void 0 : r.name) || "-" + ((i = (n = this.$store) == null ? void 0 : n.state) == null ? void 0 : i.lg) || "en",
        ...((u = this == null ? void 0 : this.$route) == null ? void 0 : u.meta) || {},
        ...this.item_
      }, ne = this.protected_ ? this.protected_ : this.protected ?? null, P = this.load_ ? this.load_ : this.load ?? null, y = this.float_ ? this.float_ : this.float ?? null, x = this.hide_ ? this.hide_ : this.hide ?? null, A = this.close_ ? this.close_ : this.close ?? null, T = this.drag_ ? this.drag_ : this.drag ?? null, R = this.focus_ ? this.focus_ : this.focus ?? null;
      if (this.focusOn_ = this.focusOn_ ? this.focusOn_ : this.focusOn ?? null, x === !0 || this.item_ instanceof Object && ((this.isWbcPro || fa) && typeof ((s = this.item_) == null ? void 0 : s.tracker) == "function" && this.item_.tracker(this.itemAccessibility), ne = this.protected_ ? this.protected_ : ((o = (a = this.item_) == null ? void 0 : a.options) == null ? void 0 : o.protected_) ?? this.protected ?? null, P = this.load_ ? this.load_ : ((f = (c = this.item_) == null ? void 0 : c.options) == null ? void 0 : f.load) ?? this.load ?? null, y = this.float_ ? this.float_ : ((l = (p = this.item_) == null ? void 0 : p.options) == null ? void 0 : l.float) ?? this.float ?? null, x = this.hide_ ? this.hide_ : ((d = (h = this.item_) == null ? void 0 : h.options) == null ? void 0 : d.hide) ?? this.hide ?? null, A = this.close_ ? this.close_ : ((w = (_ = this.item_) == null ? void 0 : _.options) == null ? void 0 : w.close) ?? this.close ?? null, T = this.drag_ ? this.drag_ : ((D = (C = this.item_) == null ? void 0 : C.options) == null ? void 0 : D.drag) ?? this.drag ?? null, R = this.focus_ ? this.focus_ : ((S = (F = this.item_) == null ? void 0 : F.options) == null ? void 0 : S.focus) ?? this.focus ?? null, this.focusOn_ = this.focusOn_ ? this.focusOn_ : ((k = (E = this.item_) == null ? void 0 : E.options) == null ? void 0 : k.focusOn) ?? this.focusOn ?? null, ["LImageOverlay", "LVideoOverlay", "LSVGOverlay"].includes(
        (O = this.item_) == null ? void 0 : O.comp
      ) && !this.mapReady))
        return null;
      let B;
      if (ne) {
        let q = {
          comp: "VAlert",
          options: {
            html: typeof ne == "string" ? ne : `{
                en: "Forbidden access",
                fr:'Accès interdit',
                ar:'الوصول ممنوع'
                }`,
            class: "red",
            props: {
              variant: "outlined"
            },
            ...typeof ne == "object" ? ne : {}
          }
        };
        B = e("WBC", {
          key: `wbc-key-protected-${ne}`,
          props: { item: q }
        });
      } else if (P === !0 || typeof P == "object" && (P == null ? void 0 : P.active) === !0 || typeof P == "string") {
        let q = {
          comp: "VProgressCircular",
          options: {
            keyy: `load-${this.computedKey}`,
            hide: !1,
            props: {
              size: "60",
              width: "3",
              color: "grey",
              indeterminate: !0
            },
            html: typeof P == "string" ? P : "{en:'loading...',fr:'chargement...',ar:'تحميل...'}",
            ...typeof ((L = this.load_) == null ? void 0 : L.options) == "object" ? (Y = this.load_) == null ? void 0 : Y.options : {}
          }
        };
        B = e("WBC", {
          ref: "rawHtml",
          key: `wbc-key-load-${P}`,
          props: {
            item: [
              "<~VRow,pa-2 my-2 justify-center container>",
              q
            ]
          }
        });
      } else
        B = this.toWBC_(this.item_, e, this.children_, this.wrap_) || {}, this.syncVNodes(e, B), B = hf(this, e, B);
      return B = ys(this, e, B, { _float: y, _close: A, _drag: T, _focus: R }), B = bf(this, e, B), B = df(this, e, B), B = mf(this, e, B), B = gf(this, e, B, R), this.$_finalRender = B, this.updateContentRegistry(), B;
    } catch (W) {
      let ne;
      try {
        ne = typeof this.item_ == "string" ? this.item_ : (Q = JSON.stringify(this.item_, (x, A) => typeof A == "function" ? "[fn]" : A)) == null ? void 0 : Q.slice(0, 900);
      } catch {
        ne = String(this.item_);
      }
      console.error(`-WBC Error-:
[message]:${W.message}
[error]:${W}
[stack]:${W.stack}
[item]:${ne}
[PRO]:false`);
      const P = /not found/i.test(W.message || ""), y = typeof this.item_ == "string" ? this.item_ : null;
      return e("div", {
        style: {
          padding: "10px",
          margin: "10px",
          border: "1px solid #ff5252",
          borderRadius: "4px",
          backgroundColor: "#fff1f1",
          color: "#c62828",
          fontFamily: "sans-serif",
          fontSize: "13px"
        }
      }, [
        e("div", { style: { fontWeight: "bold", marginBottom: "5px" } }, `${W.message}`),
        ...P && y ? [e("div", { style: { fontSize: "12px", opacity: 0.85 } }, `Target not found: ${y}`)] : []
      ]);
    }
  },
  ...R0,
  ...j0,
  ...P0,
  ...B0,
  // --- Eval trust boundary (security) ---
  // Inherit an ancestor's "untrusted" verdict, and re-provide the effective one so the
  // whole WBC/WBHtml subtree below an untrusted root also evaluates in the AST sandbox.
  inject: {
    wbcUntrustedInjected: { default: !1 }
  },
  provide() {
    return {
      wbcUntrustedInjected: this.untrusted === !0 || this.wbcUntrustedInjected === !0
    };
  },
  methods: {
    countStr(e, t) {
      return (e.match(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
    },
    ...ol,
    // PERF-4 FIX: Batch syncVNodes calls to prevent excessive updates
    // Multiple watchers can fire in quick succession - this batches them into single call
    _scheduleSyncVNodes() {
      this.$_syncPending || (this.$_syncPending = !0, this.$nextTick(() => {
        this.$_syncPending = !1, this.syncVNodes();
      }));
    },
    update(e) {
      typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? (this.item_ = null, this.$nextTick(() => {
        this.item_ = e;
      })) : this.item_ = e;
    },
    renderDefaultWbcode(e, t, r) {
      return (e || this.$createElement)("WBCode", {
        props: {
          item: {
            code: t,
            ...r || {}
          }
        }
      });
    },
    renderDefaultWbDataViewer(e, t, r) {
      return (e || this.$createElement)("WBDataViewer", {
        props: {
          value: t,
          ...r || {}
          // output: ['editable', 'horiz', 'vert', 'wbc'],
          // sync: true,
        },
        on: {
          input: (i) => {
            this.item_ = i;
          }
        }
      });
    },
    updateContentRegistry() {
      this.content || (this.content = { input: {}, output: {} }), this.content.input = {
        ...this.content.input || {},
        item: this.item,
        item_: this.item_,
        file: { js: this.source, html: this.paragraphsFromText(this.source), md: this.$turnDown.turndown(this.paragraphsFromText(this.source)) }
      }, this.content.output = {
        html: {
          htmlObj: () => this.$el,
          html: () => {
            var e;
            return (e = this.$el) == null ? void 0 : e.outerHTML;
          },
          pureHtml: () => {
            var e;
            return this.purifyHtml((e = this.$el) == null ? void 0 : e.outerHTML);
          },
          FHtml: (e = 2) => {
            var t;
            return this.formatHtml((t = this.$el) == null ? void 0 : t.outerHTML, { indentSize: e });
          },
          FPureHtml: (e = 2) => {
            var t;
            return this.formatHtml(this.purifyHtml((t = this.$el) == null ? void 0 : t.outerHTML), { indentSize: e });
          }
        },
        md: {
          md: () => {
            var e;
            return this.$turnDown.turndown((e = this.$el) == null ? void 0 : e.outerHTML);
          },
          pureMd: () => {
            var e;
            return this.$turnDown.turndown(this.purifyHtml((e = this.$el) == null ? void 0 : e.outerHTML));
          }
        },
        vNodes: this.vNodes,
        vNode: this.$_finalRender,
        file: this.fileContent
      };
    },
    loadFile(e) {
      var r, n;
      const t = (n = (r = this.$wbcUi2Options) == null ? void 0 : r.context) == null ? void 0 : n.resolveFile;
      if (t)
        try {
          return t(e);
        } catch (i) {
          return console.error(`Failed to resolve ${e}:`, i), null;
        }
      return null;
    },
    getContext() {
      var u;
      const e = (u = this.$wbcUi2Options) == null ? void 0 : u.context, t = null;
      let r = null;
      if (typeof e == "function")
        r = e;
      else if (e && e.root)
        r = e.root;
      else {
        if (e)
          return e;
        r = t;
      }
      if (!r) {
        const s = (a) => null;
        return s.keys = () => [], s.resolve = () => {
          throw new Error("Context not available — using relative mode");
        }, s.rawSource = () => null, s.lazyImport = () => null, s.id = "relative", s.__mode = "relative", s;
      }
      if (typeof r == "function" && r.keys) {
        const s = r.keys();
        s.filter((o) => o.includes("homeMd")).length === 0 && s.length > 0 && console.warn("[WBC DEBUG] Context has", s.length, "keys, but none match homeMd. Sample keys:", s.slice(0, 10));
      }
      const n = (s) => {
        try {
          return r(s);
        } catch {
        }
        const a = ["./src/", "./src/public/", "./docs/"];
        for (const o of a)
          try {
            const c = s.startsWith("./") ? o + s.slice(2) : o + s;
            return r(c);
          } catch {
          }
        throw new Error(`Cannot find module '${s}' in smart root context`);
      };
      n.keys = () => r.keys(), n.resolve = (s) => r.resolve(s), n.id = r.id;
      const i = (s, a) => {
        if (!s) return null;
        let o = s(a);
        if (o) return o;
        const c = ["./src/", "./src/public/", "./docs/"];
        for (const f of c) {
          const p = a.startsWith("./") ? f + a.slice(2) : f + a;
          if (o = s(p), o) return o;
        }
        return null;
      };
      return n.rawSource = (s) => i(r.rawSource, s), n.lazyImport = (s) => i(r.lazyImport, s), n;
    },
    codeOutputWBCVN(e) {
      var a;
      if (this.resolvedWbCode == null || typeof this.item_ == "string" && this.item_.startsWith("./")) return null;
      let {
        activator: t = "div__Show/Hide WBC-Code|align-end font-weight-bold pa-1 ",
        collapsed: r = typeof this.resolvedWbCode == "boolean" ? this.resolvedWbCode : !1,
        ...n
      } = this.resolvedWbCode || {};
      n.extra = 'Syntax: &lt;WBC item="item"/&gt;|grey lighten-1 font-weight-bold__';
      let i = this.renderDefaultWbcode(null, typeof this.item_ == "string" ? this.item_ : this._originalItem || this.item_, n), u = {
        default_0: {
          comp: "~VListGroup",
          options: {
            class: "rounded border ma-5",
            props: { value: r || !1 },
            on: {
              input: (o) => {
                this.wbCode_ = o;
              }
            },
            slots: {
              activator: { options: { comp: "VRow", class: "pa-1 lighten-1 justify-end" }, a: t }
            }
          },
          tracker: (o) => {
            o.data.options.props.value = r;
          }
        },
        default_2: i
      }, s = `wbc-code-${((a = this.item_) == null ? void 0 : a.id) || this.item_}-${r}`;
      return e("WBC", { key: s, props: { item: u } });
    },
    codeFileOutputVN(e) {
      var f;
      const t = this.itemFileLanguage;
      if (this.resolvedWbCodeFile == null || !t || !this.source || typeof this.item_ == "string" && this.item_.startsWith("./")) return null;
      let {
        activator: r,
        collapsed: n,
        ...i
      } = this.resolvedWbCodeFile || {}, u = r || "div__Show/Hide WBC-file-content|align-end font-weight-bold px-1 ", s = n || !1;
      i.language = t, i.extra = this.item_;
      let a = this.renderDefaultWbcode(null, this.source, i), o = {
        default_0: {
          comp: "~VListGroup",
          options: {
            class: "rounded border ma-5 ",
            props: {
              value: s || !1,
              "active-color": "red",
              "base-color": "blue"
            },
            on: {
              input: (p) => {
                this.wbCodeFile_ = p;
              }
            },
            slots: {
              activator: { options: { comp: "VRow", class: "pa-1 lighten-1 justify-end" }, a: u }
            }
          },
          tracker: (p) => {
            p.data.options.props.value = s;
          }
        },
        default_2: a
      }, c = `wbc-file-code-${((f = this.item_) == null ? void 0 : f.id) || this.item_}-${s}`;
      return e("WBC", { key: c, props: { item: o } });
    },
    dataViewerOutputVN(e) {
      var c, f;
      if (this.resolvedWbDataViewer == null || this.item_ == null) return null;
      let {
        activator: t,
        collapsed: r,
        ...n
      } = this.resolvedWbDataViewer || {}, i = t || "div__Show/Hide WBC-data-content|align-end font-weight-bold px-1 ", u = typeof this.resolvedWbDataViewer == "boolean" ? this.resolvedWbDataViewer : ((c = this.resolvedWbDataViewer) == null ? void 0 : c.collapsed) || !1, s = this.renderDefaultWbDataViewer(null, this.item_, n), a = {
        default_0: {
          comp: "~VListGroup",
          options: {
            class: "rounded border ma-5 ",
            props: {
              value: u || !1,
              "active-color": "red",
              "base-color": "blue"
            },
            on: {
              input: (p) => {
                this.wbDataViewer_ = p;
              }
            },
            slots: {
              activator: { options: { comp: "VRow", class: "pa-1 lighten-1 justify-end" }, a: i }
            }
          },
          tracker: (p) => {
            p.data.options.props.value = u;
          }
        },
        default_2: s
      }, o = `wbc-file-code-${((f = this.item_) == null ? void 0 : f.id) || this.item_}-${u}`;
      return e("WBC", { key: o, props: { item: a } });
    },
    setVNode(e, t) {
      this.vNodes || (this.vNodes = {}), t != null ? this.vNodes[e] = t : delete this.vNodes[e];
    },
    syncVNodes(e, t) {
      const r = e || this.$createElement, n = this.item_;
      this.setVNode("main", t || this.toWBC_(n, r, this.children_, this.wrap_)), this.isWbcPro || fa ? (this.setVNode("wbCode", this.codeOutputWBCVN(r)), this.setVNode("wbCodeFile", this.codeFileOutputVN(r)), this.setVNode("wbDataViewer", this.dataViewerOutputVN(r))) : (this.setVNode("wbCode", null), this.setVNode("wbCodeFile", null), this.setVNode("wbDataViewer", null));
      const i = this.globalHeaderVN(n, r), u = this.globalFooterVN(n, r), s = this.insideHeadersVN(n, r), a = this.insideFootersVN(n, r);
      this.setVNode("globalHeader", i), this.setVNode("gHeader", i), this.setVNode("header", i), this.setVNode("globalFooter", u), this.setVNode("gFooter", u), this.setVNode("footer", u), this.setVNode("insideHeaders", s), this.setVNode("headers", s), this.setVNode("insideFooters", a), this.setVNode("footers", a), this.setVNode("float", Pa(this, r, n, this.float_)), this.setVNode("close", La(this, r, n, this.close_)), this.setVNode("drag", Na(this, r, n, this.drag_)), this.float_ != null || this.focus_ != null || n != null && n.options && typeof n.options.focus == "boolean" ? this.setVNode("focusOn", ys(this, r, this.vNodes.main, { _float: this.float_, _close: this.close_, _drag: this.drag_, _focus: this.focus_ })) : this.setVNode("focusOn", null);
    },
    getCookies() {
      const e = this.$cookies.keys();
      let t = {};
      return e.forEach((r) => {
        t[r] = this.$cookies.get(r);
      }), t;
    },
    handleMouseDown(e) {
    },
    aesEnc: Co,
    aesDec: Eo,
    ...Dl.methods,
    toWBC_(e, t, r, n) {
      var l;
      if (this.randomKey(`${this.nameEl}_`), !this.isNonEmpty(e))
        return null;
      let i, u, s, a, o, c;
      u = this.globalHeaderVN(e, t), s = this.globalFooterVN(e, t), a = this.insideHeadersVN(e, t), o = this.insideFootersVN(e, t), this.setVNode("insideHeaders", a), this.setVNode("headers", a), this.setVNode("insideFooters", o), this.setVNode("footers", o);
      let f;
      if (typeof e == "function")
        return ll(this, e, t);
      if (this.isVnode(e))
        f = e;
      else if (["VSpacer", "VDivider"].includes(e))
        f = t(e, {
          ref: "rawHtml"
        });
      else if (typeof e == "string")
        f = pf(this, e, t);
      else if (typeof e == "boolean" || typeof e == "number")
        f = cl(this, e, t);
      else if (Array.isArray(e))
        f = gl(this, e, t);
      else {
        let h = { externalChildren: r, insideHeadersVN: a, insideFootersVN: o, globalHeaderVN: u, globalFooterVN: s, externalWrapperObj: n, extChildren: c, wbcObj: ((l = this.$options) == null ? void 0 : l.wbcObj) || {} }, d = ql(this, e, t, h);
        f = d.main, i = d.options, c = d.extChildren;
      }
      if (i != null && i.wrap) {
        let h;
        typeof (i == null ? void 0 : i.wrap) == "string" ? h = {
          comp: i == null ? void 0 : i.wrap,
          options: {
            html: f
          }
        } : (i == null ? void 0 : i.wrap) instanceof Object && (h = i == null ? void 0 : i.wrap, h.options || (h.options = {}), h.options.html = f), f = t("WBC", {
          ref: "wrapHtml",
          props: { item: h }
        });
      }
      return f;
    },
    strToComps: ko,
    updateInputValue(e) {
      var t, r, n, i, u, s, a;
      typeof e == "object" && (e != null && e.target) ? (((t = e == null ? void 0 : e.target) == null ? void 0 : t.type) == "checkbox" && (this.item_.options.attrs.checked = ((r = e == null ? void 0 : e.target) == null ? void 0 : r.checked) || !1), this.item_.options.val = ((n = e == null ? void 0 : e.target) == null ? void 0 : n.value) || ((i = e == null ? void 0 : e.target) == null ? void 0 : i.checked) || !1) : ((u = this == null ? void 0 : this.item_) == null ? void 0 : u.comp) == "VCheckbox" ? this.item_.options.val = !((a = (s = this == null ? void 0 : this.item_) == null ? void 0 : s.options) != null && a.val) || !1 : this.item_.options.val = e || "";
    },
    //
    updateKey(e) {
      return e != null && e.includes("_") ? e.replace("_", "-") : e != null && e.includes("-") ? e.replace("-", "_") : e ? e + "_" : this.randomKey("key");
    },
    getNextVariableName(e) {
      let t = -1;
      for (let r in window) {
        let n = r.match(new RegExp(`^${e}_(\\d+)$`));
        if (n) {
          let i = parseInt(n[1], 10);
          t = Math.max(t, i);
        }
      }
      return `${e}_${t + 1}`;
    },
    ...Object.fromEntries(
      Object.entries(xi).filter(
        ([e, t]) => typeof t == "function"
      )
    ),
    // Trust-aware override of the spread `strToObj`. Defined AFTER the spread so it
    // wins. Untrusted subtrees (url playground) force the AST sandbox; renderString /
    // renderArray call `self.strToObj(...)` with self = this, so they inherit it too.
    strToObj(e, t) {
      const r = this.untrusted === !0 || this.wbcUntrustedInjected === !0;
      return Yr(e, { trusted: !r, ...t || {} });
    }
  },
  components: {
    WBHtml: ts,
    WBLink: _i
  },
  vuetify: (
    /* options?.vuetify || */
    Y1
  ),
  store: (
    /* options?.store ||  */
    qr
  ),
  name: "WBC"
}, J1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nn,
  getVuetifyInstance: cc,
  wbcObj: nn
}, Symbol.toStringTag, { value: "Module" }));
var au = { exports: {} }, pa;
function X1() {
  return pa || (pa = 1, (function(e, t) {
    (function() {
      var r = {
        expires: "1d",
        path: "; path=/",
        domain: "",
        secure: "",
        sameSite: "; SameSite=Lax",
        partitioned: ""
      }, n = {
        // install of Vue
        install: function(i, u) {
          u && this.config(u.expires, u.path, u.domain, u.secure, u.sameSite, u.partitioned);
          const s = i.config && i.config.globalProperties;
          s && (i.config.globalProperties.$cookies = this, i.provide && i.provide("$cookies", this)), (!s || i.prototype) && (i.prototype.$cookies = this), i.$cookies = this;
        },
        config: function(i, u, s, a, o, c) {
          r.expires = i || "1d", r.path = u ? "; path=" + u : "; path=/", r.domain = s ? "; domain=" + s : "", r.secure = a ? "; Secure" : "", r.sameSite = o ? "; SameSite=" + o : "; SameSite=Lax", r.partitioned = c ? "; Partitioned" : "";
        },
        get: function(i) {
          var u = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(i).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
          if (u && (u.substring(0, 1) === "{" && u.substring(u.length - 1, u.length) === "}" || u.substring(0, 1) === "[" && u.substring(u.length - 1, u.length) === "]"))
            try {
              u = JSON.parse(u);
            } catch {
              return u;
            }
          return u;
        },
        set: function(i, u, s, a, o, c, f, p) {
          if (i) {
            if (/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(i))
              throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: ' + i);
          } else throw new Error("Cookie name is not found in the first argument.");
          u && typeof u == "object" && (u = JSON.stringify(u));
          var l = "";
          if (s = s === void 0 ? r.expires : s, s && s !== 0)
            switch (s.constructor) {
              case Number:
                s === 1 / 0 || s === -1 ? l = "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : l = "; max-age=" + s;
                break;
              case String:
                if (/^(?:\d+(y|m|d|h|min|s))$/i.test(s)) {
                  var h = s.replace(/^(\d+)(?:y|m|d|h|min|s)$/i, "$1");
                  switch (s.replace(/^(?:\d+)(y|m|d|h|min|s)$/i, "$1").toLowerCase()) {
                    // Frequency sorting
                    case "m":
                      l = "; max-age=" + +h * 2592e3;
                      break;
                    // 60 * 60 * 24 * 30
                    case "d":
                      l = "; max-age=" + +h * 86400;
                      break;
                    // 60 * 60 * 24
                    case "h":
                      l = "; max-age=" + +h * 3600;
                      break;
                    // 60 * 60
                    case "min":
                      l = "; max-age=" + +h * 60;
                      break;
                    // 60
                    case "s":
                      l = "; max-age=" + h;
                      break;
                    case "y":
                      l = "; max-age=" + +h * 31104e3;
                      break;
                  }
                } else
                  l = "; expires=" + s;
                break;
              case Date:
                l = "; expires=" + s.toUTCString();
                break;
            }
          return document.cookie = encodeURIComponent(i) + "=" + encodeURIComponent(u) + l + (o ? "; domain=" + o : r.domain) + (a ? "; path=" + a : r.path) + (c === void 0 ? r.secure : c ? "; Secure" : "") + (f === void 0 ? r.sameSite : f ? "; SameSite=" + f : "") + (p === void 0 ? r.partitioned : p ? "; Partitioned" : ""), this;
        },
        remove: function(i, u, s) {
          return !i || !this.isKey(i) ? !1 : (document.cookie = encodeURIComponent(i) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (s ? "; domain=" + s : r.domain) + (u ? "; path=" + u : r.path) + "; SameSite=Lax", !0);
        },
        isKey: function(i) {
          return new RegExp("(?:^|;\\s*)" + encodeURIComponent(i).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
        },
        keys: function() {
          if (!document.cookie) return [];
          for (var i = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), u = 0; u < i.length; u++)
            i[u] = decodeURIComponent(i[u]);
          return i;
        }
      };
      e.exports = n, typeof window < "u" && (window.$cookies = n);
    })();
  })(au)), au.exports;
}
var Q1 = X1();
const ha = /* @__PURE__ */ sn(Q1);
var Un = { exports: {} }, em = Un.exports, da;
function tm() {
  return da || (da = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(em, (function() {
      var r = 1e3, n = 6e4, i = 36e5, u = "millisecond", s = "second", a = "minute", o = "hour", c = "day", f = "week", p = "month", l = "quarter", h = "year", d = "date", _ = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, D = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(P) {
        var y = ["th", "st", "nd", "rd"], x = P % 100;
        return "[" + P + (y[(x - 20) % 10] || y[x] || y[0]) + "]";
      } }, F = function(P, y, x) {
        var A = String(P);
        return !A || A.length >= y ? P : "" + Array(y + 1 - A.length).join(x) + P;
      }, S = { s: F, z: function(P) {
        var y = -P.utcOffset(), x = Math.abs(y), A = Math.floor(x / 60), T = x % 60;
        return (y <= 0 ? "+" : "-") + F(A, 2, "0") + ":" + F(T, 2, "0");
      }, m: function P(y, x) {
        if (y.date() < x.date()) return -P(x, y);
        var A = 12 * (x.year() - y.year()) + (x.month() - y.month()), T = y.clone().add(A, p), R = x - T < 0, B = y.clone().add(A + (R ? -1 : 1), p);
        return +(-(A + (x - T) / (R ? T - B : B - T)) || 0);
      }, a: function(P) {
        return P < 0 ? Math.ceil(P) || 0 : Math.floor(P);
      }, p: function(P) {
        return { M: p, y: h, w: f, d: c, D: d, h: o, m: a, s, ms: u, Q: l }[P] || String(P || "").toLowerCase().replace(/s$/, "");
      }, u: function(P) {
        return P === void 0;
      } }, E = "en", k = {};
      k[E] = D;
      var O = "$isDayjsObject", L = function(P) {
        return P instanceof ee || !(!P || !P[O]);
      }, Y = function P(y, x, A) {
        var T;
        if (!y) return E;
        if (typeof y == "string") {
          var R = y.toLowerCase();
          k[R] && (T = R), x && (k[R] = x, T = R);
          var B = y.split("-");
          if (!T && B.length > 1) return P(B[0]);
        } else {
          var q = y.name;
          k[q] = y, T = q;
        }
        return !A && T && (E = T), T || !A && E;
      }, Q = function(P, y) {
        if (L(P)) return P.clone();
        var x = typeof y == "object" ? y : {};
        return x.date = P, x.args = arguments, new ee(x);
      }, W = S;
      W.l = Y, W.i = L, W.w = function(P, y) {
        return Q(P, { locale: y.$L, utc: y.$u, x: y.$x, $offset: y.$offset });
      };
      var ee = (function() {
        function P(x) {
          this.$L = Y(x.locale, null, !0), this.parse(x), this.$x = this.$x || x.x || {}, this[O] = !0;
        }
        var y = P.prototype;
        return y.parse = function(x) {
          this.$d = (function(A) {
            var T = A.date, R = A.utc;
            if (T === null) return /* @__PURE__ */ new Date(NaN);
            if (W.u(T)) return /* @__PURE__ */ new Date();
            if (T instanceof Date) return new Date(T);
            if (typeof T == "string" && !/Z$/i.test(T)) {
              var B = T.match(w);
              if (B) {
                var q = B[2] - 1 || 0, $ = (B[7] || "0").substring(0, 3);
                return R ? new Date(Date.UTC(B[1], q, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, $)) : new Date(B[1], q, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, $);
              }
            }
            return new Date(T);
          })(x), this.init();
        }, y.init = function() {
          var x = this.$d;
          this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
        }, y.$utils = function() {
          return W;
        }, y.isValid = function() {
          return this.$d.toString() !== _;
        }, y.isSame = function(x, A) {
          var T = Q(x);
          return this.startOf(A) <= T && T <= this.endOf(A);
        }, y.isAfter = function(x, A) {
          return Q(x) < this.startOf(A);
        }, y.isBefore = function(x, A) {
          return this.endOf(A) < Q(x);
        }, y.$g = function(x, A, T) {
          return W.u(x) ? this[A] : this.set(T, x);
        }, y.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, y.valueOf = function() {
          return this.$d.getTime();
        }, y.startOf = function(x, A) {
          var T = this, R = !!W.u(A) || A, B = W.p(x), q = function(Ae, ie) {
            var Oe = W.w(T.$u ? Date.UTC(T.$y, ie, Ae) : new Date(T.$y, ie, Ae), T);
            return R ? Oe : Oe.endOf(c);
          }, $ = function(Ae, ie) {
            return W.w(T.toDate()[Ae].apply(T.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ie)), T);
          }, j = this.$W, V = this.$M, U = this.$D, M = "set" + (this.$u ? "UTC" : "");
          switch (B) {
            case h:
              return R ? q(1, 0) : q(31, 11);
            case p:
              return R ? q(1, V) : q(0, V + 1);
            case f:
              var X = this.$locale().weekStart || 0, te = (j < X ? j + 7 : j) - X;
              return q(R ? U - te : U + (6 - te), V);
            case c:
            case d:
              return $(M + "Hours", 0);
            case o:
              return $(M + "Minutes", 1);
            case a:
              return $(M + "Seconds", 2);
            case s:
              return $(M + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, y.endOf = function(x) {
          return this.startOf(x, !1);
        }, y.$set = function(x, A) {
          var T, R = W.p(x), B = "set" + (this.$u ? "UTC" : ""), q = (T = {}, T[c] = B + "Date", T[d] = B + "Date", T[p] = B + "Month", T[h] = B + "FullYear", T[o] = B + "Hours", T[a] = B + "Minutes", T[s] = B + "Seconds", T[u] = B + "Milliseconds", T)[R], $ = R === c ? this.$D + (A - this.$W) : A;
          if (R === p || R === h) {
            var j = this.clone().set(d, 1);
            j.$d[q]($), j.init(), this.$d = j.set(d, Math.min(this.$D, j.daysInMonth())).$d;
          } else q && this.$d[q]($);
          return this.init(), this;
        }, y.set = function(x, A) {
          return this.clone().$set(x, A);
        }, y.get = function(x) {
          return this[W.p(x)]();
        }, y.add = function(x, A) {
          var T, R = this;
          x = Number(x);
          var B = W.p(A), q = function(V) {
            var U = Q(R);
            return W.w(U.date(U.date() + Math.round(V * x)), R);
          };
          if (B === p) return this.set(p, this.$M + x);
          if (B === h) return this.set(h, this.$y + x);
          if (B === c) return q(1);
          if (B === f) return q(7);
          var $ = (T = {}, T[a] = n, T[o] = i, T[s] = r, T)[B] || 1, j = this.$d.getTime() + x * $;
          return W.w(j, this);
        }, y.subtract = function(x, A) {
          return this.add(-1 * x, A);
        }, y.format = function(x) {
          var A = this, T = this.$locale();
          if (!this.isValid()) return T.invalidDate || _;
          var R = x || "YYYY-MM-DDTHH:mm:ssZ", B = W.z(this), q = this.$H, $ = this.$m, j = this.$M, V = T.weekdays, U = T.months, M = T.meridiem, X = function(ie, Oe, He, Ne) {
            return ie && (ie[Oe] || ie(A, R)) || He[Oe].slice(0, Ne);
          }, te = function(ie) {
            return W.s(q % 12 || 12, ie, "0");
          }, Ae = M || function(ie, Oe, He) {
            var Ne = ie < 12 ? "AM" : "PM";
            return He ? Ne.toLowerCase() : Ne;
          };
          return R.replace(C, (function(ie, Oe) {
            return Oe || (function(He) {
              switch (He) {
                case "YY":
                  return String(A.$y).slice(-2);
                case "YYYY":
                  return W.s(A.$y, 4, "0");
                case "M":
                  return j + 1;
                case "MM":
                  return W.s(j + 1, 2, "0");
                case "MMM":
                  return X(T.monthsShort, j, U, 3);
                case "MMMM":
                  return X(U, j);
                case "D":
                  return A.$D;
                case "DD":
                  return W.s(A.$D, 2, "0");
                case "d":
                  return String(A.$W);
                case "dd":
                  return X(T.weekdaysMin, A.$W, V, 2);
                case "ddd":
                  return X(T.weekdaysShort, A.$W, V, 3);
                case "dddd":
                  return V[A.$W];
                case "H":
                  return String(q);
                case "HH":
                  return W.s(q, 2, "0");
                case "h":
                  return te(1);
                case "hh":
                  return te(2);
                case "a":
                  return Ae(q, $, !0);
                case "A":
                  return Ae(q, $, !1);
                case "m":
                  return String($);
                case "mm":
                  return W.s($, 2, "0");
                case "s":
                  return String(A.$s);
                case "ss":
                  return W.s(A.$s, 2, "0");
                case "SSS":
                  return W.s(A.$ms, 3, "0");
                case "Z":
                  return B;
              }
              return null;
            })(ie) || B.replace(":", "");
          }));
        }, y.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, y.diff = function(x, A, T) {
          var R, B = this, q = W.p(A), $ = Q(x), j = ($.utcOffset() - this.utcOffset()) * n, V = this - $, U = function() {
            return W.m(B, $);
          };
          switch (q) {
            case h:
              R = U() / 12;
              break;
            case p:
              R = U();
              break;
            case l:
              R = U() / 3;
              break;
            case f:
              R = (V - j) / 6048e5;
              break;
            case c:
              R = (V - j) / 864e5;
              break;
            case o:
              R = V / i;
              break;
            case a:
              R = V / n;
              break;
            case s:
              R = V / r;
              break;
            default:
              R = V;
          }
          return T ? R : W.a(R);
        }, y.daysInMonth = function() {
          return this.endOf(p).$D;
        }, y.$locale = function() {
          return k[this.$L];
        }, y.locale = function(x, A) {
          if (!x) return this.$L;
          var T = this.clone(), R = Y(x, A, !0);
          return R && (T.$L = R), T;
        }, y.clone = function() {
          return W.w(this.$d, this);
        }, y.toDate = function() {
          return new Date(this.valueOf());
        }, y.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, y.toISOString = function() {
          return this.$d.toISOString();
        }, y.toString = function() {
          return this.$d.toUTCString();
        }, P;
      })(), ne = ee.prototype;
      return Q.prototype = ne, [["$ms", u], ["$s", s], ["$m", a], ["$H", o], ["$W", c], ["$M", p], ["$y", h], ["$D", d]].forEach((function(P) {
        ne[P[1]] = function(y) {
          return this.$g(y, P[0], P[1]);
        };
      })), Q.extend = function(P, y) {
        return P.$i || (P(y, ee, Q), P.$i = !0), Q;
      }, Q.locale = Y, Q.isDayjs = L, Q.unix = function(P) {
        return Q(1e3 * P);
      }, Q.en = k[E], Q.Ls = k, Q.p = {}, Q;
    }));
  })(Un)), Un.exports;
}
var rm = tm();
const wr = /* @__PURE__ */ sn(rm), jn = "", nm = {
  cn: {
    Y: "年",
    M: "月",
    D: "天",
    h: "小时",
    m: "分",
    s: "秒",
    ago: "前",
    just: "刚刚"
  },
  en: {
    Y: "year",
    M: "month",
    D: "day",
    h: "hour",
    m: "minute",
    s: "second",
    ago: "ago",
    just: "just now"
  }
}, ou = function(e) {
  return e < 10 ? "0" + e : e;
};
let cu = {};
const ma = {
  /**
   * 安装Vue插件
   * @param {Vue} Vue
   * @param {object} options 插件引入的参数对象
   */
  install(e, t = {}) {
    const r = nm[t.lang || "cn"];
    t.debug;
    const n = t.filters || {
      ago: "ago"
    }, i = t.directives || {
      countdown: "countdown"
    };
    e.prototype.$dayjs = wr, "countdown" in i && e.directive(i.countdown, (u, s) => {
      let a, o, c, f, p, l;
      if (!s.value || !s.value.target || (l = s.value.format || "HH:mm:ss", o = wr(s.value.target), !o.isValid()))
        return u.innerText = jn;
      cu[o.valueOf()] && clearTimeout(cu[o.valueOf()]);
      const h = () => {
        a = wr(), c = a.valueOf() <= o.valueOf() ? [o, a] : [o, o];
        let d = c[0].diff(c[1], "day"), _, w, C;
        f = c[0], p = l, d > 0 && l.match("DD") && (p = p.replace("DD", d), f = f.subtract(d, "day")), _ = f.diff(c[1], "hour"), p = p.replace("HH", ou(_)), f = f.subtract(_, "hour"), w = f.diff(c[1], "minute"), p = p.replace("mm", ou(w)), f = f.subtract(w, "minute"), C = f.diff(c[1], "second"), p = p.replace("ss", ou(C)), u.innerText = p, cu[o.valueOf()] = setTimeout(h, 1e3);
      };
      h();
    }), e.filter("dayjs", (u, s, ...a) => {
      let o = wr(u);
      if (!o.isValid()) return jn;
      if (s)
        return o[s].apply(o, a);
    }), "ago" in n && e.filter(n.ago, (u) => {
      const s = wr(u), a = wr();
      let o = "";
      if (!s.isValid()) return jn;
      let c = a.diff(s, "year"), f = a.diff(s, "month"), p = a.diff(s, "day"), l = a.diff(s, "hour"), h = a.diff(s, "minute");
      return c > 0 ? s.format("YYYY-MM-DD") : f > 0 ? (o = f + r.M, o + r.ago) : p > 0 ? (o += p + r.D, o + r.ago) : l > 0 ? (o += l + r.h, o + r.ago) : (h > 0 && (o += h + r.m), o + r.ago);
    });
  }
};
var Gr = { exports: {} };
Gr.exports;
var ba;
function im() {
  return ba || (ba = 1, (function(e, t) {
    var r = 200, n = "__lodash_hash_undefined__", i = 800, u = 16, s = 9007199254740991, a = "[object Arguments]", o = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", p = "[object Date]", l = "[object Error]", h = "[object Function]", d = "[object GeneratorFunction]", _ = "[object Map]", w = "[object Number]", C = "[object Null]", D = "[object Object]", F = "[object Proxy]", S = "[object RegExp]", E = "[object Set]", k = "[object String]", O = "[object Undefined]", L = "[object WeakMap]", Y = "[object ArrayBuffer]", Q = "[object DataView]", W = "[object Float32Array]", ee = "[object Float64Array]", ne = "[object Int8Array]", P = "[object Int16Array]", y = "[object Int32Array]", x = "[object Uint8Array]", A = "[object Uint8ClampedArray]", T = "[object Uint16Array]", R = "[object Uint32Array]", B = /[\\^$.*+?()[\]{}|]/g, q = /^\[object .+?Constructor\]$/, $ = /^(?:0|[1-9]\d*)$/, j = {};
    j[W] = j[ee] = j[ne] = j[P] = j[y] = j[x] = j[A] = j[T] = j[R] = !0, j[a] = j[o] = j[Y] = j[f] = j[Q] = j[p] = j[l] = j[h] = j[_] = j[w] = j[D] = j[S] = j[E] = j[k] = j[L] = !1;
    var V = typeof Fn == "object" && Fn && Fn.Object === Object && Fn, U = typeof self == "object" && self && self.Object === Object && self, M = V || U || Function("return this")(), X = t && !t.nodeType && t, te = X && !0 && e && !e.nodeType && e, Ae = te && te.exports === X, ie = Ae && V.process, Oe = (function() {
      try {
        var b = te && te.require && te.require("util").types;
        return b || ie && ie.binding && ie.binding("util");
      } catch {
      }
    })(), He = Oe && Oe.isTypedArray;
    function Ne(b, v, I) {
      switch (I.length) {
        case 0:
          return b.call(v);
        case 1:
          return b.call(v, I[0]);
        case 2:
          return b.call(v, I[0], I[1]);
        case 3:
          return b.call(v, I[0], I[1], I[2]);
      }
      return b.apply(v, I);
    }
    function dn(b, v) {
      for (var I = -1, J = Array(b); ++I < b; )
        J[I] = v(I);
      return J;
    }
    function Nr(b) {
      return function(v) {
        return b(v);
      };
    }
    function mn(b, v) {
      return b == null ? void 0 : b[v];
    }
    function bn(b, v) {
      return function(I) {
        return b(v(I));
      };
    }
    var ht = Array.prototype, Zt = Function.prototype, Qe = Object.prototype, Yt = M["__core-js_shared__"], Rt = Zt.toString, Re = Qe.hasOwnProperty, Jt = (function() {
      var b = /[^.]+$/.exec(Yt && Yt.keys && Yt.keys.IE_PROTO || "");
      return b ? "Symbol(src)_1." + b : "";
    })(), Xt = Qe.toString, gn = Rt.call(Object), yn = RegExp(
      "^" + Rt.call(Re).replace(B, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Qt = Ae ? M.Buffer : void 0, pr = M.Symbol, jt = M.Uint8Array;
    Qt && Qt.allocUnsafe;
    var Et = bn(Object.getPrototypeOf, Object), qe = Object.create, Rr = Qe.propertyIsEnumerable, xn = ht.splice, dt = pr ? pr.toStringTag : void 0, Bt = (function() {
      try {
        var b = Fi(Object, "defineProperty");
        return b({}, "", {}), b;
      } catch {
      }
    })(), _n = Qt ? Qt.isBuffer : void 0, er = Math.max, hr = Date.now, Ge = Fi(M, "Map"), et = Fi(Object, "create"), jr = /* @__PURE__ */ (function() {
      function b() {
      }
      return function(v) {
        if (!rr(v))
          return {};
        if (qe)
          return qe(v);
        b.prototype = v;
        var I = new b();
        return b.prototype = void 0, I;
      };
    })();
    function at(b) {
      var v = -1, I = b == null ? 0 : b.length;
      for (this.clear(); ++v < I; ) {
        var J = b[v];
        this.set(J[0], J[1]);
      }
    }
    function Si() {
      this.__data__ = et ? et(null) : {}, this.size = 0;
    }
    function Br(b) {
      var v = this.has(b) && delete this.__data__[b];
      return this.size -= v ? 1 : 0, v;
    }
    function Mr(b) {
      var v = this.__data__;
      if (et) {
        var I = v[b];
        return I === n ? void 0 : I;
      }
      return Re.call(v, b) ? v[b] : void 0;
    }
    function Ti(b) {
      var v = this.__data__;
      return et ? v[b] !== void 0 : Re.call(v, b);
    }
    function tr(b, v) {
      var I = this.__data__;
      return this.size += this.has(b) ? 0 : 1, I[b] = et && v === void 0 ? n : v, this;
    }
    at.prototype.clear = Si, at.prototype.delete = Br, at.prototype.get = Mr, at.prototype.has = Ti, at.prototype.set = tr;
    function ot(b) {
      var v = -1, I = b == null ? 0 : b.length;
      for (this.clear(); ++v < I; ) {
        var J = b[v];
        this.set(J[0], J[1]);
      }
    }
    function Di() {
      this.__data__ = [], this.size = 0;
    }
    function _e(b) {
      var v = this.__data__, I = gr(v, b);
      if (I < 0)
        return !1;
      var J = v.length - 1;
      return I == J ? v.pop() : xn.call(v, I, 1), --this.size, !0;
    }
    function Mt(b) {
      var v = this.__data__, I = gr(v, b);
      return I < 0 ? void 0 : v[I][1];
    }
    function Oi(b) {
      return gr(this.__data__, b) > -1;
    }
    function vn(b, v) {
      var I = this.__data__, J = gr(I, b);
      return J < 0 ? (++this.size, I.push([b, v])) : I[J][1] = v, this;
    }
    ot.prototype.clear = Di, ot.prototype.delete = _e, ot.prototype.get = Mt, ot.prototype.has = Oi, ot.prototype.set = vn;
    function mt(b) {
      var v = -1, I = b == null ? 0 : b.length;
      for (this.clear(); ++v < I; ) {
        var J = b[v];
        this.set(J[0], J[1]);
      }
    }
    function wn() {
      this.size = 0, this.__data__ = {
        hash: new at(),
        map: new (Ge || ot)(),
        string: new at()
      };
    }
    function kn(b) {
      var v = Dn(this, b).delete(b);
      return this.size -= v ? 1 : 0, v;
    }
    function Ii(b) {
      return Dn(this, b).get(b);
    }
    function Ke(b) {
      return Dn(this, b).has(b);
    }
    function At(b, v) {
      var I = Dn(this, b), J = I.size;
      return I.set(b, v), this.size += I.size == J ? 0 : 1, this;
    }
    mt.prototype.clear = wn, mt.prototype.delete = kn, mt.prototype.get = Ii, mt.prototype.has = Ke, mt.prototype.set = At;
    function St(b) {
      var v = this.__data__ = new ot(b);
      this.size = v.size;
    }
    function Cn() {
      this.__data__ = new ot(), this.size = 0;
    }
    function Vr(b) {
      var v = this.__data__, I = v.delete(b);
      return this.size = v.size, I;
    }
    function dr(b) {
      return this.__data__.get(b);
    }
    function Vt(b) {
      return this.__data__.has(b);
    }
    function mr(b, v) {
      var I = this.__data__;
      if (I instanceof ot) {
        var J = I.__data__;
        if (!Ge || J.length < r - 1)
          return J.push([b, v]), this.size = ++I.size, this;
        I = this.__data__ = new mt(J);
      }
      return I.set(b, v), this.size = I.size, this;
    }
    St.prototype.clear = Cn, St.prototype.delete = Vr, St.prototype.get = dr, St.prototype.has = Vt, St.prototype.set = mr;
    function ct(b, v) {
      var I = Ni(b), J = !I && Li(b), ce = !I && !J && cs(b), me = !I && !J && !ce && fs(b), ge = I || J || ce || me, pe = ge ? dn(b.length, String) : [], ye = pe.length;
      for (var lt in b)
        ge && // Safari 9 has enumerable `arguments.length` in strict mode.
        (lt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        ce && (lt == "offset" || lt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        me && (lt == "buffer" || lt == "byteLength" || lt == "byteOffset") || // Skip index properties.
        as(lt, ye)) || pe.push(lt);
      return pe;
    }
    function br(b, v, I) {
      (I !== void 0 && !On(b[v], I) || I === void 0 && !(v in b)) && yr(b, v, I);
    }
    function En(b, v, I) {
      var J = b[v];
      (!(Re.call(b, v) && On(J, I)) || I === void 0 && !(v in b)) && yr(b, v, I);
    }
    function gr(b, v) {
      for (var I = b.length; I--; )
        if (On(b[I][0], v))
          return I;
      return -1;
    }
    function yr(b, v, I) {
      v == "__proto__" && Bt ? Bt(b, v, {
        configurable: !0,
        enumerable: !0,
        value: I,
        writable: !0
      }) : b[v] = I;
    }
    var An = Tn();
    function Tt(b) {
      return b == null ? b === void 0 ? O : C : dt && dt in Object(b) ? Cc(b) : Oc(b);
    }
    function Dt(b) {
      return Wr(b) && Tt(b) == a;
    }
    function Z(b) {
      if (!rr(b) || Tc(b))
        return !1;
      var v = ji(b) ? yn : q;
      return v.test(Lc(b));
    }
    function g(b) {
      return Wr(b) && ls(b.length) && !!j[Tt(b)];
    }
    function N(b) {
      if (!rr(b))
        return Dc(b);
      var v = os(b), I = [];
      for (var J in b)
        J == "constructor" && (v || !Re.call(b, J)) || I.push(J);
      return I;
    }
    function H(b, v, I, J, ce) {
      b !== v && An(v, function(me, ge) {
        if (ce || (ce = new St()), rr(me))
          le(b, v, ge, I, H, J, ce);
        else {
          var pe = J ? J(Pi(b, ge), me, ge + "", b, v, ce) : void 0;
          pe === void 0 && (pe = me), br(b, ge, pe);
        }
      }, ps);
    }
    function le(b, v, I, J, ce, me, ge) {
      var pe = Pi(b, I), ye = Pi(v, I), lt = ge.get(ye);
      if (lt) {
        br(b, I, lt);
        return;
      }
      var Ye = me ? me(pe, ye, I + "", b, v, ge) : void 0, zr = Ye === void 0;
      if (zr) {
        var Bi = Ni(ye), Mi = !Bi && cs(ye), ds = !Bi && !Mi && fs(ye);
        Ye = ye, Bi || Mi || ds ? Ni(pe) ? Ye = pe : Nc(pe) ? Ye = $r(pe) : Mi ? (zr = !1, Ye = ke(ye)) : ds ? (zr = !1, Ye = Ze(ye)) : Ye = [] : Rc(ye) || Li(ye) ? (Ye = pe, Li(pe) ? Ye = jc(pe) : (!rr(pe) || ji(pe)) && (Ye = Ec(ye))) : zr = !1;
      }
      zr && (ge.set(ye, Ye), ce(Ye, ye, J, me, ge), ge.delete(ye)), br(b, I, Ye);
    }
    function ue(b, v) {
      return Fc(Ic(b, v, hs), b + "");
    }
    var he = Bt ? function(b, v) {
      return Bt(b, "toString", {
        configurable: !0,
        enumerable: !1,
        value: Mc(v),
        writable: !0
      });
    } : hs;
    function ke(b, v) {
      return b.slice();
    }
    function $e(b) {
      var v = new b.constructor(b.byteLength);
      return new jt(v).set(new jt(b)), v;
    }
    function Ze(b, v) {
      var I = $e(b.buffer);
      return new b.constructor(I, b.byteOffset, b.length);
    }
    function $r(b, v) {
      var I = -1, J = b.length;
      for (v || (v = Array(J)); ++I < J; )
        v[I] = b[I];
      return v;
    }
    function Ce(b, v, I, J) {
      var ce = !I;
      I || (I = {});
      for (var me = -1, ge = v.length; ++me < ge; ) {
        var pe = v[me], ye = void 0;
        ye === void 0 && (ye = b[pe]), ce ? yr(I, pe, ye) : En(I, pe, ye);
      }
      return I;
    }
    function Sn(b) {
      return ue(function(v, I) {
        var J = -1, ce = I.length, me = ce > 1 ? I[ce - 1] : void 0, ge = ce > 2 ? I[2] : void 0;
        for (me = b.length > 3 && typeof me == "function" ? (ce--, me) : void 0, ge && Ac(I[0], I[1], ge) && (me = ce < 3 ? void 0 : me, ce = 1), v = Object(v); ++J < ce; ) {
          var pe = I[J];
          pe && b(v, pe, J, me);
        }
        return v;
      });
    }
    function Tn(b) {
      return function(v, I, J) {
        for (var ce = -1, me = Object(v), ge = J(v), pe = ge.length; pe--; ) {
          var ye = ge[++ce];
          if (I(me[ye], ye, me) === !1)
            break;
        }
        return v;
      };
    }
    function Dn(b, v) {
      var I = b.__data__;
      return Sc(v) ? I[typeof v == "string" ? "string" : "hash"] : I.map;
    }
    function Fi(b, v) {
      var I = mn(b, v);
      return Z(I) ? I : void 0;
    }
    function Cc(b) {
      var v = Re.call(b, dt), I = b[dt];
      try {
        b[dt] = void 0;
        var J = !0;
      } catch {
      }
      var ce = Xt.call(b);
      return J && (v ? b[dt] = I : delete b[dt]), ce;
    }
    function Ec(b) {
      return typeof b.constructor == "function" && !os(b) ? jr(Et(b)) : {};
    }
    function as(b, v) {
      var I = typeof b;
      return v = v ?? s, !!v && (I == "number" || I != "symbol" && $.test(b)) && b > -1 && b % 1 == 0 && b < v;
    }
    function Ac(b, v, I) {
      if (!rr(I))
        return !1;
      var J = typeof v;
      return (J == "number" ? Ri(I) && as(v, I.length) : J == "string" && v in I) ? On(I[v], b) : !1;
    }
    function Sc(b) {
      var v = typeof b;
      return v == "string" || v == "number" || v == "symbol" || v == "boolean" ? b !== "__proto__" : b === null;
    }
    function Tc(b) {
      return !!Jt && Jt in b;
    }
    function os(b) {
      var v = b && b.constructor, I = typeof v == "function" && v.prototype || Qe;
      return b === I;
    }
    function Dc(b) {
      var v = [];
      if (b != null)
        for (var I in Object(b))
          v.push(I);
      return v;
    }
    function Oc(b) {
      return Xt.call(b);
    }
    function Ic(b, v, I) {
      return v = er(v === void 0 ? b.length - 1 : v, 0), function() {
        for (var J = arguments, ce = -1, me = er(J.length - v, 0), ge = Array(me); ++ce < me; )
          ge[ce] = J[v + ce];
        ce = -1;
        for (var pe = Array(v + 1); ++ce < v; )
          pe[ce] = J[ce];
        return pe[v] = I(ge), Ne(b, this, pe);
      };
    }
    function Pi(b, v) {
      if (!(v === "constructor" && typeof b[v] == "function") && v != "__proto__")
        return b[v];
    }
    var Fc = Pc(he);
    function Pc(b) {
      var v = 0, I = 0;
      return function() {
        var J = hr(), ce = u - (J - I);
        if (I = J, ce > 0) {
          if (++v >= i)
            return arguments[0];
        } else
          v = 0;
        return b.apply(void 0, arguments);
      };
    }
    function Lc(b) {
      if (b != null) {
        try {
          return Rt.call(b);
        } catch {
        }
        try {
          return b + "";
        } catch {
        }
      }
      return "";
    }
    function On(b, v) {
      return b === v || b !== b && v !== v;
    }
    var Li = Dt(/* @__PURE__ */ (function() {
      return arguments;
    })()) ? Dt : function(b) {
      return Wr(b) && Re.call(b, "callee") && !Rr.call(b, "callee");
    }, Ni = Array.isArray;
    function Ri(b) {
      return b != null && ls(b.length) && !ji(b);
    }
    function Nc(b) {
      return Wr(b) && Ri(b);
    }
    var cs = _n || Vc;
    function ji(b) {
      if (!rr(b))
        return !1;
      var v = Tt(b);
      return v == h || v == d || v == c || v == F;
    }
    function ls(b) {
      return typeof b == "number" && b > -1 && b % 1 == 0 && b <= s;
    }
    function rr(b) {
      var v = typeof b;
      return b != null && (v == "object" || v == "function");
    }
    function Wr(b) {
      return b != null && typeof b == "object";
    }
    function Rc(b) {
      if (!Wr(b) || Tt(b) != D)
        return !1;
      var v = Et(b);
      if (v === null)
        return !0;
      var I = Re.call(v, "constructor") && v.constructor;
      return typeof I == "function" && I instanceof I && Rt.call(I) == gn;
    }
    var fs = He ? Nr(He) : g;
    function jc(b) {
      return Ce(b, ps(b));
    }
    function ps(b) {
      return Ri(b) ? ct(b) : N(b);
    }
    var Bc = Sn(function(b, v, I) {
      H(b, v, I);
    });
    function Mc(b) {
      return function() {
        return b;
      };
    }
    function hs(b) {
      return b;
    }
    function Vc() {
      return !1;
    }
    e.exports = Bc;
  })(Gr, Gr.exports)), Gr.exports;
}
var Bn, ga;
function um() {
  if (ga) return Bn;
  ga = 1;
  const e = im();
  let t = null;
  try {
    const i = Io();
    t = new i(".markdown-it-code-copy");
  } catch {
  }
  const r = {
    iconStyle: "font-size: 21px; opacity: 0.4;",
    iconClass: "mdi mdi-content-copy",
    buttonStyle: "position: absolute; top: 7.5px; right: 6px; cursor: pointer; outline: none;",
    buttonClass: "",
    element: "",
    removeEndNewline: !1
  };
  function n(i, u) {
    return u = e(r, u), (...s) => {
      const [a, o] = s;
      let c = a[o].content.replaceAll('"', "&quot;").replaceAll("'", "&apos;");
      u.removeEndNewline === !0 && (c = c.replace(/(\r\n|\n|\r)+$/, ""));
      const f = i(...s);
      return c.length === 0 ? f : `
<div style="position: relative">
	${f}
	<button class="markdown-it-code-copy ${u.buttonClass}" data-clipboard-text="${c}" style="${u.buttonStyle}" title="Copy">
		<span style="${u.iconStyle}" class="${u.iconClass}">${u.element}</span>
	</button>
</div>
`;
    };
  }
  return Bn = (i, u) => {
    t && (u.onSuccess && t.on("success", u.onSuccess), u.onError && t.on("error", u.onError)), i.renderer.rules.code_block = n(i.renderer.rules.code_block, u), i.renderer.rules.fence = n(i.renderer.rules.fence, u);
  }, Bn;
}
var sm = um();
const am = /* @__PURE__ */ sn(sm);
function om(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}
function Ou(e, t) {
  return Array(t + 1).join(e);
}
function lc(e) {
  return e.replace(/^\n*/, "");
}
function fc(e) {
  for (var t = e.length; t > 0 && e[t - 1] === `
`; ) t--;
  return e.substring(0, t);
}
function pc(e) {
  return fc(lc(e));
}
var cm = ["ADDRESS", "ARTICLE", "ASIDE", "AUDIO", "BLOCKQUOTE", "BODY", "CANVAS", "CENTER", "DD", "DIR", "DIV", "DL", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "FRAMESET", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "HTML", "ISINDEX", "LI", "MAIN", "MENU", "NAV", "NOFRAMES", "NOSCRIPT", "OL", "OUTPUT", "P", "PRE", "SECTION", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL"];
function rs(e) {
  return ns(e, cm);
}
var hc = ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"];
function dc(e) {
  return ns(e, hc);
}
function lm(e) {
  return bc(e, hc);
}
var mc = ["A", "TABLE", "THEAD", "TBODY", "TFOOT", "TH", "TD", "IFRAME", "SCRIPT", "AUDIO", "VIDEO"];
function fm(e) {
  return ns(e, mc);
}
function pm(e) {
  return bc(e, mc);
}
function ns(e, t) {
  return t.indexOf(e.nodeName) >= 0;
}
function bc(e, t) {
  return e.getElementsByTagName && t.some(function(r) {
    return e.getElementsByTagName(r).length;
  });
}
var hm = [[/\\/g, "\\\\"], [/\*/g, "\\*"], [/^-/g, "\\-"], [/^\+ /g, "\\+ "], [/^(=+)/g, "\\$1"], [/^(#{1,6}) /g, "\\$1 "], [/`/g, "\\`"], [/^~~~/g, "\\~~~"], [/\[/g, "\\["], [/\]/g, "\\]"], [/^>/g, "\\>"], [/_/g, "\\_"], [/^(\d+)\. /g, "$1\\. "]];
function gc(e) {
  return hm.reduce(function(t, r) {
    return t.replace(r[0], r[1]);
  }, e);
}
var Le = {};
Le.paragraph = {
  filter: "p",
  replacement: function(e) {
    return `

` + e + `

`;
  }
};
Le.lineBreak = {
  filter: "br",
  replacement: function(e, t, r) {
    return r.br + `
`;
  }
};
Le.heading = {
  filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
  replacement: function(e, t, r) {
    var n = Number(t.nodeName.charAt(1));
    if (r.headingStyle === "setext" && n < 3) {
      var i = Ou(n === 1 ? "=" : "-", e.length);
      return `

` + e + `
` + i + `

`;
    } else
      return `

` + Ou("#", n) + " " + e + `

`;
  }
};
Le.blockquote = {
  filter: "blockquote",
  replacement: function(e) {
    return e = pc(e).replace(/^/gm, "> "), `

` + e + `

`;
  }
};
Le.list = {
  filter: ["ul", "ol"],
  replacement: function(e, t) {
    var r = t.parentNode;
    return r.nodeName === "LI" && r.lastElementChild === t ? `
` + e : `

` + e + `

`;
  }
};
Le.listItem = {
  filter: "li",
  replacement: function(e, t, r) {
    var n = r.bulletListMarker + "   ", i = t.parentNode;
    if (i.nodeName === "OL") {
      var u = i.getAttribute("start"), s = Array.prototype.indexOf.call(i.children, t);
      n = (u ? Number(u) + s : s + 1) + ".  ";
    }
    var a = /\n$/.test(e);
    return e = pc(e) + (a ? `
` : ""), e = e.replace(/\n/gm, `
` + " ".repeat(n.length)), n + e + (t.nextSibling ? `
` : "");
  }
};
Le.indentedCodeBlock = {
  filter: function(e, t) {
    return t.codeBlockStyle === "indented" && e.nodeName === "PRE" && e.firstChild && e.firstChild.nodeName === "CODE";
  },
  replacement: function(e, t, r) {
    return `

    ` + t.firstChild.textContent.replace(/\n/g, `
    `) + `

`;
  }
};
Le.fencedCodeBlock = {
  filter: function(e, t) {
    return t.codeBlockStyle === "fenced" && e.nodeName === "PRE" && e.firstChild && e.firstChild.nodeName === "CODE";
  },
  replacement: function(e, t, r) {
    for (var n = t.firstChild.getAttribute("class") || "", i = (n.match(/language-(\S+)/) || [null, ""])[1], u = t.firstChild.textContent, s = r.fence.charAt(0), a = 3, o = new RegExp("^" + s + "{3,}", "gm"), c; c = o.exec(u); )
      c[0].length >= a && (a = c[0].length + 1);
    var f = Ou(s, a);
    return `

` + f + i + `
` + u.replace(/\n$/, "") + `
` + f + `

`;
  }
};
Le.horizontalRule = {
  filter: "hr",
  replacement: function(e, t, r) {
    return `

` + r.hr + `

`;
  }
};
Le.inlineLink = {
  filter: function(e, t) {
    return t.linkStyle === "inlined" && e.nodeName === "A" && e.getAttribute("href");
  },
  replacement: function(e, t) {
    var r = is(t.getAttribute("href")), n = us(ri(t.getAttribute("title"))), i = n ? ' "' + n + '"' : "";
    return "[" + e + "](" + r + i + ")";
  }
};
Le.referenceLink = {
  filter: function(e, t) {
    return t.linkStyle === "referenced" && e.nodeName === "A" && e.getAttribute("href");
  },
  replacement: function(e, t, r) {
    var n = is(t.getAttribute("href")), i = ri(t.getAttribute("title"));
    i && (i = ' "' + us(i) + '"');
    var u, s;
    switch (r.linkReferenceStyle) {
      case "collapsed":
        u = "[" + e + "][]", s = "[" + e + "]: " + n + i;
        break;
      case "shortcut":
        u = "[" + e + "]", s = "[" + e + "]: " + n + i;
        break;
      default:
        var a = this.references.length + 1;
        u = "[" + e + "][" + a + "]", s = "[" + a + "]: " + n + i;
    }
    return this.references.push(s), u;
  },
  references: [],
  append: function(e) {
    var t = "";
    return this.references.length && (t = `

` + this.references.join(`
`) + `

`, this.references = []), t;
  }
};
Le.emphasis = {
  filter: ["em", "i"],
  replacement: function(e, t, r) {
    return e.trim() ? r.emDelimiter + e + r.emDelimiter : "";
  }
};
Le.strong = {
  filter: ["strong", "b"],
  replacement: function(e, t, r) {
    return e.trim() ? r.strongDelimiter + e + r.strongDelimiter : "";
  }
};
Le.code = {
  filter: function(e) {
    var t = e.previousSibling || e.nextSibling, r = e.parentNode.nodeName === "PRE" && !t;
    return e.nodeName === "CODE" && !r;
  },
  replacement: function(e) {
    if (!e) return "";
    e = e.replace(/\r?\n|\r/g, " ");
    for (var t = /^`|^ .*?[^ ].* $|`$/.test(e) ? " " : "", r = "`", n = e.match(/`+/gm) || []; n.indexOf(r) !== -1; ) r = r + "`";
    return r + t + e + t + r;
  }
};
Le.image = {
  filter: "img",
  replacement: function(e, t) {
    var r = gc(ri(t.getAttribute("alt"))), n = is(t.getAttribute("src") || ""), i = ri(t.getAttribute("title")), u = i ? ' "' + us(i) + '"' : "";
    return n ? "![" + r + "](" + n + u + ")" : "";
  }
};
function ri(e) {
  return e ? e.replace(/(\n+\s*)+/g, `
`) : "";
}
function is(e) {
  var t = e.replace(/([<>()])/g, "\\$1");
  return t.indexOf(" ") >= 0 ? "<" + t + ">" : t;
}
function us(e) {
  return e.replace(/"/g, '\\"');
}
function yc(e) {
  this.options = e, this._keep = [], this._remove = [], this.blankRule = {
    replacement: e.blankReplacement
  }, this.keepReplacement = e.keepReplacement, this.defaultRule = {
    replacement: e.defaultReplacement
  }, this.array = [];
  for (var t in e.rules) this.array.push(e.rules[t]);
}
yc.prototype = {
  add: function(e, t) {
    this.array.unshift(t);
  },
  keep: function(e) {
    this._keep.unshift({
      filter: e,
      replacement: this.keepReplacement
    });
  },
  remove: function(e) {
    this._remove.unshift({
      filter: e,
      replacement: function() {
        return "";
      }
    });
  },
  forNode: function(e) {
    if (e.isBlank) return this.blankRule;
    var t;
    return (t = lu(this.array, e, this.options)) || (t = lu(this._keep, e, this.options)) || (t = lu(this._remove, e, this.options)) ? t : this.defaultRule;
  },
  forEach: function(e) {
    for (var t = 0; t < this.array.length; t++) e(this.array[t], t);
  }
};
function lu(e, t, r) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    if (dm(i, t, r)) return i;
  }
}
function dm(e, t, r) {
  var n = e.filter;
  if (typeof n == "string") {
    if (n === t.nodeName.toLowerCase()) return !0;
  } else if (Array.isArray(n)) {
    if (n.indexOf(t.nodeName.toLowerCase()) > -1) return !0;
  } else if (typeof n == "function") {
    if (n.call(e, t, r)) return !0;
  } else
    throw new TypeError("`filter` needs to be a string, array, or function");
}
function mm(e) {
  var t = e.element, r = e.isBlock, n = e.isVoid, i = e.isPre || function(p) {
    return p.nodeName === "PRE";
  };
  if (!(!t.firstChild || i(t))) {
    for (var u = null, s = !1, a = null, o = ya(a, t, i); o !== t; ) {
      if (o.nodeType === 3 || o.nodeType === 4) {
        var c = o.data.replace(/[ \r\n\t]+/g, " ");
        if ((!u || / $/.test(u.data)) && !s && c[0] === " " && (c = c.substr(1)), !c) {
          o = fu(o);
          continue;
        }
        o.data = c, u = o;
      } else if (o.nodeType === 1)
        r(o) || o.nodeName === "BR" ? (u && (u.data = u.data.replace(/ $/, "")), u = null, s = !1) : n(o) || i(o) ? (u = null, s = !0) : u && (s = !1);
      else {
        o = fu(o);
        continue;
      }
      var f = ya(a, o, i);
      a = o, o = f;
    }
    u && (u.data = u.data.replace(/ $/, ""), u.data || fu(u));
  }
}
function fu(e) {
  var t = e.nextSibling || e.parentNode;
  return e.parentNode.removeChild(e), t;
}
function ya(e, t, r) {
  return e && e.parentNode === t || r(t) ? t.nextSibling || t.parentNode : t.firstChild || t.nextSibling || t.parentNode;
}
var ss = typeof window < "u" ? window : {};
function bm() {
  var e = ss.DOMParser, t = !1;
  try {
    new e().parseFromString("", "text/html") && (t = !0);
  } catch {
  }
  return t;
}
function gm() {
  var e = function() {
  };
  return ym() ? e.prototype.parseFromString = function(t) {
    var r = new window.ActiveXObject("htmlfile");
    return r.designMode = "on", r.open(), r.write(t), r.close(), r;
  } : e.prototype.parseFromString = function(t) {
    var r = document.implementation.createHTMLDocument("");
    return r.open(), r.write(t), r.close(), r;
  }, e;
}
function ym() {
  var e = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    ss.ActiveXObject && (e = !0);
  }
  return e;
}
var xm = bm() ? ss.DOMParser : gm();
function _m(e, t) {
  var r;
  if (typeof e == "string") {
    var n = vm().parseFromString(
      // DOM parsers arrange elements in the <head> and <body>.
      // Wrapping in a custom element ensures elements are reliably arranged in
      // a single element.
      '<x-turndown id="turndown-root">' + e + "</x-turndown>",
      "text/html"
    );
    r = n.getElementById("turndown-root");
  } else
    r = e.cloneNode(!0);
  return mm({
    element: r,
    isBlock: rs,
    isVoid: dc,
    isPre: t.preformattedCode ? wm : null
  }), r;
}
var pu;
function vm() {
  return pu = pu || new xm(), pu;
}
function wm(e) {
  return e.nodeName === "PRE" || e.nodeName === "CODE";
}
function km(e, t) {
  return e.isBlock = rs(e), e.isCode = e.nodeName === "CODE" || e.parentNode.isCode, e.isBlank = Cm(e), e.flankingWhitespace = Em(e, t), e;
}
function Cm(e) {
  return !dc(e) && !fm(e) && /^\s*$/i.test(e.textContent) && !lm(e) && !pm(e);
}
function Em(e, t) {
  if (e.isBlock || t.preformattedCode && e.isCode)
    return {
      leading: "",
      trailing: ""
    };
  var r = Am(e.textContent);
  return r.leadingAscii && xa("left", e, t) && (r.leading = r.leadingNonAscii), r.trailingAscii && xa("right", e, t) && (r.trailing = r.trailingNonAscii), {
    leading: r.leading,
    trailing: r.trailing
  };
}
function Am(e) {
  var t = e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
  return {
    leading: t[1],
    // whole string for whitespace-only strings
    leadingAscii: t[2],
    leadingNonAscii: t[3],
    trailing: t[4],
    // empty for whitespace-only strings
    trailingNonAscii: t[5],
    trailingAscii: t[6]
  };
}
function xa(e, t, r) {
  var n, i, u;
  return e === "left" ? (n = t.previousSibling, i = / $/) : (n = t.nextSibling, i = /^ /), n && (n.nodeType === 3 ? u = i.test(n.nodeValue) : r.preformattedCode && n.nodeName === "CODE" ? u = !1 : n.nodeType === 1 && !rs(n) && (u = i.test(n.textContent))), u;
}
var Sm = Array.prototype.reduce;
function sr(e) {
  if (!(this instanceof sr)) return new sr(e);
  var t = {
    rules: Le,
    headingStyle: "setext",
    hr: "* * *",
    bulletListMarker: "*",
    codeBlockStyle: "indented",
    fence: "```",
    emDelimiter: "_",
    strongDelimiter: "**",
    linkStyle: "inlined",
    linkReferenceStyle: "full",
    br: "  ",
    preformattedCode: !1,
    blankReplacement: function(r, n) {
      return n.isBlock ? `

` : "";
    },
    keepReplacement: function(r, n) {
      return n.isBlock ? `

` + n.outerHTML + `

` : n.outerHTML;
    },
    defaultReplacement: function(r, n) {
      return n.isBlock ? `

` + r + `

` : r;
    }
  };
  this.options = om({}, t, e), this.rules = new yc(this.options);
}
sr.prototype = {
  /**
   * The entry point for converting a string or DOM node to Markdown
   * @public
   * @param {String|HTMLElement} input The string or DOM node to convert
   * @returns A Markdown representation of the input
   * @type String
   */
  turndown: function(e) {
    if (!Om(e))
      throw new TypeError(e + " is not a string, or an element/document/fragment node.");
    if (e === "") return "";
    var t = xc.call(this, new _m(e, this.options));
    return Tm.call(this, t);
  },
  /**
   * Add one or more plugins
   * @public
   * @param {Function|Array} plugin The plugin or array of plugins to add
   * @returns The Turndown instance for chaining
   * @type Object
   */
  use: function(e) {
    if (Array.isArray(e))
      for (var t = 0; t < e.length; t++) this.use(e[t]);
    else if (typeof e == "function")
      e(this);
    else
      throw new TypeError("plugin must be a Function or an Array of Functions");
    return this;
  },
  /**
   * Adds a rule
   * @public
   * @param {String} key The unique key of the rule
   * @param {Object} rule The rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  addRule: function(e, t) {
    return this.rules.add(e, t), this;
  },
  /**
   * Keep a node (as HTML) that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  keep: function(e) {
    return this.rules.keep(e), this;
  },
  /**
   * Remove a node that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  remove: function(e) {
    return this.rules.remove(e), this;
  },
  /**
   * Escapes Markdown syntax
   * @public
   * @param {String} string The string to escape
   * @returns A string with Markdown syntax escaped
   * @type String
   */
  escape: function(e) {
    return gc(e);
  }
};
function xc(e) {
  var t = this;
  return Sm.call(e.childNodes, function(r, n) {
    n = new km(n, t.options);
    var i = "";
    return n.nodeType === 3 ? i = n.isCode ? n.nodeValue : t.escape(n.nodeValue) : n.nodeType === 1 && (i = Dm.call(t, n)), _c(r, i);
  }, "");
}
function Tm(e) {
  var t = this;
  return this.rules.forEach(function(r) {
    typeof r.append == "function" && (e = _c(e, r.append(t.options)));
  }), e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function Dm(e) {
  var t = this.rules.forNode(e), r = xc.call(this, e), n = e.flankingWhitespace;
  return (n.leading || n.trailing) && (r = r.trim()), n.leading + t.replacement(r, e, this.options) + n.trailing;
}
function _c(e, t) {
  var r = fc(e), n = lc(t), i = Math.max(e.length - r.length, t.length - n.length), u = `

`.substring(0, i);
  return r + u + n;
}
function Om(e) {
  return e != null && (typeof e == "string" || e.nodeType && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11));
}
const vc = ha.default || ha, Im = ma.default || ma, Iu = Au.default || Au, Fm = (e, t) => {
  let r;
  return (...n) => {
    clearTimeout(r), r = setTimeout(() => e(...n), t);
  };
};
if (typeof ResizeObserver < "u") {
  const e = ResizeObserver;
  window.ResizeObserver = class {
    constructor(r) {
      this.debouncedCallback = Fm(r, 50), this.observer = new e(this.debouncedCallback);
    }
    observe(r) {
      this.observer.observe(r);
    }
    unobserve(r) {
      this.observer.unobserve(r);
    }
    disconnect() {
      this.observer.disconnect();
    }
  };
}
let hu = null;
const wc = () => (hu || (hu = new Fu({
  theme: {
    dark: !1,
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  icons: { iconfont: "mdi" },
  breakpoint: { mobileBreakpoint: "sm" }
})), hu), Pm = wc(), _a = new Me({
  html: !0,
  linkify: !0,
  typographer: !0,
  breaks: !1
}).use(_t, {
  permalink: _t.permalink.headerLink({ safariReaderFix: !0 }),
  slugify: (e) => e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}).use(am, {
  copyButtonText: "Copy",
  copiedButtonText: "Copied!",
  buttonClass: "pa-3",
  onSuccess: (e) => {
    const t = e.trigger, r = t.querySelector(".mdi") || t.querySelector("i"), n = r ? r.className : "", i = r ? r.style.color : "";
    r && (r.className = "mdi mdi-check", r.textContent = "copied!", r.style.color = "grey", setTimeout(() => {
      r.className = n, r.style.color = i, r.textContent = "";
    }, 1e4));
  }
});
function Lm(e, t = {}) {
  if (!e) return;
  if ([
    {
      name: "Vuex",
      property: "$store",
      fallback: mu,
      fallbackInstance: qr
    },
    { name: "BootstrapVue", property: "$bootstrap", fallback: $c },
    { name: "IconsPlugin", property: "$icons", fallback: Wc },
    { name: "JsonViewer", property: "$jsonViewer", fallback: Iu },
    { name: "VueCookies", property: "$cookies", fallback: vc },
    {
      name: "MarkdownIt",
      property: "$md",
      fallback: Me,
      fallbackInstance: _a
    },
    {
      name: "TurnDown",
      property: "$turndown",
      fallback: sr,
      fallbackInstance: new sr({
        headingStyle: "atx",
        bulletListMarker: "-",
        codeBlockStyle: "fenced",
        emDelimiter: "_"
      })
    },
    {
      name: "Vuetify",
      property: "$vuetify",
      fallback: Fu,
      fallbackInstance: Pm
    },
    ...(t == null ? void 0 : t.plugins) || []
  ].forEach(
    ({ name: n, property: i, fallback: u, fallbackInstance: s, options: a }) => {
      var f, p, l, h;
      const o = ((p = (f = t == null ? void 0 : t.plugins) == null ? void 0 : f[n]) == null ? void 0 : p.plugin) || s || u, c = ((h = (l = t == null ? void 0 : t.plugins) == null ? void 0 : l[n]) == null ? void 0 : h.options) || a;
      if (o) {
        if (i && e.prototype[i]) return;
        try {
          if (typeof o == "function" && !o.install && !o.cid)
            return;
          c ? e.use(o, c) : e.use(o);
        } catch (d) {
          console.error(`[WBC Install] Failed to install ${n}:`, d);
        }
      }
    }
  ), e.prototype.$md || (e.prototype.$md = _a), !e.prototype.$turndown) {
    const n = new sr({
      headingStyle: "atx",
      bulletListMarker: "-",
      codeBlockStyle: "fenced",
      emDelimiter: "_"
    });
    e.prototype.$turndown = n, e.prototype.$turnDown = n;
  }
  e.mixin({
    beforeCreate() {
      var n;
      e.use(Im, {
        filters: { ago: "ago" },
        directives: { countdown: "countdown" }
      }), e.component("WBHtml", ts), e.component("WBLink", _i), e.component("JsonViewer", Iu), Object.entries((t == null ? void 0 : t.components) || {}).forEach(([i, u]) => {
        e.component(i, u);
      }), Object.assign(e.prototype, xi), (n = e == null ? void 0 : e.prototype) != null && n.$store || (e.prototype.$store = qr), e.prototype.$wbcUi2Options = t, t != null && t.lg && qr && (qr.commit("updateLang", t.lg), document.cookie = `lg=${encodeURIComponent(t.lg)}; path=/; max-age=31536000; SameSite=Lax`);
    },
    methods: {
      renderVNodeToString(n, i = !0, u) {
        const s = typeof n == "function" ? n(this.$createElement) : n, a = new (e.extend())({
          ...u ? { parent: u } : {},
          render: (c) => s
        }).$mount();
        let o = a.$el.outerHTML;
        if (a.$destroy(), i !== !1) {
          const c = i === !0 ? {
            removeEmpty: ["span", "div"],
            collapseWrappers: ["span", "div"]
          } : i;
          o = this.cleanVueHtml(o, c);
        }
        return o;
      },
      mountVNode(n, i) {
        const u = typeof n == "function" ? n(this.$createElement) : n, s = new (e.extend())({
          ...i ? { parent: i } : {},
          render: (a) => u
        }).$mount();
        return {
          vm: s,
          el: s.$el,
          get html() {
            return this.cleanVueHtml(s.$el.outerHTML);
          },
          destroy: () => s.$destroy()
        };
      }
    }
  });
}
const kc = {
  ...xi,
  install: Lm,
  WBHtml: ts,
  WBLink: _i,
  JsonViewer: Iu,
  MarkdownIt: Me,
  TurnDown: sr,
  VueCookies: vc,
  getVuetifyInstance: wc
};
let du;
const ni = function(e, t = {}) {
  if (!ni.installed) {
    ni.installed = !0;
    try {
      kc.install(e, t), nn || console.error("[WBC] WBCOptions is UNDEFINED!"), du = e.extend(nn), e.component("WBC", du), global && typeof global < "u" && (global.WBC = du);
    } catch (r) {
      console.error("[WBC] Installation FAILED:", r);
    }
  }
};
typeof window < "u" && window.Vue && ni(window.Vue);
const $m = {
  install: ni,
  extendedInstall: kc,
  WBC: nn
};
export {
  nn as WBC,
  ts as WBHtml,
  _i as WBLink,
  Ht as clone,
  $m as default,
  Ll as excludeList,
  Mn as generalVal,
  wc as getVuetifyInstance,
  vo as safeEval,
  Mm as setWbcRouteSink,
  Yr as strToObj
};
//# sourceMappingURL=core2.es.js.map
