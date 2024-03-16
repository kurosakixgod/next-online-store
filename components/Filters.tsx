"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useDispatch } from "react-redux";
import { setSortingStatus } from "@/slices/productsSlices";
const Filters = () => {
	const dispatch = useDispatch();

	return (
		<aside className="absolute top-0 left-[-120px] flex items-center gap-3">
			<h2 className="font-bold">Sort:</h2>
			<Select
				defaultValue="alphabet"
				onValueChange={(value) => dispatch(setSortingStatus(value))}
			>
				<SelectTrigger className="bg-white">
					<SelectValue placeholder="By alphabet" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="alphabet">By alphabet</SelectItem>
					<SelectItem value="price">By price</SelectItem>
					<SelectItem value="rate">By rate</SelectItem>
				</SelectContent>
			</Select>
		</aside>
	);
};

export default Filters;
