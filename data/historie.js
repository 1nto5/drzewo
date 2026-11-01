/* HISTORIE: krótkie opowieści o parach linii prostej (historie.html) i przydomki gałęzi.
   Każde zdanie musi wynikać z danych w data/*.js. Hipotezy i rzeczy „prawdopodobne” oznaczamy wprost.

   DRZEWO.stories = [{ … }] — kolejność = kolejność na stronie (od najstarszej pary). Pola:
     id         kotwica (historie.html#id), ASCII
     title      tytuł historii
     people     [id z DRZEWO.people] — para: najpierw mężczyzna, potem kobieta
     side       opcjonalnie "babcia" — strona babci Henryki (osobna grupa w spisie treści)
     paragraphs [tekst] — zwykły tekst; znaczniki zamieniane w renderze:
                  [[id|tekst]]      link do osoba.html?id=id   ([[#kotwica|tekst]] = link na tej stronie,
                                    [[strona.html|tekst]] = link do innej podstrony)
                  ((idAktu|tekst))  link do akty.html#idAktu
                  {{prawd}} {{hyp}} etykieta pewności (prawdopodobne / hipoteza) przed zdaniem, którego dotyczy
     quotes     [{ act, text, at, tr }] cytat z aktu: text = fragment pola q aktu (pisownia oryginalna),
                at = numer akapitu (od 0), po którym stoi cytat; tr = krótko po polsku (gdy cytat po łacinie/rosyjsku)
     acts       [id z DRZEWO.acts] — użyte akty (lista na końcu historii)
     sources    [id z DRZEWO.sources] — użyte źródła

   DRZEWO.nicknames = { intro: [tekst], tree: [węzeł], branches: [{ … }], single: [{ … }], notes: [tekst] }
     węzeł      { t: tekst ze znacznikami, nick: "PRZYDOMEK", me: true (linia Adriana), kids: [węzeł] }
     branches   { name, c, from: tekst, members: tekst, note: tekst (opcjonalnie), refs: [{ label, url }], sources: [id] }
     single     { name, c, text, sources: [id] }
   Wszystkie przydomki znamy tylko ze strony FB I. Antosiaka (źródło wtórne) — dlatego najwyżej "prawd". */
window.DRZEWO = window.DRZEWO || {};

DRZEWO.stories = [
  { id: "jakub-marianna", title: "Jakub i Marianna — imiona z jednego aktu", people: ["jakub-j", "marianna-j"],
    paragraphs: [
      "Jakub i Marianna to najstarsi przodkowie, których znamy z imienia. Znamy ich z chrztów trzech synów — Pawła (1720), Wojciecha (1724) i Antoniego (1728). Pierwszy z nich: 25 stycznia 1720 r. ksiądz ochrzcił w Połoni ich syna [[pawel|Pawła]] i zapisał go jako dziecko „uczciwych Jakuba Jentosiaka i Marianny, prawowitych małżonków”.",
      "Chrzestnymi byli „szlachetny” Jan Czaplicki (nazwisko odczytane niepewnie) i Urszula. Skorowidz urodzeń zapisał chłopca jako „Paweł Jutosiak” — to najstarszy zapis nazwiska naszej linii. W XVIII w. ksiądz pisał nazwisko tak, jak je usłyszał: Jutosiak, Jentosiak, Jętosiak, Antosiak. Samo nazwisko znaczy „syn Antosia”, czyli pochodzi od imienia Antoni.",
      "Znamy trzech ich synów: Pawła (1720), [[wojciech-j|Wojciecha]] (1724) i [[antoni-j|Antoniego]] (1728). W skorowidzu chrztów z lat 1694–1718 Jentosiaków nie ma, więc Paweł to najwcześniejsze znane dziecko. Rok urodzenia Jakuba, ok. 1690, to tylko szacunek z wieku dzieci. Nazwiska rodowego Marianny nie znamy.",
      "{{prawd}} To, że ochrzczony w 1720 r. Paweł jest tym samym Pawłem, który w 1750 r. ożenił się z Jadwigą, jest bardzo prawdopodobne, ale nie stoi czarno na białym w jednym akcie. {{hyp}} W 1728 r. chrzestną w Połoni była „Marianna Jentosiakowa” — może to właśnie ona. {{hyp}} Autor strony FB I. Antosiaka przypuszcza, że Stanisław Jentosiak, który w 1722 r. brał ślub w Jednorożcu, był bratem Jakuba. {{hyp}} Ród mógł żyć w parafii już ok. 1700 r.: wtedy w Chorzelach ślub wzięła Agnieszka „Antosiówna/Jentosiówna” — najstarsza znana wzmianka nazwiska.",
      "Połoń była wtedy wsią królewską. Już w 1565 r. mieszkało tu 30 kmieci, a od 1633 r. wieś trzymali w dzierżawie Krasińscy, w starostwie przasnyskim. Wszystkie akty rodziny są w księgach parafii Chorzele, bo do niej Połoń należała aż do 1994 r.",
    ],
    quotes: [{ act: "u1720-4", at: 0, text: "baptizavi filium N[omi]ne Paulum honestorum Jacobi Jentosiak et Mariannae legitimorum Conjugum", tr: "ochrzciłem syna imieniem Paweł, uczciwych Jakuba Jentosiaka i Marianny, prawowitych małżonków" }],
    acts: ["u1720-4"],
    sources: ["fs-chorzele", "fb-matecznik", "ijp-antosiak", "sgkp", "wiki-polon"] },

  { id: "pawel-jadwiga", title: "Paweł i Jadwiga — najstarsza potwierdzona para", people: ["pawel", "jadwiga"],
    paragraphs: [
      "Paweł to najstarszy przodek, którego życie da się opowiedzieć od chrztu do pogrzebu. Ochrzczony w 1720 r. w Połoni, 8 lutego 1750 r. ożenił się w Chorzelach z Jadwigą. Ksiądz zapisał po łacinie, że pobłogosławił małżeństwo „uczciwych Pawła Jentosiaka ze wsi Połoń i Jadwigi, panny”.",
      "Ślub wypadł w niedzielę, trzy dni przed Popielcem. To był ostatni moment na wesele przed Wielkim Postem, kiedy uroczystych wesel nie urządzano. Świadkiem był Paweł Chudzik. {{hyp}} Czy był dziadkiem Marianny Chudzikówny, która w 1822 r. wyszła za wnuka Pawła, Walentego — nie wiemy.",
      "Jadwiga w akcie nie ma nazwiska — jest tylko „Jadwiga, panna”. Wpis stoi pod nagłówkiem wsi Olszewka, więc może stamtąd pochodziła. {{hyp}} Według strony FB I. Antosiaka była to Jadwiga Sędrowska (Senroska) z Olszewki.",
      "Znamy ich dzieci: [[adam-p|Adama]] (1754), [[wojciech-p|Wojciecha]] (1756), bliźnięta [[kacper|Kacpra]] i [[agnieszka-p|Agnieszkę]] (1759) i {{prawd}} prawdopodobnie [[barbara-p|Barbarę]], która w 1783 r. wyszła za Mateusza Kutę. Kilkadziesiąt lat później akty zgonu Wojciecha i Adama wciąż przypominały: „syn niegdy Pawła i Jadwigi” — „niegdy” znaczy „zmarłego”. {{prawd}} Według strony FB od Adama i Wojciecha idą inne gałęzie Antosiaków z Połoni ([[#przydomki|Orłowscy i Teofile]]), a od Kacpra — nasza.",
      "Paweł był gospodarzem we wsi królewskiej. W 1781 r. Połoń miała 21 domów. Lustracja z 1789 r. policzyła 23 gospodarzy, którzy odrabiali pańszczyznę w folwarkach starostwa przasnyskiego — m.in. 62 dni żniw i 55 dni orki rocznie — i do tego płacili czynsz.",
      "Paweł zmarł 5 stycznia 1795 r. Ksiądz wpisał „lat 70”, choć naprawdę miał 74–75 lat; pochowano go w kościele. W tym samym roku, po III rozbiorze, Połoń znalazła się w Prusach. {{prawd}} 19 marca 1797 r. zmarła w Połoni „uczciwa wdowa Jętosiakowa, lat 70” — najpewniej Jadwiga, choć akt nie podaje imienia.",
    ],
    quotes: [
      { act: "s1750", at: 0, text: "inter honestos Paulum Jentosiak de Villa Połonie et Hedvigim Virginem", tr: "między uczciwymi Pawłem Jentosiakiem ze wsi Połoń a Jadwigą, panną" },
      { act: "z1827-28", at: 3, text: "Wojciech Antosiak włościanin rolny w Wsi Poloni, lat 70, syn niegdy Pawła i Jadwigi" },
    ],
    acts: ["u1720-4", "s1750", "u1759-sk", "z1795-pawel", "z1827-28", "z1832-159"],
    sources: ["fs-chorzele", "fs1750", "wiki-popielec", "wiki-polon", "wiki-pn", "fb-matecznik"] },

  { id: "kacper-helena", title: "Kacper i Helena — bliźniak i wdowa wyrobnica", people: ["kacper", "helena"],
    paragraphs: [
      "Kacper urodził się w 1759 r. jako bliźniak — razem z siostrą [[agnieszka-p|Agnieszką]]. Wiemy to ze skorowidza urodzeń: „Kacper i Agnieszka Jentosiaki, Pawła i Jadwigi”. Dnia chrztu ani chrzestnych nie znamy, bo oryginalnej księgi chrztów z tych lat nie ma na FamilySearch.",
      "22 listopada 1786 r. ożenił się w Chorzelach z Heleną, córką (zapewne zmarłej) Marianny; oboje byli z Połoni, a świadkiem był Michał Bączek. To ten akt dowodzi, że Kacper był synem Pawła i Jadwigi. {{prawd}} Helena była najpewniej z domu Todor: skorowidz ślubów zapisał „Helena Tudor”, akt chrztu Walentego — „de Dodorow” (wariant zapisu), a jej syn Stanisław w 1841 r., za jej życia, podał „Helenę z Fadorów”. Dodorowie z aktów to inna rodzina — mieszczanie z Chorzel. {{prawd}} Była córką [[jozef-todor|Józefa]] i [[marianna-tod|Marianny Todorów]] z Połoni, siostrą [[anna-todor|Anny Todorówny]] i [[marianna-todorowna|Marianny Śniadachowej]] — to jedyne gospodarstwo Todorów w Połoni w tym pokoleniu; przeciw jest tylko to, że w akcie zgonu Anny (1839) syn Heleny Wojciech jest „sąsiadem”, a chrzest Anny z 1779 r. ma matkę Franciszkę. Chrztu Heleny nie ma na FamilySearch (księgi z lat 1743–1772 nie są sfilmowane) — zostaje Archiwum Diecezjalne w Płocku. {{hyp}} W trzech aktach z lat 1805–1825 zapisano ją jednak jako „Wysocką” — może to ojczym, przydomek albo pomyłka.",
      "Ich życie przypadło na wielkie zmiany. Trzy lata po ślubie lustracja wyliczyła pańszczyznę Połoni: 62 dni żniw i 55 dni orki rocznie. Po III rozbiorze, w latach 1795–1807, wieś należała do Prus. Zimą 1806/07 nad Orzycem stały korpusy Napoleona, a kawalerzyści karmili konie słomą zdartą z dachów. Kacper miał wtedy ok. 48 lat.",
      "Znamy ich dzieci: [[wojciech-k|Wojciecha]] (1789), [[marianna-k91|Mariannę]] (1791), [[andrzej-k|Andrzeja]] (1793), [[rozalia-k|Rozalię]] (1796), [[walenty|Walentego]] (1799), [[jan-kanty|Jana Kantego]] (ok. 1803–1805) i [[stanislaw-k|Stanisława]] (1806). Jan Kanty zmarł w wieku półtora roku „na nieznaną chorobę”. Andrzej ożenił się dopiero jako 45-latek — akt wciąż nazywa go „młodzianem”, czyli kawalerem.",
      "Kacper zmarł w Połoni 13 listopada 1828 r.; zgon zgłosili synowie Wojciech i Walenty. Ksiądz nie znał już imion jego rodziców. Helena przeżyła męża o 20 lat. Zmarła w maju 1848 r. jako wdowa i wyrobnica — czyli robotnica najemna bez własnej ziemi — i o niej też zapisano „córka niewiadomych z imion rodziców”. Dziś wiemy więcej niż ksiądz w 1828 r. {{hyp}} Dziesięć dni przed jej śmiercią piorun podpalił Jednorożec (spłonęło 301 budowli), ale to tylko zbieg dat — akt nie podaje przyczyny śmierci.",
      "{{prawd}} Według strony FB I. Antosiaka od dwóch synów Kacpra — Walentego i Stanisława — wywodzą się gałęzie Felcaków, Marcinów, Stańcaków i Walasków. Wszystkie [[#przydomki|przydomki]] schodzą się na Kacprze.",
    ],
    quotes: [{ act: "z1828-174", at: 4, text: "lat siedmdziesiąt mający, syn niewiadomych z imion rodziców, zostawiwszy po sobie owdowiałą żonę Helenę Antosiakową" }],
    acts: ["u1759-sk", "s1786-28", "u1799-23", "z1805-36", "u1806-stan", "s1837-28", "z1828-174", "z1848-99"],
    sources: ["fs-chorzele", "wiki-polon", "wiki-pn", "turos", "kmoch-j2", "fb-matecznik"] },

  { id: "walenty-marianna", title: "Walenty i Marianna — dwanaścioro dzieci", people: ["walenty", "marianna-ch"],
    paragraphs: [
      "Walenty urodził się 13 lutego 1799 r. o 7 wieczorem w Połoni — dzień przed świętem św. Walentego, więc imię najpewniej dostał po patronie najbliższego dnia. Chrzestnymi byli Józef Kutta z żoną Jadwigą. Połoń należała wtedy do Prus, więc Walenty przyszedł na świat najpewniej jako poddany króla pruskiego.",
      "17 lutego 1822 r. w Chorzelach ożenił się z Marianną Chudzikówną. On miał 23 lata, ona — 16. Kim był jej ojciec, wiemy dzięki aktowi zgonu [[mateusz-ch|Mateusza Chudzika]] z 1829 r.: zgon zgłosili syn Wojciech i „Walenty Antosiak zięć zmarłego”. Jej krewny (hipoteza; nie brat, bo miał innych rodziców) [[wojciech-ch|Wojciech Chudzik]] był potem świadkiem przy chrztach jej dzieci.",
      "Mieli co najmniej dwanaścioro dzieci w latach 1824–1850. Troje zmarło jako niemowlęta: pierwszy Wawrzyniec przeżył tylko trzy tygodnie, więc następny syn dostał to samo imię. [[jan-w|Jan]] w wieku 19 lat ożenił się z 40-letnią wdową i zamieszkał w Raszujce — rok później Walenty trzymał do chrztu ich córkę Annę. Najmłodszym znanym dzieckiem był [[aleksander-w|Aleksander]] (1850).",
      "W tych latach nazwisko „ustalało się na naszych oczach”: w latach 1827–1833 ksiądz pisał raz „Jentosiak”, raz „Antosiak”. W akcie chrztu [[jozef-w|Józefa]] (1827) Walenty to jeszcze „Jentosiak”, a w akcie [[feliks|Feliksa]] (1839) — już „Antosiak”. Wiek w aktach „pływa”: Walenty w aktach z 1827 r. ma 28 lat, z 1829 r. — 31, z 1832 r. — 33, z 1837 r. — 38. Nikt wtedy nie znał dokładnej daty urodzenia — wiek podawano z pamięci.",
      "Po powstaniu listopadowym (1831–1840) w Jednorożcu stało wojsko, zlikwidowano bartnictwo i wprowadzono zakazy leśne. Walenty był w tym czasie rolnikiem w Połoni, która w 1827 r. liczyła 33 domy i 207 mieszkańców.",
      "Walenty zmarł 2 października 1861 r., nie doczekawszy powstania styczniowego. Marianna przeżyła go o 10 lat: zmarła we wrześniu 1871 r. we wsi Budki; mieszkała przy synu. Jej zgon zgłosili synowie Józef i Feliks.",
    ],
    quotes: [
      { act: "z1829-58", at: 1, text: "Walenty Antosiak zięć zmarłego lat trzydzieści jeden" },
      { act: "z1861-91", at: 5, text: "umarł w Połoni Walenty Antosiak rolnik lat sześćdziesiąt… tamże urodzony — Syn niegdy Kacpra i Heleny Antosiaków" },
    ],
    acts: ["u1799-23", "s1822-fs", "u1827-50", "z1829-58", "u1834-116", "u1839-196", "s1853-34", "u1854-109", "z1861-91", "z1871-115"],
    sources: ["fs-chorzele", "wiki-pn", "wiki-polon", "raport-c", "badania"] },

  { id: "feliks-rozalia", title: "Feliks i Rozalia — ślub w powstaniu", people: ["feliks", "rozalia-s"],
    paragraphs: [
      "Feliks urodził się 27 listopada 1839 r. w Połoni jako syn Walentego i Marianny. Rozalia Sędrowska (w aktach też Sendrowska) urodziła się ok. 1 października 1843 r. w Połoni jako córka [[grzegorz-s|Grzegorza]] i [[marianna-k|Marianny z Kutów]]. Jej chrzestnym był 22-letni [[aleksander-21|Aleksander Antosiak]] — z innej gałęzi rodu, bo w Połoni żyło wtedy kilka rodzin o tym nazwisku.",
      "Gdy Feliks miał 23 lata, wybuchło powstanie styczniowe. 11 marca 1863 r. rosyjska kolumna szła z Chorzel przez Jednorożec w pościgu za Zygmuntem Padlewskim — najpewniej przez Połoń albo tuż obok. Pod Drążdżewem zginęło ok. 50 powstańców. Przy drodze Małowidz–Połoń stoi sucha sosna bartna, na której według miejscowej tradycji Rosjanie wieszali powstańców.",
      "7 lutego 1864 r., w środku powstania, Feliks i Rozalia wzięli ślub w Chorzelach. Ojciec Feliksa już nie żył, więc 24-latek gospodarował przy matce; Rozalia miała 20 lat. Tak jak u Pawła w 1750 r., ślub wypadł w niedzielę tuż przed Popielcem. 24 dni później, 2 marca 1864 r., car podpisał ukaz o uwłaszczeniu: chłopi dostali na własność ziemię, którą uprawiali.",
      "Dzieci według indeksu Geneteki: [[marcin-fe|Marcin]] (1866), [[franciszek|Franciszek]] (1868), [[adam-fe72|Adam]] (1872), [[ewa-fe|Ewa]] (1875) i drugi [[adam-fe78|Adam]] (1878), który zmarł rok później. Od 1868 r. akty pisano już po rosyjsku.",
      "Feliks zmarł 11/23 grudnia 1880 r. w Połoni, mając tylko 41 lat (podwójna data to kalendarz rosyjski i nasz). W 1891 r. Rozalia wyszła powtórnie za mąż — za Jana Rybińskiego, wdowca z Łazu. Pięć lat później jej córka Ewa poślubiła Piotra, syna Jana, czyli pasierba swojej matki. Rozalia zmarła w Łazie w 1907 r., w wieku 65 lat.",
      "{{prawd}} To od Feliksa — „Felka” — gałąź Adriana dostała w Połoni przydomek „[[#przydomki|Felcaki]]” (wg strony FB I. Antosiaka).",
    ],
    quotes: [{ act: "s1864-28", at: 2, text: "Feliksem Antosiakiem młodzianem, synem niegdy Walentego i żyjącej Maryanny z Chudzików" }],
    acts: ["u1839-196", "u1843-175", "s1864-28", "u1868-104", "z1880-273", "s1891-49", "z1907-38"],
    sources: ["kmoch-j2", "wiki-polon", "wiki-popielec", "szumski", "pgsa", "geneteka", "fb-matecznik"] },

  { id: "franciszek-marcjanna", title: "Franciszek i Marcjanna — dziewięcioro dzieci i Ameryka", people: ["franciszek", "marcjanna-l"],
    paragraphs: [
      "Franciszek urodził się 5 maja 1868 r. w Połoni — w roku, od którego akty pisano po rosyjsku. Miał 12 lat, gdy zmarł jego ojciec Feliks.",
      "26 stycznia / 7 lutego 1892 r. ożenił się w Chorzelach z Marcjanną Lipką. On miał 23 lata, ona 19 i mieszkała w Połoni przy matce. Ojcowie obojga już nie żyli, a matka panny zgodziła się na ślub ustnie.",
      "Akt ślubu jej rodziców (1870) podaje dziadków Marcjanny: [[samuel-lip|Samuela Lipkę]] i [[ludwika-luma|Lowizę z Lümów]] oraz [[gotlib-fuks|Gotliba Fuksa]] i [[marianna-bratek|Mariannę z Bratków]] z Budek. Jej ojciec [[franciszek-lip|Franciszek Lipka]] urodził się w Prusach. {{hyp}} Imiona Samuel, Ludwika i Gotlib wskazują na rodzinę niemieckich kolonistów, prawdopodobnie ewangelików. {{prawd}} Pasuje to do rodzinnej opowieści, że syn Władysław nauczył się od matki niemieckiego — i to uratowało mu życie w czasie wojny.",
      "Mieli dziewięcioro znanych dzieci, urodzonych w latach 1892–1914: [[katarzyna-f|Katarzynę]], [[franciszek-f|Franciszka]], [[jan-f|Jana]], [[wladyslaw-f|Władysława]], [[aleksander-f|Aleksandra]], [[wincenty|Wincentego]], [[stanislaw-f|Stanisława]], [[teofil-f|Teofila]] i [[marianna-f2|Mariannę]]. {{prawd}} Władysław był w latach 1937–39 wójtem gminy Jednorożec. {{prawd}} 18-letni Franciszek w 1913 r. popłynął do Ameryki, do Connecticut, i jako ojca wpisał „Franciszka Antoszaka, Polon”.",
      "Dzieci dorastały w burzliwych czasach. W 1905 r. był bunt podatkowy w Jednorożcu i przysłano dragonów. W 1908 r. z powiatu przasnyskiego wyjechało do Ameryki Północnej 1317 osób. Od marca do lipca 1915 r. przez gminę biegła linia frontu, a w sierpniu z Jednorożca zostały 3 budynki. {{hyp}} Przed wojną jedyny murowany dom w Połoni miał Aleksander Antosiak, który wrócił z Ameryki — może to syn Franciszka, ale może też starszy Aleksander z Połoni.",
      "Franciszek zmarł w 1926 r. w Połoni. {{hyp}} Marcjanna może leżeć na cmentarzu w Szczytnie: jest tam grób Marcjanny Antosiak, „żyła lat 76”, bez dat — ale pasuje też inna Marcjanna, z Jóźwików.",
    ],
    quotes: [{ act: "s1892", at: 1, text: "synom pokoinago Feliksa Antosiak i nakhodiashcheisia v zhivykh ego zheny Rozalii iz Sendrovskikh", tr: "synem zmarłego Feliksa Antosiaka i żyjącej jego żony Rozalii z Sendrowskich" }],
    acts: ["u1868-104", "s1892", "u1895-45", "u1905-271", "s1926-36", "z1926-105"],
    sources: ["geneteka", "metryki-chorzele", "fb-matecznik", "fs-1913", "wiki-polon", "raport-c", "szczepanski", "kmoch-j3", "glos23", "grobonet-marcjanna"] },

  { id: "wincenty-eleonora", title: "Wincenty i Eleonora — wojna, Mazury i nagranie", people: ["wincenty", "eleonora"],
    paragraphs: [
      "Wincenty urodził się w 1905 r. w Połoni — w roku rewolucji, gdy sosna bartna przy drodze do Połoni znów była miejscem kar i egzekucji. Miał 10 lat, gdy przez gminę przeszedł front, i 15, gdy 23 sierpnia 1920 r. sowiecka konnica Gaja przebiła się pod Chorzelami przez polską Brygadę Syberyjską.",
      "W 1925 r. ożenił się w Chorzelach z Eleonorą Dębek, córką [[adam-d|Adama Dębka]] i [[marianna-o|Marianny z Obrębskich]]. W tym roku szkoła w Połoni mieściła się w jednej wynajętej izbie: 25 m² i 63 dzieci z jednym nauczycielem. Dębkowie i Antosiakowie byli spokrewnieni już wcześniej — w 1864 r. żyła Ewa z Antosiaków Dębkowa.",
      "1 listopada 1939 r. Połoń wcielono do III Rzeszy, więc rodzina przeżyła okupację w granicach Niemiec: przesiedleńcy w domach, roboty przymusowe, kontyngenty. Brat Eleonory, [[wincenty-debek|Wincenty Dębek]], trafił do niewoli pod Modlinem i do Stalagu I A. Brat Wincentego, [[wladyslaw-f|Władysław]], uciekł z robót pod Ostródą. {{hyp}} Stanisław Antosiak, zastrzelony w 1943 r. w sprawie żandarma Wendlera, mógł być kolejnym bratem Wincentego — daty się jednak nie zgadzają.",
      "{{prawd}} W latach 50. Wincenty i Eleonora wyjechali z Połoni: krótko mieszkali w Pilcu koło Świętej Lipki, potem osiedli na stałe w Szymanach koło Szczytna (wg strony FB I. Antosiaka). W tym samym czasie część mieszkańców Połoni wyjeżdżała na Ziemie Odzyskane.",
      "{{prawd}} 11 lipca 1963 r. etnografowie IS PAN nagrali w Połoni pieśni „Leonory Antosiak” — najpewniej Eleonory. Jej 4 pieśni, m.in. „Tam za Warsiawo siedem mil”, są w archiwum na taśmie T2667, a jej wersja „La la gąski, nie bende was miała” jest jedyna taka w całym katalogu.",
    ],
    quotes: [],
    acts: ["u1905-271", "s1925-40"],
    sources: ["wiki-polon", "kmoch-j3", "wiki-chorzele1920", "kmoch-polon", "raport-c", "straty", "kmoch-1939", "fb-matecznik", "etnofon"] },

  { id: "marian-henryka", title: "Marian i Henryka — dziadkowie", people: ["marian", "henryka"],
    paragraphs: [
      "Marian, syn Wincentego i Eleonory, to dziadek Adriana. Henryka z domu Mieszała to babcia — córka Władysława Mieszały i Zofii ze Szczepanków (relacja rodzinna, 2026).",
      "Na tej stronie nie podajemy dat ani miejsc z ich życia, tak jak u wszystkich, którzy mogli żyć niedawno. Drzewo kończy się na dziadkach.",
      "W tej parze spotykają się dwie rodziny. Antosiakowie z Połoni dają się prześledzić w aktach aż do 1720 r. O rodzinie babci wiemy dużo mniej: rodzinę jej matki znaleźliśmy w parafii Nowa Wieś koło Ostrołęki, a skąd pochodził jej ojciec — wciąż szukamy. Dalej dwie historie [[#szczepankowie|ze strony babci]].",
    ],
    quotes: [],
    acts: [],
    sources: ["rodzina-2026"] },

  { id: "szczepankowie", side: "babcia", title: "Szczepankowie i Radziejewscy — cztery pokolenia znad Narwi", people: ["aleksander-sz", "katarzyna-sz"],
    paragraphs: [
      "Rodzina babci od strony matki żyła w parafii Nowa Wieś koło Ostrołęki, w sąsiednich wsiach Chojniki, Mostowo, Rżaniec i Wyszel. W XIX w. należały one do powiatu makowskiego; Chojniki i Mostowo były częścią dóbr Przystań ministra Mostowskiego, z kuźnicą żelaza.",
      "Najstarsi znani to [[piotr-szcz|Piotr Szczepanek]] i [[marianna-radoch|Marianna z Radochów]] oraz [[grzegorz-ploch|Grzegorz Płocharczyk]] i [[franciszka-szlach|Franciszka ze Szlachetków]] — znamy tylko ich imiona z aktów dzieci. Ich dzieci, [[franciszek-szcz|Franciszek Szczepanek]] (ok. 1849–1931) i [[marianna-ploch|Marianna z Płocharczyków]] (ok. 1843–1909, z Rżańca), pobrali się i zamieszkali w Chojnikach.",
      "Ich syn Aleksander urodził się ok. 1883 r. w Chojnikach. Katarzyna Radziejewska urodziła się ok. 1885 r. w Mostowie jako córka [[jozef-radz|Józefa]] (ok. 1850–1917) i [[agnieszka-rataj|Agnieszki z Ratajów]]; dziadkami Katarzyny byli [[jan-radz|Jan Radziejewski]] i [[rozalia-andrz|Rozalia z Andrzejczyków]].",
      "Zanim Aleksander i Katarzyna wzięli ślub, urodziły im się w Prusach dwie córki — młodzi z tych stron jeździli na sezonową pracę do pruskich majątków, „na saksy”. 12/25 stycznia 1909 r. pobrali się w drewnianym kościele w Nowej Wsi i uznali za swoje [[antonina-sz|Antoninę]] i [[marta-sz|Martę]]. Obie zmarły wiosną 1911 r., w odstępie 17 dni.",
      "6/19 stycznia 1913 r. w Chojnikach urodziła się [[zofia-m|Zofia]] — matka babci Henryki. Rodzina pochowała jeszcze [[wladyslaw-sz|Władysława Bolesława]] (1927) i [[michalina-sz|Michalinę Mariannę]] (1929); {{prawd}} [[genowefa-sz|Genowefa]] zmarła najpewniej w 1926 r.",
      "Dziadek Franciszek owdowiał w grudniu 1909 r., a w 1911 r., mając 57 lat, ożenił się z wdową Małgorzatą Szczygieł. Zmarł w Chojnikach w 1931 r. Uwaga: w tych samych Chojnikach żył drugi Franciszek Szczepanek, syn Antoniego — to imiennik, nie przodek.",
    ],
    quotes: [
      { act: "s1909-4", at: 3, text: "docieri Antoninu imiejuszczuju ot rodu dwa goda i Martu imiejuszczuju ot rodu odin god, rodiwszijesia w Prussii", tr: "córki Antoninę, mającą dwa lata, i Martę, mającą rok, urodzone w Prusach" },
    ],
    acts: ["s1909-4", "z1909-70", "s1911-17", "z1911-28", "z1911-33", "u1913-10", "z1917-9", "z1931-17"],
    sources: ["metryki-nw", "rodzina-2026", "szczepanski", "raport-ms"] },

  { id: "mieszalowie", side: "babcia", title: "Władysław i Zofia Mieszałowie — dwie ścieżki", people: ["wladyslaw-m", "zofia-m"],
    paragraphs: [
      "Władysław Mieszała i Zofia ze Szczepanków to rodzice babci Henryki (relacja rodzinna, 2026). Zofia urodziła się w 1913 r. w Chojnikach — jej rodzinę opisuje [[#szczepankowie|poprzednia historia]].",
      "O Władysławie wiemy najmniej. Ślubu Władysława i Zofii nie ma w księgach Nowej Wsi do 1936 r. ani w indeksie Myszyńca do 1940 r., a śluby z Nowej Wsi z lat 1937–1945 nie są zeskanowane.",
      "{{prawd}} Mieszałowie żyli od ok. 1848 r. w Grabówku, w tej samej parafii co Szczepankowie. W 1904 r. urodziło się tam dwóch Władysławów — stąd dwie ścieżki: A, syn [[adam-mie|Adama]] i [[elzbieta-gas|Elżbiety z Gąsków]], oraz B, syn [[piotr-mie|Piotra]] i [[wiktoria-gla|Wiktorii z Gładków]].",
      "{{prawd}} Ścieżka A jest prawdopodobna, B to hipoteza. Babcia pamięta, że brat jej ojca miał na imię Leopold i był jej ojcem chrzestnym (relacja rodzinna, 2026). Jedyny Leopold Mieszała w parafii to [[leopold-mie|syn Adama i Elżbiety]], ur. 1911, który w 1936 r. ożenił się z Jadwigą Wieczorek. W skorowidzach urodzeń 1911–1913 i 1915–16 innego Leopolda brak; luka: urodzenia z 1914 r. nie są online. Rozstrzygnie akt chrztu Henryki (chrzestni) albo akt ślubu Władysława i Zofii.",
      "Rodzina pamięta, że Władysław został rozstrzelany w łapance „przez pomyłkę”. {{hyp}} W Grabówku żyło trzech Władysławów Mieszałów urodzonych w latach 1904–1908 — o pomyłkę tożsamości było łatwo.",
      "{{hyp}} Jeśli to syn Piotra, to jego brat Eugeniusz urodził się w sierpniu 1915 r. „w czasie ruchu wojennego”, gdy rodzina uciekała przed frontem, a ich kuzyn Aleksander, syn Walentego, w 1910 r. wyjechał do Ameryki i ożenił się w Chicago.",
      "{{hyp}} Słabszy trop prowadzi do Dąbrów w parafii Myszyniec, gdzie w 1902 r. zmarł 10-miesięczny Stanisław Mieszała. Więcej tropów jest na stronie [[babcia.html|babci]].",
    ],
    quotes: [{ act: "u1916-1", at: 3, text: "urodzone jest w Szlągach [?] parafii Czerwin w czasie ruchu wojennego na dniu czwartym sierpnia roku zeszłego" }],
    acts: ["u1913-10", "u1904-20", "u1904-53", "u1916-1", "z1902-302"],
    sources: ["rodzina-2026", "metryki-nw", "geneteka", "akt1902-mysz", "raport-ms"] },
];

DRZEWO.nicknames = {
  intro: [
    "W Połoni żyło naraz kilka rodzin Antosiaków. W latach 1841–1864 w aktach jest co najmniej trzech, a może czterech Wojciechów Antosiaków — samo nazwisko nic nie mówiło. Dlatego każda gałąź dostawała przezwisko, zwykle od imienia przodka: „ci od Feliksa” to Felcaki.",
    "Wszystkie przydomki znamy tylko z jednego źródła: strony FB I. Antosiaka. To źródło wtórne, więc oznaczamy je jako prawdopodobne. W aktach metrykalnych przydomków nie ma; daty przodków sprawdziliśmy w aktach.",
  ],
  tree: [
    { t: "[[jakub-j|Jakub]] × [[marianna-j|Marianna]]", kids: [
      { t: "[[pawel|Paweł]] (1720–1795) × [[jadwiga|Jadwiga]]", kids: [
        { t: "[[adam-p|Adam]] (1754)", nick: "Orłowscy" },
        { t: "[[wojciech-p|Wojciech]] (1756) → Aleksander (ok. 1821) → Mateusz (1847) → …", nick: "Teofile" },
        { t: "[[kacper|Kacper]] (1759–1828) × [[helena|Helena]]", kids: [
          { t: "[[walenty|Walenty]] (1799–1861) × [[marianna-ch|Marianna]]", kids: [
            { t: "[[feliks|Feliks]] (1839–1880)", nick: "Felcaki", me: true },
            { t: "[[andrzej-w|Andrzej]] (1842)", nick: "Marciny" },
            { t: "[[aleksander-w|Aleksander]] (1850) → Bronisław", nick: "„Kapka”" },
          ] },
          { t: "[[stanislaw-k|Stanisław]] (1806)", kids: [
            { t: "Stanisław (1853–1939)", nick: "Stańcaki" },
            { t: "[[walenty-st|Walenty „Walas”]] (1860)", nick: "Walaski" },
          ] },
        ] },
      ] },
    ] },
  ],
  branches: [
    { name: "Felcaki", c: "prawd", me: true,
      from: "Od [[feliks|Feliksa]] (1839–1880), syna Walentego. „Felek” → Felcaki (mazurzenie: cz → c). To gałąź Adriana.",
      members: "Feliks × Rozalia Sendrowska (ślub 1864) i ich dzieci, m.in. [[franciszek|Franciszek]] (1868). Wnuki — dzieci Franciszka i Marcjanny — m.in. [[wladyslaw-f|Władysław]] (1900, wójt gminy Jednorożec) i [[wincenty|Wincenty]] (1905). Gałąź żyje.",
      refs: [{ label: "FB, post 2018-08-21: „linii rodziny Antosiak nazywanej dla rozróżnienia potocznie »FELCAKI«, od imienia Feliks – Felek”" }, { label: "FB, post 2019-10-06 (lista dzieci)" }],
      sources: ["fb-matecznik"] },
    { name: "Marciny", c: "hyp",
      from: "Od [[andrzej-w|Andrzeja]] (ur. 1842), syna Walentego, brata Feliksa. {{hyp}} Nazwa pewnie od jego najstarszego syna Marcina (ur. 1869) — strona FB nie mówi tego wprost. {{hyp}} Przydomek mógł też pochodzić od Marcina Antosiaka, rolnika z Połoni, wdowca po Tekli z Węgłów (zm. 1841, Z 25/1841) — nie syna Kacpra.",
      members: "Andrzej × Marianna Leśnikowska z Budek (1867). Dzieci m.in. Marcin (1869), [[jan-aw|Jan]] (1874, wyjechał do St. Louis) i [[franciszek-aw|Franciszek]] (1877, wyjechał do USA). Gałąź żyje.",
      refs: [{ label: "FB, post 2019-08-11 (lista dzieci)" }, { label: "FB, post 2024-07-23 („Marcinów”)" }, { label: "Z 25/1841 (Tekla Antosiakowa, żona Marcina)", url: "https://photos.szukajwarchiwach.gov.pl/b2d861d896a69a13d81c196bf3186ce3d0e44c483b686de0d099d2a426ef30f5_max" }],
      sources: ["fb-matecznik"] },
    { name: "Stańcaki", c: "hyp",
      from: "{{hyp}} Gałąź od Stanisława — syna Kacpra ([[stanislaw-k|ur. 1806]]) albo jego syna [[stanislaw-st|Stanisława]] (ur. 1853, U 113/1853).",
      members: "Stanisław (1853) × Julianna Panuś (1878), potem × Ewa Ferenc (1897). Dzieci m.in. Józef Symeon (1885–1967; St. Louis, potem Chicago), Antonina (1891; do USA w 1907) i Bronisław (1902–1977). Gałąź żyje (Mazury, USA). To gałąź autora strony FB.",
      note: "{{hyp}} Czy ojciec Stanisława (1853) i Walentego (1860) to [[stanislaw-k|Stanisław (1806)]], brat Walentego — w naszych aktach to jeszcze niepewne.",
      refs: [{ label: "FB, post 2019-06-22 (lista dzieci)" }, { label: "FB, post 2025-03-01: „Stanisława Antosiak ur. 1853 r. – »Stańcaki«”" }],
      sources: ["fb-matecznik"] },
    { name: "Walaski", c: "prawd",
      from: "Od [[walenty-st|Walentego „Walasa”]] (ur. 1860), syna Stanisława i Franciszki — brata Stanisława od Stańcaków.",
      members: "Walenty × Agata Gwiazda; dziewięcioro dzieci urodzonych w latach 1885–1906. Gałąź żyje (Mazury, Śląsk).",
      refs: [{ label: "FB, post 2019-06-12" }, { label: "FB, post 2024-09-25 („Walentego »Walas« Antosiak”)" }],
      sources: ["fb-matecznik"] },
    { name: "Teofile", c: "prawd",
      from: "Od [[teofil-f|Teofila]] (ur. 1911) z Felcaków, syna Franciszka. Ożenił się z Adelą Antosiak (ur. 1918) z linii Wojciecha (1756) i dał tej rodzinie nazwę.",
      members: "Linia: [[wojciech-p|Wojciech]] (1756, syn Pawła) → [[aleksander-21|Aleksander]] (ok. 1821) × Rozalia z Kutów → Mateusz (1847) → Józef (1892) → Adela (1918) × Teofil.",
      note: "Że Aleksander (ok. 1821) był synem Wojciecha, syna Pawła, wynika z aktów: jego ślub (S 49/1843) i zgon Wojciecha (Z 28/1827) podają tę samą Mariannę z Grzybów. Dalsze ogniwa (Mateusz 1847 → Józef → Adela) znamy tylko ze strony FB.",
      refs: [{ label: "FB, post 2020-05-31: „Nazwa potoczna »Teofile« pochodzi … od imienia Teofila Antosiak syna Franciszka Antosiak z »Felcaków«”" }],
      sources: ["fb-matecznik"] },
    { name: "Orłowscy", c: "prawd",
      from: "Od [[adam-p|Adama]] (ur. 1754), syna Pawła, brata Kacpra. Skąd nazwa — strona FB nie mówi. {{hyp}} Może od ślubu Bronisława z Władysławą Orłowską w 1935 r.",
      members: "Adam × Klara (1791), potem × Marianna (1798). Synowie m.in. [[wojciech-a|Wojciech]] (ok. 1805–1807). Dalej m.in. Mateusz (1856) × Małgorzata Wywigacz (1883).",
      refs: [{ label: "FB, post 2019-12-02" }],
      sources: ["fb-matecznik"] },
  ],
  single: [
    { name: "„Kapka”", c: "prawd", text: "Przezwisko jednej osoby: Bronisława, syna [[aleksander-w|Aleksandra]] (ur. 1850, brata Feliksa) i Marcjanny Michalak.", sources: ["fb-matecznik"] },
    { name: "„Felciak”", c: "prawd", text: "Tak nazwano pradziadka [[wincenty|Wincentego]] (1905) w komentarzu pod postem z 2023-06-15.", sources: ["fb-matecznik"] },
    { name: "Parciaki", c: "prawd", text: "To nie przydomek, tylko wieś. Tak strona FB nazywa linię Jacentego Jentosiaka, który w 1748 r. ożenił się z Ewą i osiadł w Parciakach.", sources: ["fb-matecznik", "fs-chorzele"] },
  ],
  notes: [
    "{{hyp}} Przy chrzcie [[franciszek-f|Franciszka]] z Felcaków w 1895 r. chrzestnymi byli Mateusz Antosiak z żoną Małgorzatą ((u1895-45|akt chrztu)). Imię żony pasuje do Mateusza (ur. 1856) z Orłowskich, który w 1883 r. ożenił się z Małgorzatą Wywigacz. Jeśli to on, gałęzie Felcaków i Orłowskich trzymały się razem 140 lat po rozejściu.",
    "Do sprawdzenia w rodzinie: czy przydomki są jeszcze w użyciu i jak się mówiło — „Felcaki” czy „Felczaki”?",
  ],
};
