$(function() {
    var num = $('.focus ul li').length;
    var imgwidth = $('.focus ul img').width();
    for (let i = 0; i < num; i++) {
        $('.focus ol').append(document.createElement('li'));
    }
    var index = 0;
    $('.focus ol li').eq(0).addClass('current_li');
    for (let i = 0; i < num; i++) {

        $('.focus ol li').eq(i).mouseover(function() {
            $(this).addClass('current_li').siblings().removeClass('current_li');
            $('.focus ul li').eq(i).stop().fadeIn(1000).siblings().stop().hide();
            index = i;
        });
    }

    index = -1;

    function autoplay() {
        if (index < 7) {
            index++;
            $('.focus ol li').eq(index).addClass('current_li').siblings().removeClass('current_li');
            $('.focus ul li').eq(index).stop().fadeIn(1000).siblings().stop().hide();
        } else {
            index = 0;
            $('.focus ol li').eq(index).addClass('current_li').siblings().removeClass('current_li');
            $('.focus ul li').eq(index).stop().fadeIn(1000).siblings().stop().hide();
        }
    }

    autoplay();
    var timer = setInterval(autoplay, 2500);

    $('.focus').mouseover(function() {
        clearInterval(timer);
    });
    $('.focus').mouseout(function() {
        timer = setInterval(autoplay, 2500);
    })
    var flag = 1;
    $('.focus .arrow-left').click(function() {
        if (flag) {
            flag = 0;
            if (index == 0) {
                index = 7;
                $('.focus ol li').eq(index).addClass('current_li').siblings().removeClass('current_li');
                $('.focus ul li').eq(index).stop().fadeIn(1000, function() {
                    flag = 1;
                }).siblings().stop().hide();

            } else {
                index--;
                $('.focus ol li').eq(index).addClass('current_li').siblings().removeClass('current_li');
                $('.focus ul li').eq(index).stop().fadeIn(1000, function() {
                    flag = 1;
                }).siblings().stop().hide();
            }
        }
    })
    $('.focus .arrow-right').click(function() {
        if (flag) {
            flag = 0;
            if (index == 7) {
                index = 0;
                $('.focus ol li').eq(index).addClass('current_li').siblings().removeClass('current_li');
                $('.focus ul li').eq(index).stop().fadeIn(1000, function() {
                    flag = 1
                }).siblings().stop().hide();
            } else {
                index++;
                $('.focus ol li').eq(index).addClass('current_li').siblings().removeClass('current_li');
                $('.focus ul li').eq(index).stop().fadeIn(1000, function() {
                    flag = 1;
                }).siblings().stop().hide();
            }
        }
    })
})