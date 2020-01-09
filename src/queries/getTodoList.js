const getTodoList = `query GetTodoList {
  listTodos {
    items {
      id
      desc
      status
      date
    }
  }
}`

export default getTodoList
