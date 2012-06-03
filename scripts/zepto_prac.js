var zepto_func = function () {
  
  function show_func(activate) {
    console.log("!!:)!!");
    // var elements = $('ul.menu-list li');
    // elements.on('tap', function(){
    //   alert("hi");
    // });
    $('.next').on('tap', function(){
      // alert($('.next').siblings()[0]);
      alert($('.slider img').size());
      var imagewidth = 256;// $('.visible-area').width();                 
      var totalimages = $('.slider img').size();                    
      var sliderwidth = imagewidth * totalimages;                   
      $('.slider').css({'width': sliderwidth});
    });
  }
  
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
              imgString="<a href='#'><img id='img"+(i+1)+"' src='"+(arrImage[i])+"' alt='img' height='256' width='256'/></a>";
          else
              imgString=imgString+"<a href='#'><img id='img"+(i+1)+"' src='"+(arrImage[i])+"' alt='img' height='256' width='256'/></a>";
      }       

      $('#slider').html(imgString);
  }
  
  return {
    
    init: function () {
      var activate = ('createTouch' in document) ? 'touchstart' : 'click'
      
      // show_func(activate);
      GetImageArray();
      // show_func(activate);
      var imagewidth = 256;                 
      var totalimages = $('.slider img').size();                    
      var sliderwidth = imagewidth * totalimages;                   
      $('.slider').css({width : sliderwidth + 'px'});                     

      var count=0;
      // $('.next').on('tap', function(){
      //      alert("hi");
      // });
      
      $('.next').on('tap', function(){                                  

         // alert($('.slider').width());
         if(count<totalimages-1) 
          {count=count+1;}     
          var sliderposition = count * imagewidth; 
          // alert(sliderposition) 
          // $('.slider').animate({left: -sliderposition+'px'}, 1000);  
          $('.slider').css({left: -sliderposition+'px'});  
      }); 

      $('.previous').on('tap', function(){                                             
           if(count>=1)
              {count=count-1;} 

          var sliderposition = count * imagewidth;                 
          // $('.slider').animate({'left': -sliderposition}, 1000);   
          $('.slider').css({left: -sliderposition}, 1000);  
      });
    }
    
    
    
  };
  
}();