import CartContext from "./cart-context";

import React from 'react'

const CartProvider = (props) => {

    addItemToCartHandler=(item)=>{}
    removeItemFromCartHandler=(item)=>{}
const cartContext={
    item:[],
    totalAmount:0,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler
}
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider