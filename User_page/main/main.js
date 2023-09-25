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

// 첫 번째 모달창 닫기 버튼 
var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {

    modal.style.display = "none"; // 모달 닫기
});