const musicas = [
    {
        nome: "Minha música",
        arquivo: "musicas/minha-musica.mp3"
    }
];

const lista = document.getElementById("musicList");
const player = document.getElementById("audioPlayer");
const titulo = document.getElementById("musicTitle");

const playButton = document.getElementById("playButton");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

let musicaAtual = 0;


// FORMATA TEMPO

function formatTime(seconds) {

    if (isNaN(seconds)) {
        return "0:00";
    }

    const minutos = Math.floor(seconds / 60);

    const segundos = Math.floor(seconds % 60)
        .toString()
        .padStart(2, "0");

    return `${minutos}:${segundos}`;
}


// CARREGAR MÚSICA

function carregarMusica(index) {

    musicaAtual = index;

    const musica = musicas[musicaAtual];

    player.src = musica.arquivo;

    titulo.textContent = musica.nome;

    document.querySelectorAll(".song").forEach((item, i) => {

        item.classList.toggle(
            "active",
            i === musicaAtual
        );

    });

    playButton.textContent = "▶";
}


// LISTAR MÚSICAS

musicas.forEach((musica, index) => {

    const item = document.createElement("div");

    item.className = "song";

    item.innerHTML = `
        <span class="song-icon">♫</span>
        <span class="song-name">${musica.nome}</span>
    `;

    item.addEventListener("click", () => {

        carregarMusica(index);

        player.play();

        playButton.textContent = "❚❚";

    });

    lista.appendChild(item);
});


// PLAY / PAUSE

playButton.addEventListener("click", () => {

    if (!player.src) {
        carregarMusica(0);
    }

    if (player.paused) {

        player.play();

        playButton.textContent = "❚❚";

    } else {

        player.pause();

        playButton.textContent = "▶";
    }

});


// PRÓXIMA

nextButton.addEventListener("click", () => {

    musicaAtual++;

    if (musicaAtual >= musicas.length) {
        musicaAtual = 0;
    }

    carregarMusica(musicaAtual);

    player.play();

    playButton.textContent = "❚❚";
});


// ANTERIOR

previousButton.addEventListener("click", () => {

    musicaAtual--;

    if (musicaAtual < 0) {
        musicaAtual = musicas.length - 1;
    }

    carregarMusica(musicaAtual);

    player.play();

    playButton.textContent = "❚❚";
});


// ATUALIZAR BARRA

player.addEventListener("timeupdate", () => {

    if (!player.duration) return;

    progress.value =
        (player.currentTime / player.duration) * 100;

    currentTime.textContent =
        formatTime(player.currentTime);
});


// DURAÇÃO

player.addEventListener("loadedmetadata", () => {

    duration.textContent =
        formatTime(player.duration);
});


// CLICAR NA BARRA

progress.addEventListener("input", () => {

    if (!player.duration) return;

    player.currentTime =
        (progress.value / 100) * player.duration;
});


// QUANDO TERMINAR

player.addEventListener("ended", () => {

    musicaAtual++;

    if (musicaAtual >= musicas.length) {
        musicaAtual = 0;
    }

    carregarMusica(musicaAtual);

    player.play();

    playButton.textContent = "❚❚";
});


// CARREGAR PRIMEIRA MÚSICA

carregarMusica(0);
