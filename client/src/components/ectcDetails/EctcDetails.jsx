import React, {useEffect, useState} from 'react'
import classes from './ectcDetails.module.css'
import { useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'



const EctcDetails = () => {

  const [ectcDetails, setEctcsDetails] = useState('')

  const {id} = useParams();
  const {token} = useSelector((state) => state.auth)


  useEffect(() => {

      const fetchEctcDetails = async() => {
         const res = await fetch(`http://localhost:5000/lecturer/find/${id}`,{
             headers:{
               "Authorization" : `Bearer ${token}`
             }
         })

         const data = await res.json()
         console.log(data)
         setEctcsDetails(data)
      }
      fetchEctcDetails()

  }, )



  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        
         <div className={classes.right}>
           <h2 className={classes.title}>{ectcDetails?.title}</h2>
         
           
           <div className={classes.category}>
             <h3>Lecturer Name : </h3>
             <span className={classes.categoryName}>{ectcDetails?.category}</span>
           </div>
           <div className={classes.lecturerDesc}>
            <div>Batch Code : </div>
            <p>
              {ectcDetails?.desc?.length > 50 ? `${ectcDetails?.desc}`.slice(0, 50) : ectcDetails?.desc}
            </p>
          </div>
       
         </div>
      </div>
    </div>
  )
}

export default EctcDetails
