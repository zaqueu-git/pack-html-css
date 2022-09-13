(function($) {

	$(function() {

		var jcarousel = $(".jcarousel");

		jcarousel.jcarousel({
			animation: {
				duration:700,
				easing:   'linear',
				complete: function() {
				}
			}
		});

		jcarousel.on("jcarousel:reload jcarousel:create", function () {

			var carousel = $(this) /*, width = $(window).width() */;

			width = carousel.innerWidth();
			
			if (width >= 1680) {
				width = width / 4;
			} else if (width >= 1100){
				width = width / 3;
			} else if (width >= 740){
				width = width / 2;
			} else if (width >= 300){
				width = width / 1;
			}else{
				//width = $(window).width();
			}
			
			carousel.jcarousel("items").css("width", Math.ceil(width) + "px");

		}).jcarousel({ wrap: "circular" }).jcarouselAutoscroll({
            interval: 2200,
            autostart: true,
            create: $('.Slides').hover(
            	function(){
		        	$('.jcarousel').jcarouselAutoscroll('stop');
		    	},
			    function(){
			        $('.jcarousel').jcarouselAutoscroll('start');
			    }
			)
        });

		$(".jcarousel-control-prev").jcarouselControl({ target: "-=1" });
		$(".jcarousel-control-next").jcarouselControl({ target: "+=1" });
		$(".jcarousel-pagination").on("jcarouselpagination:active", "a", function() {
			$(this).addClass("active");
		}).on("jcarouselpagination:inactive", "a", function() {
			$(this).removeClass("active");
		}).on("click", function(e) {
			e.preventDefault();
		}).jcarouselPagination({ perPage: 1, item: function(page) { 
			return "<a href='#" + page + "'>" + page + "</a>"; }
		});

	});

})(jQuery);

