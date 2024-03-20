"use client";
import { useSelector } from "react-redux";
import { ShoppingProducts } from "@/types/Products";

interface CounterProps {
	className: string;
}

const Counter = (props: CounterProps) => {
	const { shoppingProducts } = useSelector(
		(state: ShoppingProducts) => state.shoppingProducts,
	);

	if (shoppingProducts.length) {
		return (
			<div
				className={`flex justify-center items-center w-[20px] h-[20px] rounded-full bg-black ${props.className} text-white`}
			>
				{shoppingProducts.length}
			</div>
		);
	} else return null;
};

export default Counter;
