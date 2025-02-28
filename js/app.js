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

// // Changing the layout for langauage right to left / left to right -- 
// function changeLanguage(lang) {
//   // Update language attributes
//   document.documentElement.setAttribute("lang", lang);
//   document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
//   document.body.style.textAlign = lang === "ar" ? "right" : "left";

//   // selecting sidebar logo 
//   const sideLogo = document.querySelector(".side-logo"); // Make sure this is the correct selector

//   // Hide side logo when language is changed
//   if (sideLogo) {
//       sideLogo.style.display = "none";
//   }
// }

function changeLanguage(lang) {
  // Update language attributes
  document.documentElement.setAttribute("lang", lang);
  document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
  document.body.style.textAlign = lang === "ar" ? "right" : "left";
  
  const sideLogo = document.querySelector(".side-logo"); // Make sure this is the correct selector

  // Hide side logo when language is changed
/*   if (sideLogo) {
      sideLogo.style.display = "flex";
      sideLogo.style.marginRight = "30px "
  }
 */
  if (sideLogo) {
    if (window.innerWidth > 992) {
        sideLogo.style.display = "none";
    } else {
        sideLogo.style.display = "flex";
        sideLogo.style.marginRight = "30px";
    }
}

// Listen for window resize to dynamically update the display
window.addEventListener("resize", function () {
    if (sideLogo) {
        if (window.innerWidth > 992) {
            sideLogo.style.display = "none";
        } else {
            sideLogo.style.display = "flex";
            sideLogo.style.marginRight = "30px";
        }
    }
});




  // Get elements
  const closeBtn = document.querySelector(".close-btn");
  const languageMode = document.querySelector(".language-mode");

  if (closeBtn && languageMode) {
      if (lang === "ar") {  // for rtl 

          closeBtn.style.right = "auto";
          closeBtn.style.left = "0";

          languageMode.style.left = "auto";
          languageMode.style.right = "0";
      } else {  // for ltr

          closeBtn.style.left = "auto";
          closeBtn.style.right = "0";

          languageMode.style.right = "auto";
          languageMode.style.left = "0";
      }
  }
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



const toggleBtn = document.querySelector(".mobile-view-button");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const body = document.body;
const sidebarLinks = document.querySelectorAll(".sidebar .links a"); // Get all sidebar links

// Function to open sidebar
function openSidebar() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden"; // Disable scrolling
    body.style.paddingRight = `${scrollbarWidth}px`; // Prevent shifting  // default by padding = 15px
    sidebar.classList.add("show-sidebar");
    overlay.classList.add("show-overlay"); 
}

// Function to close sidebar
function closeSidebar() {
    body.style.overflow = ""; // Enable scrolling
    body.style.paddingRight = ""; // Remove extra space
    sidebar.classList.remove("show-sidebar");
    overlay.classList.remove("show-overlay"); 
}

// Toggle sidebar on button click
toggleBtn.addEventListener("click", openSidebar);

// Close sidebar when clicking close button
closeBtn.addEventListener("click", closeSidebar);

// Close sidebar when clicking on overlay
overlay.addEventListener("click", closeSidebar);

// Close sidebar when clicking a link inside it
sidebarLinks.forEach(link => {
    link.addEventListener("click", closeSidebar);
});





  



  
  


  
  
  
  




