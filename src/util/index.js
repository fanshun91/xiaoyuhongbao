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
}

export default Util