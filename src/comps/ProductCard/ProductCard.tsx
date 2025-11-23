import styles from "./ProductCard.module.css"
import type { IProduct } from "../../types/product"
import { Card } from "antd";

const { Meta } = Card;

interface ProductCardProps {
    product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [int, frac] = product.price.toString().split(".");

    return (
        <Card hoverable cover={<img draggable={false} src={product.image} alt={product.name}/>}>
            <Meta 
                title={product.category + product.id} 
                description={
                    product.description.length < 12 
                        ? product.description + ' '.repeat(12 - product.description.length)
                        : product.description.slice(0, 12) + '...'
                }
            />
            <div className={styles.price}>
                <span>￥</span>
                <span className={styles.price__int}>{int}</span>
                <span>.</span>
                <span>{frac || "00"}</span>                
            </div>
        </Card>
    )
}