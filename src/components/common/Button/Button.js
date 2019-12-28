import React from 'react'
import './Button.scss'

const Button = (props) => {
  return (
    <button className={
      props.buttonStyle === 'primary' ? `common-button primary` :
      props.buttonStyle === 'caution' ? `common-button caution` :
      `common-button`}>
      {props.children}
    </button>
  )
}

export default Button
