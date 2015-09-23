$(document).on('scroll', function () {
            if ($(document).scrollTop() > 200) {
                $('.global-nav').removeClass('transparent');
                $('.global-nav').addClass('shadow');
            } else {
                $('.global-nav').addClass('transparent');
                $('.global-nav').removeClass('shadow');
            }
        });