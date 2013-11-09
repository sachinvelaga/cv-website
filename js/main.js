$(document).ready(function(){
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
});


