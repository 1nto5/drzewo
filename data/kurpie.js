/* KURPIE — treść strony kurpie.html (źródło: Genealogia/assets/tresci/tresci-kurpie.md, stan 1.11.2026).
   DRZEWO.kurpie.sections = [{ id, title, paragraphs, images, sources, hyp }]
     id          kotwica (#id) i wpis w spisie treści
     title       tytuł sekcji
     paragraphs  lista bloków. Blok to:
                   "tekst"                          zwykły akapit
                   { t, tag, c }                    akapit z oznaczeniem: tag "rodzina" | "region" | "hipoteza";
                                                    c = pewność ("ok" | "prawd" | "hyp"), gdy inna niż domyślna
                   { h }                            śródtytuł
                   { list: ["…"], tag }             lista punktów
                   { table: { head: [], rows: [[]] }, tag, caption }   tabela
                 Znaczniki w tekście: **pogrubienie**, *kursywa*, [tekst](url),
                 {{id}} lub {{id|tekst}} = link do osoby + jej relacja do Adriana (APP.rel).
     images      [{ file, w, h, alt, caption, author, license, licenseUrl, sourceUrl }] — pliki w img/
     sources     [{ label, url, note }] — źródła sekcji (url opcjonalny)
     hyp         ["…"] — hipotezy i rzeczy „do sprawdzenia”, pokazywane z oznaczeniem hipotezy
   Pieśni: tylko tytuły (incypity), najwyżej 1 wers. Bez nazwisk osób, które mogą żyć. */
window.DRZEWO = window.DRZEWO || {};
(function () {
  const BYSA4 = ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/deed.pl"];
  const BY4 = ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/deed.pl"];
  const BY3 = ["CC BY 3.0", "https://creativecommons.org/licenses/by/3.0/deed.pl"];
  const PD = ["domena publiczna", ""];
  const img = (file, w, h, alt, caption, author, lic, sourceUrl) => ({ file, w, h, alt, caption, author, license: lic[0], licenseUrl: lic[1], sourceUrl });
  const W = t => "https://pl.wikipedia.org/wiki/" + t;

  window.DRZEWO.kurpie = {
    lead: "Połoń leżała na skraju Puszczy Zielonej. Kurpie z głębi puszczy przezywali jej mieszkańców „Godami”. Tu jest świat, w którym żyli Antosiakowie: gwara, strój, wesela, pogrzeby, barcie i pieśni.",
    sections: [
      {
        id: "godowie", title: "„Godowie”, czyli jak Kurpie przezywali Połoń",
        paragraphs: [
          { tag: "region", t: "Połoń i Jednorożec leżą na prawym brzegu rzeki Orzyc. „Kalendarz Płocki” na 1891 r. nazywa te wsie „czysto kurpiowskimi”. Zaznacza też, że ich mieszkańcy odrabiali pańszczyznę na rzecz ekonomii Przasnysz. Według kalendarza „właściwi” Kurpie z głębi puszczy nazywali ich „z pogardą Godami”." },
          "Uwaga: to coś innego niż „Gocie”. Tą nazwą w XIX w. błędnie nazywano Kurpiów z Puszczy Białej.",
        ],
        images: [],
        sources: [
          { label: "„Kalendarz Płocki na rok 1891”, odczyt skanu w Genealogy Indexer (obraz 90), 1.11.2026", url: "https://genealogyindexer.org/" },
          { label: "Rocznik Płocki 1891 w Polonie, egz. 1", url: "https://polona.pl/preview/1c79c297-42a9-498c-bb18-8f4b65b17305" },
          { label: "egz. 2", url: "https://polona.pl/preview/8336464b-a680-4371-94e2-505ed3ad1f54" },
          { label: "Wikipedia: Kurpie Zielone", url: W("Kurpie_Zielone") },
        ],
        hyp: [
          "Skąd ta pogarda? Źródło tego nie tłumaczy. Nasz domysł: puszczanie żyli z lasu, barci i polowania i mieli lżejszą pańszczyznę. Ludzie z wsi królewskich na skraju puszczy chodzili do roboty we dworze, więc uchodzili za „gorszych”. Co znaczy samo słowo „Godowie”, nie wiemy.",
          "Do sprawdzenia: „Kalendarz Płocki” to prawdopodobnie ten sam druk co „Rocznik Płocki i Kalendarz dla Płocka i Okolicy na rok 1891” w Polonie. Trzeba potwierdzić tytuł i numer strony z „Godami”.",
        ],
      },
      {
        id: "pogranicze", title: "Puszczanie i pogranicze: czym się różnili",
        paragraphs: [
          { tag: "region", table: { head: ["", "Kurpie z głębi Puszczy Zielonej", "Połoń, Małowidz (pogranicze)"], rows: [
            ["Kim byli", "potomkowie osadników, zbiegłych chłopów i banitów, osiadłych w puszczy od XV–XVII w.", "wieś królewska nad Orzycem, od 1633 r. w dzierżawie Krasińskich"],
            ["Praca", "barcie, polowanie, smolarstwo, bursztyn, spław drewna", "rola na piaskach i pańszczyzna (w 1789 r. m.in. 55 dni orki)"],
            ["Pańszczyzna", "mit „wolnych Kurpiów”; w Puszczy Zielonej była, ale lżejsza", "pełna, do folwarków starostwa"],
            ["Jak się nazywali", "w 1914 r. mówili o sobie „Puszczanie”; „Kurp” był przezwiskiem", "dla puszczan byli „Godami”"],
            ["Kultura", "pełny strój, wycinanki, palmy, bursztyn", "„z czasem przyjęli tradycje regionu”: strój i wesele"],
          ] } },
          { tag: "region", t: "Na mapie z początku XVII w. Orzyc jest naturalną granicą Kurpiowszczyzny. Z tej linii „wyłamują się tylko: Połoń i Małowidz jako wsie królewskie”. Badaczka M. W. Kmoch pisze, że dawne królewszczyzny Małowidz, Połoń i Stegna badacze dziś uznają za kurpiowskie. Przyjęły bowiem tradycje regionu." },
          { tag: "region", t: "Wikipedia tak samo opisuje Połoń: to pogranicze Kurpiów Zielonych, które „częściowo przyjęło” stroje i tradycje weselne Kurpiów." },
        ],
        images: [
          img("polon-nepomucen.jpg", 1199, 1600, "Kamienna figura świętego Jana Nepomucena na postumencie w Połoni", "Figura św. Jana Nepomucena w Połoni, typ zachodniokurpiowski.", "Maria Weronika Kmoch", BYSA4, "https://commons.wikimedia.org/wiki/File:Po%C5%82o%C5%84_Jan_Nepomucen.jpg"),
        ],
        sources: [
          { label: "M. W. Kmoch, „Zachodnie pogranicze Kurpi Zielonych” (2019)", url: "http://www.kurpiankawwielkimswiecie.pl/2019/06/maa-ojczyzna-zachodnie-pogranicze-kurpi.html", note: "za S. Chełchowskim („Wisła” 1893) i A. Chętnikiem (1913)" },
          { label: "Wikipedia: Połoń", url: W("Po%C5%82o%C5%84") },
          { label: "Wikipedia: Kurpie", url: W("Kurpie"), note: "mit braku pańszczyzny" },
          { label: "Wikipedia: Kurpie Zielone", url: W("Kurpie_Zielone") },
          { label: "A. Maciesza, „Puszczanie przasnyscy” (1923), KPBC", url: "https://kpbc.umk.pl/dlibra/publication/153171/edition/165267/content" },
        ],
        hyp: [],
      },
      {
        id: "gwara", title: "Gwara: jak mówiono w Połoni",
        paragraphs: [
          { tag: "region", t: "Po kurpiowsku Połoń to **„Połóń”**, a sąsiedni Małowidz to „Małoźïdz”." },
          { h: "Najważniejsze cechy gwary" },
          { table: { head: ["Cecha", "Jak to działa", "Przykład"], rows: [
            ["mazurzenie", "sz, ż, cz → s, z, c", "*kasa* = kasza; „dziewcyno” w pieśniach z Połoni"],
            ["zmiękczenie", "czasem s → ś", "*śkoła* = szkoła; „Warsiawo” w pieśni prababci"],
            ["ja → je", "na początku słowa", "*jegoda* = jagoda"],
            ["ł przed samogłoską", "dodane „ł”", "*łón* = on, *łalbo* = albo"],
            ["kt → cht", "", "*chto* = kto"],
          ] } },
          { h: "Kilka słów" },
          { table: { head: ["Gwara", "Znaczy"], rows: [
            ["dziwcak", "dziewczyna"],
            ["kurpsie", "łapcie z łyka lipowego (stąd może nazwa „Kurpie”)"],
            ["chojka", "sosna"],
            ["migi", "komary"],
            ["skowroda", "patelnia"],
            ["rejbaki", "kluski z tartych ziemniaków"],
            ["walnie", "wiele"],
            ["łoniej", "w zeszłym roku"],
            ["matyjaśnie", "smutno"],
          ] } },
        ],
        images: [],
        sources: [
          { label: "Wikipedia: Gwara kurpiowska", url: W("Gwara_kurpiowska"), note: "wszystkie słowa z tabeli" },
          { label: "Wikipedia: Połoń", url: W("Po%C5%82o%C5%84") },
          { label: "Wikipedia: Małowidz", url: W("Ma%C5%82owidz") },
          { label: "Etnofon IS PAN", url: "https://etnofon.ispan.pl/raport/show?raport=sounds", note: "incypity pieśni z Połoni, 1963" },
          { label: "IJP PAN: Felczak", url: "https://nazwiska.ijppan.pl/haslo/print/name/FELCZAK" },
        ],
        hyp: [
          "Gwara może wyjaśnić przydomek gałęzi „Felcaki”: to „Felczaki”, czyli „ci od Feliksa”, wymówione z mazurzeniem cz → c.",
        ],
      },
      {
        id: "stroj", title: "Strój: czółko, koruny i gorset z Połoni",
        paragraphs: [
          "Strój odświętny Kurpianki z Puszczy Zielonej:",
          { tag: "region", list: [
            "lniana koszula z haftem, spódnica (*kitel*) w pionowe pasy, fartuch;",
            "*wystki*, czyli gorset obszyty czerwoną lamówką;",
            "na głowie panny **czółko**: czarna, sztywna opaska ze wstążkami, koralikami i kwiatami;",
            "**w parafiach Jednorożec i Baranowo panny nosiły zamiast tego „koruny”**, czyli piętrowe wianki ze wstążkami. To najbliższa nam odmiana stroju;",
            "mężatki nosiły białe, krochmalone chusty;",
            "na szyi kilka sznurów bursztynów. Im więcej sznurów, tym bogatszy dom.",
          ] },
          { tag: "region", t: "Mężczyźni nosili lnianą koszulę z czerwoną lub niebieską wstążką, granatowe portki, czerwony *lejbik* (kamizelkę), brązową sukmanę i czapkę-rogatywkę." },
          { tag: "rodzina", t: "W zbiorach IS PAN jest rysunek gorsetu **Marianny Antosiak (ur. 1917) z Połoni**. Uszyła go jej siostra w 1935 r., a narysowała M. Czarnecka w 1970 r. Stopień pokrewieństwa z naszą linią: nieustalony." },
        ],
        images: [
          img("kurpie-stroj-puszcza-zielona.jpg", 1226, 1600, "Kurpiowskie stroje odświętne z Puszczy Zielonej na manekinach w muzeum", "Stroje Puszczy Zielonej, Muzeum Kultury Kurpiowskiej w Ostrołęce.", "Maria Weronika Kmoch", BYSA4, "https://commons.wikimedia.org/wiki/File:Str%C3%B3j_kurpiowski_Puszcza_Zielona_Puszcza_Kurpiowska.jpg"),
          img("kurpie-gorset.jpg", 1199, 1600, "Kurpiowski gorset obszyty czerwoną lamówką", "Gorset (wystki) z Puszczy Zielonej.", "Aleksandra Domurad", BY4, "https://commons.wikimedia.org/wiki/File:Gorset_kurpiowski.jpg"),
          img("kurpie-korale-bursztynowe.jpg", 1280, 853, "Kilka sznurów korali z bursztynu", "Korale bursztynowe.", "roborobx", PD, "https://commons.wikimedia.org/wiki/File:Bursztynowe-korale-kurpiowskie.JPG"),
        ],
        sources: [
          { label: "Wikipedia: Strój kurpiowski Puszczy Zielonej", url: W("Str%C3%B3j_kurpiowski_Puszczy_Zielonej") },
          { label: "gorset Marianny: post FB „Połoń – Matecznik rodziny Antosiak”, 24.04.2026", note: "za zbiorami IS PAN i MEK; bezpośredniego linku do karty w MEK jeszcze nie mamy" },
        ],
        hyp: [
          "Do sprawdzenia: karta rysunku gorsetu Marianny Antosiak (1935) w MEK / IS PAN, żeby podać link.",
        ],
      },
      {
        id: "wesele", title: "Wesele i zapusty",
        paragraphs: [
          { h: "Ślub przed Popielcem" },
          { tag: "rodzina", t: "Dwa śluby w naszym rodzie odbyły się w ostatnią niedzielę karnawału (zapustów), 3 dni przed Popielcem:" },
          { list: [
            "{{pawel|Paweł}} i {{jadwiga|Jadwiga}}: niedziela 8.02.1750;",
            "{{feliks|Feliks}} i {{rozalia-s|Rozalia}}: niedziela 7.02.1864 (akt nr 28).",
          ] },
          "W Wielkim Poście nie urządzano wesel, więc karnawał był szczytem ślubów.",
          { h: "Wesele kurpiowskie na scenie" },
          { tag: "region", t: "W 1928 r. ks. Władysław Skierkowski (muzyka) i Adam Chętnik (tekst) wystawili w Płocku widowisko „Wesele na Kurpiach”. Grano je w Warszawie, w radiu, a w 1935 r. także w Brukseli. Akty nosiły tytuły kolejnych obrzędów: „Wypyty – Rajby – Rozpleciny – Oczepiny”. Boy-Żeleński pisał po premierze, że zna mało rzeczy „równie patetycznych jak ten moment oczepin na scenie”." },
          { h: "W remizie" },
          { tag: "region", t: "Czasy pradziadków. Po 1949 r. OSP Połoń zarabiała m.in. na biletach na przedstawienie „wesela kurpiowskiego”. Grano je w Połoni i w innych wsiach. W remizie odbywały się też prawdziwe wesela. W sąsiednim Małowidzu w remizie urządzano „wesela, zabawy wiejskie, zapusty”." },
        ],
        images: [],
        sources: [
          { label: "akt 28/1864, AP Pułtusk, sygn. 39", url: "https://www.szukajwarchiwach.gov.pl/jednostka/-/jednostka/14110494" },
          { label: "akt z 1750 r., FamilySearch, obraz 601", url: "https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSXV-D3L7-2?cat=317312&view=explore&lang=en&groupId=M999-NYD" },
          { label: "Wikipedia: Środa Popielcowa", url: W("%C5%9Aroda_Popielcowa") },
          { label: "Wikipedia: Władysław Skierkowski", url: W("W%C5%82adys%C5%82aw_Skierkowski") },
          { label: "Książnica Śląska, artykuł z cytatem Boya-Żeleńskiego (PDF)", url: "https://ksiaznicaslaska.bs.katowice.pl/pl/issue/download/27/15" },
          { label: "Wikipedia: Połoń", url: W("Po%C5%82o%C5%84") },
          { label: "Wikipedia: Małowidz", url: W("Ma%C5%82owidz") },
        ],
        hyp: [],
      },
      {
        id: "pogrzeb", title: "Pogrzeb: śpiew do rana, otwarte drzwi",
        paragraphs: [
          { tag: "region", t: "Do niedawna zmarły leżał w domu 2–3 dni. Na Kurpiach i w całym Mazowszu sąsiedzi i rodzina czuwali przy nim co wieczór, od ok. 19–20 często aż do świtu. Śpiewali długie pieśni żałobne, modlili się i odmawiali różaniec. Takie czuwania nazywano „różańcem”, a pieśni „pustonocnymi”." },
          "Zwyczaje zapamiętane przez Kurpiów:",
          { tag: "region", list: [
            "zaraz po śmierci zasłaniano lustro i zatrzymywano zegar na godzinie zgonu;",
            "drzwi do izby ze zmarłym zostawały otwarte, bo „umarły słyszy”;",
            "śpiewak, który często śpiewał przy zmarłych, dostawał do trumny swój śpiewnik.",
          ] },
        ],
        images: [],
        sources: [
          { label: "M. Jackowska, „Inkulturacja wiary… pieśni śpiewanych przy zmarłym na Kurpiach”, Studia Theologica Varsaviensia 1/2024", url: "https://czasopisma.uksw.edu.pl/index.php/stv/article/download/14881/13134/31844", note: "opiera się m.in. na badaniach Jacka Jackowskiego z IS PAN („Tradycje pogrzebowe na Kurpiach”, 2021) — tej samej instytucji, która przechowuje nagranie prababci" },
        ],
        hyp: [],
      },
      {
        id: "palmy", title: "Palmy i wycinanki",
        paragraphs: [
          { h: "Palmy" },
          { tag: "region", t: "Kurpiowska palma to ścięte, cienkie drzewko, jodła lub świerk. Pień oplatano widłakiem, wrzosem i borówką, a zdobiono kwiatami z bibuły i wstążkami. Czubek zostawał zielony. W Łysych od 1969 r. (z inicjatywy Adama Chętnika) w Niedzielę Palmową odbywa się konkurs palm. Tradycja jest na krajowej liście niematerialnego dziedzictwa." },
          { h: "Wycinanki" },
          { tag: "region", t: "Kurpianki wycinały je **nożycami do strzyżenia owiec**. Przed Bożym Narodzeniem i Wielkanocą zdobiły okna firankami z białej bibuły. Ściany oklejały kolorowymi wycinankami. Najstarszy wzór to **leluja** (drzewko życia) w wazonie. Pierwsze opisy pochodzą z lat 80. XIX w. W latach 20. XX w. zwyczaj zaczął zanikać. Od 2020 r. wycinanka z Puszczy Zielonej jest na Krajowej Liście Niematerialnego Dziedzictwa Kulturowego." },
        ],
        images: [
          img("kurpie-palmy-lyse-2022.jpg", 1280, 720, "Wysokie, kolorowe palmy kurpiowskie w Niedzielę Palmową w Łysych", "Palmy kurpiowskie, Łyse 2022.", "Maria Weronika Kmoch", BYSA4, "https://commons.wikimedia.org/wiki/File:Niedziela_Palmowa_%C5%81yse_2022_Palma_kurpiowska_(12).jpg"),
          img("kurpie-wycinanka-leluja.jpg", 934, 1600, "Kolorowa wycinanka kurpiowska z motywem leluji, drzewka życia", "Wycinanka: leluja.", "robrobx", PD, "https://commons.wikimedia.org/wiki/File:Wycinanka-kurpiowska-leluja.JPG"),
        ],
        sources: [
          { label: "Wikipedia: Palma wielkanocna", url: W("Palma_wielkanocna") },
          { label: "Wikipedia: Kultura kurpiowska", url: W("Kultura_kurpiowska") },
          { label: "Muzeum Kultury Kurpiowskiej w Ostrołęce, katalog „Wycinanka kurpiowska z Puszczy Zielonej” (2020, PDF)", url: "https://muzeum.ostroleka.pl/wp-content/uploads/2020/11/Wycinanka_kurpiowska_z_Puszczy_Zielonej.pdf" },
        ],
        hyp: [],
      },
      {
        id: "barcie", title: "Bartnictwo i bursztyn: puszcza tuż za płotem",
        paragraphs: [
          { h: "Barcie" },
          { tag: "region", t: "Bartnik wydrążał w żywej sośnie dziuplę na ul, czyli barć. Wspinał się do niej na linie (*leziwie*) i podkurzał pszczoły dymem. Kurpie mieli królewskie prawo bartne aż do 1801 r." },
          { tag: "region", t: "Przy naszej wsi. Przy drodze Jednorożec–Chorzele, między Małowidzem a Połonią, do dziś stoi sucha **sosna bartna**, prawdopodobnie z XVIII w. Według miejscowej tradycji Rosjanie wieszali na niej powstańców z 1863 r. Potem karano na niej ludzi w 1905 r. i podczas obu wojen. {{feliks}} brał ślub w lutym 1864 r., w czasie powstania." },
          { h: "Bursztyn" },
          { tag: "region", t: "W XIX w. bursztyn był na Kurpiach ważnym dodatkiem do zarobku z roli. Najwięcej kopalń było koło Dylewa, Kadzidła i Myszyńca. Kopały go spółki zwane *osmanami*, liczące 10–50 osób." },
          { tag: "region", t: "Nasza wieś. **W 1816 r. kopalnię bursztynu otwarto także koło Połoni** (i koło Małowidza). Żył wtedy {{kacper}}." },
        ],
        images: [
          img("kurpie-sosna-bartna.jpg", 1199, 1600, "Uschnięta sosna bez kory z drewnianą kapliczką na pniu, przy drodze", "Sucha sosna bartna z kapliczką, Małowidz (koło Połoni), 2009.", "Antoikar G (Panoramio)", BY3, "https://commons.wikimedia.org/wiki/File:Uschni%C4%99ta_sosna_bartna_-_panoramio.jpg"),
          img("kurpie-barc-czarnia.jpg", 1280, 720, "Pień starej sosny z wyciętym otworem barci", "Sucha barć, rezerwat Czarnia.", "Maria Weronika Kmoch", BYSA4, "https://commons.wikimedia.org/wiki/File:Rezerwat_Czarnia_sucha_bar%C4%871.jpg"),
        ],
        sources: [
          { label: "Wikipedia: Bartnictwo", url: W("Bartnictwo") },
          { label: "Wikipedia: Kurpie Zielone", url: W("Kurpie_Zielone") },
          { label: "Wikipedia: Połoń", url: W("Po%C5%82o%C5%84") },
          { label: "Gminny program opieki nad zabytkami Jednorożca 2022–2025 (PDF)", url: "https://edziennik.mazowieckie.pl/WDU_W/2022/3080/akt.pdf" },
          { label: "Wikipedia: Bursztyniarstwo", url: W("Bursztyniarstwo") },
          { label: "Wikipedia: Małowidz", url: W("Ma%C5%82owidz") },
        ],
        hyp: [],
      },
      {
        id: "piesni", title: "Pieśni prababci Leonory",
        paragraphs: [
          { tag: "rodzina", c: "prawd", t: "11.07.1963 r. studenci muzykologii z obozu w Przasnyszu, pod kierunkiem doc. Mariana Sobieskiego, nagrali w Połoni śpiew „Leonory Antosiak, ur. 1903”. Najpewniej to {{eleonora|Eleonora z Dębków}}, żona {{wincenty|Wincentego}}. Taśma T2667 jest w archiwum Instytutu Sztuki PAN." },
          { caption: "Pieśni z taśmy T2667. Tytuł to początek pieśni (incypit); tekstów nie przytaczamy.", table: { head: ["Nr", "Pieśń (początek)", "Co to za pieśń", "Warianty w zbiorach"], rows: [
            ["T2667.01", "„Na podolu biały kamień”", "Stara ballada „Podolanka”. Dziewczyna na kamieniu plecie wianki. Zalotnik namawia ją, by otruła brata. Brat umiera, a ona zostaje sama.", "Bardzo znana: w katalogu IS PAN 314 nagrań z takim początkiem. U Kolberga warianty m.in. z Mazowsza: DWOK t. 25 nr 245, t. 27 nr 348 i 349, t. 28 nr 320. Znana też w innych krajach słowiańskich i na Litwie."],
            ["T2667.02", "„Tam za Warsiawo siedem mil”", "Typ pieśni nieustalony. „Warsiawo” to gwarowa wymowa „Warszawą”.", "W IS PAN 13 nagrań z różnych miejsc, w tym **z Jednorożca, 3.11.1953** (taśma T1349). W Skierkowskim jeszcze nie sprawdzona."],
            ["T2667.03", "„O wy moje chłopaki, jak mi doradzicie”", "Dziewczyna prosi chłopców o radę (z incypitu). Typ pieśni nieustalony.", "Nie znaleźliśmy jeszcze wariantów."],
            ["T2667.17", "„La la gąski, nie bende was miała”", "Pieśń pasterska, przywoływanie gęsi.", "Typ znany („La la gąski na gałązki”, T2684.12, T4550.04). **Wersja prababci jest jedyna taka w całym katalogu IS PAN.**"],
          ] } },
          { tag: "region", t: "Dzień wcześniej, 10.07.1963, w Połoni nagrano pieśni weselne innej śpiewaczki, m.in. o „Połonionce chimeryckiej”, czyli kapryśnej dziewczynie z Połoni. 11.07 inna śpiewaczka z rodu Antosiaków (pokrewieństwo nieustalone) zaśpiewała lokalną wersję znanej pieśni „W Połoni zegary smutnie biją”." },
          { h: "Dwa wielkie zbiory, gdzie warto szukać dalej" },
          { list: [
            "**Oskar Kolberg, „Mazowsze”** (Dzieła Wszystkie t. 24–28). Tom 27 obejmuje „Mazowsze Stare. Mazury. Kurpie”.",
            "**Ks. Władysław Skierkowski, „Puszcza Kurpiowska w pieśni”** (Płock 1928–1934, 4 zeszyty, 790 pieśni z 2178 zebranych). Z tego zbioru korzystali Szymanowski i Lutosławski. Skany są w Polonie jako domena publiczna, ale nie przeszukaliśmy ich jeszcze pod kątem Połoni.",
          ] },
        ],
        images: [
          img("kurpie-skierkowski-okladka.jpg", 420, 587, "Okładka zbioru pieśni „Puszcza Kurpiowska w pieśni” ks. Władysława Skierkowskiego", "Okładka „Puszcza Kurpiowska w pieśni”.", "nieznany", PD, "https://commons.wikimedia.org/wiki/File:Puszcza_Kurpiowska_w_pie%C5%9Bni.JPG"),
        ],
        sources: [
          { label: "Etnofon IS PAN, raport „Utwory”", url: "https://etnofon.ispan.pl/raport/show?raport=sounds", note: "filtr: miejscowość Połoń; sygn. T2666, T2667, T1349" },
          { label: "Marian Sobieski, POLMIC", url: "https://polmic.pl/en/encyclopedia/subject-entries/s/sobieski-marian-en" },
          { label: "Wikibooks: Śpiewnik/Podolanka", url: "https://pl.wikibooks.org/wiki/%C5%9Apiewnik/Podolanka", note: "fabuła, numery DWOK" },
          { label: "Cyfrowa Biblioteka Polskiej Piosenki: Podolanka", url: "https://www.bibliotekapiosenki.pl/utwory/Podolanka_(Na_Podolu_modry_kamien)" },
          { label: "Wikipedia: Władysław Skierkowski", url: W("W%C5%82adys%C5%82aw_Skierkowski") },
          { label: "Skierkowski w Polonie: T.1", url: "https://polona.pl/preview/b410953d-5166-4804-bf27-0e23b31b7b0a" },
          { label: "T.2", url: "https://polona.pl/preview/176f9614-7617-4647-843d-b7c0cce8731a" },
          { label: "T.3", url: "https://polona.pl/preview/dd9f47eb-1c27-4c34-9413-bd97542748ff" },
          { label: "cz. 2 z. 3 (1934)", url: "https://polona.pl/preview/4ba3b33f-076c-423f-a693-88779a9eae9a" },
          { label: "Kmoch 2019, przypis 12 (Kolberg t. 27)", url: "http://www.kurpiankawwielkimswiecie.pl/2019/06/maa-ojczyzna-zachodnie-pogranicze-kurpi.html" },
        ],
        hyp: [
          "Do sprawdzenia: skąd dokładnie pochodzą mazowieckie warianty „Podolanki” u Kolberga (DWOK t. 27, nr 348–349).",
        ],
      },
      {
        id: "tropy", title: "Do sprawdzenia (tropy)",
        paragraphs: [
          "Otwarte pytania. Dopóki ich nie sprawdzimy, to, co od nich zależy, traktujemy jako hipotezę.",
        ],
        images: [],
        sources: [
          { label: "Polona", url: "https://polona.pl/" },
          { label: "Etnofon IS PAN", url: "https://etnofon.ispan.pl/raport/show?raport=sounds" },
        ],
        hyp: [
          "Polona: znaleźć stronę z „Godami” w Roczniku Płockim 1891 i podać numer strony.",
          "Skierkowski (Polona, warstwa tekstowa T.1–3): szukać „siedem mil”, „gąski”, „chłopaki”, „Połoń”, „Jednorożec”.",
          "Kolberg DWOK t. 27, nr 348–349: sprawdzić, skąd pochodzą te warianty „Podolanki”.",
          "IS PAN (mail z 1.11.2026 czeka na odpowiedź): audio T2667 i „Zapowiedź” przed pieśnią 01 i 17 (imię i wiek śpiewaczki) — to potwierdzi, czy śpiewała prababcia.",
          "MEK / IS PAN: karta rysunku gorsetu Marianny Antosiak (1935), żeby podać link.",
        ],
      },
    ],
  };
})();
