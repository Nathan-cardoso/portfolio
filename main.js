const scene = document.getElementById('scene');

const charCount = 150;

for (let i = 0; i < charCount; i++) {
    const char = document.createElement('div');
    char.className = 'binary-char';
    char.textContent = Math.random() > 0.5 ? '1' : '0';

    const zPos = (Math.random() * 400) - 200; // -200px to 200px
    const scale = (400 - (zPos + 200)) / 400; // Scale based on Z for depth

    char.style.setProperty('--start-opacity', Math.random() * 0.5);
    char.style.setProperty('--end-opacity', Math.random() * 0.5 + 0.2);
    char.style.left = `${Math.random() * 100}%`;
    char.style.top = `${Math.random() * 100}%`;
    char.style.fontSize = `${10 + scale * 12}px`;
    char.style.transform = `translateZ(${zPos}px)`;
    char.style.animationDelay = `${Math.random() * -10}s`; // Stagger start times
    char.style.color = `rgba(150, 150, 150, ${0.2 + scale * 0.5})`;

    scene.appendChild(char);
}