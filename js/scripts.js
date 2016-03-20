$('.company_acordeon_item').on('click', function(){
    $(this).siblings().removeClass('visible');
    $(this).toggleClass('visible');
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