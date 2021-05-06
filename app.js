const menu = document.querySelector('.menu'); 
const nav = document.querySelector('.navbar');
menu.addEventListener('click', ()=> {
    menu.classList.toggle("change");
    nav.classList.toggle("change");

});
window.addEventListener('scroll', headercolor)
const header=document.querySelector('.header');
const myname= document.querySelector('.myname');
function headercolor() { 
    if(window.scrollY>myname.offsetHeight-150){
        header.style.backgroundColor="white";
    }else{
        header.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    }
} 

var btns =  document.getElementsByClassName('ullia');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }