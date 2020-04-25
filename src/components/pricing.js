import React from "react"
import { Link } from "gatsby"


const Box = () => (
    <section className={"container"}>
        <div className={"pricing"}>
            <h3>Pricing</h3>
            <p>Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.</p>
            <ul className={"card-list"}>
                <li className={"card-item"}>
                    <span>Starter Plan</span>
                    <h4>Free</h4>
                    <p className={"small"}>Forever</p>
                    <p>Dictas scaevola democritum cu his magna abhorreant.</p>
                    <Link to={"/"}>Start Now</Link>
                </li>
                <li className={"card-item"}>
                    <span>Enterprise Plan</span>
                    <h4>$18.00</h4>
                    <p className={"small"}>Month</p>
                    <p>Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.</p>
                    <Link to={"/"}>Start Now</Link>
                </li>
                <li className={"card-item"}>
                    <span>Unlimeted Plan</span>
                    <h4>$18.00</h4>
                    <p className={"small"}>Month</p>
                    <p>Dictas scaevola democritum cu his magna abhorreant.</p>
                    <Link to={"/"}>Start Now</Link>
                </li>
            </ul>
        </div>
    </section>
)

export default Box
