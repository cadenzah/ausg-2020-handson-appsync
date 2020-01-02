import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import PageWrapper from '../../PageWrapper'
import ToDoWrapper from '../../../base/ToDoWrapper'
import LoadingItem from './LoadingItem'

const item = {
  id: 1,
  desc: 'Now Loading Awesome Todos!',
}

storiesOf('LoadingItem', module)
  .add('default', () => {
    return (
      <PageWrapper>
        <ToDoWrapper>
          <LoadingItem item={item} />
        </ToDoWrapper>
      </PageWrapper>
    )
  })
