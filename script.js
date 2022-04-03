//toggle menu and menuButtons
let menuImg = document.querySelector(".menuImg");
let menu = document.querySelector(".header .container .navbar");
menuImg.onclick = () =>{
  menuImg.classList.toggle("closeImg");
  menu.classList.toggle("active");
}
//when window scroll remove menu and close button
let goUp = document.querySelector(".goUp");
window.onscroll = () =>{
  menuImg.classList.remove("closeImg");
  menu.classList.remove("active");

  if (window.scrollY > 200){
    goUp.style.display = "block";
  }else{
    goUp.style.display = "none";
  }
}
//when nav link is clicked set active and remove
//active from active link
let link = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(link).forEach((item,index) =>{
  item.onclick = (e) =>{
    let currentLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentLink.classList.remove("active");
    e.target.classList.add("active");
    menu.classList.remove("active");
    menuImg.classList.remove("closeImg")

  
  }
})
/*
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
} 
window.addEventListener("scroll", reveal);
*/