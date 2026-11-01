/* STRONA BABCI: Henryka z domu Mieszała. Pola z c = "ok" | "prawd" | "hyp". */
window.DRZEWO = window.DRZEWO || {};

DRZEWO.grandma = {
  person: "henryka",
  status: "Pochodzenie Mieszałów — poszukiwania w toku.",
  known: [
    { t: "Henryka z domu Mieszała, żona dziadka Mariana Antosiaka.", c: "ok", note: "wiedza rodzinna" },
    { t: "Rodzice, data i miejsce urodzenia Henryki nie są jeszcze znane z żadnego dokumentu.", c: "ok" },
    { t: "Na stronie FB „Połoń - Matecznik Rodziny Antosiak” Mieszałów nie ma ani jednego wpisu.", c: "ok", sources: ["fb-matecznik"] },
    { t: "Matka Henryki: prawdopodobnie Zofia.", c: "hyp", note: "pamięć rodzinna, niepewna — szukamy pary Mieszała × Zofia z dziećmi urodzonymi ok. 1925–1940" },
  ],
  surname: [
    { t: "Mieszała to rzadkie nazwisko: nosi je ok. 1050 osób w Polsce.", sources: ["pn-mieszala"] },
    { t: "Gniazdo nazwiska leży daleko od Połoni: w Wielkopolsce i ziemi wieluńskiej, zwłaszcza w powiatach wieruszowskim i ostrzeszowskim.", sources: ["pn-mieszala", "ijp-mieszala"] },
  ],
  leads: [
    { title: "Powiat szczycieński i Dąbrowy, parafia Myszyniec — najmocniejszy trop", c: "hyp",
      for: [{ t: "Akt zgonu 302/1902 z Myszyńca: w Dąbrowach zmarł 10-miesięczny Stanisław Mieszała, syn Rozalii Mieszały, „właścicielki rolnej” w Dąbrowach. To pierwszy pewny ślad Mieszałów w Dąbrowach ok. 1900 r.", c: "ok", acts: ["z1902-302"] }, "Ignacy Mieszała, cieśla w Myszyńcu, 1830 r.", "J. Mieszała, stolarz w kolonii Dąbrowy (gm. i par. Myszyniec), Księga adresowa Polski 1926/27–1930.", "Dąbrowy to dziś wieś w gminie Rozogi, pow. szczycieński; tak jak Połoń leżą przy dawnej granicy pruskiej.", "Powiat szczycieński jest dziś 10. w kraju pod względem liczby Mieszałów — a do Szczytna po wojnie przeniosła się też rodzina Antosiaków."],
      against: ["W skorowidzach ślubów Myszyńca z lat 1896–1907 Mieszały nie ma (sprawdzone raz).", "Nie sprawdzono lat 1908–1910, urodzeń ani sąsiednich parafii.", "Nic jeszcze nie łączy tej rodziny z Henryką."],
      sources: ["akt1902-mysz", "otn33", "genealogyindexer", "plan-dabrowy", "ijp-mieszala"] },
    { title: "„Sophia Mieszala”, ur. 1909 — kandydatka na matkę Henryki", c: "hyp",
      for: ["Rekord PCK: „Mieszala Sophia”, ur. 10.05.1909, robotnica rolna, w latach 1941–42 na robotach przymusowych w powiecie Zeitz w Niemczech (karta pracy 13113).", "Imię zgadza się z pamięcią rodzinną (matka Henryki — prawdopodobnie Zofia), a wiek pasuje na matkę kogoś urodzonego ok. 1930–1940."],
      against: ["Rekord nie podaje miejsca urodzenia ani rodziców; Zofia Mieszała mogła być z domu Mieszałą albo żoną Mieszały.", "Inne pary Mieszała × Zofia w bazach wojennych pochodzą z Wielkopolski."],
      sources: ["straty"] },
  ],
  pitfalls: ["Henryka Mieszała z Pruszkowa (zm. 2025) to inna osoba — nie babcia."],
  resolve: [
    "Odpis zupełny aktu małżeństwa Mariana i Henryki z USC — poda rodziców i miejsce urodzenia babci. Rozstrzygnie wszystkie hipotezy naraz.",
    "Zapytać rodzinę o rodziców Henryki, miejsce jej urodzenia i gdzie dziadkowie się poznali.",
    "Geneteka (ręcznie): Mieszała w parafiach Myszyniec, Chorzele, Jednorożec, Przasnysz; para Antosiak × Mieszała 1940–1970.",
  ],
};
