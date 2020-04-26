import React from "react"

import Header from "../components/header"
import CardsPrimary from "../components/cards-primary"
import Design from "../components/design"
import Pricing from "../components/pricing"
import Box from "../components/box"
import Footer from "../components/footer"

const IndexPage = () => {
    return (
        <div>
            <Header/>
            <CardsPrimary/>
            <Design/>
            <Pricing/>
            <Box/>
            <Footer/>
        </div>
    )
}

export default IndexPage
