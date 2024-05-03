import './App.css';
import { Fragment, useState } from 'react';
import Header from './components/layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
const[cartIsShown,setCartIsShown] = useState(false)

const showCartHandler=()=>{
  setCartIsShown(true)

}
const hideCartHandler=()=>{
  setCartIsShown(false)
}
  return (
    <Fragment>
     {cartIsShown&& <Cart hide={hideCartHandler}/>} 
      <Header show={showCartHandler} />
      <Meals/>
    </Fragment>
  );
}

export default App;
