const fortunes = [
    "A pleasant surprise is waiting for you.",
    "Your hard work will pay off soon.",
    "Good things come to those who wait.",
    "Your creativity will lead you to success.",
    "A smile is your passport to happiness.",
    "Adventure awaits around the next corner.",
    "Your kindness will be rewarded tenfold.",
    "A dream you have will come true.",
    "You will find unexpected treasure today.",
    "Your future is as bright as your faith."
];

function displayRandomFortune() {
    const fortuneElement = document.getElementById('fortune');
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneElement.textContent = fortunes[randomIndex];
}

document.addEventListener('DOMContentLoaded', displayRandomFortune);
