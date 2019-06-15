import { FILLUP_FINDME_ISSECRET } from '../actions/post'
import { INIT_FINDME_POST } from '../actions/post'

export default function post (state = {}, action) {
  switch (action.type) {
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