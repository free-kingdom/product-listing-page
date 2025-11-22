import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { IProduct } from "../../types"
import type { RootState } from "../../store"
import { mockFetchProducts } from "../../api/mock"

export interface ProductsState {
    value: IProduct[],
    status: "idle" | "loading" | "succeeded" | "failed"
}

const initialState: ProductsState = {
    value: [],
    status: "idle"
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<IProduct[]>) {
            state.value = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, state => {
            state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.value = action.payload;
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

export const selectProducts = (state: RootState) => state.products.value;
export const selectStatus = (state: RootState) => state.products.status;

export default productsSlice.reducer 