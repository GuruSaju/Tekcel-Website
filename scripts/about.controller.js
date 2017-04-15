var app =angular.module("WebModule");
app.controller("aboutcontrol",AboutCtrl);

function AboutCtrl(){
   
     this.content = [

      {
        "relp1": "A Staffing and Consulting firm that believes in the power of people. At TeKcel, we provide the strategy and services that power your business on a human scale, from finding and recruiting the right talent to anticipating your business changing needs.",
        "relp2": "Our IT staffing services, support technology organizations by providing skillful and experienced consultants whose technical proficiency and business knowledge help execute critical IT projects and manage day-to-day business operations.By investing ourselves in the success of our clients and our consultants, we create outcomes that benefit both and build the foundation for long-term partnerships.",
        "diffline1": "With years of experience working in the IT field, we understand the customer’s expectations and become their advocate.",
        "diffline2": "We put the capabilities in place to deliver-at all levels of the organization.",
        "diffline3": "Effective Marketing Strategy which is Different-but different in a positive,value-added way.",
        "diffline4": "Commitment to delivering bottom-line results without compromising on Quality.",
        "diffline5": "Carefully vetted consultants with the right skills and experience, and assessed for a good fit with your team",
        "diffline6": "Effective relationship building that clearly differentiates us from the competition.",
        "diffline7": "Our Dedicated sales, recruiting and staff members who strive to give more than what is expected"
      }
    ];

this.contentis=this.content[0];

}