import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from 'reactstrap'

import { startLoading } from '~/src/actions/action_loading'
import Loading from './containers/Loading/'
import Carousel from './containers/Carousel/'
import './App.css'

class App extends Component {
  static propTypes = {
    startLoading: PropTypes.func
  }

  componentWillMount () {
    this.props.startLoading()
  }

  render() {
    return (
      <div className="App">
        <Loading />
        <Carousel />
      </div>
    );
  }
}

export default connect(null, {
  startLoading
})(App)
