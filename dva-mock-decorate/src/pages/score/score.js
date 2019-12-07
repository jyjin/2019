import React from 'react'
import { Table, Button, Input, Drawer } from 'fntd'
import styles from './index.less'
import { connect } from 'dva'
import router from 'umi/router';

const mapStateToProps = state => {
  return {
    userList: state['user'].userList,
    user: state['user'].user,
    scoreList: state['score'].scoreList,
  }
}

@connect(mapStateToProps)
class Score extends React.Component {
  state = {
    mockData: [],
    serverData: '',
    name: 'tom',
    age: 24
  }

  UNSAFE_componentWillMount() {
    this.getScoreList()
  }

  getScoreList() {
    if (!this.props.user) {
      router.push('/')
    }
    this.props.dispatch({
      type: 'score/getScoreList',
      payload: {
        uid: this.props.user.id,
        uname: this.props.user.name
      }
    });
  }

  columns() {
    return [
      {
        title: '序号',
        dataIndex: 'userId',
        key: 'userId',
      },
      {
        title: '学生',
        dataIndex: 'userName',
        key: 'userName',
      },
      {
        title: '科目名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '成绩',
        dataIndex: 'score',
        key: 'score',
      },
    ]

  }

  render() {
    console.log('props score == ', this.props)
    return (
      <div style={{padding: '10px 20px'}}>
        <h3><a style={{ float: 'left', margin: '0px 20px' }} onClick={() => { router.push('/') }}>返回</a>成绩单</h3>
        <Table rowKey={'id'} columns={this.columns()} dataSource={this.props.scoreList} />
      </div>
    )
  }
}

export default Score

// export default connect(state => {
//   return {
//     userList: state['user'].userList,
//     user: state['user'].user,
//     scoreList: state['score'].scoreList,
//   }
// })(Score)

