const number1 = Math.ceil(Math.random() * 6);
const number2 = Math.ceil(Math.random() * 6);
const number3 = Math.ceil(Math.random() * 6);
const number4 = Math.ceil(Math.random() * 6);
const number5 = Math.ceil(Math.random() * 6);
const number6 = Math.ceil(Math.random() * 6);

const sum = number1 + number2 + number3 + number4 + number5 + number6;
console.log(`You have thrown number ${sum}.`);

if (sum >= 25) {
  console.log("Well played. You winn!");
} else {
  console.log("No luck. Please try again!");
}
