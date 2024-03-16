"use client";
import Image from "next/image";
import Plus from "./icons/Plus";
import Minus from "./icons/Minus";
import { Product } from "@/types/Products";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	changeTotalPrice,
	deleteShoppingProduct,
} from "@/slices/shoppingProductsSlice";
import Cross from "./icons/Cross";

interface Props extends Product {
	i: number;
}

const ShoppingProduct = ({ i, image, id, price, title }: Props) => {
	const [counter, setCounter] = useState(0);
	const [curSum, setCurSum] = useState(0);
	const dispatch = useDispatch<any>();

	const decCount = () => {
		if (counter) {
			setCounter((counter) => counter - 1);
			setCurSum(curSum - price);
			dispatch(changeTotalPrice(-price));
		}
	};

	const incCount = () => {
		setCounter((counter) => counter + 1);
		setCurSum(curSum + price);
		dispatch(changeTotalPrice(price));
	};

	const deleteProduct = (id: number) => {
		dispatch(deleteShoppingProduct(id));
	};

	const clearPrice = () => {
		dispatch(changeTotalPrice(-(counter * price)));
	};

	return (
		<li
			className="flex gap-3 h-[200px] items-center p-5 font-semibold"
			key={id}
		>
			{i + 1}
			<Image src={image} height={80} width={80} alt={title} />
			<div>{title}</div>
			<div className="flex items-center justify-center gap-6">
				<Minus decCount={decCount} />
				{counter}
				<Plus incCount={incCount} />
				{`${price}$`}
			</div>
			<Cross clearPrice={clearPrice} onDelete={deleteProduct} id={id} />
		</li>
	);
};

export default ShoppingProduct;
