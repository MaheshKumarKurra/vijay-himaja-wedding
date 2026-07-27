// Elements
const navbar = document.querySelector(".navbar");
const musicBtn = document.getElementById("musicBtn");

window.addEventListener("load", () => {

    landingMusic.volume = 0.35;

    landingMusic.play()
        .then(() => {

            console.log("Landing music started");

        })
        .catch((err) => {

            console.log("Autoplay blocked:", err);

        });

});

// Sticky Navbar
window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// Music Toggle
/*musicBtn.addEventListener("click", () => {

    if (weddingMusic.paused) {

    weddingMusic.play();

    musicBtn.innerHTML = "🔊";

} else {

    weddingMusic.pause();

    musicBtn.innerHTML = "🎵";

}

});*/

// Countdown

const weddingDate = new Date("September 5, 2026 10:46:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    document.getElementById("days").textContent =
        Math.floor(distance/(1000*60*60*24));

    document.getElementById("hours").textContent =
        Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    document.getElementById("minutes").textContent =
        Math.floor((distance%(1000*60*60))/(1000*60));

    document.getElementById("seconds").textContent =
        Math.floor((distance%(1000*60))/1000);

}

updateCountdown();

setInterval(updateCountdown,1000);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".person-card,.time-box,.timeline-content").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


const form = document.querySelector(".rsvp-form");

const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function(e){

    e.preventDefault();

    popup.classList.add("show");

    setTimeout(()=>{

    popup.classList.remove("show");

},3000);

    form.reset();

});

closePopup.addEventListener("click",()=>{

    popup.classList.remove("show");

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.remove("show");

    }

});

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeLightbox = document.querySelector(".close-lightbox");

const prevBtn = document.querySelector(".lightbox-prev");

const nextBtn = document.querySelector(".lightbox-next");

const currentImage = document.getElementById("currentImage");

const totalImages = document.getElementById("totalImages");

const images = [...galleryItems].map(item=>item.querySelector("img"));

let currentIndex=0;

totalImages.textContent=images.length;

function openLightbox(index){

    currentIndex=index;

    lightbox.classList.add("active");

    lightboxImage.style.opacity=0;

setTimeout(()=>{

lightboxImage.src=images[index].src;

lightboxImage.style.opacity=1;

},150);

    lightboxImage.alt=images[index].alt;

    currentImage.textContent=index+1;

}

galleryItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        openLightbox(index);

    });

});

nextBtn.addEventListener("click",()=>{

    currentIndex=(currentIndex+1)%images.length;

    openLightbox(currentIndex);

});

prevBtn.addEventListener("click",()=>{

    currentIndex=(currentIndex-1+images.length)%images.length;

    openLightbox(currentIndex);

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX;

    handleSwipe();

});

function handleSwipe() {

    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) < 50) return;

    if (swipeDistance < 0) {

        nextBtn.click();

    } else {

        prevBtn.click();

    }

}

const sections = document.querySelectorAll("header, section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(window.scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const progress=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const height=document.documentElement.scrollHeight-window.innerHeight;

    const progressWidth=(window.scrollY/height)*100;

    progress.style.width=progressWidth+"%";

});

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.querySelector(".nav-links");

const menuOverlay = document.getElementById("menuOverlay");

/*menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("show");

    menuOverlay.classList.toggle("show");

    document.body.classList.toggle("menu-open");

    menuToggle.classList.toggle("active");

});

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("show");

        menuOverlay.classList.remove("show");

        document.body.classList.remove("menu-open");

        menuToggle.classList.remove("active");

    });

});

menuOverlay.addEventListener("click",()=>{

    navMenu.classList.remove("show");

    menuOverlay.classList.remove("show");

    document.body.classList.remove("menu-open");

    menuToggle.classList.remove("active");

});*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});

window.addEventListener("resize",()=>{

    if(window.innerWidth>768){

        navMenu.classList.remove("show");

        menuOverlay.classList.remove("show");

        menuToggle.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

});

const petalsContainer = document.getElementById("petals-container");

function createPetal(){

    const petal = document.createElement("span");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.fontSize = (16 + Math.random()*18) + "px";

    petal.style.animationDuration = (8 + Math.random()*6) + "s";

    petalsContainer.appendChild(petal);

    petal.addEventListener("animationend",()=>{

        petal.remove();

    });

}

//setInterval(createPetal,600);


const sparkleContainer=document.getElementById("sparkles");

function createSparkle(){

    const star=document.createElement("span");

    star.className="sparkle";

    star.innerHTML="✨";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=(8+Math.random()*12)+"px";

    sparkleContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },4000);

}

//setInterval(createSparkle,500);


/* ==========================================
        PREMIUM SCRATCH CARD
========================================== */

let revealed = false;

const scratchCanvas =
document.getElementById("overlayScratchCanvas");

const wrapper =
document.querySelector(".scratch-wrapper");

const overlay = document.getElementById("dateOverlay");

scratchCanvas.width = wrapper.offsetWidth;

scratchCanvas.height = wrapper.offsetHeight;

if (scratchCanvas) {

    const ctx = scratchCanvas.getContext("2d", {
        willReadFrequently: true
    });

    const foil = new Image();

    foil.src = "assets/images/gold-foil.png";

    let scratching = false;


    function resizeCanvas() {

        scratchCanvas.width = scratchCanvas.offsetWidth;

        scratchCanvas.height = scratchCanvas.offsetHeight;

        drawFoil();

    }

    function drawFoil() {

        if (!foil.complete) return;

        ctx.globalCompositeOperation = "source-over";

        ctx.clearRect(
            0,
            0,
            scratchCanvas.width,
            scratchCanvas.height
        );

        ctx.drawImage(
            foil,
            0,
            0,
            scratchCanvas.width,
            scratchCanvas.height
        );

        ctx.globalCompositeOperation = "destination-out";

    }

    foil.onload = () => {

    resizeCanvas();

};

    window.addEventListener("resize", resizeCanvas);

    function scratch(x, y) {

        ctx.beginPath();

        ctx.arc(
            x,
            y,
            28,
            0,
            Math.PI * 2
        );

        ctx.fill();

        checkProgress();

    }

    function getPoint(e) {

        const rect = scratchCanvas.getBoundingClientRect();

        if (e.touches) {

            return {

                x: e.touches[0].clientX - rect.left,

                y: e.touches[0].clientY - rect.top

            };

        }

        return {

            x: e.clientX - rect.left,

            y: e.clientY - rect.top

        };

    }

    scratchCanvas.addEventListener("mousedown", () => {

        scratching = true;

    });

    scratchCanvas.addEventListener("mouseup", () => {

        scratching = false;

    });

    scratchCanvas.addEventListener("mouseleave", () => {

        scratching = false;

    });

    scratchCanvas.addEventListener("mousemove", (e) => {

        if (!scratching) return;

        const p = getPoint(e);

        scratch(p.x, p.y);

    });

    scratchCanvas.addEventListener("touchstart", () => {

        scratching = true;

    });

    scratchCanvas.addEventListener("touchend", () => {

        scratching = false;

    });

    scratchCanvas.addEventListener("touchmove", (e) => {

        e.preventDefault();

        if (!scratching) return;

        const p = getPoint(e);

        scratch(p.x, p.y);

    });

    function checkProgress() {

        if (revealed) return;

        const pixels = ctx.getImageData(
            0,
            0,
            scratchCanvas.width,
            scratchCanvas.height
        ).data;

        let transparent = 0;

        for (let i = 3; i < pixels.length; i += 4) {

            if (pixels[i] === 0) {

                transparent++;

            }

        }

        const totalPixels =
    scratchCanvas.width *
    scratchCanvas.height;

const percent =
    (transparent / totalPixels) * 100;

        if (percent>=25) {

    revealed = true;

    scratchCanvas.style.transition = ".8s ease";

    scratchCanvas.style.opacity = "0";

    setTimeout(() => {

        scratchCanvas.remove();

        document.getElementById("continueHint")
            .classList.add("show");

            setTimeout(() => {

            closeReveal();

        }, 3000)

    },800);

}
function closeReveal() {

    overlay.classList.remove("show");

    website.style.overflowY = "auto";

    heroTeaser.innerHTML = `
        <div class="hero-date-wrapper">
            <img
                src="assets/images/wedding-date.png"
                class="hero-date-card"
                alt="Wedding Date">
        </div>
    `;

}

    }

}

const continueHint =
document.getElementById("continueHint");

overlay.addEventListener("click", () => {

    if(!revealed) return;

    closeReveal();

});

const websiteContainer = document.getElementById("website");
const hero = document.querySelector(".hero");

let modalOpened = false;

websiteContainer.addEventListener("scroll", () => {

    const triggerPoint = 180;

    

    if (
        websiteContainer.scrollTop >= triggerPoint &&
        !modalOpened
    ) {

        console.log("OPENING MODAL");

        modalOpened = true;

        websiteContainer.style.overflowY = "hidden";

        overlay.classList.add("show");

    }

});
