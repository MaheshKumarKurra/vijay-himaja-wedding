const landingContainer = document.getElementById("landingContainer");
const landingVideo = document.getElementById("landingVideo");

const openingContainer = document.getElementById("openingContainer");
const openingVideo = document.getElementById("openingVideo");

const website = document.getElementById("website");

const seal = document.getElementById("seal");

let heroStarted = false;

// Click Seal
seal.addEventListener("click", () => {

    seal.disabled = true;

    landingVideo.pause();

landingMusic.pause();

landingMusic.currentTime = 0;

openingMusic.currentTime = 0;

openingMusic.volume = 1;

openingMusic.play();

    openingVideo.currentTime = 0;

    openingContainer.style.display = "block";

    openingVideo.play().then(() => {

        requestAnimationFrame(() => {

            landingContainer.style.display = "none";

        });

    });

});

// Hero Reveal
openingVideo.addEventListener("timeupdate", () => {

    if (!heroStarted && openingVideo.currentTime >= 4.2) {

        openingMusic.pause();

openingMusic.currentTime = 0;

weddingMusic.volume = 0.4;

weddingMusic.play();

        heroStarted = true;

        website.classList.add("show");

        const hero = document.querySelector(".hero");

        hero.classList.add("reveal");

        openingContainer.style.transition = "opacity .8s ease";
        openingContainer.style.opacity = "0";

    }

});

// Finish
openingVideo.addEventListener("ended", () => {

    openingContainer.remove();

    document.body.style.overflow = "auto";

});