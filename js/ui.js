

 /*
var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'Windows CE;', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Mobile', 'Symbian', 'Opera Mobi', 'Opera Mini', 'IEmobile');
    for (var word in mobileKeyWords) {
        if (navigator.userAgent.match(mobileKeyWords[word]) != null) {
            location.replace = "mobile/index.html";
            break;
    }
}

user 접속여부 확인 
$(window).scroll(function () {
    var height = $(document).scrollTop();
    console.log(height)
}); */
$(document).ready(function(){
    $('.top_btn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    /* 스크롤 top 버튼 애니메이션 추가 */
    $(".all").click(function() {
        $(this).toggleClass("on");
        $(".header_menu div").toggleClass("on");
        if($('.header_menu a').hasClass('all on')){
            $('html').css('overflow-y','hidden');
        }
        else{
            $('html').css('overflow-y','auto');
        }
    });   
    /* m hambuger */
    $('.tab_menu li').click(function(){
        var tab_id = $(this).attr('data-id');
        $('.tab_menu li').removeClass('on');
        $('.tab_content').removeClass('current');
        $(this).addClass('on');
        $("#"+tab_id).addClass('current');
    })
    $(".faq dt").css("background-image","url('./img/img_dt_off.png')").css('background-repeat','no-repeat').css('background-position',' right 20px top 40px');
    $(".faq dt").click(function(){
        if($("+dd",this).css("display")=="none"){
            $(".faq dt").css("background-image","url('./img/img_dt_off.png')").css('background-repeat','no-repeat').css('background-position',' right 20px top 40px');
            $(".faq dd").slideUp("fast");
            $("+dd",this).slideDown("fast");
            $(this).css('background-color','#fdfdfd');
            $(this).css("background-image","url('./img/img_dt_on.png')").css('background-repeat','no-repeat').css('background-position',' right 20px top 35px');
        }
        else{
            $(".faq dd").slideUp("fast");
            $(this).css('background-color','white');
            $(this).css("background-image","url('./img/img_dt_off.png')").css('background-repeat','no-repeat').css('background-position',' right 20px top 40px');
        }
    });
    $(".faq dt").mouseenter(function(){
        $("h3",this).css('color','#9037be');
        $(this).css('background-color','#fdfdfd');
    });
    $(".faq dt").mouseleave(function(){
        $("h3").css('color','black');
        $(".faq dt").css('background-color','white');
    });
    /* faq */
});
