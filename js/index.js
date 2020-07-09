$(document).ready(function () {
    var count = 0;

    developer_animation();
    function developer_animation() {
        setTimeout(function () {
            count++;
            if (count == 1) {
                title = "D";
            } else if (count == 2) {
                title = "De";
            } else if (count == 3) {
                title = "Dev";
            } else if (count == 4) {
                title = "Deve";
            } else if (count == 5) {
                title = "Devel";
            } else if (count == 6) {
                title = "Develo";
            } else if (count == 7) {
                title = "Develop";
            } else if (count == 8) {
                title = "Develope";
            } else if (count == 9) {
                title = "Developer";
            }
            if (count != 10) {
                $('#title').text(`A ${title}`);
                developer_animation();
            } else if (count == 10) {
                count = 0;
                setTimeout(function () {
                    designer_animation();
                }, 1000);
            }
        }, 100);
    }
    function designer_animation() {
        setTimeout(function () {
          count++;
          if (count == 1) {
            title = "D";
          } else if (count == 2) {
            title = "De";
          } else if (count == 3) {
            title = "Des";
          } else if (count == 4) {
            title = "Desi";
          } else if (count == 5) {
            title = "Desig";
          } else if (count == 6) {
            title = "Design";
          } else if (count == 7) {
            title = "Designe";
          } else if (count == 8) {
            title = "Designer";
          }
    
          if (count != 10) {
            $('#title').text(`A ${title}`);
            designer_animation();
          } else if (count == 10) {
            
            count = 0;
            
            
            setTimeout(function () {
              developer_animation();
            }, 1000);
          }
    
        }, 100);
      }


      animate_title();
      function animate_title() { 
    
        setTimeout(function(){
           
            $(".php_name").animate({ fontSize: "+=30px" }, 500);
            $(".php_name").animate({ letterSpacing: "+=15px" }, 1000);
    
            $(".db_name").animate({ fontSize: "+=30px" }, 500);
            $(".db_name").animate({ letterSpacing: "+=15px" }, 1000);
    
            $(".wd_name").animate({ fontSize: "+=30px" }, 500);
            $(".wd_name").animate({ letterSpacing: "+=15px" }, 1000);

            $(".jq_name").animate({ fontSize: "+=30px" }, 500);
            $(".jq_name").animate({ letterSpacing: "+=15px" }, 1000);
    
            $(".aj_name").animate({ fontSize: "+=30px" }, 500);
            $(".aj_name").animate({ letterSpacing: "+=15px" }, 1000);
    
            $(".bp_name").animate({ fontSize: "+=30px" }, 500);
            $(".bp_name").animate({ letterSpacing: "+=15px" }, 1000);

            setTimeout(function(){
              $(".php_name").animate({ fontSize: "-=30px" }, 500);
              $(".php_name").animate({ letterSpacing: "-=15px" }, 1000);
      
              $(".db_name").animate({ fontSize: "-=30px" }, 500);
              $(".db_name").animate({ letterSpacing: "-=15px" }, 1000);
      
              $(".wd_name").animate({ fontSize: "-=30px" }, 500);
              $(".wd_name").animate({ letterSpacing: "-=15px" }, 1000);
  
              $(".jq_name").animate({ fontSize: "-=30px" }, 500);
              $(".jq_name").animate({ letterSpacing: "-=15px" }, 1000);
      
              //animating android title
              $(".aj_name").animate({ fontSize: "-=30px" }, 500);
              $(".aj_name").animate({ letterSpacing: "-=15px" }, 1000);
      
              //adobe title
              $(".bp_name").animate({ fontSize: "-=30px" }, 500);
              $(".bp_name").animate({ letterSpacing: "-=15px" }, 1000);
              animate_title();
       

            },3000)
           
    
    
        }, 2000)
       }



       var project_count = 1;

       //automatic slide change

      /* ani();
       function ani(){
       setTimeout(function(){

        if(project_count == 3){
          project_count = 0;
        }
        project_count++;
        $(".main_img").attr("src","./img/img_"+ project_count + ".jpg")
        if (project_count == 1) {
          $('.pro_name').text('Online Bus Reservation System');
          $('.pro_content').text('Let your customers book bus tickets online using a bus ticket reservation system. Bus Reservation System is designed to automate the ticket purchasing through an easy-to-use online Bus Booking System. You Can Regeister a Bus and make it Available for Users To Book it.')
        } else if (project_count == 2) {
          $('.pro_name').text('Rest API in PHP');
          $('.pro_content').text("Rest API (Representational State Transfer) api's are web standards base architecture and uses HTTP Protocol for exchanging data between applications or systems. In RESTFUL web service HTTP methods like GET, POST, PUT and DELETE can be used to perform CRUD operations");       
         } else if (project_count == 3) {
          
          $('.pro_name').text('Online Examination System');
          $('.pro_content').text('An online examination system is a computer-based test system that can be used to conduct computer based tests online. This examination system uses fewer resources and reduces the need for question papers and answer scripts, exam room scheduling, arranging invigilators, coordinating with examiners, and more.')
        }

       },1000)

       setTimeout(function(){
        ani();
      },3000)
      
      }*/

      

       $('.next').click(function(){
         if(project_count == 3){
           project_count = 0;
         }
         project_count++;
         $(".main_img").attr("src","./img/img_"+ project_count + ".jpg")
         if (project_count == 1) {
          $('.pro_name').text('Online Bus Reservation System');
          $('.pro_content').text('Let your customers book bus tickets online using a bus ticket reservation system. Bus Reservation System is designed to automate the ticket purchasing through an easy-to-use online Bus Booking System. You Can Regeister a Bus and make it Available for Users To Book it')
        } else if (project_count == 2) {
          $('.pro_name').text('Rest API in PHP');
          $('.pro_content').text("Rest API (Representational State Transfer) api's are web standards base architecture and uses HTTP Protocol for exchanging data between applications or systems. In RESTFUL web service HTTP methods like GET, POST, PUT and DELETE can be used to perform CRUD operations");       
         } else if (project_count == 3) {
          
          $('.pro_name').text('Online Examination System');
          $('.pro_content').text('An online examination system is a computer-based test system that can be used to conduct computer based tests online. This examination system uses fewer resources and reduces the need for question papers and answer scripts, exam room scheduling, arranging invigilators, coordinating with examiners, and more.')
        }

       })

       
       $('.prev').click(function(){
        if(project_count == 1){
          project_count = 4;
        }
        project_count--;
        $(".main_img").attr("src","./img/img_"+ project_count + ".jpg")
        if (project_count == 1) {
         $('.pro_name').text('Online Bus Reservation System');
         $('.pro_content').text('Let your customers book bus tickets online using a bus ticket reservation system. Bus Reservation System is designed to automate the ticket purchasing through an easy-to-use online Bus Booking System. You Can Regeister a Bus and make it Available for Users To Book it')
       } else if (project_count == 2) {
         $('.pro_name').text('Rest API in PHP');
         $('.pro_content').text("Rest API (Representational State Transfer) api's are web standards base architecture and uses HTTP Protocol for exchanging data between applications or systems. In RESTFUL web service HTTP methods like GET, POST, PUT and DELETE can be used to perform CRUD operations");       
        } else if (project_count == 3) {
         
         $('.pro_name').text('Online Examination System');
         $('.pro_content').text('An online examination system is a computer-based test system that can be used to conduct computer based tests online. This examination system uses fewer resources and reduces the need for question papers and answer scripts, exam room scheduling, arranging invigilators, coordinating with examiners, and more.')
       }
      

      })



       animate_resume();
       function animate_resume() { 
    
        setTimeout(function(){
           
            $(".cx_name").animate({ fontSize: "+=10px" }, 500);
            $(".cx_name").animate({ letterSpacing: "+=5px" }, 1000);
    
            $(".cxii_name").animate({ fontSize: "+=10px" }, 500);
            $(".cxii_name").animate({ letterSpacing: "+=5px" }, 1000);
    
            $(".cc_name").animate({ fontSize: "+=10px" }, 500);
            $(".cc_name").animate({ letterSpacing: "+=5px" }, 1000);


            setTimeout(function(){
              $(".cx_name").animate({ fontSize: "-=10px" }, 500);
              $(".cx_name").animate({ letterSpacing: "-=5px" }, 1000);
      
              $(".cxii_name").animate({ fontSize: "-=10px" }, 500);
              $(".cxii_name").animate({ letterSpacing: "-=5px" }, 1000);
      
              $(".cc_name").animate({ fontSize: "-=10px" }, 500);
              $(".cc_name").animate({ letterSpacing: "-=5px" }, 1000);
  
              
              animate_resume();
       

            },3000)
           
    
    
        }, 2000)
       }

})
