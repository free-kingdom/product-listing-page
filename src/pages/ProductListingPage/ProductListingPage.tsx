import styles from './ProductListingPage.module.css'
import { fetchProducts, selectProducts, type ProductsState } from "../../feats/Products/productsSlice"
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import ProductCard from '../../comps/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import FilterBtns from '../../comps/FilterBtns/FilterBtns';
import PaginationBtns from '../../comps/PaginationBtns/PaginationBtns';
import { Grid, type CellComponentProps } from 'react-window';
import { Card, Skeleton } from 'antd';

function CellComponent({ products, columnCount, columnIndex, rowIndex, style, status } : CellComponentProps<{products: ProductsState["products"], columnCount: number, status: ProductsState["status"]}>) {
    const product = products[rowIndex * columnCount + columnIndex];
    const active = status === "loading" ? true : false;
    return (
        <div style={style} >
                {
                    status === "succeeded" ? (
                        <ProductCard key={product.id} product={product} />
                    ) : (
                        <Card
                            style={{ width: 250, height: 300 }}
                            cover={<Skeleton.Image active={active} style={{ width: 250, height: 150 }}/>}>
                            <Skeleton active={active} title={false} />
                        </Card>
                    )
                }
        </div>        
    )
}

export default function ProductListingPage() {
    const products = useAppSelector(selectProducts);    
    const dispatch = useAppDispatch();
    const [columnCount, setColumnCount] = useState<number>(4);    

    useEffect(() => {
        dispatch(fetchProducts({limit: products.limit, offset: 0}));
    }, [dispatch]);

    const gap = 15;    
    const columnWidth = 250;
    const rowHeight = 300;

    return (
        <div className={styles.productListingPage}>
            <div className={styles.filterBar}>
                <h1>商品列表</h1>
                <FilterBtns />
            </div>
            <Grid
                style={{width: columnWidth * columnCount + gap * (columnCount - 1), overflow: "hidden"}}
                className={styles.virtGrid}
                cellComponent={CellComponent}
                cellProps={{products: products.products, columnCount: columnCount, status: products.status}}
                columnCount={columnCount}
                columnWidth={(idx) => {                    
                    let g: number = idx === columnCount - 1 ? 0 : gap;
                    return columnWidth + g;
                }}
                rowCount={Math.ceil(products.products.length / columnCount)}
                rowHeight={rowHeight + gap}
            />
            <div className={styles.paginationBtns}>
                <PaginationBtns />
            </div>            
        </div>
    )
}