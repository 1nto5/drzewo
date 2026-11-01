/* STATYSTYKI rodu Antosiaków z Połoni. Źródło liczb: ~/iCloud/Genealogia/assets/tresci/tresci-przydomki-siec.md (§3),
   policzone skryptem osoba po osobie z aktów wymienionych w tym materiale. NIE przeliczamy ich z data/osoby.js:
   tam są tylko lata (bez dat dziennych i bez części osób, np. Klary i Jadwigi), więc mediany wyszłyby inne o ±1 rok.

   DRZEWO.stat.slub / DRZEWO.stat.zgon — wiek przy pierwszym ślubie / przy śmierci (dorośli). Każda grupa:
     label   nazwa grupy;  n  liczba osób;  med  mediana (lata);  avg  średnia;  min, max  zakres
     note    opcjonalny opis skrajności („[tekst](id)” = link do osoby z DRZEWO.people)
     sub     true = podgrupa (np. mężczyźni przed/po 1830 r.) — pokazywana pod grupą główną
   DRZEWO.stat.dzieci — los dzieci w parach z przejrzanymi księgami zgonów. Każda para:
     a, b    [id lub null, imię] męża i żony;  yrs  lata urodzeń dzieci
     n       liczba dzieci;  d1 zm. < 1 roku;  d5 zm. 1–5 lat;  adult dorosłe (ślub, chrzestny, zgłaszający);
     surv    przeżyło dzieciństwo (brak w księgach zgonów z 6 pierwszych lat, dalszy los nieznany);  unk  luka w księgach
     note    opcjonalnie: kto (np. „Marianna 1791”)
   DRZEWO.stat.imiona — najczęstsze imiona dzieci Antosiak/Jentosiak urodzonych w Połoni, wg lat urodzenia:
     okres;  n  liczba dzieci;  top  [[imię, ile], …];  rest  imiona po 1 (tekst);  src  "akty" | "FB" (źródło wtórne)
   DRZEWO.stat.limits — ograniczenia (ramka na stronie). */
window.DRZEWO = window.DRZEWO || {};

DRZEWO.stat = {
  slub: [
    { label: "Mężczyźni z rodu", n: 18, med: 23.5, avg: 25.7, min: 19, max: 45, note: "najstarszy: [Andrzej](andrzej-k), syn Kacpra, 45 lat (1837)" },
    { label: "przed 1830 r.", n: 8, med: 28.5, sub: true, note: "Paweł 30, Kacper 27, Wojciech 31, Adam 37" },
    { label: "od 1830 r.", n: 10, med: 22.5, sub: true, note: "czterech w wieku 19 lat: Stanisław, Wawrzyniec, Jakub, Jan" },
    { label: "Kobiety (córki rodu i żony Antosiaków)", n: 15, med: 20, avg: 20.1, min: 16, max: 27, note: "najstarsza: [Helena Żyrówna](helena-zyr), 27 lat (1825)" },
  ],
  zgon: [
    { label: "Mężczyźni", n: 9, med: 62, avg: 59.3, min: 25, max: 78, note: "najmłodszy: [Wawrzyniec](wawrzyniec-w2), syn Walentego, 25 lat (1856); najstarszy: [Adam](adam-p), syn Pawła, 78 lat (1832)" },
    { label: "Kobiety", n: 10, med: 51.5, avg: 51.4, min: 28, max: 70, note: "Klara, żona Adama, zm. 1797 w wieku ok. 28 lat, 10 dni po śmierci noworodka" },
    { label: "Razem", n: 19, med: 62, avg: 55.2, min: 25, max: 78 },
  ],
  zgonPrzyklady: [
    ["pawel", "Paweł", 74], ["kacper", "Kacper", 69], ["wojciech-p", "Wojciech", 71], ["adam-p", "Adam", 78],
  ],
  dzieci: [
    { a: ["kacper", "Kacper"], b: ["helena", "Helena"], yrs: "1789–1806", n: 7, d1: 0, d5: 1, adult: 5, surv: 1, unk: 0, note: "przeżyła: Marianna 1791" },
    { a: ["wojciech-p", "Wojciech"], b: [null, "Jadwiga z Kutów"], yrs: "1788–1798", n: 5, d1: 0, d5: 1, adult: 1, surv: 3, unk: 0, note: "przeżyły: Teresa, Ewa, Rozalia" },
    { a: ["adam-p", "Adam"], b: [null, "Klara"], yrs: "1792–1797", n: 4, d1: 2, d5: 2, adult: 0, surv: 0, unk: 0, note: "zmarła cała czwórka; Klara zmarła w 1797 r. razem z noworodkiem" },
    { a: ["adam-p", "Adam"], b: [null, "Marianna z Samsłów"], yrs: "1798–1814", n: 7, d1: 1, d5: 1, adult: 2, surv: 0, unk: 3 },
    { a: ["walenty", "Walenty"], b: ["marianna-ch", "Marianna z Chudzików"], yrs: "1824–1850", n: 12, d1: 3, d5: 0, adult: 8, surv: 0, unk: 1, note: "troje niemowląt w 4 lata (1829–1833); nieznany: Szczepan" },
    { a: ["stanislaw-k", "Stanisław"], b: ["helena-zyr", "Helena z Żyrów"], yrs: "1827–1840", n: 7, d1: 2, d5: 3, adult: 0, surv: 1, unk: 1, note: "w czerwcu 1832 r. troje dzieci w 10 dni" },
    { a: ["stanislaw-k", "Stanisław"], b: ["franciszka-senda", "Franciszka"], yrs: "1842–1862", n: 10, d1: 1, d5: 0, adult: 5, surv: 0, unk: 4, note: "5 dorosłych znamy tylko z list ślubów na FB" },
  ],
  dzieciRazem: { n: 52, d1: 9, d5: 8, adult: 21, surv: 5, unk: 9 },
  imiona: [
    { okres: "1720–1765", n: 9, top: [["Wojciech", 2]], rest: "Paweł, Marianna, Antoni, Adam, Kacper, Agnieszka, Barbara", src: "akty" },
    { okres: "1786–1821", n: 25, top: [["Marianna", 3], ["Rozalia", 3], ["Wojciech", 2], ["Stanisław", 2], ["Jan", 2]], src: "akty" },
    { okres: "1823–1865", n: 56, top: [["Marianna", 10], ["Adam", 5], ["Katarzyna", 5], ["Mateusz", 4], ["Jakub", 3], ["Jan", 3]], src: "akty" },
    { okres: "1866–1914", n: 67, top: [["Marianna", 7], ["Franciszek", 6], ["Jan", 4], ["Aleksander", 4], ["Stanisław", 4], ["Julianna", 4]], src: "FB" },
  ],
  limits: [
    "Księgi mają dziury: brak zgonów 1806–1825 (przeglądane tylko do 1810, a VII 1805–VII 1807 w księdze brakuje). Rocznik 1828 jest zalany, 1845 i 1849 nadpalone.",
    "Lata 1866–1926 znamy głównie z indeksów i strony FB I. Antosiaka (źródło wtórne). Zgonów z tych lat nie przeglądaliśmy po kolei, więc dla dzieci Feliksa i Franciszka nie da się policzyć procentu.",
    "Wiek w aktach to często szacunek księdza (okrągłe „60”, „70”). Gdzie mamy chrzest, liczymy z dat. Wiek w akcie zgonu różni się od prawdziwego średnio o 2,8 roku (12 osób z chrztem); w akcie ślubu tylko u 3 z 15 osób, o 1–2 lata.",
    "Większość aktów z lat 1826–1865 przeczytano raz („1 odczyt” na stronie aktów).",
    "Liczby są małe (od kilku do kilkudziesięciu osób w grupie), więc to obraz jednej rodziny z Połoni, a nie średnia dla Kurpiów.",
  ],
};
