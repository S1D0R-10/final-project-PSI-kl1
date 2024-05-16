const pytania = [
    {
        pytanie: "Jaka jest stolica Polski?",
        odpowiedzi: ["Warszawa", "Kraków", "Gdańsk", "Wrocław"],
        poprawna: "Warszawa",
        podpowiedz: "To miasto jest również największym miastem w Polsce."
    },
    {
        pytanie: "Ile to 2 + 2?",
        odpowiedzi: ["3", "4", "5", "6"],
        poprawna: "4",
        podpowiedz: "To wynik dodawania dwóch liczb."
    }
    // Dodaj więcej pytań tutaj
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
            alert("Koniec quizu!");
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
