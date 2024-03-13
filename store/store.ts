"use client";
import { configureStore } from "@reduxjs/toolkit";
import products from "../slices/productsSlices";
import shoppingProducts from "../slices/shoppingProductsSlice";

const store = configureStore({
	reducer: {
		products,
		shoppingProducts,
	},
	devTools: process.env.NODE_ENV !== "production",
});

export default store;
