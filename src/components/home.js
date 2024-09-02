import React from "react";
import { Nav } from "./Nav/nav";
import { Banner } from "./Banner/banner";
import {Banner2nd} from './Banner/2ndBanner'
import { Footer } from "./Footer/footer";

function Home(){
    return(
        <>
        <Nav />
        <Banner />
        <Banner2nd />
        <Footer />
    </>
    )
}

export default Home;