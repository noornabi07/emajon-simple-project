import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const saveCart = useLoaderData();
    
    const [cart, setCart] = useState(saveCart);

    const deleteHandle = (id) =>{
        const remaning = cart.filter(product => product.id !== id);
        setCart(remaning);
        removeFromDb(id)
    }

    const clearCartHandle = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='orders'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        deleteHandle={deleteHandle}
                    ></ReviewItem>)
                }
            </div>

            <div className='summary-part'>
                <Cart 
                cart={cart}
                clearCartHandle={clearCartHandle}
                >
                    <Link className='proceed-link' to="/checkout" >
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;