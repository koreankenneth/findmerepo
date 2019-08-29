export const SET_CURRENT_TAP = 'SET_CURRENT_TAP'
export const WRITE_FINDME_DRAFT = 'WRITE_FINDME_DRAFT'

export const WRITE_TREND_DRAFT = 'WRITE_TREND_DRAFT'
export const WRITE_TREND_RECOMMEND_DRAFT = 'WRITE_TREND_RECOMMEND_DRAFT'

export function setCurrentTap (currentTap) {
  return {
    type: SET_CURRENT_TAP,
    currentTap,
  }
}

export function writeFindMeDraft (draft) {
  return {
    type: WRITE_FINDME_DRAFT,
    draft,
  }
}

export function writeTrendDraft (draft) {
  return {
    type: WRITE_TREND_DRAFT,
    draft,
  }
}

export function writeTrendRecommendDraft (draft) {
  return {
    type: WRITE_TREND_RECOMMEND_DRAFT,
    draft,
  }
}