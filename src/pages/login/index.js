import React, { Component, Fragment } from 'react'
import { Card, Form, Input, Button, Icon, message } from 'antd'
import Util from 'util'
import './index.less'

const FormItem = Form.Item
const util = new Util()
const Title = (
  <Fragment>
    <h1 className="login-page-title">小鱼头条</h1>
    <span className="login-page-title-suffix">后台管理系统</span>
  </Fragment>
)

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  // 处理登录表单提交
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('login values: ', values)
        util.login(values)
        // 验证状态
        if (false) {
          this.props.history.push('/user')
        } else {
          message.config({ top: 72 })
          message.error('登录信息验证失败！', 2.8)
        }
      }
    })
  }
  // 处理input框键盘事件
  handleKeyUp = e => {
    if (e.keyCode === 13) {
      this.handleSubmit()
    }
  }
  // 处理input框value值的变化
  handleInputChange = e => {
    let name = e.target.name
    let value = e.target.value
    this.setState(() => ({ [name]: value }))
  }
  // 渲染
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login-page-wrapper">
        <div className="login-page-container">
          <Card
            className="login-page-core"
            title={Title}
            headStyle={{ color: '#1890ff' }}
          >
            <Form
              className="login-form"
              onSubmit={this.handleSubmit}
            >
              <FormItem>
                {getFieldDecorator('username', {
                  initialValue: 'xiaoyu',
                  rules: [{
                    required: true,
                    message: '请输入用户名！！'
                  }]
                })(
                  <Input
                    name="username"
                    prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />}
                    placeholder="请输入用户名"
                    onKeyUp={this.handleKeyUp}
                    onChange={this.handleInputChange}
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  initialValue: '000',
                  rules: [{
                    required: true,
                    message: '请输入密码！！'
                  }]
                })(
                  <Input
                    name="password"
                    type="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, .25)', paddingRight: '8px' }} />}
                    placeholder="请输入密码"
                    onKeyUp={this.handleKeyUp}
                    onChange={this.handleInputChange}
                  />
                )}
              </FormItem>
              <FormItem>
                <Button
                  className="login-submit-button"
                  type="primary"
                  htmlType="submit"
                >登录</Button>
              </FormItem>
            </Form>
          </Card>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login)
