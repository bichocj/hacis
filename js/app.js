
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
var section = document.getElementById('nosotros')
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
        var SectionID = e.currentTarget.id+ "Section";
        
        $('html body').animate({
            scrollTop: $("#" + SectionID).offset().top
        }, 1000);
    });