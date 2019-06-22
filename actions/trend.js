export const SET_TREND = 'SET_TREND'

export function setTrend (trend) {
  return {
    type: SET_TREND,
    trend,
  }
}