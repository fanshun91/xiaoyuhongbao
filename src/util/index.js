class Util {
  // 设置本地存储
  setStorage(name, value) {
    // 区分信息属于 基本 or 引用 类型
    let type = typeof value
    if (type === 'object') {
      window.localStorage.setItem(name, JSON.stringify(value))
    } else if (['string', 'number', 'boolean'].indexOf(type) > -1) {
      window.localStorage.setItem(name, value)
    } else { 
      throw TypeError('无效的localstorage储存值！')
    }
  }
  // 获取本地存储
  getStorage(name) {
    let value = window.localStorage.getItem(name)
    return !!value ? JSON.parse(value) : ''
  }
  // 删除本地存储
  removeStorage(name) {
    window.localStorage.removeItem(name)
  }

  // 登录 校验用户信息
  login(info) {
    console.log(info)
  }
  // 登出
  logout() {
    console.log('user logout!')
  }

  // 分页配置
  pagination(res, callback) {
    return {
      current: res.pageNumber,
      pageSize: res.pageSize,
      total: res.totalCount,
      showSizeChanger: true,
      showQuickJumper: true,
      pageSizeOptions: ['10', '20', '30'],
      showTotal: total => `共 ${total} 条数据`,
      // 页码切换，参数 1. page: 新页码; 2. size: 每页条数
      onChange: (page, size) => { 
        callback(page, size)
      },
      // 显示条数切换，参数 1. current: 当前页; 2. size: 每页条数
      onShowSizeChange: (current, size) => { 
        callback(current, size)
      }
    }
  }
}

export default Util