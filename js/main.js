// main.js

// gnb hover 액션
$(function(){
  $('#gnb .depth1 > li').hover(
    function(){
      $(this).find('.depth2').stop().show();
    },
    function(){
      $(this).find('.depth2').stop().hide();
    }
  );

});


// Swiper Slider
$(function(){
  const swiper = new Swiper('.swiper-container', {
    // 옵션 설정
    direction: 'horizontal', // 가로,세로(horizontal, vertical)
    loop: true,
    autoplay: true,  // 자동재생
  
    // 필요시 사용(pager)
    pagination: {
      el: '.swiper-pagination',
    },
  
    // 방향키(Navigation arrows)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


})
