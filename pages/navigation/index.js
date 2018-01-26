import Link from 'next/link';

const Index = () => (
	<div>
		<Link href="/details">
			<a>Details</a>
		</Link>

		<br />

		<Link href="/">
			<button>Home</button>
		</Link>
	</div>
);

export default Index;