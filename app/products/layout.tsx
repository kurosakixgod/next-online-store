import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Products",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="bg-slate-50">{children}</div>;
}
