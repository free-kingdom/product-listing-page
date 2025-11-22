import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./feats/Products/productsSlice"

export const store = configureStore({
    reducer: {
        products: productReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store