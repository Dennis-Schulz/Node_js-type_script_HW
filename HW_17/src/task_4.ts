type ProductInfo = [string, number, number];

type Inventory = {
    [productName: string]: number;
};


function updateStock(inventory: Inventory, productInfo: ProductInfo): Inventory {
    const [productName, , quantity] = productInfo;
    inventory[productName] = quantity;
    return {...inventory};
}

const inventory: Inventory = {
    "Товар 1": 50,
    "Товар 2": 30,
    "Товар 3": 40
};

const productInfo: ProductInfo = ["Товар 2", 60, 300000];
console.log('Исходное состояние инвентаря:');
console.log(inventory);
console.log('Обновленное состояние инвентаря:');
console.log(updateStock(inventory, productInfo));