const path = require("path");
const svgtofont = require("svgtofont");
const pkg = require('../package.json');

svgtofont({
  src: path.resolve(process.cwd(), "svg-light"), // svg path
  dist: path.resolve(process.cwd(), "dist"), // output path
  emptyDist: true,
  outSVGReact: false,
  outSVGPath: true,
  fontName: "light-icon", // font name
  css: true, // Create CSS files.
  startNumber: 20000, // unicode start number
  nodemo: true, // no demo html files
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  website: {
    template: path.resolve(process.cwd(), "assets", "demo-template.ejs"),
    title: "LIGHT ICON",
    // Must be a .svg format image.
    favicon: path.resolve(process.cwd(), "assets", "favicon.png"),
    logo: path.resolve(process.cwd(), "assets", "logo.svg"),
    version: pkg.version,
    meta: {
      description: "Handpicked collection of premium & lightwighted icons as font",
      keywords:
        "light, light-vue, vue.js, vue, component, svg, icon, components, ui, framework, toolkit,icon,file-icons,TTF,EOT,WOFF,WOFF2,SVG"
    },
    description: `
      Handpicked collection of premium & lightwighted icons as font
    `,
    // links: [
    //   {
    //     title: "Font Class Demo",
    //     url: "index.html"
    //   },
    //   {
    //     title: "Symbol Demo",
    //     url: "symbol.html"
    //   },
    //   {
    //     title: "Unicode Demo",
    //     url: "unicode.html"
    //   }
    // ],
    footerInfo: `
      Licensed under MIT. (Yes it's free and <a href="https://github.com/plug-ui">open-sourced</a>)
    `
  }
})
.then(() => {
  console.log("DONE!");
});