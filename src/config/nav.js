// 页面初始路径
export const INIT_PATH_KEY = '/user'
// 导航路径
export const DEFAULT_NAV_PATH = {
  // 用户管理
  user: {
    title: '用户管理',
    path: '/user',
    subnav: []
  },
  // 内容管理
  contents: {
    title: '内容管理',
    path: '/contents',
    subnav: [
      {
        title: '红包通知',
        path: '/contents/hongbao'
      }, 
      {
        title: '用户留言',
        path: '/contents/message'
      }
    ]
  },
  // 订单管理
  orders: {
    title: '订单管理',
    path: '/orders',
    subnav: []
  },
  // 提现管理
  withdraw: {
    title: '提现管理',
    path: '/withdraw',
    subnav: [
      {
        title: '提现记录',
        path: '/withdraw/record'
      },
      {
        title: '待审核提现',
        path: '/withdraw/pending'
      },
      {
        title: '异常提现',
        path: '/withdraw/exception'
      }
    ]
  },
  // 举报管理
  report: {
    title: '举报管理',
    path: '/report',
    subnav: []
  },
  // 消息提醒
  notice: {
    title: '消息提醒',
    path: '/notice',
    subnav: []
  }
}
