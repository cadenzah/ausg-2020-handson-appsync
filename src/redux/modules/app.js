import { createAction, handleActions } from 'redux-actions'

// action types
const CHANGE_INPUT = 'app/CHANGE_INPUT'

// action generator functions
// names will be re-used with `bindActionCreators`
export const changeInput = createAction(CHANGE_INPUT, payload => ({ key: payload.key, value: payload.value }))

// default state for this slice state
const initialState = {
  taskDesc: '',
}

// reducer for this slice state
export default handleActions({
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    [action.payload.key]: action.payload.value,
  }),
}, initialState)
