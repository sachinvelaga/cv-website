$(document).ready(function(){
    var rotate = false;
$('#da-slider').cslider({
 
    current     : 0,    
    // index of current slide
     
    bgincrement : 50,   
    // increment the background position 
    // (parallax effect) when sliding
     
    autoplay    : true,
    // slideshow on / off
     
    interval    : 4000  
    // time between transitions
     
});
  $(".wrapper-2").bind('mousewheel' , function(){
    
    if($(window).scrollTop() > 813)
    {
          
    }
  });


 $(".wrapper-4").bind('mousewheel' , function(){
   if(rotate == false && $(window).scrollTop() > 2249)
   {
    $('body').addClass('stop-scrolling');
   
    DoRotate(360);
    AnimateRotate(360);
    rotate = true;
  }
 })

 function fadein()
 {
    var time = 400;
    $(".outer-circle div").each(function(){
         //console.log($(this));
        $(this).fadeIn(time + 600);
        time+=100;
    })
 }   


function DoRotate(d) {
    $(".outer-circle").css({
        transform: 'rotate(' + d + 'deg)'
    });
}

function AnimateRotate(d){
    var elem1 = $(".logo");
    var elem2 = $(".animate-cover");

    $({deg: 0}).animate({deg: d}, {
        duration: 2000,
        step: function(now){
            elem1.css({
                 transform: "rotate(" + now + "deg)"
            });
         $(elem2).animate( {  width : 0 +'px', position:'relative'}, 2100 );
        },
        complete:function(){
          fadein();
          $('body').removeClass('stop-scrolling');
        }
    });
} 
});


