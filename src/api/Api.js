export const getProducts=()=>{
    
    return fetch('https://fakestoreapi.com/products', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        
        
      }
    })
    .then(resp => resp.json())
    .catch(error=>console.log('error',error));
    
}