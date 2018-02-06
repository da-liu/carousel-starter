export const LOADING = 'LOADING'
export const LOADING_FINISHED = 'LOADING_FINISHED'

export function startLoading () {
  return {
    type: LOADING
  }
}

export function loadingFinished () {
  return {
    type: LOADING_FINISHED
  }
}
