import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const handleAddToCart = props.handleAddToCart;
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='p-name'>{name}</h4>
                <h4>Price: {price}</h4>
                <p>Manufacturing: {seller}</p>
                <p className='p-price'>Rating: {ratings}</p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)}  className='btn-cart'>
                Add To Cart
                <FontAwesomeIcon className='p-icon' icon={faShoppingCart} />
                
             </button>
        </div>
    );
};

export default Product;