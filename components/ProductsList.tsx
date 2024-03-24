"use client";
import { getLimitTransformedProducts } from "@/service/request";
import { useEffect, useMemo } from "react";
import {
	productsFetched,
	productsFetching,
	productsFetchingError,
} from "@/slices/productsSlices";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { Products, Product, ShoppingProducts } from "@/types/Products";
import { createShoppingProduct } from "@/slices/shoppingProductsSlice";
import { motion } from "framer-motion";

const productsVariants = {
	hidden: {
		opacity: 0,
	},
	visible: (i: number) => ({
		opacity: 1,
		transition: {
			delay: (i % 6) * 0.1,
		},
	}),
};

const fetchLimitProducts = (dispatch: Dispatch, limit: number) => {
	productsFetching();
	getLimitTransformedProducts(limit)
		.then((data) => dispatch(productsFetched(data)))
		.catch(() => dispatch(productsFetchingError()));
};

const ProductsList = () => {
	console.log("render");

	const { products, loading, productsSortingStatus } = useSelector(
		(state: Products) => state.products,
	);
	const { shoppingProducts } = useSelector(
		(state: ShoppingProducts) => state.shoppingProducts,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		fetchLimitProducts(dispatch, 6);
	}, []);

	const addProduct = (product: Product) => {
		if (!shoppingProducts.some((item) => item.id === product.id)) {
			dispatch(createShoppingProduct(product));
		}
	};

	const sortedProducts = useMemo(() => {
		const productsCopied = products.slice();
		switch (productsSortingStatus) {
			case "alphabet":
				return productsCopied.toSorted((a, b) => {
					if (a.title < b.title) {
						return -1;
					}
					if (a.title > b.title) {
						return 1;
					}
					return 0;
				});
			case "price":
				return productsCopied.toSorted((a, b) => a.price - b.price);
			case "rate":
				return productsCopied.toSorted(
					(a, b) => a.rating.rate - b.rating.rate,
				);
			default:
				return productsCopied;
		}
	}, [products, productsSortingStatus]);

	if (loading === "loading") {
		return <h1>Loading...</h1>;
	} else if (loading === "error") return <h1>erorr...</h1>;

	const elements = sortedProducts.map((product, i) => {
		return (
			<motion.div
				variants={productsVariants}
				initial="hidden"
				animate="visible"
				custom={i}
				key={product.id}
			>
				<ProductCard
					addProduct={addProduct}
					{...product}
					shoppingProducts={shoppingProducts}
				/>
			</motion.div>
		);
	});
	return (
		<>
			<div className="grid grid-cols-3 place-content-center gap-[20px]">
				{elements}
			</div>
			<Button
				className="block mx-auto my-0 mt-[30px]"
				onClick={() =>
					fetchLimitProducts(dispatch, products.length + 6)
				}
				disabled={products.length >= 20}
			>
				Load more
			</Button>
		</>
	);
};

export default ProductsList;
