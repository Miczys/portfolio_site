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
    var winPic = $('#testClick');

    console.log(winPic);

    allPics.each(function(i) {
        console.log(allPics[i]);
        $(allPics[i]).click(function() {
            winPic.addClass('showMe');
        });
    });

    var eX = $('#closeIt');

    eX.click(function() {
        winPic.removeClass('showMe');
    });

});