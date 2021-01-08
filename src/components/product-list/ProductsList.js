import React from 'react';

import {ProductItem} from "../product-item";
import {useDispatch} from "react-redux";
import {toggleItemInCart, toggleItemInWishlist} from "../../redux/action-creators";


export const ProductsList = ({products}) => {
    const dispatch = useDispatch();
    const onAddToWishList = (product) => {
        dispatch(toggleItemInWishlist(product))
    }
    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))
    }
    return (
        <div>
            {products.map((product) => <ProductItem onAddToWishList={onAddToWishList} onAddToCart={onAddToCart}
                                                    product={product}
                                                    key={product.id}/>)}
        </div>
    );
}

