$('.company_acordeon_item').on('click', function(){
    $(this).siblings().removeClass('visible');
    $(this).toggleClass('visible');
});

var $menuButtons = $('.header_buttons');
var $header = $('.header');
var $document = $(document);

$document.on('scroll', function(){
    if($document.scrollTop() > $header.height()){
        $menuButtons.addClass('fixedMenu');
    }
    else{
        $menuButtons.removeClass('fixedMenu');
    }
});
