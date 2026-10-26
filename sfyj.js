const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function nextPage(pageNumber) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const targetPage = document.getElementById("page" + pageNumber);

    if (targetPage) {
        targetPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function startWeb() {
    nextPage(2);

    music.play()
        .then(function() {
            musicBtn.textContent = "♫ Music ON";
        })
        .catch(function() {
            musicBtn.textContent = "♫ Tap to Play";
        });
}

function toggleMusic() {
    if (music.paused) {
        music.play()
            .then(function() {
                musicBtn.textContent = "♫ Music ON";
            })
            .catch(function() {
                musicBtn.textContent = "♫ Tap to Play";
            });
    } else {
        music.pause();
        musicBtn.textContent = "♫ Music OFF";
    }
}