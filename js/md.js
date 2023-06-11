let isDrawerOpen = false;

let drawer = document.querySelector(".drawer-layout");
let inputText = document.querySelector(".input-text");
let inputTextclear = document.querySelector(".input-text-clear");

function onDrawer(x) {
  x.classList.toggle("change");
  if (isDrawerOpen == false) {
    drawer.style.display = "block";
    isDrawerOpen = true;
  } else {
    drawer.style.display = "none";
    isDrawerOpen = false;
  }
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

function changeBackgroundColor(x) {
  let color = getRandomColor();
  x.style.backgroundColor = color;
}

inputTextclear.style.display="none";
inputText.addEventListener("input", () => {
  if (inputText.value.trim() !== "") {
    inputTextclear.style.display="block";
  } else {
    inputTextclear.style.display="none";
  }
});

inputTextclear.addEventListener("click", () => {
  inputText.value = "";
  inputTextclear.style.display="none";
});