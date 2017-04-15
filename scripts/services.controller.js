var app =angular.module("WebModule");
app.controller("servicescontrol",ServiceCtrl);

function ServiceCtrl(){
   
     this.content = [

      {
        "serp1": "Whether you’re looking to steer your career towards betterment or kick start your career in the emerging IT industry, you always need a trustworthy organization with vast industry and technology expertise to guide you in the right direction. At Tekcel we are committed to pave a path for your success by offering IT training in many emerging and hot technologies. Our technology training programs are designed by virtue of our deep industry insight and awareness of skills that are in high demand by most companies. Such companies always come to us to hire top technology talent that is retained and nurtured by us. Tekcel has the apt expertise to help you flourish in a rapidly evolving IT job market. We call it as “skills cultivation”, a robust and practical approach to help enhance your abilities to succeed in the ever dynamic IT industry.",
        "diffline2": "We put the capabilities in place to deliver-at all levels of the organization.",
       
      }
    ];

this.contentis=this.content[0];

}