/* Mapa rodu (mapa.html): schematyczna mapa SVG Polski płn.-wsch. + dwa zbliżenia + wstawka USA.
   Rzut prostokątny z lon/lat (długość skalowana cos 53,5°), bez kafelków i bibliotek.
   Dane miejsc: data/miejsca.js. Osoby i wydarzenia dopasowuje się po nazwach (pola place, parish, teksty). */
(function () {
  "use strict";
  const A = window.APP, D = A.D, esc = A.esc;
  const root = document.getElementById("mapa");
  if (!root || !D.places) return;
  const PL = D.places, byPid = new Map(PL.map(p => [p.id, p]));

  /* ── rzutowanie ─────────────────────────────────── */
  const proj = (b, W) => {
    const k = Math.cos(b.mid * Math.PI / 180), sx = W / ((b.e - b.w) * k), H = Math.round((b.n - b.s) * sx);
    return { W, H, x: lon => (lon - b.w) * k * sx, y: lat => (b.n - lat) * sx, b };
  };
  const MAIN = proj({ w: 20.35, e: 21.95, s: 52.93, n: 54.14, mid: 53.5 }, 360);
  const ZOOM = {
    polon: { title: "A · okolice Połoni", p: proj({ w: 20.84, e: 21.12, s: 53.11, n: 53.31, mid: 53.2 }, 200) },
    nw: { title: "B · okolice Nowej Wsi", p: proj({ w: 21.52, e: 21.81, s: 52.99, n: 53.165, mid: 53.1 }, 200) },
  };
  const USA = proj({ w: -95.5, e: -66.5, s: 24.5, n: 44.5, mid: 35 }, 360);
  const pts = (P, list) => list.map(([lo, la]) => `${P.x(lo).toFixed(1)},${P.y(la).toFixed(1)}`).join(" ");

  /* schematyczne linie (przybliżenie z wiedzy ogólnej, ±kilka km) */
  const NAREW = [[21.98, 53.16], [21.85, 53.13], [21.72, 53.10], [21.62, 53.09], [21.575, 53.08], [21.52, 53.03], [21.46, 52.97], [21.42, 52.92]];
  const ORZYC = [[20.96, 53.45], [20.94, 53.36], [20.91, 53.30], [20.90, 53.26], [20.94, 53.22], [20.99, 53.18], [21.04, 53.11], [21.10, 53.04], [21.16, 52.98], [21.15, 52.92]];
  const BORDER = [[20.34, 53.21], [20.60, 53.24], [20.85, 53.29], [21.05, 53.31], [21.25, 53.37], [21.45, 53.455], [21.70, 53.47], [21.96, 53.48]];
  const US_COAST = [[-67.0, 44.8], [-68.8, 44.4], [-70.2, 43.65], [-70.8, 42.6], [-71.0, 42.35], [-70.6, 41.9], [-70.0, 41.75], [-70.1, 41.55], [-71.4, 41.45], [-72.9, 41.27], [-73.8, 40.85],
    [-74.0, 40.6], [-74.0, 40.4], [-74.1, 39.75], [-74.4, 39.35], [-74.9, 38.93], [-75.1, 38.4], [-75.4, 37.9], [-75.9, 37.2], [-76.0, 36.85], [-75.7, 35.9], [-75.5, 35.25], [-76.5, 34.7],
    [-77.9, 34.2], [-79.0, 33.6], [-79.9, 32.8], [-81.1, 32.0], [-81.4, 30.3], [-80.6, 28.4], [-80.05, 26.7], [-80.2, 25.8], [-80.9, 25.15], [-81.8, 26.1], [-82.7, 27.9], [-83.0, 29.1],
    [-84.0, 30.05], [-85.0, 29.7], [-85.7, 30.15], [-87.2, 30.35], [-88.0, 30.4], [-89.4, 30.2], [-89.3, 29.1], [-90.5, 29.1], [-92.0, 29.6], [-93.8, 29.7], [-95.5, 29.3]];
  const CHESAPEAKE = [[-76.0, 36.95], [-76.3, 37.6], [-76.3, 38.4], [-76.45, 39.2], [-76.1, 39.5]];

  /* ── dopasowanie osób i wydarzeń ────────────────── */
  const pub = id => { const p = A.byId.get(id); return p && !p.private ? p : null; };
  const yrOf = e => (e && (e.date || e.text || (e.y ? (e.approx ? "ok. " : "") + e.y : ""))) || "";
  function personEvents(pl) {
    const m = new Set(pl.match || []), out = [];
    if (!m.size) return out;
    for (const p of D.people) {
      if (p.private) continue;
      if (p.born && m.has(p.born.place)) out.push({ k: "ur.", y: p.born.y || 0, when: yrOf(p.born), ids: [p.id] });
      if (p.died && m.has(p.died.place)) out.push({ k: "zm.", y: p.died.y || 0, when: yrOf(p.died), ids: [p.id] });
      for (const s of p.spouses || []) if (s.married && m.has(s.married.place) && pub(s.id)) out.push({ k: "ślub", y: s.married.y || 0, when: yrOf(s.married), ids: [p.id, s.id] });
    }
    return out.sort((a, b) => (a.y || 9999) - (b.y || 9999));
  }
  const reOf = pl => pl.re ? new RegExp(pl.re) : null;
  const actsAt = pl => pl.parish ? D.acts.filter(a => (a.parish || "Chorzele") === pl.parish).sort((a, b) => a.y - b.y) : [];
  const histAt = pl => { const r = reOf(pl); return r ? D.timeline.filter(t => r.test(t.text)).sort((a, b) => a.y - b.y) : []; };
  const triviaAt = pl => { const r = reOf(pl); return r ? D.trivia.filter(t => r.test(t.title + " " + t.text)) : []; };
  const leadsAt = pl => {
    const r = reOf(pl), G = D.grandma; if (!r || !G) return [];
    const L = (G.leads || []).filter(l => r.test(l.title + " " + (l.for || []).join(" "))).map(l => ({ t: l.title, c: l.c }));
    for (const t of G.resolve || []) if (r.test(t)) L.push({ t, c: "todo" });
    return L;
  };
  const relSpan = id => { const r = A.rel(id); return r ? ` <span class="mp-rel">${esc(r)}</span>` : ""; };
  const who = id => `${A.plink(id)}${relSpan(id)}`;
  const count = pl => personEvents(pl).length + (pl.people || []).filter(x => pub(x.id)).length + actsAt(pl).length + histAt(pl).length;

  /* ── panel ──────────────────────────────────────── */
  const KIND = { dom: "wieś rodziny", parafia: "parafia", miasto: "punkt orientacyjny", cel: "dokąd wyjechali", wojna: "wojna", region: "kierunek, nie konkretne miejsce" };
  const sec = (title, n, body, open = true) => n ? `<details class="mp-sec"${open ? " open" : ""}><summary>${esc(title)} <span class="muted">(${n})</span></summary>${body}</details>` : "";
  function placePanel(pl) {
    const ev = personEvents(pl), manual = (pl.people || []).filter(x => pub(x.id)), acts = actsAt(pl), hist = histAt(pl), triv = triviaAt(pl), leads = leadsAt(pl);
    const group = k => ev.filter(e => e.k === k);
    const evList = list => `<ul class="mp-ev">${list.map(e => `<li><span class="mp-y" title="${esc(e.when)}">${e.y ? (/ok\.|\?/.test(e.when) ? "ok. " : "") + e.y : "?"}</span><span>${e.ids.map(who).join(' <span class="muted">×</span> ')}</span></li>`).join("")}</ul>`;
    const any = ev.length + manual.length + acts.length + hist.length + triv.length + leads.length;
    return `<div class="mp-ph">
        <p class="mp-kind">${esc(KIND[pl.kind] || "")}${pl.approx ? " · położenie orientacyjne" : ""}</p>
        <h2 class="mp-name" tabindex="-1">${esc(pl.name)}</h2>
        ${pl.note ? `<p class="mp-note">${esc(pl.note)}</p>` : ""}
      </div>
      ${manual.length ? `<ul class="mp-ev">${manual.map(x => `<li><span class="mp-y">${A.mark(x.c === "todo" ? "hyp" : x.c)}</span><span>${who(x.id)} <span class="muted">— ${esc(x.t)}</span></span></li>`).join("")}</ul>` : ""}
      ${sec("Urodzenia i chrzty", group("ur.").length, evList(group("ur.")), group("ur.").length <= 40)}
      ${sec("Śluby", group("ślub").length, evList(group("ślub")), group("ślub").length <= 40)}
      ${sec("Zgony", group("zm.").length, evList(group("zm.")), group("zm.").length <= 40)}
      ${sec("Akty z tej parafii", acts.length, `<ul class="mp-ev">${acts.map(a => `<li><span class="mp-y">${a.y}</span><span><a href="akty.html#${esc(a.id)}">${esc(a.k)}: ${esc(a.t)}</a></span></li>`).join("")}</ul>`, acts.length <= 6)}
      ${sec("Historia", hist.length, `<ul class="mp-ev">${hist.map(t => `<li><span class="mp-y">${t.y}${t.y2 ? "–" + String(t.y2).slice(2) : ""}</span><span>${t.kind === "hipoteza" ? A.mark("hyp") : ""}${esc(t.text)}</span></li>`).join("")}</ul><p class="src"><a href="os-czasu.html">cała oś czasu</a></p>`, hist.length <= 8)}
      ${sec("Ciekawostki", triv.length, `<ul class="mp-ev">${triv.map(t => `<li><span class="mp-y">${t.year || ""}</span><span>${A.mark(t.c || (t.kind === "hipoteza" ? "hyp" : "ok"))}<a href="ciekawostki.html">${esc(t.title)}</a></span></li>`).join("")}</ul>`, triv.length <= 6)}
      ${sec("Tropy", leads.length, `<ul class="mp-ev">${leads.map(l => `<li><span class="mp-y">${l.c === "todo" ? "?" : A.mark(l.c)}</span><span><a href="babcia.html">${esc(l.t)}</a></span></li>`).join("")}</ul>`)}
      ${any ? "" : `<p class="empty">Na stronie nie ma jeszcze zapisów rodziny z tego miejsca.</p>`}`;
  }
  /* USA: miasta i porty */
  const US = [
    { id: "us-stlouis", keys: ["stlouis"], name: "St. Louis, Missouri", lab: ["St. Louis", 7, 13, "start"] },
    { id: "us-chicago", keys: ["chicago"], name: "Chicago, Illinois", lab: ["Chicago", 0, -9, "middle"] },
    { id: "us-ct", keys: ["manchester", "middletown"], name: "Connecticut: Manchester, Middletown", lab: ["Connecticut", -6, -3, "end"] },
    { id: "us-nj", keys: ["newark", "millburn"], name: "New Jersey: Newark, Millburn?", lab: ["Newark NJ", -7, 13, "end"] },
    { id: "us-baltimore", keys: ["baltimore"], port: /Baltimore/, name: "Baltimore (port)", lab: ["Baltimore", -7, 12, "end"] },
    { id: "us-ellis", keys: ["ellis"], port: /Ellis/, name: "Ellis Island, Nowy Jork (port)", lab: ["Ellis Island", 8, 3, "start"] },
  ];
  const STATES = [["MO", -92.4, 38.3], ["IL", -89.3, 40.3], ["TN", -86.4, 35.8], ["NC", -79.4, 35.5], ["FL", -81.7, 28.2]];
  const usPeople = u => (D.america || []).filter(e => u.port ? u.port.test(e.trip || "") : (e.places || []).some(k => u.keys.includes(k)));
  function usPanel(u) {
    const list = usPeople(u);
    const row = e => `<li><span class="mp-y">${esc(((e.trip || "").match(/\b1[89]\d\d\b/) || [""])[0])}</span><span>${A.mark(e.c)}${e.person ? who(e.person) : esc(e.name)}${e.trip && u.port ? ` <span class="muted">— ${esc(e.trip)}</span>` : ""}</span></li>`;
    return `<div class="mp-ph"><p class="mp-kind">${u.port ? "port przyjazdu" : "dokąd trafili"} · USA</p><h2 class="mp-name" tabindex="-1">${esc(u.name)}</h2>
        <p class="mp-note">${u.port ? "Emigranci z Połoni, którzy według list pasażerów przypłynęli tutaj." : "Emigranci z Połoni i okolic, których ślady prowadzą tutaj."} Pewność jak na stronie <a href="ameryka.html">Ameryka</a>.</p></div>
      ${list.length ? `<ul class="mp-ev">${list.map(row).join("")}</ul>` : `<p class="empty">Brak wpisów.</p>`}`;
  }
  function intro() {
    const T = D.americaToday;
    return `<div class="mp-ph"><p class="mp-kind">jak czytać mapę</p><h2 class="mp-name" tabindex="-1">Wybierz punkt</h2>
        <p class="mp-note">Kliknij lub dotknij punktu (albo przejdź klawiszem Tab i naciśnij Enter). Pojawią się urodzenia, śluby i zgony z danych drzewa, akty z parafii, wydarzenia z osi czasu i ciekawostki.</p></div>
      <ul class="mp-ev"><li><span class="mp-y">${PL.length}</span><span>miejsc w Polsce i okolicy</span></li>
      <li><span class="mp-y">${US.length}</span><span>miejsc w USA (porty i miasta)</span></li>
      ${T ? `<li><span class="mp-y">${T.total}</span><span>żyjących krewnych w USA — tylko liczba, stany: ${STATES.map(s => s[0]).join(", ")}</span></li>` : ""}</ul>`;
  }

  /* ── rysowanie ──────────────────────────────────── */
  const ICON = { dom: "d", parafia: "p", miasto: "m", cel: "c", wojna: "w", port: "port" };
  const marker = (id, x, y, kind, label, lx, ly, an, opt = {}) => {
    const r = opt.r || (kind === "parafia" ? 5 : kind === "miasto" ? 3 : 4.5);
    const shape = kind === "parafia" ? `<rect x="${x - r}" y="${y - r}" width="${2 * r}" height="${2 * r}" class="mk ${ICON[kind]}"/>`
      : kind === "wojna" ? `<path d="M${x - r},${y - r}L${x + r},${y + r}M${x + r},${y - r}L${x - r},${y + r}" class="mk ${ICON[kind]}"/>`
      : kind === "region" ? "" : `<circle cx="${x}" cy="${y}" r="${r}" class="mk ${ICON[kind] || "m"}"/>`;
    const lines = String(label).split("\n");
    const txt = `<text x="${x + lx}" y="${y + ly}" text-anchor="${an}" class="${kind === "region" ? "rg" : kind === "miasto" ? "tm" : ""}">${lines.map((l, i) => `<tspan x="${x + lx}" dy="${i ? "1.15em" : 0}">${esc(l)}</tspan>`).join("")}</text>`;
    return `<g class="pt" data-id="${esc(id)}" tabindex="0" role="button" aria-label="${esc(opt.aria || label.replace(/\n/g, " "))}"><circle cx="${x}" cy="${y}" r="${opt.hit || 13}" class="hit"/>${shape}${txt}${opt.extra || ""}</g>`;
  };
  const arrowPath = (x1, y1, x2, y2, bend) => {
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
    const cx = mx - dy / L * bend * L, cy = my + dx / L * bend * L;
    const at = t => [(1 - t) ** 2 * x1 + 2 * t * (1 - t) * cx + t * t * x2, (1 - t) ** 2 * y1 + 2 * t * (1 - t) * cy + t * t * y2];
    return { d: `M${x1.toFixed(1)},${y1.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`, lx: (mx + cx) / 2, ly: (my + cy) / 2, at };
  };
  const defs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1L9,5L0,9z" class="ahd"/></marker></defs>`;

  /* podpisy na mapie głównej: [dx, dy, anchor, tekst?] */
  const LAB = {
    polon: [8, 4, "start"], chorzele: [-8, 4, "end"], jednorozec: [7, 11, "start"], przasnysz: [7, 4, "start"],
    ostroleka: [-7, 14, "end"], "nowa-wies": [4, 17, "middle", "Nowa Wieś"], myszyniec: [8, 8, "start"], dabrowy: [8, -2, "start"],
    szymany: [-8, 4, "end"], szczytno: [-8, 4, "end"], pilec: [8, 4, "start", "Pilec\n(k. Świętej Lipki)"], mragowo: [7, 4, "start"],
    prusy: [0, -8, "middle", "Prusy\n(saksy\n1906–08)"], mazury: [0, 0, "middle", "Mazury ?\n(hipoteza)"],
  };
  function mainMap() {
    const P = MAIN, X = p => P.x(p.lon), Y = p => P.y(p.lat);
    const grid = [20.5, 21, 21.5].map(l => `<line x1="${P.x(l)}" x2="${P.x(l)}" y1="0" y2="${P.H}" class="g"/>`).join("")
      + [53.5, 54].map(b => `<line x1="0" x2="${P.W}" y1="${P.y(b)}" y2="${P.y(b)}" class="g"/><text x="${P.W - 3}" y="${P.y(b) - 3}" text-anchor="end" class="gt">${String(b).replace(".", ",")}°N</text>`).join("");
    const lines = `<polyline points="${pts(P, BORDER)}" class="border"/>
      <text x="4" y="${P.y(53.21) - 14}" class="bt">Prusy Wsch.</text><text x="4" y="${P.y(53.21) + 14}" class="bt">Polska</text>
      <polyline points="${pts(P, NAREW)}" class="river"/><text x="${P.x(21.47)}" y="${P.y(52.975)}" class="rt">Narew</text>
      <polyline points="${pts(P, ORZYC)}" class="river"/><text x="${P.x(20.95) - 6}" y="${P.y(53.39)}" text-anchor="end" class="rt">Orzyc</text>`;
    const box = (z, k) => { const b = z.p.b; return `<rect x="${P.x(b.w)}" y="${P.y(b.n)}" width="${P.x(b.e) - P.x(b.w)}" height="${P.y(b.s) - P.y(b.n)}" class="zb"/><text x="${P.x(b.w) + 2}" y="${P.y(b.n) - 3}" class="zt">${k}</text>`; };
    const boxes = box(ZOOM.polon, "A") + box(ZOOM.nw, "B");
    // strzałki migracji
    const end = id => id === "usa" ? [0, P.y(53.33)] : [X(byPid.get(id)), Y(byPid.get(id))];
    const BEND = { "polon>pilec": 0.28, "pilec>szymany": -0.35, "polon>usa": 0.12, "nowa-wies>prusy": -0.1, "nowa-wies>mazury": 0.1 };
    /* podpis strzałki: [t (0–1 wzdłuż łuku), dx, dy, anchor] */
    const LOFF = { "polon>pilec": [0.86, 6, 4, "start"], "pilec>szymany": [0.45, -6, 0, "end"] }; // pozostałe: podpis w nazwie regionu
    const TRIM = { pilec: 8, szymany: 8, prusy: 30, mazury: 24, usa: 0 };
    const arrows = (D.migrations || []).map(m => {
      let [x1, y1] = end(m.from), [x2, y2] = end(m.to);
      const L = Math.hypot(x2 - x1, y2 - y1), t1 = 7 / L, t2 = (TRIM[m.to] ?? 7) / L;
      [x1, y1, x2, y2] = [x1 + (x2 - x1) * t1, y1 + (y2 - y1) * t1, x2 - (x2 - x1) * t2, y2 - (y2 - y1) * t2];
      const k = m.from + ">" + m.to, a = arrowPath(x1, y1, x2, y2, BEND[k] || 0.12), [lt, dx, dy, an] = LOFF[k] || [0.5, 4, 0, "start"], [lx, ly] = a.at(lt);
      const lab = !LOFF[k] && m.to !== "usa" ? "" : m.to === "usa" ? `<text x="4" y="${P.y(53.33) - 36}" class="mt"><tspan x="4">do USA</tspan><tspan x="4" dy="1.15em">1903 1905</tspan><tspan x="4" dy="1.15em">1907 1913</tspan></text>`
        : `<text x="${(lx + dx).toFixed(1)}" y="${(ly + dy).toFixed(1)}" text-anchor="${an}" class="mt">${esc(m.label)}</text>`;
      return `<g class="mig ${m.c}"><title>${esc(m.who + ": " + m.label)}</title><path d="${a.d}" marker-end="url(#ah)"/>${lab}</g>`;
    }).join("");
    // punkty
    const dots = PL.filter(p => p.map === "main").map(p => { const [dx, dy, an, t] = LAB[p.id] || [7, 4, "start"]; return marker(p.id, X(p), Y(p), p.kind, t || p.name, dx, dy, an, { aria: p.name }); }).join("");
    const edges = PL.filter(p => p.map === "edge").map(p => {
      const top = p.lat > P.b.n, x = Math.max(10, Math.min(P.W - 10, P.x(p.lon))), y = top ? 12 : P.H - 10;
      return marker(p.id, x, y, p.kind, `${top ? "↑" : "↓"} ${p.name} · ok. ${p.km} km`, 9, 4, "start", { aria: `${p.name}, poza mapą, ok. ${p.km} km od Połoni` });
    }).join("");
    return `<svg class="mp-svg mp-main" viewBox="0 0 ${P.W} ${P.H}" role="group" aria-label="Mapa Polski północno-wschodniej z miejscami rodziny">${defs}
      <rect width="${P.W}" height="${P.H}" class="bg"/>${grid}${lines}${boxes}${arrows}${dots}${edges}</svg>`;
  }
  const ZLAB = {
    polon: { polon: [8, 4, "start"], chorzele: [9, 4, "start"], jednorozec: [0, 15, "middle"], budki: [-8, 4, "end"], laz: [0, -9, "middle"], olszewka: [0, 15, "middle"], raszujka: [8, 4, "start"], zagaty: [0, -9, "middle"] },
    nw: { ostroleka: [6, 16, "start"], "nowa-wies": [8, 4, "start", "Nowa Wieś"], chojniki: [-8, 4, "end"], mostowo: [-8, 4, "end"], grabowek: [-8, 4, "end"] },
  };
  function zoomMap(key) {
    const Z = ZOOM[key], P = Z.p, b = P.b;
    const inside = PL.filter(p => p.lon != null && p.kind !== "region" && p.map !== "edge" && p.lon >= b.w && p.lon <= b.e && p.lat >= b.s && p.lat <= b.n);
    const km = 5, kmPx = km / (111.32 * Math.cos(b.mid * Math.PI / 180)) * (P.x(b.e) / (b.e - b.w));
    const scale = `<g class="sc"><line x1="8" x2="${8 + kmPx}" y1="${P.H - 8}" y2="${P.H - 8}"/><text x="${8 + kmPx + 4}" y="${P.H - 5}">${km} km</text></g>`;
    const riv = key === "polon" ? `<polyline points="${pts(P, ORZYC)}" class="river"/><text x="${P.x(20.925) - 4}" y="${P.y(53.29)}" text-anchor="end" class="rt">Orzyc</text>`
      : `<polyline points="${pts(P, NAREW)}" class="river"/><text x="${P.W - 4}" y="${P.y(53.13) - 4}" text-anchor="end" class="rt">Narew</text>`;
    const dots = inside.map(p => { const [dx, dy, an, t] = ZLAB[key][p.id] || [7, 4, "start"]; return marker("z-" + p.id, P.x(p.lon), P.y(p.lat), p.kind, t || p.name, dx, dy, an, { aria: p.name, hit: 11 }); }).join("");
    return `<figure class="mp-fig"><figcaption>${esc(Z.title)}</figcaption><svg class="mp-svg mp-zoom" viewBox="0 0 ${P.W} ${P.H}" role="group" aria-label="${esc(Z.title)}">
      <rect width="${P.W}" height="${P.H}" class="bg"/>${riv}${dots}${scale}</svg></figure>`;
  }
  function usaMap() {
    const P = USA, AP = D.americaPlaces || {};
    const grid = [-90, -80, -70].map(l => `<line x1="${P.x(l)}" x2="${P.x(l)}" y1="0" y2="${P.H}" class="g"/>`).join("") + [30, 40].map(b => `<line x1="0" x2="${P.W}" y1="${P.y(b)}" y2="${P.y(b)}" class="g"/>`).join("");
    const coast = `<polyline points="${pts(P, US_COAST)}" class="coast"/><polyline points="${pts(P, CHESAPEAKE)}" class="coast thin"/><text x="${P.W - 6}" y="${P.y(33)}" text-anchor="end" class="rt">Atlantyk</text>`;
    const states = STATES.map(([s, lo, la]) => `<text x="${P.x(lo)}" y="${P.y(la)}" text-anchor="middle" class="st">${s}</text>`).join("");
    const at = u => { const ks = u.keys.map(k => AP[k]).filter(Boolean); return [P.x(ks.reduce((s, k) => s + k.lon, 0) / ks.length), P.y(ks.reduce((s, k) => s + k.lat, 0) / ks.length)]; };
    const pos = Object.fromEntries(US.map(u => [u.id, at(u)]));
    const sea = [["us-ellis", "1903 · 1907 · 1913", 26], ["us-baltimore", "1905", 36]].map(([id, yrs, dy]) => { const [x, y] = pos[id]; const a = arrowPath(P.W - 2, y + dy, x + 4, y + 5, -0.06); return `<g class="mig ok"><path d="${a.d}" marker-end="url(#ah)"/><text x="${P.W - 4}" y="${y + dy + 12}" text-anchor="end" class="mt">${yrs}</text></g>`; }).join("");
    const routes = [["us-ellis", "us-ct"], ["us-ellis", "us-nj"], ["us-ellis", "us-stlouis"], ["us-baltimore", "us-stlouis"], ["us-stlouis", "us-chicago"]].map(([a, b]) => { const [x1, y1] = pos[a], [x2, y2] = pos[b]; return `<path d="${arrowPath(x1, y1, x2, y2, 0.1).d}" class="route"/>`; }).join("");
    const dots = US.map(u => { const [x, y] = pos[u.id], [t, dx, dy, an] = u.lab; return marker(u.id, x, y, u.port ? "port" : "cel", t, dx, dy, an, { aria: u.name, r: 3.6, hit: 10 }); }).join("");
    return `<figure class="mp-fig"><figcaption>USA · dokąd trafili emigranci z Połoni</figcaption><svg class="mp-svg mp-usa" viewBox="0 0 ${P.W} ${P.H}" role="group" aria-label="Wstawka: USA">${defs.replace('id="ah"', 'id="ah2"')}
      <rect width="${P.W}" height="${P.H}" class="bg"/>${grid}${coast}${states}${routes.replace(/url\(#ah\)/g, "url(#ah2)")}${sea.replace(/url\(#ah\)/g, "url(#ah2)")}${dots}
      <text x="${P.W - 6}" y="${P.y(35.5)}" text-anchor="end" class="mt">← z Bremy</text><text x="${P.W - 6}" y="${P.y(35.5) + 11}" text-anchor="end" class="mt">i Hamburga</text></svg>
      <p class="src">MO, IL, TN, NC, FL — stany, w których według nekrologów mieszkają żyjący krewni${D.americaToday ? ` (razem ${D.americaToday.total} osób)` : ""}; bez imion. Szczegóły: <a href="ameryka.html">Ameryka</a>.</p></figure>`;
  }

  const legend = `<div class="mp-legend" aria-label="Legenda">
      <span><svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="4.5" class="mk d"/></svg>wieś rodziny</span>
      <span><svg viewBox="0 0 12 12" aria-hidden="true"><rect x="1" y="1" width="10" height="10" class="mk p"/></svg>parafia</span>
      <span><svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="4.5" class="mk c"/></svg>dokąd wyjechali</span>
      <span><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2,2L10,10M10,2L2,10" class="mk w"/></svg>wojna</span>
      <span><svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3" class="mk m"/></svg>punkt orientacyjny</span>
      <span><svg viewBox="0 0 24 12" aria-hidden="true"><path d="M1,6H23" class="lg ok"/></svg>migracja pewna</span>
      <span><svg viewBox="0 0 24 12" aria-hidden="true"><path d="M1,6H23" class="lg prawd"/></svg>prawdopodobna</span>
      <span><svg viewBox="0 0 24 12" aria-hidden="true"><path d="M1,6H23" class="lg hyp"/></svg>hipoteza</span>
      <span><svg viewBox="0 0 24 12" aria-hidden="true"><path d="M1,6H23" class="border"/></svg>granica Prus Wsch.</span>
    </div>`;
  const allList = `<h2>Wszystkie miejsca</h2><div class="chips mp-chips" role="group" aria-label="Wszystkie miejsca">${PL.map(p => `<button type="button" class="chip" data-id="${esc(p.id)}" aria-pressed="false">${esc(p.name.replace(/\s*\(.*\)$/, ""))}${count(p) ? ` <span class="muted">${count(p)}</span>` : ""}</button>`).join("")}${US.map(u => `<button type="button" class="chip" data-id="${u.id}" aria-pressed="false">${esc(u.lab[0])}</button>`).join("")}</div>`;
  const about = `<h2>O mapie</h2><ul class="facts">
      <li>Mapa jest schematyczna: rzut prostokątny ze współrzędnych geograficznych, bez podkładu. Współrzędne są przybliżone, z wiedzy ogólnej — miasta z dokładnością ok. 1 km, małe wsie (Budki, Łaz, Olszewka, Raszujka, Zagaty, Chojniki, Mostowo, Grabówek, Nowa Wieś, Dąbrowy, Pilec) tylko orientacyjnie, ±3–5 km.</li>
      <li>Narew, Orzyc i granica Prus Wschodnich (1772–1945, w tym miejscu do 1945 r.) narysowane w uproszczeniu, kilkoma punktami. Zarys wybrzeża USA też jest uproszczony.</li>
      <li>Strzałka „Mazury ?” to hipoteza: rodzina babci kiedyś przeniosła się z okolic Nowej Wsi na Mazury, ale nie wiemy kiedy ani dokąd. Strzałka „Prusy (saksy)” pokazuje tylko kierunek — miejsce pracy w Prusach jest nieznane.</li>
      <li>Osoby przypisuje się do miejsc po nazwach w danych drzewa (miejsce urodzenia, ślubu, zgonu), po parafii aktu i po tekstach osi czasu. Osoby żyjące i dziadkowie nie mają miejsc.</li>
    </ul>`;

  root.innerHTML = `${legend}<div class="mp-grid">
      <figure class="mp-fig mp-a">${mainMap()}<figcaption class="mp-cap">Polska płn.-wsch. · prostokąty A i B — zbliżenia poniżej</figcaption></figure>
      <div class="mp-b mp-zooms">${zoomMap("polon")}${zoomMap("nw")}</div>
      <aside class="mp-panel" id="mp-panel" aria-live="polite" aria-label="Szczegóły miejsca">${intro()}</aside>
      <div class="mp-c">${usaMap()}</div>
    </div>${allList}${about}`;

  /* ── interakcja ─────────────────────────────────── */
  const panel = document.getElementById("mp-panel");
  function select(id, opt = {}) {
    const pid = id.replace(/^z-/, ""), pl = byPid.get(pid), u = US.find(x => x.id === pid);
    if (!pl && !u) return;
    panel.innerHTML = pl ? placePanel(pl) : usPanel(u);
    root.querySelectorAll(".pt").forEach(g => g.classList.toggle("on", g.dataset.id.replace(/^z-/, "") === pid));
    root.querySelectorAll(".mp-chips .chip").forEach(b => b.setAttribute("aria-pressed", b.dataset.id === pid ? "true" : "false"));
    if (opt.hash !== false) try { history.replaceState(null, "", "#" + pid); } catch (e) {}
    if (opt.scroll !== false) {
      const r = panel.getBoundingClientRect();
      if (r.top < 0 || r.top > innerHeight - 80) panel.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }
    if (opt.focus) panel.querySelector(".mp-name")?.focus({ preventScroll: true });
  }
  root.addEventListener("click", e => {
    const g = e.target.closest(".pt, .mp-chips .chip");
    if (g) select(g.dataset.id, { focus: g.matches(".chip") });
  });
  root.addEventListener("keydown", e => {
    const g = e.target.closest(".pt");
    if (g && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); select(g.dataset.id, { focus: true }); }
  });
  const h = decodeURIComponent(location.hash.slice(1));
  if (h && (byPid.has(h) || US.some(u => u.id === h))) select(h, { hash: false, scroll: false });
})();
