import { Product } from "@/types/Products";
export const getAllProducts = async () => {
	const response = await fetch("https://fakestoreapi.com/products");
	return response.json();
};

export const getSingleProduct = async (id: number) => {
	const response = await fetch(`https://fakestoreapi.com/products/${id}`);
	return response.json();
};

export const getLimitProducts = async (limit: number) => {
	const response = await fetch(
		`https://fakestoreapi.com/products?page=3&limit=${limit}`,
		{
			next: {
				revalidate: 120,
			},
		},
	);
	return response.json();
};

export const getLimitTransformedProducts = async (limit: number) => {
	const response = await getLimitProducts(limit);
	return response.map(_transformProduct);
};

const _transformProduct = ({
	id,
	image,
	title,
	price,
	rating,
	description,
	category,
}: Product) => {
	return {
		id,
		image,
		title,
		price: Math.floor(price),
		rating,
		description,
		category,
	};
};
