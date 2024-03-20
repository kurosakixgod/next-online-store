export type Statuses = "alphabet" | "price" | "rate";

export interface Products {
	products: {
		products: Product[];
		loading: string;
		productsSortingStatus: Statuses;
	};
}

export interface Product {
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

export interface ShoppingProduct extends Product {
	counter: number;
}

export interface ShoppingProducts {
	shoppingProducts: {
		shoppingProducts: ShoppingProduct[];
		totalPrice: number;
	};
}
