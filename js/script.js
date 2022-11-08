$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
    });
})

const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});
