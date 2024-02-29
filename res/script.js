// Responsive hamburger menu
var hamburger = document.querySelector("#hamburger");
var nav = document.querySelector(".navbar");
var navLinks = document.querySelectorAll(".navbar li");

// close nav by clicking on list items
Array.from(navLinks).forEach((li) =>
    li.addEventListener("click", () => {
        if (hamburger.classList.contains("toggle")) {
            hamburger.classList.remove("toggle");
        }
        if (nav.classList.contains("nav-active")) {
            nav.classList.remove("nav-active");
        }
    })
);

// toggle nav on click of hamburger menu icon
hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // burger animation
    hamburger.classList.toggle("toggle");

    // dynamically change menu item text
    Array.from(navLinks).forEach((li) => {
        if (li.textContent.trim() === "NEEHA RAVULA") {
            li.textContent = "HOME";
        }
    });

});