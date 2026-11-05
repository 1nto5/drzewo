/* DRZEWO PACÓW — osobna gałąź (decyzja Adriana 2026-11-05): rodzina Pac, dziadkowie żony Adriana.
   Źródło prawdy: ~/iCloud/Genealogia/pac.md. Ładowane TYLKO przez drzewo-pac.html i ciekawostki-pac.html
   (nie mieszać z osoby.js ani mama.js). Pola osób jak w osoby.js. Zasady: bez osób żyjących
   (żony Adriana nie umieszczamy), bez adresów i kontaktów; osoby z hipotez (Krypno, IPN) nie wchodzą do drzewa.
   Źródło danych osób: relacja rodzinna (2026-11-05); brak aktów, więc brak strony aktów. */
window.DRZEWO = {
  anchors: ["jozef-pac", "janina-pac"],
  gp: { gen: "Józefa i Janiny", nom: "Józef i Janina" },
  viewerKey: "aa_viewer_pac",
  personPage: "drzewo-pac.html",
  pages: [["index.html", "Drzewo Antosiaków"], ["drzewo.html", "Drzewo taty"], ["drzewo-mama.html", "Drzewo mamy"], ["drzewo-pac.html", "Drzewo Paców"], ["ciekawostki-pac.html", "Ciekawostki (Pacowie)"]],
  triviaPage: "ciekawostki-pac.html",
  asof: "5 listopada 2026",
  acts: [],
  gloss: [],
  sources: [
    { id: "ewim-bialy-grunt", group: "kontekst", label: "Encyklopedia Warmii i Mazur — Biały Grunt", url: "http://encyklopedia.warmia.mazury.pl/index.php/Bia%C5%82y_Grunt", short: "Encyklopedia WiM: Biały Grunt" },
    { id: "geneteka", group: "archiwa", label: "Geneteka (geneteka.genealodzy.pl) — indeks metryk: nazwiska Nasiadko (1900–1940) i Pac (parafia Krypno)", url: "https://geneteka.genealodzy.pl/", short: "Geneteka" },
  ],
  trivia: [
    { title: "Biały Grunt: wieś założona w 1788 r., przez kilka lat Weißengrund", kind: "kontekst", c: "ok", year: 1788, people: ["janina-pac"],
      text: "Biały Grunt w gminie Świętajno założono w 1788 r. na nowiznach Lasów Korpelskich. W 1938 r., w ramach germanizacji nazw, przemianowano go na Weißengrund. Do 1945 r. wieś leżała w Prusach Wschodnich, po wojnie zasiedlili ją Polacy — i właśnie tu Janina Pac kierowała wiejską szkołą.",
      sources: ["ewim-bialy-grunt"] },
    { title: "Nasiadko czy Nasiadka? Nazwisko z północnego Podlasia", kind: "kontekst", c: "ok", year: null, people: ["janina-pac"],
      text: "Rodzina nie jest pewna, czy nazwisko brzmi Nasiadko, czy Nasiadka. W indeksach metrykalnych Geneteki z lat 1900–1940 (woj. podlaskie) częstsza jest forma Nasiadka: parafie Nowogród, Zbójna, Łomża (Kupiski Nowe), Miastkowo, Poryte i Borkowo. Forma Nasiadko występuje w parafiach Wąsosz, Miastkowo, Zbójna, Rajgród i Poryte. Obie skupiają się na północnym Podlasiu, przy dawnej granicy z Prusami Wschodnimi (okolice Łomży, Grajewa, Kolna), skąd po 1945 r. na Mazury przyjechało wielu osadników. Janiny (ur. ok. 1923/1924) w indeksach nie ma, więc skąd pochodziła — jeszcze nie wiemy.",
      sources: ["geneteka"] },
    { title: "Skąd przyjechali Pacowie? Kilka tropów", kind: "hipoteza", c: "hyp", year: 1924, people: ["jozef-pac"],
      text: "Jeden z tropów prowadzi do parafii Krypno (pow. moniecki, Podlasie): mieszkała tam rodzina Józefa Paca i Józefy z Kościuków, a ich dzieci to m.in. Sabina (1918), Stanisław (1921) i Łucja (1923). Józef, ur. ok. 1924/25, pasowałby jako kolejne dziecko, a imiona Józef i Stanisław powtarzają się u jego synów. Ale rodziny Pac żyły w tym czasie także w Łubinie Kościelnym, Kolnie, Drozdowie, Łomży, Miastkowie i Wiźnie. Skoro Nasiadkowie pochodzą spod Łomży, Pacowie z tych samych stron są równie prawdopodobni jak Krypno. Krypno to więc jeden z kilku tropów, nie główny. Akt z lat 1924–25 nie jest zindeksowany — to tylko pomysł do sprawdzenia, nie ustalenie.",
      sources: ["geneteka"] },
  ],
  stories: [], timeline: [],
  people: [
    { id: "jozef-pac", given: "Józef", surname: "Pac", sex: "m", gen: 1, line: "prosta", certainty: "ok",
      born: { y: 1924, approx: true, text: "ok. 1924/1925 (72 lata w 1997)" }, died: { y: 1997, date: "4.03.1997", c: "ok" },
      burial: { cemetery: "cmentarz", place: "Świętajno (pow. szczycieński)", plot: "grób rodzinny", c: "ok", note: "Grób rodzinny; nagrobek bez dat urodzenia." },
      spouses: [{ id: "janina-pac" }],
      facts: ["Dziadek, mąż Janiny (relacja rodzinna, 2026).", "Zmarł 4.03.1997 w wieku 72 lat, stąd urodzony ok. 1924/1925; dokładnej daty urodzenia nie znamy."] },
    { id: "janina-pac", given: "Janina", surname: "Pac", maiden: "z Nasiadków (?)", sex: "f", gen: 1, line: "prosta", certainty: "ok",
      born: { y: 1923, approx: true, text: "ok. 1923/1924 (63 lata w 1987)" }, died: { y: 1987, date: "8.02.1987", c: "ok" },
      burial: { cemetery: "cmentarz", place: "Świętajno (pow. szczycieński)", plot: "grób rodzinny (ten sam co Józefa)", c: "ok" },
      spouses: [{ id: "jozef-pac" }],
      facts: ["Babcia, z domu Nasiadko (relacja rodzinna, 2026).", { t: "Forma nazwiska rodowego niepewna: Nasiadko albo Nasiadka.", c: "prawd" },
        "Kierowniczka (dyrektorka) szkoły w Białym Grunt, gm. Świętajno.", "Zmarła 8.02.1987 w wieku 63 lat, stąd urodzona ok. 1923/1924."] },
    { id: "jozef-pac-1958", given: "Józef", surname: "Pac", sex: "m", line: "boczna", certainty: "ok",
      born: { y: 1958, date: "21.01.1958", c: "ok" }, died: { y: 2021, date: "26.12.2021", c: "ok" },
      burial: { cemetery: "cmentarz", place: "Świętajno (pow. szczycieński)", plot: "grób rodziców", c: "ok" },
      parents: ["jozef-pac", "janina-pac"],
      facts: ["Syn Józefa i Janiny (relacja rodzinna, 2026).", "Pochowany w Świętajnie w grobie rodziców."] },
    { id: "stanislaw-pac", given: "Stanisław", surname: "Pac", sex: "m", line: "boczna", certainty: "ok",
      born: { y: 1953, approx: true, text: "ok. 1953 (60 lat w 2013)" }, died: { y: 2013, date: "29.09.2013", c: "ok" },
      burial: { cemetery: "nieznane", c: "brak", note: "Miejsce pochówku nieznane." },
      parents: ["jozef-pac", "janina-pac"],
      facts: ["Syn Józefa i Janiny (relacja rodzinna, 2026).", "Zmarł 29.09.2013 w wieku 60 lat, stąd urodzony ok. 1953."] },
  ],
  generations: [
    { n: 1, yr: "", c: "ok", man: "jozef-pac", woman: "janina-pac", sum: "Dziadkowie — Józef i Janina Pac, Świętajno, szkoła w Białym Grunt.", facts: [] },
  ],
};
