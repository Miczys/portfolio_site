$(function() {

    var mobNavBtns = $(".navSlide .ic");
    var allMobSlides = $(".mobileSlider .sliderHolder .slide");

    mobNavBtns.each(function(i) {
        $(mobNavBtns[i]).click(function() {

            allMobSlides.each(function(j) {
                $(allMobSlides[j]).removeClass('active');
            });

            mobNavBtns.each(function(l) {
                $(mobNavBtns[l]).removeClass('active');
            });

            $(allMobSlides[i]).addClass('active');
            $(mobNavBtns[i]).addClass('active');

        });
    });




    //swipe

    var cntNavMob = 0;

    $('.mobileSlider').on("swiperight", function(event) {

        if (cntNavMob > 0) {
            cntNavMob--;

            allMobSlides.each(function(k) {
                $(allMobSlides[k]).removeClass('active');
            });

            mobNavBtns.each(function(l) {
                $(mobNavBtns[l]).removeClass('active');
            });

            $(allMobSlides[cntNavMob]).addClass('active');
            $(mobNavBtns[cntNavMob]).addClass('active');
        }
    });

    $('.mobileSlider').on("swipeleft", function(event) {

        if (cntNavMob < 3) {
            cntNavMob++;

            allMobSlides.each(function(m) {
                $(allMobSlides[m]).removeClass('active');
            });

            mobNavBtns.each(function(l) {
                $(mobNavBtns[l]).removeClass('active');
            });

            $(allMobSlides[cntNavMob]).addClass('active');
            $(mobNavBtns[cntNavMob]).addClass('active');
        }
    });


});