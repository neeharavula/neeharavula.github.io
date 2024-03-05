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

// WORK PAGE TILES
var workExperiences = [
    { path: "../src/nm.html", year: 2023, season: "SUMMER", projectName: "Northwestern Mutual", background: "nm.png", description: "🛠️ UNDER CONSTRUCTION" },
    { path: "melodics.html", year: 2023, season: "SPRING", projectName: "Melodics", background: "path/to/image2.jpg", description: "🛠️ UNDER CONSTRUCTION" },
    { path: "course-planner.html", year: 2023, season: "SPRING", projectName: "Course Planner", background: "path/to/image3.jpg", description: "🛠️ UNDER CONSTRUCTION" },
    // Add paths for other tiles
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


// EVENT LISTENERS FOR HOVER AND CLICK ON WORK TILES
workTilesContainer.querySelectorAll(".work-tile").forEach((tile, index) => {
    tile.addEventListener("mouseenter", (event) => {
        showCursorBubble(event, workExperiences[index].description);
    });

    tile.addEventListener("mouseleave", () => {
        hideCursorBubble();
    });

    tile.addEventListener("click", () => {
        // Get the custom path associated with the clicked tile
        const customPath = workExperiences[index].path;

        // Determine the base path based on the custom path
        const basePath = getBasePath(customPath);

        // Remove the .html extension from the custom path
        const newPath = `${basePath}/${customPath.replace('.html', '')}`;
        history.pushState({}, '', newPath);

        // Redirect to the HTML file
        window.location.href = customPath;
    });
});

// Function to get the base path based on the custom path
function getBasePath(customPath) {
    // Mapping of specific HTML files to their base paths
    const fileToBasePath = {
        '../src/nm.html': '/nm',
        '../src/work.html': '/work',
        // Add more entries for other HTML files as needed
    };

    // Check if the custom path is defined in the mapping
    return fileToBasePath[customPath] || '/'; // Default to '/' if not found
}

// SHOW CURSOR BUBBLE
function showCursorBubble(event, text) {
    var cursorBubble = document.querySelector(".cursor-bubble");

    // show the cursor bubble
    cursorBubble.style.display = "block";

    // update the position smoothly
    updateCursorBubblePosition(event);

    // set the text content
    cursorBubble.textContent = text;
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