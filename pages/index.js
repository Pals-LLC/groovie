import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href='/signin'>
        <a>Sign in</a>
      </Link>
    </div>
  );
}
