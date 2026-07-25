// Elements
const navbar = document.querySelector(".navbar");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Sticky Navbar
window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// Music Toggle
musicBtn.addEventListener("click", () => {

    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "🔊";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵";
    }

});

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

    lightboxImage.src=images[index].src;

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

menuToggle.addEventListener("click",()=>{

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

});

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

setInterval(createPetal,600);


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

setInterval(createSparkle,500);