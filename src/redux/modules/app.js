import { createAction, handleActions } from 'redux-actions'
import { API, graphqlOperation } from 'aws-amplify'
import uuid from 'uuid/v4'

import {
  mutateCreateTodo,
  queryGetTodoList,
} from '../../graphql'

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
export const changeInput = createAction(CHANGE_INPUT, payload => ({ key: payload.key, value: payload.value }))

// action for querying all todos
const _getTodoList = createAction(GET_TODOLIST, payload => ({
  todoList: payload.todoList
}))
export const getTodoList = () => (dispatch) => {
  API.graphql(graphqlOperation(queryGetTodoList))
    .then(({ data: { listTodos: { items } } }) => {
      dispatch(_getTodoList({ todoList: items }))
    })
}

// action for creating new todo
export const createTodo = (desc) => (dispatch) => {
  API.graphql(graphqlOperation(mutateCreateTodo, {
    input: {
      id: uuid(),
      desc: desc,
      status: 'PENDING',
      date: new Date().getTime(),
    }
  }))
    .then(() => {
      dispatch(changeInput({ key: 'todoDesc', value: '',}))
      dispatch(getTodoList())
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
  })
}, initialState)
