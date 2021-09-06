import Link from 'next/link';

export default function GithubItems() {
    return (
        <nav class="github-items-navigation">
            <Link href='/'><a className="github-items-navigation__item"> Home </a></Link>
            <Link href='/'><a className="github-items-navigation__item"> Oba </a></Link>
            <Link href='/'><a className="github-items-navigation__item"> Home </a></Link>
            <Link href='/'><a className="github-items-navigation__item"> Home </a></Link>
        </nav>
    )
}
