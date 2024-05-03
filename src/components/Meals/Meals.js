import React, { Fragment } from 'react'
import MealsAvailable from './MealsAvailable'
import MealsSummery from './MealsSummery'

const Meals = () => {
  return (
    <Fragment>
        <MealsSummery/>
        <MealsAvailable/>
    </Fragment>
  )
}

export default Meals