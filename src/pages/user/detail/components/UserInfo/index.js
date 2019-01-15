import React, { Component, Fragment } from 'react'
import { Row, Col, Table, Avatar } from 'antd'
import './index.less'

class UserInfo extends Component {

  render() {
    const {data} = this.props
    return (
      <Fragment>
        <Row className="user-detail-row">
          <Col span={6}>用户头像：<Avatar style={{ backgroundColor: '#87d068' }} icon="user" /></Col>
          <Col span={6}>昵称：ruisun</Col>
        </Row>
        <Row className="user-detail-row">
          <Col span={6}>微信openid：000312</Col>
          <Col span={6}>微信unionid：000312</Col>
          <Col span={6}>userID：000312</Col>
        </Row>
        <Row className="user-detail-row">
          <Col span={6}>注册时间：2019-12-30 12:00:10</Col>
          <Col span={6}>注册时间：2019-12-30 12:00:10</Col>
        </Row>
        <Row className="user-detail-row">
          <Col span={6}>累计发送金额：1000元</Col>
          <Col span={6}>累计体现金额：300元</Col>
          <Col span={6}>账户余额：900元</Col>
        </Row>
        <Row className="user-detail-row">
          <Col span={6}>账号状态：启用</Col>
        </Row>
        {/* <Row style={{ marginTop: 20 }}>
          <Table
            bordered
            title={() => ('商户信息')}
            columns={tableConfig.user_merchant_info}
            dataSource={[]}
            pagination={this.state.pagination}
          />
        </Row> */}
      </Fragment>
    )
  }
}

export default UserInfo
