$(document).on('scroll', function () {
            if ($(document).scrollTop() > 200) {
                $('.global-nav').addClass('shadow');
            } else {
                $('.global-nav').removeClass('shadow');
            }
        });