import uuid from 'uuid/v4'
import postpone from './postpone'

let { default: todos } = require('../data/tasks')

const getTodoList = () => {
  // get a copy of current dataset for immutability
  const _todos = todos.map(todo => Object.assign({}, todo))

  // return current dataset
  return new Promise((resolve, reject) => {
    const result = { data: { listTodos: { items: _todos } } }
    resolve(result)
  })
}

const createTodo = (desc) => {
  // generate new todo
  const newTodo = {
    id: uuid(),
    desc: desc,
    status: 'PENDING',
    date: new Date().getTime(),
  }

  // add it in the dataset
  todos.push(newTodo)

  // attach new todo on the dataset
  return new Promise((resolve, reject) => {
    const result = { data: { createTodo: newTodo } }
    resolve(result)
  })
}

const updateTodo = (id, prevStatus) => {
  const newStatus = (prevStatus === 'PENDING') ? 'DONE' : 'PENDING'
  // modify the todo which has the id from parameter
  for (let i = 0 ; i < todos.length ; i++) {
    if (todos[i].id === id) {
      todos[i].status = newStatus
    }
  }

  return new Promise((resolve, reject) => {
    const result = { data: { updateTodo: { id, status: newStatus }}}
    resolve(result)
  })
}

const deleteTodo = (id) => {
  // find where the target todo exists
  let index = -1
  todos.forEach((todo, _index) => {
    if (todo.id === id) {
      index = _index
    }
  })

  if (index !== -1) {
    const front = todos.slice(0, index)
    const back = todos.slice(index + 1)
    todos = front.concat(back)

    return new Promise((resolve, reject) => {
      const result = { data: { deleteTodo: { id } } }
      resolve(result)
    })
  } else {
    return new Error('Invalid ID')
  }
}

export default {
  getTodoList,
  createTodo,
  updateTodo,
  deleteTodo,
}
