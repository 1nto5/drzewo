/* STRONA BABCI: Henryka z domu Mieszała. Pola z c = "ok" | "prawd" | "hyp".
   Rodzice i dziadkowie Henryki są w DRZEWO.people (wladyslaw-m, zofia-m, aleksander-sz, katarzyna-sz)
   — bez dat i miejsc (private). Punkt wyjścia: relacja rodzinna z 2026 r. */
window.DRZEWO = window.DRZEWO || {};

DRZEWO.grandma = {
  person: "henryka",
  family: ["wladyslaw-m", "zofia-m", "aleksander-sz", "katarzyna-sz"],
  status: "Najmocniejszy trop: parafia Nowa Wieś koło Ostrołęki — poszukiwania w toku.",
  known: [
    { t: "Henryka z domu Mieszała, żona dziadka Mariana Antosiaka.", c: "ok", note: "wiedza rodzinna", sources: ["rodzina-2026"] },
    { t: "Jej rodzice: Władysław Mieszała i Zofia z domu Szczepanek.", c: "ok", note: "relacja rodzinna, 2026", sources: ["rodzina-2026"] },
    { t: "Rodzice Zofii, czyli dziadkowie babci: Aleksander i Katarzyna Szczepankowie.", c: "ok", note: "relacja rodzinna, 2026", sources: ["rodzina-2026"] },
    { t: "Dziadkowie babci to prawdopodobnie Aleksander Szczepanek (syn Franciszka i Marianny z Płocharczyków) i Katarzyna Radziejewska (córka Józefa i Agnieszki z Ratajów), którzy pobrali się w 1909 r. w parafii Nowa Wieś koło Ostrołęki.", c: "prawd", acts: ["s1909-4"] },
    { t: "Ich dzieci w indeksie Geneteki: Genowefa (ur. 25.08.1910 w Mostowie), Antonina i Marta (zm. 1911), Władysław Bolesław (zm. 1927) i Michalina Marianna (zm. 1929) — dwoje ostatnich w Chojnikach. Rodzina mieszkała w Mostowie, potem w Chojnikach.", c: "prawd", sources: ["metryki-nw"] },
    { t: "Aktu urodzenia Zofii w indeksie nie ma — brakuje lat 1912–1914 i po 1919. Ślubu Władysława Mieszały z Zofią Szczepanek nie ma w indeksach mazowieckich (Nowa Wieś do 1936, Myszyniec do 1940).", c: "ok" },
    { t: "Dat i miejsc urodzenia babci i jej rodziców nie znamy jeszcze z żadnego dokumentu.", c: "ok" },
    { t: "Na stronie FB „Połoń - Matecznik Rodziny Antosiak” Mieszałów nie ma ani jednego wpisu.", c: "ok", sources: ["fb-matecznik"] },
  ],
  surname: [
    { t: "Mieszała to rzadkie nazwisko: nosi je ok. 1050 osób w Polsce.", sources: ["pn-mieszala"] },
    { t: "Gniazdo nazwiska leży daleko od Połoni: w Wielkopolsce i ziemi wieluńskiej, zwłaszcza w powiatach wieruszowskim i ostrzeszowskim.", sources: ["pn-mieszala", "ijp-mieszala"] },
  ],
  leads: [
    { title: "Parafia Nowa Wieś koło Ostrołęki — obie rodziny z jednej parafii", c: "hyp",
      for: [{ t: "Szczepankowie: ślub Aleksandra Szczepanka z Katarzyną Radziejewską w 1909 r. (akt 4); dzieci w Mostowie i Chojnikach.", c: "prawd", acts: ["s1909-4"] }, "Mieszałowie: w tej samej parafii żyło kilka rodzin Mieszałów — w Grabówku, Rżańcu i Grabniku, tuż obok Chojnik i Wyszla. W latach 1904–1908 urodziło się tam trzech Władysławów Mieszałów.", "Obie rodziny żeniły się w tej parafii: w 1927 r. Stanisław Szczepanek wziął za żonę Józefę Oleszczak, córkę Balbiny z Mieszałów.", "Po 1945 r. oba nazwiska spotykamy na Mazurach — w Szczytnie, Pieckach i Mrągowie — tam, dokąd przeniosła się też rodzina Antosiaków."],
      against: ["Ślubu Władysława Mieszały z Zofią Szczepanek w indeksie parafii (do 1936 r.) nie ma.", "Nie wiadomo, który Władysław: ten urodzony w 1908 r. (syn Walentego) ożenił się w 1927 r. z Józefą Kowalczyk, więc raczej nie on; zostają dwaj z 1904 r. albo ktoś spoza parafii."],
      sources: ["metryki-nw", "geneteka", "ijp-szczepanek", "ijp-mieszala", "raport-ms"] },
    { title: "Dąbrowy, parafia Myszyniec — drugi trop", c: "hyp",
      for: [{ t: "Akt zgonu 302/1902 z Myszyńca: w Dąbrowach zmarł 10-miesięczny Stanisław Mieszała, syn Rozalii, „właścicielki rolnej” — pierwszy pewny ślad Mieszałów w Dąbrowach ok. 1900 r.", c: "ok", acts: ["z1902-302"] }, "Ignacy Mieszała, cieśla w Myszyńcu (1830); J. Mieszała, stolarz w kolonii Dąbrowy (1926–1930).", "Dąbrowy to dziś wieś w gminie Rozogi, pow. szczycieński; powiat szczycieński jest 10. w kraju pod względem liczby Mieszałów."],
      against: ["W indeksie ślubów Myszyńca (do 1940 r.) ślubu Władysława z Zofią nie ma.", "Szczepankowie, z których pochodziła Zofia, żyli w parafii Nowa Wieś, nie w Myszyńcu."],
      sources: ["akt1902-mysz", "otn33", "genealogyindexer", "plan-dabrowy", "ijp-mieszala"] },
    { title: "Eugeniusz Mięszała (1924–1995) — mało prawdopodobne, że to brat Henryki", c: "hyp",
      for: ["W bazie strat wojennych: Eugeniusz Mięszała, ur. 3.12.1924, zm. 26.09.1995, syn Władysława i Zofii — jedyny wśród 138 rekordów Mieszałów z takimi rodzicami. W latach 1940–45 na robotach w Ottenhofen (Bawaria)."],
      against: ["Zofia, córka Aleksandra i Katarzyny (ślub 1909), urodziła się najpewniej po 1911 r. — w 1924 r. byłaby dzieckiem.", "Rekord nie podaje miejsca urodzenia; pisownia „Mięszała” występuje w grobach tylko na Kielecczyźnie."],
      sources: ["straty", "arolsen", "raport-ms"] },
  ],
  pitfalls: ["Henryka Mieszała z Pruszkowa (zm. 2025) to inna osoba — nie babcia.", "Wincenty Szczepanek z Wyszla (ur. 1903, jeniec w 1939 r.) to syn innego Aleksandra — syna Grzegorza — i Bronisławy Terlikowskiej. To nie brat Zofii. W parafii Nowa Wieś żyło co najmniej trzech Aleksandrów Szczepanków.", "Zofia Szczepanek z Wyszla, ur. 1910 (córka Józefa i Marianny z Kisielów), to inna Zofia — w 1931 r. wyszła za Józefa Chludzińskiego.", "„Sophia Mieszala”, ur. 10.05.1909, na robotach w pow. Zeitz — prawdopodobnie nie matka Henryki: indeks Arolsen podaje jej nazwisko panieńskie Karjalek, a przy roczniku 1909 nie mogłaby być matką Eugeniusza z 1924 r.", "Szczepanek to także stare nazwisko mazurskie z dawnych Prus Wschodnich — część Szczepanków pochowanych w Szczytnie i Pasymiu to mogą być miejscowi, a nie przesiedleńcy z Kurpiów."],
  resolve: [
    "Odpis zupełny aktu małżeństwa Mariana i Henryki z USC — potwierdzi rodziców i poda datę oraz miejsce urodzenia babci.",
    "Zapytać rodzinę: skąd pochodzili Władysław Mieszała i Zofia ze Szczepanków, czy mówiło się o Mostowie, Chojnikach albo Nowej Wsi koło Ostrołęki, w którym USC brali ślub dziadkowie.",
    "Parafia Nowa Wieś k. Ostrołęki (skany na metryki.genealodzy.pl, zespół 0651d): przeczytać ślub 1909/4; szukać chrztu Zofii w latach 1912–1914 i po 1919.",
    "Szukać ślubu Władysława Mieszały z Zofią Szczepanek po 1936 r. albo w sąsiednich parafiach; sprawdzić dwóch Władysławów Mieszałów urodzonych w 1904 r. w Nowej Wsi.",
    "Arolsen, dokument 70253100: miejsce urodzenia Eugeniusza Mięszały — dla porządku, by zamknąć ten trop.",
  ],

};
