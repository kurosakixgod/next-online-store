import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/Products";

interface ShoppingCartState {
	shoppingProducts: Product[];
	totalPrice: number;
}

const initialState: ShoppingCartState = {
	shoppingProducts: [],
	totalPrice: 0,
};

const shoppingProductsSlice = createSlice({
	name: "shoppingProducts",
	initialState,
	reducers: {
		createShoppingProduct: (state, action) => {
			state.shoppingProducts.push(action.payload);
		},
		deleteShoppingProduct: (state, action) => {
			state.shoppingProducts = state.shoppingProducts.filter(
				(item) => item.id !== action.payload
			);
		},
		changeTotalPrice: (state, action) => {
			state.totalPrice += action.payload;
		},
	},
});

const { reducer, actions } = shoppingProductsSlice;
export const {
	createShoppingProduct,
	deleteShoppingProduct,
	changeTotalPrice,
} = actions;

export default reducer;
