// APPEAR ELEMENTTS ON SCROLL
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
    firstMenuItem.style.fontWeight = "200";
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

// WORK PAGE TILES
var workExperiences = [
    { path: "../../work/nm", year: 2023, season: "SUMMER", projectName: "Northwestern Mutual", background: "../assets/logos/nm.png", description: "SEE INTERNSHIP ➚" },
    { path: "../../work/melodics", year: 2023, season: "SPRING", projectName: "Melodics", background: "../assets/logos/melodics.png", description: "SEE PROJECT ➚" },
    { path: "../../work/ga", year: 2022, season: "SUMMER", projectName: "General Atomics", background: "../assets/logos/ga.png", description: "SEE INTERNSHIP ➚" },
    { path: "../../work/courseplanner", year: 2023, season: "SPRING", projectName: "Course Planner", background: "../assets/logos/cp.png", description: "SEE PROJECT ➚" },
    { path: "../../work/tech4good", year: 2023, season: "SPRING", projectName: "Tech 4 Good", background: "../assets/logos/t4g1.png", description: "SEE EXPERIENCE ➚" },
    { path: "../../work/athenahacks", year: 2021, season: "WINTER", projectName: "USC AthenaHacks", background: "../assets/logos/ahacks.png", description: "SEE HACKATHON ➚" },
];

// SORT WORK TILES BY YEAR AND SEASON (NEWEST -> OLDEST)
workExperiences.sort((a, b) => {
    // compare years first
    if (b.year !== a.year) {
        return b.year - a.year;
    }
    // if the years are the same, compare seasons
    const seasonOrder = [
        "WINTER", "SPRING", "SUMMER", "FALL"
    ];
    return seasonOrder.indexOf(b.season) - seasonOrder.indexOf(a.season);
});

// APPEND TILES TO DOM
var workTilesContainer = document.querySelector(".work-tiles");

// WORK TILE CONFIGURATION
workExperiences.forEach((experience) => {
    var tile = document.createElement("div");
    tile.classList.add("work-tile");

    // set background image or fallback to grey background
    tile.style.backgroundImage = `url(${experience.background}), linear-gradient(#aaaaaa, #aaaaaa)`;

    var year = document.createElement("div");
    year.classList.add("year");
    year.textContent = `${experience.season} ${experience.year}`;

    var projectName = document.createElement("div");
    projectName.classList.add("project-name");
    projectName.textContent = experience.projectName;

    tile.appendChild(year);
    tile.appendChild(projectName);
    workTilesContainer.appendChild(tile);
});

// APPEAR WORK TILES ON SCROLL
const workObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // if the element is visible
        if (entry.isIntersecting) {
            // add the animation class
            entry.target.classList.add('appear-animation');
        }
    });
});

const workTiles = document.querySelectorAll('.work-tile');
workTiles.forEach(tile => {
    workObserver.observe(tile);
});

// EVENT LISTENERS FOR HOVER AND CLICK ON WORK TILES
workTilesContainer.querySelectorAll(".work-tile").forEach((tile, index) => {
    tile.addEventListener("mouseenter", (event) => {
        showCursorBubble(event, workExperiences[index].description);
    });

    tile.addEventListener("mouseleave", () => {
        hideCursorBubble();
    });

    tile.addEventListener("click", () => {
        // get the custom path associated with the clicked tile
        const customPath = workExperiences[index].path;

        // check for USC AthenaHacks tile
        if (customPath === "https://devpost.com/software/usc_sos") {
            // open link in new tab
            window.open(customPath, "_blank");
        } else {
            // open associated html page
            window.location.href = customPath;
        }
    });
});

// SHOW CURSOR BUBBLE
function showCursorBubble(event, text) {
    // Check if the screen width is greater than 768px (assuming mobile devices have a width less than this)
    if (window.innerWidth > 768) {
        var cursorBubble = document.querySelector(".cursor-bubble");

        // show the cursor bubble
        cursorBubble.style.display = "block";

        // update the position smoothly
        updateCursorBubblePosition(event);

        // set the text content
        cursorBubble.textContent = text;
    }
}

// EVENT LISTENER FOR MOUSEMOVE ON DOCUMENT
document.addEventListener("mousemove", (event) => {
    updateCursorBubblePosition(event);
});

// UPDATE CURSOR BUBBLE POSITION
function updateCursorBubblePosition(event) {
    var cursorBubble = document.querySelector(".cursor-bubble");

    // update the position smoothly
    cursorBubble.style.left = `${event.clientX + 10}px`;
    cursorBubble.style.top = `${event.clientY - 10}px`;
}

// HIDE CURSOR BUBBLE
function hideCursorBubble() {
    var cursorBubble = document.querySelector(".cursor-bubble");

    // hide the cursor bubble
    cursorBubble.style.display = "none";
}

// NEXT PROJECT NAVIGATION - WORK PAGES
function navigateWorkPage(direction) {
    // Get the current page URL
    var currentPagePath = window.location.pathname.split('/');
    currentPagePath.pop(); // Remove the last part which is "index.html"
    var currentPage = currentPagePath.pop(); // Get the current page (e.g., "nm")

    // Find the index of the current page in the workExperiences array
    var currentIndex = workExperiences.findIndex(experience => experience.path.split('/').pop() === currentPage);

    // Calculate the new index based on the direction
    var newIndex = currentIndex + direction;

    // Loop back to the beginning if the new index is out of bounds
    if (newIndex >= workExperiences.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = workExperiences.length - 1;
    }

    // Construct the new page URL
    var newPage = currentPagePath.join('/') + '/' + workExperiences[newIndex].path.split('/').pop(); // Assuming each subpage has its own index.html

    // Navigate to the new page
    window.location.href = newPage;
}

// NEXT PROJECT NAVIGATION ARROWS - WORK PAGES
document.getElementById("nextArrow").addEventListener("click", function() {
    navigateWorkPage(1);
});

// NEXT PROJECT NAVIGATION ARROWS - WORK PAGES
var section3 = document.getElementById("section3");