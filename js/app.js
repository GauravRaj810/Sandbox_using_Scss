const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 300) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});
// Smooth scroll to top when clicking the button
topLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor jump
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Changing the layout for langauage right to left / left to right -- 
function changeLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
    document.body.style.textAlign = lang === "ar" ? "right" : "left";
}




