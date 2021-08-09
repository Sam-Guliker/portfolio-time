import Link from 'next/link';

export default function NavSectionTwo() {
    return (
        <nav className="navigation_two">
            <Link href='/about'>
                <a className="navigation_two__item">About us</a>
            </Link>

            <Link href='/store'>
                <a className="navigation_two__item">Store</a>
            </Link>

            <Link href='/contact'>
                <a className="navigation_two__item">Contact</a>
            </Link>
        </nav>
    )
}
