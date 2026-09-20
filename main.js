const texts = [
    "Desenvolvedor Back-end",
    "Engenheiro de Software"
];

const speed = 95;
const eraseSpeed = 45;
const delayBetweenTexts = 2200;

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing-text");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function type() {
    if (charIndex < texts[textIndex].length) {
        typingElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
    } else {
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 600);
    }
}

function scrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll("nav a");
    const offset = window.scrollY + 140;

    let current = "";
    sections.forEach(s => {
        if (offset >= s.offsetTop) current = s.id;
    });

    links.forEach(l => {
        l.classList.toggle("active", l.getAttribute("href") === `#${current}`);
    });
}

function initScrollReveal() {
    if (reducedMotion || typeof ScrollReveal === "undefined") return;

    const sr = ScrollReveal({
        distance: "45px",
        duration: 500,
        easing: "ease-out",
        reset: false
    });

    sr.reveal(".about-photo", { origin: "left", delay: 0 });
    sr.reveal(".about-kaizen", { origin: "up", delay: 120 });
    sr.reveal(".about-text", { origin: "up", delay: 280, interval: 140 });
    sr.reveal(".stacks-title", { origin: "up", delay: 100 });
    sr.reveal(".stack-item", { origin: "up", distance: "25px", interval: 200, delay: 100 });
}

document.addEventListener("DOMContentLoaded", () => {
    if (reducedMotion) {
        typingElement.textContent = texts[0];
    } else {
        setTimeout(type, 700);
    }

    scrollSpy();
    initScrollReveal();
    window.addEventListener("scroll", scrollSpy, { passive: true });
});

const preloader = document.getElementById("preloader");

function hidePreloader() {
    if (!preloader || preloader.classList.contains("hidden")) return;

    document.body.classList.remove("loading");
    preloader.classList.add("hidden");
    setTimeout(() => preloader.remove(), 900);
}

window.addEventListener("load", () => setTimeout(hidePreloader, 600));
setTimeout(hidePreloader, 3500);