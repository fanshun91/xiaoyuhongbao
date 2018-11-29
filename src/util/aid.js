// import React from 'react'
import { Modal } from 'antd'
import { INIT_PATH_KEY as rootPath } from 'config/nav'

const confirm = Modal.confirm

export default {
  // 表格操作相关 /////////////////////////////
  getUserableStatus(status) {
    return status === 1 ? '启用' : '禁用'
  },
  toggleUserableStatus(status) {
    return status === 1 ? '禁用' : '启用'
  },
  handleStatusChange(status) {
    confirm({
      centered: true,
      title: `确定要将该条信息状态修改为${status}?`,
      onOk() {
        console.log('已经修改！')
      },
      onCancel() {
        console.log('取消修改！')
      },
    })
  },
  getSuitableHeight() {
    let winHeigth = window.innerHeight
    let occupiedHeight = 520
    let height = winHeigth - occupiedHeight
    return height
  },
  isDetailPath(path) {
    return (path !== rootPath && path.indexOf(rootPath) > -1)
  }
}