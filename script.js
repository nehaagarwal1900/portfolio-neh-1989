let menuBar = document.getElementById("menuBar");
menuBar.style.maxHeight = "0px";
function toggle() {
    if (menuBar.style.maxHeight == "0px") {
        menuBar.style.maxHeight = "800px"
    } else {
        menuBar.style.maxHeight = "0px"
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".skill-fill").forEach(bar => {
        bar.style.width = bar.style.width;
    });
});

document.getElementById('scrollToTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});