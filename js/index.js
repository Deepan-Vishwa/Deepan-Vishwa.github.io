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
    
    
        }, 2000)

        


    animate_title();
       
       }
})
