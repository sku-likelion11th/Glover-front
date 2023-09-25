// form에서 이미지 업로드시 미리보기
function readURL(input, previewId) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById(previewId).src = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        } else {
            document.getElementById(previewId).src = "";
        }
    }

// 이미지 미리보기 상자를 클릭하면 파일 업로드 창 생성
const imgBoxes = document.querySelectorAll('.img-box');

imgBoxes.forEach(function(imgBox) {
    imgBox.addEventListener('click', function() {
        const fileInput = imgBox.closest('.file-box').querySelector('input[type="file"]');
        fileInput.click();
    });
});

// 폼 내부 버튼에 따른 모달창 제공
var form = document.getElementById("name");  // 폼 이름 (설명, 기간, 이미지 등)
var deleteButton = document.querySelector('.del');  // 폼 내부의 삭제 버튼 
var close = document.querySelector(".bi-x")          // 폼 내부의 'X' 버튼

var firstModal = document.getElementById("fir_modal");     // 첫 번째 모달창 (저장)
var secModal = document.getElementById("sec_modal");     // 두 번째 모달창 (삭제)
var thiModal = document.getElementById("thi_modal");     // 세 번째 모달창 ('X')


// 저장 눌렀을 때 실행되며, 이에 맞는 모달이 나타남
form.addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 제출 방지

    // 여기에서 POST 요청을 보내고 백엔드에서 응답을 받아 모달에 표시합니다.
    // 모달 창 열기
    firstModal.style.display = "block";
});

// 삭제 눌렀을 때 실행되며, 이에 맞는 모달이 나타남
function delModal() {
    secModal.style.display = 'block';
}
deleteButton.addEventListener('click', delModal);

// ('X') 눌렀을 때 실행되며, 이에 맞는 모달이 나타남
function noneModal() {
    thiModal.style.display = 'block';
}
close.addEventListener('click', noneModal);
