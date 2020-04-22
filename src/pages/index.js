import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
    return (
        <div>
            <Header/>
            <section className={"container"}>
                <div className={"box"}>
                    <h3>Start using Abstract app now!</h3>
                    <p>Dictas scaevola democritum cu his, magna  abhorreant dissentias.</p>
                    <Link to="/" className={"download"} title={"downloadapp"}>Download App ⟶</Link>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default IndexPage
