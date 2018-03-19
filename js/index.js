	$(document).ready(function(){
        $('.carousel').carousel();
		var sh = 0;
		$(window).scroll(function(){
			sh = $(document).scrollTop();
			if(sh > 75){
				$(".head,.bg").css("position","fixed");
				$(".bg").css({
					"background": "#000",
					"opacity": "0.8"
				})
			}else{
				$(".head,.bg").css("position","absolute");
				$(".bg").css({
					"background": "#333",
					"opacity": "initial"
				})
			}
		})
		/*$(".introduce").hover(function(){
			$(this).find("p").anmition({
				"bottom":"0";
			})
		})*/
		$(".introduce").hover(
		  function () {
			$(this).find("p").animate({
				"bottom":"-10"
			})
		  },
		  function () {
			$(this).find("p").animate({
				"bottom":"-40px"
			})
		  }
		);
		$(".event").mouseover(function(){
			$(".detail").html($(this).find(".text").html());
		})
		
	})