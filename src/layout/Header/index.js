import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Menu, Avatar } from 'antd'
import { DEFAULT_NAV_PATH as nav, INIT_PATH_KEY as rootPath } from 'config/nav'
import Util from 'util'
import aid from 'util/aid'
import './index.less'

const MenuItem = Menu.Item
const util = new Util()

// 一二级路径分离，需要取到有二级路径的节点集合
// 凭借得到的集合，修改Menu的selectedKeys
const cPaths = []
const wPaths = []
nav.contents.subnav.forEach(i => { cPaths.push(i.path) })
nav.withdraw.subnav.forEach(i => { wPaths.push(i.path) })

class Header extends PureComponent {
  state = {
    currentKey: rootPath
  }
  // 组件加载前处理导航与路由的匹配
  componentWillMount() {
    let urlPath = window.location.pathname
    let i, basePaths = []
    // 获取基础路由
    for(i in nav) {
      let n = nav[i]
      if (n.subnav.length > 0) {
        n.subnav.forEach(item => { basePaths.push(item.path) })
      } else {
        basePaths.push(n.path)
      }
    }

    // 如果匹配相应路由
    if (basePaths.indexOf(urlPath) > -1) {
      // 校正selectedKeys - 1
      if (cPaths.indexOf(urlPath) > -1) {
        urlPath = cPaths[0]
      }
      // 校正selectedKeys - 2
      if (wPaths.indexOf(urlPath) > -1) {
        urlPath = wPaths[0]
      }
      this.setState(() => ({ currentKey: urlPath }))
    } else {
      if (urlPath !== '/' && !aid.isDetailPath(urlPath)) {
        this.setState(() => ({ currentKey: '' }))
      }
    }
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
    util.logout()
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