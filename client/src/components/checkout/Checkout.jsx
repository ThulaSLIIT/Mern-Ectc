import React from "react";
import classes from './checkout.module.css'
import {useSelector} from 'react-redux'

const Checkout = () => {

    const {lecturers} = useSelector((state) => state.cart)
    let totalPrice = 0
    lecturers.map((lecturer) => totalPrice += (lecturer.price * lecturer.quantity))

    return(
       <div className={classes.container}>
          <div className={classes.wrapper}>
             <h2>Your order is successfull !</h2>
             <p>Expect it in 1 hour</p>
             <span>Total Price: ${totalPrice}</span>
          </div>
       </div>
    )
}

export default Checkout