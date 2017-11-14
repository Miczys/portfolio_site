$(function() {

    //burger click

    var opBurg = $('.burger');
    var clBurg = $('.clsMob');

    var burgMenu = $('.menMob');


    opBurg.click(function() {
        burgMenu.addClass('active');
    });
    clBurg.click(function() {
        burgMenu.removeClass('active');
    });


});