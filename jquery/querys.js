 let count =1;
 const slider=$('.slider');
 const slide = $('.slides');
 const slideContainer = $('.slide-container');
 console.log(slide.length);
 var interval;
 function startImg(){

    function imgSlider(){

        slideContainer.animate({'margin-left':'-='+720},3000,function(){
                count++;
            
            if(count == slide.length)
                {
                    count=1;
                    slideContainer.css('margin-left',0);
                }
        });
    }

    interval = setInterval(imgSlider,3000);
}

 function stopImg(){
    clearInterval(interval);
 }

 slide.on('mouseenter',stopImg).on('mouseleave',startImg);

 startImg();


