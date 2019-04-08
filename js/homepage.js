var slideTimer = 4500;
var duration = 1000;
var changer = (slideTimer + duration);

// $('.slider').tinySlider({
//  	namespace: 'lmap',
//  	animation: "slide",
//  	pager: false,
//  	nav: false,
//  	pauseOnHover: false,
//  	delay: slideTimer,
//  	duration: duration
// });

// $(window).load(function(){
// 	var currentProgramType = $('.slide').data("program-type");
// 	$('.section3').addClass(currentProgramType);
// 	window.setInterval(function(){
// 	  currentProgramType = $('.lmap-slide_active').data("program-type");
// 	  $('.section3').attr('class', 'section3' + ' ' + currentProgramType);
// 	  $('.lmap-slide_active').removeData();
// 	}, changer);
// });