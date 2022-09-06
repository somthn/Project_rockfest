//modal 가져오기
let modals = document.getElementsByClassName("modal-overlay");
//modal을 띄우는 클래스 이름 가져오기
let btns = document.getElementsByClassName("btn");
//modal을 닫는 close 클래스 가져오기
let spanes = document.getElementsByClassName("close");
let funcs = [];

//modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num){
    return function(){
        //해당 클래스의 내용을 클릭하면 modal을 띄움
        btns[num].onclick = function(){
            modals[num].style.display = "block";
            console.log(num);
        };

        //<button> 태그(X버튼)을 클릭하면 modal이 닫힘
        spanes[num].onclick = function(){
            modals[num].style.display = "none";
        };
    };
}

//원하는 modal의 수만큼 modal을 호출해서 funcs함수에 정의
for(var i = 0; i<btns.length; i++){
    funcs[i] = Modal(i);
}

//원하는 modal의 수만큼 funcs 함수를 호출
for(var j = 0; j<btns.length; j++){
    funcs[j]();
}

// //modal 영역 밖을 클릭하면 modal을 닫음
// window.onclick = function(event){
//     if(event.target.className == "modal-overlay") {
//         event.target.className = "none";
//     }
// };