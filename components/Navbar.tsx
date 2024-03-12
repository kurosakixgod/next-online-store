import Link from "next/link";
import Logo from "./Logo";

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
				<li>
					<Link href="/shopping-cart">Shoping Cart</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
