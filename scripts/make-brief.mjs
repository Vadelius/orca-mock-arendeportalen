// Writes brief/arendeportalen-brief.docx from brief/brief.md (headings → Word heading styles, bullets → paragraphs).
import { readFileSync, writeFileSync } from "node:fs";
import { strToU8, zipSync } from "fflate";

const md = readFileSync(new URL("../brief/brief.md", import.meta.url), "utf8");
const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const p = (t, style) =>
  `<w:p>${style ? `<w:pPr><w:pStyle w:val="${style}"/></w:pPr>` : ""}<w:r><w:t xml:space="preserve">${esc(t)}</w:t></w:r></w:p>`;
const body = [];
for (const line of md.split("\n")) {
  const h = /^(#{1,3}) (.+)$/.exec(line);
  if (h) body.push(p(h[2], h[1].length === 1 ? "Title" : `Heading${h[1].length - 1}`));
  else if (/^\s*- /.test(line)) body.push(p(`• ${line.replace(/^\s*- /, "")}`));
  else if (line.trim()) body.push(p(line.trim()));
}
const doc = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body.join("")}</w:body></w:document>`;
const files = {
  "[Content_Types].xml": strToU8(
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`,
  ),
  "_rels/.rels": strToU8(
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`,
  ),
  "word/document.xml": strToU8(doc),
};
writeFileSync(new URL("../brief/arendeportalen-brief.docx", import.meta.url), zipSync(files, { mtime: new Date("2026-10-17T00:00:00Z") }));
console.info(`Wrote brief/arendeportalen-brief.docx (${body.length} paragraphs)`);
