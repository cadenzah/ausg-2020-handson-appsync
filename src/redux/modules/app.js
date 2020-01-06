import { createAction, handleActions } from 'redux-actions'
import API from '../../utils/lib/api'

// #################### ACTION TYPES ###################

// action for changing app's state
// const ON_LOADING = 'app/ON_LOADING'
const ON_COMPLETE = 'app/ON_COMPLETE'

// action for keyboard action
const CHANGE_INPUT = 'app/CHANGE_INPUT'

// actions for DB apis
const CREATE_TODO = 'app/CREATE_TODO'
const UPDATE_TODO = 'app/UPDATE_TODO'
const DELETE_TODO = 'app/DELETE_TODO'

// actions for app's status
const GET_TODOLIST = 'app/GET_TODOLIST'

// ############ ACTION GENERATOR FUNCTIONS #############
// ## NAMES WILL BE RE-USED WITH `bindActionCreators` ##

// action for completing data loading task
export const onComplete = createAction(ON_COMPLETE, (payload = {}) => payload)

// action for keyboard input
const _changeInput = createAction(CHANGE_INPUT, payload => ({ key: payload.key, value: payload.value }))

export const changeInput = ({ key, value }) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch(_changeInput({ key, value }))
    resolve()
  })
}

// action for querying all todos
const _getTodoList = createAction(GET_TODOLIST, payload => ({
  todoList: payload.todoList
}))
export const getTodoList = () => (dispatch) => {
  API.getTodoList()
    .then(({ data: { listTodos: { items } } }) => {
      return new Promise((resolve) => {
        dispatch(_getTodoList({ todoList: items }))
        resolve()
      })
    })
    .then(() => {
      dispatch(onComplete())
    })
    .catch((e) => {
      console.error(e)
    })    
}

// action for adding new todo in the internal todoList
const _createTodo = createAction(CREATE_TODO, payload => ({ newTodo: payload.newTodo }))

// action for creating new todo
export const createTodo = (desc) => (dispatch) => {
  API.createTodo(desc)
    .then(({ data: { createTodo: newTodo } }) => {
      return new Promise((resolve) => {
        dispatch(changeInput({ key: 'todoDesc', value: '', }))
          .then(() => {
            resolve({ newTodo })
          })
      })
    })
    .then(({ newTodo }) => {
      dispatch(_createTodo({ newTodo }))
    })
    .catch((e) => {
      console.error(e)
    })
}

// action for modifying the updated todo's status
const _updateTodo = createAction(UPDATE_TODO, payload => ({ id: payload.id, newStatus: payload.newStatus }))

// action for updating a todo
export const updateTodo = (id, prevStatus) => (dispatch) => {
  API.updateTodo(id, prevStatus)
    .then(({ data: { updateTodo } }) => {
      dispatch(_updateTodo({
        id: updateTodo.id,
        newStatus: updateTodo.status,
      }))
    })
    .catch((e) => {
      console.error(e)
    })
}

// action for eliminating the deleted todo
const _deleteTodo = createAction(DELETE_TODO, payload => ({ id: payload.id }))

// action for deleting a todo
export const deleteTodo = (id) => (dispatch) => {
  API.deleteTodo(id)
    .then(({ data: { deleteTodo } }) => {
      dispatch(_deleteTodo({ id: deleteTodo.id }))
    })
    .catch((e) => {
      console.error(e)
    })
}

// ######## DEFAULT STATE FOR THIS SLICE STATE #########
const initialState = {
  isLoading: true,
  todoDesc: '',
  todoList: [],
}

// ########### REDUCER FOR THIS SLICE STATE ############
export default handleActions({
  [ON_COMPLETE]: (state, action) => ({
    ...state,
    isLoading: !state.isLoading,
  }),
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    [action.payload.key]: action.payload.value,
  }),
  [GET_TODOLIST]: (state, action) => ({
    ...state,
    todoList: action.payload.todoList,
  }),
  [CREATE_TODO]: (state, action) => ({
    ...state,
    todoList: state.todoList.concat(action.payload.newTodo),
  }),
  [UPDATE_TODO]: (state, action) => ({
    ...state,
    todoList: state.todoList.map((todo) => {
      // find the updated todo and change the status
      if (todo.id === action.payload.id) {
        todo.status = action.payload.newStatus
      }
      return todo
    }),
  }),
  [DELETE_TODO]: (state, action) => ({
    ...state,
    todoList: state.todoList.filter((todo) => {
      // exclude the deleted todo using payload's id
      if (todo.id === action.payload.id) {
        return false
      } else {
        return true
      }
    }),
  }),
}, initialState)
