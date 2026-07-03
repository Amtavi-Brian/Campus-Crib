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
    }
});   


// WishList add and Remove
 
let wishListInput = document.querySelector("#wishlistInput");
let addWishList = document.querySelector("#addWishlist");
let wishlist = document.querySelector("#wishlist");
addWishList.addEventListener("click",event =>{
    event.preventDefault();
let item = wishListInput.value.trim();
if(item !== ""){
    let li = document.createElement("li");
    li.textContent = item + " ";

    let removebtn = document.createElement("button");
    removebtn.textContent = "Remove";
    removebtn.addEventListener("click", event =>{
        li.remove();
    });
    li.appendChild(removebtn);
    wishlist.appendChild(li);   

}
});