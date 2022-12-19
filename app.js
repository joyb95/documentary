

// dark theme matching that system
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    document.body.classList.add("dark");
    dayNightBtns.body.classList.remove("active");
} else {
    document.body.classList.remove("dark");
    dayNightBtns.body.classList.add("active");
}
