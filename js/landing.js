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

    // Wait until the browser has enough data to play
    openingVideo.addEventListener("canplay", function start() {

        openingVideo.removeEventListener("canplay", start);

        openingVideo.play();

        landingContainer.style.display = "none";

    });

    openingVideo.load();

});

openingVideo.addEventListener("ended", () => {

    window.location.replace("main.html");

});