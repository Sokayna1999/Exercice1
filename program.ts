function getCustomerTotal(prices: number[]): number {
    return prices.reduce((acc, price) => acc + price, 0);
}

function getChange(total: number, paid: number): number {
    return paid - total;
}

function printChange(change: number): void {
    const denominations = [10, 5, 1];
    for (let denomination of denominations) {
        const count = Math.floor(change / denomination);
        change -= count * denomination;
        for (let i = 0; i < count; i++) {
            console.log(`${denomination} Euros`);
        }
    }
}

// Exécution
const prices = [100, 8.50, 85, 200.35, 140];
const total = getCustomerTotal(prices);
console.log(`Total à payer: ${total} Euros`);

const paid = 150;

if (paid < total) {
    console.log(`Le montant payé (${paid} Euros) est insuffisant. Il manque ${total - paid} Euros.`);
} else {
    const change = getChange(total, paid);
    console.log(`Monnaie à rendre: ${change} Euros`);

    printChange(change);
}
