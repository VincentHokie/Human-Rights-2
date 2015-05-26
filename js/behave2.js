// JavaScript Document

// JavaScript Document
$(document).ready(function() {
	
	$("header li, footer img, #leadership td img").hover(function() {
		$(this).css("cursor", "pointer");
	});
	
	var bodyHeight = $(".active").height();
	var screenHeight = $("html").innerHeight();
	var screenWidth = $("html").innerWidth();
	var halfHeight = screenHeight/4;
	var halfWidth = screenWidth/3;
	
	$("#home").addClass("active");
	
	$("#home").click(function() {
	$("#home, #contacts, #leadership, #about").removeClass("active");
	$("#home").addClass("active");
	});
	
	$("#contacts").click(function() {
	$("#home, #contacts, #leadership, #about").removeClass("active");
	$("#contacts").addClass("active");
	});
	
	$("#leadership").click(function() {
	$("#home, #contacts, #leadership, #about").removeClass("active");
	$("#leadership").addClass("active");
	});
	
	$("#about").click(function() {
	$("#home, #contacts, #leadership, #about").removeClass("active");
	$("#about").addClass("active");
	});
	
	$("#leadership td img").click(function() {
		var image = $(this).attr("src");
		$("#fadedBack").css("height", screenHeight).css("width", screenWidth).addClass("show");
		$("#profile").css("top", halfHeight).css("left", halfWidth).addClass("show");
		$("#profile img").attr("src", image);
	});
	
	$("#profile, #fadedBack").click(function() {
		$("#profile img").attr("src", "");
		$("#profile p").html("");
		$("#fadedBack").toggleClass("show");
		$("#profile").toggleClass("show");
	});
	
	var chair = "<p>Chairperson</p><p>Kasata Daniel</p><p>Ugandan</p><p>*Course*</p>";
	var viceChair = "<p>Vice Chairperson</p><p>Edris Kitugi</p><p>Ugandan</p><p>*Course*</p>";
	var genSec = "<p>General Secretary</p><p>Aisha Nakiyingi</p><p>Ugandan</p><p>*Course*</p>";
	var speaker = "<p>Speaker</p><p>Vicent Senyondo</p><p>Ugandan</p><p>*Course*</p>";
	var treasure = "<p>Treasurer</p><p>Elizabeth Aguet</p><p>Sudanese</p><p>*Course*</p>";
	var pubSec = "<p>Publicity Secretary</p>Innocent Jorugo<p></p><p>Ugandan</p><p>*Course*</p>";
	var orgSec = "<p>Oraganizing Secretary</p><p>Isaac Magezi</p><p>Ugandan</p><p>*Course*</p>";
	var womenRep = "<p>Women Representative</p><p>Kahande Harriet</p><p>Ugandan</p><p>*Course*</p>";
	var facReps = "<p>Faculty Representatives</p><p>Mulondo George/ Santama Mudathinu</p><p>Ugandan</p><p>*Course*</p>";
	var depSpeaker = "<p>Deputy Speaker</p><p>Kefa Adule</p><p>Ugandan</p><p>*Course*</p>";
	var assPubSec = "<p>Assistant Publicity Secretary</p><p>Mohammad Abubakar Balde</p><p>Somali</p><p>*Course*</p>";
	var assOrgSec = "<p>Assistant Oraganizing Secretary</p><p>Mwesigwa Freziric</p><p>Ugandan</p><p>*Course*</p>";
	
	$("#leadership td img").click(function() { $("#profile p").html(""); });
	
	$(".chair").click(function() { $("#profile p").html(chair); });
	
	$(".viceChair").click(function() { $("#profile p").html(viceChair); });
	
	$(".genSec").click(function() { $("#profile p").html(genSec); });
	
	$(".speaker").click(function() { $("#profile p").html(speaker); });
	
	$(".treasure").click(function() { $("#profile p").html(treasure); });
	
	$(".pubSec").click(function() { $("#profile p").html(pubSec); });
	
	$(".orgSec").click(function() { $("#profile p").html(orgSec); });
	
	$(".facReps").click(function() { $("#profile p").html(facReps); });
	
	$(".womenRep").click(function() { $("#profile p").html(womenRep); });
	
	$(".depSpeaker").click(function() { $("#profile p").html(depSpeaker); });
	
	$(".assPubSec").click(function() { $("#profile p").html(assPubSec); });
	
	$(".assOrgSec").click(function() { $("#profile p").html(assOrgSec); });
	
	  if($("#home").hasClass("active")) {
		for(var i=0; i<=5; i++) {
		$("#Malala").delay(4000).hide(1000);
		$("#mlk").delay(9000).hide(1000);
		$("#NelsonM").delay(14000).hide(1000);
		$("#shirin").delay(19000).hide(1000);
		$("#silence").delay(24000).hide(1000);
	  }
	}
});