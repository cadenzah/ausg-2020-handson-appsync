import React from 'react'
import './LoadingItem.scss'

const LoadingItem = (props) => {
  const { item } = props
  
  return (
    <div className="common-util-loading-item">
      <div className="common-util-loading-item-checkbox">
        <label htmlFor={item.id}>
          <input
            id={item.id}
            type="checkbox"
          />
          <span />
        </label>
      </div>
      <div className="common-util-loading-item-desc">
        <span>{item.desc}</span>
      </div>
    </div>
  )
}

export default LoadingItem
