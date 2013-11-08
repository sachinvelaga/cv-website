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
    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / .8); 
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
})
