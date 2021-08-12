$(function() {
    // 头部搜索框的出现
    var miaosha_top = $('.miaosha').offset().top;

    function miaosha_top_show(miaosha_top) {
        if ($(document).scrollTop() >= miaosha_top) {
            $('.search_head').stop().slideDown(1000);
        } else {
            $('.search_head').stop().hide();
        }
    }
    miaosha_top_show(miaosha_top);
    $(window).scroll(function() {
        miaosha_top_show(miaosha_top);
    });

    // shortcut中左边地图的扩展
    $('.shortcut .left a:first').mouseover(function() {
        $(this).css({
            'backgroundColor': '#fff',
            'borderLeft': '1px solid #ccc',
            'borderRight': '1px solid #ccc '
        });
        $('.shortcut .w .left .shortcut_btns').show();
    });
    $('.shortcut .left a:first').mouseout(function() {
        $(this).css({
            'backgroundColor': '#e3e4e5',
            'borderLeft': '1px solid #e3e4e5',
            'borderRight': '1px solid #e3e4e5'
        });
        $('.shortcut .w .left .shortcut_btns').hide();
    });
    $('.shortcut .w .left .shortcut_btns').mouseover(function() {
        $(this).show();
        $('.shortcut .left a:first').css({
            'backgroundColor': '#fff',
            'borderLeft': '1px solid #ccc',
            'borderRight': '1px solid #ccc '
        });
    })
    $('.shortcut .w .left .shortcut_btns').mouseout(function() {
        $(this).hide();
        $('.shortcut .left a:first').css({
            'backgroundColor': '#e3e4e5',
            'borderLeft': '1px solid #e3e4e5',
            'borderRight': '1px solid #e3e4e5'
        });
    })
    var current_a = $('.shortcut .w .left>a span').html();
    $('.shortcut .w .left .shortcut_btns .areas a').each(function(i, e) {
        if ($(e).html() == current_a) {
            $(this).css({
                'backgroundColor': '#e33333',
                'color': '#fff'
            });
        }
    });
    $('.shortcut .w .left .shortcut_btns .areas a').click(function() {
        $('.shortcut .w .left>a span').text($(this).html());
        $(this).css({
            'backgroundColor': '#e33333',
            'color': '#fff'
        }).parent().siblings().children().css({
            'backgroundColor': '#fff',
            'color': '#999'
        })
    });

    //shortcut right模块my_jd扩展
    $('.my_jd_li').mouseover(function() {
        $(this).css({
            'backgroundColor': '#fff',
            'borderLeft': '1px solid #ccc',
            'borderRight': '1px solid #ccc '
        });
        $('.my_jd').show();
    });
    $('.my_jd_li').mouseout(function() {
        $('.my_jd_li').css({
            'backgroundColor': '#e3e4e5',
            'borderLeft': '1px solid #e3e4e5',
            'borderRight': '1px solid #e3e4e5'
        });
        $('.my_jd').hide();
    });
    $('.my_jd').mouseover(function() {
        $(this).show();
        $('.my_jd_li').css({
            'backgroundColor': '#fff',
            'borderLeft': '1px solid #ccc',
            'borderRight': '1px solid #ccc '
        });
    })
    $('.my_jd').mouseout(function() {
        $(this).hide();
        $('.my_jd_li').css({
            'backgroundColor': '#e3e4e5',
            'borderLeft': '1px solid #e3e4e5',
            'borderRight': '1px solid #e3e4e5'
        });
    })

    //shortcut right模块enterprise扩展
    $('.enterprise_li').mouseover(function() {
        $(this).css({
            'backgroundColor': '#fff',
            'borderLeft': '1px solid #ccc',
            'borderRight': '1px solid #ccc '
        });
        $('.enterprise').show();
    });
    $('.enterprise_li').mouseout(function() {
        $('.enterprise_li').css({
            'backgroundColor': '#e3e4e5',
            'borderLeft': '1px solid #e3e4e5',
            'borderRight': '1px solid #e3e4e5'
        });
        $('.enterprise').hide();
    });
    $('.enterprise').mouseover(function() {
        $(this).show();
        $('.enterprise_li').css({
            'backgroundColor': '#fff',
            'borderLeft': '1px solid #ccc',
            'borderRight': '1px solid #ccc '
        });
    })
    $('.enterprise').mouseout(function() {
            $(this).hide();
            $('.enterprise_li').css({
                'backgroundColor': '#e3e4e5',
                'borderLeft': '1px solid #e3e4e5',
                'borderRight': '1px solid #e3e4e5'
            });
        })
        // miaosha的倒计时
    let last_time = +new Date('2021-8-9 00:00:00');

    let current_time = +new Date()
    if (current_time < last_time) {
        count_down(last_time);
        setInterval(function() {
            count_down(last_time)
        }, 1000);
    }

    function count_down(last_time) {
        let current_time = +new Date();
        let times = (last_time - current_time) / 1000;
        var h = parseInt(times / 60 / 60 % 24); //时
        h = h < 10 ? '0' + h : h;
        $('.miaosha .count_down a .timer .time_hour').text(h); // 把剩余的小时给 小时黑色盒子
        var m = parseInt(times / 60 % 60); // 分
        m = m < 10 ? '0' + m : m;
        $('.miaosha .count_down a .timer .time_minute').text(m);
        var s = parseInt(times % 60); // 当前的秒
        s = s < 10 ? '0' + s : s;
        $('.miaosha .count_down a .timer .time_second').text(s);
    }

    // 输入框的背景颜色变换
    $('.header .w .search input').focus(function() {
        $(this).css('backgroundColor', '#f4f4f4')
    });
    $('.header .w .search input').blur(function() {
        $(this).css('backgroundColor', '#fff')
    });
    $('.search_head .search input').focus(function() {
        $(this).css('backgroundColor', '#f4f4f4')
    });
    $('.search_head .search input').blur(function() {
        $(this).css('backgroundColor', '#fff')
    });

    //关闭广告
    $('.guanggao i').click(function() {
        $(this).parent().hide();
    })

    // header logo中 图画播放
    $('.header .logo a').mouseover(function() {
        $(this).stop().hide();
        document.querySelector('.logo_gif').querySelector('img').src = document.querySelector('.logo_gif').querySelector('img').src;
        $('header .logo_gif a').stop().fadeIn(1000);
        setTimeout(function() {
            $('header .logo_gif a').stop().fadeOut(20);
            $('.header .logo a').stop().fadeIn(1000);
        }, 4000)
    })


})