/*
import {
    fetchProducts,
    selectAllProducts,
    selectProductStatus,
    } from "@/redux/features/product/productSlice";
    import { useEffect } from "react";
    import { useDispatch, useSelector } from "react-redux";
    */
import { configureStore } from '@reduxjs/toolkit'
import {cardReducer} from './features/cart/cartSlice.js'
export const store = configureStore({
reducer: {
    cart: cardReducer
},
})
/*
import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/product/productSlice'
import cartSlice from './features/cart/cartSlice'
export const store = configureStore({
reducer: {
// add reducers here
products: productSlice,
cart: cartSlice
}})

export default function Product() {
    // fetch data from API using redux
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchProducts({ limit: 21, offset: 0 }));
    }, []);
    // get products from redux store
    const products = useSelector(selectAllProducts);
    // get products status from redux store | status: 'idle' | 'loading' | 'succeeded' | 'failed'
    const productsStatus = useSelector(selectProductStatus);
    if (productsStatus === "loading") {
        return (
        <Spinner />
        );
        }
        return (
        <main className="...">
        {products.map((product, key) => (
        <CardProduct key={product?.id || key} {...product} />
        ))}
        </main>);}
        */