import React, {useState} from 'react';
import { useStateValue } from '../stateprovider/StateProvider';


const Cart = () => {
    
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = (id) => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {basket.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => removeFromBasket(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
