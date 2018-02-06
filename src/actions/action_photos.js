import axios from 'axios'

export const GET_PHOTOS = 'GET_PHOTOS'

export function getPhotos (types = []) {
  let params = {}
  if (types.includes('cats')) {
    params.cats = true
  }
  if (types.includes('dogs')) {
    params.dogs = true
  }
  const request = axios({
    url: '/api/photos',
    params
  })
  return {
    type: GET_PHOTOS,
    payload: request
  }
}
