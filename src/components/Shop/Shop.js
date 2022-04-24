import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import {addToDb, getStoredCart} from '../../utilities/fakedb';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/product')
        .then(res=> res.json())
        .then(data => setProducts(data))

    }, []);     

    const handleAddToCart = (selectedProduct) =>{
            console.log(selectedProduct);
            // do not do this: cart.push(product);
            const newCart = [...cart, selectedProduct];
            setCart(newCart);
        }
 
    

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <Cart cartItem={cart}></Cart>
        </div>)
};

export default Shop;