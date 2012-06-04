var zepto_func = function () {
  
  function GetImageArray()
  {
      var arrImage=new Array();
      arrImage[0]="images/pizza1.png";
      arrImage[1]="images/pizza2.png";
      arrImage[2]="images/pizza3.png";

      var imgString;

      for(var i=0;i<3;i++)
      {
          if(i==0)
              imgString="<a href='#'><img id='img"+(i+1)+"' src='"+(arrImage[i])+"' alt='img' height='315' width='320'/></a>";
          else
              imgString=imgString+"<a href='#'><img id='img"+(i+1)+"' src='"+(arrImage[i])+"' alt='img' height='315' width='320'/></a>";
      }       

      $('#slider').html(imgString);
  }
  
  return {
    
    init: function () {      
      GetImageArray();
      var imagewidth = 320;                 
      var totalimages = $('.slider img').size();                    
      var sliderwidth = imagewidth * totalimages;                   
      $('.slider').css({width : sliderwidth + 'px'});                     

      var count=0;
      // $('.next').on('tap', function(){
      //      alert("hi");
      // });
      
      $('.slider').on('swipeLeft', function(){       
         // alert($('.visible-area'));                           
         if(count<totalimages-1) 
          {count=count+1;}     
          var sliderposition = count * imagewidth; 
          // alert(sliderposition) 
          // alert("1");
          // $('.slider').animate({left: -sliderposition+'px'}, 1000, 'ease-in');  
          $('.slider').css({left: -sliderposition+'px'});  
      }); 

      $('.slider').on('swipeRight', function(){      
           if(count>=1)
              {count=count-1;} 

          var sliderposition = count * imagewidth;           
          // alert("2");        
          // $('.slider').animate({'left': -sliderposition}, 1000, 'ease-in');
          $('.slider').css({left: -sliderposition}, 1000);  
      });
    }
    
    
    
  };
  
}();