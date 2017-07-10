/**
 * Created by SIRMly on 2017/6/16 0016.
 */
;(function ($){
    var swiper = new Swiper('#swiper-top',{
        pagination: "#top-pagination",
        simulateTouch: false,
        slidesPerView: 1,
        paginationClickable: false,
        spaceBetween: 0,
        loop: true,
        autoplay: 2500,
        //autoplay: false,
        autoplayDisableOnInteraction: false
    });

    /*==鹿出现==*/
    var winH = $(window).height();
    var winW = $(window).width();
    var deer = $(".deer");
    var deerTop = deer.offset().top;
    var container = $(".container");
    var deerTimer;
    var watchDeer = true;
    container.scroll(function (){
        if(watchDeer){
            deerTop = deer.offset().top;
            if(deerTop <= (winH-0.2*winW)){
                deerMove();
                watchDeer = false;
                //deer.addClass("deerShow");
            }
        }
    });
    function deerMove(){
        var backPosition = 0;
        var deerLeft = -22;
        var deerTimer = setInterval(function (){
            backPosition = (backPosition>=100 ? 0 :backPosition+50);
            deerLeft+=2;
            deer.css({
                "background-position-x": backPosition+"%",
                left : deerLeft+"vw"
            });
            if(deerLeft>=2){
                clearInterval(deerTimer);
            }
        },200);
    }

})(jQuery);


