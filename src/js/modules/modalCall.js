
import './variables'

// Открытие/закрытие Звонок

for (let i = 0; i < openModalCall.length; i = i + 1){
  openModalCall[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCall.classList.add('sidebar--show');
    sidebar.classList.remove('sidebar--show');
    mask.classList.add('mask--show');
    feedback.classList.remove('sidebar--show');
  });
}

closeModalCall.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalCall.classList.remove('sidebar--show');
  mask.classList.remove('mask--show')
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === "Escape") {
    modalCall.classList.remove('sidebar--show');
    mask.classList.remove('mask--show')
  }
});
