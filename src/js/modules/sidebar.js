
import './variables'

  if (document.body.clientWidth < 1365) {

  // Открытие/закрытие бокового меню
  openSidebar.addEventListener('click', function (evt) {
    evt.preventDefault();
    sidebar.classList.add('sidebar--show');
    feedback.classList.remove('sidebar--show');
    mask.classList.add('mask--show');
    modalCall.classList.remove('sidebar--show');
  });

  closeSidebar.addEventListener('click', function (evt) {
    evt.preventDefault();
    sidebar.classList.remove('sidebar--show');
    mask.classList.remove('mask--show');
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
      sidebar.classList.remove('sidebar--show');
      mask.classList.remove('mask--show');
    }
  });
}
