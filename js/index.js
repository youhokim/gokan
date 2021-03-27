/*서브메뉴 */
$(".navUl>li").stop().hover(function(){
    $(this).children(".sub_nav").slideDown();
},function(){
    $(".navUl>li").stop().removeClass("hover");
    $(this).children(".sub_nav").slideUp();
});
/*반응형 메뉴 */
$(".Snav").on("click",function(){    
    $(".navgnb").animate({right:"0px"},500);
});
$(".closeBox").on("click",function(){    
    $(".navgnb").animate({right:"-500px"},500);
});
/*갤러리 */
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: true,
    // If we need pagination
    pagination: {
         el: '.swiper-pagination',
    },
});
    
        