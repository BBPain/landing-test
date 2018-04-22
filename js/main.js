$(document).ready(function () {
    // slide toggle nav
    $("#hidden-menu").on('click', function (e) {
        e.preventDefault();
        $('#menu-list').slideToggle();
    });

    // remove inline attribute display:none created by toggle func
    $(window).resize(function () {
        let width = $(window).width();
        if (width > 576 && $('#menu-list').is(':hidden')) {
            $('#menu-list').removeAttr('style');
        }

/*         let docHeight = $(document).height();
        $('.wrapper').css('height', docHeight); */

        // $('footer').css('top', docHeight+'px');
    });
});