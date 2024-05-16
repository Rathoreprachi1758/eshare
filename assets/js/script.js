/////// ******************************************* marquee start ********************************/////////

/////// ******************************************** marquee end **************************************//////

// ************************************************** what can do card start ***************************////

//  ************************************************* what can do card end ****************************////

// ////////////////////****************************slider round btn start ************************/////////////////// */

////////////////////////////////////////***********************slider round btn end***************************************************//////////////////////////////////////////////////////

///////////////////////************************nav toggle start*********************//////////////////////

// ////////////////////////////////////////////***************nav toggle end********************/////////////////

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $(".navigation").css("margin", "0px");
      $(".navigation").css("border-radius", "0px");
    } else {
      $(".navigation").css("margin", "0px 40px");
      $(".navigation").css("border-radius", "300px");
    }
  });
});






  $(".slider-whatcando").owlCarousel({
    loop: true,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 2,
        nav: true,
      },
    },
  });
