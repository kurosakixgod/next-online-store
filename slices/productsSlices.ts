"use client";

import { createSlice } from "@reduxjs/toolkit";
import { Product, Statuses } from "@/types/Products";

interface StateProducts {
	products: Product[];
	productsSortingStatus: Statuses;
	loading: string;
}

const initialState: StateProducts = {
	products: [],
	productsSortingStatus: "alphabet",
	loading: "idle",
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setSortingStatus: (state, action) => {
			state.productsSortingStatus = action.payload;
		},
		productsFetching: (state) => {
			state.loading = "loading";
		},
		productsFetched: (state, action): void => {
			state.loading = "idle";
			state.products = action.payload;
		},
		productsFetchingError: (state) => {
			state.loading = "error";
			console.log("render");
		},
	},
});

const { actions, reducer } = productsSlice;
export const {
	productsFetched,
	productsFetching,
	productsFetchingError,
	setSortingStatus,
} = actions;
export default reducer;
