var dialog = document.querySelector('dialog');
var body = document.getElementsByTagName("body")[0];
// выводим модальное окно
document.querySelector('#open').onclick = function () {
  dialog.showModal();
  body.style.overflow="hidden";
  body.style.opacity="0.1"; 
}
// скрываем окно
document.querySelector('#close').onclick = function () {
  dialog.close();
  body.style.overflow="auto";
  body.style.opacity="1"; 
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
        body.style.opacity ="1"; 
    }
}
// window.onclick = function(){
//     dialog.close()
//     body.style.overflow=" "; 
// }