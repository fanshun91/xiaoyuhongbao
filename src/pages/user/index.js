import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Card, Table, Button, Divider } from 'antd'
import FilterForm from 'components/BasicForm'
import { FORM_CONFIG, DATE_FIELDS } from 'config/form'
import axios from 'util/axios'
import aid from 'util/aid'

const { Column } = Table

class User extends Component {
  state = {
    dataSource: [],
    pagination: {},
    params: {
      pageNumder: 1,
      pageSize: 2,
    }
  }
  // 获取已提交的form数据
  getFormValues = data => {
    console.log(data)
  }
  // 渲染
  render() {
    const {dataSource, pagination} = this.state
    const height = aid.getSuitableHeight()
    return (
      <Fragment>
        <Card>
          <FilterForm 
            formItemList={FORM_CONFIG.user}
            dateFieldName={DATE_FIELDS.user}
            handleFormSubmit={this.getFormValues}
          />
        </Card>
        <Card>
          <Table
            bordered
            dataSource={dataSource}
            pagination={pagination}
            scroll={{ x: 1640, y: height }}
          >
            <Column
              title="序号"
              dataIndex="id"
              key="id"
              fixed="left"
              align="center"
              width="72px"
            />
            <Column
              title="userID"
              dataIndex="userId"
              key="userid"
              width="96px"
            />
            <Column
              title="微信openId"
              dataIndex="openId"
              key="openid"
              width="184px"
            />
            <Column
              title="微信unionid"
              dataIndex="uuid"
              key="unionid"
              width="184px"
            />
            <Column
              title="用户昵称"
              dataIndex="userName"
              key="username"
              width="136px"
            />
            <Column
              title="注册时间"
              dataIndex="createTime"
              key="register_time"
              width="176px"
              render={time => aid.getFormatedTime(time)}
            />
            <Column
              title="最后登录时间"
              dataIndex="loginTime"
              key="last_login_time"
              width="176px"
              render={time => aid.getFormatedTime(time)}
            />
            <Column
              title="累计发送金额"
              dataIndex="cumulative_pay_amount"
              key="cumulative_pay_amount"
              width="120px"
            />
            <Column
              title="累计提现金额"
              dataIndex="cumulative_withdraw_amount"
              key="cumulative_withdraw_amount"
              width="120px"
            />
            <Column
              title="账户余额"
              dataIndex="userMoney"
              key="account_balance"
              width="96px"
            />
            <Column
              title="账户状态"
              dataIndex="isDisable"
              key="account_status"
              width="96px"
              render={status => aid.getUserableStatus(status)}
            />
            <Column
              title="操作"
              key="operation"
              fixed="right"
              align="center"
              width="184px"
              render={
                (text, record) => {
                  let changedStatus = aid.toggleUserableStatus(record.isDisable)
                  return (
                    <Fragment>
                      <Button onClick={() => { aid.handleStatusChange(changedStatus, record, this) }}>
                        {changedStatus}
                      </Button>
                      <Divider type="vertical" />
                      <Link to={"/user/" + record.userId}>查看详情</Link>
                    </Fragment>
                  )
                }
              }
            />
          </Table>
        </Card>
      </Fragment>
    )
  }
  componentDidMount() {
    const {params} = this.state
    axios.request({
      url: '/user/query',
      method: 'get',
      data: params
    }, this)
  }
}

export default User