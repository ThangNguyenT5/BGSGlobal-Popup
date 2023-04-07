export default function selectBox() {
  const pgOverLay = document.querySelector(".bg-pg");
  const btnClose = document.querySelector(".btn-close");
  const popUp = document.querySelector(".pop-up");

  btnClose.addEventListener ("click", function () {
    popUp.classList.toggle('open')
  })
    if (btnClose) {
        btnClose.addEventListener("click", function() {
            isOpen = false;
            pgOverLay.classList.remove("open");
            body.style.overflowY = "scroll";
        });
    }
    if (pgOverLay) {
      pgOverLay.addEventListener("click", function() {
            isOpen = false;
            burgerBtn.classList.remove("active");
            mobile.classList.remove("open");
            pgOverLay.classList.remove("open");
            header.classList.remove("sticky");
            body.style.overflowY = "scroll";
        });
    }
}
