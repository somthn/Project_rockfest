/* 소메뉴 드롭다운 */
$(document).ready(function(){
    $(".navbar>ul>li").hover(function(){
        $(".submenu").stop().slideToggle(500);
    });
});

/* 스크롤 시 헤더 스타일 변경 */ 
// const header = document.querySelector(".header");
//         const headerHeight = header.getBoundingClientRect().height;
//         window.addEventListener("scroll",()=>{
//             if(window.scrollY>headerHeight) {
//                 header.setAttribute("style", "padding: 0 20px; font-size: 13px; line-height: 300%; box-shadow: 0 2px 10px rgba(0,0,0,0.3);");
//                 $(".header").addClass(".change");
//             } else {
//                 header.setAttribute("style", "background: white;");
//             }
//         });
let scrollAnimation = $(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
});