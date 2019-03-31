$(document).ready(function () {
     $('.textbox').fadeIn(1500);
    // $('.textbox').show(2200);
     //$('.textbox').slideDown(1000);
});

$(document).on('scroll', function () {
     var scrollPos = $(document).scrollTop(); //jak daleko przewineliśmy
     var sectionOffset = $(".about").offset().top; //gdzie jest dany element, na jakiej wysokoscio od początku strony się zaczyna.
     //console.log(scrollPos);
     //console.log(sectionOffset);
 
     if (scrollPos < sectionOffset) {
       $(".home").css('opacity', 1 - 1.2 * scrollPos / sectionOffset);
     }
   });