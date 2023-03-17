// a태그 클릭했을 때
// li태그, on클래스 이름을 추가
// + 다른 li태그의 on 클래스는 제거

// a태그 3개를 들고와야한다 > 배열로 들고오는게 좋다.
// list클래스 안에 있는 btn클래스를 가지고 있는 태그에 접근
const btnList = document.querySelectorAll(".list .btn");

// 버튼 중 하나를 선택해서 이벤트 추가
for(let i=0; i<btnList.length; i++){
    btnList[i].addEventListener("click", onTab);
}


// on 클래스를 li에 추가하는 함수
function onTab(e){
    // a태그를 사용할 때, 새로고침 이벤트가 기본으로 있으므로
    // 새로고침을 제거하고 사용해야한다.
    // 빙시나 오타좀 그만내라.
    e.preventDefault();
    // li에 있는 on을 제거하기 위해 btnList사용
    // 모든 btnList들을 가진 <li>에게서 on클래스를 제거
    for(let i=0; i<btnList.length; i++ ) {
        btnList[i].parentNode.classList.remove("on");
    }

    // on클래스 추가
    // e.target은 이벤트(클릭한 a태그)가 발생한 태그자체가 된다.
    // -> 이벤트를 붙여준 btnList[0], btnList[1], btnList[2] 중 하나.
    // 아래의 코드는 타겟이 된 btnList의 부모 <li>에 
    // on 클래스를 붙여주는 코드다.
    e.target.parentNode.classList.add("on");
}