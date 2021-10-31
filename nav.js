let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("section");
let header = document.querySelector("header")

let lastId;
let cur = [];

let links = document.querySelectorAll(".nav ul li a");
links.forEach(l => l.addEventListener("click", e => {
  if (window.innerWidth <= 1000){
    var x = document.querySelector(".nav");
    x.style.display = "none";
  }
}));

window.addEventListener("scroll", event => {
    if (window.innerWidth > 1000){
      var x = document.querySelector(".nav");
      x.style.display = "block";
    }
    let fromTop = window.scrollY;
    
  
    mainNavLinks.forEach(link => {
      console.log(link)
      let section = document.querySelector(link.hash);
      if(section){
        if (
            section.offsetTop - header.offsetHeight <= fromTop &&
            section.offsetTop + section.offsetHeight - header.offsetHeight > fromTop
          ) {
            link.classList.add("selected");
          } else {
            link.classList.remove("selected");
        }
      }
      else {
        link.classList.remove("selected");
      }
    });
});

function myFunction() {
  var x = document.querySelector(".nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

