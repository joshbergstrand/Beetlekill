$(document).on('scroll', function () {
    if ($(document).scrollTop() > 200) {
        $('.what-we-do').addClass('show shadow');
    } else {
        $('.what-we-do').removeClass('show shadow');
    }

});