const $ = window.jQuery;


//THIS IS FOR THE NAVBAR COLOR CHANGE ON SCROLL
$(document).ready(function ($) {
    // get the value of the bottom of the #home element by adding the offset of that element plus its height, set it as a variable
    let homeBottom = $('#home').offset().top + $('#home').height();

    $(window).on('scroll', function () {
        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        //if scrolls beyond home screen and medium width (not mobile) add the past-home class to make the navbar black text, 
        //and if goes before home screen reverse back make navbar white text
        if (stop > homeBottom && $(document).width() >= 576) {
            $('.navbar').addClass('past-home');
        } else if (stop < homeBottom && $(document).width() >= 576) {
            $('.navbar').removeClass('past-home');
            $('.navbar').addClass('before-home');
        }
    });
});

//started to convert from vanilla JS to jquery 
// let homeBottom = $('#home').offset().top + $('#home').height();
// window.onscroll = function() {
//     let stop = Math.round(document.body.scrollTop || document.documentElement.scrollTop);
//     if (stop > homeBottom && $(document).width() >= 576) {
//         var el = document.getElementsByClassName('navbar')
//         el.classList.add('past-home');
//     } else if (stop < homeBottom && $(document).width() >= 576) {
//         $('.navbar').removeClass('past-home');
//         $('.navbar').addClass('before-home');
//     }
// }



//FORM VALIDITY - RECOMMENDED TO ADD ON BOOTSTRAP DOCUMENTATION
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