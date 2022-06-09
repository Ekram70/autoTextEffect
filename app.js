const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = ["Graphic Designer", "Web Developer"];
let idx = 1;
let change = 0;
let count = 0;
let speed = 300 / speedEl.value;
let direction = true;

writeText();

function writeText() {
  let itemLength = text[change].length * 2;
  textEl.innerText = "I am a " + text[change].slice(0, idx);
  direction ? idx++ : idx--;

  if (idx == text[change].length) direction = false;
  if (idx == 0) direction = true;

  count++;
  if (count == itemLength) {
    change++;
    count = 0;
  }
  if (change == text.length) change = 0;

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
