const fs = require("fs");
const path = require("path");
const gm = require("gm");

const assetDir = path.join(__dirname, "..", "assets");
const pdfDir = path.join(assetDir, "pdfs");
const thumbsDir = path.join(assetDir, "thumbnails");

const thumbWidth = 400;
const thumbHeight = thumbWidth;
const thumbQuality = 100;

for (const file of fs.readdirSync(pdfDir).map((f) => path.join(pdfDir, f))) {
  console.log(`Generating thumb for ${file}...`);

  const ext = path.extname(file);
  if (ext !== ".pdf") continue;

  gm(`${file}[0]`).thumb(
    thumbWidth,
    thumbHeight,
    path.join(thumbsDir, `${path.basename(file, ext)}.png`),
    thumbQuality,
    (e) => (e ? console.error(e) : null)
  );
}

console.log("Done!");
