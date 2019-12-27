import { createAction, handleActions } from 'redux-actions'

// action types
const EXAMPLE_INCREASE = 'app/EXAMPLE_INCREASE'
const EXAMPLE_DECREASE = 'app/EXAMPLE_DECREASE'

// action generator functions
// names will be re-used with `bindActionCreators`
export const increment = createAction(EXAMPLE_INCREASE)
export const decrement = createAction(EXAMPLE_DECREASE, value => ({ value }))

// default state for this slice state
const initialState = {
  value: 0
}

// reducer for this slice state
export default handleActions({
  [EXAMPLE_INCREASE]: (state, action) => ({
    value: state.value + action.payload
  }),
  [EXAMPLE_DECREASE]: (state, action) => ({
    value: state.value - action.payload.value
  }),
}, initialState)
