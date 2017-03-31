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
       
    }
this.isActive = function (viewLocation) {
     var active = (viewLocation === this.location.path());
     return active;
};

}