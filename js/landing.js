const landingContainer = document.getElementById("landingContainer");

const landingVideo = document.getElementById("landingVideo");

const openingContainer = document.getElementById("openingContainer");

const openingVideo = document.getElementById("openingVideo");

const seal = document.getElementById("seal");



/* Click Seal */

seal.addEventListener("click", () => {

    /* Stop landing */

    landingVideo.pause();

    /* Hide landing */

    landingContainer.style.display = "none";

    /* Show opening */

    openingContainer.style.display = "block";

    /* Start from beginning */

    openingVideo.currentTime = 0;

    openingVideo.play();

});



/* Opening Finished */

openingVideo.addEventListener("ended", () => {

    /*
       Replace with your website page
    */

    window.location.href = "main.html";

});