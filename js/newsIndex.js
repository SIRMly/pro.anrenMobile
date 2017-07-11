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


    /*==下拉加载==*/
    var $listWrapper = $('#list-wrapper');

    var pullInstance = new Pull($listWrapper, {
        // autoLoad: true, // 自动加载，加载完成立即判断是否触发加载 默认 true
         threshold: 50, // 滚动至底部多少距离触发onPullUp。默认 100，单位px
        onPullUp: function () {
            setTimeout(function () {
                /*==获取数据==*/
                var count = 5;
                for(var i=0; i<count; i++){
                    var typeNum = Math.floor(Math.random()*3);
                    handlePullUpSuccess(typeNum);
                }

                /*==此处写AJAX==*/
                /*$.ajax({
                    'url'       : "index.html",
                    'type'      : 'post',
                    'dataType'  : 'json',
                    'success'   : function (response) {
                        if (response.code == 'success') {
                            var data = response.data;
                            pullInstance.pullUpSuccess();
                        } else {
                            console.log(response.message);
                        }
                    },
                    'error'     : function (){
                        pullInstance.pullUpFailed();
                    }
                });*/
            }, 800);
        }
    });
    var pullUpTotal = 0;
    // 处理上拉加载成功
    var str0 = '<div class="card word-card"><a href="article-detail.html"><div class="word-card-img"><img src="img/word-card-pic.png" alt="" width="100%;"/></div><div class="word-card-content"><p class="word-card-link">“数字敦煌”成果走进第十二届中国(深圳) 国际文化产业博览交易会交易会交易会交易会交易会</p><p class="word-card-bottom clearfix"><span class="news-date">2016-05-22</span><span class="card-read pull-right">2016</span></p></div></a></div>';
    var str1 = '<div class="card pic-card"><a href="pic-detail.html"><p class="word-card-link">“数字敦煌”成果走进第十二届中国(深圳) 国际文化产业博览交易会</p><div class="pic-card-img"><img src="img/video-poster.png" alt="" width="100%;"/><span>6张</span></div><p class="word-card-bottom clearfix"><span class="news-date">2016-05-22</span><span class="card-read pull-right">2016</span></p></a></div>';
    var str2 = '<div class="card video-card"><a href="video-detail.html"><p class="word-card-link">“数字敦煌”成果走进第十二届中国(深圳) 国际文化产业博览交易会</p><div class="video-card-img"><img src="img/video-poster.png" alt="" width="100%"/><span>03:30</span></div><p class="word-card-bottom clearfix"><span class="news-date">2016-05-22</span><span class="card-read pull-right">2016</span> </p> </a> </div>';
    function handlePullUpSuccess(typeN) {
        var str;
        switch (typeN){
            case 1:
               str = str1;
                break;
            case 2:
               str = str2;
                break;
            default:
               str = str0;
                break;
        }
        $listWrapper.append($(str));
        pullUpTotal+=1;

        // 超过20条即加载完成
        if(pullUpTotal >= 100){
            pullInstance.pullUpDone();
        }else{
            pullInstance.pullUpSuccess();
        }
    }
    // 处理上拉加载失败
    function handlePullUpFailed() {
        pullInstance.pullUpFailed();
    }

})(jQuery);


