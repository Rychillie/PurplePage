import React from "react"
import { Link } from "gatsby"

import Logo from "../../static/images/logo.png"
import PhoneHeader from "../../static/images/phone-header.png"

const Header = () => (
    <header>
        <div className={"top-menu"}>
            <div className={"container"}>
                <nav className={"row"}>
                    <div className={"col-5 col-5-lm"}>
                        <Link to="/" title={"Purpkle"} className={"logo"}>
                            <img src={Logo} alt={"logo"} />
                        </Link>
                    </div>

                    <div className={"col-7 col-7-lm menu-list"}>
                        <ul>
                            <li>
                                <Link to="/" title={"about"}>About Us</Link>
                            </li>
                            <li>
                                <Link to="/" title={"features"}>Features</Link>
                            </li>
                            <li>
                                <Link to="/" title={"blog"}>blog</Link>
                            </li>
                            <li>
                                <Link to="/" title={"contact"}>Contact</Link>
                            </li>
                            <li>
                                <Link to="/" className={"download"} title={"downloadapp"}>Download App</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <div className={"content"}>
            <div className={"container"}>
                <div className={"grid"}>
                    <div className={"item-left"}>
                        <h2>Introducing Abstract<br/> App landing page.</h2>
                        <p>A perfect landing page to showcase<br/> your new App.</p>
                    </div>
                    <div className={"item-right"}>
                        <img src={PhoneHeader} alt={"smartphone"} />
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default Header
