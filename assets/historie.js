/* HISTORIE: render opowieści o parach (DRZEWO.stories) i przydomków gałęzi (DRZEWO.nicknames). */
(function () {
  "use strict";
  const A = window.APP, D = A.D;
  const { esc, byId, actById, plink, certBadge, actRefs, srcLinks, lifeShort, fullName, dist, genPl } = A;

  /* znaczniki w tekście: [[id|tekst]], ((idAktu|tekst)), {{prawd}} / {{hyp}} — najpierw esc, potem zamiana */
  const LINK = /\[\[([^|\]]+)\|([^\]]+)\]\]/g, ACT = /\(\(([^|)]+)\|([^)]+)\)\)/g, CERT = /\{\{(ok|prawd|hyp)\}\}\s*/g;
  const rich = s => esc(s)
    .replace(LINK, (_, id, t) => id.startsWith("#") || /\.html/.test(id) ? `<a href="${id}">${t}</a>` : byId.has(id) ? `<a href="osoba.html?id=${encodeURIComponent(id)}">${t}</a>` : t)
    .replace(ACT, (_, id, t) => actById.has(id) ? `<a href="akty.html#${encodeURIComponent(id)}">${t}</a>` : t)
    .replace(CERT, (_, c) => certBadge(c) + " ");

  const relOf = s => {
    const d = Math.min(...s.people.map(id => dist.get(id) || 99));
    if (d === 99) return "";
    return genPl(d - 1) + " Adriana" + (s.side === "babcia" ? " · strona babci Henryki" : "");
  };
  const actLabel = a => `${a.k} ${a.no === "—" ? a.y : a.no + "/" + a.y}`;

  const quoteHTML = q => {
    const a = actById.get(q.act); if (!a) return "";
    return `<figure class="hq"><blockquote class="act-q" lang="${a.y < 1826 ? "la" : a.y >= 1868 ? "ru" : "pl"}">„${esc(q.text)}”</blockquote>
      <figcaption>${q.tr ? `<span>czyli: ${esc(q.tr)}</span>` : ""}<a href="akty.html#${esc(a.id)}">akt: ${esc(actLabel(a))} →</a></figcaption></figure>`;
  };

  const coupleHTML = ids => ids.map((id, i) => {
    const p = byId.get(id); if (!p) return "";
    const life = lifeShort(p);
    return `<span class="hp">${i ? `<span class="x" aria-hidden="true">× </span>` : ""}${plink(id, fullName(p))}${life ? ` <span class="yrs">${esc(life)}</span>` : ""}</span>`;
  }).join(" ");

  const storyHTML = (s, i) => {
    const out = [];
    s.paragraphs.forEach((p, k) => {
      out.push(`<p>${rich(p)}</p>`);
      for (const q of (s.quotes || []).filter(q => q.at === k)) out.push(quoteHTML(q));
    });
    const acts = (s.acts || []).filter(id => actById.has(id));
    return `<article class="story" id="${esc(s.id)}" aria-labelledby="${esc(s.id)}-h">
      <p class="gn">${String(i + 1).padStart(2, "0")} · ${esc(relOf(s))}</p>
      <h2 class="story-t" id="${esc(s.id)}-h">${esc(s.title)}</h2>
      <p class="couple">${coupleHTML(s.people)}</p>
      <div class="prose">${out.join("")}</div>
      <div class="hsrc">
        ${acts.length ? `<p><b>Akty</b>${actRefs(acts)}</p>` : ""}
        ${(s.sources || []).length ? `<p><b>Źródła</b>${srcLinks(s.sources)}</p>` : ""}
      </div>
      <a class="top-link" href="#toc">↑ spis treści</a>
    </article>`;
  };

  /* spis treści */
  const S = D.stories || [];
  const groups = [["Antosiakowie z Połoni", S.filter(s => s.side !== "babcia")], ["Strona babci Henryki", S.filter(s => s.side === "babcia")]];
  document.getElementById("legend").innerHTML = A.legend();
  document.getElementById("toc").innerHTML = `<h2>Spis treści</h2>` + groups.map(([g, list]) => list.length ? `
    <p class="toc-g">${esc(g)}</p>
    <ol class="toc-l">${list.map(s => `<li><a href="#${esc(s.id)}"><span class="n">${String(S.indexOf(s) + 1).padStart(2, "0")}</span><span class="t">${esc(s.title.split(" — ")[0])}</span><span class="r">${esc(relOf(s).split(" · ")[0])}</span></a></li>`).join("")}</ol>` : "").join("") +
    `<p class="toc-g">Dodatek</p><ol class="toc-l"><li><a href="#przydomki"><span class="n">+</span><span class="t">Przydomki gałęzi</span><span class="r">Felcaki, Stańcaki, Walaski…</span></a></li></ol>`;

  document.getElementById("stories").innerHTML = S.map(storyHTML).join("");

  /* przydomki */
  const N = D.nicknames;
  if (N) {
    const node = n => `<li${n.me ? ' class="me"' : ""}><span class="nt">${rich(n.t)}</span>${n.nick ? ` <span class="nn">${esc(n.nick)}</span>` : ""}${n.kids ? `<ul>${n.kids.map(node).join("")}</ul>` : ""}</li>`;
    const refs = r => (r || []).map(x => x.url ? `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.label)} ↗</a>` : `<span>${esc(x.label)}</span>`).join("");
    document.getElementById("przydomki").innerHTML = `
      <h2 id="przydomki-h">Przydomki gałęzi</h2>
      <div class="prose">${N.intro.map(p => `<p>${rich(p)}</p>`).join("")}</div>
      <h3 class="sub">Kto od kogo</h3>
      <ul class="ntree" aria-label="Drzewko gałęzi">${N.tree.map(node).join("")}</ul>
      <p class="small muted">Pomarańczowa gałąź to linia Adriana. Felcaki, Marciny i „Kapka” to potomkowie Walentego; Stańcaki i Walaski — Stanisława, jego młodszego brata. Orłowscy i Teofile idą od braci Kacpra, więc wspólnym przodkiem z linią Adriana jest dopiero Paweł.</p>
      <h3 class="sub">Gałęzie</h3>
      <ul class="cards nb">${N.branches.map(b => `<li class="card${b.me ? " me" : ""}">
        <div class="card-kind"><span class="k">${esc(b.name)}</span>${certBadge(b.c)}${b.me ? `<span class="you">linia Adriana</span>` : ""}</div>
        <p>${rich(b.from)}</p>
        <p class="mem">${rich(b.members)}</p>
        ${b.note ? `<p class="mem">${rich(b.note)}</p>` : ""}
        <div class="src">${refs(b.refs)}${srcLinks(b.sources)}</div>
      </li>`).join("")}</ul>
      <h3 class="sub">Przezwiska pojedynczych osób i jedna pułapka</h3>
      <ul class="cards nb">${N.single.map(b => `<li class="card">
        <div class="card-kind"><span class="k">${esc(b.name)}</span>${certBadge(b.c)}</div>
        <p>${rich(b.text)}</p>
        <div class="src">${srcLinks(b.sources)}</div>
      </li>`).join("")}</ul>
      <div class="note">${N.notes.map(p => `<p>${rich(p)}</p>`).join("")}</div>
      <a class="top-link" href="#toc">↑ spis treści</a>`;
  }

  /* przewiń do kotwicy po wyrenderowaniu */
  if (location.hash) { const t = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (t) t.scrollIntoView(); }
})();
