(function($) {

	$(function() {

		var jcarousel = $(".jcarousel");

		jcarousel.jcarousel({
			animation: {
				duration: 1000,
				easing: 'linear',
				complete: function() {
				}
			}
		});

		jcarousel.on("jcarousel:reload jcarousel:create", function () {

			var carousel = $(this);
			var width = carousel.innerWidth();
			
			carousel.jcarousel("items").css("width", Math.ceil(width) + "px");

		}).jcarousel({ wrap: "circular" }).jcarouselAutoscroll({
            interval: 5000,
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

