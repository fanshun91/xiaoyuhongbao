import React, { Component, Fragment } from 'react'
import { Card, Form, Input, Button, Icon } from 'antd'
import './index.less'

const FormItem = Form.Item
const Title = (
  <Fragment>
    <h1 className="login-page-title">小鱼头条</h1>
    <span className="login-page-title-suffix">后台管理系统</span>
  </Fragment>
)

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('login values: ', values)
        this.props.history.push('/user')
      }
    })
  }
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
                    prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />}
                    placeholder="请输入用户名"
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
                    type="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, .25)', paddingRight: '8px' }} />}
                    placeholder="请输入密码"
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
