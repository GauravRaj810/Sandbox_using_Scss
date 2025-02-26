const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
    const scrollHeight = window.scrollY; //pageYOffset
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
// adding background to header ! 
window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) { // If scroll position is greater than 50px
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  // Check scroll position on page load as well
  document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    }
  });

  window.addEventListener('load', function() {
    // Select all elements inside .hero-content
    document.querySelectorAll('.hero-content').forEach(function(element) {
      // Add the 'visible' class to each of the selected elements
      element.classList.add('visible');
    });
  });

  // sidebar - 
  const toggleBtn = document.querySelector(".mobile-view-button");
  const closeBtn = document.querySelector(".close-btn");
  const sidebar = document.querySelector(".sidebar");
  const header = document.querySelector("header");
  const logoImg = document.querySelector(".side-logo img"); // Selects the image inside .side-logo
  
  
  toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("show-sidebar");  // Toggle sidebar visibility
  
      if (logoImg) {
          logoImg.classList.add("hidden");  
      }
  });
  
  closeBtn.addEventListener("click", function () {
      sidebar.classList.remove("show-sidebar");  // Hide sidebar
      
      if (logoImg) {
          logoImg.classList.remove("hidden");  // Ensure logo is hidden when closing
      }
  });
  
  
  


// hiding logo 

  
  
  
  




