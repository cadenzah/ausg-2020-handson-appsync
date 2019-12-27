import React from 'react'
import './Article.scss'

const Article = (props) => {
  return (
    <div className="template-article">
      {props.children}
    </div>
  )
}

export default Article
