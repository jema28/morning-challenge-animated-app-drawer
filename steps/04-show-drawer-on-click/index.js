// Now I would create the js to toggle the drawer in and out
(() => {
  /* select the button and drawer html */
  const appDrawerButton = document.querySelector('.app_drawer__button');
  const appDrawer = document.querySelector('.app_drawer');

  /* create a listener that does the toggling */
  appDrawerButton.addEventListener('click', () => toggleMenu(appDrawer, appDrawerButton));
})();

/* pass in both the drawer and button because we want to change the styles/position both of them */
function toggleMenu(drawer, button) {
  button
    .classList
    .toggle('app_drawer__button__visible');
  drawer
    .classList
    .toggle('app_drawer__visible');
}
