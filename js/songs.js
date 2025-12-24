const songItems = document.querySelectorAll(".song-item");

songItems.forEach((item) => {
    const button = item.querySelector(".song-icon");
    const audio = item.querySelector("audio");

    button.addEventListener("click", () => {
        // Pause other audios
        document.querySelectorAll("audio").forEach((a) => {
            if (a !== audio) {
                a.pause();
                a.currentTime = 0;
                a.closest(".song-item").querySelector(".song-icon").textContent = "▶️";
            }
        });

        if (audio.paused) {
            audio.play();
            button.textContent = "⏸️";
        } else {
            audio.pause();
            button.textContent = "▶️";
        }
    });

    audio.addEventListener("ended", () => {
        button.textContent = "▶️";
    });
});