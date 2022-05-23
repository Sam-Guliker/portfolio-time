import Link from 'next/link'

import { getImage } from '../utils/urls'
import { twoDecimals } from '../utils/format'

export default function ProductList({products}) {

    return (
        <ul className="product-list">
            {products.map((product, key) => {
            return (
                <Link 
                    product={product} 
                    key={key} 
                    href={`/products/${product.slug}`}
                    >
                    
                    <a>
                        <li key={key} className="product-container">
                            <img src={getImage(product.image)} />
                            <h2 className="heading-02">{product.name}</h2>
                            <p>€{twoDecimals(product.price)}</p>
                            <p>{product.meta_description}</p>
                        </li>
                    </a>
                </Link>
            )
          })}
        </ul>
    )
}
