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



    // -------- klikalna galeria

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


    // next i prev 

    var allBtnsPrev = $('.btnPrev');

    allBtnsPrev.each(function(i) {

        $(allBtnsPrev[i]).click(function() {

            if (winPic[i - 1] !== undefined) {

                $(winPic[i]).removeClass('showMe');
                $(winPic[i - 1]).addClass('showMe');
            }
        });
    });


    var allBtnsNext = $('.btnNext');

    allBtnsNext.each(function(i) {

        $(allBtnsNext[i]).click(function() {

            if (winPic[i + 1] !== undefined) {

                $(winPic[i]).removeClass('showMe');
                $(winPic[i + 1]).addClass('showMe');
            }
        });
    });

    //w galerii przelaczanie strzalkami pomiedzy zdjeciami

    var allClickedGalleries = $('.jsPick');

    allClickedGalleries.each(function(i) {

        var la = $(allClickedGalleries[i]).find('.la');
        var ra = $(allClickedGalleries[i]).find('.ra');

        var allImgs = $(allClickedGalleries[i]).find('img');

        var cntr = 0;

        ra.click(function() {
            cntr++;

            if (cntr >= allImgs.length) {
                cntr = allImgs.length;
            } else {
                allImgs.each(function(i) {
                    $(allImgs[i]).removeClass('active');
                });
            }

            $(allImgs[cntr]).addClass('active');
        });

        la.click(function() {
            cntr--;

            if (cntr < 0) {
                cntr = 0;
            } else {
                allImgs.each(function(i) {
                    $(allImgs[i]).removeClass('active');
                });
            }

            $(allImgs[cntr]).addClass('active');
        });



    });





    //karuzela 


    $('.allSlides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });



    //przenies na gore button

    var sctpbtn = $('.scrollTopBtn');

    $(sctpbtn).click(function() {

        $('html, body').animate({
            scrollTop: $('.hder').offset().top
        }, 750);

    });



});