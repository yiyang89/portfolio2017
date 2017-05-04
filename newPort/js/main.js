$(document).ready(function(){
  $('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    cssEase: 'ease',
    swipeToSlide: true,
    swipe: true,
    responsive: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  $('.vertical-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    cssEase: 'ease',
    // swipe: true,
    swipe: false,
    vertical: true,
    appendDots: $('.sliderdots'),
    arrows: false,
    responsive: true,
    accessibility: false
  });
  // $.browserSwipe({
  //   up: function(){
  //     $('.vertical-slider').slick('slickPrev');
  //   },
  //   down: function(){
  //     $('.vertical-slider').slick('slickNext');
  //   },
  // });
  $('body').keydown(function(event) {
    if (event.keyCode == 38) {
      $('.vertical-slider').slick('slickPrev');
    } else if (event.keyCode == 40) {
      $('.vertical-slider').slick('slickNext');
    } else if (event.keyCode == 37) {
      $('.single-item').slick('slickPrev');
    } else if (event.keyCode == 39) {
      $('.single-item').slick('slickNext');
    }
  });
  // $('body').on('swipeup',function(event) {
  //   $('.vertical-slider').slick('slickPrev');
  // });
  // $('body').on('swipedown',function(event) {
  //   $('.vertical-slider').slick('slickNext');
  // });
  // $('body').on('swipeleft', function(event){
  //   console.log("swipeleft");
  //   $('.single-item').slick('slickPrev');
  // });
  // $('body').on('swiperight', function(event){
  //   console.log("swiperight");
  //   $('.single-item').slick('slickNext');
  // });
  $('.fa-arrow-down').click(function() {
    $('.vertical-slider').slick('slickNext');
  });
  $('.fa-arrow-up').click(function() {
    $('.vertical-slider').slick('slickPrev');
  });
});
