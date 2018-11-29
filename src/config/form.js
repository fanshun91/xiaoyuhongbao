// 表单时间字段
export const DATE_FIELDS = {
  user: 'register_time',
  hongbao: 'hongbao_publish_time',
  message: 'message_time',
  orders: 'recharge_time',
  record: 'withdraw_time',
  pending: 'withdraw_time',
  exception: 'withdraw_time',
  report: 'report_time',
  notice: 'message_delivery_time'
}

// 表单时间后缀
export const DATE_FIELDS_EXT = {
  start: '_from',
  end: '_to'
}

// 表单类型
export const FORM_ITEM_TYPE = {
  INPUT_TEXT: 'input_text',
  SELECT: 'select',
  DATE_RANGE: 'date_range'
}

// 页面表单
export const FORM_CONFIG = {
  // @用户管理
  user: [
    // userID
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'userid',
      label: 'userID'
    },
    // 微信openid
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'openid',
      label: '微信openid'
    },
    // 微信unionid
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'unionid',
      label: '微信unionid'
    },
    // 昵称 
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'user_nickname',
      label: '用户昵称'
    },
    // 累计体现金额
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'cumulative_withdraw_amount',
      label: '累计提现金额'
    },
    // 账户状态 
    {
      type: FORM_ITEM_TYPE.SELECT,
      field: 'account_status',
      label: '账号状态',
      config: {
        initialValue: '0'
      },
      options: [
        { id: '0', name: '全部' },
        { id: '1', name: '启用' },
        { id: '2', name: '禁用' }
      ]
    },
    // 注册时间 
    {
      type: FORM_ITEM_TYPE.DATE_RANGE,
      field: DATE_FIELDS.user,
      label: '注册时间',
      width: 180
    }
  ],

  // @红包通知
  hongbao: [
    // 红包通知ID
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'hongbao_id',
      label: '红包通知ID'
    },
    // userID
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'userid',
      label: 'userID'
    },
    // 微信openid
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'openid',
      label: '微信openid'
    },
    // 用户昵称
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'user_nickname',
      label: '用户昵称'
    },
    // 文字内容
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'hongbao_text_content',
      label: '文字内容'
    },
    // 通知状态
    {
      type: FORM_ITEM_TYPE.SELECT,
      field: 'hongbao_status',
      label: '通知状态',
      condfig: {
        initialValue: '0'
      },
      options: [
        { id: '0', name: '全部' },
        { id: '1', name: '启用' },
        { id: '2', name: '禁用' }
      ]
    },
    // 发布时间
    {
      type: FORM_ITEM_TYPE.DATE_RANGE,
      field: 'hongbao_publish_time',
      label: '发布时间',
      width: 180,
    }
  ],

  // @用户留言
  message: [
    // userID
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'userid',
      label: 'userID'
    },
    // 微信openid
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'openid',
      label: '微信openid'
    },
    // 用户昵称
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'user_nickname',
      label: '用户昵称'
    },
    // 留言内容
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'message_content',
      label: '留言内容'
    },
    // 被留言红包通知ID
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'receive_message_hongbaoid',
      label: '被留言红包通知ID'
    },
    // 留言状态
    {
      type: FORM_ITEM_TYPE.SELECT,
      field: 'message_status',
      label: '留言状态',
      initialValue: '0',
      options: [
        { id: '0', name: '全部' },
        { id: '1', name: '启用' },
        { id: '2', name: '禁用' }
      ]
    },
    // 留言时间
    {
      type: FORM_ITEM_TYPE.DATE_RANGE,
      field: 'message_time',
      label: '留言时间',
      width: 180
    }
  ],

  // @订单管理
  orders: [
    // userID
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'userid',
      label: 'userID'
    },
    // 微信openid
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'openid',
      label: '微信openid'
    },
    // 用户昵称
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'user_nickname',
      label: '用户昵称'
    },
    // 订单金额
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'order_form_amount',
      label: '订单金额'
    },
    // 充值时间
    {
      type: FORM_ITEM_TYPE.DATE_RANGE,
      field: 'recharge_time',
      label: '充值时间',
      width: 180
    }
  ],

  // @提现记录
  record: [
    // userID
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'userid',
      label: 'userID'
    },
    // 微信openid
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'openid',
      label: '微信openid'
    },
    // 用户昵称
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'user_nickname',
      label: '用户昵称'
    },
    // 提现金额
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'withdraw_amount',
      label: '提现金额'
    },
    // 提现状态
    {
      type: FORM_ITEM_TYPE.SELECT,
      field: 'withdraw_status',
      label: '提现状态',
      config: {
        initialValue: '0'
      },
      options: [
        { id: '0', name: '全部' },
        { id: '1', name: '提现中' },
        { id: '2', name: '锁定中' },
        { id: '3', name: '已提现' }
      ]
    },
    // 提现时间
    {
      type: FORM_ITEM_TYPE.DATE_RANGE,
      field: 'withdraw_time',
      label: '提现时间',
      width: 180
    }
  ],

  // @待审核提现
  pending: [
    // userID
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'userid',
      label: 'userID'
    },
    // 微信openid
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'openid',
      label: '微信openid'
    },
    // 用户昵称
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'user_nickname',
      label: '用户昵称'
    },
    // 提现金额
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'withdraw_amount',
      label: '提现金额'
    },
    // 提现时间
    {
      type: FORM_ITEM_TYPE.DATE_RANGE,
      field: 'withdraw_time',
      label: '提现时间',
      width: 180
    },
  ],

  // @提现异常
  exception: [
    // userID
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'userid',
      label: 'userID'
    },
    // 微信openid
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'openid',
      label: '微信openid'
    },
    // 用户昵称
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'user_nickname',
      label: '用户昵称'
    },
    // 提现金额
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'withdraw_amount',
      label: '提现金额'
    },
    // 提现时间
    {
      type: FORM_ITEM_TYPE.DATE_RANGE,
      field: 'withdraw_time',
      label: '提现时间',
      width: 180
    },
  ],
  
  // @举报管理
  report: [
    // userID
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'userid',
      label: 'userID'
    },
    // 微信openid
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'openid',
      label: '微信openid'
    },
    // 用户昵称
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'user_nickname',
      label: '用户昵称'
    },
    // 举报状态
    {
      type: FORM_ITEM_TYPE.SELECT,
      field: 'report_status',
      label: '举报状态',
      config: {
        initialValue: '0'
      },
      options: [
        { id: '0', name: '全部' },
        { id: '1', name: '已处理' },
        { id: '2', name: '未处理' }
      ]
    },
    // 举报时间
    {
      type: FORM_ITEM_TYPE.DATE_RANGE,
      field: 'report_time',
      label: '举报时间',
      width: 180
    }
  ],

  // @消息提醒
  notice: [
    // userID
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'userid',
      label: 'userID'
    },
    // 微信openid
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'openid',
      label: '微信openid'
    },
    // 用户昵称
    {
      type: FORM_ITEM_TYPE.INPUT_TEXT,
      field: 'user_nickname',
      label: '用户昵称'
    },
    // 消息提醒类型
    {
      type: FORM_ITEM_TYPE.SELECT,
      field: 'message_type',
      label: '消息提醒类型',
      config: {
        initialValue: '0'
      },
      options: [
        { id: '0', name: '全部' },
        { id: '1', name: '红包通知禁用' },
        { id: '2', name: '红包已被领取完' },
        { id: '3', name: '提现到帐' }
      ]
    },
    // 发送时间
    {
      type: FORM_ITEM_TYPE.DATE_RANGE,
      field: 'message_delivery_time',
      label: '发送时间',
      width: 180
    },
  ]
}
