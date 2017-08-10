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
    var container = $(window);
    var deerTimer;
    var watchDeer = true;
    container.scroll(function (){
        if(watchDeer){
            deerTop = deer.offset().top;
            //console.log(container.scrollTop());
            if(container.scrollTop() >= (deerTop - 0.85*winH)){
                deerMove();
                watchDeer = false;
                deer.addClass("deerShow");
            }
        }
    });
    function deerMove(){
        var backPosition = 0;
        var deerLeft = -22;
        var deerTimer = setInterval(function (){
            backPosition = (backPosition>=100 ? 0 :backPosition+50);
            deer.css({
                "background-position-x": backPosition+"%"
            });
        },200);
    }

})(jQuery);


