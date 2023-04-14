#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const cssDir = path.join(__dirname, "..", "public", "css")
const tnCss = path.join(__dirname, "..", "node_modules/@tokenscript/token-negotiator/dist/theme/style.css")
const publicCss = path.join(__dirname, "..", process.env.MODE === 'production' ? "token-negotiator-examples/ecommerce-store-website/css/tn_style.css" : "public/css/tn_style.css")

if (!fs.existsSync(cssDir)){
    fs.mkdirSync(cssDir);
}

fs.createReadStream(tnCss).pipe(fs.createWriteStream(publicCss));
