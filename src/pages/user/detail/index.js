import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Tabs } from 'antd'
import UserInfo from './components/UserInfo'
import axios from 'util/axios'
import './index.less'

const TabPane = Tabs.TabPane

class UserDetail extends Component {
  state = {
    info: null,
    params: null
  }
  
  componentWillMount() {
    const pathname = this.props.history.location.pathname
    const uid = pathname.replace(/^\/user\//, '')
    this.setState(() => ({ params: { id: uid } }))
  }
  
  render() {
    const {info} = this.state
    return (
      <Card className="user-detail-panel">
        <Tabs defaultActiveKey="1">
          <TabPane tab="用户信息" key="1">
            <UserInfo data={info} />
          </TabPane>
          <TabPane tab="订单记录" key="2">2</TabPane>
          <TabPane tab="提现记录" key="3">3</TabPane>
          <TabPane tab="红包通知" key="4">4</TabPane>
        </Tabs>
        <Link className="back-to-upper" to="/user" replace><span>返回 ></span></Link>
      </Card>
    )
  }

  componentDidMount() {
    const { params } = this.state
    axios.getUserDetail(params, this)
  }
  
}

export default UserDetail
