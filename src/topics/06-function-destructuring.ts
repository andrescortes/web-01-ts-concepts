// create a interface to product
export interface Product {
    description: string;
    price: number;
};

// const phone: Product = {
//     description: 'An awesome phone!',
//     price: 700.0
// };

// const tablet: Product = {
//     description: 'An awesome tablet!',
//     price: 500.5
// };
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}
// destructuring objects in functions
// function taxCalculation(options: TaxCalculationOptions): [number, number] {
// function taxCalculation({ tax, products }: TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    let total = 0;
    const { tax, products } = options;
    products.forEach(({ price }) => {
        total += price;
    });
    let totalTaxes = products.reduce((acc, { price }) => acc + price, 0);
    // return [total, total * tax];
    return [total, totalTaxes * tax];

}

// const shoppingCart: Product[] = [phone, tablet];
// const tax = 0.1;

// const result = taxCalculation({
//     tax,
//     products: shoppingCart
// });
// const [total, totalTaxes] = result;
// console.log('Total', total);
// console.log('TotalTaxes', totalTaxes);

