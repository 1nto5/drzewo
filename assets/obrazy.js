/* Strona obrazy.html: galeria DRZEWO.images (data/obrazy.js) + lightbox na <dialog>. */
(function () {
  "use strict";
  const A = window.APP, esc = A.esc, IM = A.D.images || [], MISS = A.D.imagesMissing || [];
  const $ = s => document.querySelector(s);
  const grid = $("#gallery"), dlg = $("#lb");
  if (!grid || !dlg) return;

  const licHTML = im => im.licenseUrl ? `<a href="${esc(im.licenseUrl)}" target="_blank" rel="noopener license">${esc(im.license)}</a>` : esc(im.license);
  const credit = im => `Autor: ${esc(im.author)} · ${licHTML(im)} · <a href="${esc(im.sourceUrl)}" target="_blank" rel="noopener">${esc(im.sourceLabel)} ↗</a>`;
  const people = im => (im.people || []).filter(id => A.byId.has(id)).map(id => {
    const r = A.rel(id);
    return A.plink(id, A.shortName(A.byId.get(id))) + (r ? ` <span class="rel">(${esc(r)})</span>` : "");
  }).join(", ");

  grid.innerHTML = IM.map((im, i) => `<li class="ocard">
      <button class="othumb" type="button" data-i="${i}" aria-haspopup="dialog" aria-label="Powiększ: ${esc(im.title)}">
        <img src="img/${esc(im.file)}" width="${im.w}" height="${im.h}" alt="${esc(im.alt)}" loading="lazy" decoding="async">
      </button>
      <div class="obody">
        <div class="card-kind"><span class="k">${esc(im.year || "b.d.")}</span><span>${esc(im.license)}</span></div>
        <h3>${esc(im.title)}</h3>
        <p class="ocap">${esc(im.caption)}</p>
        ${im.why ? `<p class="owhy"><b>Co ma z nami wspólnego:</b> ${esc(im.why)}</p>` : ""}
        ${im.note ? `<p class="onote"><b>Uwaga:</b> ${esc(im.note)}</p>` : ""}
        ${people(im) ? `<p class="opeople">Osoby: ${people(im)}</p>` : ""}
        <p class="src">${credit(im)}</p>
      </div>
    </li>`).join("");

  const miss = $("#missing");
  if (miss) miss.innerHTML = MISS.map(m => `<li>${m.url ? `<a href="${esc(m.url)}" target="_blank" rel="noopener">${esc(m.t)} ↗</a>` : esc(m.t)} — <span class="muted">${esc(m.why)}</span></li>`).join("");

  /* ── lightbox ── */
  const lbImg = $("#lb-img"), lbCap = $("#lb-cap");
  let cur = 0, opener = null;
  function show(i) {
    cur = (i + IM.length) % IM.length;
    const im = IM[cur];
    lbImg.src = "img/" + im.file; lbImg.width = im.w; lbImg.height = im.h; lbImg.alt = im.alt;
    lbCap.innerHTML = `<b>${esc(im.title)}</b> <span class="muted">${esc(im.year)}</span><br>${esc(im.caption)}<br><span class="src">${credit(im)}</span>`;
    $("#lb-n").textContent = `${cur + 1} / ${IM.length}`;
  }
  grid.addEventListener("click", e => {
    const b = e.target.closest(".othumb"); if (!b) return;
    opener = b; show(+b.dataset.i);
    dlg.showModal();
    $("#lb-close").focus();
  });
  $("#lb-close").addEventListener("click", () => dlg.close());
  $("#lb-prev").addEventListener("click", () => show(cur - 1));
  $("#lb-next").addEventListener("click", () => show(cur + 1));
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); }); // klik w tło
  dlg.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") { e.preventDefault(); show(cur - 1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); show(cur + 1); }
  });
  dlg.addEventListener("close", () => { lbImg.removeAttribute("src"); if (opener) opener.focus(); });
})();
