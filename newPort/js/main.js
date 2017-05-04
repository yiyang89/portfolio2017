$(document).ready(function(){
  $('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    cssEase: 'ease',
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
    swipe: true,
    vertical: true,
    appendDots: $('.sliderdots'),
    arrows: false,
    responsive: true,
    accessibility: false
  });
  $.browserSwipe({
    up: function(){
      $('.vertical-slider').slick('slickPrev');
    },
    down: function(){
      $('.vertical-slider').slick('slickNext');
    },
  });
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
  $('body').on('swipeup',function(event) {
    $('.vertical-slider').slick('slickPrev');
  });
  $('body').on('swipedown',function(event) {
    $('.vertical-slider').slick('slickNext');
  });
  $('body').on('swipeleft', function(event){
    console.log("swipeleft");
    $('.single-item').slick('slickPrev');
  });
  $('body').on('swiperight', function(event){
    console.log("swiperight");
    $('.single-item').slick('slickNext');
  });
  $('.fa-arrow-down').click(function() {
    $('.vertical-slider').slick('slickNext');
  });
  $('.fa-arrow-up').click(function() {
    $('.vertical-slider').slick('slickPrev');
  });

  // var touchstartX = 0;
  // var touchstartY = 0;
  // var touchendX = 0;
  // var touchendY = 0;
//
  // document.body.addEventListener('touchstart', function(event) {
  //     // touchstartX = event.screenX;
  //     // touchstartY = event.screenY;
  //     touchstartX = event.changedTouches[0].screenX;
  //     touchstartY = event.changedTouches[0].screenY;
  // }, false);
  //
  // document.body.addEventListener('touchend', function(event) {
  //     // touchendX = event.screenX;
  //     // touchendY = event.screenY;
  //     touchendX = event.changedTouches[0].screenX;
  //     touchendY = event.changedTouches[0].screenY;
  //     handleGesture();
  // }, false);
  //
  // function handleGesture() {
  //     // alert('Swipe');
  //     // console.log('swipe');
  //     var swiped = 'swiped:';
  //     // console.log("START Y:" + touchstartY);
  //     // console.log("END Y:"+touchendY);
  //     if (touchendY < touchstartY) {
  //       // console.log("swipe up");
  //       $('.vertical-slider').slick('slickPrev');
  //     }
  //     if (touchendY > touchstartY) {
  //       // console.log("swipe down");
  //       $('.vertical-slider').slick('slickNext');
  //     }
  // }
});
