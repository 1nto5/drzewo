/* Sieć sąsiadów: wszystko liczone na żywo z DRZEWO.siec.rows (data/siec.js), więc zgadza się z plikiem danych. */
(function () {
  "use strict";
  const A = window.APP, N = A.D.siec, esc = A.esc;
  const R = N.rows;
  const md = s => esc(s || "").replace(/\[([^\]]+)\]\(([a-z0-9-]+)\)/g, (m, t, id) => A.byId.has(id) ? A.plink(id, t) : t);
  const pct = (v, max) => (Math.max(0, Math.min(1, v / max)) * 100).toFixed(2) + "%";
  const pc = (a, b) => Math.round(a / b * 100) + "%";
  const uniq = arr => new Set(arr).size;
  const ROD = "ród (Antosiak)", SL = "służba kościelna";
  const isOther = r => r.zw !== ROD && r.zw !== SL && r.rodzina && r.rodzina !== "Antosiak";
  const PERIODS = [[1720, 1825], [1826, 1865], [1866, 1907]];
  const actType = a => a.charAt(0);

  /* ranking rodzin */
  const fam = new Map();
  for (const r of R) if (isOther(r)) { if (!fam.has(r.rodzina)) fam.set(r.rodzina, []); fam.get(r.rodzina).push(r); }
  const ranking = [...fam].map(([name, rs]) => ({ name, n: rs.length, acts: uniq(rs.map(r => r.akt)), y0: Math.min(...rs.map(r => r.y)), y1: Math.max(...rs.map(r => r.y)), info: (N.rodziny || {})[name] }))
    .sort((a, b) => b.n - a.n || b.acts - a.acts || a.name.localeCompare(b.name, "pl"));
  let pos = 0, last = null;
  ranking.forEach((f, i) => { if (f.n !== last) { pos = i + 1; last = f.n; } f.pos = pos; });
  const top = ranking.filter(f => f.n >= 5);
  const maxN = top[0].n;

  const rod = R.filter(r => r.zw === ROD), sl = R.filter(r => r.zw === SL);
  const acts = uniq(R.map(r => r.akt));
  const y0 = Math.min(...R.map(r => r.y)), y1 = Math.max(...R.map(r => r.y));

  /* graf: Antosiakowie w środku, rodziny wokół; grubość = liczba wpisów */
  function graph() {
    const W = 360, H = 340, cx = 180, cy = 172, Rr = 118;
    const k = top.length;
    let edges = "", nodes = "";
    top.forEach((f, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / k;
      const x = cx + Rr * Math.cos(a), y = cy + Rr * Math.sin(a);
      const typ = f.info ? f.info.typ : "sasiad";
      const sw = (1.5 + 9 * f.n / maxN).toFixed(1);
      const r = (7 + 2.2 * Math.sqrt(f.n)).toFixed(1);
      const tip = `${f.name}: ${f.n} wpisów w ${f.acts} aktach (${f.y0}–${f.y1})`;
      edges += `<line class="g-edge ${typ}" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke-width="${sw}"><title>${esc(tip)}</title></line>`;
      const ly = Math.sin(a) < -0.3 ? y - (+r) - 6 : y + (+r) + 15; // etykieta po zewnętrznej stronie, z dala od linii
      nodes += `<g><title>${esc(tip)}</title><circle class="g-node ${typ}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}"/>
        <text class="g-n" x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}">${f.n}</text>
        <text class="g-l" x="${x.toFixed(1)}" y="${ly.toFixed(1)}">${esc(f.name)}</text></g>`;
    });
    return `<figure class="graph"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Graf: rodzina Antosiaków w środku, wokół ${k} rodzin, które najczęściej były chrzestnymi i świadkami. ${top.map(f => `${f.name} ${f.n}`).join(", ")}.">
      ${edges}${nodes}
      <circle class="g-center" cx="${cx}" cy="${cy}" r="36"><title>Sami Antosiakowie: ${rod.length} wpisów</title></circle>
      <text class="g-ct" x="${cx}" y="${cy + 1}">Antosiak</text><text class="g-cs" x="${cx}" y="${cy + 15}">ród: ${rod.length}</text>
    </svg>
    <div class="g-key"><span><i></i>rodzina lub skoligaceni (ślub z Antosiakiem)</span><span><i class="s"></i>sąsiedzi</span></div>
    <figcaption class="c-cap">Grubość linii i liczba w kółku = ile razy ktoś z tej rodziny był chrzestnym, świadkiem albo zgłaszającym przy akcie Antosiaka. Bez samych Antosiaków i bez służby kościelnej.</figcaption></figure>`;
  }

  const bar = (v, max, label, cls = "") => `<svg class="hb-s" width="100%" height="10" role="img" aria-label="${esc(label)}"><title>${esc(label)}</title><rect class="c-track" x="0" y="1" width="100%" height="8" rx="2"/><rect class="c-bar ${cls}" x="0" y="1" width="${pct(v, max)}" height="8" rx="2"/></svg>`;

  function rankList() {
    return `<ol class="rank">${top.map(f => `<li class="hb">
      <div class="hb-h"><span class="hb-l"><span class="pos">${f.pos}</span> <b>${esc(f.name)}</b>${f.info ? `<span class="tag ${f.info.typ}">${f.info.typ === "krew" ? "rodzina" : "sąsiedzi"}</span>` : ""}</span>
        <b class="hb-v">${f.n}× <span class="hb-n">w ${A.plural(f.acts, "akcie", "aktach", "aktach")} · ${f.y0}–${f.y1}</span></b></div>
      ${bar(f.n, maxN, `${f.name}: ${f.n}`, f.info && f.info.typ === "krew" ? "" : "alt")}
      ${f.info && f.info.note ? `<div class="hb-note">${md(f.info.note)}</div>` : ""}
    </li>`).join("")}</ol>
    <p class="c-cap">Dalej: ${ranking.filter(f => f.n < 5 && f.n >= 3).map(f => `${esc(f.name)} ${f.n}`).join(", ")}; pozostałe rodziny po 1–2 razy.</p>`;
  }

  function periods() {
    return `<div class="charts">${PERIODS.map(([a, b]) => {
      const rs = R.filter(r => r.y >= a && r.y <= b);
      const c = new Map(); for (const r of rs) if (isOther(r)) c.set(r.rodzina, (c.get(r.rodzina) || 0) + 1);
      const t = [...c].sort((x, y) => y[1] - x[1]).filter(x => x[1] >= 2).slice(0, 5);
      const rr = rs.filter(r => r.zw === ROD).length;
      return `<div class="hb"><div class="hb-h"><span class="hb-l"><b>${a}–${b}</b> <span class="hb-n">${A.plural(uniq(rs.map(r => r.akt)), "akt", "akty", "aktów")}, ${A.plural(rs.length, "wpis", "wpisy", "wpisów")}</span></span><span class="hb-n">sami Antosiakowie: ${rr} (${pc(rr, rs.length)})</span></div>
        <div class="hb-note per">${t.length ? t.map(([n, v]) => `<b>${esc(n)}</b> ${v}`).join(" · ") : "—"}${b === 1907 ? " · za mało danych, by mówić o trendzie" : ""}</div></div>`;
    }).join("")}</div>`;
  }

  /* chrzestni wg związku z rodem + efekt organisty */
  function godparents() {
    const g = R.filter(r => r.rola === "chrzestny" || r.rola === "chrzestna");
    const c = new Map(); for (const r of g) c.set(r.zw, (c.get(r.zw) || 0) + 1);
    const rows = [...c].sort((a, b) => b[1] - a[1]);
    const mx = rows[0][1];
    const bapt = (a, b) => {
      const ids = [...new Set(R.filter(r => actType(r.akt) === "B" && r.y >= a && r.y <= b && r.rola === "chrzestny").map(r => r.akt))];
      const org = ids.filter(id => R.some(r => r.akt === id && r.rola === "chrzestny" && r.zw === SL)).length;
      const kin = ids.filter(id => R.some(r => r.akt === id && (r.rola === "chrzestny" || r.rola === "chrzestna") && [ROD, "rodzina żony", "powinowaty"].includes(r.zw))).length;
      return { n: ids.length, org, kin };
    };
    const p1 = bapt(1826, 1849), p2 = bapt(1850, 1865);
    return `<div class="prose"><p>W ${uniq(g.map(r => r.akt))} chrztach jest ${g.length} chrzestnych. Najczęściej byli to sąsiedzi z Połoni.</p></div>
    <div class="charts">${rows.map(([zw, v]) => `<div class="hb"><div class="hb-h"><span class="hb-l">${esc(zw)}</span><b class="hb-v">${v}</b></div>${bar(v, mx, `${zw}: ${v}`, zw === SL ? "" : "alt")}</div>`).join("")}</div>
    <h3 class="h3-sec">Ojciec chrzestny z kościoła</h3>
    <div class="prose"><p><b>W latach 1826–1849 ojcem chrzestnym był często organista albo sługa kościelny z Chorzel.</b> Organiści: Mikołaj Piekarski, Mikołaj Fiałkowski, Franciszek Cieciorski[?]; słudzy: Jan Kostrzewski, Marcin Jenański[?], Maciej Białobrzeski. Możliwe, że rodzina przychodziła do kościoła bez chrzestnego i brała go na miejscu (hipoteza). Po 1850 r. tak nie było ani razu — wtedy chrzestnymi byli zwykle krewni.</p></div>
    <div class="charts">
      <div class="hb"><div class="hb-h"><span class="hb-l">1826–1849 <span class="hb-n">chrzty z ojcem chrzestnym: ${p1.n}</span></span><b class="hb-v">${p1.org} z ${p1.n} — służba kościelna</b></div>${bar(p1.org, p1.n, `1826–1849: ${p1.org} z ${p1.n}`)}</div>
      <div class="hb"><div class="hb-h"><span class="hb-l">1850–1865 <span class="hb-n">chrzty z ojcem chrzestnym: ${p2.n}</span></span><b class="hb-v">${p2.org} z ${p2.n} — służba kościelna</b></div>${bar(p2.org, p2.n, `1850–1865: ${p2.org} z ${p2.n}`)}</div>
      <div class="hb"><div class="hb-h"><span class="hb-l">1850–1865</span><b class="hb-v">${p2.kin} z ${p2.n} — krewni</b></div>${bar(p2.kin, p2.n, `1850–1865 krewni: ${p2.kin} z ${p2.n}`, "ok")}</div>
    </div>
    <p class="c-cap">Służba kościelna to łącznie ${sl.length} wpisów w ${uniq(sl.map(r => r.akt))} aktach. Gdyby jej nie wyłączyć z rankingu, organista Mikołaj Piekarski (${R.filter(r => /Piekarski/.test(r.nazwisko)).length} wpisów) byłby najczęstszą osobą spoza rodu.</p>`;
  }

  /* osoby najczęściej */
  function people() {
    const c = new Map();
    for (const r of R) { if (r.zw === SL || !r.rodzina) continue; const k = r.imie.replace(/\s*\(.*\)/, "") + " " + r.rodzina; if (!c.has(k)) c.set(k, []); c.get(k).push(r); }
    const list = [...c].map(([k, rs]) => ({ k, rs, n: rs.length, id: rs.every(r => r.id && r.id === rs[0].id) ? rs[0].id : null }))
      .filter(p => p.n >= 5).sort((a, b) => b.n - a.n);
    return `<div class="scroll"><table class="net"><thead><tr><th>Ile</th><th>Osoba</th><th>Lata</th><th>Uwagi</th></tr></thead><tbody>
    ${list.map(p => {
      const ys = p.rs.map(r => r.y), rel = p.id ? A.rel(p.id) : "";
      return `<tr><td>${p.n}</td><td>${p.id ? A.plink(p.id, p.k) : esc(p.k)}${rel ? `<br><span class="prel">${esc(rel)}</span>` : ""}</td><td>${Math.min(...ys)}–${Math.max(...ys)}</td><td>${esc((N.osobyNote || {})[p.k] || "")}</td></tr>`;
    }).join("")}</tbody></table></div>`;
  }

  /* wszystkie akty */
  function allActs() {
    const by = new Map(); for (const r of R) { if (!by.has(r.akt)) by.set(r.akt, []); by.get(r.akt).push(r); }
    const list = [...by].sort((a, b) => a[1][0].y - b[1][0].y);
    const person = r => {
      const name = `${r.imie} ${r.nazwisko}`;
      const rel = r.id ? A.rel(r.id) : "";
      return `<span class="pp">${r.id ? A.plink(r.id, name) : esc(name)}${rel ? ` <span class="prel">(${esc(rel)})</span>` : ""} <span class="prel">— ${esc(r.rola)}${r.wies ? ", " + esc(r.wies) : ""}; ${esc(r.zw)}</span></span>`;
    };
    return `<details class="all"><summary>Pokaż wszystkie ${list.length} aktów (${R.length} wpisów)</summary>
      <div class="scroll"><table class="net acts"><thead><tr><th>Rok</th><th>Akt</th><th>Chrzestni, świadkowie, zgłaszający</th></tr></thead><tbody>
      ${list.map(([akt, rs]) => `<tr><td>${rs[0].y}</td><td>${rs[0].url ? `<a href="${esc(rs[0].url)}" target="_blank" rel="noopener">${esc(akt)} ↗</a>` : esc(akt)}</td><td>${rs.map(person).join("")}</td></tr>`).join("")}
      </tbody></table></div></details>`;
  }

  function others() {
    return `<div class="scroll"><table class="net"><thead><tr><th>Rok</th><th>Kto z rodu</th><th>U kogo</th><th>Źródło</th></tr></thead><tbody>
    ${N.uInnych.map(u => `<tr><td>${u.y}<br><span class="prel">${esc(u.akt)}</span></td><td>${md(u.kto)}</td><td>${md(u.u)}</td><td><a href="${esc(u.url)}" target="_blank" rel="noopener">${esc(u.src)} ↗</a></td></tr>`).join("")}
    </tbody></table></div>`;
  }

  const T = { B: 0, S: 0, D: 0 }; for (const a of new Set(R.map(r => r.akt))) T[actType(a)]++;
  const el = document.getElementById("net");
  el.innerHTML = `
    <dl class="stats">
      <div><dt>aktów (${T.B} chrztów, ${T.S} ślubów, ${T.D} zgonów)</dt><dd>${acts}</dd></div>
      <div><dt>wpisów „akt–osoba”</dt><dd>${R.length}</dd></div>
      <div><dt>lata</dt><dd>${y0}–${y1}</dd></div>
      <div><dt>wpisów to sami Antosiakowie</dt><dd>${pc(rod.length, R.length)}</dd></div>
    </dl>

    <h2>Rodziny wokół Antosiaków</h2>
    <div class="prose"><p><b>Kutowie to rodzina najmocniej związana z rodem w Połoni.</b> W XVIII w. Antosiakowie i Kutowie trzymali sobie nawzajem dzieci do chrztu, potem kilka razy się pożenili. Później obok Kutów pojawiają się Bańkowie i Wróble.</p></div>
    ${graph()}

    <h2>Kto stał przy Antosiakach najczęściej</h2>
    ${rankList()}

    <h2>Zmiany w czasie</h2>
    <div class="prose"><p>W latach 1720–1825 prawie co czwarty chrzestny lub świadek to Kuta. W latach 1826–1865 dochodzą Bańkowie i Wróble. Z lat 1866–1907 mamy tylko ${uniq(R.filter(r => r.y >= 1866).map(r => r.akt))} aktów z odczytanymi świadkami — widać tylko Rybińskich z Łazu przy drugim ślubie i zgonie ${A.plink("rozalia-s", "Rozalii")}.</p></div>
    ${periods()}

    <h2>Ród pomagał sobie sam</h2>
    <div class="prose"><p>${rod.length} z ${R.length} wpisów (${pc(rod.length, R.length)}) to sami Antosiakowie, w ${uniq(rod.map(r => r.akt))} aktach. Bracia zgłaszali zgon ojca: ${A.plink("wojciech-k", "Wojciech")} i ${A.plink("walenty", "Walenty")} przy zgonie ${A.plink("kacper", "Kacpra")} (D 174/1828), a przy zgonie matki ${A.plink("helena", "Heleny")} — Wojciech i ${A.plink("stanislaw-k", "Stanisław")} (D 99/1848). Walenty był chrzestnym wnuczki ${A.plink("anna-j", "Anny")} (B 109/1854).</p></div>
    <h3 class="h3-sec">Osoby najczęściej (bez służby kościelnej)</h3>
    ${people()}

    <h2>Kto trzymał do chrztu</h2>
    ${godparents()}

    <h2>Antosiakowie u innych</h2>
    <div class="prose"><p>Tych aktów nie ma w liczbach wyżej (żeby nie liczyć par dwa razy), ale pokazują, z kim ród się „kumał”.</p></div>
    ${others()}

    <h2>Wszystkie wpisy</h2>
    ${allActs()}

    <h2>Metoda</h2>
    <div class="prose">
      <p><b>Dane.</b> ${acts} aktów, w których główną osobą jest Antosiak z Połoni (dowolna gałąź), jego żona, dziecko albo dziecko córki z rodu; z każdego wypisani chrzestni, świadkowie i zgłaszający zgon — razem ${R.length} wpisów. Źródła: FamilySearch (księgi Chorzel do 1825), AP Pułtusk (1826–1865), metryki.genealodzy.pl (1866–1926). Linki do skanów są w tabeli „Wszystkie wpisy”.</p>
      <p><b>Liczenie.</b> Nazwiska ujednolicone (Kuta = Kutta, Kucina, Kutówna; Bańka = Banka, Bańkówna; Antosiak = Jentosiak, Jętosiak; Senda? = Szenda, Drenda). Bzech, Bzerk i Bączek liczone osobno. „Ile razy” = liczba wpisów, „w ilu aktach” = liczba różnych aktów. Ranking i graf pomijają samych Antosiaków i służbę kościelną. Związek z rodem to nasza ocena.</p>
      <p><b>Linki do osób</b> są tylko tam, gdzie wiemy, o kogo chodzi (np. Walenty, Wojciech Chudzik, Jan Bańka). Wojciecha Antosiaka i Jakuba Bańki nie łączymy, bo w Połoni żyło naraz kilku o tym imieniu.</p>
    </div>
    <div class="note"><p><b>Ograniczenia.</b> Dane są gęste tylko dla lat 1786–1865 (${uniq(R.filter(r => r.y >= 1786 && r.y <= 1865).map(r => r.akt))} aktów). Z lat 1866–1907 mamy tylko ${uniq(R.filter(r => r.y >= 1866).map(r => r.akt))} aktów z odczytanymi świadkami, więc strona opisuje głównie Połoń od Kacpra do Feliksa. Większość aktów z lat 1826–1865 przeczytano raz; nazwiska z „?” są niepewne. Wszystkie osoby to osoby historyczne (najpóźniejszy akt: ${y1} r.).</p></div>`;
})();
