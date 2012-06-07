var zepto_func_exp = function () {
  
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
              imgString="<a href='#'><img id='img"+(i+1)+"' src='"+(arrImage[i])+"' alt='img' height='100%' width = '"+img_width+"'/></a>";
          else
              imgString=imgString+"<a href='#'><img id='img"+(i+1)+"' src='"+(arrImage[i])+"' alt='img' height='100%' width = '"+img_width+"'/></a>";
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
      // $('.next').on('tap', function(){
      //      alert("hi");
      // });
      
      $('.next').on('click', function(){ 
         if(count<totalimages-1) 
          {count=count+1;}     
          var sliderposition = count * imagewidth; 
          // alert(sliderposition) 
          // $('.slider').animate({left: -sliderposition+'px'}, 1000);  
          // $(".slider").animate({
          //   opacity: 0.25, left: '50px', rotateZ: '45deg', color: '#abcdef'
          // }, 2, 'ease-out')
		console.log("1");
		// $('.slider').style.webkitTransitionDuration = 300 + "ms";
		$('.slider').css('-webkit-transition-duration','500ms');
		console.log("2");
		// $('.slider').style.webkitTransform = "translate3d(" + sliderposition + "px, 0,0)";
		$('.slider').css('-webkit-transform', 'translate3d(-'+ sliderposition + 'px,0,0)');
		console.log("3");
		
      }); 

      $('.previous').on('click', function(){                                        
           if(count>=1)
              {count=count-1;} 

          var sliderposition = count * imagewidth;                 
          // $('.slider').animate({'left': -sliderposition}, 1000); 
		$('.slider').css('-webkit-transition-duration','500ms');
		$('.slider').css('-webkit-transform', 'translate3d(-'+ sliderposition + 'px,0,0)');

      });
    }
    
    
    
  };
  
}();