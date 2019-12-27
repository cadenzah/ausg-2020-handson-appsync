import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SimpleCounter from './SimpleCounter'

const StatefulComponent = (props) => {
  const [value, setValue] = useState(0)
  return (
    <>
      {props.children(value, setValue)}
    </>
  )
}

storiesOf('SimpleCounter', module)
  .add('default', () => <StatefulComponent>
    {(value, setValue) => <SimpleCounter
      increment={() => setValue(value + 1)}
      decrement={() => setValue(value - 1)}
      value={value}
      />}
  </StatefulComponent>)
  .add('not working', () => <SimpleCounter value={10} />)
