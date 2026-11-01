/* STRONA BABCI: Henryka z domu Mieszała. Pola z c = "ok" | "prawd" | "hyp".
   Rodzice i dziadkowie Henryki są w DRZEWO.people (wladyslaw-m, zofia-m, aleksander-sz, katarzyna-sz)
   — bez dat i miejsc (private). Punkt wyjścia: relacja rodzinna z 2026 r. */
window.DRZEWO = window.DRZEWO || {};

DRZEWO.grandma = {
  person: "henryka",
  family: ["wladyslaw-m", "zofia-m", "aleksander-sz", "katarzyna-sz"],
  status: "Rodzina Zofii znaleziona w parafii Nowa Wieś koło Ostrołęki; skąd był Władysław Mieszała — poszukiwania w toku.",
  known: [
    { t: "Henryka z domu Mieszała, żona dziadka Mariana Antosiaka.", c: "ok", note: "wiedza rodzinna", sources: ["rodzina-2026"] },
    { t: "Jej rodzice: Władysław Mieszała i Zofia z domu Szczepanek.", c: "ok", note: "relacja rodzinna, 2026", sources: ["rodzina-2026"] },
    { t: "Zofia Szczepanek urodziła się 6/19 stycznia 1913 r. w Chojnikach (parafia Nowa Wieś k. Ostrołęki) jako córka Aleksandra Szczepanka i Katarzyny z Radziejewskich — to potwierdza relację rodziny.", c: "ok", acts: ["u1913-10"] },
    { t: "Aleksander (syn Franciszka i Marianny z Płocharczyków, z Chojnik) i Katarzyna (córka Józefa i Agnieszki z Ratajów, z Mostowa) pobrali się 12/25 stycznia 1909 r. w Nowej Wsi.", c: "ok", acts: ["s1909-4"] },
    { t: "Rodzeństwo Zofii: Antonina i Marta (urodzone w Prusach przed ślubem rodziców, zm. 1911), Genowefa (ur. 1910 w Mostowie), Władysław Bolesław (zm. 1927) i Michalina Marianna (zm. 1929) — dwoje ostatnich w Chojnikach.", c: "ok", sources: ["metryki-nw"] },
    { t: "Ślubu Władysława Mieszały z Zofią Szczepanek nie ma w księgach Nowej Wsi do 1936 r. ani w indeksie Myszyńca do 1940 r. Śluby Nowej Wsi z lat 1937–1945 nie są zeskanowane.", c: "ok" },
    { t: "Daty i miejsca urodzenia babci i jej ojca nie znamy jeszcze z żadnego dokumentu.", c: "ok" },
    { t: "Na stronie FB „Połoń - Matecznik Rodziny Antosiak” Mieszałów nie ma ani jednego wpisu.", c: "ok", sources: ["fb-matecznik"] },
  ],
  surname: [
    { t: "Mieszała to rzadkie nazwisko: nosi je ok. 1050 osób w Polsce.", sources: ["pn-mieszala"] },
    { t: "Gniazdo nazwiska leży daleko od Połoni: w Wielkopolsce i ziemi wieluńskiej, zwłaszcza w powiatach wieruszowskim i ostrzeszowskim.", sources: ["pn-mieszala", "ijp-mieszala"] },
  ],
  leads: [
    { title: "Władysław Mieszała z Grabówka (parafia Nowa Wieś) — dwóch kandydatów", c: "hyp",
      for: ["Mieszałowie żyli w tej samej parafii co Szczepankowie — w Grabówku, Rżańcu i Grabniku, tuż obok Chojnik.", "Kandydat 1: Władysław, ur. 21.02/5.03.1904 w Grabówku, syn Adama Mieszały i Elżbiety z Gąsków (akt 20/1904).", "Kandydat 2: Władysław, ur. 15/28.06.1904 w Grabówku, syn Piotra Mieszały i Wiktorii z Gładków (akt 53/1904); chrzestnymi byli Walenty i Katarzyna Mieszałowie.", "Obie rodziny żeniły się w tej parafii: w 1927 r. Stanisław Szczepanek wziął za żonę Józefę Oleszczak, córkę Balbiny z Mieszałów."],
      against: ["Żaden z nich nie ma ślubu w Nowej Wsi do 1936 r.; jeśli ślub był później, księgi z lat 1937–1945 nie są zeskanowane.", "Trzeci Władysław, ur. 1908 (syn Walentego i Katarzyny z Gładków), raczej odpada: w 1927 r. ożenił się z Józefą Kowalczyk, zmarł w 1983 r. w Grabówku."],
      sources: ["metryki-nw", "geneteka", "raport-ms"] },
    { title: "Dąbrowy, parafia Myszyniec — drugi trop", c: "hyp",
      for: [{ t: "Akt zgonu 302/1902 z Myszyńca: w Dąbrowach zmarł 10-miesięczny Stanisław Mieszała, syn Rozalii, „właścicielki rolnej” — pierwszy pewny ślad Mieszałów w Dąbrowach ok. 1900 r.", c: "ok", acts: ["z1902-302"] }, "Ignacy Mieszała, cieśla w Myszyńcu (1830); J. Mieszała, stolarz w kolonii Dąbrowy (1926–1930).", "Dąbrowy to dziś wieś w gminie Rozogi, pow. szczycieński; powiat szczycieński jest 10. w kraju pod względem liczby Mieszałów."],
      against: ["W indeksie ślubów Myszyńca (do 1940 r.) ślubu Władysława z Zofią nie ma.", "Zofia pochodziła z parafii Nowa Wieś, nie z Myszyńca."],
      sources: ["akt1902-mysz", "otn33", "genealogyindexer", "plan-dabrowy", "ijp-mieszala"] },
  ],
  pitfalls: ["Henryka Mieszała z Pruszkowa (zm. 2025) to inna osoba — nie babcia.", "Eugeniusz Mięszała (1924–1995), „syn Władysława i Zofii” z bazy strat wojennych — odrzucony: Zofia, matka Henryki, urodziła się w 1913 r., więc w 1924 r. miała 11 lat.", "Wincenty Szczepanek z Wyszla (ur. 1903, jeniec w 1939 r.) to syn innego Aleksandra — syna Grzegorza — i Bronisławy Terlikowskiej. To nie brat Zofii. W parafii Nowa Wieś żyło co najmniej trzech Aleksandrów Szczepanków.", "Zofia Szczepanek z Wyszla, ur. 1910 (córka Józefa i Marianny z Kisielów), to inna Zofia — w 1931 r. wyszła za Józefa Chludzińskiego.", "„Sophia Mieszala”, ur. 10.05.1909, na robotach w pow. Zeitz — prawdopodobnie nie matka Henryki: indeks Arolsen podaje jej nazwisko panieńskie Karjalek, a przy roczniku 1909 nie mogłaby być matką Eugeniusza z 1924 r.", "Szczepanek to także stare nazwisko mazurskie z dawnych Prus Wschodnich — część Szczepanków pochowanych w Szczytnie i Pasymiu to mogą być miejscowi, a nie przesiedleńcy z Kurpiów."],
  resolve: [
    "Odpis zupełny aktu małżeństwa Mariana i Henryki z USC — poda datę i miejsce urodzenia babci i potwierdzi jej ojca.",
    "Zapytać rodzinę: skąd pochodził Władysław Mieszała (Grabówko?), kiedy i gdzie brał ślub z Zofią, kiedy rodzina przeniosła się na Mazury.",
    "Ślub Władysława z Zofią (ok. 1930–1945): księgi Nowej Wsi z lat 1937–1945 — USC Olszewo-Borki albo AP Pułtusk.",
    "Sprawdzić dalsze losy obu Władysławów z 1904 r. (Adama i Piotra) — dopiski na marginesach ich aktów chrztu, zgony w Grabówku.",
  ],


};
