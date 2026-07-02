// Click to reveal the banner
let bannerImage = document.querySelector("#bannerImage");
let bannerInfo = document.querySelector("#bannerInfo");

bannerImage.addEventListener("click",event =>{
    bannerInfo.classList.toggle("bannerInfo");
} );

let themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", event=>{
document.body.classList.toggle("dark-mode");
if(document.body.classList.toggle("dark-mode")){
    localStorage.setItem("theme", "dark");
}else{
    localStorage.setItem("theme", "light");
}
});
let savedTheme = localStorage.getItem("theme-btn");
if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
}