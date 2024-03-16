"use client";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { ShoppingProducts } from "@/types/Products";
import Link from "next/link";
const OrderSummary = () => {
	const { totalPrice } = useSelector(
		(state: ShoppingProducts) => state.shoppingProducts
	);

	return (
		<div className="flex flex-col bg-white mni-w-[300px] p-[30px] justify-start items-start gap-[10px]">
			<h2 className="text-center font-bold">Order Summary</h2>
			<div className="w-3/4 h-[1px] bg-black"></div>
			<div className="font-bold">Total: {`${totalPrice}$`}</div>
			<div className="flex items-center gap-[10px]">
				<Button>Proccess Odrder</Button>
				<Button variant="ghost">
					<Link href="/products">Continue Shooping</Link>
				</Button>
			</div>
		</div>
	);
};

export default OrderSummary;
