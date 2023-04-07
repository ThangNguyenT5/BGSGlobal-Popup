export default function selectBox() {
  const pgOverLay = document.querySelector(".bg-pg");
  const btnClose = document.querySelector(".btn-close");
  // const popUp = document.querySelector(".pop-up");
  const body = document.getElementsByTagName("body")[0];
  // btnClose.addEventListener ("click", function () {
  //   pgOverLay.classList.toggle('open')
  //   document.body.style.overflow = "hidden"
  // })

  let isOpen = false;
  if (btnClose) {
    btnClose.addEventListener("click", () => {
        isOpen = !isOpen;
        console.log(isOpen);
        if (isOpen) {
            btnClose.classList.add("active");
            // popUp.classList.add("open");
            pgOverLay.classList.add("open");
            body.style.overflowY = "hidden";
        } else {
            btnClose.classList.remove("active");
            // popUp.classList.remove("open");
            pgOverLay.classList.remove("open");
            body.style.overflowY = "scroll";
        }
    });
}

}