import { getSingleProduct } from "@/service/request";
import Image from "next/image";
import { Product } from "@/types/Products";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface Props {
	params: {
		id: string;
	};
}

const Product = async ({ params: { id } }: Props) => {
	const {
		image,
		title,
		category,
		description,
		rating: { rate },
		price,
	}: Product = await getSingleProduct(id);
	return (
		<div className="p-[20px] w-2/5 h-[500px] bg-white mx-auto rounded-[32px] mt-[30px]">
			<div className="flex items-start gap-[30px]">
				<Image
					className="w-[200px] h-[200px] border-2 border-black"
					height={100}
					width={100}
					src={image}
					alt={title}
				></Image>
				<div className="flex flex-col">
					<div className="font-bold mt-[10px]">{title}</div>
					<div>Rating: {rate}</div>
					<div>Price: {price}$</div>
				</div>
			</div>
			<div className="mt-[30px]">
				<div className="font-bold">Category: {category}</div>
				<div>{description}</div>
			</div>
			<Link
				className="text-center block mx-auto mt-[30px]"
				href="/products"
			>
				<Button>Go back</Button>
			</Link>
		</div>
	);
};

export default Product;
