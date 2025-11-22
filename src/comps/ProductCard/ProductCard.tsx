import styles from "./ProductCard.module.css"
import type { IProduct } from "../../types/product"

interface ProductCardProps {
    product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className={styles.productCard}>
            {product.id}
        </div>
    )
}