import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from 'reactstrap'
import equal from 'deep-equal'
import get from 'lodash/get'

import { startLoading, loadingFinished } from '~/src/actions/action_loading'
import { getPhotos } from '~/src/actions/action_photos'
import './Carousel.css'

class App extends Component {
  static propTypes = {
    photos: PropTypes.array,
    getPhotos: PropTypes.func,
    startLoading: PropTypes.func,
    loadingFinished: PropTypes.func
  }

  state = {
    selectedType: ['cats'],
    currentPhoto: 0
  }

  componentWillMount () {
    // ***
    // Your implementation goes here
    // ***
  }

  componentWillReceiveProps (nextProps) {
    // ***
    // Your implementation goes here
    // ***
  }

  onTypeBtnClick(selected) {
    const index = this.state.selectedType.indexOf(selected);
    if (index < 0) {
      this.state.selectedType.push(selected);
    } else {
      this.state.selectedType.splice(index, 1);
    }
    this.setState({ selectedType: [...this.state.selectedType] })

    this.props.startLoading()
    this.props.getPhotos(this.state.selectedType)
    this.setState({ currentPhoto: 0})
  }

  render() {
    let { photos } = this.props
    let { currentPhoto } = this.state
    return (
      <div className="carousel-wrapper">
        <ButtonGroup>
          <Button color="primary"
            onClick={() => this.onTypeBtnClick('dogs')}
            active={this.state.selectedType.includes('dogs')}>Dogs</Button>
          <Button color="primary"
            onClick={() => this.onTypeBtnClick('cats')}
            active={this.state.selectedType.includes('cats')}>Cats</Button>
        </ButtonGroup>
        <div className="carousel">
          <Button
            active={currentPhoto > 0}
            onClick={() => {
              // ***
              // Your implementation goes here
              // ***
            }}
            className="carousel-control prev"></Button>
          <div className="photo">
            {
              photos.length > 0 ? (
                <img src={photos[currentPhoto]} />
              ) : 'no photos'
            }
          </div>
          <Button
            active={currentPhoto < this.props.photos.length - 1}
            onClick={() => {
              // ***
              // Your implementation goes here
              // ***
            }}
            className="carousel-control next"></Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photos : state.photos
})

export default connect(mapStateToProps, {
  getPhotos,
  startLoading,
  loadingFinished
})(App)
