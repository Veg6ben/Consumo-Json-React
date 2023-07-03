import React from 'react';
import '../src/App.css';
import { ProductContainer } from './components/ProductContainer';
import { Product } from './components/Product';
import data from './products.json';
 
const App = () => {
   return (
     <ProductContainer>
       {data.map((product) => (
         <Product
           key={product.name} 
           discount={product.discount}// Agrega una clave única para cada producto
           name={product.name}
           oldPrice={product.price}
           newPrice={product.price - (product.price * product.discount) / 100}
         />
       ))}
     </ProductContainer>
   );
 };
 
export default App;
