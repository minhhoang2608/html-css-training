$(document).ready(function(){
  // grab the initial top offset of the navigation
        var stickyNavTop = $('#navbar').offset().top;
        
        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var stickyNav = function(){
          var scrollTop = $(window).scrollTop(); // our current vertical position from the top
               
          // if we've scrolled more than the navigation, change its position to fixed to stick to top,
          // otherwise change it back to relative
          if (scrollTop > stickyNavTop) { 
              $('#navbar').addClass('sticky');
          } else {
              $('#navbar').removeClass('sticky'); 
          }
      };

      stickyNav();
      // and run it again every time you scroll
      $(window).scroll(function() {
        stickyNav();
      });


  //Declare variable slideIndex for current slide
  var slideIndex;

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";

    //Next slide
    slideIndex++;

    //If last slide, move to first slide
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }

    //Auto slide switch after 5s
    setTimeout(showSlides, 5000);
  }

  //First slide default
  showSlides(slideIndex = 0);

  $(".dot").on("click", function() {
    var n = $(this).data("lastValue");
    showSlides(slideIndex = n);
  });
});