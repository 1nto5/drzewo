/* DRZEWO MAMY — osobna gałąź (decyzja Adriana 2026-11-05): Domianowie, Myślakowie, Miecznikowscy.
   Źródło prawdy: ~/iCloud/Genealogia/mama.md. Ładowane TYLKO przez drzewo-mama.html (nie mieszać z osoby.js).
   Pola osób jak w osoby.js. Zasady: bez osób żyjących (poza imieniem babci, private: true), bez rodzeństwa,
   które może żyć; okoliczności śmierci tylko w prywatnych notatkach. */
window.DRZEWO = {
  anchors: ["ryszard-domian", "zofia-domian"],
  gp: { gen: "Ryszarda i Zofii", nom: "Ryszard i Zofia" },
  viewerKey: "aa_viewer_mama",
  personPage: "drzewo-mama.html",
  pages: [["index.html", "Drzewo Antosiaków"], ["drzewo.html", "Drzewo taty"], ["drzewo-mama.html", "Drzewo mamy"]],
  asof: "5 listopada 2026",
  acts: [], sources: [], trivia: [], stories: [], timeline: [],
  people: [
    /* ── dziadkowie ── */
    { id: "ryszard-domian", given: "Ryszard", surname: "Domian", sex: "m", gen: 1, line: "prosta", certainty: "ok",
      born: { y: 1952, date: "22.02.1952", c: "prawd" }, died: { y: 1976, date: "2.05.1976", c: "prawd" },
      burial: { cemetery: "cmentarz komunalny, ul. Śląska", place: "Szczytno", plot: "AIV/XI/1 (dawniej VII/X/2)", url: "https://szczytno.grobonet.com/osoba/158", c: "prawd", note: "Wspólny grób Ryszarda, Stanisławy i Stanisława Domianów." },
      parents: ["stanislaw-domian", "stanislawa-domian"], spouses: [{ id: "zofia-domian" }],
      facts: ["Dziadek, syn Stanisława i Stanisławy Domianów (relacja rodzinna, 2026).", "Miał czworo rodzeństwa.", { t: "Daty z grobu w Szczytnie: ur. 22.02.1952, zm. 2.05.1976 („żył lat 24”).", c: "prawd" }] },
    { id: "zofia-domian", given: "Zofia", surname: "Domian", maiden: "z Myślaków", sex: "f", gen: 1, line: "prosta", certainty: "ok", private: true,
      parents: ["witold-myslak", "krystyna-myslak"],
      facts: ["Babcia, z domu Myślak, córka Witolda Myślaka i Krystyny z Miecznikowskich (relacja rodzinna, 2026).", "Dat i miejsc jej życia na stronie nie podajemy."] },

    /* ── Domianowie ── */
    { id: "stanislaw-domian", given: "Stanisław", surname: "Domian", sex: "m", gen: 2, line: "prosta", certainty: "ok",
      born: { y: 1926, date: "12.05.1926", c: "prawd" }, died: { y: 2017, date: "5.03.2017", c: "prawd" },
      burial: { cemetery: "cmentarz komunalny, ul. Śląska", place: "Szczytno", plot: "AIV/XI/1 (dawniej VII/X/2)", url: "https://szczytno.grobonet.com/osoba/160", c: "prawd", note: "Wspólny grób Ryszarda, Stanisławy i Stanisława Domianów." },
      spouses: [{ id: "stanislawa-domian" }],
      facts: ["Gajowy — w Ciemnej Dąbrowie i w Nowinach koło Szczytna (relacja rodzinna).", "Ostatnie miejsce zamieszkania: Nowe Gizewo koło Szczytna.", "Ród wywodzi się z okolic Łatany Wielkiej (relacja rodzinna).", { t: "Daty z grobu w Szczytnie: ur. 12.05.1926, zm. 5.03.2017 („żył lat 91”).", c: "prawd" }] },
    { id: "stanislawa-domian", given: "Stanisława", surname: "Domian", maiden: "z d. — nieznane", sex: "f", gen: 2, line: "prosta", certainty: "ok",
      born: { y: 1928, date: "24.01.1928", c: "prawd" }, died: { y: 2004, date: "1.04.2004", c: "prawd" },
      burial: { cemetery: "cmentarz komunalny, ul. Śląska", place: "Szczytno", plot: "AIV/XI/1 (dawniej VII/X/2)", url: "https://szczytno.grobonet.com/osoba/159", c: "prawd", note: "Wspólny grób Ryszarda, Stanisławy i Stanisława Domianów." },
      facts: ["W czasie wojny pracowała w Niemczech na robotach przymusowych (relacja rodzinna).", "Nazwisko rodowe nieznane — szukamy.", "Ostatnie miejsce zamieszkania: Nowe Gizewo koło Szczytna.", { t: "Daty z grobu w Szczytnie: ur. 24.01.1928, zm. 1.04.2004 („żyła lat 76”). Na roboty trafiła więc jako nastolatka.", c: "prawd" }] },

    /* ── Myślakowie ── */
    { id: "witold-myslak", given: "Witold", surname: "Myślak", sex: "m", gen: 2, line: "prosta", certainty: "ok",
      born: { y: 1926, date: "13.05.1926", c: "ok" }, died: { y: 1987, date: "15.04.1987", c: "ok" },
      parents: ["zofia-myslak-st"], spouses: [{ id: "krystyna-myslak" }],
      burial: { cemetery: "cmentarz komunalny, ul. Mazurska", place: "Szczytno", plot: "DII/XIII/21 (dawniej VII/III/28 i 29)", url: "https://szczytno.grobonet.com/osoba/27862", c: "ok",
        note: "Grób rodzinny: Krystyna, Witold i Zdzisław Myślakowie (potwierdzony w rodzinie)." },
      facts: ["Pochodził z okolic Łęgu koło Nidzicy (relacja rodzinna).", "Rodzeństwo: brat Franciszek, siostra Helena (po mężu Sosnowska).", { t: "Daty z grobu w Szczytnie: ur. 13.05.1926, zm. 15.04.1987. Na tablicy „żył lat 61” — wg dat skończył 60 lat (miesiąc przed 61. urodzinami).", c: "ok" }] },
    { id: "krystyna-myslak", given: "Krystyna", surname: "Myślak", maiden: "z Miecznikowskich", sex: "f", gen: 2, line: "prosta", certainty: "ok",
      born: { y: 1929, date: "14.04.1929", c: "ok" }, died: { y: 2013, date: "13.04.2013", c: "ok" },
      burial: { cemetery: "cmentarz komunalny, ul. Mazurska", place: "Szczytno", plot: "DII/XIII/21", url: "https://szczytno.grobonet.com/osoba/24820", c: "ok" },
      facts: ["Pochodziła z okolic Makowa (relacja rodzinna).", "Jej matka zmarła młodo. Po wojnie Krystyna z ojcem zamieszkała w Nowinach koło Szczytna.", { t: "Daty z grobu w Szczytnie: ur. 14.04.1929, zm. 13.04.2013 („żyła lat 84”).", c: "ok" }] },
    { id: "zofia-myslak-st", given: "Zofia", surname: "Myślak", sex: "f", line: "prosta", certainty: "ok",
      facts: ["Matka Witolda (relacja rodzinna). Nazwisko rodowe i daty — szukamy."] },
    { id: "franciszek-myslak", given: "Franciszek", surname: "Myślak", sex: "m", line: "boczna", certainty: "ok",
      parents: ["zofia-myslak-st"],
      facts: ["Brat Witolda (relacja rodzinna).", { t: "W Szczytnie (cmentarz przy ul. Śląskiej) pochowany jest Franciszek Myślak, ur. 1.12.1919, zm. 24.08.1973 — może to on.", c: "hyp" }] },
    { id: "zdzislaw-myslak", given: "Zdzisław", surname: "Myślak", sex: "m", line: "boczna", certainty: "ok",
      born: { y: 1947, date: "10.03.1947", c: "ok" }, died: { y: 2019, date: "22.04.2019", c: "ok" }, parents: ["witold-myslak", "krystyna-myslak"],
      burial: { cemetery: "cmentarz komunalny, ul. Mazurska", place: "Szczytno", plot: "DII/XIII/21", url: "https://szczytno.grobonet.com/osoba/31425", c: "ok" },
      facts: ["Brat babci Zofii (relacja rodzinna).", { t: "Pochowany w grobie rodziców w Szczytnie: ur. 10.03.1947, zm. 22.04.2019 („żył lat 72”).", c: "ok" }] },
  ],
  generations: [
    { n: 1, yr: "", c: "ok", man: "ryszard-domian", woman: "zofia-domian", sum: "Dziadkowie.", facts: [] },
    { n: 2, yr: "", c: "ok", man: "stanislaw-domian", woman: "stanislawa-domian", sum: "Pradziadkowie — rodzice Ryszarda.", facts: [] },
  ],
};
