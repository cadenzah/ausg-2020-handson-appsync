import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home} from '../pages'

// catalog for all routings
const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
