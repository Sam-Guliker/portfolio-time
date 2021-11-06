/*

    1. Maak een parrent component zoals grid.
    2. Kijk goed naar welke propperties van het blok wilt renderen. (Links werken)

        
    <nav className="github-items-navigation"> (External link component)</nav>


*/

import Link from 'next/link';

export default function ExternalLink ({blok}) {
    return (
        <Link href={blok.external_link.url}>
            <a className="github-items-navigation__item"> Google </a>
        </Link>
    )
  }