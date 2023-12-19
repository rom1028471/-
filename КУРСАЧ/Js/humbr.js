
document.addEventListener('DOMContentLoaded', () => {
  let closeIcon = document.querySelector(".closeIcon");
  let menuIcon = document.querySelector(".menuIcon");
  let menu = document.querySelector("header nav");
  

  closeIcon.style.display = "none";
  menuIcon.style.display = "block";


  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", () => {

      if (menu.classList.contains("showMenu")) {
          menu.classList.remove("showMenu");

          closeIcon.style.display = "none";
          menuIcon.style.display = "block";


          menu.querySelectorAll('li').forEach( (element) => {
              element.classList.add("small");
              element.classList.remove("large");
          })
      } else {
          menu.classList.add("showMenu");
          closeIcon.style.display = "block";
          menuIcon.style.display = "none";

          menu.querySelectorAll('li').forEach( (element) => {
              element.classList.remove("small");
              element.classList.add("large");
          })
      }
  });
})