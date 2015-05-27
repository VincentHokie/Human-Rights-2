// JavaScript Document

// JavaScript Document
$(document).ready(function() {
	
	$("header li, footer img, #leadership td img").hover(function() {
		$(this).css("cursor", "pointer");
	});
		var vision ="<strong>“To nurture and empower a Generation that values Human Rights as a platform for social welfare, peace, integrity, social justice, transformation and sustainable development in Uganda, Africa and globally.”</strong>";
		var visionHead = "Vision";
		var mission = "<strong>“To promote exchange of information and best practices by empower young individuals and their communities to be effective agents of change, human rights advocates and credible youths, leaders and successful professionals within their spheres of influence.”</strong>";
		var missionHead = "Mission";
		
		setInterval(function() {
		$("#leftStuff").toggleClass("active");
			}, 9900);
		
		$("#leftStuff p").html(vision).css("background-color", "#0F75BC").css("color", "#000");
		$("#leftStuff h4").html(visionHead);
		setInterval(function() {
		
		if($("#leftStuff").hasClass("active")) {
		$("#leftStuff p").html(mission).css("background-color", "#0F75BC").css("color", "#000");
		$("#leftStuff h4").html(missionHead);
		} else {
		$("#leftStuff p").html(vision).css("background-color", "#0F75BC").css("color", "#000");
		$("#leftStuff h4").html(visionHead);
		}
			}, 10000);
			
		setInterval(function() {
			$("#inspiration, #family").toggleClass("nowShowing");
			}, 26900);
			
		setInterval(function() {
			
		if ( $("#inspiration").hasClass("nowShowing") ) {
			
		$("#Malala").fadeToggle(500).delay(4000).fadeToggle(1000);
		$("#mlk").delay(4500).fadeToggle(1000).delay(4000).fadeToggle(1000);
		$("#NelsonM").delay(10000).fadeToggle(1000).delay(4000).fadeToggle(1000);
		$("#shirin").delay(15500).fadeToggle(1000).delay(4000).fadeToggle(1000);
		$("#silence").delay(21000).fadeToggle(1000).delay(4000).fadeToggle(1000);
		
		
	} else if ( $("#family").hasClass("nowShowing") ) {
		
		$("#oneFam").fadeToggle(500).delay(4000).fadeToggle(1000);
		$("#twoFam").delay(4500).fadeToggle(1000).delay(4000).fadeToggle(1000);
		$("#threeFam").delay(10000).fadeToggle(1000).delay(4000).fadeToggle(1000);
		$("#fourFam").delay(15500).fadeToggle(1000).delay(4000).fadeToggle(1000);
		$("#fiveFam").delay(21000).fadeToggle(1000).delay(4000).fadeToggle(1000);
	}
		}, 27000);
		
		if ( $("#inspiration").hasClass("nowShowing") ) {
			
		$("#Malala").fadeToggle(500).delay(4000).fadeToggle(1000);
		$("#mlk").delay(4500).fadeToggle(1000).delay(4000).fadeToggle(1000);
		$("#NelsonM").delay(10000).fadeToggle(1000).delay(4000).fadeToggle(1000);
		$("#shirin").delay(15500).fadeToggle(1000).delay(4000).fadeToggle(1000);
		$("#silence").delay(21000).fadeToggle(1000).delay(4000).fadeToggle(1000);
		
		
	}
	
	var bodyHeight = $(".active").height();
	var screenHeight = $("html").innerHeight();
	var screenWidth = $("html").innerWidth();
	var halfHeight = screenHeight/4;
	var halfWidth = screenWidth/3;
	
	if($(document).innerWidth() < 700) {
		$("#home, #contacts, #leadership, #about").click(function() {
			$("header").toggle(400);
		});
	}
	
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
	
	if($(document).innerWidth() >= 700) {
		
	$("#leadership td img").click(function() {
		var image = $(this).attr("src");
		$("#fadedBack").css("height", screenHeight).css("width", screenWidth).fadeToggle(500);
		$("#profile").css("top", halfHeight).css("left", halfWidth).fadeToggle(500);
		$("#profile img").attr("src", image);
	});
	
	$("#profile, #fadedBack").click(function() {
		$("#profile img").attr("src", "");
		$("#profile p").html("");
		$("#profile").fadeToggle(1);
		$("#fadedBack").fadeToggle(300);
	});
	
	
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
	
	}
});
