import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import { FORM_CONFIG, DATE_FIELDS } from 'config/form'
import FilterForm from 'components/BasicForm'

class Hongbao extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <FilterForm
            formItemList={FORM_CONFIG.hongbao}
            dateFieldName={DATE_FIELDS.hongbao} 
          />
        </Card>
      </Fragment>
    )
  }
}

export default Hongbao