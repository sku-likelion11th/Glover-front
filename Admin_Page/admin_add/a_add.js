const close=document.querySelector(".bi-x");

function init() {
    close.addEventListener("click", function() {
        // 페이지 이동 
        window.location.href = "../admin_events/a_events.html";
    });
}

init();

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