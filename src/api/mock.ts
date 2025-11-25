import type { IProduct } from '../types';

const products: IProduct[] = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: `产品${i + 1}`,
    price: Number((Math.random() * 100 + 10).toFixed(2)),
    image: `https://picsum.photos/300/200?random=${i}`,
    category: (["服饰", "食品", "家居"] as const)[Math.floor(Math.random() * 3)],    
    description: (() => {
        // Description length: min 5, max 100 Chinese characters
        const minLen = 3, maxLen = 50;
        const base = `产品${i + 1}的描述。`;        
        const extraLen = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen - base.length;
        const filler = extraLen > 0 ? '内容'.repeat(Math.ceil(extraLen / 2)).slice(0, extraLen) : '';
        return base + filler;
    })()
}));

export function mockFetchProducts(
    { limit = 10, offset = 0, category, sort }: { limit?: number; offset?: number; category?: IProduct['category']; sort?: "asc" | "desc"} = {}) {
    return new Promise<{ 
        total: number; 
        products: IProduct[]; 
        offset: number; 
        limit: number;
        category?: IProduct['category'];
        sort?: "asc" | "desc" | undefined
    }>((resolve) => {
        let filteredProducts = products;
        if (sort) {
            filteredProducts.sort((a, b) => {
                if (sort === "asc") {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            });
        }
        if (category) {
            filteredProducts = filteredProducts.filter(p => p.category === category);
        }        
        const total = filteredProducts.length;
        const start = Math.max(0, Number(offset) || 0);
        const end = Math.max(start, start + (Number(limit) || 0));
        const pagedProducts = filteredProducts.slice(start, end);
        setTimeout(() => {
            resolve({
                total,
                products: pagedProducts,
                offset: start,
                limit: limit,
                ...(sort ? { sort } : {}),
                ...(category ? { category } : {})
            });
        }, 500);
    });
}