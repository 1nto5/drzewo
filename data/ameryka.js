/* WĄTEK AMERYKAŃSKI: emigranci z Połoni i ich losy w USA. Źródło: assets/badania/2026-11-01-raport-ameryka.md.
   Nowy emigrant = nowy obiekt w DRZEWO.america. Pola (wszystkie poza name opcjonalne):
     name     imię i nazwisko;  alias  zapis z dokumentów USA
     person   id z DRZEWO.people, jeśli to ktoś z drzewa
     born     "ok. 1895, Połoń";  died  "10.10.1955, St. Louis"
     trip     "Hamburg → Ellis Island, 4.09.1913, statek Pennsylvania"
     places   [klucze z DRZEWO.americaPlaces];  fate  krótko o losach
     c        "ok" = Połoń stoi w dokumencie | "prawd" = wg strony FB I. Antosiaka | "hyp" = możliwy, bez twardego dowodu
     rel      { t: "kim był dla rodziny", c: "ok" | "prawd" | "hyp" }
     sources  [{ label, url }] — listy pasażerów, karty poborowe, groby (Find a Grave)
   PRYWATNOŚĆ: tylko osoby zmarłe lub urodzone przed ok. 1920; bez potomków, którzy mogą żyć,
   bez nekrologów z ostatnich lat, bez adresów i telefonów. */
window.DRZEWO = window.DRZEWO || {};

const AM_FS = "https://www.familysearch.org/ark:/61903/";
DRZEWO.america = [
  { name: "Franciszek Antosiak", alias: "Francixzek Antoszak (1913), Francis Antosiak (1917)", person: "franciszek-f", c: "ok",
    born: "ok. 1895, Połoń", trip: "Hamburg → Ellis Island, 4.09.1913, statek „Pennsylvania”", places: ["manchester", "middletown"],
    fate: "18 lat, kawaler, robotnik rolny. Jechał do szwagra Franka Jankowiaka w Manchesterze. W 1917 r. tkacz w Russell Company w Middletown, podpisywał się krzyżykiem. Dalsze losy nieznane.",
    rel: { t: "Jako ojca wpisał „Franciszek Antoszak, Polon” — to pasuje do Franciszka (1868–1926). Ale syn Franciszka, Franciszek ur. 16.02.1895, w 1922 r. ożenił się w Połoni i zmarł tam w 1962 r. Emigrant to więc albo on (i wrócił), albo inny Franciszek — w 1895 r. w parafii ochrzczono dwóch Franciszków Antosiaków.", c: "hyp" },
    sources: [{ label: "lista pasażerów 1913", url: AM_FS + "1:1:JNTX-YJZ" }, { label: "obraz listy, s. 1", url: AM_FS + "3:1:3Q9M-C9T6-H97L-M" }, { label: "obraz listy, s. 2", url: AM_FS + "3:1:3Q9M-C9T6-H9CK-R" }, { label: "karta poborowa 1917", url: AM_FS + "1:1:WYRP-RM2M" }] },
  { name: "Mateusz Antosiak", adrian: "kuzyn 3. stopnia prapradziadka Franciszka", alias: "Mateus Antoschak (1905), Mathew John Antosiak", c: "ok",
    born: "18.01.1885 (na grobie 1886), „Weis Polon”", died: "10.10.1955, St. Louis", trip: "Brema → Baltimore, 25.05.1905, S.S. „Cassel”", places: ["baltimore", "stlouis"],
    fate: "Od 1906 r. w St. Louis, robotnik; w 1942 r. w cementowni Portland Cement Co. Obywatelstwo USA w 1932 r. Żona Martha z domu Brodnicka (1891–1935). Pochowany na cmentarzu Calvary. Sprowadził do siebie siostrę Mariannę.",
    rel: { t: "Syn Mateusza (ur. 1847) i Katarzyny z Grabowskich; linia Wojciecha (ur. 1756), brata Kacpra — wspólni przodkowie z Adrianem to Paweł i Jadwiga. Rodziców potwierdza pośrednio wniosek siostry do Social Security; ogniwo Mateusz 1847 → Aleksander 1821 → Wojciech 1756 znamy tylko ze strony FB I. Antosiaka. Rodzice podani w drzewie na FamilySearch (Mateusz ok. 1866 × Małgorzata) to najpewniej pomyłka.", c: "prawd" },
    sources: [{ label: "petycja naturalizacyjna", url: AM_FS + "1:1:68LS-XC2N" }, { label: "karta poborowa 1942", url: AM_FS + "1:1:QKVS-CT5V" }, { label: "karta poborowa I wojna", url: AM_FS + "1:1:7BL7-PMMM" }, { label: "grób (Find a Grave)", url: "https://www.findagrave.com/memorial/52281194/mateusz-antosiak" }] },
  { name: "Marianna Antosiak", adrian: "kuzynka 3. stopnia prapradziadka Franciszka", c: "ok", born: "ok. 1889–1890, Połoń", trip: "Hamburg → Ellis Island, 1.02.1907, statek „Pennsylvania”", places: ["stlouis"],
    fate: "17 lat, panna. Jechała do brata Mateusza w St. Louis. Prawdopodobnie to Mary Barbara Forman z d. Antosiak, zm. w listopadzie 1985 r. w St. Louis: jej wniosek do Social Security podaje rodziców Mathew J. Antosiak i Catherine Grabowski.",
    rel: { t: "Siostra Mateusza; według strony FB I. Antosiaka ur. 1888, córka Mateusza i Katarzyny z Grabowskich — z linii Wojciecha (ur. 1756), brata Kacpra. Wspólni przodkowie z Adrianem: Paweł i Jadwiga.", c: "prawd" },
    sources: [{ label: "lista pasażerów 1907", url: AM_FS + "1:1:QGGD-9FQF" }, { label: "obraz listy", url: AM_FS + "3:1:3Q9M-C95S-Z34V-5" }] },
  { name: "Maryanna Antosiak", c: "ok", born: "ok. 1887, Połoń", trip: "Brema → Ellis Island, 26.03.1903, statek „König Albert”", places: ["millburn"],
    fate: "16 lat. Jechała do ojca: „father Alexand Antosiak, Milburn, N.Y.”.",
    rel: { t: "Jej ojciec Aleksander był w USA już przed 1903 r. Może to Aleksander, syn Walentego (ur. 1850) — i to on mógł być tym, który „wrócił z Ameryki”.", c: "hyp" },
    sources: [{ label: "lista pasażerów 1903", url: AM_FS + "1:1:QGGW-7M5B" }, { label: "obraz listy", url: AM_FS + "3:1:33S7-816P-938D" }] },
  { name: "Aleksander („Alexand”) Antosiak", person: "aleksander-w", c: "ok", born: "przed ok. 1865, Połoń", places: ["millburn"],
    fate: "W 1903 r. w „Milburn” (lista podaje N.Y.; Millburn w New Jersey koło Newark to tylko domysł). Znany pośrednio — jako ojciec Maryanny z Połoni. Jeśli to ten sam Aleksander co ojciec Katarzyny, w 1909 r. był już z powrotem koło Przasnysza.",
    rel: { t: "Może Aleksander, syn Walentego i stryj Franciszka (ur. 1850); Aleksander z innej gałęzi (ur. ok. 1821) miałby w 1903 r. 82 lata.", c: "hyp" },
    sources: [{ label: "lista pasażerów córki, 1903", url: AM_FS + "1:1:QGGW-7M5B" }] },

  /* możliwi: bez twardego dowodu na Połoń */
  { name: "Walter Antosiak", alias: "Walery / Władysław?", c: "hyp", born: "23.05.1888", died: "4.09.1954, Chicago", trip: "przyjazd 1905 (wg spisu)", places: ["chicago"],
    fate: "Maszynista w Chicago, pochowany na cmentarzu St. Adalbert w Niles. Ojciec John (Jan). Żona Florence z domu Komoszewska z Chorzel (1894–1968).",
    rel: { t: "Mocna poszlaka, ale tylko z indeksu: w jednym rekordzie jako miejsce urodzenia podano „Polon Poland”. Obrazu nie otwarto.", c: "hyp" },
    sources: [{ label: "akt zgonu (indeks)", url: AM_FS + "1:1:Q2M4-4NYR" }, { label: "karta poborowa I wojna", url: AM_FS + "1:1:K6DJ-3VK" }] },
  { name: "Katarzyna Antosiak", c: "hyp", born: "ok. 1889", trip: "Ellis Island, 30.11.1909, statek „Kroonland”", places: ["newark"],
    fate: "Służąca, cel podróży: Newark, NJ. Ojciec: „Alexander Antosiak, Prasnik”.",
    rel: { t: "„Prasnik” to Przasnysz albo powiat, nie Połoń. Może siostra Maryanny z 1903 r. (ten sam ojciec Aleksander?).", c: "hyp" },
    sources: [{ label: "lista pasażerów 1909", url: AM_FS + "1:1:JX1P-9NT" }, { label: "obraz listy", url: AM_FS + "3:1:3Q9M-C9T3-1PX5" }] },
  { name: "Teofil Lipka", c: "hyp", born: "ok. 1881", trip: "Ellis Island, 22.03.1902, statek „Assyria”", places: [],
    fate: "Jechał do brata Stanisława Lipki.",
    rel: { t: "Połoń tylko w indeksie, obrazu nie otwarto. Może krewny prababci Marcjanny z Lipków.", c: "hyp" },
    sources: [{ label: "lista pasażerów 1902 (indeks)", url: AM_FS + "1:1:JFG6-7MF" }] },
  { name: "Stanley (Stanisław) Antosiak", c: "hyp", born: "25.07.1889", died: "17.10.1965, Chicago", places: ["chicago"],
    fate: "Rodzice: Mathew Antosiak i Mary „Obromski”. Żona Stella z domu Pawlak.",
    rel: { t: "„Obromski” może być zniekształconą Obrębską — nazwiskiem znanym w Połoni. Miejsce urodzenia na karcie poborowej nieczytelne.", c: "hyp" },
    sources: [{ label: "akt zgonu (indeks)", url: AM_FS + "1:1:Q2MX-HYB8" }, { label: "karta poborowa I wojna", url: AM_FS + "1:1:K68H-3DF" }] },
  { name: "John Antosiak", person: "jan-aw", c: "hyp", born: "27.05.1875", died: "20.11.1937, St. Louis", places: ["stlouis"],
    fate: "Żona Mary Ann z domu Brentek. Pochowany na tym samym cmentarzu co Mateusz.",
    rel: { t: "Według strony FB I. Antosiaka Jan, syn Andrzeja (brata Feliksa), ur. 1874, wyjechał do St. Louis — może to on. Akt zgonu z Missouri poda miejsce urodzenia.", c: "hyp" },
    sources: [{ label: "grób (Find a Grave)", url: "https://www.findagrave.com/memorial/52280871/john-antosiak" }] },
  { name: "Frank Antosiak", person: "franciszek-aw", c: "prawd", born: "24.02.1877", died: "5.06.1951, St. Louis", places: ["newark", "stlouis"],
    fate: "Żona Leonora. Najpierw w Newark (dzieci urodzone tam w 1907 i 1911), potem w St. Louis.",
    rel: { t: "Karta poborowa z II wojny podaje urodzenie w Budkach w 1877 r. Według wpisu FB I. Antosiaka z 2019 r. to Franciszek, syn Andrzeja (gałąź „Marciny” — nazwa wg FB, jej pochodzenie to hipoteza), brata Feliksa — wspólni przodkowie z Adrianem: Walenty i Marianna. Rozbieżność: w innym miejscu notatek Franciszek 1877 trafił do gałęzi Wojciecha; przyjmujemy wersję „syn Andrzeja”.", c: "prawd" },
    sources: [{ label: "grób (Find a Grave)", url: "https://www.findagrave.com/memorial/52280593/frank-antosiak" }] },
  { name: "Józef Symeon Antosiak", alias: "Joseph", adrian: "kuzyn 2. stopnia prapradziadka Franciszka (wg strony FB)", c: "prawd", born: "1885", died: "1967", trip: "1905 → St. Louis, potem Chicago", places: ["stlouis", "chicago"],
    fate: "Żona Marianna z Pawłowskich (2.02.1890 Krzynowłoga – 28.08.1941 Chicago). Syn Stanley Joseph (1918/19–1980), porucznik 6. Dywizji Pancernej USA: 6 czerwca 1944 r. lądował na plaży Utah w Normandii, walczył w Ardenach, odznaczony Srebrną Gwiazdą.",
    rel: { t: "Gałąź „Stańcaki” — wg strony FB I. Antosiaka; od Stanisława, syna Kacpra (1806), albo jego syna Stanisława (1853) — hipoteza. Daleki kuzyn linii Adriana: wspólny przodek to Kacper.", c: "prawd" },
    sources: [{ label: "grób Marianny (Find a Grave)", url: "https://www.findagrave.com/memorial/188385182/marianna-antosiak" }, { label: "grób Stanleya J. (Find a Grave)", url: "https://www.findagrave.com/memorial/206455497/stanley-j-antosiak" }] },
];

/* Miejsca na mapce: lon/lat do prostego rzutu. */
DRZEWO.americaPlaces = {
  manchester: { name: "Manchester, CT", lon: -72.52, lat: 41.78 },
  middletown: { name: "Middletown, CT", lon: -72.65, lat: 41.56 },
  stlouis: { name: "St. Louis, MO", lon: -90.2, lat: 38.63 },
  chicago: { name: "Chicago, IL", lon: -87.63, lat: 41.88 },
  newark: { name: "Newark, NJ", lon: -74.17, lat: 40.74 },
  millburn: { name: "Millburn, NJ?", lon: -74.3, lat: 40.72 },
  baltimore: { name: "Baltimore, MD", lon: -76.61, lat: 39.29, port: true },
  ellis: { name: "Ellis Island, NY", lon: -74.04, lat: 40.7, port: true },
};

DRZEWO.americaInfo = {
  known: [
    { t: "Co najmniej czworo ludzi z Połoni na pewno trafiło do USA: Maryanna (1903), Mateusz (1905), jego siostra Marianna (1907) i Franciszek (1913). Połoń stoi w ich dokumentach.", c: "ok", sources: ["raport-a"] },
    { t: "Franciszek, który w 1913 r. pojechał do Connecticut, mógł być bratem pradziadka Wincentego — ale ten według strony FB w 1922 r. ożenił się w Połoni. Albo wrócił, albo to inny Franciszek.", c: "hyp", person: "franciszek-f", sources: ["fs-1913", "fs-1917", "fb-matecznik"] },
    { t: "Według strony FB I. Antosiaka do USA wyjechała też część dzieci Teofila, młodszego brata pradziadka Wincentego (ich danych nie podajemy — mogą żyć).", c: "prawd", person: "teofil-f", sources: ["fb-matecznik"] },
    { t: "Daleki kuzyn z gałęzi „Stańcaków”, Stanley Joseph Antosiak, syn emigranta z 1905 r., lądował w 1944 r. na plaży Utah.", c: "prawd", sources: ["fb-matecznik"] },
    { t: "Aleksander Antosiak „wrócił z Ameryki” i postawił jedyny murowany dom w przedwojennej Połoni, wśród ok. 90 drewnianych pod strzechą.", c: "ok", sources: ["glos23"] },
    { t: "Którego Aleksandra to dotyczy — nie wiadomo. Brata pradziadka (ślub 1926) nie ma w żadnym rekordzie z USA. Starszy Aleksander z Połoni był w USA w 1903 r. — może to Aleksander, syn Walentego. Pamięć rodzinna mogła połączyć dwie osoby.", c: "hyp", person: "aleksander-f", acts: ["s1926-36"] },
  ],
  context: [
    { t: "W 1888 r. z okolic Przasnysza ok. 100 osób dziennie przechodziło przez granicę pruską — wielu dalej, za ocean.", sources: ["glos59"] },
    { t: "W 1908 r. z powiatu przasnyskiego wyjechało do Ameryki Północnej 1317 osób (w tym 382 kobiety) — najwięcej w całej guberni płockiej. Z gminy Jednorożec w 1899 r. wyjechało 240 osób „za dużemi kartami”.", sources: ["szczepanski"] },
    { t: "Z sąsiedniej gminy Baranowo w latach 1880–1914 najwięcej ludzi pojechało do St. Louis (548 osób, 26%), dalej do Pensylwanii, Nowego Jorku, Massachusetts, Connecticut i New Jersey — dokładnie tam, gdzie znaleźliśmy ludzi z Połoni.", sources: ["szczepanski"] },
    { t: "Droga: koleją do Bremy albo Hamburga, potem parowcem 8–14 dni. Przez okolice Chorzel i Myszyńca prowadziły też szlaki nielegalnej emigracji.", sources: ["szczepanski", "wiki-polon"] },
    { t: "Powód: ziemi było coraz mniej, a młodzi uciekali przed poborem do armii carskiej. W Ameryce czekały fabryki, cementownie, rzeźnie i kopalnie.", sources: ["kurpianka-2018-06", "szczepanski"] },
    { t: "Łańcuch: jeden wyjeżdżał i ściągał kolejnych. Mateusz sprowadził siostrę, Franciszek jechał do szwagra, Maryanna do ojca.", sources: ["raport-a"] },
    { t: "Powroty: emigranci najczęściej wracali po kilku latach, budowali domy z cegły kryte blachą i dokupowali ziemi. „Żeby nie Ameryka, to chyba by nam się chałupy poobalały” — mówili Kurpie.", sources: ["kurpianka-2018-07", "szczepanski"] },
    { t: "W latach 30. w urzędzie gminy w Jednorożcu wisiała tabliczka „Informacje w sprawie wyjazdu do Ameryki”.", sources: ["raport-c"] },
  ],
  notUs: [
    "Alexander Joseph Antosiak (1917–1942), urodzony w Chicago, zmarł jako jeniec na Filipinach — to nie Aleksander z Połoni.",
    "Antosiakowie z Detroit (Mount Olivet) — rodzina z Goraja na Lubelszczyźnie.",
    "Joseph Bruno Antosiak z Cleveland (1888–1967) — rodzina prawdopodobnie z Galicji.",
    "Jan Antosiak z Chicago (1885–1944), Marcin z Buffalo (1874–1955) — brak śladu Połoni.",
  ],
  contact: [
    "Test DNA w dużej bazie z wieloma użytkownikami z USA — dopasowania mogą pokazać potomków emigrantów z St. Louis, Chicago i Connecticut.",
    "Drzewa na FamilySearch: przy osobach zmarłych emigrantów widać, kto edytował drzewo — można napisać do autora przez serwis.",
    "Grupy genealogiczne: polsko-amerykańskie towarzystwa genealogiczne i grupy o Kurpiach i ziemi przasnyskiej.",
    "Publiczne akty zgonu zmarłych emigrantów (np. archiwum stanu Missouri) — podają miejsce urodzenia i rodziców.",
    "Rodzina w Polsce: listy i paczki z Ameryki, zdjęcia, adresy na starych kopertach.",
  ],
  rules: "Na tej stronie są tylko osoby zmarłe lub urodzone przed ok. 1920 r. i linki do publicznych źródeł. Nie wymieniamy żyjących potomków, adresów ani telefonów — kontakt nawiązuje się poza stroną.",
};

/* RODZINA W USA DZIŚ — tylko liczby. Żadnych imion, nazwisk ani danych identyfikujących żyjących.
   „Żyjący” = krewni z krwi wymienieni jako żyjący w publicznym nekrologu krewnego (2010–2025).
   Stan „podany” = źródło przypisuje stan osobie; „wnioskowany” = stan zmarłego krewnego lub gazety. */
DRZEWO.americaToday = {
  asof: "1 listopada 2026",
  total: 39, branches: 4, uncertain: 6,
  rows: [
    { branch: "Frank (Franciszek), ur. 1877, St. Louis — syn Andrzeja, brata Feliksa", count: 12, adrian: "potomkowie kuzyna prapradziadka Franciszka — kuzyni 3.–5. stopnia", common: "Walenty i Marianna z Chudzików", states: "MO (wnioskowany)", years: "2010, 2018" },
    { branch: "Józef Symeon, ur. 1885, St. Louis → Chicago („Stańcaki”)", count: 3, adrian: "potomkowie kuzyna 2. stopnia prapradziadka Franciszka — kuzyni 4.–5. stopnia", common: "Kacper i Helena", states: "TN (wnioskowany); u 2 osób nie podano", years: "2025" },
    { branch: "Mateusz, ur. 1885/86, i siostra Marianna, St. Louis — linia Wojciecha (1756)", count: 19, adrian: "potomkowie kuzyna 3. stopnia prapradziadka Franciszka — kuzyni 5.–7. stopnia", common: "Paweł i Jadwiga", states: "NC (1, podany), MO (2, podany), FL (12, wnioskowany), nie podano (4)", years: "2018–2022" },
    { branch: "Walter (Walerian), ur. 1888 w Połoni, Chicago", count: 5, adrian: "dalecy kuzyni, stopień nieznany", common: "nieznani (prawdopodobnie Paweł)", states: "IL (wnioskowany)", years: "2020" },
  ],
  notes: [
    "Gałąź Teofila, brata pradziadka Wincentego: część jego dzieci wyjechała do USA; jest niepewny trop (stare dane adresowe sprzed ponad 20 lat), że dwoje z nich żyło ok. 2000–2004 r. Nie wliczamy ich.",
    "Gałąź córek Aleksandra (New Jersey) i Franciszka z Connecticut: żyjących potomków nie znaleziono.",
    "Dodatkowo 6 osób o niepewnym statusie albo pokrewieństwie — nie wliczone.",
  ],
};
