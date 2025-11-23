import styles from "./FilterBtns.module.css"
import { Button, Select, Dropdown } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProducts, selectProducts } from "../../feats/Products/productsSlice";
import type { IProduct } from "../../types";

export default function FilterBtns() {    
    const products = useAppSelector(selectProducts);
    const dispatch = useAppDispatch();

    const createOnClickCategory = (category: IProduct["category"] | undefined) => {
        return () => {
            dispatch(fetchProducts({
                limit: products.limit,
                offset: 0,
                category: category,
                sort: products.sort
            }));
        };
    }

    const items = [
        {
            key: 0,
            label: (
                <div onClick={createOnClickCategory(undefined)}><strong>全部</strong></div>
            )
        },
        {
            key: 1,
            label: (
                <div onClick={createOnClickCategory("服饰")}>服饰</div>
            )
        },
        {
            key: 2,
            label: (
                <div onClick={createOnClickCategory("食品")}>食品</div>
            )
        },
        {
            key: 3,
            label: (
                <div onClick={createOnClickCategory("家居")}>家居</div>
            )
        }
    ]

    return (
        <div className={styles.filterBtns}>
            <div className={styles.filterBtn}>
                <Dropdown menu={{items}} placement="bottomLeft">
                    <Button type="primary">按类别筛选</Button>
                </Dropdown>                            
            </div>            
            <Select
                defaultValue="按价格排序"
                style={{ width: 120 }}
                onChange={(value) => {
                    dispatch(fetchProducts({
                        limit: products.limit,
                        offset: products.offset,
                        category: products.category,
                        sort: value as "asc" | "desc"
                    }));                    
                }}
                options={[
                    {value: "asc", label: "按价格升序"},
                    {value: "desc", label: "按价格降序"}            
                ]}
            />
        </div>
    )
}