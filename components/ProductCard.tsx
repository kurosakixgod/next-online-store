"use client";
import Image from "next/image";
import Star from "./icons/Star";
import { Button } from "./ui/button";
import { Product, ShoppingProduct } from "@/types/Products";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

interface CardProps extends Product {
	addProduct: (product: Product) => void;
	shoppingProducts: ShoppingProduct[];
}

const ProductCard = (product: CardProps) => {
	const { title, addProduct, rating, image, price, shoppingProducts, id } =
		product;
	return (
		<Card className="mx-auto my-0 w-[300px] h-[450px] relative p-5 rounded-3xl shadow-[10px_40px_50px_0_rgba(229,233,246,0)]">
			<div className="flex items-center">
				<p className="font-bold">{rating.rate}</p>
				<Star />
				<Link className="ml-auto" href={`/products/${id}`}>
					<Button variant="ghost">More</Button>
				</Link>
			</div>
			<CardHeader>
				<Image
					className="mx-auto my-0  h-[200px]"
					height={200}
					width={200}
					src={image}
					alt={title}
				/>
			</CardHeader>
			<CardContent className="max-h-[70px]">
				<p className="text-xs font-semibold ">{title}</p>
			</CardContent>
			<CardFooter className="flex items-center justify-between absolute w-5/6 bottom-2">
				{!shoppingProducts.some((item) => item.id === product.id) ? (
					<Button onClick={() => addProduct(product)}>To cart</Button>
				) : (
					<Button disabled>Now in cart</Button>
				)}
				<h3 className="font-bold text-base">{`${price}$`}</h3>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
