import { SET_CURRENT_TAP, WRITE_FINDME_DRAFT, INIT_FINDME_DRAFT, WRITE_TREND_DRAFT } from '../actions/app'

export default function app(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_TAP:
      return {
        ...state,
        currentTap: action.currentTap,
      }
    case WRITE_FINDME_DRAFT:
      return {
        ...state,
        findMeDraft: action.draft,
      }
    case WRITE_TREND_DRAFT:
        return {
          ...state,
          trendDraft: action.draft,
        }
    default:
      return state
  }
}