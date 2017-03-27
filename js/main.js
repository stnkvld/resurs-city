$(document).ready(function() {
    var sliderMain = new Swiper ("#slider-main", {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    $("#work-process .wrapper .left li").on("click", function() {
        $("#work-process .wrapper .left li").removeClass("active");
        $("#work-process .wrapper .right > div").css("opacity", 0);
        switch ($(this).attr("class")) {
            case "consultation":
                $(".right .consultation").css("opacity", 1);
                break;
            case "design":
                $(".right .design").css("opacity", 1);
                break;
            case "delivery":
                $(".right .delivery").css("opacity", 1);
                break;
            case "assembly":
                $(".right .assembly").css("opacity", 1);
                break;
            case "escort":
                $(".right .escort").css("opacity", 1);
        }
        $(this).addClass("active");
    });

    // $(".swiper-container-horizontal>.swiper-pagination-bullets").css({"width": "auto", "margin-left", 0-$(this).width()});
});
