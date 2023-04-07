export default function selectBox() {
  const iconChev =  document.querySelector ('.icon-chevdown')
  const selectBox = document.querySelector ('.form-control')

  iconChev.addEventListener('click', function (e) {
    iconChev.classList.toggle('active')
  })
}
