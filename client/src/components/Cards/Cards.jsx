import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhones } from "../../redux/actions/actionCreators";


export default function Cards(){
  const dispatch = useDispatch();
  const allPhones = useSelector(state => state.phones)
  
  useEffect(() => {
    dispatch(getPhones())
  }, [dispatch])

  return (
    
      allPhones.map(p => {
        return (
          <div style={{marginTop: '20px'}}>
            {/* <Card name={p.name} image={p.image} /> */}
            <h2>{p.name}</h2>
            <img style={{height:'250px', width:'250px' }} src={p.image} alt='imagen-cel' />
            <h5>{p.brand}</h5>
            <p>{p.price}</p>
         
          </div>)     
      })
    
  )

}