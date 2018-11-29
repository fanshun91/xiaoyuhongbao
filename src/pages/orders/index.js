import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import { FORM_CONFIG, DATE_FIELDS } from 'config/form'
import FilterForm from 'components/BasicForm'

class Orders extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <FilterForm
            formItemList={FORM_CONFIG.orders}
            dateFieldName={DATE_FIELDS.orders}  
          />
        </Card>
      </Fragment>
    )
  }
}

export default Orders
