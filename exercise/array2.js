
let l = [1,2,3,4,5,6,7,8,9,10];
let a = [2,3];


function sumMultiples(a, l) {
  return l.reduce((sum, num) => {
      if (num % a[0] === 0 || num % a[1] === 0) {
          return sum + num;
      }
      return sum;
  }, 0);

}

let result = sumMultiples(a,1);
console.log(`The sum of multiples of numbers ${a} in the list ${l} is: ${result}`);