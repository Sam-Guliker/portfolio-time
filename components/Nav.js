import Link from 'next/link';

export default function Nav() {
    return (
        <nav className="navigation">
            <Link href='/'>
                <a className="navigation__item"> Home </a>
            </Link>

            <Link href='/men'>
                <a className="navigation__item"> Men </a>
            </Link>

            <Link href='/woman'>
                <a className="navigation__item"> Woman </a>
            </Link>

            <Link href='/children'>
                <a className="navigation__item"> Children </a>
            </Link>
        </nav>
    )
}
