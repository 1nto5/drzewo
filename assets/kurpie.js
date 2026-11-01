/* Strona kurpie.html: renderuje DRZEWO.kurpie (data/kurpie.js). */
(function () {
  "use strict";
  const A = window.APP, esc = A.esc, K = A.D.kurpie;
  const main = document.getElementById("main");
  if (!K || !main) return;

  /* znaczniki: **b**, *i*, [txt](url), {{id}} / {{id|txt}} — po esc() */
  const person = (id, txt) => {
    const r = A.rel(id);
    return A.plink(id, txt) + (r ? ` <span class="rel">(${esc(r)})</span>` : "");
  };
  const inline = s => esc(s)
    .replace(/\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}/g, (_, id, t) => person(id, t ? t.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">") : undefined))
    .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
    .replace(/\*([^*]+)\*/g, "<i>$1</i>")
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1 ↗</a>');

  const TAG = {
    rodzina: c => `<span class="ktag fam">${A.mark(c || "ok")}fakt o rodzinie${c === "prawd" ? " · prawdopodobne" : ""}</span>`,
    region: () => `<span class="ktag">kontekst</span>`,
    hipoteza: () => `<span class="ktag">${A.mark("hyp")}hipoteza</span>`,
  };
  const tag = b => b.tag && TAG[b.tag] ? TAG[b.tag](b.c) : "";

  const block = b => {
    if (typeof b === "string") return `<p>${inline(b)}</p>`;
    if (b.h) return `<h3>${inline(b.h)}</h3>`;
    if (b.list) return `${tag(b)}<ul class="klist">${b.list.map(x => `<li>${inline(x)}</li>`).join("")}</ul>`;
    if (b.table) return `${tag(b)}<div class="scroll ktable"><table>${b.caption ? `<caption>${inline(b.caption)}</caption>` : ""}<thead><tr>${b.table.head.map(h => `<th scope="col">${inline(h)}</th>`).join("")}</tr></thead><tbody>${b.table.rows.map(r => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${inline(c)}</th>` : `<td${b.table.head[i] ? ` data-h="${esc(b.table.head[i])}"` : ""}>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    return `<p>${tag(b)}${inline(b.t)}</p>`;
  };

  const credit = im => {
    const lic = im.licenseUrl ? `<a href="${esc(im.licenseUrl)}" target="_blank" rel="noopener license">${esc(im.license)}</a>` : esc(im.license);
    return `Autor: ${esc(im.author)} · ${lic} · <a href="${esc(im.sourceUrl)}" target="_blank" rel="noopener">Wikimedia Commons ↗</a>`;
  };
  const figure = im => `<figure class="kfig">
      <a class="kfig-img" href="img/${esc(im.file)}" target="_blank" rel="noopener" aria-label="Otwórz pełny obraz: ${esc(im.alt)}"><img src="img/${esc(im.file)}" width="${im.w}" height="${im.h}" alt="${esc(im.alt)}" loading="lazy" decoding="async"></a>
      <figcaption>${esc(im.caption)}<span class="credit">${credit(im)}</span></figcaption>
    </figure>`;

  const sources = arr => arr.length ? `<div class="src ksrc"><span class="ksrc-h">Źródła:</span> ${arr.map(s => (s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>` : `<span>${esc(s.label)}</span>`) + (s.note ? ` <span class="muted">(${esc(s.note)})</span>` : "")).join("<span class=\"sep\"> · </span>")}</div>` : "";
  const hyps = arr => arr.length ? `<div class="note khyp">${arr.map(h => `<p>${A.mark("hyp")}<b>hipoteza</b> — ${inline(h)}</p>`).join("")}</div>` : "";

  const sec = (s, i) => `<section class="ksec" id="${esc(s.id)}" aria-labelledby="${esc(s.id)}-h">
      <h2 id="${esc(s.id)}-h"><span class="knum">${String(i + 1).padStart(2, "0")}</span>${esc(s.title)}</h2>
      <div class="kbody${s.images.length ? " has-img" : ""}">
        <div class="prose">${s.paragraphs.map(block).join("")}${hyps(s.hyp)}</div>
        ${s.images.length ? `<div class="kfigs">${s.images.map(figure).join("")}</div>` : ""}
      </div>
      ${sources(s.sources)}
    </section>`;

  main.innerHTML = `
    <section class="page-h">
      <h1>Kurpie i „Godowie”<span class="dot">.</span></h1>
      <p class="lead">${esc(K.lead)}</p>
      <div class="legend" aria-label="Oznaczenia">
        <span>${A.mark("ok")}fakt o rodzinie</span>
        <span>${A.mark("prawd")}prawdopodobne</span>
        <span>kontekst — tło regionu</span>
        <span>${A.mark("hyp")}hipoteza — nasz domysł lub trop do sprawdzenia</span>
      </div>
    </section>
    <nav class="ktoc" aria-label="Spis treści">
      <h2>Spis treści</h2>
      <ol>${K.sections.map(s => `<li><a href="#${esc(s.id)}">${esc(s.title)}</a></li>`).join("")}</ol>
    </nav>
    ${K.sections.map(sec).join("")}
    <p class="note small">Cytaty z pieśni ograniczamy do tytułów (incypitów) — z szacunku dla nagrań i praw do nich. Zdjęcia: autor, licencja i źródło pod każdym obrazem. Więcej obrazów: <a href="obrazy.html">Historia wsi w obrazach</a>.</p>`;

  if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
})();
