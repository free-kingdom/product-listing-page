export interface IProduct {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: "服饰" | "食品" | "家居"
}
