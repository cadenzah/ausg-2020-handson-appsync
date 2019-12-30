// export the function's result
// can be editted when ssr is used
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './modules'
import reduxThunk from 'redux-thunk'

// const store = createStore(rootReducer, applyMiddleware(reduxThunk))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk)))

export default store
