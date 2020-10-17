import React from "react"
import { Link } from "gatsby"

import Logo from "../../static/images/logo-footer.png"
import GooglePlay from "../../static/images/GooglePlay.png"
import AppStore from "../../static/images/APPStore.png"

const Footer = () => (
    <footer className={"container"}>
        <div className={"row"}>
            <div className={"col-5"}>
                <Link to="/" title={"Purple"} className={"logo"}>
                    <img src={Logo} alt={"logo"} />
                </Link>
                <Link to="/" title={"Purple"} className={"googleplay"}>
                    <img src={GooglePlay} alt={"GooglePlay"} />
                </Link>
                <Link to="/" title={"Purple"} className={"appstore"}>
                    <img src={AppStore} alt={"AppStore"} />
                </Link>
                <p className={"copy"}>2018 © Copyrights, All rights reserved.</p>
            </div>
            <div className={"col-7"}>
                <ul className={"menu-footer"}>
                    <li className={"lista"}>
                        <ul className={"lista-footer"}>
                            <li className={"item-lista"}>About us</li>
                            <li className={"item-lista"}>Home</li>
                            <li className={"item-lista"}>Features</li>
                            <li className={"item-lista"}>Docs</li>
                            <li className={"item-lista"}>Pricing</li>
                        </ul>
                    </li>
                    <li className={"lista"}>
                        <ul className={"lista-footer"}>
                            <li className={"item-lista"}>Features</li>
                            <li className={"item-lista"}>Services</li>
                            <li className={"item-lista"}>Online Shop</li>
                            <li className={"item-lista"}>Influences</li>
                            <li className={"item-lista"}>Media</li>
                            <li className={"item-lista"}>Brands</li>
                        </ul>
                    </li>
                    <li className={"lista"}>
                        <ul className={"lista-footer"}>
                            <li className={"item-lista"}>Blog</li>
                            <li className={"item-lista"}>Terms & conditions</li>
                            <li className={"item-lista"}>Support</li>
                            <li className={"item-lista"}>Privacy</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer
