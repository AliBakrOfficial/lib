$(document).ready(function () {

    "use strict";

    /*
     ----------------------------------------------------------------------
     Menu-navigation
     ----------------------------------------------------------------------
     */
    if ($("#contents").hasClass("contents")) {
        jQuery(function ($) {

            $(document).ready(function () {
                $('.navbar-wrapper').stickUp({
                    parts: {
                        0: 'navhome',
                        1: 'navprofile',
                        2: 'navresume',
                        3: 'navportfolio',
                        4: 'navblog',
                        5: 'navcontact'
                    },
                    itemClass: 'menuItem',
                    itemHover: 'active',
                    topMargin: 'auto'
                });
            });

        });
    }

    $('.navigation-top').hide();
    $(function () {
        $(window).scroll(function (event) {
            if ($(this).scrollTop() > 630) {
                $('.navigation-top').show();
                $('.navigation-top').fadeIn();
                $('.navigation-top').addClass('fixed');
            }
            else {
                $('.navigation-top').removeClass('fixed');
                $('.navigation-top').fadeOut();
                $('.navigation-top').hide();
            }
        });

    });


    var linkNav = document.querySelectorAll('[href^="#nav"]'),
        V = 1000;
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].onclick = function (event) {
            event.preventDefault();
            if($(window).width() < 769) {
                var hscroll = 0
            } else {
                var hscroll = 50
            }
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top - hscroll}, V);
        }
    }
});