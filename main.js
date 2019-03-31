const ico = document.querySelector(".icon");
const nav = document.querySelector("nav");
const bd = document.querySelector("body");
const logo = document.querySelector(".logo")

const showNav = (e) => {
   ico.classList.toggle("active");
   nav.classList.toggle("active");

}

const hideNav = (e) => {
   
   nav.classList.remove("active");
   ico.classList.remove("active");
  
   
}
logo.addEventListener("click", function(){
   nav.classList.remove("active");
   ico.classList.remove("active");
})


ico.addEventListener("click",showNav);
nav.addEventListener("click", hideNav);



     


 










