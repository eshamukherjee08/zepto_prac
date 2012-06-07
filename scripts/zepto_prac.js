var zepto_func = function () {
  
  function GetImageArray()
  {
	  var img_width = $(".slider").parent().width();
      var arrImage=new Array();
      arrImage[0]="images/pp1.png";
      arrImage[1]="images/pp2.png";
      arrImage[2]="images/pp3.png";
	  arrImage[3]="images/pp4.png";
	  arrImage[4]="images/pp5.png";
      var imgString;

      for(var i=0;i<5;i++)
      {
          if(i==0)
              imgString="<div><a href='#'><img id='img"+(i+1)+"' src='"+(arrImage[i])+"' alt='img' height='300px' width = '"+img_width+"'/></a><div>This is Image Number"+i+"</div></div>";
          else
              imgString=imgString+"<div><a href='#'><img id='img"+(i+1)+"' src='"+(arrImage[i])+"' alt='img' height='300px' width = '"+img_width+"'/></a><div>This is Image Number"+i+"</div></div>";
      }       

      $('#slider').html(imgString);
  }
  
  return {
    
    init: function () {      
      GetImageArray();
      var imagewidth = $('.visible-area').width();            
      var totalimages = $('.slider img').size();                    
      var sliderwidth = imagewidth * totalimages;                   
      $('.slider').css({width : sliderwidth + 'px'});                     

      var count=0;
      
      $('.slider').on('swipeLeft', function(){       
		if(count<totalimages-1) 
		{count=count+1;}     
		var sliderposition = count * imagewidth; 
		// $('.slider').animate({left: -sliderposition+'px'}, 500);
		$('.slider').css('-webkit-transition-duration','500ms');
		$('.slider').css('-webkit-transform', 'translate3d(-'+ sliderposition + 'px,0,0)');
      }); 

      $('.slider').on('swipeRight', function(){      
           if(count>=1)
              {count=count-1;} 

          var sliderposition = count * imagewidth;           
          // $('.slider').animate({'left': -sliderposition}, 500);
		$('.slider').css('-webkit-transition-duration','500ms');
		$('.slider').css('-webkit-transform', 'translate3d(-'+ sliderposition + 'px,0,0)');
      });
    }
    
    
    
  };
  
}();