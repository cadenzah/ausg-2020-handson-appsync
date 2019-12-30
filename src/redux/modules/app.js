import { createAction, handleActions } from 'redux-actions'
import API from '../../utils/lib/api'

// #################### ACTION TYPES ###################
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
      dispatch(_getTodoList({ todoList: items }))
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
      return dispatch(changeInput({ key: 'todoDesc', value: '', }))
    })
    .then(() => {
      dispatch(_createTodo({ newTodo }))
    })
    .catch((e) => {
      console.error(e)
    })
}

// ######## DEFAULT STATE FOR THIS SLICE STATE #########
const initialState = {
  todoDesc: '',
  todoList: [],
}

// ########### REDUCER FOR THIS SLICE STATE ############
export default handleActions({
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    [action.payload.key]: action.payload.value,
  }),
  [GET_TODOLIST]: (state, action) => ({
    ...state,
    todoList: action.payload.todoList,
  }),
  [CREATE_TODO]: (state, action) => {
    return ({
      ...state,
      todoList: state.todoList.concat(action.payload.newTodo),
    })
  },
}, initialState)
