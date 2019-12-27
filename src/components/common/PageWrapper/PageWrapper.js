import React from 'react'
import './PageWrapper.scss'

// Used for Center align of its children components
const PageWrapper = (props) => {
  return (
    <div className="common-page-wrapper">
      {props.children}
    </div>
  )
}

export default PageWrapper
