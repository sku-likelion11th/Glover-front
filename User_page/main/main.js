// submit 버튼을 누르면 창이 새로고침 돼서 모달창이 나타나지 않음 
// 이를 해결하기 위해(디자인 작성을 위해) 임시로 js를 작성함 -> 추후에 다 수정해야됨

// 폼과 모달 요소 가져오기
var form = document.getElementById("login");
var modal = document.getElementById("modal");

// 폼 제출 이벤트 핸들러 등록
form.addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 제출 방지

    // 여기에서 POST 요청을 보내고 백엔드에서 응답을 받아 모달에 표시합니다.



    // 모달 창 열기
    modal.style.display = "block";

});

// 모달창 내부 버튼 이벤트 핸들러 등록
var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
    modal.style.display = "none"; // 모달 닫기
});

var secModal = document.querySelector(".second_modal"); // 두 번째 모달 창 
var agreeBtn = document.querySelector(".agree");

agreeBtn.addEventListener("click", function(){    // 모달 창에서 '동의'를 눌렀을 경우 다음 모달창 생성
    secModal.style.display="block";
});

// 두 번째 모달창 코드



