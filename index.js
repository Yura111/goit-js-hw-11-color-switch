const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackground(colorsArray) {
  const randomColorIdx = randomIntegerFromInterval(0, colorsArray.length - 1);
  body.style.background = colorsArray[randomColorIdx];
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  interval = setInterval(() => {
    changeBackground(colors);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  clearInterval(interval);
  console.log('stopped setting color!');
});