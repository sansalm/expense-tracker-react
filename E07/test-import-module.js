import { priceList as pl } from "./price-list.js";

const examplePriceList = [  
    {
  
      itemid: 1,
      itemname: 'bottle',
      prices: [{ qty: 1, price: 1.25},{ qty: 100, price: 1.10},{ qty: 1000, price: 1.00}]
  
    },  
    {
  
      itemid: 2,  
      itemname: 'glass',  
      prices: [{ qty: 1, price: 2.50},{ qty: 50, price: 2.00},{ qty: 200, price: 1.60}]
  
    },
    {
      itemid: 3,
      itemname: 'can',
      prices: [{ qty: 1, price: 1.50},{qty: 80, price: 1.35},{ qty: 500, price: 1.25}]

    }
  ];

pl.setPriceList(examplePriceList);

console.log('The price for 130 glasses is: ', pl.getPrice(2, 130).toFixed(2), 'euros.'); // 260 euros    
console.log('The price for 550 cans is: ', pl.getPrice(3, 550).toFixed(2), 'euros.') // 687.5 euros
console.log('The price for 115 bottles is: ', pl.getPrice(1, 115).toFixed(2), 'euros.'); // 126.5 euros    
console.log('The price for 75 cans is: ', pl.getPrice(3, 75).toFixed(2), 'euros.') // 112.5 euros