// Navigation bar effects on scroll
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", scrollY > 0);
});

// Services section - model
let serviceModels = document.querySelectorAll(".service-model");
let learnMoreBtn = document.querySelectorAll(".learn-more-btn");
let modelCloseBtn = document.querySelectorAll(".model-close-btn");


let model = function(modelClick) {
    serviceModels[modelClick].classList.add("active");
}


learnMoreBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        model(i);
    });
});


modelCloseBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        serviceModels.forEach((modelView) => {
            modelView.classList.remove("active");
        });
    });
});


// Project Section - model
let projectModels = document.querySelectorAll(".project-model");
let imgCards = document.querySelectorAll(".img-card");
let projectCloseBtn = document.querySelectorAll(".project-close-btn");


let projectModel = function(modelClick) {
    projectModels[modelClick].classList.add("active");
}


imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        model(i);
    });
});


projectCloseBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        projectModels.forEach((projectmodelView) => {
            projectmodelView.classList.remove("active");
        });
    });
});



