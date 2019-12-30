import React from 'react'
import './Button.scss'

const Button = (props) => {
  const onClickButton = (e) => {
    e.preventDefault()
    props.handleClick()
  }

  return (
    <div className={
      props.buttonStyle === 'primary' ? `common-button primary` :
      props.buttonStyle === 'caution' ? `common-button caution` :
      `common-button`}
      onClick={onClickButton}
    >
      <p>{props.children}</p>
    </div>
  )
}

export default Button
