function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'

    })
}

var btn = document.querySelector ('.btn')
var info =document.querySelector ('#info')

btn.addEventListener ('click',() => {
    scrollTo(info);
})

$(function () {
   $(window).scroll(function() {
        $(' #learn .section-title').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+450) {
            $(this).addClass("fadeInUp");
        }
    });
  });
})


$(function () {
    $(window).scroll(function() {
         $('.dream-1').each(function(){
           var imagePos = $(this).offset().top;
 
           var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow+450) {
             $(this).addClass("fadeInUp");
         }
     });
   });
 })

 
 $(function () {
    $(window).scroll(function() {
         $('.dream-2').each(function(){
           var imagePos = $(this).offset().top;
 
           var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow+450) {
             $(this).addClass("fadeInUp");
         }
     });
   });
 })

 $(function () {
    $(window).scroll(function() {
         $('.dream-3').each(function(){
           var imagePos = $(this).offset().top;
 
           var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow+450) {
             $(this).addClass("fadeInUp");
         }
     });
   });
 })

 $(function () {
    $(window).scroll(function() {
         $('#info .section-title').each(function(){
           var imagePos = $(this).offset().top;
 
           var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow+450) {
             $(this).addClass("fadeInUp");
         }
     });
   });
 })

 $(function () {
    $(window).scroll(function() {
         $('.form').each(function(){
           var imagePos = $(this).offset().top;
 
           var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow+450) {
             $(this).addClass("rotateInUpLeft");
         }
     });
   });
 })



 

