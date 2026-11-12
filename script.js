
// PAGE NAVIGATION
function showPage(pageNumber) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    // Show selected page
    const selectedPage = document.getElementById("page" + pageNumber);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }
}


// NO BUTTON MOVEMENT
const noButton = document.getElementById("noBtn");

function moveNoButton() {

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Keep button inside the visible screen
    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}


// Move when mouse approaches
noButton.addEventListener("pointerenter", moveNoButton);


// Move when touched on mobile
noButton.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveNoButton();
}, { passive: false });


// Move if clicked
noButton.addEventListener("click", moveNoButton);
