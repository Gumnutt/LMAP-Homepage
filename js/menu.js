var closeBtnShow = anime({ 
  targets: '.menu__toggle-inner--close',     
  duration: 300,
  opacity: 1,
  autoplay: false   
});
var closeBtnHide = anime({ 
  targets: '.menu__toggle-inner--close',     
  duration: 300,
  opacity: 0,
  autoplay: false   
});

$('.menu__toggle').on('click', function(){
  var clicks = $(this).data('clicks');
  if (!clicks) {
    $('nav').toggleClass('menu--open');
    closeBtnShow.play();
    closeBtnShow.restart();
  } else {
    $('nav').toggleClass('menu--open');
    closeBtnHide.play();
    closeBtnHide.restart();
  }
  $(this).data("clicks", !clicks);
});



//var i = $('.menu__item').length;
//console.log(i);

$('.menu--open .menu__item').each(function(i){
  setTimeout(function(){
    $(this).eq(i).addClass('is-visible');
  }, 200 * i);
});
