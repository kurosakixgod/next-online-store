import OrderSummary from "@/components/OrderSummary";
import ShoppingProductsList from "@/components/ShoppingProductsList";

const ShoppingCart = () => {
	return (
		<section className="mt-[50px] flex items-start justify-around">
			<ShoppingProductsList />
			<OrderSummary />
		</section>
	);
};

export default ShoppingCart;
