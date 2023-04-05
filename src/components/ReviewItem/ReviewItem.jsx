import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, deleteHandle }) => {
    const { img, name, shipping, price, id } = product;
    return (
        <div className='review-item'>
            <div className='left-item'>
                <img style={{ width: '120px', borderRadius: '5px' }} src={img} alt="" />
                <div className='pd-info'>
                    <h3>{name}</h3>
                    <h6 style={{ fontSize: '18px' }}>Price: <span style={{ color: 'orange' }}>${price}</span></h6>
                    <h4 style={{ fontWeight: 'bold' }}>Shipping Charge: <span style={{ color: 'orange' }}>${shipping}</span></h4>
                </div>
            </div>
            <button onClick={() => deleteHandle(id)} className='dlt-btn'>
                <FontAwesomeIcon className='d-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;