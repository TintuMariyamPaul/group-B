let a = (basket,prices) =>{
   let calculateTotalCost = 0;
   for(let item in basket){
    if(prices[item] != undefined){
        calculateTotalCost += basket[item]*prices[item];
    }
   }
   return calculateTotalCost;
}
basket = {orange:1, apple:5, grapes:3};
prices = {orange:1.02, apple:0.05,grapes:2.0, tea: 5.0 , milk:8.0};
alert(a(basket,prices));