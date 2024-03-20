"use client";
import { useSelector } from "react-redux";
import { ShoppingProducts } from "@/types/Products";
import ShoppingProduct from "./ShoppingProduct";

const ShoppingProductsList = () => {
	const { shoppingProducts } = useSelector(
		(state: ShoppingProducts) => state.shoppingProducts,
	);

	const a = shoppingProducts.find((item) => item.id === 5);
	console.log(a);

	const elements = shoppingProducts.map((item, i) => {
		return (
			<>
				<ShoppingProduct key={item.id} i={i} {...item} />
				{i !== shoppingProducts.length - 1 ? (
					<div className="mx-auto h-[1px] bg-black"></div>
				) : null}
			</>
		);
	});
	return (
		<ul
			className={`min-w-[1000px] relative bg-white rounded-sm ${
				elements.length ? "p-[30px]" : ""
			}`}
		>
			{elements}
		</ul>
	);
};

export default ShoppingProductsList;
