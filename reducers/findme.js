import { SET_FINDME } from '../actions/findme'

export default function findme (state = {}, action) {
  switch (action.type) {
    case SET_FINDME :
      return {
        ...state,
        ...action.findme,
      }
    default :
      return state
  }
}