export default function selectBox() {
  const pgOverLay = document.querySelector(".bg-pg");
  const btnClose = document.querySelector(".btn-close");
  const popUp = document.querySelector(".pop-up");

  btnClose.addEventListener ("click", function () {
    pgOverLay.classList.toggle('open')
    document.body.style.overflow = "hidden"
  })

  let isOpen = false
  if (btnClose) {
    btnClose.addEventListener("click", () => {
        isOpen = !isOpen;
        if (isOpen) {
            btnClose.classList.add("active");
            mobile.classList.add("open");
            mobileOverLay.classList.add("open");
            body.style.overflowY = "hidden";
        } else {
            btnClose.classList.remove("active");
            mobile.classList.remove("open");
            mobileOverLay.classList.remove("open");
            body.style.overflowY = "scroll";
        }
    });
}

}