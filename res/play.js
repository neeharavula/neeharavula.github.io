// APPEAR ELEMENTS ON SCROLL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // if the element is visible
        if (entry.isIntersecting) {
            // add the animation class
            entry.target.classList.add('appear-animation');
        }
    });
});

const viewbox = document.querySelectorAll('.appear');
viewbox.forEach(image => {
    observer.observe(image);
});

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

    // get the first menu item
    const firstMenuItem = navLinks[0];

    // check if the navigation menu is active
    const isActive = nav.classList.contains("nav-active");

    // dynamically change the first menu item
    if (isActive) {
        firstMenuItem.textContent = "HOME";
    } else {
        firstMenuItem.textContent = "NEEHA RAVULA";
    }

    // set font size and other styles based on screen width
    if (window.innerWidth < 768) {
        if (isActive) {
            firstMenuItem.style.fontSize = "3em";
        } else {
            firstMenuItem.style.fontSize = "1em";
        }
    } else {
        firstMenuItem.style.fontSize = "1em"; // set desktop font size
    }

    firstMenuItem.style.fontFamily = "JetBrains Mono, monospace";
    firstMenuItem.style.color = "#333333";
    firstMenuItem.style.listStyle = "none";
    firstMenuItem.style.textDecoration = "none";
    firstMenuItem.style.fontWeight = "300";
    firstMenuItem.style.cursor = "pointer";

    // set the href attribute for the first menu item to navigate to home page
    firstMenuItem.querySelector("a").setAttribute("href", "../index.html");
});

// handle click event for "Home" menu item
navLinks[0].addEventListener("click", (event) => {
    // prevent default behavior to ensure link navigation
    event.preventDefault();

    // navigate to home page
    window.location.href = "../index.html";
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