import Image from 'next/image'

export default function LogoIcon() {
    return (
        <div className="logo">
            <a>
                <Image 
                    src='/icons/Logo.svg' 
                    alt="Picture of the author"
                    width={100}
                    height={50}
                />
            </a>
        </div>
    )
}
