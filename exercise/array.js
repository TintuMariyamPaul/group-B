let l = [1,2,3,4,5,6,7,8,9,10];
let a = 2;
let b = 3;

function sumMultiples(a, b, l) {
    return l.reduce((sum, num) => {
       if (num % a === 0 || num % b === 0) {
           return sum + num;
        }
        return sum;
    }, 0);
}

let result = sumMultiples(a,b,l);
alert('The sum of multiples of numbers ${a} or ${b} is: ${result}');
