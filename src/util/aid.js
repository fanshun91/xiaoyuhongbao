// import React from 'react'
import { Modal } from 'antd'
import { INIT_PATH_KEY as rootPath } from 'config/nav'
import axios from 'util/axios'

const confirm = Modal.confirm

export default {
  // 表格操作相关 /////////////////////////////
  getUserableStatus(status) {
    // 0.禁用 1.启用
    return status === 0 ? '启用' : '禁用'
  },
  toggleUserableStatus(status) {
    return status === 0 ? '禁用' : '启用'
  },
  handleStatusChange(status, record, self) {
    confirm({
      centered: true,
      title: `确定要将该条信息状态修改为${status}?`,
      onOk() {
        axios.changeAccountAvailable(
          { userId: record.userId },
          record,
          self
        )
      },
      onCancel() {
        // 无操作
        return false
      },
    })
  },
  getSuitableHeight() {
    let winHeigth = window.innerHeight
    let occupiedHeight = 520
    let height = winHeigth - occupiedHeight
    height = height < 256 ? 256 : height
    return height
  },
  isDetailPath(path) {
    return (path !== rootPath && path.indexOf(rootPath) > -1)
  },
  // 时间格式转换(准确到分钟)
  getFormatedTime(time) {
    let d = new Date(time)
    let year = d.getFullYear()
    let month = d.getMonth() + 1
    let day = d.getDate()
    let hour = d.getHours()
    let minute = d.getMinutes()
    let moreThanNine = value => (value > 9 ? value : ('0' + value)) 
    month = moreThanNine(month)
    day = moreThanNine(day)
    hour = moreThanNine(hour)
    minute = moreThanNine(minute)
    return `${year}/${month}/${day} ${hour}:${minute}`
  }
}