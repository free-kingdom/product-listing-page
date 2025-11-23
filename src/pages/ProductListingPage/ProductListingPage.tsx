import styles from './ProductListingPage.module.css'
import { fetchProducts, selectProducts, selectStatus } from "../../feats/Products/productsSlice"
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import ProductCard from '../../comps/ProductCard/ProductCard';
import { useEffect } from 'react';
import FilterBtns from '../../comps/FilterBtns/FilterBtns';
import PaginationBtns from '../../comps/PaginationBtns/PaginationBtns';

export default function ProductListingPage() {
    const products = useAppSelector(selectProducts);
    const status = useAppSelector(selectStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts({limit: 10, offset: 0}));
    }, [dispatch]);

    return (
        <div className={styles.productListingPage}>
            <div className={styles.filterBar}>
                <h1>商品列表</h1>
                <FilterBtns />
            </div>            
            <div className={styles.productListContainer}>
                {products.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
            <div className={styles.paginationBtns}>
                <PaginationBtns />
            </div>            
        </div>
    )
}