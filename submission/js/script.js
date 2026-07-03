// Click to reveal the banner
let bannerImage = document.querySelector("#bannerImage");
let bannerInfo = document.querySelector("#bannerInfo");

bannerImage.addEventListener("click",event =>{
    bannerInfo.classList.toggle("bannerInfo");
} );
