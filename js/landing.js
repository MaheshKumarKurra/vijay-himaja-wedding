const landingContainer = document.getElementById("landingContainer");
/*const landingVideo = document.getElementById("landingVideo");

const openingContainer = document.getElementById("openingContainer");
const openingVideo = document.getElementById("openingVideo");*/

const introVideo = document.getElementById("introVideo");

const LOOP_END = 4.5;

let introUnlocked = false;

const website = document.getElementById("website");

const seal = document.getElementById("seal");

let heroStarted = false;

// Click Seal
seal.addEventListener("click", () => {

    seal.disabled = true;
    seal.blur();
    seal.classList.add("opened");
    seal.style.pointerEvents = "none";

    seal.style.animation = "none";

    introUnlocked = true;

    landingMusic.pause();
landingMusic.currentTime = 0;

openingMusic.volume = 1;
openingMusic.currentTime = 0;

introVideo.currentTime = LOOP_END;

introVideo.play();

openingMusic.play().catch(console.error);

});

// Hero Reveal
introVideo.addEventListener("timeupdate", () => {

    if (!heroStarted && introVideo.currentTime >= 8.8) {

        openingMusic.pause();

openingMusic.currentTime = 0;

weddingMusic.volume = 0.4;

weddingMusic.play();

        heroStarted = true;

        website.classList.add("show");

        const hero = document.querySelector(".hero");

        hero.classList.add("reveal");

        landingContainer.style.transition = "opacity .8s ease";
        landingContainer.style.opacity = "0";

    }

});

// Finish
introVideo.addEventListener("ended", () => {

    landingContainer.remove();

document.body.style.overflow = "auto";

document.documentElement.style.overflow = "auto";

});

introVideo.addEventListener("timeupdate",()=>{

    if(!introUnlocked &&
       introVideo.currentTime>=LOOP_END){

        introVideo.currentTime=0;

        introVideo.play();

    }

});