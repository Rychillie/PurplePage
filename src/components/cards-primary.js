import React from "react"
import { Link } from "gatsby"

import Pencil from "../../static/images/icon-pencil.svg"
import Clock from "../../static/images/icon-clock.svg"
import Coracao from "../../static/images/icon-s2.svg"

const Box = () => (
    <section className={"container"}>
        <div className={"cards-primary"}>
            <ul className={"card-list"}>
                <li className={"card-item"}>
                    <img src={Pencil} alt={"Icon Pencil"}/>
                    <h4>Modern & Trendy Design</h4>
                    <p>Dictas scaevola democritum cu his, magna abhorreant dissentias ut.</p>
                    <Link to={"/"}>Learn More ⟶</Link>
                </li>
                <li className={"card-item"}>
                    <img src={Clock} alt={"Icon Pencil"}/>
                    <h4>Save your Time</h4>
                    <p>oportere patrioque sit et, eum ne prima nemore perfecto. Eu cibo quidam eleifend per.</p>
                    <Link to={"/"}>Learn More ⟶</Link>
                </li>
                <li className={"card-item"}>
                    <img src={Coracao} alt={"Icon Pencil"}/>
                    <h4>Made with Love</h4>
                    <p>Inimicus hendrerit an duo, feugiat adipiscing everti nostrum id.</p>
                    <Link to={"/"}>Learn More ⟶</Link>
                </li>
            </ul>
        </div>
    </section>
)

export default Box
