import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'

const MenuItem = Menu.Item

class SideNav extends PureComponent {
  render() {
    const { path, subnav } = this.props
    return (
      <Menu selectedKeys={[path]}>
        {
          subnav && subnav.map(item => (
            <MenuItem key={item.path}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </MenuItem>
          ))
        }
      </Menu>
    )
  }
}

export default SideNav
