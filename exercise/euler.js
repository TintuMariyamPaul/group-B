/*If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

1. Find the sum of all the multiples of 3 or 5 below 1000.

2. Create a function to find the sum of all the multiples of a or b below n.
(a,b,n) are function parameters

3. Allow the user to enter the parameters via text box(es)
and alert them to the output

Demonstrate some DOM manipulation in the exercise.
for example changing the value of a result div, hiding inputs once the button is clicked ...
*/


alert("Loaded Euler JS");
a=3;
b=5;
n=1000;

function sumOfMult(a, b, n) {
  let s = 0;
  for (let i = 1; i < n; i++) {
    if (i % a === 0 || i % b === 0) {
      s += i;
    }
  }
  return s;
}

function calculate() {
  const a = parseInt(document.getElementById('a').value);
  const b = parseInt(document.getElementById('b').value);
  const n = parseInt(document.getElementById('n').value);

  const result = sumOfMult(a, b, n);

  document.getElementById('result').textContent = `The sum of multiples of numbers ${a} or ${b} below ${n} is: ${result}`;
  alert(`The sum of multiples of numbers ${a} or ${b} below ${n} is: ${result}`);

  document.getElementById('a').style.display = 'none';
  document.getElementById('b').style.display = 'none';
  document.getElementById('n').style.display = 'none';
  document.getElementById('calculateButton').style.display = 'none';
  document.getElementById('sum').style.display = 'block';
  document.getElementById('label1').style.display = 'none';
  document.getElementById('label2').style.display = 'none';
  document.getElementById('label3').style.display = 'none';
}

function showInput() {
  document.getElementById('a').style.display = 'block';
  document.getElementById('b').style.display = 'block';
  document.getElementById('n').style.display = 'block';
  document.getElementById('sum').style.display = 'none';
  document.getElementById('a').style.display = 'block';
  document.getElementById('b').style.display = 'block';
  document.getElementById('c').style.display = 'block';
}

