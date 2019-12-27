// combine reducers and this will be used when store is generated
// using Ducks pattern for each slices
import { combineReducers } from 'redux'
import app from './app'

export default combineReducers({
  app
})
