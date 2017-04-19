var app = angular.module("WebModule");
app.controller("careerscontrol", CareerCtrl);

function CareerCtrl() {

    this.content = [

        {
            "carp1": "Are you ready for a career that places you at the forefront of technology? Do you have what it takes to completely exceed clients’ expectations? Have you decided that you want to be the very best at what you do?",
            "carp2": "If you’re looking for a fast-paced environment where you can showcase your skills in consulting and technology and grow your competencies, we are the place for you. We offer a comprehensive benefits package and flexible work environment where you can make a difference in the wide variety of clients that we serve.",
            "carp3": "We are huge in our knowledge base, but we are small enough so that we are nimble in our decision making and actions. And we understand the challenges associated with consulting roles, so we work to minimize cross-country travel and maximize team support. Join a company that values and supports innovative ideas and customer-centric solutions; apply for a position with TeKcel Consulting today!",
            "benline1": "Generous PTO",
            "benline2": "Training and development opportunities",
            "benline3": "A commitment to work/life balance for all employees",
            "benline4": "Subsidized Health Insurance*",
            "benline5": "Subsidized Dental and Vision Insurance",
            "benline6": "401(k) program**",
            "benline7": "TeKcel Consulting, Inc. is an equal opportunity employer. Please apply @ us.careers@careers.com"
        }
    ];

    this.contentis = this.content[0];


    this.validateLogin=function(){
        this.novalidate=true;
        this.novalidate=false;
        this.novalidate=true;
    }

}