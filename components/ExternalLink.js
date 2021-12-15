import { useEffect, useRef} from 'react';

import Link from 'next/link';

export default function ExternalLink ({blok, currentKey, setCurrentKey}) {
    const itemRef = useRef();

    const capitalizeWords = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return (
        <Link href={blok.external_link.url}>
            <a ref={itemRef} className="heading-01" key={blok._uid}>
                <p>{capitalizeWords(blok.name)}</p>
                {/* <span>{capitalizeWords('view more')}</span> */}
            </a>
        </Link>
    )
  }