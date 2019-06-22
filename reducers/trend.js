import { SET_TREND } from '../actions/trend'

export default function trend (state = {}, action) {
  switch (action.type) {
    case SET_TREND :
      return {
        ...state,
        ...action.trend,
      }
    default :
      return state
  }
}