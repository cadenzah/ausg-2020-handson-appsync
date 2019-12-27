import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PageWrapper from '../components/common/PageWrapper'
import ToDoWrapper from '../components/base/ToDoWrapper'

// import * as appActions from '../redux/modules/app'

const MainContainer = (props) => {
  return (
    <PageWrapper>
      <ToDoWrapper>
        <h3>ToDoList</h3>
        {/* <ToDoInput /> */}
          {/* 입력란 - 추가 버튼 */}
        {/* <ToDoList /> */}
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
