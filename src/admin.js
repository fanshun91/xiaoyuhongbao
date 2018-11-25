import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { Row, Col, Card } from 'antd'
import Header from 'layout/Header'
import routes from 'config/routes'

// 侧边导航的基础样式
const sideNavStyle = {
  height: 'calc(100vh - 68px)',
  backgroundColor: '#fff'
}
// 生成Route（type[string]: sidenav, crumb）
const generateRoute = type => routes.map((item, index) => (
  <Route
    key={index}
    exact={item.exact}
    path={item.path}
    component={() => item[type]}
  />
))

const Admin = props => (
  <Fragment>
    <Header />
    <Col span={4} style={sideNavStyle}>
      {generateRoute('sidenav')}
    </Col>
    <Col span={20}>
      <Row style={{ padding: '0 16px' }}>
        <Card>
          {generateRoute('crumb')}
        </Card>
        {props.children}
      </Row>
    </Col>
  </Fragment>
)

export default Admin