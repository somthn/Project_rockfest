/* ========= 탭 메뉴 , 외부 링크 ========== */
let tabLink = $('.tabBox p');
let tabContent = $('.tab-content');
let subLink = $('.submenu li');
let currentUrl = location.href;

tabLink.add(subLink).click(function(e){
  e.preventDefault();
  let targetIdx = $(this).index();

  activateTab(targetIdx)
});


subLink.each(function(i){
    let compareUrl = $(this).find('a').attr('href');
    let active = currentUrl.indexOf(compareUrl);
    let blank = currentUrl.indexOf('#');

    console.log(active)

    if(active > -1){
        activateTab(i);
    }
    if(blank == -1){
        activateTab(0);
    }
});


function activateTab(idx){
    tabContent.hide();
    tabLink.removeClass('current');
    tabLink.eq(idx).addClass('current');
    tabContent.eq(idx).show();
  } 

  /* 
    1.매개변수로 숫자가 들어오면 모든 컨텐츠를 안 보이게 함.
    2.클릭한 요소의 인덱스 번호에 해당하는 것을 보여준다
  */
