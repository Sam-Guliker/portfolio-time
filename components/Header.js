import { useContext } from 'react'
import {useRouter} from 'next/router'

import Link from 'next/link'

import Icon from "./Icon";
import Nav from "./Nav";
import NavSectionTwo from "./NavSectionTwo";
import NavSectionThree from "./NavSectionThree";

import LogoIcon from "./LogoIcon";

import AuthContext from '../context/AuthContext'

export default function Header() {

    const router = useRouter()
    const isHome = router.pathname === '/'

    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }

    const { user } = useContext(AuthContext)

    return (
        <header className="header">
            <div className="container container--header">
                <LogoIcon />
                <div className="navigation-group">
                    <Nav />
                    <NavSectionTwo />
                </div>
                <NavSectionThree />

                <div className="auth">
                    { user ? (
                        <Link href="/account">
                            <a>
                                {user.email}
                            </a>
                        </Link>
                    ):(
                        <Link href="/login">
                            <a>Log in</a>
                        </Link>
                    )}
                </div>
            </div>
            {!isHome && <a href="#" onClick={goBack}>{"<"} Back</a>}

        </header>
    )
}
