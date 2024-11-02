import Link from 'next/link';
import styles from "@/app/(public)/country/page.css"

function Country() {
    return (
        <>
            <ul className={styles.ul}>
                <li className={styles.li}><Link href="/country/pakistan">Pakistan</Link></li>
                <li className={styles.li}><Link href="/country/turkiye">Turkiye</Link></li>
                <li className={styles.li}><Link href="/country/qatar">Qatar</Link></li>
                <li className={styles.li}><Link href="/country/iraq">Iraq</Link></li>
                <li className={styles.li}><Link href="/country/yemen">Yemen</Link></li>
                <li className={styles.li}><Link href="/country/oman">Oman</Link></li>
            </ul>
        </>
    );
}

export default Country;