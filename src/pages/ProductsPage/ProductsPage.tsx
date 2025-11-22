import { useEffect } from 'react';
import styles from './ProductsPage.module.css'

export default function ProductsPage() {

    useEffect(() => {
        
    }, []);
    
    return (
        <div className={styles.productsPage}>
            <div className={styles.productsContainer}></div>
        </div>
    )
}