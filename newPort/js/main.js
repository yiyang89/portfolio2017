$(document).ready(function(){
  $('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    swipeToSlide: true,
    swipe: true,
    responsive: true
  });
  $('.vertical-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    cssEase: 'ease',
    swipeToSlide: true,
    swipe: true,
    vertical: true,
    appendDots: $('.sliderdots'),
    arrows: false,
    responsive: true
  })
  $.browserSwipe({
    up: function(){
      $('.vertical-slider').slick('slickPrev');
    },
    down: function(){
      $('.vertical-slider').slick('slickNext');
    }
  });
  $('body').keydown(function(event) {
    if (event.keyCode == 38 || event.keyCode == 37) {
      $('.vertical-slider').slick('slickPrev');
    } else if (event.keyCode == 40 || event.keyCode == 39) {
      $('.vertical-slider').slick('slickNext');
    }
  })
});
