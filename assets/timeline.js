/* Oś czasu jak graf gita: każdy przodek linii prostej to pionowa szyna od narodzin do śmierci
   (kropka = urodzenie, kwadrat = zgon, pierścień = ślub). Obok wydarzenia rodzinne i historia. */
(function () {
  "use strict";
  const A = window.APP, D = A.D, esc = A.esc;
  const tl = document.getElementById("tl");
  const key = document.getElementById("tl-key");
  const chipBox = document.getElementById("tl-chips");
  const NS = "http://www.w3.org/2000/svg";
  const hasDates = id => { const p = A.byId.get(id); return !!((p.born && p.born.y) || (p.died && p.died.y) || A.spouses(id).some(s => s.married && s.married.y)); };
  const cols = D.generations.filter(g => g.n >= 2 && (hasDates(g.man) || hasDates(g.woman))).sort((a, b) => b.n - a.n);
  const colOf = new Map();
  cols.forEach((g, i) => { colOf.set(g.man, { i, s: 0, g }); colOf.set(g.woman, { i, s: 1, g }); });
  const state = { prosta: true, krewni: false, historia: true };
  const CHIPS = [["prosta", "linia prosta"], ["krewni", "krewni"], ["historia", "historia"]];

  key.innerHTML = cols.map(g => `<span><i>${g.n}</i>${esc(A.genPl(g.n))}: ${esc(A.byId.get(g.man).given)} × ${esc(A.byId.get(g.woman).given)}</span>`).join("") +
    `<span><svg width="14" height="12" aria-hidden="true"><circle cx="7" cy="6" r="3.5" fill="currentColor"/></svg>ur.</span><span><svg width="14" height="12" aria-hidden="true"><circle cx="7" cy="6" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>ślub</span><span><svg width="14" height="12" aria-hidden="true"><rect x="3.5" y="2.5" width="7" height="7" fill="currentColor"/></svg>zm.</span>`;

  const yTxt = e => (e.approx ? "~" : "") + e.y;
  const dKey = e => { const m = e && e.date && e.date.match(/(\d{1,2})\.(\d{1,2})(?:\/\d{1,2}\.\d{1,2})?\.\d{4}/); return m ? +m[2] * 40 + +m[1] : 0; };

  function events() {
    const out = [];
    const seenM = new Set();
    for (const p of D.people) {
      if (p.private) continue;
      const isDirect = A.direct.has(p.id);
      if (isDirect ? !state.prosta : !state.krewni) continue;
      const nm = A.plink(p.id, A.fullName(p)) + (A.rel(p.id) ? ` <span class="rel">(${esc(A.rel(p.id))})</span>` : "");
      if (p.born && p.born.y) out.push({ y: p.born.y, k: dKey(p.born), yt: yTxt(p.born), cls: isDirect ? "fam" : "kin", type: "b", who: [p.id], t: `<span class="tag">ur.</span>${nm}${p.born.place ? ", " + esc(p.born.place) : ""}` });
      if (p.died && p.died.y) {
        const age = p.born && p.born.y ? p.died.y - p.born.y : null;
        out.push({ y: p.died.y, k: dKey(p.died), yt: yTxt(p.died), cls: isDirect ? "fam" : "kin", type: "d", who: [p.id], t: `<span class="tag">zm.</span>${nm}${age != null && age > 1 ? `, ${p.born.approx || p.died.approx ? "ok. " : ""}${age} l.` : ""}` });
      }
      for (const s of A.spouses(p.id)) {
        if (!s.married || !s.married.y) continue;
        const kk = [p.id, s.id].sort().join("+"); if (seenM.has(kk)) continue; seenM.add(kk);
        const o = A.byId.get(s.id);
        out.push({ y: s.married.y, k: dKey(s.married), yt: String(s.married.y), cls: isDirect ? "fam" : "kin", type: "m", who: [p.id, s.id], t: `<span class="tag">ślub</span>${nm} × ${A.plink(o.id, A.fullName(o))}${s.married.place ? ", " + esc(s.married.place) : ""}` });
      }
    }
    if (state.historia) for (const e of D.timeline) out.push({ y: e.y, k: 500, yt: e.y2 ? `${e.y}\n–${e.y2}` : String(e.y), cls: "hist", type: "h", who: e.people || [], t: `${e.kind === "hipoteza" ? A.mark("hyp") : ""}${e.date ? `<span class="tag">${esc(e.date)}</span>` : ""}${esc(e.text)} <span class="src-inline">${A.srcShort(e.sources)}</span>` });
    out.sort((a, b) => a.y - b.y || a.k - b.k);
    return out;
  }

  // zakres życia przodka: od narodzin (albo pierwszego śladu) do śmierci (albo ostatniego śladu)
  function span(id) {
    const p = A.byId.get(id);
    const ev = [];
    if (p.born && p.born.y) ev.push(p.born.y);
    for (const s of A.spouses(id)) if (s.married && s.married.y) ev.push(s.married.y);
    for (const c of A.children(id)) { const cp = A.byId.get(c); if (cp.born && cp.born.y) ev.push(cp.born.y); }
    for (const a of D.acts) if (a.osoby[0] === id) ev.push(a.y);
    const po = p.died && !p.died.y && p.died.text && p.died.text.match(/(\d{4})/);
    if (po) ev.push(+po[1]);
    if (!ev.length) return null;
    return { a: Math.min(...ev), b: p.died && p.died.y ? p.died.y : Math.max(...ev), aKnown: !!(p.born && p.born.y), bKnown: !!(p.died && p.died.y), cert: p.certainty };
  }

  const rowsEl = () => [...tl.querySelectorAll(".tl-row:not(.century)")];
  let evs = [];
  function render() {
    chipBox.innerHTML = CHIPS.map(([k, l]) => `<button class="chip" type="button" data-k="${k}" aria-pressed="${state[k]}">${l}</button>`).join("");
    evs = events();
    let lastC = null, html = "";
    for (const [i, e] of evs.entries()) {
      const c = Math.floor((e.y - 1) / 100) + 1;
      if (c !== lastC) { html += `<div class="tl-row century"><span></span><span></span><span class="t">${["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "XVI", "XVII", "XVIII", "XIX", "XX"][c] || c} wiek</span></div>`; lastC = c; }
      html += `<div class="tl-row ${e.cls}" data-i="${i}"><span></span><span class="y">${esc(e.yt)}</span><span class="t">${e.t}</span></div>`;
    }
    tl.innerHTML = (evs.length ? html : `<p class="empty">Włącz co najmniej jeden filtr.</p>`) + `<svg class="rails" aria-hidden="true"></svg>`;
    drawRails();
  }
  chipBox.addEventListener("click", e => { const b = e.target.closest("[data-k]"); if (!b) return; state[b.dataset.k] = !state[b.dataset.k]; render(); });

  function drawRails() {
    const svg = tl.querySelector("svg.rails");
    const narrow = matchMedia("(max-width: 560px)").matches;
    const CW = narrow ? 17 : 22, PAD = 4;
    const railsW = cols.length * CW + PAD;
    tl.style.setProperty("--rails", railsW + "px");
    const rows = rowsEl();
    if (!rows.length) return;
    const top = tl.getBoundingClientRect().top;
    const yc = rows.map(r => { const b = r.getBoundingClientRect(); return b.top - top + Math.min(b.height / 2, 17); });
    const H = tl.scrollHeight;
    svg.setAttribute("width", railsW); svg.setAttribute("height", H);
    svg.setAttribute("viewBox", `0 0 ${railsW} ${H}`);
    const xOf = (i, s) => PAD + i * CW + s * (narrow ? 6 : 7) + 2;
    let out = "";
    // szyny
    for (const [id, c] of colOf) {
      if (!state.prosta) break;
      const sp = span(id); if (!sp) continue;
      let i0 = evs.findIndex(e => e.y >= sp.a), i1 = -1;
      for (let i = evs.length - 1; i >= 0; i--) if (evs[i].y <= sp.b) { i1 = i; break; }
      if (i0 < 0 || i1 < 0 || i1 < i0) continue;
      const x = xOf(c.i, c.s), y0 = yc[i0], y1 = yc[i1];
      const dash = sp.cert === "ok" ? "" : sp.cert === "prawd" ? ' stroke-dasharray="5 4"' : ' stroke-dasharray="1.5 4" stroke-linecap="round"';
      const cl = c.s ? "rail w" : "rail m";
      out += `<line class="${cl}" x1="${x}" x2="${x}" y1="${y0}" y2="${y1}"${dash}/>`;
      if (!sp.aKnown) out += `<line class="${cl} faint" x1="${x}" x2="${x}" y1="${Math.max(0, y0 - 26)}" y2="${y0}" stroke-dasharray="2 3"/>`;
      if (!sp.bKnown) out += `<line class="${cl} faint" x1="${x}" x2="${x}" y1="${y1}" y2="${y1 + 30}" stroke-dasharray="2 3"/>`;
    }
    // kropki
    evs.forEach((e, i) => {
      if (e.type === "h") return;
      const xs = e.who.map(id => colOf.get(id)).filter(Boolean);
      if (!xs.length || !state.prosta) return;
      const y = yc[i];
      if (e.type === "m" && xs.length === 2) out += `<line class="merge" x1="${xOf(xs[0].i, xs[0].s)}" x2="${xOf(xs[1].i, xs[1].s)}" y1="${y}" y2="${y}"/>`;
      for (const c of xs) {
        const x = xOf(c.i, c.s);
        out += e.type === "b" ? `<circle class="dot" cx="${x}" cy="${y}" r="3.6"/>` : e.type === "d" ? `<rect class="dot" x="${x - 3.4}" y="${y - 3.4}" width="6.8" height="6.8"/>` : `<circle class="ring" cx="${x}" cy="${y}" r="3.8"/>`;
      }
      // dziecko przodka: łącznik do szyny rodziców
      if (e.type === "b") {
        const c = xs[0], ps = A.parents(e.who[0]).map(id => colOf.get(id)).filter(Boolean);
        for (const pc of ps) if (pc.i === c.i - 1 && pc.s === 0) out += `<path class="branch" d="M${xOf(pc.i, 0)},${y} H${xOf(c.i, c.s) - 3.6}"/>`;
      }
    });
    svg.innerHTML = out;
  }

  render();
  let t = 0;
  addEventListener("resize", () => { clearTimeout(t); t = setTimeout(drawRails, 80); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawRails);
})();
