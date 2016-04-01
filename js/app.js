
'use strict';
var menu = document.getElementById('menu');
var section = document.getElementById('seccionNosotros')
var altura = section.offsetTop - 50;

window.addEventListener('scroll', function (e) {
    var anchoWindow = window.innerWidth;
    if(anchoWindow <= 640 ) {
        menu.classList.add('fixed');
    } else if (window.pageYOffset > altura) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
    
    /* On scroll actives items menu */
    var scrollPos = $(document).scrollTop() + 50;
    $('.top-menu li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.top-menu li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });    
});

/* Active items-menu  */
var items_Menu = $('.top-menu li a');

items_Menu.click( function (e) {
    items_Menu.removeClass('active');
    $(this).addClass('active');   
});

/* Responsive Menu */
var contador = 1;
$('.menu-bars').click(function () {
    if (contador == 1) {
        $('div.hero .nav-container ul').animate({
            left: '0'
        });  
        contador = 0;
    } else  {
        contador = 1;
        $('div.hero .nav-container ul').animate({
            left: '-100%'
        }); 
    }
});

/* Scrolling Page with JQuery*/
$('.nav-container ul a').click(function (e) {
    //alert("btn ID " + e.currentTarget.id);
    var anchoWindow = window.innerWidth;  
    e.preventDefault();
    var SectionID = e.currentTarget.id;
    
    $('html body').animate({
        scrollTop: $("#seccion" + SectionID).offset().top
    }, 800, function () {
        window.location.hash = SectionID;
    });
    
    if (anchoWindow <= 640) {
        contador = 1;
        $('div.hero .nav-container ul').animate({
            left: '-100%'
        });
    }        
});

/* Scroll Reveal */

window.sr = ScrollReveal({ reset: true });

sr.reveal('.hero-container', {duration: 300});
sr.reveal('.mision', {duration: 800});
sr.reveal('.vision', { duration: 800, delay: 300 });
sr.reveal('.valores', { duration: 800, delay: 500 });
sr.reveal('.item-lg', { duration: 800, delay: 200 });
sr.reveal('.item-md', { duration: 800, delay: 400 });
sr.reveal('.item-form', {duration: 1500}, 50);
sr.reveal('.item-servicios', {duration: 2000}, 100);