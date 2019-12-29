import { createAction, handleActions } from 'redux-actions'

// #################### ACTION TYPES ###################
const CHANGE_INPUT = 'app/CHANGE_INPUT'
const GET_TODOLIST = 'app/GET_TODOLIST'
const CREATE_TODO = 'app/CREATE_TODO'
const UPDATE_TODO = 'app/UPDATE_TODO'
const DELETE_TODO = 'app/DELETE_TODO'

// ############ ACTION GENERATOR FUNCTIONS #############
// ## NAMES WILL BE RE-USED WITH `bindActionCreators` ##

// action for keyboard input
export const changeInput = createAction(CHANGE_INPUT, payload => ({ key: payload.key, value: payload.value }))

// ######## DEFAULT STATE FOR THIS SLICE STATE #########
const initialState = {
  taskDesc: '',
}

// ########### REDUCER FOR THIS SLICE STATE ############
export default handleActions({
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    [action.payload.key]: action.payload.value,
  }),
}, initialState)
