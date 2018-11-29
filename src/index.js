import React from 'react'
import ReactDOM from 'react-dom'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'antd'
import App from './App'
// import Test from './test'
import './index.less'

const root = document.getElementById('root')
const main = <LocaleProvider locale={zhCN}><App /></LocaleProvider>

ReactDOM.render(main, root);

/** 注1：产品中使用了less和antd的按需加载（样式），less版本要指定@^2.7.3 **/
/** 注2：locale-provider用于修改本地文案（中文） **/