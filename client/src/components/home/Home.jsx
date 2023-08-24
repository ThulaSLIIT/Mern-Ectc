import React from "react";
import classes from './home.module.css'
import Hero from '../hero/Hero'
import Ectcs from '../ectcs/Ectcs'
import Newsletter from '../newsletter/Newsletter'


const Home = () => {
    return(
       <div className={classes.container}>
        <div className={classes.wrapper}>
           <Hero/>
         
           <Ectcs/>
           <Newsletter/>
        </div>
       </div>
    )
}

export default Home