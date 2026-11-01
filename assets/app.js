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
  for (const p of D.people) {
    for (const par of p.parents || []) { if (!kids.has(par)) kids.set(par, []); kids.get(par).push(p.id); }
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
  const parents = id => ((byId.get(id) || {}).parents || []).slice();
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
        <div class="act-head"><span class="act-kind">${esc(a.k)} · akt ${esc(a.no)}</span><span class="act-title">${esc(a.t)}</span><span class="act-meta">${a.parish ? "parafia " + esc(a.parish) : "pokolenie " + a.g}${reading(a) ? " · " + esc(reading(a)) : ""}</span></div>
        ${a.q ? `<p class="act-q" lang="pl">„${esc(a.q)}”</p>` : ""}
        <p class="act-tr"><b>${a.idx ? "indeks" : "po współczesnemu"}</b>${esc(a.tr)}</p>
        ${opt.people !== false ? `<div class="act-people">${a.osoby.map(id => plink(id, shortName(byId.get(id)))).join("")}</div>` : ""}
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
    ["index.html", "Start"], ["drzewo.html", "Drzewo"], ["osoba.html", "Osoby"], ["akty.html", "Akty"],
    ["os-czasu.html", "Oś czasu"], ["ciekawostki.html", "Ciekawostki"], ["ameryka.html", "Ameryka"],
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

  window.APP = { D, esc, plural, byId, actById, srcById, person, children, spouses, parents, siblings, actsFor, triviaFor, genFor,
    direct, fullName, shortName, yr, lifeShort, dateStr, CERT, mark, certBadge, fact, plink, actHTML, actLinks, srcLinks, srcShort, actRefs, refLinks, legend, scanUrl };
})();
