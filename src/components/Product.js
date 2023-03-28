import React, { useState, useEffect } from 'react';
import { useStateValue } from ".././stateprovider/StateProvider";
import {getProducts} from "../api/Api.js";


const Product = ({n}) => {
    
    const [{basket}, dispatch] = useStateValue();
    console.log("this is a basket >>>",basket);   
    const addToBasket = () =>
    {
     
        // dispatch the item into the data layer

        dispatch
        (
          {

             type: "ADD_TO_BASKET",
             item: {

                id: n.id,
                title: n.title,
                image: n.image,
                price: n.price,
                rating: n.rating,},
      
         }
        );
    }

    return (
        <div >
            
                <div className="card" key={ n.id}>
                    <img src={n.image} alt="" />
                    <h4>{n.title}</h4>
                    <h5>{n.price}</h5>
                    <button onClick={() => addToBasket()} className="btn">
                        Add to cart
                    </button>
                </div>
            
        </div>
    );
};

export default Product;
