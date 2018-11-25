import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Menu, Avatar } from 'antd'
import { DEFAULT_NAV_PATH as nav, INIT_PATH_KEY as pathKey } from 'config/nav'
import './index.less'

const MenuItem = Menu.Item

class Header extends PureComponent {
  state = {
    currentKey: pathKey
  }
  // 渲染 Menu Item
  renderMenuItems() {
    let i, items = []
    for (i in nav) {
      items.push(nav[i])
    }
    return items.map(item => {
      let truePath = item.subnav[0] == null ? item.path : item.subnav[0].path 
      return (
        <MenuItem title={item.title} key={truePath}>
          <NavLink to={truePath}>{item.title}</NavLink>
        </MenuItem>
      )
    })
  }
  // 点击导航单元
  handleMenuClick = e => {
    this.setState(() => ({ currentKey: e.key }))
  }
  // 用户退出登录
  handleUserExit = () => {
    console.log('user exit - -!')
  }
  // 渲染
  render() {
    const { currentKey } = this.state
    return (
      <Row className="header">
        <Col className="logo-zone" span={4}>
          <h1>小鱼科技</h1>
        </Col>
        <Col span={16}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[currentKey]}
            onClick={this.handleMenuClick}
          >
            {this.renderMenuItems()}
          </Menu>
        </Col>
        <Col className="user-zone" span={4}>
          <Avatar shape="square" icon="user" />
          <span className="username">Snow</span>
          <span className="user-exit" onClick={this.handleUserExit}>退出</span>
        </Col>
      </Row>
    )
  }
}

export default Header