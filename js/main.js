$(document).ready(function() {
    var sliderMain = new Swiper ("#slider-main", {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 5000,
        speed: 600
    });

    $("#work-process .wrapper .left li").on("click", function() {
        $("#work-process .wrapper .left li").removeClass("active");
        $("#work-process .wrapper .right > div").css("opacity", 0);
        switch ($(this).attr("class")) {
            case "consultation":
                $(".right .consultation").show().css("opacity", 1);
                break;
            case "design":
                $(".right .design").show().css("opacity", 1);
                break;
            case "delivery":
                $(".right .delivery").show().css("opacity", 1);
                break;
            case "assembly":
                $(".right .assembly").show().css("opacity", 1);
                break;
            case "escort":
                $(".right .escort").show().css("opacity", 1);
        }
        $(this).addClass("active");
    });

    $(".btn-back-call, .btn-contacts, .btn-connect").on("click", function() {
        $(".overlay, .modal").show().animate({"opacity": 1}, 600);
    });

    $(".close, .overlay").on("click", function() {
        $(".overlay, .modal").animate({"opacity": 0}, 600, function() {
            $(this).hide();
        });
    });

    $("#specifications > .right .positions li .line").each(function(i, elem) {
        $(this).width($(this).parents("li").width() - $(this).siblings(".title").width() - $(this).siblings(".value").width());
    });

    $("a").click(function() {
	    var scroll_el = $(this).attr("href");
        if ($(scroll_el).length != 0) {
	        $("html, body").animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });
});

$(document).resize(function() {
    $("#specifications > .right .positions li .line").each(function(i, elem) {
        $(this).width($(this).parents("li").width() - $(this).siblings(".title").width() - $(this).siblings(".value").width());
    });
});
