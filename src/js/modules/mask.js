
import './variables'

// Закрытие модальных окон при клике ВНЕ окна
mask.addEventListener('click', (evt) => {
  if (evt.target === mask) {
     mask.classList.remove('mask--show');
     sidebar.classList.remove('sidebar--show');
     feedback.classList.remove('sidebar--show');
     modalCall.classList.remove('sidebar--show');
     document.body.style.overflow = '';
  }
});
