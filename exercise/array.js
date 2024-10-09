let l = [1,2,3,4,5,6,7,8,9,10];
let a = 2;
let b = 3;

function sumMultiples(a, b, l) {
  let sum = 0;
  for (let num of l) {
    if (num % a === 0 || num % b === 0) {
      sum += num;
    }
  }
  return sum;
}

let result = sumMultiples(a,b,1);
alert(`The sum of multiples of numbers ${a} or ${b} below ${l} is: ${result}`);
