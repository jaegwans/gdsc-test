import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Link href="/booking">예약하기</Link>
        </div>
    );
}
