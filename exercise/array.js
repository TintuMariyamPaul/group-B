function sumMultiples(a, b, l) {
  let sum = 0;
  for (let num of l) {
    if (num % a === 0 || num % b === 0) {
      sum += num;
    }
  }
  return sum;
}

function calculateSum() {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);   

  const listInput = document.getElementById("list").value;
  const l = listInput.split(",").map(Number);

  const result = sumMultiples(a, b, l);
  document.getElementById("result").textContent = `The sum of multiples of ${a} or ${b} in the list is: ${result}`;
}