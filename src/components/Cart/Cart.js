import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
const Cart = (props) => {
    const cartItem=<ul className={classes['cart-items']}>
    {[{id:'c1', name:'Sushi',amount:2,price:12.19 }].map(
        item=><li>{item.name}</li>
    )}
    </ul>
  return (
    <Modal  hide= {props.hide}>
        {cartItem}
        <div className={classes.total}>
            <span>total amount</span>
            <span> 34.34$</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.hide} className={classes['button--alt']}>close</button>
            <button className={classes.button}>ordder</button>
        </div>
    </Modal>
  )
}

export default Cart