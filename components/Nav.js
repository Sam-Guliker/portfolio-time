import Link from 'next/link';

export default function Nav() {
    return (
        <nav className="navigation">
            <Link href='/'>
                <a className="navigation__item"> Home </a>
            </Link>
            <Link href='/'>
                <a className="navigation__item"> About </a>
            </Link>
        </nav>
    )
}
