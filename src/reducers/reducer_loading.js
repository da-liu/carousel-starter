import { LOADING, LOADING_FINISHED } from '~/src/actions/action_loading'

export default function (state = true, action) {
  switch (action.type) {
    case LOADING:
      return true
    case LOADING_FINISHED:
      return false
  }
  return state
}
