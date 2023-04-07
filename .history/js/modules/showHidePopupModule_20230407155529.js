export default function selectBox() {
  const pgOverLay = document.querySelector(".bg-pg");
  const btnOpen = document.querySelector(".btn-open");
  const btnClose = document.querySelector(".btn-close");
  const formPopup = document.querySelector(".regist");
  const body = document.getElementsByTagName("body")[0];

  let isOpen = false;
  if (btnOpen) {
    btnOpen.addEventListener("click", () => {
        isOpen = !isOpen;
        if (isOpen) {
            btnClose.classList.add("active");
            formPopup.classList.add("open");
            pgOverLay.classList.add("open");
            body.style.overflowY = "hidden";
        } else {
            btnClose.classList.remove("active");
            formPopup.classList.remove("open");
            pgOverLay.classList.remove("open");
            body.style.overflowY = "scroll";
        }
    });
  }
  if (btnClose) {
    btnClose.addEventListener("click", () => {
      formPopup.classList.remove("open");
      pgOverLay.classList.remove("open");
      isOpen = false;
    });
  }
  pgOverLay.addEventListener("click", () => {
    formPopup.classList.remove("open");
    pgOverLay.classList.remove("open");
    isOpen = false;
  })
}