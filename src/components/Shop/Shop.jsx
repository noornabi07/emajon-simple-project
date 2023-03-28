import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect( () =>{
        const storedCart = getShoppingCart();
        const saveCart = [];
        // step: 1 get id from product
        for(const id in storedCart){
            // step: 2 get product from products using by id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                // step: 3 added quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step: 4 added product of the save cart
                saveCart.push(addedProduct);
            }
            console.log('product added', addedProduct);
        }
        // set the cart
        setCart(saveCart);
    }, [products])

    const handleAddToCart = (product) =>{
        // let newCart = []
       const newCart = [...cart, product];
    //    if product doesn't exist in the cart, then set quantity = 1
    // if exist update quantity by 1
    // const exist = cart.find(pd => pd.id === product.id);
    // if(!exist){
    //     product.quantity = 1;
    //     newCart =[...Cart, product]
    // }else{
    //     exist.quantity = exist.quantity + 1;
    //     const remaining = cart.filter(pd => pd.id !== product.id);
    //     newCart =[...remaining, exist];
    // }
       setCart(newCart);

       addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='summary-part'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;