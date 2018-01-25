$(document).ready(function(){
  $( ".hamburger-box" ).click(function() {
    if ($(".menu-mobile").hasClass('is-active')){
      $(".menu-mobile").removeClass('is-active')
      $(".header__menu--mobile").removeClass('active')
    }else{
      $(".menu-mobile").addClass('is-active')
      $(".header__menu--mobile").addClass('active')
    }

});
  $(".slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    dotsEach: true,
    navText: ""
  });
  $(".slider-partners").owlCarousel({
    items: 4,
    loop: true,
    dots: true,
    dotsEach: true,
    navText: ""
  });
});
