import axios from 'axios'
import Util from './index'
import { Modal } from 'antd'

const util = new Util()

class Axios {
  static ajax(options) {
    let loading = document.getElementById('ajax-loading')
    let baseURL = options.isMock ?
      'https://www.easy-mock.com/mock/5bfd29a9adde2323a2684b18' :
      'test-ms.xiaoyuhb.com'
    let config = {
      url: options.url,
      method: options.method,
      baseURL,
      timeout: 5000
    }
    let method = options.method.toLowerCase()
    
    // get请求
    if (method === 'get') {
      config.params = options.params
    }
    // post请求
    if (method === 'post') {
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
            // 这里具体看后台返回的数据
            // if (data.code === 0) {}
            // if (data.success) {
            //   resolve(data)
            // } else {
            //   Modal.error({ title: '数据请求失败', content: `${data.msg}` })
            // }
            resolve(data)
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

  static request(self, url, method, params, isMock) {
    this.ajax({ url, method, params, isMock })
      .then(res => {
        console.log(res)
        let result = res.result
        result.forEach((i, index) => { i.key = index })
        self.setState(() => ({
          dataSource: result,
          pagination: util.pagination(res, console.log) // 调试时需要修改
        }))
      })
  }
}

export default Axios