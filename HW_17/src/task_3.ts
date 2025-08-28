
type OrderStatus = 'pending' | 'shipped' | 'delivered';

interface Order {
    orderId: number;
    amount: number;
    status: OrderStatus;
}

const orders: Order[]= [
    {
        orderId: 1,
        amount: 100,
        status: 'pending'
    },
    {
        orderId: 2,
        amount: 200,
        status: 'shipped'
    },
    {
        orderId: 3,
        amount: 300,
        status: 'delivered'
    },
    {
        orderId: 4,
        amount: 400,
        status: 'pending'
    },
    {
        orderId: 5,
        amount: 500,
        status: 'shipped'
    }

]

function filterOrdersByStatus(order: Order[], status:OrderStatus): Order[] {
    return order.filter(order => order.status === status);
}

const pendingOrders = filterOrdersByStatus(orders, 'pending');
console.log(pendingOrders);
