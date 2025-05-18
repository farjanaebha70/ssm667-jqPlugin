


AOS.init({
  easing:  'ease-in-out-cubic',
  
  delay:500
  
  })




 $(function() {
           
            
            $("#marqueeLeft").marquee({
                direction: 'left',
                speed: 15,
                spaceBetween: 15,
                pausehover: true
            });
            
           
        });

 /*slick slider start--*/
$(document).ready(function(){
 $('.slick_test').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  
});
});

$(document).ready(function(){
$('.slick_test1').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true,
  fade: true,
  cssEase: 'linear'
});
});

 /*slick slider end--*/
 /*parallax start--*/

$(document).ready(function(){
$('.parallax-window').parallax({imageSrc: 'images/i.jpg'});
});

