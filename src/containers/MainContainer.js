import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PageWrapper from '../components/common/PageWrapper'
import ToDoWrapper from '../components/base/ToDoWrapper'
import ToDoInput from '../components/common/ToDoInput'
import ToDoList from '../components/common/ToDoList'

// import * as appActions from '../redux/modules/app'

const MainContainer = (props) => {
  return (
    <PageWrapper>
      <ToDoWrapper>
        <h3>ToDoList</h3>
        <ToDoInput />
        <ToDoList />
          {/* 각 항목 별로 map */}
          {/* 내용 - 체크 버튼 - 삭제 버튼 */}
      </ToDoWrapper>
    </PageWrapper>
  )
}

const mapStateToProps = ({ app }) => ({
  value: app.value
})

// const mapDispatchToProps = (dispatch) => ({
//   appActions: bindActionCreators(appActions, dispatch)
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(MainContainer)
