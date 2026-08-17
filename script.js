const musicas = [
    {
        nome: "Minha música",
        arquivo: "musicas/minha-musica.mp3"
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
