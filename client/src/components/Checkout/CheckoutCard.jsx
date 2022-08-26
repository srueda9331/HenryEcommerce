import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_ONE } from "../../redux/actions/actionTypes";


function CheckoutCard({ id, name, image, price }) {

const dispatch = useDispatch();

  const deletePhone = () => {
    let e = dispatch({
      type: REMOVE_ONE,
      payload: id
    })
    console.log(e.payload);
  }

  return (
    <div key={id}>
      
        {/* <h2>{name.length > 8 ? name.slice(8) : name}</h2>
        <img
          style={{ height: "250px", width: "250px" }}
          src={image}
          alt="imagen-cel"
        />
        <h5>{brand}</h5>
        <p>{price}</p> */}

        <div className="page-wrapper">
          {/* <div className="page-inner"> */}
                   <div className="text-check">
                      <p className="text-checkout">
                        {name.length > 10
                          ? name[0].toUpperCase() + name.slice(1, 21)
                          : name}
                      </p>
                    </div>
              
                  <img className="img-card" src={image} alt="" style={{marginLeft: '15px'}}/>
                 
                  {/* {
                    Array(rating).fill().map((_, i) => {<p>&#11088;</p>})
                  } */}
                  <div className="text-checkout" style={{marginLeft: '20px', flexDirection:'row', justifyContent: 'space-between', display: 'flex', alignContent:'center'}} >
                    <div style={{marginTop: '18px', marginLeft: '20px'}}>
                      { '$ ' + price}
                      </div>
                      <div>
                    
                      <IconButton>
                        <DeleteIcon fontSize="large" onClick={deletePhone}/>
                      </IconButton>
                 
                    </div>
                  </div>
                </div>

               

                  {/* <p className="cart" href="#">
                    <span className="price">${price}</span>
                    <span className="add-to-cart">
                      <span className="txt">Add in cart:
                        <IconButton onClick={addToBasket}>
                          <AddShoppingCart style={{color: 'white'}}/>
                        </IconButton>
                      </span>
                    </span>
                  </p> */}
               
           
           
          
        
     
    </div>
  );
}

export default CheckoutCard;