import { SET_FINDME } from '../actions/findme'
import { FILLUP_FINDME_ISSECRET } from '../actions/findme'
import { INIT_FINDME_POST } from '../actions/findme'

export default function findme (state = {}, action) {
  switch (action.type) {
    case SET_FINDME :
      return {
        ...state,
        ...action.findme,
      }
    case INIT_FINDME_POST :
      return {
        ...state,
        findMePost: {
          id: '',
          title: '',
          author: action.userId,
          timestamp: '',
          text: '',
          isSecret: false,
          item: {
            name: '',
            brand: '',
            imageURL: '',
          },
          comments: [],
          followers: []
        }
      }
    case FILLUP_FINDME_ISSECRET :
      return {
        ...state,
        findMePost: {
          ...state.findMePost,
          isSecret: action.isSecret,
        }
      }
    default :
      return state
  }
}