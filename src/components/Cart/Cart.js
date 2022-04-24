import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cartItem} = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cartItem){
        quantity += product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = parseFloat(total) + parseFloat(shipping) + parseFloat(tax);


    return (
        <div className="cart-container">
            <div className='cart'>
                <h4>Order Summary</h4>
                <p>Selected Items: {quantity}</p>    
                <p>Total Price: ${total}</p>
                <p>Total Shopping Charge: ${shipping}</p>
                <p>Tax: {tax}</p>
                <p><b>Grand Total: ${grandTotal}</b></p>
                <div>
                    <button className="check-cart">
                        Check Cart
                    </button>
                    <button className="review-order">
                        Review Order
                    </button>
                </div>
            </div>            
        </div> 
    );
};

export default Cart;