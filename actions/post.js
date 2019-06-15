export const INIT_FINDME_POST = 'INIT_FINDME_POST'
export const FILLUP_FINDME_ISSECRET = 'FILLUP_FINDME_ISSECRET'

export function initFindMePost (userId) {
  return {
    type: INIT_FINDME_POST,
    userId
  }
}

export function fillupFindMeIsSecret (isSecret) {
  return {
    type: FILLUP_FINDME_ISSECRET,
    isSecret,
  }
}