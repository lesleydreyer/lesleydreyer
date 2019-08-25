jQuery(document).ready(function ($) {

    //alert('test');

    // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var homeBottom = $('#home').offset().top + $('#home').height();
    console.log('home-bot' + homeBottom);

    // on scroll, 
    $(window).on('scroll', function () {
        console.log('test');

        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        console.log('stop' + stop);
        if (stop > homeBottom && $(document).width() >= 576) {
            $('.nav').addClass('past-home');
            $('nav').removeClass('navbar-mobile');
        } else if (stop > homeBottom && $(document).width() < 576) {
            $('.nav').removeClass('past-home');
            $('nav').addClass('navbar-mobile');
        }
        else {
            $('.nav').removeClass('past-home');
        }

    });

});

$(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})(jQuery);

// $('.js--section-features').waypoint(function (direction) {
//     if (direction == "down") {
//         $('nav').addClass('navbar-light bg-light ');
//     } else {
//         $('nav').removeClass('navbar-dark bg-dark ');
//     }
// }, {
//         offset: '60px;'
//     });

// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
//var mainbottom = $('#main').offset().top + $('#main').height();

// on scroll, 
// $(window).on('scroll',function(){

//     // we round here to reduce a little workload  
//     var stop = Math.round($(window).scrollTop());

//     if (stop > mainbottom) {
//         $('.nav').addClass('past-main');
//     } else {
//         $('.nav').removeClass('past-main');
//     }

// });

