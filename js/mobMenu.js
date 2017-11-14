$(function() {

    var allGalPic = $('.mobile .picHolder');
    var openPics = $('.mobClicked');

    var whtShldDisapp = $('.disappic');



    allGalPic.each(function(i) {

        $(allGalPic[i]).click(function() {

            $(whtShldDisapp).addClass('unactive');

            $(openPics[i]).addClass('active');

            $('html, body').animate({
                scrollTop: $(openPics[i]).offset().top - 50
            }, 750);

            $(openPics[i]).find('.clBtn').click(function() {
                $(openPics[i]).removeClass('active');
                $(whtShldDisapp).removeClass('unactive');
            });

            var restPicSlides = $(openPics[i]).find('.sldie');
            var beltBtns = $(openPics[i]).find('.bigsq');

            beltBtns.each(function(j) {
                $(beltBtns[j]).click(function() {

                    beltBtns.each(function(l) {
                        $(beltBtns[l]).removeClass('active');
                    });

                    restPicSlides.each(function(k) {
                        $(restPicSlides[k]).removeClass('active');
                    });
                    $(restPicSlides[j]).addClass('active');

                    $(beltBtns[j]).addClass('active');

                });
            });


        });
    });


});