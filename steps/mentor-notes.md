# Mentor notes

## 01 - Create Button

```html
<!-- 1 - Start with the creating the button html -->
<button class="app_drawer__button"></button>
```

NB. Remember, the container is relative

```css
.app_drawer__button {
  /* Get the button on the page  */
  width: 5em;
  height: 5em;
  background: skyblue;

  /* Make it into a circle and give it a border */
  border-radius: 50%;
  border: 12px solid midnightblue;

  /* Position it in the top left corner / and give it the highest z-index in the code*/
  position: absolute;
  top: 3%;
  left: 3em;
  z-index: 2;
}
```

## 02 - Create Drawer

```html
<!-- 2 - Add the drawer html -->
<div class="app_drawer">
  <div class="app_drawer__items">
    <h2 class="app_drawer__title">App Drawer</h2>
  </div>
</div>
```

```css
.app_drawer {
  /* Get the drawer on the page */
  width: 20%;
  height: auto;
  background: lightblue;

  /* Position the drawer on the left  (absolute takes the element out of the flow of the page*/
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;

  /* Give drawer second highest index */
  z-index: 1;
}

.app_drawer__title {
  margin: 0.5em;
}
```

## 03 - Translate drawer off the page

```css
.app_drawer {
  /* Now get the drawer off the page to start */
  transform: translateX(-100%);
}
```

## 04 - Show drawer on click

```javascript
// Now I would create the js to toggle the drawer in and out
(() => {
  /* select the button and drawer html */
  const appDrawerButton = document.querySelector(".app_drawer__button");
  const appDrawer = document.querySelector(".app_drawer");

  /* create a listener that does the toggling */
  appDrawerButton.addEventListener("click", () =>
    toggleMenu(appDrawer, appDrawerButton)
  );
})();

/* pass in both the drawer and button because we want to change the styles/position both of them */
function toggleMenu(drawer, button) {
  button.classList.toggle("app_drawer__button__visible");
  drawer.classList.toggle("app_drawer__visible");
}
```

```css
.app_drawer__visible {
  /* When the button is clicked the app drawer appears */
  transform: translateX(0);
}
```

## 05 - Add drawer transition

```css
.app_drawer {
  /* Add transition last: transition: property duration timing-function delay|initial|inherit;*/
  transition: transform 0.5s ease-in;
}
```

## 06 - Move button on click

```css
.app_drawer__button__visible {
  /* Move the button to the left */
  top: 1%;
  left: 14%;
}
```

## 07 - Make button smaller on drawer

```css
.app_drawer__button__visible {
  /* Make the button smaller when on drawer */
  transform: scale(0.8);
}
```

## 08 - Add button transition

When you scale / change position you want all properties to transition

```css
.app_drawer__button {
  /* Add transition to the transform */
  transition: all 0.5s ease-in;
}
```
