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
    <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent:'center', marginTop:'200px'}}>
    {
      allPhones.map(p => {
        return (
          <div style={{margin: '20px'}}>
            {/* <Card name={p.name} image={p.image} /> */}
            <h2>{p.name.length > 8? p.name.slice(8) : p.name}</h2>
            <img style={{height:'250px', width:'250px' }} src={p.image} alt='imagen-cel' />
            <h5>{p.brand}</h5>
            <p>{p.price}</p>
         
          </div>)     
      })
    }
    </div>
  )

}