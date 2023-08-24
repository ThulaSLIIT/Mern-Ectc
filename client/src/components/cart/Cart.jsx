import React from "react";
import classes from './cart.module.css'
import {useSelector,useDispatch} from 'react-redux'
import {AiOutlineClose} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import {removeLecturer} from '../../redux/cartSlice'

const Cart = () => {

    const {lecturers} = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let totalPrice = 0
    lecturers.map((lecturer) => totalPrice += (lecturer.price * lecturer.quantity))

    const handleRemoveLecturer = (id) => {
       dispatch(removeLecturer({_id:id}))
    }

    const handleOrder = () => {
       if(lecturers.length > 0){
          navigate('/checkout')
       }
    }

    return(
       <div className={classes.container}>
          <div className={classes.wrapper}>
            <div className={classes.left}>
                {lecturers.length > 0 ? lecturers.map((lecturer) => (
                     <div key={lecturer._id} className={classes.lecturer}>
                       <div onClick={() => handleRemoveLecturer(lecturer._id)} className={classes.closeBtn}><AiOutlineClose/></div>
                      <img src={`http://localhost:5000/images/${lecturer.image}`} className={classes.img} alt="" />
                      <div className={classes.lecturerData}>
                        <h3 className={classes.title}>{lecturer.title}</h3>
                        <div className={classes.lecturerAndQuantity}>
                          <span className={classes.quantity}>{lecturer.quantity} x </span>
                          <span className={classes.price}><span>$</span> {lecturer.price}</span>
                        </div>
                      </div>
                     </div>
                )): <h1 className={classes.noLecturers}>No lecturers in the cart. Go shopping!</h1>}
            </div>
            <div className={classes.right}>
               <div className={classes.totalLecturerMsg}>Total Lecturers: {lecturers.length}</div>
                 <div className={classes.subtotalCheckoutBtns}>
                   <span className={classes.subtotal}>Subtotal: ${totalPrice}</span>
                   <span onClick={handleOrder} disabled={lecturers.length === 0} className={classes.orderNowBtn}>Order Now</span>
                 </div>
            </div>
          </div>
       </div>
    )
}

export default Cart