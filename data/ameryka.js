/* WĄTEK AMERYKAŃSKI: emigranci z Połoni i ich losy w USA. Źródło: assets/badania/2026-11-01-raport-ameryka.md.
   Nowy emigrant = nowy obiekt w DRZEWO.america. Pola (wszystkie poza name opcjonalne):
     name     imię i nazwisko;  alias  zapis z dokumentów USA
     person   id z DRZEWO.people, jeśli to ktoś z drzewa
     born     "ok. 1895, Połoń";  died  "10.10.1955, St. Louis"
     trip     "Hamburg → Ellis Island, 4.09.1913, statek Pennsylvania"
     places   [klucze z DRZEWO.americaPlaces];  fate  krótko o losach
     c        "ok" = Połoń stoi w dokumencie | "hyp" = możliwy, bez twardego dowodu
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
    rel: { t: "Prawdopodobnie syn Franciszka (1868–1926) i brat pradziadka Wincentego — jako ojca wpisał „Franciszek Antoszak, Polon”. W Połoni żył jednak drugi Franciszek (ur. ok. 1844).", c: "prawd" },
    sources: [{ label: "lista pasażerów 1913", url: AM_FS + "1:1:JNTX-YJZ" }, { label: "obraz listy, s. 1", url: AM_FS + "3:1:3Q9M-C9T6-H97L-M" }, { label: "obraz listy, s. 2", url: AM_FS + "3:1:3Q9M-C9T6-H9CK-R" }, { label: "karta poborowa 1917", url: AM_FS + "1:1:WYRP-RM2M" }] },
  { name: "Mateusz Antosiak", alias: "Mateus Antoschak (1905), Mathew John Antosiak", c: "ok",
    born: "18.01.1885 (na grobie 1886), „Weis Polon”", died: "10.10.1955, St. Louis", trip: "Brema → Baltimore, 25.05.1905, S.S. „Cassel”", places: ["baltimore", "stlouis"],
    fate: "Od 1906 r. w St. Louis, robotnik; w 1942 r. w cementowni Portland Cement Co. Obywatelstwo USA w 1932 r. Żona Martha z domu Brodnicka (1891–1935). Pochowany na cmentarzu Calvary. Sprowadził do siebie siostrę Mariannę.",
    rel: { t: "Gałąź nieustalona. Drzewo na FamilySearch podaje ojca Mateusza (ur. ok. 1866); w aktach Połoni jest Mateusz ur. 1864, syn Jakuba i Franciszki z Obrębskich — może to on.", c: "hyp" },
    sources: [{ label: "petycja naturalizacyjna", url: AM_FS + "1:1:68LS-XC2N" }, { label: "karta poborowa 1942", url: AM_FS + "1:1:QKVS-CT5V" }, { label: "karta poborowa I wojna", url: AM_FS + "1:1:7BL7-PMMM" }, { label: "grób (Find a Grave)", url: "https://www.findagrave.com/memorial/52281194/mateusz-antosiak" }] },
  { name: "Marianna Antosiak", c: "ok", born: "ok. 1889–1890, Połoń", trip: "Hamburg → Ellis Island, 1.02.1907, statek „Pennsylvania”", places: ["stlouis"],
    fate: "17 lat, panna. Jechała do brata Mateusza w St. Louis. Dalsze losy nieznane.",
    rel: { t: "Siostra Mateusza; gałąź nieustalona.", c: "ok" },
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
  { name: "John Antosiak", c: "hyp", born: "27.05.1875", died: "20.11.1937, St. Louis", places: ["stlouis"],
    fate: "Żona Mary Ann z domu Brentek. Pochowany na tym samym cmentarzu co Mateusz.",
    rel: { t: "Słaba poszlaka: St. Louis i wspólny cmentarz. Akt zgonu z Missouri poda miejsce urodzenia.", c: "hyp" },
    sources: [{ label: "grób (Find a Grave)", url: "https://www.findagrave.com/memorial/52280871/john-antosiak" }] },
  { name: "Frank Antosiak", c: "hyp", born: "24.02.1877", died: "5.06.1951, St. Louis", places: ["newark", "stlouis"],
    fate: "Żona Leonora. Najpierw w Newark (dzieci urodzone tam w 1907 i 1911), potem w St. Louis.",
    rel: { t: "Słaba poszlaka, jak u Johna.", c: "hyp" },
    sources: [{ label: "grób (Find a Grave)", url: "https://www.findagrave.com/memorial/52280593/frank-antosiak" }] },
  { name: "Joseph Antosiak × Marianna z Pawłowskich", c: "hyp", born: "Marianna: 2.02.1890, Krzynowłoga", died: "Marianna: 28.08.1941, Chicago", places: ["chicago"],
    fate: "Marianna pochodziła z sąsiedztwa Połoni; wieś męża nieznana.",
    rel: { t: "Bez dowodu na Połoń.", c: "hyp" },
    sources: [{ label: "grób Marianny (Find a Grave)", url: "https://www.findagrave.com/memorial/188385182/marianna-antosiak" }] },
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
    { t: "Franciszek, który w 1913 r. pojechał do Connecticut, był prawdopodobnie bratem pradziadka Wincentego.", c: "prawd", person: "franciszek-f", sources: ["fs-1913", "fs-1917"] },
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
