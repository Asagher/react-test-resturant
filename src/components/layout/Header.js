import React, { Fragment } from 'react'
import MealsImg from '../../assets/img/meals.jpg'
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>RaectMeals</h1>
            <HeaderCartButton show={props.show}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImg} alt="table of a lot of food!" />
        </div>
    </Fragment>
  )
}

export default Header