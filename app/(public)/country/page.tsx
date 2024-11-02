import Link from 'next/link';

function Country() {
    return (
        <>
            <ul>
                <li><Link href="/country/pakistan">Pakistan</Link></li>
                <li><Link href="/country/turkiye">Turkiye</Link></li>
                <li><Link href="/country/qatar">Qatar</Link></li>
                <li><Link href="/country/iraq">Iraq</Link></li>
                <li><Link href="/country/yemen">Yemen</Link></li>
                <li><Link href="/country/oman">Oman</Link></li>
            </ul>
        </>
    );
}

export default Country;