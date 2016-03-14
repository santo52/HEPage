$('.company_acordeon_item').on('click', function(){
    $(this).siblings().removeClass('visible').slideDown();
    $(this).toggleClass('visible');
});