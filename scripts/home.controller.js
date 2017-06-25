var app =angular.module("WebModule");
app.controller("homecontrol",HomeCtrl);

function HomeCtrl(){
   
     this.content = [

      {
        "knowaboutusp1": "A Technology consulting enterprise with its corporate headquarters located in Virginia, USA. Tekcel was created by entrepreneurs who had a different vision of how to run a consulting firm. We have grown organically to become one of the fastest growing Technology consultancies, built on a heritage of thought leadership and a practice of pioneering innovative approaches to meet and exceed our client expectations. Today, every team member of Tekcel is committed to explore better ways to help our clients succeed and continually challenge themselves to do things differently for betterment",
        "knowaboutusp2": "How do you meet the demands of an increasingly fast-paced global economy? While keeping the costs under control, without compromising on the quality of services? You need a partner you can depend on for faster turnarounds, greater quality, cost efficiency and increased flexibility. Tekcel knows how to address your dynamic technology needs with quick delivery at competitive prices",
        "whatwedoline1": "Being Customer Centric is not our strategy, we are truly customer centric, we do not adapt to it, it is in our DNA.",
        "whatwedoline2": "We are always attentive to gain insight into our customer’s businesses pain points and needs.",
        "box1": "Pioneering, Innovative and Cutting Edge Technology Consulting with focus on Solutions",
        "box2": "Experienced, skillful and ingenious staff members with extensive industrial knowledge.",
        "box3": "Banking, Finance, Insurance, Government, Telecommunications, HealthCare,  Auto etc.",
      }
    ];

this.contentis=this.content[0];

}