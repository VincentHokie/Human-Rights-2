// JavaScript Document
$(document).ready(function() {
	
	$("header li, footer img").hover(function() {
		$(this).css("cursor", "pointer");
	});
	
	if(window.innerHeight >= 700) {
		$("#smallTable").hide();
		$("#bigTable").show();
	} else {
		$("#bigTable").hide();
		$("#smallTable").show();
	}
		
	$('#homeNav').click(function() {
		if(window.innerHeight >= 700) {
		$("#aboutGet").css("height", "20px");
		$('#homeGet').ScrollTo({
			duration:600,
			easing:'linear'
			});
		} else {
			$('#homeGet').ScrollTo({
			duration:600,
			easing:'linear'
			});
			$("header").slideToggle(500);
		}
	});
	
	$('#contactsNav').click(function() {
		if(window.innerHeight >= 700) {
			
		$("#aboutGet").css("height", "20px");
		$('#contacts').ScrollTo({
			duration:600,
			easing:'linear'
			});
		} else {
			$('#contacts').ScrollTo({
			duration:600,
			easing:'linear'
			});
			$("header").slideToggle(500);
			}
	});
	
	$('#leadershipNav').click(function() {
		if(window.innerHeight >= 700) {
		$("#aboutGet").css("height", "20px");
		$('#leadershipGet').ScrollTo({
			duration:600,
			easing:'linear'
			});
		} else {
			$('#leadership').ScrollTo({
			duration:600,
			easing:'linear'
			});
			$("header").slideToggle(500);
			}
	});

	$('#aboutNav').click(function() {
		if(window.innerHeight >= 700) {
		$("#aboutGet").css("height", "75px");
		$('#aboutGet').ScrollTo({
			duration:600,
			easing:'linear'
			});
	  } else {
	  $('#about').ScrollTo({
			  duration:600,
			  easing:'linear'
			  });
			  $("header").slideToggle(500);
	}
	});
	
	$("#home, #about, #leadership, #contacts, footer").click(function() {
		if(window.innerHeight < 700) {
		$("header").slideToggle(500);
		}
	});
});