import Link from "next/link";

export default function Home() {
	return (
		<main className="p-8 flex gap-4 flex-col">
			<Link href={"/api"} className="cursor-pointer hover:text-green-300">
				/api
			</Link>
			<Link href={"/api/test"} className="cursor-pointer hover:text-green-300">
				/api/test
			</Link>
		</main>
	);
}
