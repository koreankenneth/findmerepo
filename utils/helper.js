
export function getAgeOfPost (timestamp) {
  const creationDateTime = Date.parse(timestamp)
  const numberOfHours = Math.abs(Date.now() - creationDateTime) / 36e5;
  const Days = Math.floor(numberOfHours / 24)
  const Remainder = numberOfHours % 24
  const Hours = Math.floor(Remainder)
  const Minutes = Math.floor(60 * (Remainder - Hours))

  if (Days) return `${Days}일 전`
  if (Hours) return `${Hours}시간 전`
  return `${Minutes}분 전`
}
