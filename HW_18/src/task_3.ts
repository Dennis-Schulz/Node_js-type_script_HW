type Product = {
  name: string;
  price: number;
};

interface CalculateDiscount {
  (product: Product, discount: number): number;
}

const calculateDiscount: CalculateDiscount = (product, dicsount) => {
  return product.price * (1 - dicsount / 100);
};

const product: Product = {
  name: 'Телефон',
  price: 10000,
};

console.log(calculateDiscount(product, 10));
