import React from 'react';

import {ProductItem} from "../product-item";
import {useDispatch} from "react-redux";
import {toggleItemInWishlist} from "../../redux/action-creators";


export const ProductsList = ({products}) => {
    const dispatch = useDispatch();
    const onAddToWishList = (product) => {
        dispatch(toggleItemInWishlist(product))
    }
    return (
        <div>
            {products.map((product) => <ProductItem onAddToWishList={onAddToWishList} product={product}
                                                    key={product.id}/>)}
        </div>
    );
}

