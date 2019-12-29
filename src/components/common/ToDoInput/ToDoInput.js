import React from 'react'
import './ToDoInput.scss'

import Button from '../Button'

const ToDoInput = (props) => {
  const { todoDesc, handleChangeInput, handleCreateTodo } = props

  return (
    <div className="common-to-do-input">
      <input
        value={todoDesc}
        placeholder="Type in a new task to do!"
        onChange={handleChangeInput('todoDesc')}
      />
      <Button
        buttonStyle="primary"
        handleClick={() => handleCreateTodo(todoDesc)}
      >
        Add
      </Button>
    </div>
  )
}

export default ToDoInput
