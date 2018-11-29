import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import { FORM_CONFIG, DATE_FIELDS } from 'config/form'
import FilterForm from 'components/BasicForm'

class Exception extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <FilterForm 
            formItemList={FORM_CONFIG.exception} 
            dateFieldName={DATE_FIELDS.exception}
          />
        </Card>
      </Fragment>
    )
  }
}

export default Exception
