const path = require('path');
const svgtofont = require('svgtofont');
const pkg = require('../package.json');
const fs = require('fs');

const srcPath = path.resolve(process.cwd(), 'svg-light'); // svg path
const distPath = path.resolve(process.cwd(), 'dist'); // output path
const docsStaticPath = path.resolve(process.cwd(), 'docs/src/static');
const fontName = 'light-icon'; // font name

svgtofont({
  src: srcPath,
  dist: distPath,
  emptyDist: true,
  outSVGReact: false,
  outSVGPath: true,
  fontName: fontName,
  css: {
    fontSize: 'inherit',
  }, // Create CSS files.
  startNumber: 20000, // unicode start number
  nodemo: true, // no demo html files
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
  website: {
    template: path.resolve(process.cwd(), 'assets', 'demo-template.ejs'),
    title: 'LIGHT ICON',
    // Must be a .svg format image.
    favicon: path.resolve(process.cwd(), 'assets', 'favicon.png'),
    logo: path.resolve(process.cwd(), 'assets', 'logo.svg'),
    version: pkg.version,
    meta: {
      description: 'Handpicked collection of premium & lightweight icons as font',
      keywords: 'light, light-vue, vue.js, vue, component, svg, icon, components, ui, framework, toolkit,icon,file-icons,TTF,EOT,WOFF,WOFF2,SVG',
    },
    description: `
      Handpicked collection of premium & lightweight icons as font
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
      Licensed under MIT. (Yes it's free and <a href="https://github.com/lightvue/light-icons">open-sourced</a>)
    `,
  },
}).then(async () => {
  console.log('DONE!');
  await modifyCSS();
  await generateJSON();
});

async function modifyCSS() {
  const cssFilePath = path.join(distPath, `${fontName}.css`);

  fs.readFile(cssFilePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/font-size:16px;/g, 'font-size:inherit;\n  color:inherit;\n');
    console.log('Modified CSS');
    fs.writeFile(cssFilePath, result, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });
}

async function generateJSON() {
  let files = fs.readdirSync(srcPath, 'utf-8');
  let svgArr = [];
  if (!files) {
    throw new Error(`Error! Svg folder is empty.${srcPath}`);
  }

  for (let i in files) {
    if (typeof files[i] !== 'string' || path.extname(files[i]) !== '.svg') continue;
    if (!~svgArr.indexOf(files[i])) {
      svgArr.push(`"${path.parse(files[i]).name}"`);
    }
  }
  const outPath = path.join(distPath, `${fontName}_list.json`);
  await fs.writeFile(outPath, `[${svgArr}]`, function (err) {
    if (err) throw err;
    console.log('JSON Saved!');
  });

  const docsOutPath = path.join(docsStaticPath, `icon-list.json`);
  await fs.writeFile(docsOutPath, `[${svgArr}]`, function (err) {
    if (err) throw err;
    console.log('JSON for docs saved!');
  });
  return;
}
