import {TOGGLE_ITEM_IN_WISHLIST} from "../action-types";

const initialState = {
    wishlist: [],
    price: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_IN_WISHLIST: {
            const updatedWishlist = state.wishlist.filter(el => el.id !== action.payload.id);
            if (updatedWishlist.length === state.wishlist.length) {
                updatedWishlist.push(action.payload)
            }
            const price = updatedWishlist.reduce((previousValue, currentValue) => {
                return previousValue + currentValue.price
            }, 0)
            return {...state, wishlist: updatedWishlist, price: price}
        }
        default: {
            return state;
        }
    }
}

export default reducer;