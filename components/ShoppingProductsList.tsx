"use client";
import { useSelector } from "react-redux";
import { Product } from "@/types/Products";
import Image from "next/image";
import { ShoppingProducts } from "@/types/Products";

const ShoppingProductsList = () => {
	const { shoppingProducts } = useSelector(
		(state: ShoppingProducts) => state.shoppingProducts
	);

	const elements = shoppingProducts.map((item) => {
		return (
			<li
				className="flex gap-3 border-2 border-black h-[200px] items-center p-5"
				key={item.id}
			>
				<Image
					src={item.image}
					height={80}
					width={80}
					alt={item.title}
				/>
				<div>{item.title}</div>
			</li>
		);
	});
	return <ul>{elements}</ul>;
};

export default ShoppingProductsList;
