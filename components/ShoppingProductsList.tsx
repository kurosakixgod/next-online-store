"use client";
import { useSelector } from "react-redux";
import { ShoppingProducts } from "@/types/Products";
import ShoppingProduct from "./ShoppingProduct";

const ShoppingProductsList = () => {
	const { shoppingProducts } = useSelector(
		(state: ShoppingProducts) => state.shoppingProducts
	);

	const elements = shoppingProducts.map((item, i) => {
		return (
			<>
				<ShoppingProduct key={item.id} i={i} {...item} />
				{i !== shoppingProducts.length - 1 ? (
					<div className="w-3/4 h-[1px] bg-black"></div>
				) : null}
			</>
		);
	});
	return <ul className="bg-white rounded-sm p-[30px]">{elements}</ul>;
};

export default ShoppingProductsList;
