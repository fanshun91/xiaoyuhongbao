import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import { FORM_CONFIG, DATE_FIELDS } from 'config/form'
import FilterForm from 'components/BasicForm'

class Notice extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <FilterForm
            formItemList={FORM_CONFIG.notice}
            dateFieldName={DATE_FIELDS.notice}
          />
        </Card>
      </Fragment>
    )
  }
}

export default Notice
