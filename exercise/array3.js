function sumMultiplesOfElements(a, l) {
    let sum = 0;
    for (let j of l) {
      for (let divisor of a) {
        if (j % divisor === 0) {
          sum += j;
          break; 
        }
      }
    }
    return sum;
  }

  function calculateSum() {
    const aInput = document.getElementById("a-input").value;
    const lInput = document.getElementById("l-input").value;

    const a = aInput.split(",").map(Number);
    const l = lInput.split(",").map(Number);

    const result = sumMultiplesOfElements(a, l);
    document.getElementById("result").textContent = `The sum of multiples of elements in a from the list l is: ${result}`;
  }