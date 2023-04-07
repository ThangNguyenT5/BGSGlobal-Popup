export default function selectBox() {
  const pgOverLay = document.querySelector(".bg-pg");
  const btnOpen = document.querySelector(".btn-open");
  const btnClose = document.querySelector(".btn-close");
  const popUp = document.querySelector(".popup");
  const body = document.getElementsByTagName("body")[0];
  let isOpen = false;
  if (btnOpen) {
    btnOpen.addEventListener("click", () => {
        isOpen = !isOpen;
        console.log(isOpen);
        if (isOpen) {
            btnClose.classList.add("active");
            popUp.classList.add("open");
            pgOverLay.classList.add("open");
            body.style.overflowY = "hidden";
        } else {
            btnClose.classList.remove("active");
            popUp.classList.remove("open");
            pgOverLay.classList.remove("open");
            body.style.overflowY = "scroll";
        }
    });
  }
  if (btnClose) {
    btnClose.addEventListener("click", () => {
      popUp.classList.remove("open");
      pgOverLay.classList.remove("open");
    });
  }
  body.addEventListener("click", () => {
    alert('a')
  })
}
