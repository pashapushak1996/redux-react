export const TOGGLE_ITEM_IN_CART = "TOGGLE_ITEM_IN_CART";

const initialState = {
    cart: [],
    price: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_IN_CART: {
            const updatedCart = state.cart.filter(el => el.id !== action.payload.id);
            if (updatedCart.length === state.cart.length) {
                updatedCart.push(action.payload);
            }

            const price = updatedCart.reduce((acc, value) => {
                return acc + value.price
            }, 0)
            return {...state, cart: updatedCart, price: price}
        }
        default: {
            return state;
        }
    }
}

export default reducer;