const products = [
    { id: 1, name: "Widget", price: 50, quantity: 120 },
    { id: 2, name: "Gadget", price: 30, quantity: 80 },
    { id: 3, name: "Doohickey", price: 100, quantity: 200 },
    { id: 4, name: "Thingamajig", price: 75, quantity: 90 }
  ];
 
 
 
//   console.log(discounted_array);
 
 
 
 
const discount_product = products.map(product=>(
    {
        ...product,
        price:product.quantity>100?product.price*0.9:product.price
    }
));
 
console.log(discount_product);
 
 
 
const discounted_price = products.map(product=>(
    {
        ...product,
        price:product.quantity>100?product.price*0.9:product.price
    }
)).filter(product=>product.price<products.find(p => p.id === product.id).price);
 
console.log(discounted_price);
discounted_price.forEach(
    product=>{
        console.log(` value ${product.name}: price ${product.price}`)
    }
);
 
 
