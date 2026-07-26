const landingContainer = document.getElementById("landingContainer");

const landingVideo = document.getElementById("landingVideo");

const openingContainer = document.getElementById("openingContainer");

const openingVideo = document.getElementById("openingVideo");

const seal = document.getElementById("seal");



/* Click Seal */

seal.addEventListener("click", () => {

    landingVideo.pause();

    openingVideo.currentTime = 0;

    openingContainer.style.display = "block";

    openingVideo.play().then(() => {

        requestAnimationFrame(() => {

            landingContainer.style.display = "none";

        });

    });

});



/* Opening Finished */

openingVideo.addEventListener("ended", () => {

    /*
       Replace with your website page
    */

    window.location.href = "main.html";

});