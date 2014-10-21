$(document).ready(function(){
	//functions to toggle visibility of resume sections and direction of arrow

    $.fn.toggleArrow = function()
	{
			var arrow = this.find(".vSymbol").text();
			this.find(".vSymbol").text(arrow == '\u25bc' ? '\u25b2' : '\u25bc');
	}


	$("#h2Work").click(function(){
		$(this).toggleArrow();		
		$(".work-entry").slideToggle(100);
	});
	$("#h2Projects").click(function(){
		$(this).toggleArrow();
		$(".project-entry").slideToggle(100);
	});
	$("#h2Education").click(function(){
		$(this).toggleArrow();
		$(".education-entry").slideToggle(100);
		//note: #h2Education click handler contains a search for h3 tag instead of selecting by id
		//  since template was in helper.js and didn't have id
		$(this).closest("div").find("h3").slideToggle(100);
	});
	$("#h2Map").click(function(){
		$(this).toggleArrow();
		$("#map").slideToggle(100);
	});

});