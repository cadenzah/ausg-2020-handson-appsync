const createTodo = `mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    desc
    status
    date
  }
}
`

export default createTodo
