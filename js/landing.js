const landingContainer = document.getElementById("landingContainer");
const landingVideo = document.getElementById("landingVideo");

const openingContainer = document.getElementById("openingContainer");
const openingVideo = document.getElementById("openingVideo");

const seal = document.getElementById("seal");

seal.addEventListener("click", () => {

    seal.disabled = true;

    landingVideo.pause();

    openingVideo.currentTime = 0;

    openingContainer.style.display = "block";
    openingContainer.style.opacity = "1";

    openingVideo.play();

    openingVideo.addEventListener("playing", () => {

        landingContainer.style.display = "none";

    }, { once:true });

});

openingVideo.addEventListener("ended", () => {

    window.location.replace("main.html");

});