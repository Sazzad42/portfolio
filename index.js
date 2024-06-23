const fortunes = [
    "Wealth awaits you very soon.",
    "You will be hungry again in one hour.",
    "Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.",
    "Your creativity will lead you to success.",
    "The man on the top of the mountain did not fall there.",
    "Adventure awaits around the next corner.",
    "You learn from your mistakes... You will learn a lot today.",
    "Serious trouble will bypass you.",
    "Land is always on the mind of a flying bird.",
    "Love can last a lifetime, if you want it to."
];

function random_fortune() {
    const fortune = document.getElementById('fortune');
    const rand_index = Math.floor(Math.random() * fortunes.length);
    fortune.textContent = fortunes[rand_index];
}

document.addEventListener('DOMContentLoaded', random_fortune);
