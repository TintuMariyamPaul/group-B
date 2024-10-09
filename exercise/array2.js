
let l = [1,2,3,4,5,6,7,8,9,10];
let a = [2,3];


function sumMultiples(a, l) {
  let sum = 0;
  for (let num of l) {
    if (num % a[0] === 0 || num % a[1] === 0) {
      sum += num;
    }
  }
  return sum;
}

let result = sumMultiples(a,1);
alert(`The sum of multiples of numbers ${a} in the list ${l} is: ${result}`);