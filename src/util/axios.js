import axios from 'axios'
import Util from './index'
import { Modal } from 'antd'

const util = new Util()

class Axios {
  static ajax(options) {
    let loading = document.getElementById('ajax-loading')
    let baseURL = options.isMock ?
      'https://www.easy-mock.com/mock/5bfd29a9adde2323a2684b18' :
      '//test-ms.xiaoxiaohb.com'
    let config = {
      url: options.url,
      method: options.method,
      baseURL,
      timeout: 5000
    }
    let method = options.method.toLowerCase()
    
    // get请求
    if (method === 'get') {
      config.params = options.data
    }
    // post请求
    if (method === 'post' || method === 'put') {
      config.data = options.data
    }
    // 显示 ‘加载中’ 提示，showLoading属性来控制它在数据加载时是否显示 
    if (options && options.showLoading !== false) {
      loading.style.display = 'block'
    }

    return new Promise((resolve, reject) => {
      axios(config)
        .then(res => {
          if (options && options.showLoading !== false) {
            loading.style.display = 'none'
          }
          if (res.status === 200) {
            let data = res.data
            if (data.code === 1) {
              resolve(data)
            } else {
              Modal.error({ title: '数据加载失败', content: `${data.msg}` })
            }
          } else {
            reject(res.data)
          }
        })
        .catch(err => {
          // 请求失败时的处理
          if (options && options.showLoading !== false) {
            loading.style.display = 'none'
          }
          Modal.error({title: '请求时出错', content: `${err}`})
        })
    })
  }

  // 查询（表格数据）
  static request(options, self) {
    this.ajax(options)
      .then(res => {
        let data = res.data
        let list = data.list
        list.forEach((i, index) => {
          i.key = index
          i.id = index + 1
        })
        self.setState(() => ({
          dataSource: list,
          pagination: util.pagination(data, (num, size) => {
            let newData = {
              pageNumber: num,
              pageSize: size
            }
            // 更新User的state状态
            self.state.params = newData
            // 更新参数状态
            options.data = newData
            this.request(options, self)
          })
        }))
      })
  }
  
  // 获取单个用户的详情信息
  static getUserDetail(params, self) {
    this.ajax({
      url: '/user',
      method: 'get',
      data: params
    })
      .then(res => {
        let info = res.data
        self.setState(() => ({ info }))
      })
  }
  
  // 请求变更账户状态
  static changeAccountAvailable(data, record, self) {
    this.ajax({
      url: '/user/disable',
      method: 'post',
      data
    })
      .then(res => {
        if(res.code === 1) {
          this.updateUserData({
            userId: record.userId,
            openId: record.openId,
            userName: record.userName
          }, self)
        } 
      })
      .catch(err => {
        console.log(err)
      })
  }

  // 更新用户数据
  static updateUserData(params, self) {
    this.ajax({
      url: '/user',
      method: 'put',
      data: params
    })
      .then(res => {
        if (res.code === 1) {
          const {params} = self.state
          // 更新成功，重新获取数据
          this.request({
            url: '/user/query',
            method: 'get',
            data: params
          }, self)
        }
      })
  }
}

export default Axios