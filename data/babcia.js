/* STRONA BABCI: Henryka z domu Mieszała. Pola z c = "ok" | "prawd" | "hyp".
   Rodzice i dziadkowie Henryki są w DRZEWO.people (wladyslaw-m, zofia-m, aleksander-sz, katarzyna-sz).
   Henryka i Władysław bez dat i miejsc (private). Rodzice Władysława (Adam i Elżbieta z Gąsków) są w osoby.js. Punkt wyjścia: relacja rodzinna z 2026 r.
   shooting: sekcja „Rozstrzelany w łapance”; key = wyróżniona karta (pierwsza), items jak known. */
window.DRZEWO = window.DRZEWO || {};

DRZEWO.grandma = {
  person: "henryka",
  family: ["wladyslaw-m", "zofia-m", "aleksander-sz", "katarzyna-sz"],
  status: "Rodzina Zofii znana do 4 pokoleń wstecz (parafia Nowa Wieś koło Ostrołęki); ojciec babci, Władysław Mieszała, to syn Adama i Elżbiety z Gąsków z Grabówka; formalnie potwierdzi akt chrztu babci lub akt ślubu z Zofią.",
  known: [
    { t: "Henryka z domu Mieszała, żona dziadka Mariana Antosiaka.", c: "ok", note: "wiedza rodzinna", sources: ["rodzina-2026"] },
    { t: "Jej rodzice: Władysław Mieszała i Zofia z domu Szczepanek.", c: "ok", note: "relacja rodzinna, 2026", sources: ["rodzina-2026"] },
    { t: "Zofia Mieszała zmarła 14.09.1976 r. i jest pochowana na cmentarzu w Wielbarku (pow. szczycieński); nagrobek ze zdjęciem: „Mieszała Zofia, żyła lat 63, zm. 14.09.1976”.", c: "ok", note: "zdjęcie rodzinne, 2026" },
    { t: "Zofia Szczepanek urodziła się 6/19 stycznia 1913 r. w Chojnikach (parafia Nowa Wieś k. Ostrołęki) jako córka Aleksandra Szczepanka i Katarzyny z Radziejewskich.", c: "ok", acts: ["u1913-10"] },
    { t: "Szczepankowie — cztery pokolenia: Aleksander (ur. ok. 1883 w Chojnikach) ← Franciszek (ok. 1849–1931) i Marianna z Płocharczyków (ok. 1843–1909, z Rżańca) ← Piotr Szczepanek i Marianna z Radochów oraz Grzegorz Płocharczyk i Franciszka ze Szlachetków.", c: "ok", acts: ["s1909-4", "z1909-70", "s1911-17", "z1931-17"] },
    { t: "Radziejewscy: Katarzyna (ur. ok. 1885 w Mostowie) ← Józef Radziejewski (ok. 1850–1917, Mostowo) i Agnieszka z Ratajów ← Jan Radziejewski i Rozalia z Andrzejczyków.", c: "ok", acts: ["z1917-9"] },
    { t: "Rodzeństwo Zofii: Antonina i Marta (urodzone w Prusach, zmarły w 1911 r. w odstępie 17 dni), Genowefa (ur. 1910 w Mostowie), Władysław Bolesław (zm. 1927) i Michalina Marianna (zm. 1929). Z relacji babci: także Alicja, Henryk, Czesław i Bolesława (ta ostatnia według rodziny zabrana przez Niemców, zginęła w czasie wojny); aktów urodzenia nie ma w sieci.", c: "ok", acts: ["z1911-28", "z1911-33"] },
    { t: "Według relacji babci Katarzyna (matka Zofii) jeździła na roboty do Niemiec — najpewniej to saksy w Prusach przed 1909 r.; w bazie robotników przymusowych 1940–45 jej nie ma.", c: "prawd", note: "relacja rodzinna, 2026", sources: ["rodzina-2026"] },
    { t: "Ślubu Władysława Mieszały z Zofią Szczepanek nie ma w księgach Nowej Wsi do 1936 r. ani w indeksie Myszyńca do 1940 r. Śluby Nowej Wsi z lat 1937–1945 nie są zeskanowane.", c: "ok" },
    { t: "Dat i miejsc życia babci nie podajemy. Jej ojciec, Władysław, to syn Adama i Elżbiety z Gąsków z Grabówka: babcia pamięta wujka Leopolda (ojca chrzestnego), a jedyny Leopold Mieszała w parafii to syn Adama i Elżbiety.", c: "ok" },
  ],
  surname: [
    { t: "Mieszała to rzadkie nazwisko: nosi je ok. 1050 osób w Polsce.", sources: ["pn-mieszala"] },
    { t: "Gniazdo nazwiska leży daleko od Połoni: w Wielkopolsce i ziemi wieluńskiej, zwłaszcza w powiatach wieruszowskim i ostrzeszowskim.", sources: ["pn-mieszala", "ijp-mieszala"] },
  ],
  leads: [
    { title: "Władysław Mieszała z Grabówka (parafia Nowa Wieś) — rodzina ojca babci", c: "prawd",
      for: ["Mieszałowie żyli w Grabówku co najmniej od ok. 1848 r. — tuż obok Chojnik i Mostowa, w tej samej parafii co Szczepankowie.", { t: "Władysław, ur. 21.02/5.03.1904, syn Adama Mieszały (ok. 1867, żył w 1931) i Elżbiety z Gąsków (zm. 9.11.1931 w Grabówku, córki Józefa Gąski i Anny z Kochodzonów). Rodzeństwo: Adolfa, Aleksander, Stanisław, Eleonora, Bolesław, Czesław, Leopold.", c: "prawd", acts: ["u1904-20"] }, { t: "Babcia pamięta, że brat jej ojca miał na imię Leopold i był jej ojcem chrzestnym (relacja rodzinna, 2026). Jedyny Leopold Mieszała w parafii to syn Adama i Elżbiety z Gąsków (ur. 1911, U 1911/87; ślub 1936, M 1936/6). W skorowidzach urodzeń 1911–1913 i 1915–16 innego Leopolda brak; luka: urodzenia z 1914 r. nie są online.", c: "ok", acts: ["s1936-6"] }, { t: "Dodatkowa poszlaka: siostra Adolfa wyszła w 1928 r. za Józefa Drężka z Chojnik — wsi Zofii Szczepanek; Drężek był też świadkiem na ślubie Leopolda.", c: "hyp", acts: ["s1936-6"] }, { t: "Piotr Mieszała (ojciec drugiego Władysława z 1904 r.) był prawdopodobnie bratem Adama — wtedy jego dzieci, m.in. Eugeniusz (ur. 1915 „w czasie ruchu wojennego”, w 1939 r. kapral, jeniec Stalagów I-A i I-B), to kuzyni pradziadka.", c: "hyp", acts: ["u1904-53", "u1916-1"] }, "Obie rodziny żeniły się w tej parafii: w 1927 r. Stanisław Szczepanek wziął za żonę Józefę Oleszczak, córkę Balbiny z Mieszałów."],
      against: ["Formalnego potwierdzenia brak: ślubu ani zgonu Władysława nie ma w parafii do 1936 r., a śluby z lat 1937–1945 nie są zeskanowane — potwierdzi akt chrztu babci albo akt ślubu Władysława i Zofii (USC Olszewo-Borki).", "Inni Władysławowie z Grabówka: ur. 1908 (syn Walentego) ożenił się w 1927 r. z Józefą Kowalczyk; ur. 1910 (syn Walentego) zmarł 6.09.1995 i jest pochowany na Cmentarzu Centralnym w Szczecinie (kw. 38C/2/1A, Find a Grave 266802792), więc jako ojciec babci jest wykluczony."],
      sources: ["metryki-nw", "geneteka", "straty", "raport-ms"] },
    { title: "Stryj z Chicago? Aleksander Mieszała, syn Walentego", c: "hyp",
      for: ["2 maja 1910 r. na Ellis Island przypłynął z Rotterdamu (statek Nieuw Amsterdam) 20-letni Aleksander Mieszała („Alexander Mesralo”) z „Grabowek, Russia”, syn Walentego.", "28 stycznia 1913 r. w Chicago ożenił się z Ludwiką Merchel; jako rodziców podał Walentego i Katarzynę „Głodkównę” — pasuje do Walentego i Katarzyny z Gładków z Grabówka."],
      against: ["Stryjecznym bratem pradziadka byłby tylko wtedy, gdy Walenty był bratem Adama (hipoteza); inaczej to dalszy krewny z tej samej wsi.", "Zmarł w lutym 1968 r. i jest pochowany w Mosinee w Wisconsinie (Find a Grave 127416908, nekrolog)."],
      sources: ["raport-ms"] },
    { title: "Dąbrowy, parafia Myszyniec — słabszy trop", c: "hyp",
      for: [{ t: "Akt zgonu 302/1902 z Myszyńca: w Dąbrowach zmarł 10-miesięczny Stanisław Mieszała, syn Rozalii — ślad Mieszałów w Dąbrowach ok. 1900 r.", c: "ok", acts: ["z1902-302"] }],
      against: ["Rodzina Zofii i Mieszałowie z Grabówka żyli w parafii Nowa Wieś, nie w Myszyńcu."],
      sources: ["akt1902-mysz", "otn33"] },
  ],
  shooting: {
    title: "Rozstrzelany w łapance — czego szukaliśmy",
    key: { title: "Trzech Władysławów z jednej wsi", c: "hyp", label: "mocna hipoteza",
      t: ["W Grabówku żyło trzech Władysławów Mieszałów urodzonych w latach 1904–1908 — synowie Adama, Piotra i Walentego — a czwarty, ur. 1910, był synem Walentego i Marianny. Przy łapance pomyłka tożsamości byłaby łatwa: rodzina mówi, że pradziadek zginął „przez pomyłkę”."],
      note: "bez dokumentu — dlatego hipoteza, choć mocna" },
    items: [
      { t: "Relacja rodzinna: pradziadek Władysław Mieszała został rozstrzelany w czasie łapanki we wsi, „przez pomyłkę”. Szczegóły nieznane.", c: "ok", note: "relacja rodzinna", sources: ["rodzina-2026"] },
      { t: "W bazie strat i ofiar represji (153 rekordy Mieszałów, 5 wariantów pisowni) i w Indeksie Represjonowanych Władysława Mieszały nie ma. Wśród 296 rekordów z wsi rodziny (Grabówek, Chojniki, Mostowo, Rżaniec, Grabnik, Wyszel, Stylągi) też nie. Wielu ofiar egzekucji nie spisano z nazwiska, więc brak nie wyklucza zdarzenia.", c: "ok", note: "kwerenda", sources: ["straty-mieszala", "indeks-repr"] },
      { t: "Grabówek należał do gminy Sypniewo w powiecie makowskim — tak podaje Słownik geograficzny Królestwa Polskiego (t. II, s. 774).", c: "ok" }, { t: "Także Chojniki, Wyszel, Mostowo, Gutowo i Przystań leżały w gminie Sypniewo; w czasie okupacji był to Amtsbezirk Sypniewo w Landkreis Mackeim (Maków), z posterunkiem żandarmerii w Sypniewie. Zabitych chowano na cmentarzu w Nowej Wsi. Sprawy o stwierdzenie zgonu po wojnie prowadził sąd w Makowie Mazowieckim.", c: "prawd" },
      { t: "Odwet ze stycznia 1943 r.: 8 stycznia w Grabowie (gm. Krasnosielc) zginął żandarm — według relacji lokalnej zastrzelony przez pomyłkę przez innego żandarma. 9 stycznia Niemcy rozstrzelali 7 mężczyzn z Grabowa, a 12 stycznia zabrali zakładników także z wsi sąsiednich Grabówka (Wyszel, Rawy, Rżaniec), m.in. sołtysa Wyszla Władysława Ciaka (wywieziony do Auschwitz). Znane nazwiska rozstrzelanych i 14 zakładników — Mieszały wśród nich nie ma.", c: "ok" }, { t: "Pradziadek mógł zginąć podczas tej obławy poza Grabowem albo w innej akcji żandarmerii z Sypniewa (1942–44) lub w czasie frontu (1944–45). Żadna znana relacja tego nie rozstrzyga.", c: "hyp" },
      { t: "Inne możliwe zdarzenia: zabójstwa przez żandarmerię w Chojnikach, Gutowie i Przystani w latach 1942–44; Stepna Stara, 3 sierpnia 1944 r. — 5 osób rozstrzelanych przy kopaniu rowów przeciwczołgowych.", c: "hyp" },
    ],
    resolve: ["Akt zgonu Władysława (USC Olszewo-Borki) albo sądowe stwierdzenie zgonu.", "Akta IPN w czytelni: GK 162/385 (żandarmeria Sypniewo) i GK 629/138, k. 9 (prawdopodobnie zbiorcza lista zakładników).", "Akta „Zg” sądu w Makowie Mazowieckim z lat 1945–50; wpis pogrzebu w księdze parafii Nowa Wieś.", "Arolsen Archives — zakładnicy i wywiezieni ze stycznia 1943 r."],
    sources: ["straty-mieszala", "indeks-repr", "ipn-gk162", "arolsen"],
  },
  pitfalls: ["Dwóch Franciszków Szczepanków w Chojnikach: ojciec Aleksandra to syn Piotra (ok. 1849–1931); syn Antoniego (1859–1927) to imiennik.", "Dwie Nowe Wsie (koło Ostrołęki i Nowa Wieś Wschodnia), dwa Mostowa (ostrołęckie i makowskie), Grabówek i Grabówko — łatwo pomylić rekordy.", "Mieszała to także stare nazwisko mazurskie (ewangelicka parafia Księży Lasek, pow. szczycieński) — groby Mieszałów w Szczytnie nie muszą być z linii kurpiowskiej.","Henryka Mieszała z Pruszkowa (zm. 2025) to inna osoba — nie babcia.", "Eugeniusz Mięszała (1924–1995), „syn Władysława i Zofii” z bazy strat wojennych — odrzucony: Zofia, matka Henryki, urodziła się w 1913 r., więc w 1924 r. miała 11 lat.", "Wincenty Szczepanek z Wyszla (ur. 1903, jeniec w 1939 r.) to syn innego Aleksandra — syna Grzegorza — i Bronisławy Terlikowskiej. To nie brat Zofii. W parafii Nowa Wieś żyło co najmniej trzech Aleksandrów Szczepanków.", "Zofia Szczepanek z Wyszla, ur. 1910 (córka Józefa i Marianny z Kisielów), to inna Zofia — w 1931 r. wyszła za Józefa Chludzińskiego.", "„Sophia Mieszala”, ur. 10.05.1909, na robotach w pow. Zeitz — prawdopodobnie nie matka Henryki: indeks Arolsen podaje jej nazwisko panieńskie Karjalek, a przy roczniku 1909 nie mogłaby być matką Eugeniusza z 1924 r.", "Szczepanek to także stare nazwisko mazurskie z dawnych Prus Wschodnich — część Szczepanków pochowanych w Szczytnie i Pasymiu to mogą być miejscowi, a nie przesiedleńcy z Kurpiów."],
  resolve: [
    "Odpis zupełny aktu małżeństwa Mariana i Henryki z USC — poda datę i miejsce urodzenia babci i potwierdzi jej ojca.",
    "Zapytać rodzinę, czy babcia pamięta Adolfę (Drężkową), Eleonorę, Bolesława i Czesława Mieszałów — to rodzeństwo Leopolda; oraz skąd pochodził Władysław Mieszała (Grabówko?), kiedy i gdzie brał ślub z Zofią, kiedy rodzina przeniosła się na Mazury.",
    "Akt ślubu Władysława z Zofią (ok. 1930–1945) z ksiąg Nowej Wsi z lat 1937–1945 — USC Olszewo-Borki albo AP Pułtusk. Poda imiona rodziców Władysława i formalnie potwierdzi ustalenie. Równie dobrze potwierdzi je akt chrztu Henryki (chrzestni — czy Leopold Mieszała).",
    "Sprawdzić dalsze losy obu Władysławów z 1904 r. (Adama i Piotra) — dopiski na marginesach ich aktów chrztu, zgony w Grabówku.",
  ],


};
