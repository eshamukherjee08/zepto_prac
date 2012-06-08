var zepto_func_exp = function () {

	function GetImageArray(img_list)
	{
		var img_width = $(".slider").parent().width();  
		var textString;
		for(var k=0;k<5;k++)
		{
			$('#slider').append("<a href='#'><img id='img"+(k+1)+"' src='"+img_list[k].src+"' alt='img' height='100%' width = '"+img_width+"'/></a>")
			if(k==0)
				textString="<div>This is image count <b>"+(k+1)+"</b> add any text you want to.</div>"
			else
				textString=textString+"<div>This is image count <b>"+(k+1)+"</b> add any text you want to.</div>"
		}   
		$('#slider-text').html(textString);
	}

	return {
		preload: function (images) {
		    if (document.images) {
		        var i = 0;
		        var imageArray = new Array();
		        imageArray = images.split(',');
		        for(i=0; i<=imageArray.length-1; i++) {
					document.write('<img src="' + imageArray[i] + '" height="1px" width ="1px"/>');
		        }
		    }
		},

		init: function () {    
			var images = document.images;
			var img_list = $.extend({}, images);
			GetImageArray(img_list);
			var imagewidth = $('.visible-area').width();                 
			var totalimages = $('.slider img').size();                    
			var sliderwidth = imagewidth * totalimages;
			$('.slider-text div').css({width : imagewidth + 'px'});                          
			$('.slider, .slider-text').css({width : sliderwidth + 'px'});                     

			var count=0;
			$('.next').on('click', function(){ 
				console.log("p")
				if(count<totalimages-1) 
				{count=count+1;}     
				var sliderposition = count * imagewidth; 
				$('.slider, .slider-text').css('-webkit-transition-duration','500ms');
				$('.slider, .slider-text').css('-webkit-transform', 'translate3d(-'+ sliderposition + 'px,0,0)');		
			}); 

			$('.previous').on('click', function(){
				if(count>=1)
				{count=count-1;} 


				var sliderposition = count * imagewidth;                 
				$('.slider, .slider-text').css('-webkit-transition-duration','500ms');
				$('.slider, .slider-text').css('-webkit-transform', 'translate3d(-'+ sliderposition + 'px,0,0)');

			});
		}



	};

}();