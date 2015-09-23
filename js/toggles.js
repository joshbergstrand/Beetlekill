$(document).ready(function () {
    $("li.bio-andy").click(function () {
        $(".leader-card-bio-andy").show();
        $(".leader-card-quote-andy").hide();
        $("li.quote-andy").removeClass("active");
        $("li.bio-andy").addClass("active");
    });

    $("li.quote-andy").click(function () {
        $(".leader-card-quote-andy").show();
        $(".leader-card-bio-andy").hide();
        $("li.bio-andy").removeClass("active");
        $("li.quote-andy").addClass("active");
    });

    $("li.bio-tom").click(function () {
        $(".leader-card-bio-tom").show();
        $(".leader-card-quote-tom").hide();
        $("li.quote-tom").removeClass("active");
        $("li.bio-tom").addClass("active");
    });

    $("li.quote-tom").click(function () {
        $(".leader-card-quote-tom").show();
        $(".leader-card-bio-tom").hide();
        $("li.bio-tom").removeClass("active");
        $("li.quote-tom").addClass("active");
    });

    $("li.bio-eric").click(function () {
        $(".leader-card-bio-eric").show();
        $(".leader-card-quote-eric").hide();
        $("li.quote-eric").removeClass("active");
        $("li.bio-eric").addClass("active");
    });

    $("li.quote-eric").click(function () {
        $(".leader-card-quote-eric").show();
        $(".leader-card-bio-eric").hide();
        $("li.bio-eric").removeClass("active");
        $("li.quote-eric").addClass("active");
    });

    $("li.bio-teresa").click(function () {
        $(".leader-card-bio-teresa").show();
        $(".leader-card-quote-teresa").hide();
        $("li.quote-teresa").removeClass("active");
        $("li.bio-teresa").addClass("active");
    });

    $("li.quote-teresa").click(function () {
        $(".leader-card-quote-teresa").show();
        $(".leader-card-bio-teresa").hide();
        $("li.bio-teresa").removeClass("active");
        $("li.quote-teresa").addClass("active");
    });

    $("li.bio-ericp").click(function () {
        $(".leader-card-bio-ericp").show();
        $(".leader-card-quote-ericp").hide();
        $("li.quote-ericp").removeClass("active");
        $("li.bio-ericp").addClass("active");
    });

    $("li.quote-ericp").click(function () {
        $(".leader-card-quote-ericp").show();
        $(".leader-card-bio-ericp").hide();
        $("li.bio-ericp").removeClass("active");
        $("li.quote-ericp").addClass("active");
    });

});