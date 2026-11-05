/* DRZEWO MAMY — osobna gałąź (decyzja Adriana 2026-11-05): Dominowie, Myślakowie, Miecznikowscy.
   Źródło prawdy: ~/iCloud/Genealogia/mama.md. Ładowane TYLKO przez drzewo-mama.html (nie mieszać z osoby.js).
   Pola osób jak w osoby.js. Zasady: bez osób żyjących (poza imieniem babci, private: true), bez rodzeństwa,
   które może żyć; okoliczności śmierci tylko w prywatnych notatkach. */
window.DRZEWO = {
  anchors: ["ryszard-domina", "zofia-domina"],
  gp: { gen: "Ryszarda i Zofii", nom: "Ryszard i Zofia" },
  viewerKey: "aa_viewer_mama",
  personPage: "drzewo-mama.html",
  pages: [["index.html", "Drzewo Antosiaków"], ["drzewo.html", "Drzewo taty"], ["drzewo-mama.html", "Drzewo mamy"]],
  asof: "5 listopada 2026",
  acts: [], sources: [], trivia: [], stories: [], timeline: [],
  people: [
    /* ── dziadkowie ── */
    { id: "ryszard-domina", given: "Ryszard", surname: "Domina", sex: "m", gen: 1, line: "prosta", certainty: "ok",
      parents: ["stanislaw-domina", "stanislawa-domina"], spouses: [{ id: "zofia-domina" }],
      facts: ["Dziadek, syn Stanisława i Stanisławy Dominów (relacja rodzinna, 2026).", "Miał czworo rodzeństwa.", "Nie żyje. Daty urodzenia i śmierci — szukamy."] },
    { id: "zofia-domina", given: "Zofia", surname: "Domina", maiden: "z Myślaków", sex: "f", gen: 1, line: "prosta", certainty: "ok", private: true,
      parents: ["witold-myslak", "krystyna-myslak"],
      facts: ["Babcia, z domu Myślak, córka Witolda Myślaka i Krystyny z Miecznikowskich (relacja rodzinna, 2026).", "Dat i miejsc jej życia na stronie nie podajemy."] },

    /* ── Dominowie ── */
    { id: "stanislaw-domina", given: "Stanisław", surname: "Domina", sex: "m", gen: 2, line: "prosta", certainty: "ok",
      burial: { c: "brak", note: "grobu nie ma w wyszukiwarce cmentarza komunalnego w Szczytnie (grobonet, 2026-11-05)" },
      spouses: [{ id: "stanislawa-domina" }],
      facts: ["Gajowy — w Ciemnej Dąbrowie i w Nowinach koło Szczytna (relacja rodzinna).", "Ostatnie miejsce zamieszkania: Nowe Gizewo koło Szczytna.", "Ród wywodzi się z okolic Łatany Wielkiej (relacja rodzinna).", "Daty — szukamy."] },
    { id: "stanislawa-domina", given: "Stanisława", surname: "Domina", maiden: "z d. — nieznane", sex: "f", gen: 2, line: "prosta", certainty: "ok",
      burial: { c: "brak", note: "grobu nie ma w wyszukiwarce cmentarza komunalnego w Szczytnie (grobonet, 2026-11-05)" },
      facts: ["W czasie wojny pracowała w Niemczech na robotach przymusowych (relacja rodzinna).", "Nazwisko rodowe nieznane — szukamy.", "Ostatnie miejsce zamieszkania: Nowe Gizewo koło Szczytna."] },

    /* ── Myślakowie ── */
    { id: "witold-myslak", given: "Witold", surname: "Myślak", sex: "m", gen: 2, line: "prosta", certainty: "ok",
      born: { y: 1926, date: "13.05.1926", c: "prawd" }, died: { y: 1987, date: "15.04.1987", c: "prawd" },
      parents: ["zofia-myslak-st"], spouses: [{ id: "krystyna-myslak" }],
      burial: { cemetery: "cmentarz komunalny, ul. Mazurska", place: "Szczytno", plot: "DII/XIII/21 (dawniej VII/III/28 i 29)", url: "https://szczytno.grobonet.com/osoba/27862", c: "prawd",
        note: "Grób rodzinny: Krystyna, Witold i Zdzisław Myślakowie — imiona zgodne z relacją rodzinną; potwierdzenie w rodzinie w toku." },
      facts: ["Pochodził z okolic Łęgu koło Nidzicy (relacja rodzinna).", "Rodzeństwo: brat Franciszek, siostra Helena (po mężu Sosnowska).", { t: "Daty z grobu w Szczytnie: ur. 13.05.1926, zm. 15.04.1987. Na tablicy „żył lat 61” — wg dat skończył 60 lat (miesiąc przed 61. urodzinami).", c: "prawd" }] },
    { id: "krystyna-myslak", given: "Krystyna", surname: "Myślak", maiden: "z Miecznikowskich", sex: "f", gen: 2, line: "prosta", certainty: "ok",
      born: { y: 1929, date: "14.04.1929", c: "prawd" }, died: { y: 2013, date: "13.04.2013", c: "prawd" },
      burial: { cemetery: "cmentarz komunalny, ul. Mazurska", place: "Szczytno", plot: "DII/XIII/21", url: "https://szczytno.grobonet.com/osoba/24820", c: "prawd" },
      facts: ["Pochodziła z okolic Makowa (relacja rodzinna).", "Jej matka zmarła młodo. Po wojnie Krystyna z ojcem zamieszkała w Nowinach koło Szczytna.", { t: "Daty z grobu w Szczytnie: ur. 14.04.1929, zm. 13.04.2013 („żyła lat 84”).", c: "prawd" }] },
    { id: "zofia-myslak-st", given: "Zofia", surname: "Myślak", sex: "f", line: "prosta", certainty: "ok",
      facts: ["Matka Witolda (relacja rodzinna). Nazwisko rodowe i daty — szukamy."] },
    { id: "franciszek-myslak", given: "Franciszek", surname: "Myślak", sex: "m", line: "boczna", certainty: "ok",
      parents: ["zofia-myslak-st"],
      facts: ["Brat Witolda (relacja rodzinna).", { t: "W Szczytnie (cmentarz przy ul. Śląskiej) pochowany jest Franciszek Myślak, ur. 1.12.1919, zm. 24.08.1973 — może to on.", c: "hyp" }] },
    { id: "zdzislaw-myslak", given: "Zdzisław", surname: "Myślak", sex: "m", line: "boczna", certainty: "ok",
      born: { y: 1947, date: "10.03.1947", c: "prawd" }, died: { y: 2019, date: "22.04.2019", c: "prawd" }, parents: ["witold-myslak", "krystyna-myslak"],
      burial: { cemetery: "cmentarz komunalny, ul. Mazurska", place: "Szczytno", plot: "DII/XIII/21", url: "https://szczytno.grobonet.com/osoba/31425", c: "prawd" },
      facts: ["Brat babci Zofii (relacja rodzinna).", { t: "Pochowany w grobie rodziców w Szczytnie: ur. 10.03.1947, zm. 22.04.2019 („żył lat 72”).", c: "prawd" }] },
  ],
  generations: [
    { n: 1, yr: "", c: "ok", man: "ryszard-domina", woman: "zofia-domina", sum: "Dziadkowie.", facts: [] },
    { n: 2, yr: "", c: "ok", man: "stanislaw-domina", woman: "stanislawa-domina", sum: "Pradziadkowie — rodzice Ryszarda.", facts: [] },
  ],
};
