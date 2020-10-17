import React from "react"
import { Link } from "gatsby"

import DesignBG from "../../static/images/design-bg.svg"

const Design = () => (
    <section className={"container"}>
        <div className={"design"}>
            <div className={"left"}>
                <h3>Modern & Trendy Design</h3>
                <p>Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.</p>
                <Link to="/" className={"download"} title={"downloadapp"}>Learn More ⟶</Link>
            </div>
            <div className={"right"}>
                <img src={DesignBG} alt="Icone"/>
            </div>
        </div>
    </section>
)

export default Design
