import { useEffect, useRef} from 'react';

import Link from 'next/link';

export default function ExternalLink ({blok, currentKey, setCurrentKey}) {

    const itemRef = useRef();

    console.log(currentKey)

    const capitalizeWords = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return (
        <Link href={blok.external_link.url}>
            <a ref={itemRef} className="github-items-navigation__item" key={blok._uid}>
                {console.log(blok)}
                <p>{capitalizeWords(blok.name)}</p>
                <span>{capitalizeWords('view more')}</span>
            </a>
        </Link>
    )
  }