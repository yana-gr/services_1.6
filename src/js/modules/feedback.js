
import './variables'

// Открытие/закрытие Обратная связь
for (let i = 0; i < openFeedback.length; i = i + 1){
  openFeedback[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    feedback.classList.add('sidebar--show');
    sidebar.classList.remove('sidebar--show');
    mask.classList.add('mask--show');
    modalCall.classList.remove('sidebar--show');
  });
}

closeFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedback.classList.remove('sidebar--show');
  mask.classList.remove('mask--show')
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === "Escape") {
    feedback.classList.remove('sidebar--show');
    mask.classList.remove('mask--show')
  }
});
