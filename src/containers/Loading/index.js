import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { startLoading } from '~/src/actions/action_loading'
import Spinner from './spinner.svg'

export const Loading = (props) => {
  if (props.loading) {
    return <div className="loading"><img src={Spinner} /></div>
  } else {
    return null
  }
}

const mapStateToProps = (state) => ({
  loading : state.loading
})

export default connect(mapStateToProps, {
  /** */
})(Loading)
