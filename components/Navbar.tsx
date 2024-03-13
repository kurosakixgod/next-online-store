import Link from "next/link";
import Logo from "./Logo";
import Counter from "./Counter";

const Navbar = () => {
	return (
		<nav className="flex justify-between">
			<Link href="/">
				<Logo />
			</Link>
			<ul className="flex justify-center gap-10 items-center text-black font-bold">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/products">Products</Link>
				</li>
				<li className="relative">
					<Counter className="absolute top-[-10px] right-[-18px]" />
					<Link href="/shopping-cart">Shoping Cart</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
