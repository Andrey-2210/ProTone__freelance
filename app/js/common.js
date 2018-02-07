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
    nav: true,
    dots: false,
    dotsEach: false,
    navText: ""
  });

  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('#toTop').fadeIn();
  } else {
  $('#toTop').fadeOut();
  }
  });
  $('#toTop').click(function() {
   $('body,html').animate({scrollTop:0},800);
  });
});
