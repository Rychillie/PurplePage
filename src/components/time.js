import React from "react"
import { Link } from "gatsby"

import TimePhone from "../../static/images/phone-time.svg"

const Time = () => (
    <section className={"container"}>
        <div className={"time"}>
            <div className={"left"}>
                <img src={TimePhone} alt="Icone"/>
            </div>
            <div className={"right"}>
                <h3>Save your time</h3>
                <p>Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.</p>
                <Link to="/" className={"download"} title={"downloadapp"}>Download App ⟶</Link>
            </div>
        </div>
    </section>
)

export default Time
