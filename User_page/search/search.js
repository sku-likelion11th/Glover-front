const template = `
        <button class="stamp1">
            <img class="empty-stamp" src="../../img/stamp1.png" alt="빈 스탬프 이미지">
        </button>
        <button class="stamp2">
            <img class="empty-stamp" src="../../img/stamp1.png" alt="빈 스탬프 이미지">
        </button>
        <button class="stamp3">
            <img class="empty-stamp" src="../../img/stamp1.png" alt="빈 스탬프 이미지">
        </button>
`;
$(".stampset").append(template);

const open=document.querySelector(".stamp1");
const modal=document.querySelector(".modal-cont");
const close=document.querySelector(".bi-x");

function init(){
    open.addEventListener("click",function(){
        modal.classList.remove("hidden");
    });
    close.addEventListener("click",function(){
        modal.classList.add("hidden");
    });
}

init();

