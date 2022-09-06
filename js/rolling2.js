document.addEventListener('DOMContentLoaded', ()=>{
    let interval2 = window.setInterval(rollingCallback2, 3200);
})
function rollingCallback2(){
    //.prev 클래스 삭제
    document.querySelector('.rollingbanner2 .prev2').classList.remove('prev2');

    //.current -> prev
    let current = document.querySelector('.rollingbanner2 .current2');
    current.classList.remove('current2');
    current.classList.add('prev2');

    //.next -> current
    let next = document.querySelector('.rollingbanner2 .next2');
    //다음 목록 요소가 null인지 체크
    if(next.nextElementSibling == null){
        document.querySelector('.rollingbanner2 ul li:first-child').classList.add('next2');
    } else {
        //목록 처음 요소를 다음 요소로 선택
        next.nextElementSibling.classList.add('next2');
    }
    next.classList.remove('next2');
    next.classList.add('current2');
}