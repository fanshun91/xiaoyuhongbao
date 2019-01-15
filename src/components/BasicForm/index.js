import React, { PureComponent } from 'react'
import { Form, Input, Select, DatePicker, Button } from 'antd'
import { FORM_ITEM_TYPE as tp, DATE_FIELDS_EXT as dfx } from 'config/form'
import  './index.less'

const FormItem = Form.Item
const Option = Select.Option
const timeFormat = "YYYY-MM-DD hh:mm"

class FilterForm extends PureComponent {
  state = {
    endOpen: false
  }
  // 日期组件开始时间
  handleStartOpenChange = open => {
    if (!open) {
      this.setState(() => ({ endOpen: true }))
    }
  }
  // 日期组件结束时间
  handleStartEndChange = open => {
    this.setState(() => ({ endOpen: open }))
  }
  // 处理表单提交
  handleSubmit = e => {
    e.preventDefault()
    const props = this.props
    props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        // Moment时间格式化
        const from = props.dateFieldName + dfx.start
        const to = props.dateFieldName + dfx.end
        const dateFrom = fieldsValue[from]
        const dateTo = fieldsValue[to]
        const timeStart = dateFrom == null ? undefined : dateFrom.format(timeFormat)
        const timeEnd = dateTo == null ? undefined : dateTo.format(timeFormat)
        // 重组数据
        const data = {
          ...fieldsValue,
          [from]: timeStart,
          [to]: timeEnd
        }
        // 提交到副组件
        props.handleFormSubmit(data)
      }
    })
  }
  // 清空搜索状态
  resetForm = () => {
    this.props.form.resetFields()
  }
  // 初始化表单各项
  initFormItems() {
    const { getFieldDecorator } = this.props.form
    const list = this.props.formItemList
    const formItems = []
    // 循环渲染表单项
    if (list && list.length > 0) {
      list.forEach(item => {
        let type = item.type
        let label = item.label
        let field = item.field
        let options = item.options
        let placeholder = item.placeholder
        let config = item.config || {}
        let width = item.width || 88
        // 区分类型
        switch(type) {
          // 生成input(text)
          case tp.INPUT_TEXT:
            const INPUT = (
              <FormItem label={label} key={field}>
                {getFieldDecorator(field, config)(
                  <Input style={{ width: width }} placeholder={placeholder || '请输入'} />
                )}
              </FormItem>
            )
            formItems.push(INPUT)
            break
          // 生产select
          case tp.SELECT:
            const SELECT = (
              <FormItem label={label} key={field}>
                {getFieldDecorator(field, config)(
                  <Select
                    style={{ width: width }}
                    placeholder={placeholder || '请选择'}
                  >
                    {options.map(item => (
                      <Option value={item.id} key={item.id}>{item.name}</Option>
                    ))}
                  </Select>
                )}
              </FormItem>
            )
            formItems.push(SELECT)
            break
          // 生产datepicker(start, end)
          case tp.DATE_RANGE:
            const DATE_START = (
              <FormItem
                label={label}
              >
                {getFieldDecorator(`${field}${dfx.start}`, config)(
                  <DatePicker
                    style={{ width: width }}
                    placeholder={placeholder || '请选择'}
                    showTime
                    format={timeFormat}
                    onOpenChange={this.handleStartOpenChange}
                  />
                )}
              </FormItem>
            )
            const DATE_END = (
              <FormItem
                label={'-'}
                colon={false}
              >
                {getFieldDecorator(`${field}${dfx.end}`, config)(
                  <DatePicker
                    style={{ width: width }}
                    placeholder={placeholder || '请选择'}
                    showTime
                    format={timeFormat}
                    open={this.state.endOpen}
                    onOpenChange={this.handleStartEndChange}
                  />
                )}
              </FormItem>
            )
            const DATE_RANGE = <div className="cust-datepicker-group" key={field + '_range'}>{DATE_START}{DATE_END}</div>
            formItems.push(DATE_RANGE)
            break
          default:
            break
        }
      })
    }
    return formItems
  }
  // 渲染
  render() {
    return (
      <Form
        layout="inline"
        onSubmit={this.handleSubmit}
      >
        {this.initFormItems()}
        <FormItem>
          <Button className="cust-form-subt" type="primary" htmlType="submit">搜索</Button>
          <Button onClick={this.resetForm}>重置</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(FilterForm)