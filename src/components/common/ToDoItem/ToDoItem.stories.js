import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import PageWrapper from '../PageWrapper'
import ToDoWrapper from '../../base/ToDoWrapper'
import ToDoItem from './ToDoItem'

const actions = {
  handleUpdateTodo: action('handleUpdateTodo'),
  handleDeleteTodo: action('handleDeleteTodo'),
}

const item = {
  id: 1,
  desc: 'Something you have to do',
  status: 'PENDING',
  date: '1577706674964',
}

storiesOf('ToDoItem', module)
  .add('default', () => {
    return (
      <PageWrapper>
        <ToDoWrapper>
          <ToDoItem
            item={item}
            {...actions}
          />
        </ToDoWrapper>
      </PageWrapper>
    )
  })
