@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@500;600&family=Quicksand:wght@400;500;600&display=swap');

:root {
    --pink: #f4a8c7;
    --dark-pink: #c85b87;
    --light-pink: #fff0f6;
    --very-light: #fff9fc;
    --white: #ffffff;
    --text: #674957;
    --border: #f0d0dd;
    --shadow: 0 15px 40px rgba(200, 91, 135, .14);
}

* {
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: "Quicksand", sans-serif;
    color: var(--text);

    background:
        radial-gradient(circle at 10% 20%, #ffe0ec 0, transparent 25%),
        radial-gradient(circle at 90% 80%, #ffdce9 0, transparent 25%),
        linear-gradient(135deg, #ffffff, #fff5f9);

    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

nav {
    position: sticky;
    top: 0;
    z-index: 100;

    display: flex;
    justify-content: center;
    gap: 22px;

    padding: 15px 20px;

    background: rgba(255,255,255,.82);
    backdrop-filter: blur(15px);

    border-bottom: 1px solid var(--border);

    font-size: 14px;
}

nav a:hover {
    color: var(--dark-pink);
}

.hero {
    min-height: 90vh;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    padding: 80px 20px;
}

.hero-card {
    max-width: 850px;

    padding: 60px 40px;

    background: rgba(255,255,255,.85);

    border: 1px solid var(--border);
    border-radius: 40px;

    box-shadow: var(--shadow);
}

.kicker {
    color: var(--dark-pink);

    font-size: 12px;

    letter-spacing: 5px;
    text-transform: uppercase;
}

h1 {
    margin: 20px 0;

    font-family: "Playfair Display", serif;

    font-size: clamp(45px, 8vw, 85px);

    color: #b84f7b;
}

h2 {
    font-family: "Playfair Display", serif;
    color: #b84f7b;
}

.hero p {
    font-size: 18px;
    line-height: 1.8;
}

.button {
    display: inline-block;

    margin: 10px 5px;

    padding: 13px 22px;

    border-radius: 30px;

    background: var(--dark-pink);

    color: white;

    border: none;

    cursor: pointer;

    font-family: inherit;
}

.button.secondary {
    background: var(--light-pink);
    color: var(--dark-pink);
}

.clock {
    display: inline-block;

    margin-top: 20px;

    padding: 12px 22px;

    background: var(--light-pink);

    border-radius: 30px;

    color: var(--dark-pink);

    font-weight: 600;
}

section {
    max-width: 1100px;

    margin: auto;

    padding: 80px 25px;
}

.section-title {
    text-align: center;

    font-size: 43px;

    margin-bottom: 40px;
}

.card-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 22px;
}

.card {
    padding: 28px;

    background: rgba(255,255,255,.9);

    border: 1px solid var(--border);

    border-radius: 25px;

    box-shadow: var(--shadow);

    transition: .25s;
}

.card:hover {
    transform: translateY(-6px);
}

.emoji {
    font-size: 38px;
}

.flower-fact {
    max-width: 700px;

    margin: 30px auto;

    padding: 30px;

    text-align: center;

    background: white;

    border-radius: 25px;

    box-shadow: var(--shadow);

    border: 1px solid var(--border);
}

.fact-text {
    font-size: 18px;
    line-height: 1.7;
}

.gallery {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 25px;
}

.polaroid {
    padding: 12px 12px 25px;

    background: white;

    box-shadow: var(--shadow);

    transform: rotate(-2deg);
}

.polaroid:nth-child(2) {
    transform: rotate(2deg);
}

.polaroid:nth-child(3) {
    transform: rotate(-1deg);
}

.photo {
    height: 220px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(135deg,#ffd9e8,#fff);

    font-size: 50px;
}

.polaroid p {
    text-align: center;

    font-family: "Playfair Display", serif;
}

.journal-list {
    max-width: 800px;
    margin: auto;
}

.journal-card {
    padding: 25px;

    margin-bottom: 20px;

    background: #fffdf8;

    border-left: 5px solid var(--pink);

    border-radius: 0 20px 20px 0;

    box-shadow: var(--shadow);
}

.journal-card small {
    color: var(--dark-pink);
}

input,
textarea,
select {
    width: 100%;

    padding: 13px;

    margin: 6px 0;

    border: 1px solid var(--border);

    border-radius: 14px;

    font-family: inherit;

    background: white;
}

footer {
    padding: 50px 20px;

    text-align: center;

    color: #a56a83;
}

.floating-flower {
    position: fixed;

    bottom: -50px;

    pointer-events: none;

    z-index: 1;

    animation: flowerFloat linear forwards;
}

@keyframes flowerFloat {

    0% {
        transform: translateY(0) rotate(0);
        opacity: 0;
    }

    10% {
        opacity: .8;
    }

    100% {
        transform: translateY(-120vh) rotate(360deg);
        opacity: 0;
    }
}

/* ROOM DESIGNER */

.room-container {
    max-width: 1200px;

    margin: auto;

    padding: 30px;
}

.room {
    position: relative;

    width: 100%;
    min-height: 600px;

    overflow: hidden;

    border-radius: 30px;

    background:
        linear-gradient(
            #fff2f7 0 70%,
            #e9c7b1 70% 100%
        );

    border: 5px solid white;

    box-shadow: var(--shadow);
}

.room-item {
    position: absolute;

    cursor: grab;

    user-select: none;

    font-size: 55px;

    transition: transform .15s;
}

.room-item:hover {
    transform: scale(1.08);
}

.room-controls {
    display: flex;

    flex-wrap: wrap;

    gap: 10px;

    margin: 20px 0;
}

.room-controls button {
    padding: 10px 15px;

    border: 1px solid var(--border);

    border-radius: 20px;

    background: white;

    color: var(--dark-pink);

    cursor: pointer;

    font-family: inherit;
}

/* CHARACTER */

.character-preview {
    min-height: 350px;

    display: flex;

    justify-content: center;

    align-items: center;

    background: var(--light-pink);

    border-radius: 30px;

    font-size: 150px;
}

.customizer {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(180px,1fr));

    gap: 15px;

    margin-top: 25px;
}

/* FAIRY GARDEN */

.garden {
    position: relative;

    min-height: 700px;

    overflow: hidden;

    border-radius: 35px;

    background:
        radial-gradient(
            circle at 70% 20%,
            #fff2a8,
            transparent 10%
        ),
        linear-gradient(
            #a9d8c1,
            #6fa987
        );
}

.garden-item {
    position: absolute;

    font-size: 50px;

    cursor: pointer;

    transition: .2s;
}

.garden-item:hover {
    transform: scale(1.2);
}

@media(max-width:700px) {

    nav {
        overflow-x: auto;
        justify-content: flex-start;
    }

    .hero-card {
        padding: 45px 20px;
    }

    section {
        padding: 65px 18px;
    }

}
