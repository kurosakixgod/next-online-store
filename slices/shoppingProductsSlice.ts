import { createSlice } from "@reduxjs/toolkit";
import { ShoppingProduct } from "@/types/Products";

interface ShoppingCartState {
	shoppingProducts: ShoppingProduct[];
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
				(item) => item.id !== action.payload,
			);
		},
		changeTotalPrice: (state, action) => {
			state.totalPrice += action.payload;
		},
		setTotalPrice: (state, action) => {
			state.totalPrice = action.payload;
		},
		setShoppingProducts: (state, action) => {
			state.shoppingProducts = action.payload;
		},
	},
});

const { reducer, actions } = shoppingProductsSlice;
export const {
	createShoppingProduct,
	deleteShoppingProduct,
	changeTotalPrice,
	setTotalPrice,
} = actions;

export default reducer;
