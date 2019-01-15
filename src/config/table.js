import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider } from 'antd'
import aid from 'util/aid'
import axios from 'util/axios'

export const table = {
  // @用户管理
  user: [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
      align: 'center',
      width: 70,
    },
    {
      title: 'userID',
      dataIndex: 'userId',
      key: 'userId',
      width: 100,
    },
    {
      title: '微信openId',
      dataIndex: 'openId',
      key: 'openid',
      width: 120,
    },
    {
      title: '微信unionid',
      dataIndex: 'uuid',
      key: 'unionid',
      width: 120,
    },
    {
      title: '用户昵称',
      dataIndex: 'userName',
      key: 'username',
      width: 160,
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
      key: 'register_time',
      width: 180,
      render: time => aid.getFormatedTime(time)
    },
    {
      title: '最后登录时间',
      dataIndex: 'loginTime',
      key: 'last_login_time',
      width: 180,
      render: time => aid.getFormatedTime(time)
    },
    {
      title: '累计发送金额',
      dataIndex: 'cumulative_pay_amount',
      key: 'cumulative_pay_amount',
      width: 120,
    },
    {
      title: '累计提现金额',
      dataIndex: 'cumulative_withdraw_amount',
      key: 'cumulative_withdraw_amount',
      width: 120,
    },
    {
      title: '账户余额',
      dataIndex: 'userMoney',
      key: 'account_balance',
      width: 100,
    },
    {
      title: '账户状态',
      dataIndex: 'isDisable',
      key: 'account_status',
      width: 100,
      render: status => aid.getUserableStatus(status),
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      align: 'center',
      width: 180,
      render: (text, record) => {
        let changedStatus = aid.toggleUserableStatus(record.isDisable)
        return (
          <Fragment>
            <Button onClick={() => { aid.handleStatusChange(record.userId, changedStatus) }}>
              {changedStatus}
            </Button>
            <Divider type="vertical" />
            <Link to={"/user/" + record.userId}>查看详情</Link>
            {/*
              <Button onClick={截取当前/user后面的path，发送请求进行验证，如果成功则跳转，否则RETURN}></Button>
            */}
          </Fragment>
        )
      }
    }
  ],
  
  // @红包通知
  hongbao: [],

  // @用户留言
  message: [],

  // @订单管理
  orders: [],

  // @提现记录
  record: [],

  // @待审核提现
  pending: [],

  // @异常提现
  exception: [],

  // @举报管理
  report: [],

  // @消息提醒
  notice: []
}