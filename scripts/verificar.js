import { readdirSync, readFileSync, existsSync } from "node:fs";
import { resolve, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { transformWithOxc } from "vite";
const raiz = fileURLToPath(new URL("../", import.meta.url)),
  archivos = [];
function recorrer(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", "dist", ".git", "__pycache__"].includes(e.name))
      continue;
    const p = resolve(dir, e.name);
    if (e.isDirectory()) recorrer(p);
    else archivos.push(p);
  }
}
recorrer(raiz);
const fallos = [];
let modulos = 0,
  fragmentos = 0,
  referencias = 0;
function referencia(p, url) {
  if (/^(https?:|mailto:|data:|#)/.test(url)) return;
  const limpia = decodeURIComponent(url.split("#")[0].split("?")[0]);
  if (!limpia) return;
  referencias++;
  if (!existsSync(resolve(dirname(p), limpia)))
    fallos.push(`${p}: falta ${url}`);
}
async function sintaxis(codigo, nombre) {
  try {
    await transformWithOxc(codigo, nombre);
  } catch (error) {
    fallos.push(`${nombre}: ${String(error).slice(0, 500)}`);
  }
}
for (const p of archivos) {
  const ext = extname(p),
    texto = readFileSync(p, "utf8");
  if ([".js", ".jsx"].includes(ext)) {
    modulos++;
    await sintaxis(texto, p);
    for (const m of texto.matchAll(
      /\b(?:from\s*|import\s*)['"](\.[^'"]+)['"]/g,
    ))
      referencia(p, m[1]);
  }
  if (ext === ".html")
    for (const m of texto.matchAll(/\b(?:src|href)=["']([^"']+)["']/g)) {
      if (m[1].startsWith("/")) {
        if (!existsSync(resolve(raiz, m[1].slice(1))))
          fallos.push(`HTML: falta ${m[1]}`);
        else referencias++;
      } else referencia(p, m[1]);
    }
  if (ext === ".md") {
    if (
      /\uFFFD|Ã[\x80-\xBF]|Â[\x80-\xBF]|[\uE200\uE201]|contentReference|oaicite|<\|(?:im_start|im_end|system|assistant)\|>/.test(
        texto,
      )
    )
      fallos.push(`${p}: marca interna o codificación dañada`);

    for (const m of texto.matchAll(/```(js|jsx)\n([\s\S]*?)```/g)) {
      fragmentos++;
      await sintaxis(
        m[2],
        `${p}-fragmento-${fragmentos}.${m[1] === "jsx" ? "jsx" : "js"}`,
      );
    }
    const prosa = texto.replace(/```[^\n]*\n[\s\S]*?```/g, "");
    for (const m of prosa.matchAll(/\[[^\]]*\]\(([^\s)]+)\)/g))
      referencia(p, m[1]);
  }
}
const unidades = readdirSync(raiz)
  .filter((n) => /^unidad\d\d-/.test(n))
  .sort();
if (unidades.length !== 35) fallos.push("Se requieren las 35 unidades.");
for (const [i, u] of unidades.entries()) {
  if (!u.startsWith(`unidad${String(i).padStart(2, "0")}-`))
    fallos.push("Secuencia incorrecta");
  for (const f of [
    "README.md",
    "PRACTICA.md",
    "SOLUCIONES.md",
    "DESARROLLO.md",
  ])
    if (!existsSync(resolve(raiz, u, f))) fallos.push(`${u}/${f} ausente`);
  if (i < 33 && !existsSync(resolve(raiz, u, "ejemplo/App.jsx")))
    fallos.push(`Laboratorio ausente: ${u}`);
}
if (fallos.length) {
  console.error(fallos.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `${unidades.length} unidades, ${modulos} módulos, ${fragmentos} fragmentos y ${referencias} referencias locales comprobados.`,
  );
