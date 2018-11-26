import React from 'react'
import SideNav from 'layout/SideNav'
import PageMark from 'components/PageMark'
import { DEFAULT_NAV_PATH as nav } from 'config/nav' 

// 路由各项
const { user, contents, orders, withdraw, report, notice } = nav
// 生成路由配置
const initRouteItems = (route, root = null, exact = true) => {
  // 区别是否包含二级路由
  let subnav = !root ? [{
    title: route.title,
    path: route.path
  }] : root.subnav
  // 返回一个路由配置对象
  return {
    title: route.title,
    path: route.path,
    exact: exact,
    sidenav: <SideNav path={route.path} subnav={subnav} />,
    crumb: <PageMark title={route.title} />
  }
}

export default [
  initRouteItems(user),
  ...contents.subnav.map(item => initRouteItems(item, contents)),
  initRouteItems(orders),
  ...withdraw.subnav.map(item => initRouteItems(item, withdraw)),
  initRouteItems(report),
  initRouteItems(notice),
]