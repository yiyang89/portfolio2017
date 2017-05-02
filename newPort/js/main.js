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
    cssEase: 'linear',
    swipeToSlide: true,
    swipe: true,
    vertical: true,
    appendDots: $('.sliderdots'),
    arrows: false,
    responsive: true
  })
});
