/*서브메뉴 */
$(".navUl>li").stop().hover(function(){
    $(this).children(".sub_nav").slideDown();
},function(){
    $(".navUl>li").removeClass("hover");
    $(this).children(".sub_nav").slideUp();
});

/*갤러리 */

var gallery=$(".inner_gallery");
var galleryLi=$(".inner_gallery>ul>li");
var itemsLi=$(".items>ul>li");

var idx=-1;
    function autogal(){
        if(idx>=galleryLi.length-1) idx-1;
        idx++;
        
    var gallerGab= galleryLi.eq(1).offset().left-galleryLi.eq(0).offset().left;
    var goleft=-(gallerGab*idx);//gallery가 이동하는 거리
        gallery.animate({"left":goleft});//gallery가 goleft만큼 이동
        if(idx>=galleryLi.length-1){
            idx=-1;
        }
        itemsLi.eq(idx).addClass("on").siblings().removeClass("on");
        console.log(idx);
    }
    var set=setInterval(autogal,3000);
    

    itemsLi.on("mouseover",itemsLiOver);
    itemsLi.on("mouseout",itemsLiOut);
    function itemsLiOver(){
        clearInterval(set);
    }
    function itemsLiOut(){
        set=setInterval(autogal,3000);
    }
    itemsLi.on("click",itemsLiClick);
    function itemsLiClick(){
        var idthis=$(this).index();//클릭한 li의 index
        var gallerGab=galleryLi.eq(1).offset().left-galleryLi.eq(0).offset().left;
        
        var goLeft=-(gallerGab*idthis);//gallery가 이동하는 거리
        $(this).addClass('on').siblings().removeClass("on");
        gallery.animate({"left":goLeft},200);//gallery가 goleft만큼 이동
        //마지막 요소면 -> idx=-1;
        if(idthis>=galleryLi.length-1){
            idx=-1;
        }else{
            idx=idthis;
        }
    }
        $('span.arrow.arrowleft').on("click",leftFunc);
        function leftFunc(){
            if(idx<=0){
                idx=galleryLi.length;
            }
            idx--;
            var galleryGab=galleryLi.eq(1).offset().left-galleryLi.eq(0).offset().left;
            var goLeft=-(galleryGab*idx);
           itemsLi.eq(idx).addClass("on").siblings().removeClass("on");
            gallery.animate({"left":goLeft});
        }
    
        