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

//Booking Form Validation
let bookingForm = document.querySelector("#bookingForm");
let bookingFeedback = document.querySelector("#bookingFeedback");
let bookingBtn = document.querySelector("#bookingBtn");

bookingForm.addEventListener("submit", event=>{
    event.preventDefault();
    let name =document.querySelector("#name").value.trim();
    let email =document.querySelector("#email").value.trim();
    let phone = document.querySelector("#phone").value.trim();
    let roomType =document.querySelector("#room_type").value;
    let hostel =document.querySelector("#hostel").value;
    let checkin = document.querySelector("#checkin").value;
    let duration = document.querySelector("#duration_unit").value;

    if(
        name == ""||
        email == ""||
        phone == ""||
        roomType == ""||
        hostel == ""||
        checkin == ""||
        duration == ""
    ){
        bookingFeedback.textContent = "Please fill in all fields.";
        bookingFeedback.style.color = "red";
        return;
    } 
   bookingFeedback.textContent = "Booking successful !" +name+", your reservation at "+ hostel + " has been received.";
   bookingFeedback.style.color = "green";
   bookingForm.reset();
});
