import uuid from 'uuid/v4'

let { default: todos } = require('../data/tasks')

const getTodoList = () => {
  // return current dataset
  return new Promise((resolve, reject) => {
    const result = { data: { listTodos: { items: todos } } }
    resolve(result)
  })
}

const createTodo = (desc) => {
  const newTodo = {
    id: uuid(),
    desc: desc,
    status: 'PENDING',
    date: new Date().getTime(),
  }
  todos.push(newTodo)

  // attach new todo on the dataset
  return new Promise((resolve, reject) => {
    const result = { data: { createTodo: newTodo } }
    resolve(result)
  })
}

export default {
  getTodoList,
  createTodo,
}
