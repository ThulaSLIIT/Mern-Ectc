import React,{useEffect, useState} from 'react'
import classes from './ectcCatalog.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const EctcCatalog = () => {

  const [filteredEctcs, setFilteredEctcs] = useState([])
  const location = useLocation()
  const ectcEndpoint = location.pathname.split('/')[2]
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
     
      const fetchEctcType = async() => {
         const res = await fetch(`http://localhost:5000/lecturer?category=${ectcEndpoint}`,{
            headers:{
              "Authorization" : `Bearer ${token}`
            }
         })

         const data = await res.json()
         console.log(data)
         setFilteredEctcs(data)
      }

      fetchEctcType();

  },[ectcEndpoint])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {filteredEctcs?.length!= 0 && <h2 className={classes.title}>The best {ectcEndpoint} in the region</h2>}
        <div className={classes.ectcs}>
           {filteredEctcs.length !== 0 ? filteredEctcs.map((f) => (

              <Link to={`/ectc/${f._id}`} key={f._id} className={classes.ectc}>
                 <div className={classes.imgContainer}>
                   <img src={`http://localhost:5000/images/${f?.image}`} alt="" className={classes.ectcImg}/>
                 </div>
                 <div className={classes.ectcDetails}>
                  <h4 className={classes.ectcTitle}>{f?.title}</h4>
                  <span className={classes.price}><span>$</span> {f?.price}</span>
                 </div>
              </Link>

           )): <h1 className={classes.noQuantity}> {ectcEndpoint}    <tr>
           <th scope="col">Lecturer NIC</th>
           <th scope="col">Lecturer Name</th>
           <th scope="col">Course Name</th>
           <th scope="col">Batch Code</th>
           <th scope="col">Payment Rate</th>
           <th scope="col">	Total No of Hrs</th>
           <th scope="col">	Remaining Hrs</th>
           <th scope="col">	Action</th>
           
           <th scope="col" />
         </tr></h1>}
        </div>
      </div>
    </div>
  )
}

export default EctcCatalog
