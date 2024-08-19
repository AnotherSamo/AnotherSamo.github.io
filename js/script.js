// Array de opciones de fuentes
const fonts = [
    "'Matemasie', sans-serif",
    "'Edu VIC WA NT Beginner', cursive",
    "'Borel', cursive",
    "'Playwrite IS', cursive",
    "'Permanent Marker', cursive"
];

// Seleccionar una fuente al azar
const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

// Aplicar la fuente al h1
document.querySelector('h1').style.fontFamily = randomFont;


// Array de opciones de animaciones
const animations = [
    'animate__animated animate__bounce',
    'animate__animated animate__flash',
    'animate__animated animate__pulse',
    'animate__animated animate__rubberBand',
    'animate__animated animate__shakeX',
    'animate__animated animate__shakeY',
    'animate__animated animate__headShake'
];

// Seleccionar una fuente al azar
const randomanimation = animations[Math.floor(Math.random() * animations.length)];

// Aplicar la fuente al h1
document.querySelector('h1').className = randomanimation;