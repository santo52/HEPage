$('.company_acordeon_item').on('click', function(){
    $(this).siblings().removeClass('visible');
    $(this).toggleClass('visible');
});

var $closeTab = $('.tab_close');
var $headerButtons = $('.header_buttons');
var $header = $('.header');
var $document = $(document);
var $menuButton = $('.menu_button');
var $contactButton = $('.contact_button');

$document.on('scroll', function(){
    if($document.scrollTop() > $header.height()){
        $headerButtons.addClass('fixedMenu');
    }
    else{
        $headerButtons.removeClass('fixedMenu');
    }
});

var contact = $('.contact');
var menu = $('.menu');

//***************************//
//***************************//
//******** PESTAÑAS *********//
//***************************//
//***************************//

$('.contact .pestana').click(function(){
    contact.css('z-index', '5000').animate({right: "0", border: 0}, 1000);
    $('html').css('overflow', 'hidden');
});

$('.contact .labels').on('click', 'a', function(){
    contact.css('z-index', '3000').animate({right: "-99.5%"}, 1000).css('border-left', '10px solid #009B93');
    $('html').css('overflow-y', 'scroll');
})

$('.menu .pestana').click(function(){
    menu.css('z-index', '5000').animate({left: "0", border: 0}, 1000);
    $('html').css('overflow', 'hidden');
});

$('.menu .labels').on('click', 'a', function(){
    menu.css('z-index', '3000').animate({left: "-99.5%"}, 1000).css('border-right', '10px solid #00637A');
    $('html').css('overflow-y', 'scroll');
})

$('.agencia__team__members__member').hover(function(){
    $(this).children('.icon').stop().slideToggle(300);
});