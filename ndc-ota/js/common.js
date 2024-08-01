
$(function(){
  $('#topMenu').on('mouseenter click', function(){
    $('.dep_bg, .dep01').slideDown();
  });
  $('.dep_bg').on('mouseleave', function(){
    $('.dep_bg, .dep01').stop().slideUp();
  });
  $('.header_top').on('mouseenter', function(){
    $('.dep_bg, .dep01').slideUp();
  });
    $('.last-dep').on('focusout', function(){
      $('.dep_bg, .dep01').slideUp();
    });
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
});
