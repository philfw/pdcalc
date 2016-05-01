$(document).ready(function(){

	//CALCULATOR

	function pd() {
		$('.all-done1').fadeIn(500);
	}

	function notPd() {
		$('.all-done2').fadeIn(500);
	}

	$('#q1 a.next').on('click', function() {
		var published = $('#public').val();
		var renew = parseInt(published) + 28;
		$('.published').html(published);
		$('#track ul').append("<li class='publishDate'>Published in " + published + "</li>").fadeIn(300);
		if(published < 1923 && published > 0){
			pd();
		} else if (published < 1978) {
			$('#q2 .next').attr('href','#q3');
			$('#renew').html(renew);
		} else {
			$('#q2 .next').attr('href','#q4');}
	});

	$('#q2 a.next').on('click', function() {
		var created = $('#create').val();
		var published = $('#public').val();
		$('.created').html(created);
		$('#track ul').append("<li class='createDate'>Created in " + created + "</li>");
		if (created > published){
			$('#error').fadeIn(500);}
	});

	$('#q3 a.finish').on('click', function(){
		console.log("go!")
		var published = parseInt($('#public').val());
		if ($('#yesRenew').is(':checked')) {
			$('#expiration').html(published+96);
			notPd();
		} else if ($('#noRenew').is(':checked')) {
			pd();
		}
	});

	$('#q4 a.next').on('click', function(){
		var created = parseInt($('#create').val());
		if ($('#yesWFH').is(':checked') && created>1978) {
			var expire
			var published = parseInt($('#public').val());
			if ((published+96)<(created+121)){
				expire=published+96;
			} else {expire=created+121};
			$('#expiration').html(expire);
			notPd();} 
	});

	$('#q5 a.finish').on('click', function(){
		console.log('go!');
		var published = parseInt($('#public').val());
		var created = parseInt($('#create').val());
		var expire
		if ($('#notDied').is(':checked')) {
			$('#expiration').html('a while--at least 70 years after the author dies.');
			notPd();
		} else if (published<2003) {
			expire = 2048;
			if ($('#yesWFH').is(':checked')) {
				if ((published+96)<(created+121) && (published+96)>expire){
					expire=published+96;
				} else if ((published+96)>(created+121) && (created+121)>expire){
					expire=created+121;
				}; 
			} else {expire=parseInt($('#died').val())+71}
			$('#expiration').html(expire);
			notPd();
		} else {
			expire = 2003;
			if ($('#yesWFH').is(':checked')) {
				if ((published+96)<(created+121) && (published+96)>expire){
					expire=published+96;
				} else if ((published+96)>(created+121) && (created+121)>expire){
					expire=created+121;
				}; 
			} else {expire=parseInt($('#died').val())+71}
			$('#expiration').html(expire);
			notPd();
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
		$(this).parent().siblings('p.help-text').fadeIn(300);
	});

	$('.close').on('click', function() {
		$(this).parent().fadeOut(300);
	})

	// AUTO SCROLLING

	$('.next').on('click', function (event){
		event.preventDefault();
		$('.help-text').fadeOut(500);
		$($(this).attr('href')).show();
		$('html, body').animate({
			scrollTop: $( $( this ).attr('href') ).offset().top
		}, 500);
	});

	$('.last').on('click', function (event){
		event.preventDefault();
		$('.help-text').fadeOut(500);
		$(this).parent().slideUp(500);
		if ($(this).parent('#q2')){$('li.createDate').html('');}
		if ($(this).parent('#q1')){$('li.publishDate').html('');}
	});

	//FORMATTING

	$('input').attr('autocomplete','off');

});