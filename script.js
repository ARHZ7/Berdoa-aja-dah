const messages = [
    "Kamu beneran?",
    "Benar-benar yakin??",
    "Liennn please...",
    "Jangan lakukan begitu :(",
    "Aku akan membelikan kamu coklat 🍫",
    "Aku bakalan kasih hoodieku",
    "Aku bahkan akan membiarkanmu menang dalam permainan",
    "Kalau kamu bilang tidak, aku bakalan menghitam...",
    "Aku jadi pria sadboy...",
    "Aku benar benar sedih :(",
    "Aku menangis sekarang...",
    "Hati aku hancur sekarang... 💔",
    "Plesss lienn manis, cantik, dan imuttt :)",
    "Dah lah, aku akan berhenti meminta...",
    "Bercandaa hehehehe, sekarang pilih YESSS lien :) ❤️"
];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}