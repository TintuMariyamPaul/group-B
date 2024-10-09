
let l = [1,2,3,4,5,6,7,8,9,10];
let a = [2,3];


function sumMultiples(a, l) {
  return l.reduce((sum, num) => {
      if (num % a[0] === 0 || num % a[l] === 0) {
          return sum + num;
      }
      return sum;
  }, 0);

}

let result = sumMultiples(a,l);
document.getElementById('result').innerText = `The sum of multiples of ${a[0]} or ${a[1]} is: ${result}`;
console.log(`The sum of multiples of ${a[0]} or ${a[1]} in the list is: ${result}`);
