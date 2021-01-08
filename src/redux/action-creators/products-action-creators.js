import {SET_PRODUCTS} from "../action-types";
import {services} from "../../services";

const {productService} = services;

export const setProducts = () => async (dispatch) => {
    productService.getProducts()
        .then(res => res.json())
        .then(product => dispatch({type: SET_PRODUCTS, payload: product}))
}