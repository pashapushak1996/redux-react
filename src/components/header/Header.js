import React from "react";
import {useSelector} from "react-redux";

export const Header = (props) => {
    const wishlist = useSelector(({wishlist: {wishlist}}) => wishlist);
    const wishlistPrice = useSelector(({wishlist: {price}}) => price);
    const cart = useSelector(({cart: {cart}}) => cart);
    const cartPrice = useSelector(({cart: {price}}) => price);

    return (
        <header className={'d-flex justify-between align-center'}>
            <h1>MyShop</h1>
            <div className={'d-flex'}>
                <div>
                    <h5 className={'mx-10'}>wishlist:{wishlist.length}</h5>
                    <h5 className={'mx-10'}>price:{wishlistPrice}</h5>
                </div>
                <div>
                    <h5 className={'mx-10'}>cart:{cart.length}</h5>
                    <h5 className={'mx-10'}>price:{cartPrice}</h5>
                </div>
            </div>
        </header>
    );
}

