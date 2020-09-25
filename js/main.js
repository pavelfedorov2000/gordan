$(function() {
    $("a[href^='#']").click(function(){
        const href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(href).offset().top+"px"}); // плавный скролл по ссылкам
        return false;
    });

    new WOW().init(); // для анимации блоков как только пользователь долистывает до их секции
});