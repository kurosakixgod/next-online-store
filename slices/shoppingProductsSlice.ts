import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/Products";

interface ShoppingCartState {
	shoppingProducts: Product[];
}

const initialState: ShoppingCartState = {
	shoppingProducts: [],
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
	},
});

const { reducer, actions } = shoppingProductsSlice;
export const { createShoppingProduct, deleteShoppingProduct } = actions;

export default reducer;
