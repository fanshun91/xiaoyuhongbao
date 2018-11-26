import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Card } from 'antd'
import { INIT_PATH_KEY as rootPath } from 'config/nav'
import './index.less'

const NoMatch = props => {
  let goback = () => {
    props.history.push(rootPath)
    window.location.reload()
  }
  return (
    <Card>
      <div className="nomatch-container">
        <h2><span><i>O</i>MG?!</span>404</h2>
        <p>Unbelievable~ 恭喜你喜提<span className="gold">彩蛋</span>！但这并没有你想要的页面. . .<span role="img" aria-label="鬼脸">😜</span> </p>
        <Link className="nomatch-goback" to="/" onClick={goback}>我要回家</Link>
      </div>
    </Card>
  )
}

export default withRouter(NoMatch)
