/* Statystyki rodu: wykresy SVG z DRZEWO.stat (data/statystyki.js). Bez zależności poza window.APP. */
(function () {
  "use strict";
  const A = window.APP, S = A.D.stat, esc = A.esc;
  const $ = s => document.querySelector(s);
  const num = x => String(x).replace(".", ",");
  const lat = x => Number.isInteger(x) ? A.plural(x, "rok", "lata", "lat") : num(x) + " roku";
  const pct = (v, max) => (Math.max(0, Math.min(1, v / max)) * 100).toFixed(2) + "%";
  // „[tekst](id)” → link do osoby (reszta escapowana)
  const md = s => esc(s || "").replace(/\[([^\]]+)\]\(([a-z0-9-]+)\)/g, (m, t, id) => A.byId.has(id) ? A.plink(id, t) : t);
  const who = ([id, name]) => id && A.byId.has(id) ? A.plink(id, name) : esc(name);

  const axis = (max, step) => {
    let t = "";
    for (let v = 0; v <= max; v += step) {
      const anchor = v === 0 ? "start" : v === max ? "end" : "middle";
      t += `<line x1="${pct(v, max)}" x2="${pct(v, max)}" y1="0" y2="4"/><text x="${pct(v, max)}" y="16" text-anchor="${anchor}">${v}</text>`;
    }
    return `<svg class="c-axis" width="100%" height="20" aria-hidden="true">${t}</svg>`;
  };

  /* mediana jako słupek + zakres min–max jako cienka kreska */
  const medianChart = (groups, max, step) => groups.map(g => {
    const range = g.min != null ? `<line class="c-range" x1="${pct(g.min, max)}" x2="${pct(g.max, max)}" y1="7" y2="7"/>
        <line class="c-range" x1="${pct(g.min, max)}" x2="${pct(g.min, max)}" y1="3" y2="11"/><line class="c-range" x1="${pct(g.max, max)}" x2="${pct(g.max, max)}" y1="3" y2="11"/>` : "";
    const meta = [g.avg != null ? `średnia ${num(g.avg)}` : "", g.min != null ? `zakres ${g.min}–${g.max}` : ""].filter(Boolean).join(" · ");
    return `<div class="hb${g.sub ? " sub" : ""}">
      <div class="hb-h"><span class="hb-l">${esc(g.label)} <span class="hb-n">n = ${g.n}</span></span><b class="hb-v">mediana ${lat(g.med)}</b></div>
      <svg class="hb-s" width="100%" height="14" role="img" aria-label="${esc(g.label)}: mediana ${lat(g.med)}${meta ? ", " + meta : ""}">
        <title>${esc(g.label)}: mediana ${lat(g.med)}${meta ? " (" + meta + ")" : ""}</title>
        <rect class="c-track" x="0" y="3" width="100%" height="8" rx="2"/>
        <rect class="c-bar${g.sub ? " alt" : ""}" x="0" y="3" width="${pct(g.med, max)}" height="8" rx="2"/>${range}
      </svg>
      ${meta || g.note ? `<div class="hb-note">${meta}${meta && g.note ? " · " : ""}${md(g.note)}</div>` : ""}
    </div>`;
  }).join("") + axis(max, step) + `<p class="c-cap">Oś: wiek w latach. Kolorowy słupek = mediana, cienka kreska z „wąsami” = od najmłodszego do najstarszego.</p>`;

  /* los dzieci: słupek skumulowany */
  const SEG = [["d1", "zm. przed 1. rokiem", true], ["d5", "zm. w wieku 1–5 lat", false], ["adult", "dorosłe", true], ["surv", "przeżyło dzieciństwo", false], ["unk", "nieznane (luka w księgach)", false]];
  const sw = k => `<svg width="14" height="14" aria-hidden="true"><rect class="s-${k}" x="0.5" y="0.5" width="13" height="13" rx="2"/></svg>`;
  const stack = (c, max) => {
    let x = 0, s = "";
    for (const [k, name, inv] of SEG) {
      const v = c[k]; if (!v) continue;
      const w = v / max * 100;
      s += `<g><title>${esc(name)}: ${v}</title><rect class="seg s-${k}" x="${x.toFixed(2)}%" y="0" width="${w.toFixed(2)}%" height="22" rx="3"/>
        <text class="seg-t${inv ? " inv" : ""}" x="${(x + w / 2).toFixed(2)}%" y="11">${v}</text></g>`;
      x += w;
    }
    return `<svg class="hb-s" width="100%" height="22" role="img" aria-label="${SEG.map(([k, n]) => `${n}: ${c[k]}`).join(", ")}">${s}</svg>`;
  };

  function render() {
    const el = $("#stat"); if (!el) return;
    const T = S.dzieciRazem, known = T.n - T.unk, dead = T.d1 + T.d5;
    const pc = (a, b) => Math.round(a / b * 100) + "%";
    const maxN = Math.max(...S.dzieci.map(c => c.n));
    const nmMax = Math.max(...S.imiona.flatMap(p => p.top.map(t => t[1])));

    el.innerHTML = `
    <dl class="stats">
      <div><dt>mediana wieku przy ślubie: mężczyźni / kobiety</dt><dd>${num(S.slub[0].med)} / ${num(S.slub[3].med)}</dd></div>
      <div><dt>mediana wieku przy śmierci: mężczyźni / kobiety</dt><dd>${num(S.zgon[0].med)} / ${num(S.zgon[1].med)}</dd></div>
      <div><dt>dzieci zmarło przed 6. urodzinami (${dead} z ${known})</dt><dd>${pc(dead, known)}</dd></div>
    </dl>

    <h2>Wiek przy pierwszym ślubie</h2>
    <div class="prose"><p>Mężczyźni z rodu brali ślub zwykle w wieku <b>23–24 lat</b>, kobiety w wieku <b>20 lat</b>. <b>Mężczyźni żenili się coraz młodziej:</b> przed 1830 r. mediana wynosiła 28,5 roku, potem już 22,5. 10 z 15 kobiet brało ślub przed ukończeniem 21 lat.</p></div>
    <div class="charts">${medianChart(S.slub, 50, 10)}</div>
    <p class="note"><b>Nietypowe śluby.</b> ${A.plink("jan-w", "Jan")}, syn Walentego, w wieku 19 lat poślubił 40-letnią wdowę ${A.plink("marianna-sz", "Mariannę Szlagową")} (1853). ${A.plink("andrzej-k", "Andrzej")}, syn Kacpra, ożenił się dopiero w wieku 45 lat, z wdową (1837).</p>

    <h2>Wiek przy śmierci (dorośli)</h2>
    <div class="prose"><p>19 zgonów dorosłych z Połoni, lata 1795–1907. <b>10 z 19 dożyło 60 lat lub więcej.</b> Synowie Pawła dożyli 69–78 lat: ${S.zgonPrzyklady.slice(1).map(([id, n, a]) => `${A.plink(id, n)} ${a}`).join(", ")}; sam ${A.plink("pawel", "Paweł")} miał 74 lata. Kobiety w tej grupie umierały młodziej, część przy porodzie lub zaraz po nim.</p></div>
    <div class="charts">${medianChart(S.zgon, 80, 20)}</div>

    <h2>Śmierć dzieci</h2>
    <div class="prose"><p><b>Z trojga dzieci zwykle co najmniej jedno nie dożywało 6 lat.</b> Wśród ${known} dzieci, o których wiemy, czy przeżyły dzieciństwo, ${dead} (${pc(dead, known)}) zmarło przed 6. urodzinami, a ${T.d1} (${pc(T.d1, known)}) przed 1. urodzinami. Gdyby liczyć wszystkie ${T.n} dzieci, wynik mieści się między ${pc(dead, T.n)} (wszystkie „nieznane” przeżyły) a ${pc(dead + T.unk, T.n)} (wszystkie zmarły).</p></div>
    <div class="charts">
      <div class="legend-c" aria-label="Legenda">${SEG.map(([k, n]) => `<span>${sw(k)}${esc(n)}</span>`).join("")}</div>
      ${S.dzieci.map(c => `<div class="hb">
        <div class="hb-h"><span class="hb-l">${who(c.a)} × ${who(c.b)} <span class="hb-n">${esc(c.yrs)}</span></span><b class="hb-v">${A.plural(c.n, "dziecko", "dzieci", "dzieci")}</b></div>
        ${stack(c, maxN)}
        ${c.note ? `<div class="hb-note">${md(c.note)}</div>` : ""}
      </div>`).join("")}
      <div class="hb">
        <div class="hb-h"><span class="hb-l"><b>Razem</b> <span class="hb-n">7 par, 100% = ${T.n}</span></span><b class="hb-v">${T.n} dzieci</b></div>
        ${stack(T, T.n)}
      </div>
      <p class="c-cap">Długość słupka pary = liczba dzieci (najwięcej ${maxN}). Liczby w środku = ile dzieci w danej grupie.</p>
    </div>

    <h2>Najczęstsze imiona według okresów</h2>
    <div class="prose"><p>Dzieci o nazwisku Antosiak/Jentosiak urodzone w Połoni, ze wszystkich gałęzi, według lat urodzenia. <b>Marianna</b> (razem z Maryanną) jest najczęstszym imieniem w każdym okresie od 1786 r. Gdy dziecko umierało, następne często dostawało to samo imię: ${A.plink("wawrzyniec-w1", "Wawrzyniec 1829")} i ${A.plink("wawrzyniec-w2", "1830")}, ${A.plink("adam-fe72", "Adam 1872")} i ${A.plink("adam-fe78", "1878")}.</p></div>
    <div class="names">${S.imiona.map(p => `<div>
      <h3>${esc(p.okres)} <small>${A.plural(p.n, "dziecko", "dzieci", "dzieci")}${p.src === "FB" ? ` · <span class="src-tag">wg FB (źródło wtórne)</span>` : ""}</small></h3>
      ${p.top.map(([n, v]) => `<div class="nm"><b>${esc(n)}</b>
        <svg width="100%" height="10" role="img" aria-label="${esc(n)}: ${v}"><title>${esc(n)}: ${v} z ${p.n}</title><rect class="c-track" x="0" y="1" width="100%" height="8" rx="2"/><rect class="c-bar" x="0" y="1" width="${pct(v, nmMax)}" height="8" rx="2"/></svg>
        <span>${v}</span></div>`).join("")}
      ${p.rest ? `<p class="nm-rest">po 1: ${esc(p.rest)}</p>` : ""}
    </div>`).join("")}</div>
    <p class="c-cap">Skala wspólna dla wszystkich okresów (pełny słupek = ${nmMax} dzieci).</p>

    <h2>Metoda</h2>
    <div class="prose">
      <p><b>Skąd liczby.</b> Z aktów chrztu, ślubu i zgonu parafii Chorzele (FamilySearch 1695–1825, AP Pułtusk 1826–1865, metryki.genealodzy.pl 1866–1926), policzone skryptem osoba po osobie. Strona pokazuje gotowe wyniki z naszego opracowania; drzewo na tej stronie zawiera tylko lata urodzeń i zgonów (bez dat dziennych i nie każdą osobę), więc z niego samego nie da się odtworzyć median co do miesiąca.</p>
      <p><b>Co liczone.</b> Wiek przy ślubie: pierwszy ślub, ${S.slub[0].n} mężczyzn z rodu i ${S.slub[3].n} kobiet (córki rodu i żony Antosiaków); wiek z aktu ślubu, a gdy go brak (XVIII w.) — z daty chrztu. Wiek przy śmierci: ${S.zgon[2].n} dorosłych; z dat, gdy znamy chrzest, inaczej z aktu zgonu. Śmierć dzieci: ${T.n} dzieci z ${S.dzieci.length} par, tylko tam, gdzie przejrzeliśmy księgi zgonów z lat ich dzieciństwa. Imiona: ${S.imiona.reduce((s, p) => s + p.n, 0)} dzieci, Marianna i Maryanna razem.</p>
    </div>
    <div class="note"><p><b>Uczciwie o ograniczeniach</b></p><ul class="limits">${S.limits.map(l => `<li>${esc(l)}</li>`).join("")}</ul></div>
    <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect class="hatch-b" width="6" height="6"/><line class="hatch-l" x1="0" y1="0" x2="0" y2="6"/></pattern></defs></svg>`;
  }
  render();
})();
