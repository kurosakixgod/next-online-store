"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import products from "../slices/productsSlices";
import shoppingProducts from "../slices/shoppingProductsSlice";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["shoppingProducts"],
};

const rootReducer = combineReducers({
	products,
	shoppingProducts,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
	devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;
