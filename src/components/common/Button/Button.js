import React from 'react'
import './Button.scss'

const Button = (props) => {
  return (
    <div className={
      props.buttonStyle === 'primary' ? `common-button primary` :
      props.buttonStyle === 'caution' ? `common-button caution` :
      `common-button`}>
      <p>{props.children}</p>
    </div>
  )
}

export default Button
