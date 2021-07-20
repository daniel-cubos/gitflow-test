const products = [
  {
    id: 1,
    name: "Coca cola",
    category: "Refrigerante",
    price: 10
  },
  {
    id: 2,
    name: "Guaraná Antártica",
    category: "Refrigerante",
    price: 20
  },
  {
    id: 3,
    name: "Leite Moça",
    category: "Leite condensado",
    price: 30
  }
];


function listAllProducts(category, initialPrice, finalPrice) {

  const allProducts = [];

  if (initialPrice && finalPrice) {
    const filteredByPrices = products.filter(product => product.price >= initialPrice && product.price <= finalPrice);
    allProducts.push(...filteredByPrices);
  }
  return allProducts;
}