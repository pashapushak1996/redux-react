import React from 'react';

export const ProductItem = ({
                                onAddToCart,
                                onAddToWishList,
                                product,
                                product: {title, image, description, price}
                            }) => {

    return (
        <div>
            <h3>{title}</h3>
            <img src={`${image}`} width={`250px`} alt=""/>
            <h5>Price: {price}</h5>
            <h5>About product: {description}</h5>
            <button onClick={() => onAddToWishList(product)}>Add to wishlist</button>
            <button onClick={() => onAddToCart(product)}>Add to cart</button>
            <hr/>
        </div>
    );
}

