const fs = require('fs-extra');
const marked = require('marked');

fs.mkdirsSync("dist");

const md = marked.parse(fs.readFileSync("README.md", "utf-8")).split(/\r\n|\n/)
const css = fs.readFileSync("src/style.css", "utf-8").split(/\r\n|\n/)
const base = fs.readFileSync("src/index.html", "utf-8").split(/\r\n|\n/)

let html = ''
base.forEach((item, i) => {
  if (i === 16) {
    html += "<style>"
    for (j of css) {
      html += j.replace(/\s{2}/g, '')
    }
    html += "</style>"
  }
  if (i === 26) {
    for (j of md) {
      html += j.replace(/\s{2}/g, '')
    }
  }
  html += item.replace(/\s{2}/g, '')
})

// ファイル書き出し
fs.writeFile('dist/index.html', html, function (err) {})
const clock = fs.readFileSync("src/clock.html", "utf-8")
fs.writeFile('dist/clock.html', clock, function (err) {})
fs.copySync('src/img/', 'dist/img/');