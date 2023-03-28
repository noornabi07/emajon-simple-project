import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
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
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;