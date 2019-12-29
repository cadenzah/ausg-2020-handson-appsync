import createTodo from './createTodo'
import updateTodo from './updateTodo'
import deleteTodo from './deleteTodo'
import getTodoList from './getTodoList'


export {
  createTodo as mutateCreateTodo,
  updateTodo as mutateUpdateTodo,
  deleteTodo as mutateDeleteTodo,
  getTodoList as queryGetTodoList,
}
