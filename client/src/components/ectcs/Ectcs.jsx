import React from "react";
import classes from './ectcs.module.css'
import {Link} from 'react-router-dom'
import { ectcTypes } from "../../data/data";

const Ectc = () => {
    return(
       <section id="ectcs" className={classes.container}>
         <div className={classes.wrapper}>
        
            <div className={classes.ectcs}>
                {ectcTypes.map((ectcType) => (
                    <Link to={`/ectcs/${ectcType.name}`} key={ectcType.id} className={classes.ectc}>
                        <h4>{ectcType.name}</h4>
                        <div className={classes.imgContainer}>
                            
                        </div>
                    </Link>
                ))}
            </div>
         </div>
       </section>
    )
}

export default Ectc