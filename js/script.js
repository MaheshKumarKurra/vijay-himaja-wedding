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


/*=============================
  TIMELINE POSITIONING
=============================*/

function positionTimeline(){

    const timeline = document.querySelector(".timeline");
    const line = document.querySelector(".timeline-line");
    const lotus = document.querySelector(".timeline-lotus");

    const rows = [
        document.getElementById("haldi-row"),
        document.getElementById("mehendi-row"),
        document.getElementById("wedding-row"),
        document.getElementById("lunch-row")
    ];

    const dots = [
        document.getElementById("dot-haldi"),
        document.getElementById("dot-mehendi"),
        document.getElementById("dot-wedding"),
        document.getElementById("dot-lunch")
    ];

    if (!timeline || !line || !lotus) return;
    if (rows.some(row => !row) || dots.some(dot => !dot)) return;

    const firstCenter =
        rows[0].offsetTop + rows[0].offsetHeight / 2;

    const lastCenter =
        rows[3].offsetTop + rows[3].offsetHeight / 2;

    const LOTUS_OFFSET = 55;

    timeline.style.top = `${firstCenter - LOTUS_OFFSET}px`;
    line.style.height = `${lastCenter - firstCenter}px`;
    lotus.style.top = `${-LOTUS_OFFSET}px`;

    rows.forEach((row, index) => {

        const center =
            row.offsetTop + row.offsetHeight / 2;

        dots[index].style.top =
            `${center - firstCenter}px`;

    });

}

/*====================================
  TIMELINE SCROLL ANIMATION
====================================*/

function moveTimeline(index){

    const timeline = document.querySelector(".timeline");
    const lotus = document.querySelector(".timeline-lotus");

    const dots = [
        document.getElementById("dot-haldi"),
        document.getElementById("dot-mehendi"),
        document.getElementById("dot-wedding"),
        document.getElementById("dot-lunch")
    ];

    const LOTUS_OFFSET = 55;

    lotus.style.top =
        `${timeline.offsetTop + dots[index].offsetTop - LOTUS_OFFSET}px`;

    dots.forEach((dot,i)=>{

        dot.classList.toggle("active", i <= index);

    });

}

positionTimeline();

moveTimeline(0);

window.addEventListener("load", () => {
    positionTimeline();
    moveTimeline(0);
});

window.addEventListener("resize", () => {
    positionTimeline();
    moveTimeline(0);
});



/*======================================================
BACKUP - OLD CELEBRATION MODULE
Date: 2026-07-29

/*====================================
  CELEBRATION MODAL
====================================*/

/*======================================================

const celebrationModal =
document.getElementById("celebrationModal");

const celebrationImage =
document.getElementById("celebrationModalImage");

const celebrationTitle =
document.getElementById("celebrationTitle");

const celebrationInstruction =
document.getElementById("celebrationInstruction");

const celebrationHint =
document.getElementById("celebrationHint");

let celebrationTimer;

function openCelebrationModal(data){

    console.log(data.title);

    celebrationImage.src = data.image;

    celebrationInstruction.style.display = "block";
celebrationInstruction.style.visibility = "visible";
celebrationInstruction.style.opacity = "1";

celebrationHint.style.display = "none";
celebrationHint.classList.remove("show");

    celebrationTitle.textContent = data.title;

    celebrationInstruction.textContent =
        data.instruction;

    const interaction =
document.getElementById(
"celebrationInteraction"
);

const haldiSkipBtn =
document.getElementById("haldiSkipBtn");

if(
    data.event==="haldi" &&
    haldiCompleted){

    finalHaldi();

    return;

}

if(data.event==="haldi"){

    haldiSkipBtn.style.display="flex";

}else{

    haldiSkipBtn.style.display="none";

}

interaction.innerHTML = "";

    celebrationModal.classList.add("show");

    if(data.event === "haldi"){

    initHaldiScratch();

}


    celebrationHint.classList.remove("show");

}

function closeCelebrationModal(){

    celebrationInstruction.style.display="block";

celebrationInstruction.style.opacity="1";

celebrationHint.classList.remove("show");

celebrationHint.style.display="none";

document.getElementById("haldiSkipBtn")
.style.display="flex";

const canvas =
document.getElementById("haldiCanvas");

canvas.style.display="block";
canvas.style.opacity="1";
canvas.style.pointerEvents="auto";


    clearTimeout(celebrationTimer);

    document.querySelector(".celebration-card-wrapper")
.style.transform =
"translateY(0) scale(1)";

}

const modalDialog =
document.querySelector(".celebration-dialog");

const backdrop =
document.querySelector(".celebration-backdrop");

modalDialog.addEventListener("click",(e)=>{

    e.stopPropagation();

});

celebrationModal.addEventListener("click",(e)=>{

    if(
        !document
        .querySelector(".celebration-dialog")
        .contains(e.target)
    ){

        closeCelebrationModal();

    }

});


document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeCelebrationModal();

    }

});

const celebrationData = {

    haldi:{
    event:"haldi",
    title:"Haldi",

        image:"assets/images/haldi-card.png",

        instruction:"Rub the turmeric to bless the couple."

    },

    mehendi:{

        event:"mehendi",

        title:"Mehendi",

        image:"assets/images/mehendi-card.png",

        instruction:"Draw a mehendi design to reveal the invitation."

    },

    wedding:{

        event:"wedding",

        title:"Wedding",

        image:"assets/images/wedding-card.png",

        instruction:"Press and hold the Shehnai for 3 seconds."

    },

    lunch:{

        event:"lunch",

        title:"Lunch",

        image:"assets/images/lunch-card.png",

        instruction:"Lift the banana leaf to reveal the feast."

    }

};

const celebrationCards =
document.querySelectorAll(".event-card");

celebrationCards.forEach(card=>{

    card.addEventListener("click",()=>{

        const eventName = card.dataset.event;

        if(eventName==="haldi"){

            if(haldiCompleted){

                finalHaldi();

            }else{

                openCelebrationModal(
                    celebrationData[eventName]
                );

            }

            return;

        }

        if(!card.classList.contains("locked")) return;

        openCelebrationModal(
            celebrationData[eventName]
        );

    });

});

====================================*/


/*====================================
  HALDI SCRATCH
====================================*/

/*====================================

let haldiCanvas;
let haldiCtx;

let haldiScratching = false;
let haldiRevealed = false;

let haldiCompleted = false;

function initHaldiScratch(){

    haldiCanvas =
    document.getElementById("haldiCanvas");

    celebrationInstruction.style.display = "block";

celebrationHint.style.display = "none";

haldiCanvas.style.display = "block";

    if(!haldiCanvas) return;

    haldiCtx =
    haldiCanvas.getContext("2d",{
        willReadFrequently:true
    });

    haldiCanvas.width =
    haldiCanvas.offsetWidth;

    haldiCanvas.height =
    haldiCanvas.offsetHeight;

    haldiScratching = false;
    haldiRevealed = false;

    haldiCanvas.style.opacity = "1";
haldiCanvas.style.pointerEvents = "auto";

    drawHaldiOverlay();

    bindHaldiEvents();

}

function drawHaldiOverlay(){

    const texture = new Image();

    texture.src =
    "assets/images/haldi-overlay.png";

    texture.onload = ()=>{

        haldiCtx.globalCompositeOperation =
        "source-over";

        haldiCtx.clearRect(
            0,
            0,
            haldiCanvas.width,
            haldiCanvas.height
        );

        haldiCtx.drawImage(

            texture,

            0,

            0,

            haldiCanvas.width,

            haldiCanvas.height

        );

    };

}

function bindHaldiEvents(){

    haldiCanvas.onmousedown=()=>{

        haldiScratching=true;

        document.getElementById("haldiSkipBtn")
        .style.display = "none";

    };

    haldiCanvas.onmouseup=()=>{

        haldiScratching=false;

    };

    haldiCanvas.onmouseleave=()=>{

        haldiScratching=false;

    };

    haldiCanvas.onmousemove=(e)=>{

        if(!haldiScratching) return;

        const p=getHaldiPoint(e);

        rubHaldi(p.x,p.y);

    };

    haldiCanvas.ontouchstart=()=>{

        haldiScratching=true;

        document.getElementById("haldiSkipBtn")
        .style.display = "none";

    };

    haldiCanvas.ontouchend=()=>{

        haldiScratching=false;

    };

    haldiCanvas.ontouchmove=(e)=>{

        e.preventDefault();

        if(!haldiScratching) return;

        const p=getHaldiPoint(e);

        rubHaldi(p.x,p.y);

    };

}

function getHaldiPoint(e){

    const rect = haldiCanvas.getBoundingClientRect();

    if(e.touches){

        return{

            x:e.touches[0].clientX-rect.left,

            y:e.touches[0].clientY-rect.top

        };

    }

    return{

        x:e.clientX-rect.left,

        y:e.clientY-rect.top

    };

}

function rubHaldi(x,y){

    if(haldiRevealed) return;

    haldiCtx.globalCompositeOperation =
    "destination-out";

    haldiCtx.beginPath();

    haldiCtx.arc(

        x,

        y,

        32,

        0,

        Math.PI*2

    );

    haldiCtx.fill();
    checkHaldiProgress();

}

const haldiSkipBtn =
document.getElementById("haldiSkipBtn");

haldiSkipBtn.addEventListener("click",()=>{

    if(haldiRevealed) return;

    haldiSkipBtn.style.display = "none";



    haldiCanvas.style.transition =
    "opacity .8s ease";

haldiCanvas.style.opacity = "0";

setTimeout(()=>{

    finishHaldi();

},800);

});

function checkHaldiProgress(){

    if(haldiRevealed) return;

    const pixels = haldiCtx.getImageData(

        0,

        0,

        haldiCanvas.width,

        haldiCanvas.height

    ).data;

    let transparent = 0;

    for(let i=3;i<pixels.length;i+=4){

        if(pixels[i]===0){

            transparent++;

        }

    }

    const total =
        haldiCanvas.width *
        haldiCanvas.height;

    const percent =
        (transparent/total)*100;

    if(percent>=50){

        finishHaldi();

    }

}

function finishHaldi(){

    if(haldiRevealed) return;

    haldiRevealed = true;

    haldiCompleted = true;

    haldiCanvas.style.transition =
        "opacity .8s ease";

    haldiCanvas.style.opacity = "0";

    setTimeout(()=>{

        haldiCanvas.style.pointerEvents = "none";

        // ⭐ Add it here
        document.querySelector(".celebration-card-wrapper")
            .style.transform = "translateY(-12px) scale(1.02)";

        celebrationInstruction.style.opacity = "0";

        setTimeout(()=>{

            celebrationInstruction.style.display = "none";

        
            celebrationHint.style.display = "block";
celebrationHint.classList.add("show");

        },300);

        createHaldiBurst();

        moveTimeline(1);

        const haldiCard =
document.querySelector(
'.event-card[data-event="haldi"]'
);

haldiCard.classList.remove("locked");

haldiCard.querySelector("img").style.filter =
"blur(0px)";

haldiCard.querySelector(".card-overlay")
.style.display = "none";

        celebrationTimer = setTimeout(()=>{

            closeCelebrationModal();

        },5000);

    },800);

}

function finalHaldi(){

    celebrationModal.classList.add("show");

    celebrationTitle.textContent = "Haldi";

    celebrationImage.src =
        "assets/images/haldi-card.png";

    celebrationHint.style.display = "block";
    celebrationHint.classList.add("show");

    celebrationInstruction.style.display = "none";

    
    celebrationHint.classList.add("show");
    celebrationHint.textContent =
        "✦ Tap anywhere to continue ✦";

    document.querySelector(".celebration-card-wrapper")
.style.transform =
"translateY(-12px) scale(1.02)";

celebrationImage.style.filter = "blur(0)";

    const canvas =
    document.getElementById("haldiCanvas");

    if(canvas){

        canvas.style.display = "none";

    }

    const skipBtn =
    document.getElementById("haldiSkipBtn");

    if(skipBtn){

        skipBtn.style.display = "none";

    }

}


function createHaldiBurst(){

    const wrapper =
    document.querySelector(".celebration-card-wrapper");

    for(let i=0;i<18;i++){

        const p=document.createElement("span");

        p.className="haldi-particle";

        p.innerHTML=Math.random()>.5?"✨":"🌼";

        p.style.left="50%";

        p.style.top="50%";

        p.style.setProperty(

            "--x",

            `${(Math.random()-.5)*220}px`

        );

        p.style.setProperty(

            "--y",

            `${(Math.random()-.5)*220}px`

        );

        wrapper.appendChild(p);

        p.addEventListener("animationend",()=>{

            p.remove();

        });

    }

}




Reason:
Replacing with Celebration Module V2.

======================================================*/




/*====================================
      CELEBRATION CONTROLLER V2
====================================*/

const Celebration = {

    

    modal:
        document.getElementById("celebrationModal"),

    dialog:
        document.querySelector(".celebration-dialog"),

    title:
        document.getElementById("celebrationTitle"),

    image:
        document.getElementById("celebrationModalImage"),

    instruction:
        document.getElementById("celebrationInstruction"),

    hint:
        document.getElementById("celebrationHint"),

    interaction:
        document.getElementById("celebrationInteraction"),

    wrapper:
        document.querySelector(".celebration-card-wrapper"),

    canvas:
        document.getElementById("haldiCanvas"),

    skip:
        document.getElementById("haldiSkipBtn"),

    timer:null,

    current:null,

    state:{

        haldi:false,

        mehendi:false,

        wedding:false,

        lunch:false

    }

};


Celebration.data = {

    haldi:{

        title:"Haldi",

        image:"assets/images/haldi-card.png",

        instruction:"Rub the turmeric to bless the couple."

    },

    mehendi:{

        title:"Mehendi",

        image:"assets/images/mehendi-card.png",

        instruction:"Draw a mehendi design to reveal the invitation."

    },

    wedding:{

        title:"Wedding",

        image:"assets/images/wedding-card.png",

        instruction:"Press and hold the Shehnai for 3 seconds."

    },

    lunch:{

        title:"Lunch",

        image:"assets/images/lunch-card.png",

        instruction:"Lift the banana leaf to reveal the feast."

    }

};


Celebration.reset=function(){

    clearTimeout(this.timer);

    this.instruction.style.display="block";
    this.instruction.style.opacity="1";
    this.instruction.style.visibility="visible";

    this.hint.classList.remove("show");

    this.wrapper.style.transform=
    "translateY(0) scale(1)";

    this.canvas.style.display="none";
    this.canvas.style.opacity="1";
    this.canvas.style.pointerEvents="auto";

    this.skip.style.display="none";

}

Celebration.show=function(){

    this.modal.classList.add("show");

}

Celebration.hide=function(){

    this.modal.classList.remove("show");

    this.reset();

}

Celebration.open=function(eventName){

    this.current=eventName;

    this.reset();

    const data = this.data[eventName];

    this.title.textContent=
        data.title;

    this.image.src=
        data.image;

    this.instruction.textContent=
        data.instruction;

    this.show();

    switch(eventName){

    case "haldi":

        if(this.state.haldi){

            showCompletedHaldi();

        }

        else{

            Haldi.init();

        }

    break;

    case "mehendi":

        if(this.state.mehendi){

            showCompletedMehendi();

        }

        else{

            Mehendi.init();

        }

    break;

    case "wedding":

    if(this.state.wedding){

        showCompletedWedding();

    }

    else{

        Wedding.init();

    }

    break;

}

}

Celebration.dialog.addEventListener("click",(e)=>{

    e.stopPropagation();

});

Celebration.dialog.addEventListener("click",(e)=>{

    e.stopPropagation();

});

Celebration.modal.addEventListener("click",()=>{

    clearTimeout(Celebration.timer);

    Celebration.hide();

});

document.addEventListener("keydown",(e)=>{

    if(

        e.key==="Escape" &&

        Celebration.modal.classList.contains("show")

    ){

        Celebration.hide();

    }

});

document
.querySelectorAll(".event-card")
.forEach(card=>{

    card.addEventListener("click",()=>{

        Celebration.open(

            card.dataset.event

        );

    });

});

/*====================================
        HALDI ENGINE
====================================*/

const Haldi={

    scratching:false,

    revealed:false,

    ctx:null,

    brushSize:34,

    threshold:35,

    texture:null

};

Haldi.init=function(){

    this.revealed=false;

    Celebration.canvas.style.display="block";

    Celebration.canvas.width=
        Celebration.canvas.offsetWidth;

    Celebration.canvas.height=
        Celebration.canvas.offsetHeight;

    Celebration.canvas.style.opacity="1";

    Celebration.canvas.style.pointerEvents="auto";

    Celebration.skip.style.display="flex";

    this.ctx=
        Celebration.canvas.getContext(
            "2d",
            {
                willReadFrequently:true
            }
        );

    this.loadTexture();

    this.bindEvents();

}

Haldi.loadTexture=function(){

    this.texture=new Image();

    this.texture.src=
        "assets/images/haldi-overlay.png";

    this.texture.onload=()=>{

        this.ctx.globalCompositeOperation=
        "source-over";

        this.ctx.clearRect(

            0,

            0,

            Celebration.canvas.width,

            Celebration.canvas.height

        );

        this.ctx.drawImage(

            this.texture,

            0,

            0,

            Celebration.canvas.width,

            Celebration.canvas.height

        );

    };

}

Haldi.getPoint=function(e){

    const rect=
        Celebration.canvas.getBoundingClientRect();

    if(e.touches){

        return{

            x:e.touches[0].clientX-rect.left,

            y:e.touches[0].clientY-rect.top

        };

    }

    return{

        x:e.clientX-rect.left,

        y:e.clientY-rect.top

    };

}

Haldi.scratch=function(x,y){

    if(this.revealed) return;

    this.ctx.globalCompositeOperation =
    "destination-out";

    for(let i=0;i<7;i++){

        const angle =
        Math.random()*Math.PI*2;

        const radius =
        Math.random()*18;

        const size =
        10 + Math.random()*12;

        this.ctx.beginPath();

        this.ctx.arc(

            x + Math.cos(angle)*radius,

            y + Math.sin(angle)*radius,

            size,

            0,

            Math.PI*2

        );

        this.ctx.fill();

    }

    this.checkProgress();

}

Haldi.bindEvents=function(){

    const canvas=Celebration.canvas;

    canvas.onmousedown=()=>{

        this.scratching=true;

        Celebration.skip.style.display="none";

    };

    canvas.onmouseup=()=>{

        this.scratching=false;

    };

    canvas.onmouseleave=()=>{

        this.scratching=false;

    };

    canvas.onmousemove=(e)=>{

        if(!this.scratching) return;

        const p=this.getPoint(e);

        this.scratch(

            p.x,

            p.y

        );

    };

    canvas.ontouchstart=()=>{

        this.scratching=true;

        Celebration.skip.style.display="none";

    };

    canvas.ontouchend=()=>{

        this.scratching=false;

    };

    canvas.ontouchmove=(e)=>{

        e.preventDefault();

        if(!this.scratching) return;

        const p=this.getPoint(e);

        this.scratch(

            p.x,

            p.y

        );

    };

}

Celebration.skip.onclick=()=>{

    if(Haldi.revealed) return;

    Celebration.skip.style.display="none";

    Celebration.canvas.style.transition=
        ".8s ease";

    Celebration.canvas.style.opacity="0";

    setTimeout(()=>{

        Haldi.complete();

    },800);

}

Haldi.checkProgress=function(){

    if(this.revealed) return;

    const pixels=this.ctx.getImageData(

        0,

        0,

        Celebration.canvas.width,

        Celebration.canvas.height

    ).data;

    let transparent=0;

    for(

        let i=3;

        i<pixels.length;

        i+=4

    ){

        if(pixels[i]===0){

            transparent++;

        }

    }

    const percent=

        transparent/

        (

            Celebration.canvas.width*

            Celebration.canvas.height

        )*100;

    if(percent>=this.threshold){

        this.complete();

    }

}

Haldi.complete=function(){

    if(this.revealed) return;

    this.revealed=true;

    Celebration.state.haldi=true;

    Celebration.canvas.style.transition=
        "opacity .8s ease";

    Celebration.canvas.style.opacity="0";

    setTimeout(()=>{

        Celebration.canvas.style.display="none";

        Celebration.wrapper.style.transform=
            "translateY(-10px) scale(1.03)";

        Celebration.instruction.style.opacity="0";

        setTimeout(()=>{

            Celebration.instruction.style.display="none";

        },300);

        Celebration.hint.classList.add("show");

        createHaldiBurst();

        unlockHaldiCard();

        moveTimeline(1);

        Celebration.timer =
setTimeout(()=>{

    if(
        Celebration.modal.classList
        .contains("show")
    ){

        Celebration.hide();

    }

},5000);

    },800);

}

function unlockHaldiCard(){

    Celebration.state.haldi = true;

    const card=
    document.querySelector(
        '.event-card[data-event="haldi"]'
    );

    card.classList.remove("locked");

    card.querySelector("img")
        .style.filter="blur(0px)";

    card.querySelector(".card-overlay")
        .style.display="none";

}

function unlockMehendiCard(){

    Celebration.state.mehendi = true;

    const card =
    document.querySelector(
        '.event-card[data-event="mehendi"]'
    );

    card.classList.remove("locked");

    card.querySelector("img")
        .style.filter = "blur(0px)";

    card.querySelector(".card-overlay")
        .style.display = "none";

}

/*====================================
      HALDI PARTICLE BURST
====================================*/

function createHaldiBurst(){

    for(let i=0;i<18;i++){

        const particle =
        document.createElement("span");

        particle.className =
        "haldi-particle";

        particle.innerHTML =
        Math.random()>.5 ? "✨" : "🌼";

        particle.style.left = "50%";

        particle.style.top = "50%";

        particle.style.setProperty(

            "--x",

            `${(Math.random()-.5)*220}px`

        );

        particle.style.setProperty(

            "--y",

            `${(Math.random()-.5)*220}px`

        );

        Celebration.wrapper.appendChild(
            particle
        );

        particle.addEventListener(

            "animationend",

            ()=>particle.remove()

        );

    }

}

function showCompletedHaldi(){

    Celebration.canvas.style.display =
    "none";

    Celebration.skip.style.display =
    "none";

    Celebration.wrapper.style.transform =
    "translateY(-10px) scale(1.03)";

    Celebration.instruction.style.display =
    "none";

    Celebration.hint.classList.add(
        "show"
    );

}

/*====================================
        MEHENDI ENGINE
====================================*/

const Mehendi={

    completed:false,

    tracing:false,

    currentImage:0,

    petals:{

        top:false,

        left:false,

        right:false

    },

    images:{

        "000":"assets/images/mehendi/mehendi-0.png",

        "100":"assets/images/mehendi/mehendi-top.png",

        "010":"assets/images/mehendi/mehendi-left.png",

        "001":"assets/images/mehendi/mehendi-right.png",

        "110":"assets/images/mehendi/mehendi-top-left.png",

        "101":"assets/images/mehendi/mehendi-top-right.png",

        "011":"assets/images/mehendi/mehendi-left-right.png",

        "111":"assets/images/mehendi/mehendi-complete.png"

    }

};

Mehendi.init=function(){

    this.completed=false;

    this.tracing=false;

    this.petals.top=false;

    this.petals.left=false;

    this.petals.right=false;

    Celebration.skip.style.display="none";

    Celebration.canvas.style.display="block";

    Celebration.canvas.width=
        Celebration.canvas.offsetWidth;

    Celebration.canvas.height=
        Celebration.canvas.offsetHeight;

    Celebration.canvas.style.opacity="1";

    Celebration.canvas.style.pointerEvents="auto";

    Celebration.image.src=
        this.images["000"];

    this.bindEvents();

}

Mehendi.getPoint=function(e){

    const rect =
    Celebration.canvas.getBoundingClientRect();

    if(e.touches){

        return{

            x:e.touches[0].clientX-rect.left,

            y:e.touches[0].clientY-rect.top

        };

    }

    return{

        x:e.clientX-rect.left,

        y:e.clientY-rect.top

    };

}

Mehendi.detectPetal=function(x,y){

    const w =
    Celebration.canvas.width;

    const h =
    Celebration.canvas.height;

    /* TOP */

    if(

        x>w*0.38 &&

        x<w*0.62 &&

        y>h*0.10 &&

        y<h*0.55

    ){

        return "top";

    }

    /* LEFT */

    if(

        x>w*0.05 &&

        x<w*0.42 &&

        y>h*0.40 &&

        y<h*0.90

    ){

        return "left";

    }

    /* RIGHT */

    if(

        x>w*0.58 &&

        x<w*0.95 &&

        y>h*0.40 &&

        y<h*0.90

    ){

        return "right";

    }

    return null;

}

Mehendi.bindEvents=function(){

    const canvas =
    Celebration.canvas;

    canvas.onmousedown=()=>{

        this.tracing=true;

    };

    canvas.onmouseup=()=>{

        this.tracing=false;

    };

    canvas.onmouseleave=()=>{

        this.tracing=false;

    };

    canvas.onmousemove=(e)=>{

        if(!this.tracing) return;

        const p =
        this.getPoint(e);

        const petal =
        this.detectPetal(

            p.x,

            p.y

        );

        if(petal){

            this.completePetal(

                petal

            );

        }

    };

    canvas.ontouchstart=()=>{

        this.tracing=true;

    };

    canvas.ontouchend=()=>{

        this.tracing=false;

    };

    canvas.ontouchmove=(e)=>{

        e.preventDefault();

        if(!this.tracing) return;

        const p =
        this.getPoint(e);

        const petal =
        this.detectPetal(

            p.x,

            p.y

        );

        if(petal){

            this.completePetal(

                petal

            );

        }

    };

}

Mehendi.completePetal=function(petal){

    if(this.petals[petal]) return;

    this.petals[petal]=true;

    this.updateImage();

}

Mehendi.updateImage=function(){

    const key=

        (this.petals.top?"1":"0")+

        (this.petals.left?"1":"0")+

        (this.petals.right?"1":"0");

    Celebration.image.style.opacity="0";

    setTimeout(()=>{

        Celebration.image.src=

        this.images[key];

        Celebration.image.style.opacity="1";

    },180);

    if(key==="111"){

        setTimeout(()=>{

            this.complete();

        },350);

    }

}

function showCompletedMehendi(){

    Celebration.image.src =
    Celebration.data.mehendi.image;

    Celebration.image.style.opacity="1";

    Celebration.canvas.style.display="none";

    Celebration.canvas.style.opacity="0";

    Celebration.canvas.style.pointerEvents="none";

    Celebration.skip.style.display="none";

    Celebration.instruction.textContent="";

    Celebration.instruction.style.display="none";

    Celebration.hint.textContent =
    "✦ Tap outside the invitation to continue ✦";

    Celebration.hint.classList.add("show");

}

Mehendi.complete=function(){

    if(this.completed) return;

    this.completed=true;

    Celebration.state.mehendi=true;

    this.sparkle();

}

Mehendi.sparkle=function(){

    for(let i=0;i<18;i++){

        const s=document.createElement("span");

        s.className="mehendi-sparkle";

        s.style.left=

        (40+Math.random()*20)+"%";

        s.style.top=

        (42+Math.random()*20)+"%";

        s.style.setProperty(

            "--x",

            (Math.random()*180-90)+"px"

        );

        s.style.setProperty(

            "--y",

            (Math.random()*180-90)+"px"

        );

        Celebration.wrapper.appendChild(s);

        setTimeout(()=>{

            s.remove();

        },900);

    }

    setTimeout(()=>{

        this.bloom();

    },650);

}

Mehendi.bloom=function(){

    Celebration.image.style.transition=

    "transform .45s ease";

    Celebration.image.style.transform=

    "scale(1.08)";

    setTimeout(()=>{

        Celebration.image.style.transform=

        "scale(1)";

        this.reveal();

    },450);

}

Mehendi.reveal=function(){

    /* Show invitation */

    Celebration.image.src =
    Celebration.data.mehendi.image;

    Celebration.image.style.opacity="1";

    /* Hide tracing canvas */

    Celebration.canvas.style.opacity="0";

    Celebration.canvas.style.pointerEvents="none";

    Celebration.canvas.style.display="none";

    /* Hide instruction */

    Celebration.instruction.textContent="";

    Celebration.instruction.style.display="none";

    /* Update hint */

    Celebration.hint.textContent =
    "✦ Tap outside the invitation to continue ✦";

    Celebration.hint.classList.add("show");

    unlockMehendiCard();

    moveTimeline(2);

}


/*====================================
        WEDDING ENGINE
====================================*/

const Wedding={

    holding:false,

    completed:false,

    progress:0,

    timer:null,

    interval:null

};

Wedding.init=function(){

    this.completed=false;

    this.progress=0;

    Celebration.canvas.style.display="none";

    Celebration.skip.style.display="none";

    Celebration.image.src=
    Celebration.data.wedding.image;

    Celebration.interaction.innerHTML=

    `
    <div class="hold-wrapper">

        <div class="hold-circle">

            <img
            src="assets/icons/shehnai.svg"
            class="hold-icon">

            <div
            class="hold-progress">

            </div>

        </div>

        <p class="hold-text">

            Press & Hold

        </p>

    </div>
    `;

    this.bindEvents();

}

Wedding.bindEvents=function(){

    const circle =
    document.querySelector(".hold-circle");

    if(!circle) return;

    circle.onmousedown=()=>{

        this.start();

    };

    circle.onmouseup=()=>{

        this.stop();

    };

    circle.onmouseleave=()=>{

        this.stop();

    };

    circle.ontouchstart=(e)=>{

        e.preventDefault();

        this.start();

    };

    circle.ontouchend=()=>{

        this.stop();

    };

}

Wedding.start=function(){

    if(this.completed) return;

    this.holding=true;

    const progress =
    document.querySelector(".hold-progress");

    this.progress=0;

    clearInterval(this.interval);

    this.interval=setInterval(()=>{

        this.progress++;

        progress.style.width=

        this.progress+"%";

        if(this.progress>=100){

            clearInterval(this.interval);

            this.complete();

        }

    },30);

}

Wedding.stop=function(){

    if(this.completed) return;

    this.holding=false;

    clearInterval(this.interval);

    this.progress=0;

    const progress =
    document.querySelector(".hold-progress");

    if(progress){

        progress.style.width="0%";

    }

}

function showCompletedWedding(){

    Celebration.interaction.innerHTML="";

    Celebration.instruction.style.display="none";

    Celebration.hint.classList.add("show");

}