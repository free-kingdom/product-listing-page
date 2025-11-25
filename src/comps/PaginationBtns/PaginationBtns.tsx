import { Pagination } from "antd";
import { selectProducts, fetchProducts } from "../../feats/Products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export default function PaginationBtns() {
    const products = useAppSelector(selectProducts);    
    const dispatch = useAppDispatch();

    return (
        <Pagination 
            disabled={products.status==="loading"}
            showSizeChanger
            current={Math.floor(products.offset / products.limit) + 1}
            defaultPageSize={products.limit}
            pageSizeOptions={[12, 24, 36]}
            onChange={(page, pageSize) => {
                dispatch(fetchProducts({
                    limit: pageSize,
                    offset: (page - 1) * pageSize,
                    category: products.category,
                    sort: products.sort
                }));
            }}
            total={products.total ?? 0}
            showTotal={(total) => `共${total}条`}
        />
    )
}