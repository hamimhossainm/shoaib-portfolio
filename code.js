// Navigation bar effects on scroll
window.addEventListener("scroll",function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky",scrollY > 0);
});

// Services section - model
let serviceModels = document.querySelector(".service-model");
let learnMoreBtn = document.querySelector(".learn-more-btn");
let modelCloseBtn = document.querySelector(".model-close-btn");

let model = function(modelClick){
    serviceModels[modelClick].classList.add("active");
}

learnMoreBtn.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        model(i);
    });
});

modelCloseBtn.forEach((modelCloseBtn) => {
    modelCloseBtn.addEventListener("click", () => {
        serviceModels.forEach((modelView) => {
            modelView.classList.remove("active");
        });
    });
});




