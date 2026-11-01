/* MIEJSCA na mapie rodu (mapa.html). Nowe miejsce = nowy obiekt w DRZEWO.places. Pola:
     id      unikalny, ASCII, kebab-case (kotwica mapa.html#<id>)
     name    nazwa wyświetlana
     lon/lat długość i szerokość geograficzna (stopnie dziesiętne). Źródło dla wsi strony babci, Sypniewa, Stylągów i Grabowa: OpenStreetMap/Nominatim
             (sprawdzone 2026-11-01; zgodne z Wikipedią co do gminy i powiatu), ±1 km. Pozostałe — z wiedzy ogólnej,
             miasta ±1 km, małe wsie ±3–5 km (pole approx).
     approx  true = położenie małej wsi tylko orientacyjne (±3–5 km)
     kind    "dom" (wieś rodziny) | "parafia" | "miasto" (punkt orientacyjny) | "cel" (dokąd wyjechali) | "wojna"
             | "region" (sam podpis, bez kropki — kierunek, nie konkretna miejscowość)
     map     "main" = podpis na mapie głównej | "zoom" = na mapie głównej mała kropka, podpis w zbliżeniu
             (okolice Połoni / okolice Nowej Wsi; zbliżenia pokazują wszystkie miejsca w swoim prostokącie)
             | "edge" = poza mapą, znacznik ze strzałką przy krawędzi
     km      dla map:"edge" — odległość od Połoni w linii prostej (przybliżona); znacznik stoi na krawędzi mapy
             w kierunku prawdziwego położenia
     match   nazwy z pól place w data/osoby.js (born/died/spouses[].married) — dopasowanie dokładne
     parish  nazwa parafii z data/akty.js (pole parish; "Chorzele" = akty bez pola parish)
     re      wzorzec (RegExp, bez flag) szukany w tekstach historii (data/historia.js), ciekawostek i tropów babci
     people  [{ id, t, c }] osoby dopisane ręcznie, gdy miejsca nie ma w polach place; t = co tu robili, c = pewność
     note    jedno-dwa zdania o miejscu
   ZASADA: żadnych osób żyjących ani prywatnych (Marian, Henryka, Władysław Mieszała) — bez miejsc. */
window.DRZEWO = window.DRZEWO || {};

DRZEWO.places = [
  /* ── okolice Połoni (parafia Chorzele) ───────────── */
  { id: "polon", name: "Połoń", lon: 20.98, lat: 53.20, kind: "dom", map: "main", match: ["Połoń"], re: "Połoni|Połoń",
    note: "Gniazdo rodu: wieś królewska nad Orzycem, w gminie Jednorożec, do 1994 r. w parafii Chorzele. Tu żyły pokolenia Jentosiaków i Antosiaków od ok. 1700 r." },
  { id: "chorzele", name: "Chorzele", lon: 20.90, lat: 53.26, kind: "parafia", map: "main", match: ["Chorzele"], parish: "Chorzele", re: "Chorzel",
    note: "Miasteczko i parafia nad Orzycem, przy dawnej granicy z Prusami. Tu chrzczono, brano śluby i chowano mieszkańców Połoni." },
  { id: "jednorozec", name: "Jednorożec", lon: 21.03, lat: 53.14, kind: "miasto", map: "main", re: "Jednoroż",
    note: "Siedziba gminy, do której należy Połoń (od 1867 r.)." },
  { id: "przasnysz", name: "Przasnysz", lon: 20.88, lat: 53.02, kind: "miasto", map: "main", re: "Przasnysz",
    note: "Miasto powiatowe; dawne starostwo i Ekonomia Przasnysz, której Połoń odrabiała pańszczyznę." },
  { id: "budki", name: "Budki", lon: 20.93, lat: 53.225, kind: "dom", map: "zoom", approx: true, match: ["Budki"], re: "Budk",
    note: "Wieś parafii Chorzele w pobliżu Połoni." },
  { id: "laz", name: "Łaz", lon: 21.03, lat: 53.235, kind: "dom", map: "zoom", approx: true, match: ["Łaz"], re: "Łaz[ui ]",
    note: "Wieś parafii Chorzele w pobliżu Połoni." },
  { id: "olszewka", name: "Olszewka", lon: 20.93, lat: 53.165, kind: "dom", map: "zoom", approx: true, match: ["Olszewka"], re: "Olszewk",
    note: "Wieś parafii Chorzele. Pod jej nagłówkiem zapisano ślub Pawła i Jadwigi (1750) — może to wieś Jadwigi." },
  { id: "raszujka", name: "Raszujka", lon: 20.97, lat: 53.29, kind: "dom", map: "zoom", approx: true, match: ["Raszujka"], re: "Raszujk",
    note: "Wieś parafii Chorzele, na północ od Połoni." },
  { id: "zagaty", name: "Zagaty", lon: 21.06, lat: 53.17, kind: "dom", map: "zoom", approx: true, match: ["Zagaty"], re: "Zagat",
    note: "Wieś w okolicy Połoni i Jednorożca." },

  /* ── rodzina babci: okolice Ostrołęki, Kurpie ────── */
  { id: "ostroleka", name: "Ostrołęka", lon: 21.575, lat: 53.085, kind: "miasto", map: "main", re: "Ostrołęk(?!i\\b)",
    note: "Miasto nad Narwią; punkt orientacyjny dla parafii Nowa Wieś." },
  { id: "nowa-wies", name: "Nowa Wieś k. Ostrołęki", lon: 21.4126, lat: 53.0855, kind: "parafia", map: "main", match: ["Nowa Wieś k. Ostrołęki"], parish: "Nowa Wieś k. Ostrołęki", re: "Nowej Wsi|Nowa Wieś",
    note: "Parafia rodziny Szczepanków — dziadków babci od strony matki. Ok. 10 km na zachód od Ostrołęki. Tu w 1909 r. ślub Aleksandra i Katarzyny w drewnianym kościele i w 1913 r. chrzest Zofii; na cmentarzu w Nowej Wsi chowano też zabitych w czasie okupacji." },
  { id: "chojniki", name: "Chojniki", lon: 21.3800, lat: 53.1175, kind: "dom", map: "zoom", match: ["Chojniki"], re: "Chojnik",
    note: "Wieś Szczepanków w parafii Nowa Wieś (gmina Sypniewo). Tu 6/19 stycznia 1913 r. urodziła się Zofia, matka babci." },
  { id: "rzaniec", name: "Rżaniec", lon: 21.3194, lat: 53.0919, kind: "dom", map: "zoom", match: ["Rżaniec"], re: "Rżań|Rżaniec",
    note: "Wieś w parafii Nowa Wieś; stąd pochodziła Marianna z Płocharczyków, babka Zofii. Mieszkali tu też Mieszałowie." },
  { id: "wyszel", name: "Wyszel", lon: 21.3805, lat: 53.1350, kind: "dom", map: "zoom", match: ["Wyszel", "Wyszel albo Chojniki"], re: "Wyszel|Wyszl",
    note: "Dawna „Ruda Wesliowa” (1582). Według jednego aktu tu urodził się Franciszek Szczepanek, dziadek Zofii." },
  { id: "mostowo", name: "Mostowo", lon: 21.3710, lat: 53.1015, kind: "dom", map: "zoom", match: ["Mostowo"], re: "Mostow",
    note: "Wieś w parafii Nowa Wieś; stąd pochodziła Katarzyna z Radziejewskich." },
  { id: "grabowek", name: "Grabówek", lon: 21.3312, lat: 53.1154, kind: "dom", map: "zoom", match: ["Grabówek"], re: "Grabów",
    note: "Wieś Mieszałów w parafii Nowa Wieś, w gminie Sypniewo; żyli tu od ok. 1848 r. W 1904 r. urodził się tu Władysław Mieszała, syn Adama i Elżbiety z Gąsków — ojciec babci (zob. strona Babcia)." },
  { id: "sypniewo", name: "Sypniewo", lon: 21.3064, lat: 53.0052, kind: "miasto", map: "zoom", re: "Sypniew",
    note: "Siedziba gminy, do której należały Grabówek, Chojniki, Wyszel i Mostowo. W czasie okupacji Amtsbezirk Sypniewo w Landkreis Mackeim, z posterunkiem żandarmerii." },
  { id: "stylagi", name: "Stylągi", lon: 21.7487, lat: 52.9822, kind: "dom", map: "main", match: ["Stylągi"], re: "Styląg",
    note: "Wieś w parafii Czerwin (gmina Czerwin), na południowy wschód od Ostrołęki. 4 sierpnia 1915 r. urodził się tu Eugeniusz Mieszała „w czasie ruchu wojennego” — rodzina uciekała przed frontem." },
  { id: "grabowo", name: "Grabowo k. Krasnosielca", lon: 21.2178, lat: 53.0826, kind: "wojna", map: "zoom", re: "Grabow[ie]",
    note: "Wieś w gminie Krasnosielc. 8 stycznia 1943 r. zginął tu żandarm, 9 stycznia Niemcy rozstrzelali 7 mężczyzn z Grabowa, a 12 stycznia zabrali zakładników z sąsiednich wsi, m.in. z Wyszla i Rżańca (odwet; Mieszały wśród znanych ofiar nie ma). Nie mylić z Grabówkiem." },
  { id: "myszyniec", name: "Myszyniec", lon: 21.35, lat: 53.38, kind: "parafia", map: "main", parish: "Myszyniec", re: "Myszyni",
    note: "Stolica Puszczy Zielonej, parafia kurpiowska. Drugi trop Mieszałów." },
  { id: "dabrowy", name: "Dąbrowy", lon: 21.42, lat: 53.46, kind: "dom", map: "main", approx: true, re: "Dąbrow",
    note: "Wieś w gminie Rozogi, dawniej w parafii Myszyniec. 1902: pierwszy pewny ślad Mieszałów." },

  /* ── Mazury: dokąd wyjechali po wojnie ───────────── */
  { id: "szymany", name: "Szymany", lon: 20.94, lat: 53.48, kind: "cel", map: "main", re: "Szyman",
    people: [{ id: "wincenty", t: "osiadł tu na stałe po latach 50.", c: "prawd" }, { id: "eleonora", t: "osiadła tu na stałe po latach 50.", c: "prawd" }],
    note: "Wieś koło Szczytna; tu na stałe osiedlili się Wincenty i Eleonora (wg strony FB I. Antosiaka)." },
  { id: "szczytno", name: "Szczytno", lon: 20.99, lat: 53.565, kind: "miasto", map: "main", re: "Szczytn",
    people: [{ id: "marcjanna-l", t: "możliwy grób na cmentarzu przy ul. Śląskiej", c: "hyp" }],
    note: "Miasto powiatowe na Mazurach, przed 1945 r. w Prusach Wschodnich." },
  { id: "pilec", name: "Pilec", lon: 21.13, lat: 54.06, kind: "cel", map: "main", approx: true, re: "Pil[cie]|Świętej Lipk",
    people: [{ id: "wincenty", t: "krótko mieszkał tu w latach 50.", c: "prawd" }, { id: "eleonora", t: "krótko mieszkała tu w latach 50.", c: "prawd" }],
    note: "Wieś w parafii Święta Lipka; pierwszy przystanek Wincentego i Eleonory po wyjeździe z Połoni." },
  { id: "mragowo", name: "Mrągowo", lon: 21.305, lat: 53.865, kind: "miasto", map: "main", re: "Mrągow",
    note: "Miasto na Mazurach — punkt orientacyjny." },

  /* ── poza mapą ───────────────────────────────────── */
  { id: "modlin", name: "Modlin", lon: 20.71, lat: 52.44, kind: "wojna", map: "edge", km: 85, re: "Modlin",
    people: [{ id: "wincenty-debek", t: "5.10.1939 trafił tu do niewoli niemieckiej", c: "ok" }],
    note: "Twierdza nad Narwią i Wisłą; broniła się do 29.09.1939 r." },
  { id: "stablack", name: "Stalag I A Stablack", lon: 20.60, lat: 54.40, kind: "wojna", map: "edge", km: 135, re: "Stablack|Stalag",
    people: [{ id: "wincenty-debek", t: "jeniec nr 32112, od 1939 r.", c: "ok" }],
    note: "Obóz jeniecki koło Królewca (dziś Dołgorukowo w obwodzie królewieckim, Rosja)." },
  /* ── regiony (podpis bez kropki; dokładne miejsce nieznane) ── */
  { id: "prusy", name: "Prusy (saksy)", lon: 21.80, lat: 53.62, kind: "region", map: "main", match: ["Prusy"], re: "„w Prusach”|saks",
    note: "Sezonowa praca u Niemców (saksy). W latach 1906–1908 Szczepankowie z parafii Nowa Wieś byli „w Prusach” — tam urodziły się ich córki. Dokładne miejsce nieznane; strzałka pokazuje tylko kierunek." },
  { id: "mazury", name: "Mazury?", lon: 21.55, lat: 53.76, kind: "region", map: "main", re: "Mazur",
    note: "Hipoteza: rodzina babci przeniosła się kiedyś z okolic Nowej Wsi na Mazury. Nie wiemy kiedy ani dokąd." },
];

/* Strzałki migracji na mapie głównej. from/to = id miejsc; "usa" = strzałka do zachodniej krawędzi
   (dalej wstawka USA). c = pewność: "ok" linia ciągła, "prawd" kreskowana gęsto, "hyp" przerywana. */
DRZEWO.migrations = [
  { from: "polon", to: "pilec", label: "lata 50.", who: "Wincenty i Eleonora", c: "prawd" },
  { from: "pilec", to: "szymany", label: "potem na stałe", who: "Wincenty i Eleonora", c: "prawd" },
  { from: "polon", to: "usa", label: "do USA: 1903, 1905, 1907, 1913", who: "emigranci z Połoni", c: "ok" },
  { from: "nowa-wies", to: "prusy", label: "saksy 1906–1908", who: "Aleksander i Katarzyna Szczepankowie", c: "ok" },
  { from: "nowa-wies", to: "mazury", label: "po wojnie? hipoteza", who: "rodzina babci (Kurpie → Mazury: Szczytno, Szymany?)", c: "hyp" },
];
