const pytania = [
    {
        pytanie: "Jak definiujemy funkcje ?",
        odpowiedzi: ["def", "dof", "deffin", "dedif"],
        poprawna: "def",
        podpowiedz: "jest to skrót od słowa deffine z ang definiowac"
    },
    {
        pytanie: "jak obliczyć długość listy ?",
        odpowiedzi: ["len", "count", "licz", "lon"],
        poprawna: "len",
        podpowiedz: "Zaczyna sie na len"
    },
    {
        pytanie: "jak wypisac tekst w py ?",
        odpowiedzi: ["alert", "print", "prn", "lnr"],
        poprawna: "print",
        podpowiedz: "z ang. Drukuj"
    },
    {
        pytanie: "Jak utworzyć zmienna ?",
        odpowiedzi: ["x - 10", "x / 10", "x = 10", "x ; 10"],
        poprawna: "x = 10",
        podpowiedz: "{nazwa zmiennej} = {nasza wartość}"
    },
    {
        pytanie: "jeden z programow do edycji py",
        odpowiedzi: ["pycharm", "webstrom", "cmd", "terminal"],
        poprawna: "pycharm",
        podpowiedz: "zaczyna sie na p xD"
    },
];

let aktualnePytanie = 0;

const pytanieElem = document.getElementById("pytanie");
const odpowiedziElem = document.getElementById("odpowiedzi");
const podpowiedzElem = document.getElementById("podpowiedz");
const cardElem = document.getElementById("question-card");
const przyciskPowrotu = document.getElementById("przycisk-powrotu");

function pokazPytanie() {
    const pytanie = pytania[aktualnePytanie];
    pytanieElem.textContent = pytanie.pytanie;
    odpowiedziElem.innerHTML = "";

    pytanie.odpowiedzi.forEach(odpowiedz => {
        const przycisk = document.createElement("button");
        przycisk.textContent = odpowiedz;
        przycisk.onclick = () => sprawdzOdpowiedz(odpowiedz);
        odpowiedziElem.appendChild(przycisk);
    });
}

function sprawdzOdpowiedz(odpowiedz) {
    const pytanie = pytania[aktualnePytanie];
    if (odpowiedz === pytanie.poprawna) {
        aktualnePytanie++;
        if (aktualnePytanie < pytania.length) {
            pokazPytanie();
        } else {
            alert("Koniec quizu wróc na strone główną");
        }
    } else {
        podpowiedzElem.textContent = pytanie.podpowiedz;
        cardElem.classList.add("flipped");
    }
}

przyciskPowrotu.onclick = () => {
    cardElem.classList.remove("flipped");
};

pokazPytanie();
