var app =angular.module("WebModule",[]);
app.controller("contentcontrol",Content);

function Content(){
    this.homevar=true;

    this.homeclick = function(menu){
            this.homevar=false;
            this.newsvar=false;
             this.contactvar=false;
             this.aboutvar=false;
        if(menu === "home"){
            this.homevar=true;
            this.newsvar=false;
        }
        else if(menu === "news"){
             this.newsvar=true;
        }
        else if(menu === "contact"){
            this.contactvar=true;
        }
        else if(menu === "about"){
            this.aboutvar=true;
        }
       
    };
this.isActive = function (viewLocation) {
     var active = (viewLocation === this.location.path());
     return active;
};

var slideIndex = 0;
showSlides();
this.showclick=function(n) {
    slideIndex=n-1;
}
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}


}