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
                            <img src={Logo}/>
                        </Link>
                    </div>

                    <div className={"col-7 col-7-lm menu-list"}>
                        <ul>
                            <li>
                                <Link to="/about" title={"about"}>About Us</Link>
                            </li>
                            <li>
                                <Link to="/features" title={"features"}>Features</Link>
                            </li>
                            <li>
                                <Link to="/blog" title={"blog"}>blog</Link>
                            </li>
                            <li>
                                <Link to="/contact" title={"contact"}>Contact</Link>
                            </li>
                            <li>
                                <Link to="/download-app" className={"download"} title={"downloadapp"}>Download App</Link>
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
                        <img src={PhoneHeader}/>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default Header
