import type { IProduct } from '../types';

const products: IProduct[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `产品${i + 1}`,
    price: Number((Math.random() * 100 + 10).toFixed(2)),
    image: `https://picsum.photos/300/200?random=${i}`,
    category: ["服饰", "食品", "家居"][Math.floor(Math.random() * 3)],    
    description: (() => {
        // Description length: min 5, max 100 Chinese characters
        const minLen = 3, maxLen = 50;
        const base = `产品${i + 1}的描述。`;        
        const extraLen = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen - base.length;
        const filler = extraLen > 0 ? '内容'.repeat(Math.ceil(extraLen / 2)).slice(0, extraLen) : '';
        return base + filler;
    })()
}));

export function mockFetchProducts({ limit = 10, offset = 0, category }: { limit?: number; offset?: number; category?: IProduct['category'] } = {}) {
    return new Promise<IProduct[]>((resolve) => {
        let result = products;
        if (category) {
            result = result.filter(p => p.category === category);
        }        
        const start = Math.max(0, Number(offset) || 0);
        const end = Math.max(start, start + (Number(limit) || 0));
        result = result.slice(start, end);
        setTimeout(() => {
            resolve(result);
        }, 1500);
    });
}