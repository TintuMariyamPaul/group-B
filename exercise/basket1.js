basket = {orange:1, apple:2, grapes:3, coffee:1, bread:1};
prices = {orange:1.02, apple:0.05, grapes:2.0, coffee: 3.0 , bread:2.0};

let a = (basket,prices) =>{
    let calculateTotalCost = 0;
    for(let item in basket){
     if(prices[item] != undefined){
         calculateTotalCost += basket[item] * prices[item];
     }
    }
    return calculateTotalCost;
 }

 function calculate() {
    const basket = parseInt(document.getElementById('a').value);