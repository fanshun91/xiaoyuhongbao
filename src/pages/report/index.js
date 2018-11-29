import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import { FORM_CONFIG, DATE_FIELDS } from 'config/form'
import FilterForm from 'components/BasicForm'

class Report extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <FilterForm
            formItemList={FORM_CONFIG.report}
            dateFieldName={DATE_FIELDS.report}
          />
        </Card>
      </Fragment>
    )
  }
}

export default Report
