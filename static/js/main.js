@import 'vendor/jquery-1.10.2.min.js'
@import 'vendor/modernizr.js'
@import 'vendor/owl.carousel.js'

$(function () {

    // owlCarousel
    $(".js-owl-cartoons").owlCarousel({
        navigation: true, // Show next and prev buttons
        navigationText: ['<img src="/images/prev-button.png">', '<img src="/images/next-button.png">'],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

    });

    $(".js-owl-list-hundred, .js-owl-list-thousand, .js-owl-list-all, .js-owl-list-profile").owlCarousel({
        navigation: true, // Show next and prev buttons
        navigationText: ['<img src="/images/prev-btn-blue.png">', '<img src="/images/next-btn-blue.png">'],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    // tabs
    var $nav = $(".js-info-nav"),
        $info = $(".js-info");

    //$(".b-table:not(:first)", $info).hide();
    $(".owl-carousel:not(:first)", $info).hide();

    $("li", $nav).on("click", function (e) {
        $(".owl-carousel", $info).hide();
        $("li", $nav).removeClass("current");
        $(this).addClass("current");

        var clicked = $(this).find("a").data("toggle");
        $(clicked, $info).fadeIn("fast");

        e.preventDefault();

    }).eq(0).addClass("current");

    // показываем все таблицы внутри каруселей
    $(".b-table", ".owl-carousel").show();

    // modal
    $(".js-trigger-modal").on("click", function () {

        $(".b-modal-overlay").toggleClass("open");
        $("body").toggleClass("without-scrolling");

        return false;
    });

    $(".js-modal__close, .js-modal-overlay").on("click", function(){
        $(".js-modal-overlay").removeClass("open");
        $("body").removeClass("without-scrolling");

        return false;
    });

    $(".b-modal").on("click", function(e){
        e.stopPropagation();
    });


});
