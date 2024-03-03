// RESPONSIVE HAMBURGER MENU
var hamburger = document.querySelector("#hamburger");
var nav = document.querySelector(".navbar");
var navLinks = document.querySelectorAll(".navbar li");

// when list items are clicked, close menu
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

// TOGGLE HAMBURGER ICON ON CLICK
hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // burger animation
    hamburger.classList.toggle("toggle");

    // dynamically change first menu item
    Array.from(navLinks).forEach((li) => {
        if (li.textContent.trim() === "NEEHA RAVULA") {
            li.textContent = "HOME";

            // set font size based on screen width
            if (window.innerWidth < 768) {
                li.style.fontSize = "3em"; // set mobile font size
            } else {
                li.style.fontSize = "1em"; // set desktop font size
            }

            li.style.fontFamily = "JetBrains Mono, monospace";
            li.style.color = "#333333";
            li.style.listStyle = "none";
            li.style.textDecoration = "none";
            li.style.fontWeight = "200";
            li.style.cursor = "pointer";
        }
    });
});

// UPDATE STYLES ON WINDOW RESIZE
window.addEventListener("resize", () => {
    Array.from(navLinks).forEach((li) => {
        if (li.textContent.trim() === "HOME") {
            // update font size based on screen width
            if (window.innerWidth < 768) {
                li.style.fontSize = "3em"; // set mobile font size
            } else {
                li.style.fontSize = "1em"; // set desktop font size
            }
        }
    });
});

// FULL SCREEN VIEW
let currentImageIndex = 0;
const images = document.querySelectorAll('.image-grid img');
const fullScreenView = document.querySelector('.full-screen-view');

function openFullScreen(index) {
    currentImageIndex = index;
    updateFullScreenImage();
    fullScreenView.style.display = 'flex';

    // add a click event listener to the full-screen view
    fullScreenView.addEventListener('click', closeFullScreen);
}

function closeFullScreen() {
    fullScreenView.style.display = 'none';

    // remove the click event listener when closing the full-screen view
    fullScreenView.removeEventListener('click', closeFullScreen);
}

function changeImage(offset) {
    currentImageIndex += offset;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateFullScreenImage();
}

function updateFullScreenImage() {
    const fullScreenImage = document.querySelector('.full-screen-image');
    fullScreenImage.src = images[currentImageIndex].src;
}

// attach click event listeners to each image in the grid
images.forEach((image, index) => {
    image.addEventListener('click', () => openFullScreen(index));
});