
const navToggle = document.querySelector(".mobile-nav-toggle");
let mobileNav = document.querySelector(".nav-list");

let closeNav = document.getElementById("fa-close");
let openNav = document.getElementById("fa-open");


navToggle.addEventListener("click", () => {
     let visibility = mobileNav.getAttribute("data-visible");
     
   if (visibility === "false"){
        mobileNav.setAttribute("data-visible","true");
        closeNav.style.display ="block";
        openNav.style.display ="none"
   } else {
       mobileNav.setAttribute("data-visible","false");
       closeNav.style.display ="none";
       openNav.style.display ="block"
   }
})

let darkMode = document.querySelector(".fa-toggle-off");
let lightMode = document.querySelector(".fa-toggle-on");
const modeToggle = document.querySelector(".mode-styling")

modeToggle.addEventListener("click", function(){
     let visibility = modeToggle.getAttribute("data-visible")
     if (visibility === "false"){
          modeToggle.setAttribute("data-visible","true");

          darkMode.style.display ="none";
          lightMode.style.display ="block"

          document.documentElement.style.setProperty("--color-neutral-100","#fff");
          document.documentElement.style.setProperty("--color-neutral-900","#111");
          document.documentElement.style.setProperty("--color-accent-300","rgb(240, 252, 252)");

          
     } else {
          modeToggle.setAttribute("data-visible","false");

          darkMode.style.display ="block";
          lightMode.style.display ="none";

          document.documentElement.style.setProperty("--color-neutral-100","#100");
          document.documentElement.style.setProperty("--color-neutral-900","#fff");
          document.documentElement.style.setProperty("--color-accent-300","#111");

     }
  
     
})




