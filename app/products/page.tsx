import ProductsList from "@/components/ProductsList";
import Filters from "@/components/Filters";

export default function Products() {
	return (
		<section className="relative w-[80%] mx-auto my-0 mt-[30px] ">
			<Filters />
			<ProductsList />
		</section>
	);
}
