import React from 'react'
import './Title.scss'

const Title = (props) => {
  return (
    <div className="common-title">
      <h2>{props.children}</h2>
    </div>
  )
}

export default Title
