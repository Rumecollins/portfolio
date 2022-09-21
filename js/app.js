
const navToggle = document.querySelector(".mobile-nav-toggle");
let mobileNav = document.querySelector(".nav-list");

let closeNav = document.getElementById("fa-close");
let openNav = document.getElementById("fa-open");


navToggle.addEventListener("click", () => {
     let visibility = mobileNav.getAttribute("data-visible");
     
   if (visibility === "false"){
        mobileNav.setAttribute("data-visible","true");
        closeNav.style.display ="block";
        openNav.style.display ="none";
   } else {
       mobileNav.setAttribute("data-visible","false");
       closeNav.style.display ="none";
       openNav.style.display ="block"
   }
})



