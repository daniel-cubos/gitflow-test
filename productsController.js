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


function listAllProducts(parameters) {
  const { category, initialPrice, finalPrice } = parameters;

  const allProducts = [];

  if (category) {
    const filteredByCategory = products.filter(product => product.category === category);
    allProducts.push(...filteredByCategory);
  }

  return allProducts;
}

listAllProducts({ category: "Refrigerante" });

