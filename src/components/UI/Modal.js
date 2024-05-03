import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
const Backdrop= (props) => {
    return (
      <div onClick={props.hide} className={classes.backdrop}></div>
    )
  }
  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
            <div className={classes.content}> 
                {props.children}
            </div>
      </div>
    )
  }
    const key=document.getElementById('overlay');
const Modal = (props) => {
  return (
    <Fragment>
        
        {ReactDOM.createPortal(<Backdrop  hide= {props.hide}/>,key) }
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> ,key) }

    </Fragment>
  )
}

export default Modal