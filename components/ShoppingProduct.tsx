"use client";
import Image from "next/image";
import Plus from "./icons/Plus";
import Minus from "./icons/Minus";
import { Product } from "@/types/Products";
import { useEffect, useState } from "react";
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
	const dispatch = useDispatch<any>();
	const localStorageData = localStorage.getItem(`counter-${id}`) as string;

	const [counter, setCounter] = useState(+localStorageData);
	const decCount = () => {
		if (counter) {
			setCounter((counter) => counter - 1);
			let curSum = 0;
			dispatch(changeTotalPrice(curSum - price));
		}
	};

	useEffect(() => {
		localStorage.setItem(`counter-${id}`, `${counter}`);
	}, [counter]);

	const incCount = () => {
		setCounter((counter) => counter + 1);
		let curSum = 0;
		dispatch(changeTotalPrice(curSum + price));
	};

	const deleteProduct = (id: number) => {
		dispatch(deleteShoppingProduct(id));
		localStorage.removeItem(`counter-${id}`);
	};

	const clearPrice = () => {
		dispatch(changeTotalPrice(-(counter * price)));
	};

	return (
		<li
			className="flex gap-[20px] h-[200px] items-center p-5 font-semibold relative"
			key={id}
		>
			{i + 1}
			<Image src={image} height={80} width={80} alt={title} />
			<div className="	max-w-[400px] text-xl">{title}</div>
			<div className="flex items-center gap-[20px] absolute right-0">
				<div className="flex items-center justify-center gap-[25px] ">
					<Minus decCount={decCount} />
					{counter}
					<Plus incCount={incCount} />
					{`${price}$`}
				</div>
				<Cross
					clearPrice={clearPrice}
					onDelete={deleteProduct}
					id={id}
				/>
			</div>
		</li>
	);
};

export default ShoppingProduct;
