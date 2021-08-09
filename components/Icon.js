import Image from 'next/image'
import Link from 'next/link';

export default function Icon({ name }) {
    const imagePath = `/icons/${name}.svg`
    const linkPath = `/${name}`

    return (
        <div className="container-icons__icon">
            <Link href={linkPath}>
                <a>
                    <Image 
                        src={imagePath} 
                        width={24} 
                        height={24}
                        alt={name}
                    />
                </a>
            </Link>
        </div>
    )
}
