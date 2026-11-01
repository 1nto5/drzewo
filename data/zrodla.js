/* ŹRÓDŁA, METODA, DO ZROBIENIA, IMIENNICY.
   DRZEWO.sources: rejestr źródeł. Ciekawostki i wydarzenia osi czasu wskazują je przez id.
   Źródło bez url = materiał roboczy (nasze odczyty aktów, raporty z badań). */
window.DRZEWO = window.DRZEWO || {};

DRZEWO.asof = "1 listopada 2026";

DRZEWO.sources = [
  /* rodzina */
  { id: "metryki-nw", group: "archiwa", label: "metryki.genealodzy.pl — księgi parafii Nowa Wieś (pow. ostrołęcki), zespół 0651d; ślub 1909/4", url: "https://metryki.genealodzy.pl/metryki.php?op=kt&ar=6&zs=0651d&sy=1909&kt=2" },
  { id: "metryki-chorzele", group: "archiwa", label: "metryki.genealodzy.pl — skany ksiąg Chorzel 1866–1923 (np. śluby 1892)", url: "https://metryki.genealodzy.pl/id1483-sy1892-kt2" },
  { id: "rodzina-2026", group: "rodzina", short: "relacja rodzinna", label: "Relacja rodzinna, 2026 — rodzice i dziadkowie babci Henryki (Władysław Mieszała, Zofia ze Szczepanków, Aleksander i Katarzyna Szczepankowie)" },
  /* archiwa i indeksy */
  { id: "ap", group: "archiwa", label: "AP Warszawa Oddział w Pułtusku, akta stanu cywilnego parafii Chorzele (79/107/0)", url: "https://www.szukajwarchiwach.gov.pl/zespol/-/zespol/109048" },
  { id: "akt1864", group: "archiwa", label: "Akt ślubu Feliksa i Rozalii, 28/1864 (księga 1864)", url: "https://www.szukajwarchiwach.gov.pl/jednostka/-/jednostka/14110494" },
  { id: "geneteka", group: "archiwa", label: "Geneteka — indeks metryk", url: "https://geneteka.genealodzy.pl" },
  { id: "fs", group: "archiwa", label: "FamilySearch — katalog Chorzele (księgi 1695–1825)", url: "https://www.familysearch.org/search/catalog/317312" },
  { id: "fs-chorzele", group: "archiwa", label: "FamilySearch — łacińskie księgi Chorzel, filmy 8024883–8024885 (śluby 1750 i 1786, skorowidz urodzeń 1759, chrzest Walentego 1799, zgon Pawła 1795, ślub Walentego 1822)", url: "https://www.familysearch.org/search/catalog/317312" },
  { id: "fs1750", group: "archiwa", label: "FamilySearch — skan aktu ślubu Pawła i Jadwigi, 1750", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSXV-D3L7-2?cat=317312&view=explore&lang=en&groupId=M999-NYD" },
  { id: "etnofon", group: "archiwa", label: "Etnofon IS PAN — nagrania z Połoni (raport „Utwory”, sesja T2667)", url: "https://etnofon.ispan.pl/raport/show?raport=sounds" },
  { id: "grobonet-marcjanna", group: "archiwa", label: "grobonet — Marcjanna Antosiak, cmentarz w Szczytnie", url: "https://grobonet.com/p/szczytno/5933/marcjanna-antosiak-szczytno" },
  { id: "fb-matecznik", group: "archiwa", short: "strona FB I. Antosiaka", label: "Facebook — „Połoń - Matecznik Rodziny Antosiak” (strona Ireneusza Antosiaka; źródło wtórne: odczyty i indeksy autora)", url: "https://www.facebook.com/profile.php?id=100049282671892" },
  { id: "akt1902-mysz", group: "archiwa", label: "Myszyniec, akt zgonu 302/1902 — Stanisław Mieszała (skan)", url: "https://photos.szukajwarchiwach.gov.pl/6d653dc77fe49c329cbf1fbbac978574f505ec1c8136d6e53ca3d9e50015469f_max" },
  { id: "straty", group: "archiwa", label: "straty.pl — straty osobowe i ofiary represji 1939–1945 (rekordy PCK, IPN, AAN)", url: "https://straty.pl/" },
  { id: "wig1931", group: "archiwa", label: "Mapa WIG 1:100 000, arkusz Przasnysz (1931) — skan", url: "http://maps.mapywig.org/m/WIG_maps/series/100K/P36_S32_PRZASNYSZ_1931_600dpi_bcuj298316-287605.jpg" },
  { id: "kwatermistrz", group: "archiwa", label: "Mapa Kwatermistrzostwa (Topograficzna Karta Królestwa Polskiego, ok. 1843), arkusz Myszyniec — skan", url: "http://maps.mapywig.org/m/Polish_maps/series/126K_Mapa_Kwatermistrzostwa/TKKP126K_ark-23_Kol_IV_Sek_I_Myszyniec_600dpi_BCPolona.jpg" },
  { id: "ap-scalenie", group: "archiwa", label: "AP Pułtusk 79/95/0/2/763–765 — plany scalenia gruntów Połoni, 1936 (bez skanów online)", url: "https://1939.warszawa.ap.gov.pl/container/publikacje/Informator_pultusk.pdf" },
  /* opracowania i kontekst */
  { id: "sgkp", group: "kontekst", label: "Słownik geograficzny Królestwa Polskiego, t. VIII, s. 725 — Połoń", url: "https://dir.icm.edu.pl/pl/Slownik_geograficzny/Tom_VIII/725" },
  { id: "wiki-polon", group: "kontekst", label: "Wikipedia — Połoń", url: "https://pl.wikipedia.org/wiki/Po%C5%82o%C5%84" },
  { id: "wiki-pn", group: "kontekst", label: "Wikipedia — Prusy Nowowschodnie", url: "https://pl.wikipedia.org/wiki/Prusy_Nowowschodnie" },
  { id: "wiki-popielec", group: "kontekst", label: "Wikipedia — Środa Popielcowa", url: "https://pl.wikipedia.org/wiki/%C5%9Aroda_Popielcowa" },
  { id: "wiki-chorzele1920", group: "kontekst", label: "Wikipedia — Bitwa pod Chorzelami (1920)", url: "https://pl.wikipedia.org/wiki/Bitwa_pod_Chorzelami" },
  { id: "kmoch-polon", group: "kontekst", label: "M. W. Kmoch, blog „Kurpianka w wielkim świecie” — Małowidz, Połoń i Olszewka", url: "http://www.kurpiankawwielkimswiecie.pl/2013/05/maa-ojczyzna-maowidz-poon-i-olszewka.html" },
  { id: "kmoch-j2", group: "kontekst", label: "M. W. Kmoch — Historia Jednorożca, cz. 2", url: "http://www.kurpiankawwielkimswiecie.pl/2014/07/maa-ojczyzna-historia-jednorozca-cz-2.html" },
  { id: "kmoch-j3", group: "kontekst", label: "M. W. Kmoch — Historia Jednorożca, cz. 3", url: "http://www.kurpiankawwielkimswiecie.pl/2014/07/maa-ojczyzna-historia-jednorozca-cz-3.html" },
  { id: "kmoch-1939", group: "kontekst", label: "M. W. Kmoch — 80 lat temu: sierpień i wrzesień 1939", url: "http://www.kurpiankawwielkimswiecie.pl/2019/08/80-lat-temu-sierpien-i-wrzesien-1939-r.html" },
  { id: "glos23", group: "kontekst", label: "Głos Gminy Jednorożec 3(23)/2011, s. 14–17", url: "https://archiwum.jednorozec.pl/FCK/file/Glos/glos_23i.pdf" },
  { id: "glos59", group: "kontekst", label: "Głos Gminy Jednorożec nr 59", url: "https://archiwum.jednorozec.pl/FCK/glos_59_v7f.pdf" },
  { id: "glos63", group: "kontekst", label: "Głos Gminy Jednorożec nr 63", url: "https://archiwum.jednorozec.pl/FCK/glos_63v7f.pdf" },
  { id: "glos71", group: "kontekst", label: "Głos Gminy Jednorożec nr 71", url: "https://archiwum.jednorozec.pl/FCK/glos_71_v4rc.pdf" },
  { id: "turos", group: "kontekst", label: "Turos, „Niepodległość i Pamięć” 32 (2025) — armia Napoleona nad Orzycem", url: "https://bazhum.muzhp.pl/media/texts/niepodlegosc-i-pamiec/2025-tom-32-numer-1-89/niepodleglosc-i-pamiec-2025-t32-n1-turos.pdf" },
  { id: "wrobel", group: "kontekst", label: "M. Wróbel, Cholera na Białostocczyźnie", url: "https://repozytorium.uwb.edu.pl/jspui/bitstream/11320/11196/1/M_Wrobel_Cholera_na_Bialostocczyznie.pdf" },
  { id: "pgsa", group: "kontekst", label: "PGSA — czym są tabele likwidacyjne i nadawcze", url: "https://pgsa.org/wp-content/uploads/2024/07/WhatAre-Liquidation-Tables.pdf" },
  { id: "szumski", group: "kontekst", label: "Szumski, Uwłaszczenie chłopów 1846–1871", url: "https://pbc.biaman.pl/Content/1859/PDF/uwlaszczenie_chlopow_1846-1871.pdf" },
  /* Ameryka */
  { id: "fs-1913", group: "ameryka", label: "FamilySearch — lista pasażerów, Ellis Island 4.09.1913 (Franciszek Antoszak z Połoni)", url: "https://www.familysearch.org/ark:/61903/1:1:JNTX-YJZ" },
  { id: "fs-1917", group: "ameryka", label: "FamilySearch — karta poborowa 1917 (Francis Antosiak, ur. „Polon”)", url: "https://www.familysearch.org/ark:/61903/1:1:WYRP-RM2M" },
  { id: "szczepanski", group: "ameryka", label: "Szczepański, „Studia Mazowieckie” 2/2023 — emigracja z guberni płockiej", url: "https://studiamazowieckie.puzim.edu.pl/index.php/sm/article/download/68/57/79" },
  { id: "kurpianka-2018-06", group: "ameryka", label: "M. W. Kmoch — Dlaczego i jak na przełomie XIX i XX w. emigrowano", url: "http://www.kurpiankawwielkimswiecie.pl/2018/06/dlaczego-i-jak-na-przeomie-xix-i-xx-w.html" },
  { id: "kurpianka-2018-07", group: "ameryka", label: "M. W. Kmoch — Następstwa czasowych i stałych emigracji", url: "http://www.kurpiankawwielkimswiecie.pl/2018/07/nastepstwa-czasowych-i-staych-emigracji.html" },
  { id: "raport-a", group: "robocze", short: "raport Ameryka", label: "Raport „Antosiakowie z Połoni w Ameryce” (1.11.2026)" },
  /* nazwiska */
  { id: "ijp-antosiak", group: "nazwiska", label: "IJP PAN — nazwisko Antosiak", url: "https://nazwiska.ijppan.pl/haslo/print/name/ANTOSIAK" },
  { id: "ijp-mieszala", group: "nazwiska", label: "IJP PAN — nazwisko Mieszała", url: "https://nazwiska.ijppan.pl/haslo/print/name/MIESZA%C5%81A" },
  { id: "pn-mieszala", group: "nazwiska", label: "polskienazwiska.pl — Mieszała (liczba i rozmieszczenie)", url: "https://polskienazwiska.pl/n/MIESZA%C5%81A" },
  { id: "otn33", group: "nazwiska", label: "Zeszyty Naukowe OTN 33 (Mironczuk) — Ignacy Mieszała, Myszyniec 1830", url: "http://www.otn.ostroleka.pl/images/Zeszyty/zeszyty33-min.pdf" },
  { id: "genealogyindexer", group: "nazwiska", label: "genealogyindexer — Księga adresowa Polski 1926/27–1930 (J. Mieszała, Dąbrowy)", url: "https://genealogyindexer.org/" },
  { id: "plan-dabrowy", group: "nazwiska", label: "Plan odnowy miejscowości Dąbrowy (2022)", url: "https://bip-v1-files.idcom-jst.pl/sites/47211/wiadomosci/635574/files/plan_odnowy_miejscowosci__dabrowy_2022.pdf" },
  /* materiały robocze */
  { id: "arolsen", group: "archiwa", label: "Arolsen Archives — dokumenty robotników przymusowych i jeńców", url: "https://collections.arolsen-archives.org/en/search" },
  { id: "ijp-szczepanek", group: "nazwiska", label: "IJP PAN — nazwisko Szczepanek (pow. ostrołęcki 4. w kraju, szczycieński 7.)", url: "https://nazwiska.ijppan.pl/haslo/print/name/SZCZEPANEK" },
  { id: "raport-ms", group: "robocze", short: "raport Mieszała × Szczepanek", label: "Raport „Mieszała × Szczepanek — rodzice Henryki” (1.11.2026)" },
  { id: "kalendarz1891", group: "kontekst", short: "Kalendarz Płocki 1891", label: "Kalendarz Płocki na rok 1891 — o Kurpiach znad Orzyca" },
  { id: "badania", group: "robocze", short: "nasze odczyty aktów", label: "Nasze odczyty aktów Chorzel (raporty z badań, X–XI 2026)" },
  { id: "raport-c", group: "robocze", short: "raport ciekawostek", label: "Raport ciekawostek z weryfikacją źródeł (1.11.2026)" },
];

DRZEWO.method = [
  "Dane ze strony FB „Połoń - Matecznik Rodziny Antosiak” (Ireneusz Antosiak) to źródło wtórne: oznaczamy je „wg strony FB I. Antosiaka” i najwyżej jako prawdopodobne, dopóki nie przeczytamy aktu.",
  "Każda osoba i każde powiązanie ma jeden z trzech poziomów pewności: pewne (akt metrykalny, indeks albo wiedza rodzinna), prawdopodobne (zgodne poszlaki) albo hipoteza (trop z naszych badań, wymaga sprawdzenia).",
  "Akty z lat 1826–1865 czytamy ze skanów Archiwum Państwowego w Pułtusku. „1 odczyt” — akt przeczytany raz; „2 odczyty” — sprawdzony drugi raz; „sprawdzone” — przeczytany osobiście przez Adriana.",
  "Księgi Chorzel z lat 1866–1923 nie są na szukajwarchiwach: te akty znamy z indeksu Geneteki, a skany są w serwisie metryki.genealodzy.pl. Księgi sprzed 1826 r. (po łacinie) są na FamilySearch.",
  "Skanów nie kopiujemy na stronę — link otwiera oryginał w serwisie archiwum (serwer blokuje pobieranie, przy dłuższym przeglądaniu trzeba robić przerwy).",
  "Geneteka blokuje automatyczne zapytania i podaje wtedy fałszywe wyniki — wyszukiwania robimy tylko ręcznie.",
  "Wiek w aktach „pływa”: podawano go z pamięci, więc rok urodzenia z aktu zgonu to zawsze „ok.”. Podwójne daty, np. 16/28 IV, to kalendarz juliański / gregoriański.",
  "Drzewo kończy się na dziadkach. Nie publikujemy danych osób żyjących.",
];

DRZEWO.pitfalls = [
  "Marian Antosiak z Połoni, rocznik 1924 (IPN) — to imiennik dziadka, nie dziadek.",
  "Wincenty Antosiak × Marianna Mierzejewska — starszy Wincenty z Połoni, nie pradziadek.",
  "Franciszek Antosiak × Marianna Opalach (ślub 38/1864) — inny Franciszek.",
  "Grzegorz Sędrowski z Olszewki (ślub 1859) — inny, młodszy człowiek niż ojciec Rozalii.",
  "Aleksander Antosiak, ur. ok. 1821 (chrzestny Rozalii w 1843) — z innej gałęzi, nie brat Feliksa.",
  "Dwie Heleny: Helena, żona Kacpra, zmarła w 1848; Helena z Żyrów, pierwsza żona Stanisława, zmarła w 1840.",
  "W Połoni żyło co najmniej trzech, a może czterech Wojciechów Antosiaków w tym samym czasie.",
  "Henryka Mieszała z Pruszkowa (zm. 2025) — to nie babcia.",
  "Jakub Antosiak, ofiara zbrodni katyńskiej, ur. 1892 w Sławicach Duchownych — nie ta rodzina.",
];

/* Kolejność = priorytet. */
DRZEWO.todo = [
  "Odpis zupełny aktu małżeństwa Mariana i Henryki z USC — potwierdzi rodziców babci (Władysław Mieszała, Zofia ze Szczepanków) i poda miejsce jej urodzenia.",
  "Zapytać rodzinę, skąd pochodzili Władysław Mieszała i Zofia ze Szczepanków i gdzie dziadkowie się poznali. Co wiadomo o Aleksandrze, który „wrócił z Ameryki”?",
  "FamilySearch: chrzest Jana Kantego, syna Kacpra (obraz 498, VIII 1803). Wyjaśnić „Wysocką” w aktach z lat 1805, 1806 i 1825 (ojczym? przydomek?) — czy Wojciech Wysocki był żonaty przed 1770 r.",
  "Przeczytać skany z metryki.genealodzy.pl: ślub Franciszka z Marcjanną (1892), zgon Feliksa (1880, wiek), chrzty rodzeństwa Wincentego.",
  "Parafia Nowa Wieś k. Ostrołęki (metryki.genealodzy.pl, zespół 0651d): przeczytać ślub 1909/4 i szukać chrztu Zofii Szczepanek w latach 1912–1914 (luka w indeksie) i po 1919; ślub Zofii z Władysławem Mieszałą — po 1936 r. albo w innej parafii.",
  "Geneteka ręcznie: Mieszała w parafiach Myszyniec, Chorzele, Jednorożec, Przasnysz; para Antosiak × Mieszała w latach 1940–1970.",
  "Etnofon IS PAN: odsłuchać sesję T2667 z Połoni (1963), zwłaszcza zapowiedzi T2667.01 i T2667.17 — czy pada imię i wiek śpiewaczki.",
  "S 9/1841: trzeci odczyt nazwiska rodowego Heleny, matki Stanisława („z F…orów?”).",
  "Wojciech Chudzik: D 117/1847 podaje rodziców Michała i Maryannę, a D 58/1829 wskazuje na Mateusza — wyjaśnić.",
  "Rozalia Sędrowska: S 35/1865 Anny Sendrowskiej podaje „niegdy Ludwika i Maryanny z Kutów” — czy to jej siostra i kim był Ludwik.",
  "Zgon Marianny z Chudzików — szukać po 1864 r.",
  "Cmentarz w Szczytnie (ul. Śląska, kw. BXI/XIV/47): data pochówku Marcjanny Antosiak, potem akt zgonu w USC — poda nazwisko panieńskie.",
  "Władysław Antosiak (1900–1982), wójt: chrzest 121/1900 w parafii Chorzele — potwierdzić aktem, że to syn Franciszka i Marcjanny (tak podaje strona FB).",
  "Uwłaszczenie Połoni: tabela nadawcza w AP Płock / AP Warszawa (Komisarz do Spraw Włościańskich pow. przasnyskiego) — działki rodziny po 1864 r.",
  "Parafia Chorzele: policzyć zgony miesięcznie w latach 1832 i 1848 — czy był szczyt epidemii.",
  "Jakub Jentosiak: ślub z Marianną i jego pochodzenie — w skorowidzu chrztów Chorzel 1694–1718 Jentosiaków nie ma; szukać w sąsiednich parafiach.",
  "Numer aktu chrztu Franciszka: Geneteka podaje 104/1868, strona FB 117/1868 — sprawdzić.",
  "Myszyniec: Rozalia Mieszała z Dąbrów (matka Stanisława, zm. 1902) — szukać jej ślubu i innych dzieci ok. 1895–1910.",
  "AP Pułtusk: plany scalenia gruntów Połoni z 1936 r. (79/95/0/2/763–765) — pokażą działki rodziny przed wojną.",
  "Geneteka: urodzenia Chorzele 1910 i 1916 — czy Stanisław (ur. 11.12.1910) i Czesław (ur. 29.10.1916) Antosiakowie z akt sprawy Wendlera to dzieci Franciszka i Marcjanny; ewentualnie kwerenda IPN, akta GK 629/4946.",
  "Geneteka: akt urodzenia Wincentego Dębka (Chorzele 1914) — potwierdzi, że to brat Eleonory.",
  "Arolsen Archives, dokument 70253100 (lista cudzoziemców, pow. Uffenheim): miejsce urodzenia Eugeniusza Mieszały (ur. 1924) — Kurpie czy Kielecczyzna.",
  "AP Pułtusk: duplikaty małżeństw Myszyńca 1927–1937 (79/825/0/-/8, 9, 10) — ślub Władysława Mieszały z Zofią Szczepanek.",
  "Ellis Island (darmowe konto): Antosiak / Antosiac / Antoszak, lata 1900–1925, Chorzele / Przasnysz / Połoń.",
];
