
import React, { Fragment } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
  return (
    <Fragment>
        <button onClick={props.show} className={classes.button}>
            <span className={classes.icon} >
                <CartIcon/>
            </span>
            <span >Your cart</span>
            <span className={classes.badge }>3</span>
        </button>
    </Fragment>
  )
}

export default HeaderCartButton