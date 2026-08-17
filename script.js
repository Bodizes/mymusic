const musicas = [
    {
        nome: "Música 1",
        arquivo: "musicas/musica1.mp3"
    },

    {
        nome: "Música 2",
        arquivo: "musicas/musica2.mp3"
    },

    {
        nome: "Música 3",
        arquivo: "musicas/musica3.mp3"
    }
];


const lista = document.getElementById("musicList");
const player = document.getElementById("audioPlayer");
const titulo = document.getElementById("musicTitle");


musicas.forEach((musica) => {

    const item = document.createElement("div");

    item.className = "song";

    item.innerHTML = `
        <span class="song-icon">🎵</span>
        <span class="song-name">${musica.nome}</span>
    `;

    item.addEventListener("click", () => {

        player.src = musica.arquivo;

        titulo.textContent = musica.nome;

        player.play();

    });

    lista.appendChild(item);

});
