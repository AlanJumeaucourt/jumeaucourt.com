import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const repoRoot = "/home/runner/work/jumeaucourt.com/jumeaucourt.com";

function read(file) {
  return fs.readFileSync(path.join(repoRoot, file), "utf8");
}

function textFromHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script\s*>/gi, " ")
    .replace(/<style[\s\S]*?<\/style\s*>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

test("homepage raw HTML contains meaningful no-JS content", () => {
  const indexHtml = read("index.html");
  assert.match(indexHtml, /<h1>Alan Jumeaucourt Portfolio<\/h1>/);
  const bodyText = textFromHtml(indexHtml);
  assert.ok(bodyText.length >= 500, `expected at least 500 chars, got ${bodyText.length}`);
});

test("trust anchor pages exist with at least 500 text chars", () => {
  const pages = [
    "public/about/index.html",
    "public/contact/index.html",
    "public/privacy/index.html",
  ];

  for (const page of pages) {
    const text = textFromHtml(read(page));
    assert.ok(text.length >= 500, `${page} should have at least 500 chars, got ${text.length}`);
  }
});

test("markdown trust pages and llms instructions exist", () => {
  const markdownFiles = [
    "public/index.md",
    "public/about.md",
    "public/contact.md",
    "public/privacy.md",
    "public/llms.txt",
    "public/404.md",
  ];

  for (const file of markdownFiles) {
    assert.ok(fs.existsSync(path.join(repoRoot, file)), `${file} should exist`);
  }

  const llms = read("public/llms.txt");
  assert.match(llms, /## When to use this site/);
  assert.match(llms, /Best-fit use cases:/);
});

test("404 pages include recovery links", () => {
  const html404 = read("public/404.html");
  const md404 = read("public/404.md");

  for (const target of ["/", "/about", "/contact", "/privacy", "/llms.txt", "/sitemap.xml"]) {
    assert.ok(html404.includes(target), `404.html missing ${target}`);
    assert.ok(md404.includes(target), `404.md missing ${target}`);
  }
});

test("vercel config adds markdown negotiation and Vary: Accept", () => {
  const vercel = JSON.parse(read("vercel.json"));

  const expectedSources = ["/", "/about", "/contact", "/privacy"];
  for (const source of expectedSources) {
    const rewrite = vercel.rewrites.find((entry) => entry.source === source);
    assert.ok(rewrite, `missing rewrite for ${source}`);
    assert.ok(rewrite.has?.some((condition) => condition.key === "accept"), `missing accept check for ${source}`);
  }

  const varyHeader = vercel.headers
    .flatMap((entry) => entry.headers || [])
    .find((header) => header.key.toLowerCase() === "vary");

  assert.ok(varyHeader, "missing Vary header");
  assert.equal(varyHeader.value, "Accept, Accept-Encoding");
});

test("sitemap references trust and machine-readable endpoints", () => {
  const sitemap = read("public/sitemap.xml");
  for (const url of [
    "https://jumeaucourt.com/about",
    "https://jumeaucourt.com/contact",
    "https://jumeaucourt.com/privacy",
    "https://jumeaucourt.com/llms.txt",
  ]) {
    assert.ok(sitemap.includes(url), `sitemap missing ${url}`);
  }
});
