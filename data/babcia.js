/* STRONA BABCI: Henryka z domu Mieszała. Pola z c = "ok" | "prawd" | "hyp".
   Rodzice i dziadkowie Henryki są w DRZEWO.people (wladyslaw-m, zofia-m, aleksander-sz, katarzyna-sz).
   Henryka i Władysław bez dat i miejsc (private). Dwie ścieżki rodowe Władysława (A, B) to pole
   altParents osoby wladyslaw-m — tabelka porównawcza powstaje z niego. Punkt wyjścia: relacja rodzinna z 2026 r.
   shooting: sekcja „Rozstrzelany w łapance”; key = wyróżniona karta (pierwsza), items jak known. */
window.DRZEWO = window.DRZEWO || {};

DRZEWO.grandma = {
  person: "henryka",
  family: ["wladyslaw-m", "zofia-m", "aleksander-sz", "katarzyna-sz"],
  status: "Rodzina Zofii znana do 4 pokoleń wstecz (parafia Nowa Wieś koło Ostrołęki); ojciec babci, Władysław Mieszała — dwie prawdopodobne ścieżki (A i B), rozstrzygnie akt ślubu z Zofią.",
  known: [
    { t: "Henryka z domu Mieszała, żona dziadka Mariana Antosiaka.", c: "ok", note: "wiedza rodzinna", sources: ["rodzina-2026"] },
    { t: "Jej rodzice: Władysław Mieszała i Zofia z domu Szczepanek.", c: "ok", note: "relacja rodzinna, 2026", sources: ["rodzina-2026"] },
    { t: "Zofia Szczepanek urodziła się 6/19 stycznia 1913 r. w Chojnikach (parafia Nowa Wieś k. Ostrołęki) jako córka Aleksandra Szczepanka i Katarzyny z Radziejewskich.", c: "ok", acts: ["u1913-10"] },
    { t: "Szczepankowie — cztery pokolenia: Aleksander (ur. ok. 1883 w Chojnikach) ← Franciszek (ok. 1849–1931) i Marianna z Płocharczyków (ok. 1843–1909, z Rżańca) ← Piotr Szczepanek i Marianna z Radochów oraz Grzegorz Płocharczyk i Franciszka ze Szlachetków.", c: "ok", acts: ["s1909-4", "z1909-70", "s1911-17", "z1931-17"] },
    { t: "Radziejewscy: Katarzyna (ur. ok. 1885 w Mostowie) ← Józef Radziejewski (ok. 1850–1917, Mostowo) i Agnieszka z Ratajów ← Jan Radziejewski i Rozalia z Andrzejczyków.", c: "ok", acts: ["z1917-9"] },
    { t: "Rodzeństwo Zofii: Antonina i Marta (urodzone w Prusach, zmarły w 1911 r. w odstępie 17 dni), Genowefa (ur. 1910 w Mostowie), Władysław Bolesław (zm. 1927) i Michalina Marianna (zm. 1929).", c: "ok", acts: ["z1911-28", "z1911-33"] },
    { t: "Ślubu Władysława Mieszały z Zofią Szczepanek nie ma w księgach Nowej Wsi do 1936 r. ani w indeksie Myszyńca do 1940 r. Śluby Nowej Wsi z lat 1937–1945 nie są zeskanowane.", c: "ok" },
    { t: "Dat i miejsc życia babci nie podajemy. Który z dwóch Władysławów urodzonych w 1904 r. w Grabówku był jej ojcem — nie potwierdza jeszcze żaden dokument.", c: "ok" },
  ],
  surname: [
    { t: "Mieszała to rzadkie nazwisko: nosi je ok. 1050 osób w Polsce.", sources: ["pn-mieszala"] },
    { t: "Gniazdo nazwiska leży daleko od Połoni: w Wielkopolsce i ziemi wieluńskiej, zwłaszcza w powiatach wieruszowskim i ostrzeszowskim.", sources: ["pn-mieszala", "ijp-mieszala"] },
  ],
  leads: [
    { title: "Władysław Mieszała z Grabówka (parafia Nowa Wieś) — dwie ścieżki rodowe", c: "prawd",
      for: ["Mieszałowie żyli w Grabówku co najmniej od ok. 1848 r. — tuż obok Chojnik i Mostowa, w tej samej parafii co Szczepankowie.", { t: "Ścieżka A: Władysław, ur. 21.02/5.03.1904, syn Adama Mieszały (ok. 1867, żył w 1931) i Elżbiety z Gąsków (zm. 9.11.1931 w Grabówku, córki Józefa Gąski i Anny z Kochodzonów). Rodzeństwo: Adolfa, Aleksander, Stanisław, Eleonora, Bolesław, Czesław, Leopold.", c: "prawd", acts: ["u1904-20"] }, { t: "Ścieżka B: Władysław, ur. 15/28.06.1904, syn Piotra Mieszały (umiał pisać) i Wiktorii z Gładków. Rodzeństwo: Stanisława, Stanisław, Władysława, Aleksandra, Eugeniusz (ur. 1915 „w czasie ruchu wojennego”, w 1939 r. kapral, jeniec Stalagów I-A i I-B), Genowefa, Franciszek.", c: "prawd", acts: ["u1904-53", "u1916-1"] }, { t: "Ścieżka B minimalnie mocniejsza — jedyna poszlaka: siostra Genowefa wyszła w 1934 r. za Henryka Budnego, a babcia nosi imię Henryka.", c: "hyp" }, { t: "Piotr i Walenty Mieszałowie byli u siebie nawzajem chrzestnymi — prawdopodobnie bracia; może z Adamem — synowie Franciszka Mieszały seniora z Grabówka.", c: "hyp" }, "Obie rodziny żeniły się w tej parafii: w 1927 r. Stanisław Szczepanek wziął za żonę Józefę Oleszczak, córkę Balbiny z Mieszałów."],
      against: ["Żaden z dwóch Władysławów nie ma w parafii ślubu ani zgonu do 1936 r.; śluby z lat 1937–1945 nie są zeskanowane — rozstrzygnie akt ślubu Władysława i Zofii (USC Olszewo-Borki).", "Trzeci Władysław (ur. 1908, syn Walentego) odpada — żył do 1983 r.; czwarty (ur. 1910, syn Walentego) w latach 60. mieszkał w Szczecinie."],
      sources: ["metryki-nw", "geneteka", "straty", "raport-ms"] },
    { title: "Stryj z Chicago? Aleksander Mieszała, syn Walentego", c: "hyp",
      for: ["2 maja 1910 r. na Ellis Island przypłynął z Rotterdamu (statek Nieuw Amsterdam) 20-letni Aleksander Mieszała („Alexander Mesralo”) z „Grabowek, Russia”, syn Walentego.", "28 stycznia 1913 r. w Chicago ożenił się z Ludwiką Merchel; jako rodziców podał Walentego i Katarzynę „Głodkównę” — pasuje do Walentego i Katarzyny z Gładków z Grabówka."],
      against: ["Czy to krewny babci, zależy od tego, który Władysław był jej ojcem — przy ścieżce B (jeśli Piotr i Walenty to bracia) Aleksander byłby kuzynem pradziadka, inaczej dalekim krewnym.", "Dalsze losy (zm. 1968 w Wisconsin) znamy tylko z cudzego drzewa bez źródeł."],
      sources: ["raport-ms"] },
    { title: "Dąbrowy, parafia Myszyniec — słabszy trop", c: "hyp",
      for: [{ t: "Akt zgonu 302/1902 z Myszyńca: w Dąbrowach zmarł 10-miesięczny Stanisław Mieszała, syn Rozalii — ślad Mieszałów w Dąbrowach ok. 1900 r.", c: "ok", acts: ["z1902-302"] }],
      against: ["Rodzina Zofii i Mieszałowie z Grabówka żyli w parafii Nowa Wieś, nie w Myszyńcu."],
      sources: ["akt1902-mysz", "otn33"] },
  ],
  shooting: {
    title: "Rozstrzelany w łapance — czego szukaliśmy",
    key: { title: "Trzech Władysławów z jednej wsi", c: "hyp", label: "mocna hipoteza",
      t: ["W Grabówku żyło trzech Władysławów Mieszałów urodzonych w latach 1904–1908 — synowie Adama, Piotra i Walentego — a czwarty, ur. 1910, był synem Walentego i Marianny. Przy łapance pomyłka tożsamości byłaby łatwa: rodzina mówi, że pradziadek zginął „przez pomyłkę”.", "Władysław ur. 1908 żył do 1983 r., więc to nie on zginął — ale mógł być tym, z kim pradziadka pomylono (też hipoteza)."],
      note: "bez dokumentu — dlatego hipoteza, choć mocna" },
    items: [
      { t: "Relacja rodzinna: pradziadek Władysław Mieszała został rozstrzelany w czasie łapanki we wsi, „przez pomyłkę”. Szczegóły nieznane.", c: "ok", note: "relacja rodzinna", sources: ["rodzina-2026"] },
      { t: "W bazie strat i ofiar represji (153 rekordy Mieszałów, 5 wariantów pisowni) i w Indeksie Represjonowanych Władysława Mieszały nie ma. Wśród 296 rekordów z wsi rodziny (Grabówek, Chojniki, Mostowo, Rżaniec, Grabnik, Wyszel, Stylągi) też nie. Wielu ofiar egzekucji nie spisano z nazwiska, więc brak nie wyklucza zdarzenia.", c: "ok", note: "kwerenda", sources: ["straty-mieszala", "indeks-repr"] },
      { t: "Chojniki, Wyszel, Mostowo, Gutowo i Przystań należały przed wojną do gminy Sypniewo (pow. makowski), w czasie okupacji — do Kreis Mackeim. Zabitych chowano na cmentarzu w Nowej Wsi.", c: "prawd" },
      { t: "Obława 9–12 stycznia 1943 r. (Grabowo k. Krasnosielca, Wyszel, Rżaniec): po zabiciu żandarma Niemcy rozstrzelali 8 Polaków i wzięli 30 zakładników, m.in. sołtysa Wyszla Władysława Ciaka (wywieziony do Auschwitz). Najlepiej pasuje do relacji rodzinnej.", c: "hyp" },
      { t: "Inne możliwe zdarzenia: zabójstwa przez żandarmerię w Chojnikach, Gutowie i Przystani w latach 1942–44; Stepna Stara, 3 sierpnia 1944 r. — 5 osób rozstrzelanych przy kopaniu rowów przeciwczołgowych.", c: "hyp" },
    ],
    resolve: ["Akt zgonu Władysława (USC Olszewo-Borki) albo sądowe stwierdzenie zgonu.", "Akta IPN, sygn. GK 162/385 — żandarmeria Sypniewo.", "Arolsen Archives — zakładnicy i wywiezieni ze stycznia 1943 r."],
    sources: ["straty-mieszala", "indeks-repr", "ipn-gk162", "arolsen"],
  },
  pitfalls: ["Dwóch Franciszków Szczepanków w Chojnikach: ojciec Aleksandra to syn Piotra (ok. 1849–1931); syn Antoniego (1859–1927) to imiennik.", "Dwie Nowe Wsie (koło Ostrołęki i Nowa Wieś Wschodnia), dwa Mostowa (ostrołęckie i makowskie), Grabówek i Grabówko — łatwo pomylić rekordy.", "Mieszała to także stare nazwisko mazurskie (ewangelicka parafia Księży Lasek, pow. szczycieński) — groby Mieszałów w Szczytnie nie muszą być z linii kurpiowskiej.","Henryka Mieszała z Pruszkowa (zm. 2025) to inna osoba — nie babcia.", "Eugeniusz Mięszała (1924–1995), „syn Władysława i Zofii” z bazy strat wojennych — odrzucony: Zofia, matka Henryki, urodziła się w 1913 r., więc w 1924 r. miała 11 lat.", "Wincenty Szczepanek z Wyszla (ur. 1903, jeniec w 1939 r.) to syn innego Aleksandra — syna Grzegorza — i Bronisławy Terlikowskiej. To nie brat Zofii. W parafii Nowa Wieś żyło co najmniej trzech Aleksandrów Szczepanków.", "Zofia Szczepanek z Wyszla, ur. 1910 (córka Józefa i Marianny z Kisielów), to inna Zofia — w 1931 r. wyszła za Józefa Chludzińskiego.", "„Sophia Mieszala”, ur. 10.05.1909, na robotach w pow. Zeitz — prawdopodobnie nie matka Henryki: indeks Arolsen podaje jej nazwisko panieńskie Karjalek, a przy roczniku 1909 nie mogłaby być matką Eugeniusza z 1924 r.", "Szczepanek to także stare nazwisko mazurskie z dawnych Prus Wschodnich — część Szczepanków pochowanych w Szczytnie i Pasymiu to mogą być miejscowi, a nie przesiedleńcy z Kurpiów."],
  resolve: [
    "Odpis zupełny aktu małżeństwa Mariana i Henryki z USC — poda datę i miejsce urodzenia babci i potwierdzi jej ojca.",
    "Zapytać rodzinę: skąd pochodził Władysław Mieszała (Grabówko?), kiedy i gdzie brał ślub z Zofią, kiedy rodzina przeniosła się na Mazury.",
    "Akt ślubu Władysława z Zofią (ok. 1930–1945) z ksiąg Nowej Wsi z lat 1937–1945 — USC Olszewo-Borki albo AP Pułtusk. Poda imiona rodziców Władysława i rozstrzygnie ścieżkę A albo B.",
    "Sprawdzić dalsze losy obu Władysławów z 1904 r. (Adama i Piotra) — dopiski na marginesach ich aktów chrztu, zgony w Grabówku.",
  ],


};
