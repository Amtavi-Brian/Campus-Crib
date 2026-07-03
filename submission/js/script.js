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

// Second form validation
let messageForm = document.querySelector("#messageForm");
let messageFeedback = document.querySelector("#messageFeedback");

messageForm.addEventListener("submit", event=> {

    event.preventDefault();

    let name =
        document.querySelector("#contact-name").value.trim();

    let email =
        document.querySelector("#contact-email").value.trim();

    let message =
        document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {

        messageFeedback.textContent =
            "Please fill in all fields before submitting.";

        return;
    }

    messageFeedback.innerHTML =
        "<strong>Message Sent Successfully!</strong><br>" +
        "Name: " + name + "<br>" +
        "Email: " + email;

    messageForm.reset();
});

// Loop rendered dunamic contente

let hostels = [
    {
        name: "Sunrise Hostel",
        location: "Nairobi",
        price: "KSH 8000 /MONTH",
        
    },
    {
        name: "Sunset Hostel",
        location: "Mombasa",
        price: "KSH 9000 /MONTH",
        
    },
    {
        name: "Ocean View Hostel",
        location: "Malindi",
        price: "KSH 10000 /MONTH",
        
    }
];

let hostelContainer = document.querySelector("#hostelContainer");

hostels.forEach(hostel=>{
    let card = document.createElement("div");
    card.classList.add("hostel-card");

    card.innerHTML =`
    <h3>${hostel.name}</h3>
    <p>Location: ${hostel.location}</p>
    <p>Price: ${hostel.price}</p>`;
    hostelContainer.appendChild(card);
});
