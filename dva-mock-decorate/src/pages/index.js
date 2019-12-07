import React from 'react'
import { Table, Button, Input, Drawer } from 'fntd';
import styles from './index.less'
import { connect } from 'dva'
import router from 'umi/router';

class Index extends React.Component {
  state = {
    mockData: [],
    serverData: '',
    name: 'tom',
    age: 24
  }

  UNSAFE_componentWillMount() {
    this.getUserList()
  }

  getUserList() {
    this.props.dispatch({
      type: 'user/getUserList'
    });
  }

  onChange({ target: { value, dataset } }) {
    this.setState({
      [dataset.type]: value
    })
  }

  onRefresh() {
    this.getUserList()
  }

  onSubmit() {
    this.props.dispatch({
      type: 'user/addUser',
      payload: {
        ...this.state
      }
    });
  }

  columns() {
    return [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '学员名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        render: text => text ? '女' : '男'
      },
      {
        title: '家长',
        key: 'family',
        dataIndex: 'family[name]',
      },
      {
        title: '特长',
        key: 'skills',
        render: text => text.skills.join(',')
      },
    ]

  }

  onRowClick(row) {

    this.setState({
      visible: true,
      currentUser: row
    })
    this.props.dispatch({
      type: 'user/setUser',
      payload: {
        user: row
      },
      callback: (res) => {
        router.push('/score')
      }
    });
  }

  render() {
    console.log('props == ', this.props)
    return (
      <div className={styles['wrap']}>
        <div className={styles['con']}>
          <h3>
            学员名单
          <Button style={{ marginLeft: 20, float: "right" }} type="primary" onClick={() => this.onRefresh()}>刷新</Button>
          </h3>
          <Table rowKey={'id'} columns={this.columns()} onRow={record => {
            return {
              onClick: event => { this.onRowClick(record) }, // 点击行
              // onDoubleClick: event => { },
              // onContextMenu: event => { },
              // onMouseEnter: event => { }, // 鼠标移入行
              // onMouseLeave: event => { },
            };
          }} dataSource={this.props.userList} />
          <Input style={{ margin: '10px', width: 300 }} data-type='name' onChange={this.onChange.bind(this)} placeholder="User name" value={this.state.name} />
          <Input style={{ margin: '10px', width: 300 }} type="number" data-type='age' onChange={this.onChange.bind(this)} placeholder="User age" value={this.state.age} />
          <Button type="primary" onClick={this.onSubmit.bind(this)}>添加</Button>
        </div>
        <div className={styles['con']}>
          <h3>this.props</h3>
          <pre className={styles['code']}>
            {JSON.stringify(this.props, null, 2)}
          </pre>
        </div>
        <Drawer
          title="Basic Drawer"
          placement={"right"}
          // onClose={this.onClose}
          visible={this.state.visible}
        >
          hello
      </Drawer>
      </div>
    )
  }
}

export default connect(state => {
  return {
    user: state['user'].user,
    userList: state['user'].userList
  }
})(Index)