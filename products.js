let products = [
  {
    name: "smartphone",
    price: 599.99,
    stock: 50,
    category: "electronics",
    brand: "samsung",
  },
  {
    name: "Laptop",
    price: 1099.99,
    stock: 30,
    category: "Electronics",
    brand: "Apple",
  },
  {
    name: "Headphones",
    price: 129.99,
    stock: 100,
    category: "Electronics",
    brand: "Sony",
  },
  {
    name: "Running Shoes",
    price: 79.99,
    stock: 80,
    category: "Sports",
    brand: "Nike",
  },
  {
    name: "Coffee Maker",
    price: 49.99,
    stock: 20,
    category: "Home Appliances",
    brand: "Keurig",
  },
  {
    name: "Backpack",
    price: 39.99,
    stock: 60,
    category: "Fashion",
    brand: "Adidas",
  },
  {
    name: "Watch",
    price: 199.99,
    stock: 40,
    category: "Accessories",
    brand: "Casio",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    stock: 25,
    category: "Electronics",
    brand: "Microsoft",
  },
  {
    name: "Sunglasses",
    price: 149.99,
    stock: 70,
    category: "Fashion",
    brand: "Ray-Ban",
  },
  {
    name: "Watch",
    price: 199.99,
    stock: 40,
    category: "Accessories",
    brand: "Casio",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    stock: 25,
    category: "Electronics",
    brand: "Microsoft",
  },
  {
    name: "Sunglasses",
    price: 149.99,
    stock: 70,
    category: "Fashion",
    brand: "Ray-Ban",
  },
  {
    name: "Wireless Speaker",
    price: 89.99,
    stock: 45,
    category: "Electronics",
    brand: "JBL",
  },
];
function mostE (){
    let most=products[0].price;
    for (let i = 0; i < 10; i = i + 1){
   if(products[i].price>most){
   most = products[i].price
}
}
console.log(most);
}
mostE();


//  for (let i = 0; i < 10; i = i + 1){
//  console.log (i,"=>",products[i]);
//  }


// function setSale(saleAmout) {
//   for (let i = 0; i < 10; i = i + 1) {
//     products[i].price = products[i].price * (1 - saleAmout / 100);
//   }
// }

// setSale(20);


// function findByCategory(cate) {
//   for (let i = 0; i < 10; i = i + 1) {
//     if (products[i].category == cate) {
//       console.log(products[i]);
//     }
//   }
// }
// findByCategory("Fashion");

// function most{
//     let most=products[0].price;
//     for (let i = 0; i < 10; i = i + 1){
//    if(products[i].price>most){
//    most = products[i].price
// }
// }
// console.log(most);
// }
// most();
