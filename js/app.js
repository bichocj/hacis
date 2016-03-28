
/*
$(document).ready(function () {
    var altura = $('section.nosotros').offset().top;
    alert(altura);

    $(window).on('scroll', function () {
        if($(window).scrollTop() > altura ) {
            $('#menu').addClass('fixed');
        } else  {
            $('#menu').removeClass('fixed');
        }
    });
});
*/
'use strict';
var menu = document.getElementById('menu');
var section = document.getElementById('seccionNosotros')
var altura = section.offsetTop - 50;
//var hero = document.querySelector('.hero');
//var altura = hero.offsetHeight;
//alert(altura);

window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > altura) {
        menu.classList.add('fixed');
    } else  {
        menu.classList.remove('fixed');
    }
});

/* Scrolling Page with JQuery*/

    $('.nav-container ul a').click(function (e) {
        //alert("btn ID " + e.currentTarget.id);
        e.preventDefault();
        var SectionID = e.currentTarget.id;
        
        $('html body').animate({
            scrollTop: $("#seccion" + SectionID).offset().top
        }, 800, function () {
            window.location.hash = SectionID;
        });
    });

/* Scroll Reveal */

window.sr = ScrollReveal({ reset: true });

sr.reveal('.hero-container', {duration: 800});
sr.reveal('.mision', {duration: 800});
sr.reveal('.vision', { duration: 800, delay: 300 });
sr.reveal('.valores', { duration: 800, delay: 500 });
sr.reveal('.item-lg', { duration: 800, delay: 200 });
sr.reveal('.item-md', { duration: 800, delay: 400 });
sr.reveal('#formContact', {duration: 800});
