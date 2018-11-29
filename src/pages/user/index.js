import React, { Component, Fragment } from 'react'
import { Card, Table } from 'antd'
import FilterForm from 'components/BasicForm'
import { FORM_CONFIG, DATE_FIELDS } from 'config/form'
import { table } from 'config/table'
import Util from 'util'
import axios from 'util/axios'
import aid from 'util/aid'

const util = new Util()

class User extends Component {
  state = {
    dataSource: [],
    pagination: {}
  }
  // params = {
  //   page: 1
  // }
  // 获取已提交的form数据
  getFormValues = data => {
    console.log('u ',data)
  }
  // 请求
  request = data => {
    let self = this
    axios.ajax({
      url: '/user1',
      method: 'post',
      data,
      isMock: true
    })
      .then(res => {
        console.log(res)
        let result = res.result
        result.forEach((i, index) => { i.key = index })
        this.setState(() => ({
          dataSource: result,
          pagination: util.pagination(res, (num, size) => {
            self.request({
              pageNumber: num,
              pageSize: size
            })
          })
        }))
      })
  }
  // 渲染
  render() {
    const {dataSource, pagination} = this.state
    const height = aid.getSuitableHeight()
    return (
      <Fragment>
        <Card>
          <FilterForm 
            formItemList={FORM_CONFIG.user}
            dateFieldName={DATE_FIELDS.user}
            handleFormSubmit={this.getFormValues}
          />
        </Card>
        <Card>
          <Table
            bordered
            columns={table.user}
            dataSource={dataSource}
            pagination={pagination}
            scroll={{ x: 1548, y: height }}
          />
        </Card>
      </Fragment>
    )
  }
  componentDidMount() {
    // let params = { page: this.params.page }
    // axios.request(this, '/user', 'get', params, true)
    let data = { pageNumber: 1, pageSize: 10 }
    // axios post
    // request(指向, url, method, data, ismock)
    this.request(data)
  }
}

export default User