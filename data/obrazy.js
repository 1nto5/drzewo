/* OBRAZY — galeria obrazy.html (źródło: Genealogia/assets/tresci/tresci-obrazy.md, stan 1.11.2026).
   DRZEWO.images = [{ file, w, h, title, year, caption, why, author, license, licenseUrl, sourceUrl, sourceLabel, note, people }]
     file        plik w img/ (≤ 1,5 MB, dłuższy bok ≤ 1600 px); w, h = wymiary w px
     title       krótki tytuł karty;  year = rok jako tekst (np. "ok. 1843", "1915")
     caption     podpis (dla CC BY / BY-SA wymagany: autor + licencja + źródło)
     why         co ma wspólnego z rodziną / wsią
     author      autor lub wydawca;  license, licenseUrl (puste dla domeny publicznej)
     sourceUrl   strona źródła;  sourceLabel = nazwa źródła
     note        uwaga (np. „to ilustracja propagandowa, nie zdjęcie”)
     people      [id osób z data/osoby.js] — link + relacja do Adriana
     alt         opis obrazu dla czytników ekranu */
window.DRZEWO = window.DRZEWO || {};
(function () {
  const BYSA4 = ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/deed.pl"];
  const PD = ["domena publiczna", ""];
  const C = "Wikimedia Commons";
  const I = (o, lic) => Object.assign({ license: lic[0], licenseUrl: lic[1], people: [] }, o);

  window.DRZEWO.images = [
    I({ file: "mapa-kwatermistrzostwa-ok1843-polomia.jpg", w: 1500, h: 1000, year: "ok. 1843", title: "„Połomia” na Mapie Kwatermistrzostwa",
      alt: "Wycinek starej mapy: wieś Połomia przy krótkiej drodze, na wschodzie łąki i koryta Orzyca, dookoła lasy",
      caption: "Połoń („Połomia”) na Mapie Kwatermistrzostwa, ok. 1843. Topograficzna Karta Królestwa Polskiego 1:126 000, pomiary 1822–1831, arkusz Kol. IV Sek. I „Myszyniec”.",
      why: "Tak wyglądała wieś, gdy żyli Walenty i Feliks (ur. 1839 w Połoni). Zwarty blok domów przy krótkiej drodze; na wschodzie mokre łąki i koryta Orzyca, na płd. wsch. Małowidz, na płn. wsch. Olszewka. Układ jak na mapie z 1931 r., więc wieś stała w tym samym miejscu co najmniej 100 lat.",
      author: "instytucja państwowa Królestwa Polskiego", sourceLabel: "Polona / mapywig.org",
      sourceUrl: "http://maps.mapywig.org/m/Polish_maps/series/126K_Mapa_Kwatermistrzostwa/TKKP126K_ark-23_Kol_IV_Sek_I_Myszyniec_600dpi_BCPolona.jpg",
      people: ["walenty", "feliks"] }, PD),
    I({ file: "agad-plan-wsi-parciak-1829.jpg", w: 1400, h: 864, year: "1829", title: "Plan wsi rządowej Parciak",
      alt: "Ręcznie rysowany, kolorowany plan wsi Parciaki z wąskimi pasami pól, łąkami i kartuszem z napisem",
      caption: "Plan wsi rządowej Parciak w ekonomii Przasnysz, 1829 — sąsiedniej wsi Połoni. AGAD, Zbiór Kartograficzny 1/402/0/-/274-24.",
      why: "Pokazuje, jak wyglądały wsie rządowe ekonomii Przasnysz; Połoń była jedną z nich. Taki sam plan wykonano dla Połoni w 1801 r., ale nie ma jego skanu online. Na dole po lewej: „Grunta Wsi Rządowej Olszew[ka]” — granica z sąsiadką Połoni.",
      author: "nieznany", sourceLabel: "AGAD, szukajwarchiwach.gov.pl",
      sourceUrl: "https://www.szukajwarchiwach.gov.pl/jednostka/-/jednostka/24665872",
      note: "Wierna reprodukcja dokumentu z domeny publicznej (art. 14 dyrektywy UE 2019/790). Napis „Archiwum Główne Akt Dawnych” na skanie zostawiony." }, PD),
    I({ file: "mapa-wig-1931-polon-58.jpg", w: 1400, h: 1100, year: "1931", title: "„Połoń 58” na mapie WIG",
      alt: "Wycinek mapy wojskowej: napis Połoń 58, wieś ulicówka przy szosie Chorzele–Jednorożec, łąki i las",
      caption: "Połoń na mapie WIG 1:100 000, arkusz Przasnysz (Pas 36 Słup 32), 1931. Liczba 58 to liczba domów.",
      why: "Tak wyglądała wieś, gdy żyli Franciszek i Wincenty, a Wincenty i Eleonora brali ślub (1925). Ulicówka: dwa rzędy zagród ok. 0,5 km od szosy Chorzele–Jednorożec. Na płd. wsch. las z gajówką, dalej Małowidz (50 domów).",
      author: "Wojskowy Instytut Geograficzny", sourceLabel: "JBC / mapywig.org",
      sourceUrl: "http://maps.mapywig.org/m/WIG_maps/series/100K/P36_S32_PRZASNYSZ_1931_600dpi_bcuj298316-287605.jpg",
      people: ["franciszek", "wincenty", "eleonora"] }, PD),
    I({ file: "olszewka-wojska-niemieckie-1915.jpg", w: 1099, h: 694, year: "III 1915", title: "Wojska niemieckie w Olszewce",
      alt: "Zimowa, zaśnieżona droga przez wieś z chałupami krytymi strzechą, po lewej grupa żołnierzy i jeździec",
      caption: "Olszewka koło Połoni, marzec 1915. Pocztówka polowa (Feldpost), zbiory M. Krejpowicza.",
      why: "Olszewka graniczy z Połonią. Tak mogła wyglądać Połoń zimą 1915 r., gdy przez gminę szedł front. Franciszek miał wtedy 47 lat, a Wincenty 10.",
      author: "nieznany", sourceLabel: C, sourceUrl: "https://commons.wikimedia.org/wiki/File:Wojska_niemieckie_w_olszewce_1915_rok.jpg",
      people: ["franciszek", "wincenty"] }, PD),
    I({ file: "olszewka-okolice-landsturm-1915.jpg", w: 962, h: 600, year: "1915", title: "Żołnierze w lesie koło Olszewki",
      alt: "Grupa żołnierzy w mundurach w sosnowym lesie, przy drążku do ćwiczeń",
      caption: "Żołnierze niemieckiego pospolitego ruszenia (Landsturm) w lesie koło Olszewki, 1915. Zbiory M. Krejpowicza.",
      why: "To te same lasy, które otaczały Połoń. W 1915 r. stało tu wojsko.",
      author: "nieznany", sourceLabel: C, sourceUrl: "https://commons.wikimedia.org/wiki/File:Okolice_Olszewki.JPG" }, PD),
    I({ file: "ulatowo-czerniaki-1915.jpg", w: 939, h: 603, year: "1915", title: "Tabor wojskowy w Ulatowie-Czerniakach",
      alt: "Długi sznur wozów konnych z żołnierzami na wiejskiej drodze, po prawej drewniana chałupa i bale",
      caption: "Tabor wojskowy w Ulatowie-Czerniakach, pow. przasnyski, 1915. Według opisu żołnierze wiozą drewno na umocnienia. Zbiory M. Krejpowicza.",
      why: "Typowa wieś powiatu przasnyskiego w 1915 r.",
      note: "Ulatowo-Czerniaki leży w gminie Krzynowłoga Mała, nie w gminie Jednorożec (nie mylić z Ulatowem-Pogorzelą).",
      author: "nieznany", sourceLabel: C, sourceUrl: "https://commons.wikimedia.org/wiki/File:Ulatowo_Czerniaki_1915.JPG" }, PD),
    I({ file: "przasnysz-zniszczony-1915.jpg", w: 1099, h: 714, year: "1915", title: "Zniszczony Przasnysz",
      alt: "Pocztówka: ulica z ruinami murów zburzonych domów, po ulicy idą ludzie",
      caption: "Zniszczona ulica Ostrołęcka w Przasnyszu, 1915 (pocztówka „Prasznys – Ostrolenkaer Straße”). Zbiory M. Krejpowicza.",
      why: "Przasnysz był miastem powiatowym dla Połoni. W 1915 r. toczyły się tu dwie wielkie bitwy.",
      author: "Karl Mucke (1847–1923), wydawca pocztówki", sourceLabel: C, sourceUrl: "https://commons.wikimedia.org/wiki/File:Zniszczony_Przasnysz_w_wyniku_walk_1915r.jpeg" }, PD),
    I({ file: "przasnysz-rynek-1915.jpg", w: 1069, h: 714, year: "1915", title: "Rynek w Przasnyszu",
      alt: "Rynek miejski, w tle budynki zniszczone w czasie walk",
      caption: "Rynek w Przasnyszu, 1915. Pocztówka polowa (Feldpost), zbiory M. Krejpowicza.",
      why: "Miasto powiatowe Połoni po walkach 1915 r.",
      author: "nieznany", sourceLabel: C, sourceUrl: "https://commons.wikimedia.org/wiki/File:Przasnysz_rynek_miejski_1915r.jpg" }, PD),
    I({ file: "przasnysz-lazaret-w-kosciele-1915.jpg", w: 1074, h: 689, year: "1915", title: "Lazaret w kościele farnym",
      alt: "Wnętrze barokowego kościoła, na posadzce na słomie leżą ranni żołnierze",
      caption: "Kościół parafialny w Przasnyszu jako lazaret (szpital polowy), 1915. Muzeum w Przasnyszu.",
      why: "Front 1915 r. w mieście powiatowym Połoni.",
      author: "nieznany", sourceLabel: "Muzeum w Przasnyszu / " + C, sourceUrl: "https://commons.wikimedia.org/wiki/File:Przasnysz,_lazaret_w_ko%C5%9Bciele_parafialnym_(1915).jpg" }, PD),
    I({ file: "przasnysz-zdobycie-30-07-1915.jpg", w: 1600, h: 848, year: "1915", title: "Zdobycie Przasnysza 30 lipca 1915",
      alt: "Rysunek: żołnierze nacierają na płonące miasto",
      caption: "Zdobycie Przasnysza 30.07.1915. Ilustracja z „Illustrierte Geschichte des Weltkrieges 1914–1918” (Stuttgart 1915, t. 3).",
      why: "Druga bitwa o Przasnysz, miasto powiatowe Połoni.",
      note: "To niemiecka ilustracja propagandowa, a nie zdjęcie.",
      author: "Alfred Kühlewindt (1870–1945)", sourceLabel: C, sourceUrl: "https://commons.wikimedia.org/wiki/File:Przasnysz_captured_by_Central_Powers_forces,_30_July_1915.png" }, PD),
    I({ file: "malowidz-sucha-sosna-bartna-2015.jpg", w: 1050, h: 1400, year: "2015", title: "Sucha sosna bartna przy drodze Małowidz–Połoń",
      alt: "Wysoka, uschnięta sosna bez kory przy asfaltowej drodze, na pniu drewniana kapliczka, pod drzewem kwiaty",
      caption: "Sucha sosna bartna koło Małowidza. Fot. Maria Weronika Kmoch, 12.07.2015.",
      why: "Według miejscowej tradycji Rosjanie wieszali na niej powstańców w 1863 r., a później była miejscem egzekucji w 1905 r. i w czasie obu wojen. Feliks miał 23 lata w 1863 r., a w lutym 1864 r. brał ślub.",
      note: "Opis pliku: „sucha sosna z kapliczką koło Małowidza”. To najpewniej ta sosna, ale współrzędnych w pliku brak.",
      author: "Maria Weronika Kmoch", sourceLabel: C, sourceUrl: "https://commons.wikimedia.org/wiki/File:Ma%C5%82owidz_sucha_sosna.jpg",
      people: ["feliks"] }, BYSA4),
    I({ file: "chorzele-kosciol-trojcy-2017.jpg", w: 1600, h: 1166, year: "2017", title: "Kościół parafialny w Chorzelach",
      alt: "Biały, murowany kościół z wysoką wieżą od frontu",
      caption: "Kościół Trójcy Przenajświętszej w Chorzelach. Fot. Chrumps, 29.07.2017.",
      why: "Połoń należała do parafii Chorzele aż do 1994 r. Tu chrzczono, dawano śluby i grzebano przodków. Ale obecny kościół zbudowano w latach 1872–1878 (spłonął w 1930, odnowiony 1933). Śluby Pawła (1750), Kacpra (1786) i Feliksa (1864) odbyły się w starszym kościele, którego dziś nie ma. W tym kościele mógł brać ślub dopiero Franciszek (1892).",
      author: "Chrumps", sourceLabel: C, sourceUrl: "https://commons.wikimedia.org/wiki/File:Ko%C5%9Bci%C3%B3%C5%82_Tr%C3%B3jcy_Przenaj%C5%9Bwi%C4%99tszej_w_Chorzelach.jpg",
      people: ["pawel", "kacper", "feliks", "franciszek"] }, BYSA4),
    I({ file: "polon-drewniany-dom-2020.jpg", w: 1600, h: 900, year: "2020", title: "Stary drewniany dom w Połoni",
      alt: "Parterowy dom z szarych desek z czerwonymi okiennicami i blaszanym dachem, na ścianie numer 41",
      caption: "Drewniany dom w Połoni. Fot. Maria Weronika Kmoch, 18.08.2020.",
      why: "Takie domy stały w Połoni w XX w. Nie wiadomo, czyj to dom — nie przypisujemy go rodzinie.",
      author: "Maria Weronika Kmoch", sourceLabel: C, sourceUrl: "https://commons.wikimedia.org/wiki/File:Po%C5%82o%C5%84_41.jpg" }, BYSA4),
    I({ file: "polon-nepomucen.jpg", w: 1199, h: 1600, year: "", title: "Św. Jan Nepomucen w Połoni",
      alt: "Kamienna figura świętego Jana Nepomucena na postumencie w Połoni",
      caption: "Figura św. Jana Nepomucena w Połoni, typ zachodniokurpiowski.",
      why: "Figura stoi w samej wsi; jej typ łączy Połoń z kulturą Kurpiów Zielonych (więcej: strona Kurpie).",
      author: "Maria Weronika Kmoch", sourceLabel: C, sourceUrl: "https://commons.wikimedia.org/wiki/File:Po%C5%82o%C5%84_Jan_Nepomucen.jpg" }, BYSA4),
  ];

  /* Czego nie ma w galerii (brak skanu albo licencji) — pokazujemy tylko opis i link. */
  window.DRZEWO.imagesMissing = [
    { t: "Plan Połoni z 1801 r. (AGAD, Zbiór Kartograficzny, sygn. 330-21)", why: "brak skanu online; trzeba napisać do AGAD (Oddział Zbiorów Kartograficznych)." },
    { t: "Zdjęcie „Połoń, 1915” z książki „Źródła do dziejów Ziemi Jednorożeckiej”, t. 1 (2013)", why: "książka chroniona prawem autorskim, zdjęcia nie ma w wolnym dostępie." },
    { t: "Zdjęcie domu nr 10 w Połoni (1982, NID, sygn. N_14_FI.415481)", why: "licencja nieznana; można zapytać NID.", url: "https://zbiory.nid.pl/" },
    { t: "Jednorożec w 1915 r.", why: "na Commons są tylko współczesne zdjęcia cmentarza wojennego z I wojny.", url: "https://commons.wikimedia.org/wiki/File:Jednoro%C5%BCec_cmentarz_I_wojna_%C5%9Bwiatowa.jpg" },
    { t: "Stary kościół w Chorzelach (sprzed 1872 r.)", why: "brak wizerunku na wolnej licencji." },
    { t: "Więcej zdjęć Połoni M. W. Kmoch (domy, kapliczki, kościół)", why: "na Commons, CC BY-SA 4.0.", url: "https://commons.wikimedia.org/w/index.php?search=Po%C5%82o%C5%84&title=Special:MediaSearch&type=image" },
  ];
})();
