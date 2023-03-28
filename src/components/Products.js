import React, { useState, useEffect ,Fragment} from 'react';
import { useStateValue } from ".././stateprovider/StateProvider";
import {getProducts} from "../api/Api.js";
import Product from "./Product"


const Products = () => {
    
    
    const [products, setProducts] = useState([]);
    const [{basket}, dispatch] = useStateValue();
    console.log("this is a basket >>>",basket);

    const [news, setNews] = useState([]);
  
    
    useEffect(() => {
    
       getProducts().then((data)=> 
       {  
         setProducts(data);
         console.log("products",data);
       })
       .catch((error)=> alert(error));

    }, []);

    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <Fragment >
                {<Product n={product} />}
                </Fragment>
            ))}
        </div>
    );
};

export default Products;
