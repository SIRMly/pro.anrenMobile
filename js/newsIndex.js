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
    container.scroll(function (){
        deerTop = deer.offset().top;
        if(deerTop <= (winH-0.2*winW)){
            deer.addClass("deerShow");
        }
    });

})(jQuery);


