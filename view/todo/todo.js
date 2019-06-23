$(document).ready(() => {

});
$(window).on("load",function(){
            $(window).scroll(function(){
            if($(document).scrollTop()>60){
                
                $(".searchbar").addClass("fixed");
                $(".container").css("top","140px");
                
            }else{
                $(".searchbar").removeClass("fixed");
                 $(".container").css("top","0px");
                
            }
        })
  })
