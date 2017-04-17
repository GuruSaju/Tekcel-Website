var app =angular.module("WebModule",[]);
app.controller("contentcontrol",Content);

function Content(){
    this.homevar=true;
 /*   if(this.servicevar === true){
             this.servicevar=true;
            this.homevar=false;
        }
        else if(this.contactvar === true){
             this.contactvar=true;
              this.homevar=false;
        }
        else if(this.aboutvar === true){
            this.aboutvar=true;
             this.homevar=false;
        }
        else if(this.careervar === true){
            this.careervar=true;
             this.homevar=false;
        }
        */

    this.homeclick = function(menu){
            this.homevar=false;
            this.servicevar=false;
             this.contactvar=false;
             this.aboutvar=false;
             this.careervar=false;
        if(menu === "home"){
            this.homevar=true;
        }
        else if(menu === "service"){
             this.servicevar=true;
        }
        else if(menu === "contact"){
            this.contactvar=true;
        }
        else if(menu === "about"){
            this.aboutvar=true;
        }
        else if(menu === "career"){
            this.careervar=true;
        }
    };
this.isActive = function (viewLocation) {
     var active = (viewLocation === this.location.path());
     return active;
};
var initial;
var slideIndex = 0;
showSlides();
this.showclick=function(n) {
    slideIndex=n-1;
    window.clearTimeout(initial);
    showSlides();
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
    initial=window.setTimeout(showSlides, 4000); // Change image every 2 seconds
}


this.responsive=function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

}