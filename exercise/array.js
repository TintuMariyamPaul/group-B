function arr(a,b,1){
let sum = 0;
for(let i of 1){
    if ( i % a === 0 || i % b === 0) {
        sum += i;
      }
    }
    return sum;
}
