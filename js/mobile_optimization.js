//(function($) {
//	
//	var videoPopupPlayButton=self.setInterval(function(){		
//		
//	  $(document).ready(function() {			
//			
//		/*display type Blocks2 <--*/
//		
//		
//		
//		var getWidgetWidth = $('#linker_widget').width();
//		
//		console.log(getWidgetWidth);
//		
//		if(getWidgetWidth<350) {
//			$(".contextly_dtype_block li").css("width", "100%");
//			$(".contextly_dtype_block li").css("max-width", "100%");
//			$(".contextly_dtype_block li img").css("width", "30%");
//			$(".contextly_dtype_block li p").css({"width":"60%", "margin-top":0});
//			$(".vidpop-playbutton-big").css("width", "30%");
//		} else { 
//			$(".contextly_dtype_block li").css("width", "23%");
//			$(".contextly_dtype_block li").css("max-width", 160);
//			$(".contextly_dtype_block li img").css("width", "94%");
//			$(".contextly_dtype_block li p").css({ "width":"94%", "margin-top":5});
//			$(".vidpop-playbutton-big").css("width", "94%");			
//		}	
//	  
//	});
//	
//	},10);
//		
//	
//		
//var videoPopupPlayButton=self.setInterval(function(){		
//		
//	  $(document).ready(function() {		
//		
//		
//		
//		/*display type: Float <--*/		
//		var getFloatWidth = $('#linker_widget').width();
//
//		if(getFloatWidth<350) {			
//			$(".contextly_dtype_float li").css({"width":"100%", "min-height":"90px"});
//			$(".contextly_dtype_float img").css("width", "100%");		
//			$(".contextly_dtype_float p.link").css({ "width":"100%", "max-width":"100%", "margin-left":"0"});
//		}		
//		
//		else if(getFloatWidth<550 && getFloatWidth>350) {			
//			$(".contextly_dtype_float li").css({"width":"100%", "min-height":"90px"});
//			$(".contextly_dtype_float img").css("width", "38%");
//			$(".contextly_dtype_float p.link").css({ "width":"59%", "max-width":"100%", "margin-left":"2%"});
//		}
//		
//		else { 
//			$(".contextly_dtype_float li").css({"width":"30.3%", "min-height":"190px"});
//			$(".contextly_dtype_float img").css("width", "100%");
//			$(".contextly_dtype_float p.link").css({ "width":"100%", "max-width":"100%", "margin-left":"0"});		
//		}				
//	
//		var getImageHeight = $('.blocks-widget li img').height();
//		$(".vidpop-playbutton-big").css("height", getImageHeight);		
//		
//		
//		/*display type: sidebar left <--*/	
//		
//		var getLeftSidebarWidth = $('.contextly-sidebar-left').width();
//
//		if(getLeftSidebarWidth < 240) {
//			$(".contextly-sidebar .horizontal-line li").css("float", "left");
//			$("horizontal-line").css("float", "left");
//			$(".contextly-sidebar .linker_images li:first-child").css("margin-bottom", "5px");
//		} else {
//			$(".contextly-sidebar .horizontal-line li").css("float", "none");
//			$(".contextly-sidebar .linker_images li:first-child").css("margin-bottom", "0");
//		}
//		
//			
//	  });	
//	  		
//	},10);	
//
//})(jQuery);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
