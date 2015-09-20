$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		singleItem : true,
		items : 1,
		itemsDesktop: false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false,

		//Lazy load
		lazyLoad : true,
		lazyFollow : true,
		lazyEffect : "fade"
	});

	$("#owl-news").owlCarousel({
		navigationText : false,
		navigation : true, // Show next and prev buttons
		pagination: false,
		singleItem : true,
		items : 1,
		itemsDesktop: false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false
	});

	$("#owl-book").owlCarousel({
		navigationText : false,
		navigation : true, // Show next and prev buttons
		pagination: false,
		singleItem : true,
		items : 1,
		itemsDesktop: false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false,

		//Lazy load
		lazyLoad : true,
		lazyFollow : true,
		lazyEffect : "fade"
	});
/*
	.owl-theme .owl-controls{
		width: 100%;
		position: absolute;
		/*bottom: -55px;*/
		/*left: 46%;*/



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//  счётчик обратный
	$(function(){

		var note = $('#note'),
			tsst = (new Date(2015,8,11)).getTime(),
			ten = 15*24*60*60*1000,
			now = (new Date()).getTime(),
			tens,
			ts;
		tens = Math.floor((now - tsst)/ten)+1,
			ts = tsst + ten*tens;


		$('#countdown').countdown({
			timestamp        : ts,
			callback        : function(days, hours, minutes, seconds){

				var message = "";

				message += days + " дней" + ( days==1 ? '':'' ) + ", ";
				message += hours + " часов" + ( hours==1 ? '':'' ) + ", ";
				message += minutes + " минут" + ( minutes==1 ? '':'' ) + " и ";
				message += seconds + " секунд" + ( seconds==1 ? '':'' ) + " <br />";



				note.html(message);
			}
		});
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});


