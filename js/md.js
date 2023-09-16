let isDrawerOpen = false;

let drawer = document.querySelector(".drawer-layout");
let inputText = document.querySelector(".input-text");
let inputTextclear = document.querySelector(".input-text-clear");

function onDrawer(x) {
  x.classList.toggle("change");
  if (isDrawerOpen == false) {
    document.body.style.overflow = "hidden";
    drawer.style.display = "block";
    isDrawerOpen = true;
  } else {
    document.body.style.overflow = "auto";
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
  /*if (inputText.value.trim() !== "") {
    inputTextclear.style.display="block";
  } else {
    inputTextclear.style.display="none";
  }*/
});

inputTextclear.addEventListener("click", () => {
  inputText.value = "";
  inputTextclear.style.display="none";
});

/*
const bottomSheet = document.getElementById('bottomSheet');
let startY, currentY, previousY = 0;
let isOpen = false;

function handleTouchStart(event) {
  startY = event.touches[0].clientY;
  previousY = startY;
}

function handleTouchMove(event) {
  currentY = event.touches[0].clientY;
  const diffY = currentY - previousY;

  if ((isOpen && diffY < 0) || (!isOpen && diffY > 0)) {
    event.preventDefault();
    const newBottom = Math.min(0, bottomSheet.getBoundingClientRect().bottom - diffY);
    bottomSheet.style.bottom = newBottom + 'px';
    previousY = currentY;
  }
}

function handleTouchEnd() {
  isOpen = currentY < startY;
  bottomSheet.style.bottom = isOpen ? '0' : '-100%';
}

bottomSheet.addEventListener('touchstart', handleTouchStart, false);
bottomSheet.addEventListener('touchmove', handleTouchMove, false);
bottomSheet.addEventListener('touchend', handleTouchEnd, false);
*/
