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
		`https://fakestoreapi.com/products?page=3&limit=${limit}`
	);
	return response.json();
};
