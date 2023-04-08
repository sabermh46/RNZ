const target = 300;
const duration = 3000; // 3 seconds in milliseconds
const stepTime = Math.floor(duration / target);
let currentNumber = 0;

const counterElement = document.querySelector('.counter.employee');

const counting = setInterval(() => {
  currentNumber++;
  counterElement.innerText = currentNumber;

  if (currentNumber === target) {
    clearInterval(counting);
  }
}, stepTime);






const target2 = 954;
const duration2 = 3000; // 3 seconds in milliseconds
const stepTime2 = Math.floor(duration2 / target2);
let currentNumber2 = 0;

const counterElement2 = document.querySelector('.counter.employee3');

const counting2 = setInterval(() => {
  currentNumber2++;
  counterElement2.innerText = currentNumber2;

  if (currentNumber2 === target2) {
    clearInterval(counting2);
  }
}, stepTime2);