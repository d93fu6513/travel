    //首頁BANNER
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        autoplay: {
        delay: 3000,
        },
        effect: 'slide',
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });

    //tab切換
    $(function(){
        var $li = $('ul.view-tab li');
            $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.wrap').hide();
        
            $li.click(function(){
                $($(this).find('a'). attr ('href')).show().siblings ('.wrap').hide();
                $(this).addClass('active'). siblings ('.active').removeClass('active');
            });
        });
    
    //回到最上面    
    $(document).ready(function () {
        // 捲軸偵測距離頂部超過 50 才顯示按鈕
        $(window).scroll(function () {
            if ($(window).scrollTop() > 50) {
                if ($(".back-top").hasClass("hide")) {
                $(".back-top").toggleClass("hide");
                }
            } else {
                $(".back-top").addClass("hide");
            }
        });
    });    