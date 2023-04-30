const nav = document.querySelector("nav")
const sticky = nav.offsetTop

window.onscroll = function(){
    if (window.scrollY > sticky){
        nav.classList.add("sticky")
    }
    else{
        nav.classList.remove("sticky")
    }
}