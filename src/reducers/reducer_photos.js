import { GET_PHOTOS } from '~/src/actions/action_photos'

const INITIAL_STATE = []
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return action.payload.data
    default:
      return state
  }
}
