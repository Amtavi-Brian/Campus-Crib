// Click to reveal the banner
let bannerImage = document.querySelector("#bannerImage");
let bannerInfo = document.querySelector("#bannerInfo");

bannerImage.addEventListener("click",event =>{
    bannerInfo.classList.toggle("bannerInfo");
} );

//LocalStorage for theme tooggle
let themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", event => {
    let isDark = document.body.classList.toggle("dark-mode");

    if (isDark) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙 Dark Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️ Light Mode";
    