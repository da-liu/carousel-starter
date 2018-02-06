import { combineReducers } from 'redux'
import PhotosReducer from './reducer_photos'
import LoadingReducer from './reducer_loading'

const rootReducer = combineReducers({
  photos : PhotosReducer,
  loading: LoadingReducer
})

export default rootReducer
