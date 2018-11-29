import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import { FORM_CONFIG, DATE_FIELDS } from 'config/form'
import FilterForm from 'components/BasicForm'

class Record extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <FilterForm 
            formItemList={FORM_CONFIG.record} 
            dateFieldName={DATE_FIELDS.record}
          />
        </Card>
      </Fragment>
    )
  }
}

export default Record
