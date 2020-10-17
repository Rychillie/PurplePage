import React from "react"
import { Link } from "gatsby"

const Box = () => (
    <section className={"container"}>
        <div className={"box"}>
            <h3>Start using Abstract app now!</h3>
            <p>Dictas scaevola democritum cu his, magna abhorreant dissentias.</p>
            <Link to="/" className={"download"} title={"downloadapp"}>Download App ⟶</Link>
        </div>
    </section>
)

export default Box
