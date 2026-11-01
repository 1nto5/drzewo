/* STRONA BABCI: Henryka z domu Mieszała. Pola z c = "ok" | "prawd" | "hyp".
   Rodzice i dziadkowie Henryki są w DRZEWO.people (wladyslaw-m, zofia-m, aleksander-sz, katarzyna-sz)
   — bez dat i miejsc (private). Punkt wyjścia: relacja rodzinna z 2026 r. */
window.DRZEWO = window.DRZEWO || {};

DRZEWO.grandma = {
  person: "henryka",
  family: ["wladyslaw-m", "zofia-m", "aleksander-sz", "katarzyna-sz"],
  status: "Skąd pochodzili Mieszałowie i Szczepankowie — poszukiwania w toku.",
  known: [
    { t: "Henryka z domu Mieszała, żona dziadka Mariana Antosiaka.", c: "ok", note: "wiedza rodzinna", sources: ["rodzina-2026"] },
    { t: "Jej rodzice: Władysław Mieszała i Zofia z domu Szczepanek.", c: "ok", note: "relacja rodzinna, 2026", sources: ["rodzina-2026"] },
    { t: "Rodzice Zofii, czyli dziadkowie babci: Aleksander i Katarzyna Szczepankowie.", c: "ok", note: "relacja rodzinna, 2026", sources: ["rodzina-2026"] },
    { t: "Dat i miejsc urodzenia — ani Henryki, ani jej rodziców — nie znamy jeszcze z żadnego dokumentu.", c: "ok" },
    { t: "Na stronie FB „Połoń - Matecznik Rodziny Antosiak” Mieszałów nie ma ani jednego wpisu.", c: "ok", sources: ["fb-matecznik"] },
  ],
  surname: [
    { t: "Mieszała to rzadkie nazwisko: nosi je ok. 1050 osób w Polsce.", sources: ["pn-mieszala"] },
    { t: "Gniazdo nazwiska leży daleko od Połoni: w Wielkopolsce i ziemi wieluńskiej, zwłaszcza w powiatach wieruszowskim i ostrzeszowskim.", sources: ["pn-mieszala", "ijp-mieszala"] },
  ],
  leads: [
    { title: "„Sophia Mieszala”, ur. 1909 — może to Zofia, matka Henryki", c: "hyp",
      for: ["Rekord PCK: „Mieszala Sophia”, ur. 10.05.1909, robotnica rolna, w latach 1941–42 na robotach przymusowych w powiecie Zeitz w Niemczech (karta pracy 13113).", "Imię się zgadza, a wiek pasuje na matkę kogoś urodzonego ok. 1930–1940. Zofia była z domu Szczepanek, więc w rekordzie występowałaby pod nazwiskiem męża — i tak jest."],
      against: ["Rekord nie podaje miejsca urodzenia ani rodziców.", "Inne pary Mieszała × Zofia w bazach wojennych pochodzą z Wielkopolski."],
      sources: ["straty"] },
    { title: "Para Władysław × Zofia Mieszała w bazach wojennych", c: "hyp",
      for: ["W bazie strat wojennych jest syn pary Władysław i Zofia Mieszała — Eugeniusz (1924–1995), w czasie wojny na robotach przymusowych w Bawarii. Imiona rodziców zgadzają się z rodzicami Henryki."],
      against: ["Rekord prowadzi do Wielkopolski, nie na Mazowsze ani Mazury.", "Imiona Władysław i Zofia były wtedy bardzo częste."],
      sources: ["straty"] },
    { title: "Powiat szczycieński i Dąbrowy, parafia Myszyniec — najmocniejszy trop miejsca", c: "hyp",
      for: [{ t: "Akt zgonu 302/1902 z Myszyńca: w Dąbrowach zmarł 10-miesięczny Stanisław Mieszała, syn Rozalii Mieszały, „właścicielki rolnej” w Dąbrowach. To pierwszy pewny ślad Mieszałów w Dąbrowach ok. 1900 r.", c: "ok", acts: ["z1902-302"] }, "Ignacy Mieszała, cieśla w Myszyńcu, 1830 r.", "J. Mieszała, stolarz w kolonii Dąbrowy (gm. i par. Myszyniec), Księga adresowa Polski 1926/27–1930.", "Dąbrowy to dziś wieś w gminie Rozogi, pow. szczycieński; tak jak Połoń leżą przy dawnej granicy pruskiej.", "Powiat szczycieński jest dziś 10. w kraju pod względem liczby Mieszałów — a do Szczytna po wojnie przeniosła się też rodzina Antosiaków."],
      against: ["W skorowidzach ślubów Myszyńca z lat 1896–1907 Mieszały nie ma (sprawdzone raz).", "Nie sprawdzono lat 1908–1910, urodzeń ani sąsiednich parafii.", "Nic jeszcze nie łączy tej rodziny z Władysławem Mieszałą."],
      sources: ["akt1902-mysz", "otn33", "genealogyindexer", "plan-dabrowy", "ijp-mieszala"] },
  ],
  pitfalls: ["Henryka Mieszała z Pruszkowa (zm. 2025) to inna osoba — nie babcia."],
  resolve: [
    "Odpis zupełny aktu małżeństwa Mariana i Henryki z USC — potwierdzi rodziców i poda datę oraz miejsce urodzenia babci.",
    "Zapytać rodzinę, skąd pochodzili Władysław Mieszała i Zofia ze Szczepanków, gdzie mieszkali i gdzie dziadkowie się poznali.",
    "Szukać ślubu Władysława Mieszały z Zofią Szczepanek (ok. 1920–1935) i chrztu Zofii, córki Aleksandra i Katarzyny Szczepanków.",
    "Geneteka (ręcznie): Mieszała w parafiach Myszyniec, Chorzele, Jednorożec, Przasnysz; Mieszała × Szczepanek; Antosiak × Mieszała 1940–1970.",
    "Arolsen Archives: karta „Sophia Mieszala” (ur. 10.05.1909) — czy podaje nazwisko panieńskie Szczepanek.",
  ],
};
