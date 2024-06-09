window.addEventListener("scroll",function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky",scrollY > 0);
});