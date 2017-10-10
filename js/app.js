$(function() {

    // var prevArrow = $('#previous');
    // var nextArrow = $('#next');

    // var allPages = $('.num');
    // var p = allPages.length;

    // prevArrow.on('click', function() {

    //     if (p > 0) {
    //         allPages.each(function(i) {
    //             console.log(allPages[i]);
    //             allPages[i].removeClass('active');
    //             console.log(allPages[i]);
    //         });
    //         console.log(p);
    //         p--;
    //         console.log(p);
    //         console.log(allPages[p]);
    //         allPages[p].addClass('active');
    //         console.log(allPages[p]);
    //     }
    // });



    // klikalna galeria

    var allPics = $('.selection .pictures .picHolder');
    var winPic = $('.newWinClicked');



    allPics.each(function(i) {

        $(allPics[i]).click(function() {
            $(winPic[i]).addClass('showMe');
        });
    });

    var eX = $('.closeIt');

    eX.each(function(i) {
        $(eX[i]).click(function() {
            $(winPic[i]).removeClass('showMe');
        });
    });


    //karuzela 


    $('.allSlides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });



});