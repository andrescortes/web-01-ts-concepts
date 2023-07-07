import { Product,taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'An awesome phone!',
        price: 700.0
    },
    {
        description: 'An awesome tablet!',
        price: 500.5
    }
];

const tax = 0.1;
const [ total, totalTaxes ] = taxCalculation({
    tax,
    products: shoppingCart
});
console.log('Total', total);
console.log('TotalTaxes', totalTaxes);