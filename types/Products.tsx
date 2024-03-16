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

export interface ShoppingProducts {
	shoppingProducts: {
		shoppingProducts: Product[];
		totalPrice: number;
	};
}
