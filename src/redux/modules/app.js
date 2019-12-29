import { createAction, handleActions } from 'redux-actions'

// #################### ACTION TYPES ###################
// action for keyboard action
const CHANGE_INPUT = 'app/CHANGE_INPUT'

// actions for DB apis
const CREATE_TODO = 'app/CREATE_TODO'
const UPDATE_TODO = 'app/UPDATE_TODO'
const DELETE_TODO = 'app/DELETE_TODO'

// actions for app's status
const GET_TODOLIST_REQUEST = 'app/GET_TODOLIST_REQUEST'
const GET_TODOLIST_SUCCESS = 'app/GET_TODOLIST_SUCCESS'
const GET_TODOLIST_FAILURE = 'app/GET_TODOLIST_FAILURE'

// ############ ACTION GENERATOR FUNCTIONS #############
// ## NAMES WILL BE RE-USED WITH `bindActionCreators` ##

// action for keyboard input
export const changeInput = createAction(CHANGE_INPUT, payload => ({ key: payload.key, value: payload.value }))

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
}, initialState)
