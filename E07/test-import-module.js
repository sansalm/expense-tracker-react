import { priceList as pl } from "./price-list";

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
  
    }
  
  ];

  pl.setPriceList(examplePriceList);

  console.log(pl.getPrice(2, 130)); // 260 euros    