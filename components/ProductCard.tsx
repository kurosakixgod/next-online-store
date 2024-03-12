import Image from "next/image";
import { Button } from "./ui/button";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface Product {
	category: string;
	description: string;
	id: number;
	rating: {
		count: number;
		rate: number;
	};
	image: string;
	title: string;
	price: number;
}

const ProductCard = (product: Product) => {
	return (
		<Card className="mx-auto my-0 w-[300px] h-[400px] relative p-5 rounded-3xl border-2 border-solid">
			<CardHeader>
				<Image
					className="mx-auto my-0  h-[200px]"
					height={200}
					width={200}
					src={product.image}
					alt={product.title}
				/>
			</CardHeader>
			<CardContent>
				<CardTitle className="text-xs">{product.title}</CardTitle>
			</CardContent>
			<CardFooter className="flex items-center justify-between">
				<Button>To cart</Button>
				<h3 className="font-bold text-base">{`${product.price}$`}</h3>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
