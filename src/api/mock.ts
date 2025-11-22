import type { IProduct } from '../types';

const products: IProduct[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `产品${i + 1}`,
    price: Number((Math.random() * 100 + 10).toFixed(2)),
    image: `https://via.placeholder.com/200x200.png?text=Product+${i + 1}`,
    description: `产品${i + 1}的描述，占位内容。`
}));

export function mockFetchProducts({ limit, offset }) {
    return new Promise<IProduct[]>((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1500);
    });
}