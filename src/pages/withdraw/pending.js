import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import { FORM_CONFIG, DATE_FIELDS } from 'config/form'
import FilterForm from 'components/BasicForm'

class Pending extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <FilterForm
            formItemList={FORM_CONFIG.pending}
            dateFieldName={DATE_FIELDS.pending}
          />
        </Card>
      </Fragment>
    )
  }
}

export default Pending