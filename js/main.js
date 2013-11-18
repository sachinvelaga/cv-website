    $(document).ready(function(){
        var currentdiv = '';
        var rotate = false;

    $('#da-slider').cslider({
        current     : 0,    
        bgincrement : 50,   
        autoplay    : true,
        interval    : 4000  
    });

    $(".wrapper-2").scroll(function(){
        
        if($(window).scrollTop() > 900 )
        {
              $('body').addClass('stop-scrolling');
             
                    if(currentdiv == '')
                    {
                    currentdiv = $('.image-info-wrapper div').first();
                    }
                    else{
                        currentdiv = $(currentdiv).next();
                    }
               changeimg(currentdiv);    
        }
      });

    function changeimg(currentdiv)
     {
       $(currentdiv).css('display','none');
       $(currentdiv).next('div').css('display','block');
     }
     
    $(".wrapper-4").bind('mousewheel',function(){
       if(rotate == false && $(window).scrollTop() >= 2249)
       {
        $('body').addClass('stop-scrolling');
       /* $('.outer-circle').css('-webkit-animation: spin1 2s infinite linear'); */

       DoRotate(360);
      AnimateRotate(360);
      rotate = true;
      }
     });

    function fadein()
     {
        var time = 400;
        $(".outer-circle div").each(function(){
             //console.log($(this));
            $(this).fadeIn(time + 600);
            time+=100;
        })
        $('body').removeClass('stop-scrolling');
     }   

    function DoRotate(d) {
        $(".outer-circle").css({
            transform: 'rotate(' + d + 'deg)'
        });
    }

    function AnimateRotate(d){
        var elem1 = $(".logo");
        
        $({deg: 0}).animate({deg: d}, {
            duration: 2000,
            step: function(now){
             elem1.css({
                     transform: "rotate(" + now + "deg)"
                });
            },
            complete:function(){
              fadein();
            }
        });
       } 
    });


