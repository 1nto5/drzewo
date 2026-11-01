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
    { title: "Kurpie koło Ostrołęki — najmocniejsza hipoteza pochodzenia", c: "hyp",
      for: [{ t: "Mieszałowie: Dąbrowy w parafii Myszyniec. Akt zgonu 302/1902: w Dąbrowach zmarł 10-miesięczny Stanisław Mieszała, syn Rozalii, „właścicielki rolnej” — pierwszy pewny ślad Mieszałów w Dąbrowach ok. 1900 r.", c: "ok", acts: ["z1902-302"] }, "Wcześniej i później: Ignacy Mieszała, cieśla w Myszyńcu (1830), i J. Mieszała, stolarz w kolonii Dąbrowy (1926–1930).", "Szczepankowie: Wyszel, parafia Nowa Wieś k. Ostrołęki (dziś gm. Olszewo-Borki) — tam urodził się Wincenty Szczepanek, syn Aleksandra (patrz niżej).", "Po 1945 r. oba nazwiska spotykamy na Mazurach — w Szczytnie, Pieckach i Mrągowie — tam, dokąd przeniosła się też rodzina Antosiaków. Powiat ostrołęcki jest 4. w kraju pod względem liczby Szczepanków, szczycieński 7.; dla Mieszałów szczycieński jest 10."],
      against: ["Nic jeszcze nie łączy dokumentem Władysława Mieszały z Dąbrowami ani Zofii z Wyszlem.", "Alternatywa: Kielecczyzna — pisownię „Mięszała” zna się z Wąchocka i Skarżyska, a jeden Władysław Mieszała urodził się w 1908 r. w Starachowicach.", "W skorowidzach ślubów Myszyńca z lat 1896–1907 Mieszały nie ma; śluby z lat 1911–1945 nie mają skanów online."],
      sources: ["akt1902-mysz", "otn33", "genealogyindexer", "plan-dabrowy", "ijp-mieszala", "ijp-szczepanek", "raport-ms"] },
    { title: "Eugeniusz Mięszała (1924–1995) — może brat Henryki", c: "hyp",
      for: ["Rekord w bazie strat wojennych: Eugeniusz Mięszała, ur. 3.12.1924, zm. 26.09.1995, syn Władysława i Zofii — jedyny wśród 138 rekordów Mieszałów z takimi rodzicami.", "W latach 1940–45 na robotach przymusowych w rolnictwie w Ottenhofen (pow. Uffenheim, Bawaria). W Arolsen jest prawdopodobnie ten sam człowiek: „Mieszala Eugenius, ur. 6.12.1924”, ten sam powiat."],
      against: ["Rekord nie podaje miejsca urodzenia ani nazwiska panieńskiego matki.", "Z Kurpiów wywożono na roboty zwykle do Prus Wschodnich, nie do Bawarii; pisownia „Mięszała” występuje w grobach tylko na Kielecczyźnie.", "Jeśli to brat Henryki, Zofia urodziła się najpóźniej ok. 1906 r., a ślub rodziców był ok. 1920–1924."],
      sources: ["straty", "arolsen", "raport-ms"] },
    { title: "Wincenty Szczepanek z Wyszla (ur. 1903) — może brat Zofii", c: "hyp",
      for: ["Rekord jeniecki PCK: Wincenty Szczepanek, ur. 10.12.1903 w Wyszlu (parafia Nowa Wieś k. Ostrołęki), ojciec Aleksander, matka z domu Tyrlik. Kampania wrześniowa, 18 pułk artylerii, jeniec Stalagu I A, nr 58638.", "W całej bazie strat wojennych są tylko dwa rekordy Szczepanków z ojcem Aleksandrem — oba z Wyszla. Wiek Wincentego pasuje na brata Zofii."],
      against: ["Matka Wincentego nie ma w rekordzie imienia. Jeśli to rodzina Zofii, Katarzyna byłaby z domu Tyrlik — a to nazwisko prawie nie występuje na Kurpiach (gniazdo w pow. żywieckim), więc zapis mógł być przekręcony.", "Druga osoba z Wyszla, Stanisława (ur. 1926), ma matkę Aleksandrę — to albo inny Aleksander, albo druga żona."],
      sources: ["straty", "ijp-szczepanek", "raport-ms"] },
  ],
  pitfalls: ["Henryka Mieszała z Pruszkowa (zm. 2025) to inna osoba — nie babcia.", "„Sophia Mieszala”, ur. 10.05.1909, na robotach w pow. Zeitz — prawdopodobnie nie matka Henryki: indeks Arolsen podaje jej nazwisko panieńskie Karjalek, a przy roczniku 1909 nie mogłaby być matką Eugeniusza z 1924 r.", "Szczepanek to także stare nazwisko mazurskie z dawnych Prus Wschodnich — część Szczepanków pochowanych w Szczytnie i Pasymiu to mogą być miejscowi, a nie przesiedleńcy z Kurpiów."],
  resolve: [
    "Odpis zupełny aktu małżeństwa Mariana i Henryki z USC — potwierdzi rodziców i poda datę oraz miejsce urodzenia babci.",
    "Zapytać rodzinę, skąd pochodzili Władysław Mieszała i Zofia ze Szczepanków, gdzie mieszkali i gdzie dziadkowie się poznali.",
    "Szukać ślubu Władysława Mieszały z Zofią Szczepanek (ok. 1920–1935) i chrztu Zofii, córki Aleksandra i Katarzyny Szczepanków.",
    "Geneteka (ręcznie): Mieszała w parafiach Myszyniec, Chorzele, Jednorożec, Przasnysz; Mieszała × Szczepanek; Antosiak × Mieszała 1940–1970.",
    "Zapytać rodzinę: czy Henryka miała brata Eugeniusza (1924–1995), który w czasie wojny był na robotach w Bawarii? W którym USC brali ślub dziadkowie?",
    "Arolsen, dokument 70253100: miejsce urodzenia Eugeniusza — rozstrzygnie Kurpie czy Kielecczyzna.",
    "Parafia Nowa Wieś k. Ostrołęki: urodzenia Szczepanków z Wyszla 1890–1915 — czy jest wśród nich Zofia, córka Aleksandra i Katarzyny.",
    "AP Pułtusk: duplikaty małżeństw Myszyńca 1927–1937 (79/825/0/-/8, 9, 10) — ślub Władysława Mieszały z Zofią Szczepanek.",
  ],
};
