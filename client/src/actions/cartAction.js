import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO
} from "../constants/cartConstants";

import axious from "axios";


// Add to Cart
export function addItemsToCart(id, quantity) {
    return async (dispatch, getState) => {
        const { data } = await axious.get(`/api/v1/product/${id}`);

        dispatch({
            type: ADD_TO_CART,
            payload: {
                product: data.product._id,
                name: data.product.name,
                price: data.product.price,
                image: data.product.images[0].url,
                stock: data.product.stock,
                quantity
            }
        });

        localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));

    };
};


// Remove From Cart
export function removeItemsFromCart(id) {
    return async (dispatch, getState) => {
        dispatch({
            type: REMOVE_CART_ITEM,
            payload: id
        })

        localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
    };
};


// Save Shipping Info
export function saveShippingInfo(data) {
    return async (dispatch) => {
        dispatch({
            type: SAVE_SHIPPING_INFO,
            payload: data
        });

        localStorage.setItem("shippingInfo", JSON.stringify(data));
    };
};