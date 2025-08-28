function claculateTotal(price: number, quantity: number, discount: number = 0): number {
    return price * quantity * (1 - discount/100);
}

console.log(claculateTotal(100, 2));