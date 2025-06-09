
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const volumeSlider = document.getElementById("volume-slider");

    // Ambil dari localStorage
    if (localStorage.getItem("musicTime")) {
        audio.currentTime = parseFloat(localStorage.getItem("musicTime"));
    }
    if (localStorage.getItem("musicVolume")) {
        audio.volume = parseFloat(localStorage.getItem("musicVolume"));
        volumeSlider.value = audio.volume;
    }
    if (localStorage.getItem("musicPaused") === "false") {
        audio.play().catch(() => {});
    }

    // Simpan posisi dan status
    setInterval(() => {
        localStorage.setItem("musicTime", audio.currentTime);
        localStorage.setItem("musicPaused", audio.paused);
    }, 500);

    volumeSlider.addEventListener("input", function () {
        audio.volume = this.value;
        localStorage.setItem("musicVolume", this.value);
    });

    playBtn.addEventListener("click", () => {
        audio.play();
        localStorage.setItem("musicPaused", "false");
    });

    pauseBtn.addEventListener("click", () => {
        audio.pause();
        localStorage.setItem("musicPaused", "true");
    });

    document.getElementById("menu-btn").addEventListener("click", () => {
        document.getElementById("menu-dropdown").classList.toggle("hidden");
    });

    document.getElementById("options-btn").addEventListener("click", () => {
        document.getElementById("options-panel").classList.toggle("hidden");
    });
});
