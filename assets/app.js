/* Wspólne: nawigacja, motyw, indeksy grafu i helpery renderu. Bez zależności. */
(function () {
  "use strict";
  const D = window.DRZEWO;

  /* ── tekst ─────────────────────────────────────── */
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const plural = (n, one, few, many) => {
    const m10 = n % 10, m100 = n % 100;
    const w = n === 1 ? one : (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) ? few : many;
    return n + " " + w;
  };

  /* ── indeksy ───────────────────────────────────── */
  const byId = new Map(D.people.map(p => [p.id, p]));
  const actById = new Map(D.acts.map(a => [a.id, a]));
  const srcById = new Map(D.sources.map(s => [s.id, s]));
  const kids = new Map();
  const marr = new Map(); // id -> [{id, married}]
  // altParents: każda para to możliwa ścieżka; do grafu (dzieci, przodkowie, pokrewieństwo) wchodzą wszystkie
  const altSets = id => ((byId.get(id) || {}).altParents || []);
  const allParents = p => [...new Set([...(p.parents || []), ...(p.altParents || []).flatMap(a => a.parents)])];
  for (const p of D.people) {
    for (const par of allParents(p)) { if (!kids.has(par)) kids.set(par, []); kids.get(par).push(p.id); }
    for (const s of p.spouses || []) {
      const add = (a, b) => { if (!marr.has(a)) marr.set(a, []); if (!marr.get(a).some(x => x.id === b)) marr.get(a).push({ id: b, married: s.married || null }); };
      add(p.id, s.id); add(s.id, p.id);
    }
  }
  const byYear = (a, b) => (by(a) - by(b));
  const by = id => { const p = byId.get(id); return (p && p.born && p.born.y) || 9999; };
  for (const [k, v] of kids) v.sort(byYear);

  const person = id => byId.get(id);
  const children = id => (kids.get(id) || []).slice();
  const spouses = id => (marr.get(id) || []).slice();
  const parents = id => { const p = byId.get(id); return p ? allParents(p) : []; };
  const altParents = id => altSets(id).slice();
  // ścieżka (klucz pary z altParents), przez którą osoba łączy się z rodziną; null = poza ścieżkami
  const altOf = (child, par) => { const a = altSets(child).find(x => x.parents.includes(par)); return a || null; };
  const siblings = id => {
    const ps = parents(id); const out = new Set();
    for (const par of ps) for (const c of children(par)) if (c !== id) out.add(c);
    return [...out].sort(byYear);
  };
  const actsFor = id => D.acts.filter(a => a.osoby.includes(id)).sort((a, b) => a.y - b.y || (a.osoby[0] === id ? -1 : 1));
  const triviaFor = id => D.trivia.filter(t => (t.people || []).includes(id));
  const genFor = id => D.generations.find(g => g.man === id || g.woman === id);

  // przodkowie dziadków = linia prosta
  const direct = new Set();
  (function walk(ids) { for (const id of ids) { if (!id || direct.has(id)) continue; direct.add(id); walk(parents(id)); } })(["marian", "henryka"]);

  /* ── pokrewieństwo z perspektywy Adriana ─────────
     Adrian (wirtualny węzeł) = wnuk Mariana i Henryki. dist = liczba pokoleń od Adriana:
     2 dziadek, 3 pradziadek, 4 prapradziadek, 5+ „(dist−2)× pradziadek”. Rodzica Adriana nie pokazujemy. */
  const dist = new Map(), pathOf = new Map(); // pathOf: id przodka -> para z altParents (ścieżka A/B)
  (function () {
    const q = [["marian", 2, null], ["henryka", 2, null]];
    while (q.length) {
      const [id, d, path] = q.shift();
      if (dist.has(id) && dist.get(id) <= d) continue;
      dist.set(id, d); if (path) pathOf.set(id, path);
      for (const p of (byId.get(id) || {}).parents || []) q.push([p, d + 1, path]);
      for (const a of altSets(id)) for (const p of a.parents) q.push([p, d + 1, path || a]);
    }
  })();
  const pathTag = a => ` (ścieżka ${a.key}, ${CERT[a.c] || a.c})`;
  const ANC = (d, sex, c) => {
    if (c === "pl") return d === 2 ? "dziadkowie" : d === 3 ? "pradziadkowie" : d === 4 ? "prapradziadkowie" : `${d - 2}× pradziadkowie`;
    if (c === "plgen") return d === 2 ? "dziadków" : d === 3 ? "pradziadków" : d === 4 ? "prapradziadków" : `${d - 2}× pradziadków`;
    const f = sex === "f";
    const b = d === 2 ? (f ? ["babcia", "babci"] : ["dziadek", "dziadka"]) : d === 3 ? (f ? ["prababcia", "prababci"] : ["pradziadek", "pradziadka"])
      : d === 4 ? (f ? ["praprababcia", "praprababci"] : ["prapradziadek", "prapradziadka"]) : (f ? [`${d - 2}× prababcia`, `${d - 2}× prababci`] : [`${d - 2}× pradziadek`, `${d - 2}× pradziadka`]);
    return c === "gen" ? b[1] : b[0];
  };
  const genName = (n, sex) => {
    if (sex === "f") return /ia$/.test(n) ? n.slice(0, -1) + "i" : /[kg]a$/.test(n) ? n.slice(0, -1) + "i" : /a$/.test(n) ? n.slice(0, -1) + "y" : n;
    return /y$/.test(n) ? n.slice(0, -1) + "ego" : /ek$/.test(n) ? n.slice(0, -2) + "ka" : /er$/.test(n) ? n.slice(0, -2) + "ra" : /eł$/.test(n) ? n.slice(0, -2) + "ła" : n + "a";
  };
  const nameGen = id => { const p = byId.get(id); return p.genName || genName(p.given.split(" ")[0], p.sex); };
  const relCache = new Map();
  function relOf(id, depth = 0) {
    if (!depth && relCache.has(id)) return relCache.get(id);
    const p = byId.get(id); if (!p) return null;
    const f = p.sex === "f";
    let r = null;
    let path = null;
    if (dist.has(id)) { const d = dist.get(id); r = { nom: ANC(d, p.sex, "nom"), gen: ANC(d, p.sex, "gen"), kind: "anc", d }; path = pathOf.get(id) || null; }
    else {
      let best = null; const seen = new Set([id]); const q = [[id, 0]];
      while (q.length) { const [x, b] = q.shift(); for (const par of parents(x)) { if (seen.has(par)) continue; seen.add(par); if (dist.has(par)) { const a = dist.get(par); if (!best || a < best.a || (a === best.a && b + 1 < best.b)) best = { x: par, a, b: b + 1 }; } else q.push([par, b + 1]); } }
      if (best) {
        const { x, a, b } = best; path = pathOf.get(x) || null;
        const ancAt = t => { let cur = x; while (dist.get(cur) > t) { const nx = children(cur).find(c => dist.get(c) === dist.get(cur) - 1); if (!nx) return null; cur = nx; } return cur; };
        const t = a - b;
        if (b === 1 && a - 1 >= 2) { const c = ancAt(a - 1); if (c) { const tail = `${ANC(a - 1, byId.get(c).sex, "gen")} ${nameGen(c)}`; r = { nom: `${f ? "siostra" : "brat"} ${tail}`, gen: `${f ? "siostry" : "brata"} ${tail}`, kind: "sib" }; } }
        if (!r && t >= 2) { const c = ancAt(t); if (c) { const deg = b - 1, st = deg > 1 ? ` ${deg}. stopnia` : ""; const tail = `${ANC(t, byId.get(c).sex, "gen")} ${nameGen(c)}`; r = { nom: `${f ? "kuzynka" : "kuzyn"}${st} ${tail}`, gen: `${f ? "kuzynki" : "kuzyna"}${st} ${tail}`, kind: "cousin" }; } }
        if (!r) { const deg = Math.min(a, b) - 1, rem = Math.abs(a - b); const st = `${deg}. stopnia${rem ? `, ${rem}× ${f ? "usunięta" : "usunięty"}` : ""}`; r = { nom: `${f ? "kuzynka" : "kuzyn"} ${st}`, gen: `${f ? "kuzynki" : "kuzyna"} ${st}`, kind: "cousin" }; }
      } else if (!depth) {
        for (const s of spouses(id)) { const sr = relOf(s.id, 1); if (sr) { r = { nom: `${f ? "żona" : "mąż"} ${sr.gen}`, gen: `${f ? "żony" : "męża"} ${sr.gen}`, kind: "inlaw" }; break; } }
      }
    }
    if (r && path) r = { ...r, nom: r.nom + pathTag(path), gen: r.gen + pathTag(path), path: path.key };
    if (!depth) relCache.set(id, r);
    return r;
  }
  const rel = id => { const r = relOf(id); return r ? r.nom : ""; };
  const genPl = (n, c = "pl") => ANC(n + 1, "m", c);

  /* ── opis osoby ────────────────────────────────── */
  const fullName = p => {
    if (!p) return "";
    let s = p.given + (p.surname ? " " + p.surname : "");
    if (p.maiden) s += " " + p.maiden;
    return s;
  };
  const shortName = p => p ? p.given + (p.maiden ? " " + p.maiden : p.surname ? " " + p.surname : "") : "";
  const yr = e => !e ? "" : e.y ? (e.approx ? "ok. " : "") + e.y : (e.text || "");
  const lifeShort = p => {
    if (!p || p.private) return "";
    const b = p.born && p.born.y ? yr(p.born) : "", d = p.died ? yr(p.died) : "";
    if (b && d) return b + "–" + d;
    if (b) return "ur. " + b;
    if (d) return "zm. " + d;
    return "";
  };
  const dateStr = e => {
    if (!e) return "";
    const s = e.date ? ((e.approx && !/^ok\./.test(e.date) ? "ok. " : "") + e.date) : e.text ? e.text : yr(e);
    return s + (e.place ? (s ? ", " : "") + e.place : "");
  };
  const CERT = { ok: "pewne", prawd: "prawdopodobne", hyp: "hipoteza" };
  const mark = c => `<i class="mark ${c === "me" ? "me" : c}" aria-hidden="true"></i>`;
  const certBadge = c => `<span class="badge">${mark(c)}${CERT[c] || ""}</span>`;
  const fact = f => typeof f === "string" ? esc(f) : `${esc(f.t)} <span class="badge">${mark(f.c)}${CERT[f.c]}</span>`;
  const plink = (id, txt) => { const p = byId.get(id); return p ? `<a href="osoba.html?id=${encodeURIComponent(id)}">${esc(txt || fullName(p))}</a>` : esc(txt || id); };

  /* ── akty ──────────────────────────────────────── */
  const SW = "https://www.szukajwarchiwach.gov.pl/jednostka/-/jednostka/";
  const scanUrl = h => `https://photos.szukajwarchiwach.gov.pl/${h}_max`;
  const reading = a => a.idx ? "indeks" : (a.r || "");
  const actLinks = a => [
    a.scan ? `<a href="${scanUrl(a.scan)}" target="_blank" rel="noopener">skan ↗</a>` : "",
    a.unit ? `<a href="${SW}${a.unit}" target="_blank" rel="noopener">księga ${a.y} w archiwum ↗</a>` : "",
    a.fs ? `<a href="${esc(a.fs)}" target="_blank" rel="noopener">skan w FamilySearch ↗ (wymaga darmowego konta)</a>` : "",
    a.url ? `<a href="${esc(a.url)}" target="_blank" rel="noopener">skan w metryki.genealodzy.pl ↗</a>` : "",
    a.idx && !a.url && !a.scan ? `<span>skan niedostępny online (AP Pułtusk)</span>` : "",
  ].join("");
  const actHTML = (a, opt = {}) => `
    <li class="act" id="${esc(a.id)}">
      <div class="yr">${a.y}</div>
      <div>
        <div class="act-head"><span class="act-kind">${esc(a.k)} · akt ${esc(a.no)}</span><span class="act-title">${esc(a.t)}</span><span class="act-meta">${a.parish ? "parafia " + esc(a.parish) : "pokolenie " + genPl(a.g, "plgen")}${reading(a) ? " · " + esc(reading(a)) : ""}</span></div>
        ${a.q ? `<p class="act-q" lang="pl">„${esc(a.q)}”</p>` : ""}
        <p class="act-tr"><b>${a.idx ? "indeks" : "po współczesnemu"}</b>${esc(a.tr)}</p>
        ${opt.people !== false ? `<div class="act-people">${a.osoby.map(id => `<span>${plink(id, shortName(byId.get(id)))}${rel(id) ? ` <span class="rel">${esc(rel(id))}</span>` : ""}</span>`).join("")}</div>` : ""}
        <div class="act-links">${actLinks(a)}${opt.anchor ? `<a href="akty.html#${esc(a.id)}">w przeglądarce aktów</a>` : ""}</div>
      </div>
    </li>`;
  const srcLinks = ids => (ids || []).map(id => { const s = srcById.get(id); if (!s) return ""; return s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>` : `<span>${esc(s.label)}</span>`; }).join(" ");
  const srcShort = ids => (ids || []).map(id => { const s = srcById.get(id); if (!s) return ""; const t = s.short || s.label.split(/ — |, /)[0]; return s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener" title="${esc(s.label)}">${esc(t)}</a>` : `<span title="${esc(s.label)}">${esc(t)}</span>`; }).join(" ");
  const actRefs = ids => (ids || []).map(id => { const a = actById.get(id); return a ? `<a href="akty.html#${esc(id)}">akt: ${esc(a.k)} ${a.no === "—" ? a.y : a.no + "/" + a.y}</a>` : ""; }).join(" ");
  const refLinks = refs => (refs || []).map(r => r.scan ? `<a href="${scanUrl(r.scan)}" target="_blank" rel="noopener">${esc(r.label)} ↗</a>` : r.url ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.label)} ↗</a>` : `<span>${esc(r.label)}</span>`).join(" ");

  const legend = (extra = "") => `<div class="legend" aria-label="Legenda pewności">
      <span>${mark("ok")}pewne — akt, indeks lub wiedza rodzinna</span>
      <span>${mark("prawd")}prawdopodobne — zgodne poszlaki</span>
      <span>${mark("hyp")}hipoteza — trop do sprawdzenia</span>${extra}
    </div>`;

  /* ── nawigacja, motyw, stopka ─────────────────── */
  const PAGES = [
    ["index.html", "Start"], ["drzewo.html", "Drzewo"], ["historie.html", "Historie"], ["osoba.html", "Osoby"], ["akty.html", "Akty"],
    ["os-czasu.html", "Oś czasu"], ["mapa.html", "Mapa"], ["ciekawostki.html", "Ciekawostki"], ["kurpie.html", "Kurpie"],
    ["obrazy.html", "Obrazy"], ["siec.html", "Sieć"], ["statystyki.html", "Statystyki"], ["ameryka.html", "Ameryka"],
    ["babcia.html", "Babcia"], ["zrodla.html", "Źródła"],
  ];
  const here = (location.pathname.split("/").pop() || "index.html");
  function chrome() {
    const el = document.getElementById("chrome");
    if (el) {
      el.innerHTML = `<header class="top"><a href="index.html">adrianantosiak.pl/drzewo</a>
        <button class="toggle" id="theme" type="button" aria-label="Zmień motyw">[ motyw ]</button></header>
        <nav class="nav" aria-label="Sekcje"><ul>${PAGES.map(([h, t]) => `<li><a href="${h}"${h === here ? ' aria-current="page"' : ""}>${t}</a></li>`).join("")}</ul></nav>`;
      const cur = el.querySelector('[aria-current="page"]');
      const nav = el.querySelector(".nav");
      if (cur && nav && cur.offsetLeft + cur.offsetWidth > nav.clientWidth) nav.scrollLeft = cur.offsetLeft - 16;
      document.getElementById("theme").addEventListener("click", () => {
        const t = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = t;
        const m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = t === "light" ? "#eff1f5" : "#1e1e2e";
        try { localStorage.setItem("aa_theme", t); } catch (e) {}
      });
    }
    const as = document.getElementById("asof"); if (as) as.textContent = "Stan: " + D.asof;
    const f = document.getElementById("foot");
    if (f) f.innerHTML = `<span>Stan: ${esc(D.asof)}</span><a href="../">adrianantosiak.pl</a>`;
  }
  chrome();

  window.APP = { rel, relOf, genPl, dist, pathOf, altParents, altOf, nameGen, D, esc, plural, byId, actById, srcById, person, children, spouses, parents, siblings, actsFor, triviaFor, genFor,
    direct, fullName, shortName, yr, lifeShort, dateStr, CERT, mark, certBadge, fact, plink, actHTML, actLinks, srcLinks, srcShort, actRefs, refLinks, legend, scanUrl };
})();
