$(window).scroll(function () {
    var height = $(window).scrollTop(),
        wrap = $('#wrap'),
        stat = $('#stat');
    stat.show().text("Scroll height: " + height);

    if (height >= 0 && height < 100) {
        wrap.removeClass().addClass('white');
    } else if (height > 100 && height < 200) {
        wrap.removeClass().addClass('red');
    } else if (height > 200 && height < 400) {
        wrap.removeClass().addClass('orange');
    } else if (height > 400 && height < 900) {
        wrap.removeClass().addClass('green');
    } else if (height > 900 && height < 1000) {
        wrap.removeClass().addClass('black');
    }


});