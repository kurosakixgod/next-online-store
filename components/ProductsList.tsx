"use client";
import { getLimitProducts } from "@/service/request";
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
import { Products } from "@/types/Products";

const fetchLimitProducts = (dispatch: Dispatch, limit: number) => {
	productsFetching();
	getLimitProducts(limit)
		.then((data) => dispatch(productsFetched(data)))
		.catch(() => dispatch(productsFetchingError()));
};

const ProductsList = () => {
	const { products, loading, productsSortingStatus } = useSelector(
		(state: Products) => state.products
	);

	const dispatch = useDispatch();

	useEffect(() => {
		fetchLimitProducts(dispatch, 6);
	}, []);

	const sortedProducts = useMemo(() => {
		const productsCopied = products.slice();
		switch (productsSortingStatus) {
			case "price":
				return productsCopied.toSorted((a, b) => a.price - b.price);
			default:
				return productsCopied.toSorted((a, b) => {
					if (a.title < b.title) {
						return -1;
					}
					if (a.title > b.title) {
						return 1;
					}
					return 0;
				});
		}
	}, [products, productsSortingStatus]);

	if (loading === "loading") {
		return <h1>Loading...</h1>;
	} else if (loading === "error") return <h1>erorr...</h1>;

	const elements = sortedProducts.map((product) => {
		return <ProductCard key={product.id} {...product} />;
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
