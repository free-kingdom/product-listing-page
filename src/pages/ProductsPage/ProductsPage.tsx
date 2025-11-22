import styles from './ProductsPage.module.css'
import { fetchProducts, selectProducts, selectStatus } from "../../feats/Products/productsSlice"
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import ProductCard from '../../comps/ProductCard/ProductCard';
import { useEffect } from 'react';

export default function ProductsPage() {
    const products = useAppSelector(selectProducts);
    const status = useAppSelector(selectStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts({limit: 20, offset: 0}));
    }, [dispatch]);

    return (
        <div className={styles.productsPage}>
            <div className={styles.productsContainer}>
                {products.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
        </div>
    )
}