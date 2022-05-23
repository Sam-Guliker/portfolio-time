import {useRef} from 'react';

import Link from 'next/link';

export default function ExternalLink ({blok, hover, setHover, setHoverImage}) {
    const itemRef = useRef();

    const capitalizeWords = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    const setImageData = (boolean) => {
        setHover(boolean)
        // setHoverImage(itemRef.current.dataset.src)
        // console.log(itemRef.current.dataset.src)

        setHoverImage(blok?.image?.filename)

        // console.log(blok?.image?.filename)

    }
    
    return (
        <Link href={blok.external_link.url}>

            <a ref={itemRef} className="heading-01" key={blok._uid} data-src={blok?.image?.filename}>
                <p
                    onMouseEnter={() => {setImageData(true)}}
                    onMouseLeave={() => setHover(false)}
                    className="project-link">{capitalizeWords(blok.name)}
                </p>
                {/* <span>{capitalizeWords('view more')}</span> */}
            </a>
        </Link>
    )
  }