import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { IProduct } from "../../types"
import type { RootState } from "../../store"
import { mockFetchProducts } from "../../api/mock"

export interface ProductsState {
    /* 商品列表 */
    products: IProduct[],
    /* 网络获取状态 */
    status: "idle" | "loading" | "succeeded" | "failed",
    /* 商品总数（计算分页 */
    total: number | undefined,
    /* 偏移量（计算分页 */
    offset: number,
    /* 每页商品数目 */
    limit: number,
    /* 商品类别 */
    category: IProduct["category"] | undefined,
    sort: "asc" | "desc" | undefined
}

const initialState: ProductsState = {
    products: [],
    status: "idle",
    total: undefined,
    offset: 0,
    limit: 12,
    category: undefined,
    sort: undefined
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, state => {
            state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            const {products, total, category, offset, sort} = action.payload;
            state.products = products;
            state.total = total;
            state.category = category;
            state.sort = sort;
            state.offset = offset;
        })
        .addCase(fetchProducts.rejected, state => {
            state.status = "failed";
        });
    }
})

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    mockFetchProducts
)

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer 