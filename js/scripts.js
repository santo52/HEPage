var $acordeon= $('.company_acordeon');

$acordeon.children().on('click', function(){

    $(this).siblings().removeClass('visible');
    $(this).toggleClass('visible');
    $acordeon.children().removeClass('left').removeClass('right');

    if($(document).width() >= 1024){

        if($('.company_acordeon_item:nth-child(1)').hasClass('visible') || $('.company_acordeon_item:nth-child(6)').hasClass('visible') || $('.company_acordeon_item:nth-child(7)').hasClass('visible')){
            $('.company_acordeon_item:nth-child(2)').addClass('left').next().next().addClass('left');
        }
        else if($('.company_acordeon_item:nth-child(2)').hasClass('visible')){
            $('.company_acordeon_item:nth-child(3)').addClass('left').next().next().addClass('left');
        }
        else if($('.company_acordeon_item:nth-child(3)').hasClass('visible')){
            $('.company_acordeon_item:nth-child(2)').addClass('left').next().next().next().addClass('left');
        }
        else if($('.company_acordeon_item:nth-child(4)').hasClass('visible')){
            $('.company_acordeon_item:nth-child(2)').addClass('right').next().next().next().addClass('right');
        }
        else if($('.company_acordeon_item:nth-child(5)').hasClass('visible')){
            $('.company_acordeon_item:nth-child(1)').addClass('left').next().next().addClass('left');
        }
        else if($('.company_acordeon_item:nth-child(8)').hasClass('visible')) {
            $('.company_acordeon_item:nth-child(2)').addClass('right').next().next().addClass('right');
        }
    }
});

var $headerButtons = $('.header_buttons');
var $header = $('.header');
var $document = $(document);

$document.on('scroll', function(){
    if($document.scrollTop() > $header.height()){
        $headerButtons.addClass('fixedMenu');
    }
    else{
        $headerButtons.removeClass('fixedMenu');
    }
});

//***************************//
//***************************//
//******** PESTAÑAS *********//
//***************************//
//***************************//

var $menu = $('.menu');
var $menuButton = $('.menu_button');
var $contactButton = $('.contact_button');
var $contact = $('.contact');
var $pestana = $('.pestana');
var $close = $('.labels');

$pestana.on('click', function(){
    $(this).parent().addClass('slideDown');
});

$menuButton.on('click', function(){
    $menu.addClass('slideDown');
});

$contactButton.on('click', function(){
    $contact.addClass('slideDown');
});

$close.on('click', function(){
    $(this).parent().removeClass('slideDown');
});



//***************************//
//***************************//
//********** INPUTS *********//
//***************************//
//***************************//

var $name = $('.form input, .form textarea');

$name.focus(function() {
    $(this).parent('label').addClass('open');
}).blur(function() {
    if( $.trim($(this).val()) == ""){
        $(this).parent('label').removeClass('open');
    }
});

//***************************//
//***************************//
//********* COMPANY *********//
//***************************//
//***************************//


