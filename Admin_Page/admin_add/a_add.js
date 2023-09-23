const close=document.querySelector(".bi-x");

function init() {
    close.addEventListener("click", function() {
        // 페이지 이동 
        window.location.href = "../admin_events/a_events.html";
    });
}

init();