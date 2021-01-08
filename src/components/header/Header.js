import React from "react";
import {useSelector} from "react-redux";

export const Header = (props) => {
    const wishlist = useSelector(({wishlist: {wishlist}}) => wishlist);
    const price = useSelector(({wishlist:{price}})=>price);
    console.log(price);
    return (
        <header className={'d-flex justify-between align-center'}>
            <h1>MyShop</h1>
            <div className={'d-flex'}>
                <h5 className={'mx-10'}>wishlist:{wishlist.length}</h5>
                <h5 className={'mx-10'}>price:{price}</h5>
                <h5 className={'mx-10'}>cart:</h5>
            </div>

        </header>
    );
}

