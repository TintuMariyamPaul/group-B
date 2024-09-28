/*If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

1. Find the sum of all the multiples of 3 or 5 below 1000.

2. Create a function to find the sum of all the multiples of a or b below n.
(a,b,n) are function parameters

3. Allow the user to enter the parameters via text box(es)
and alert them to the output
*/

alert("Loaded Euler JS");
a=3;
b=5;
n=1000;

function sumOfMultiplesOfThreeAndFiveLessThanAThousand(){
    let sum = 0;
    for ( let i = 0; i<1000; i++){
        if (i%3 == 0 || i%5 == 0){
            sum = sum+1;

        }
    }
    alert("The answer is" + sum)

}

function sumOfMultiples(a,b,n){
    let sum = 0;
    for(let i=1; i<n; i++){
        if(i % a == 0 || i % b == 0){
            sum += i;
        }
    }
    return sum;
}

function calculate(){
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const n = parseInt(document.getElementById('n').value);


    const result =  sumOfMultiples(a,b,n);

    alert(`The sum of multiples of numbers ${a} or ${b} below ${n} is: ${result}`);
}
    
