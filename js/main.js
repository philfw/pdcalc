$(document).ready(function(){

	//CALCULATOR

	function allDone () {
		$('.all-done').fadeIn(500);
	}

	$('#q1 a.next').on('click', function() {
		var pub = $('#public').val();
		if(pub==="19XX"){
			$('input#public').css('border-color', 'red');
		}
		if(pub < 1923 || pub > 0){
			allDone();
		}
	});

	//HAMBURGER MENU

	// $('.hamburger').on('click', function() {
	// 	$('hamburger').toggleClass('fixed');
	// 	$('nav ul li').slideToggle(300);
	// 	$('nav ul li').css({
	// 		display:'list-item',
	// 		float:'left'
	// 	});
	// });

	//HELP

	$('a.help').on('click', function(event) {
		event.preventDefault();
		$(this).parent().next('p.help-text').fadeIn(300);
	});

	// AUTO SCROLLING

	$('.next').on('click', function (event){
		event.preventDefault();
		$(this).parent().next('div.panel').show();
		$('html, body').animate({
			scrollTop: $( $( this ).attr('href') ).offset().top
		}, 500);
	});

	$('.last').on('click', function (event){
		event.preventDefault();
		$(this).parent().slideUp(500);
	});

	//FORM STYLING

	// $('label').on('click', function() {

	// });

});