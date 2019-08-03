
export function getTimeDiff(timestamp) {
  const creationDateTime = new Date(timestamp)
  const now = Date.now() + 36e5*9 //Timezone: + 9:00 (Seoul)
  const numberOfHours = Math.abs(now - creationDateTime) / 36e5;
  const Days = numberOfHours < 1 ? 0 : Math.floor(numberOfHours / 24)
  const Remainder = numberOfHours < 1 ? numberOfHours : numberOfHours % 24
  const Hours = Math.floor(Remainder)
  const Minutes = Math.floor(60 * (Remainder - Hours))

  return {
    days: Days,
    hours: Hours,
    Minutes: Minutes,
    toString: () => {
      if (Days > 2) {
        return `${Days}일`
      } else if (Days) {
        return `${Days}일 ${Hours}시간`
      } else if (Hours > 9) {
        return `${Hours}시간`
      } else if (Hours) {
        return `${Hours}시간 ${Minutes}분`
      } else {
        return `${Minutes}분`
      }
    }
  }
}

export function formatDateTime(formatType, timestamp) {
  const objDate = new Date(timestamp)
  const year = objDate.getFullYear()
  const month = objDate.getMonth()
  const date = objDate.getDate()
  let result = ''

  switch (formatType) {
    case 'YYYY.MM.DD':
      result = `${year}.${month}.${date}`
      break
    default:
      result = creationDateTime.toString()
      break
  }
  return result
}

export function getPostStatus(findMePost) {
  const millisecondsOf1Day = 864e5 // 24 * 60 * 60 * 1000 = 86400000
  const millisecondsOf2Weeks = millisecondsOf1Day * 14
  const now = Date.now() + 36e5*9 //Timezone: + 9:00 (Seoul)

  const creationDateTime = Date.parse(findMePost.creationDateTime)

  const expiryDateTime = creationDateTime + millisecondsOf2Weeks

  const remainingTime = expiryDateTime - now

  return {
    now: now,
    creationDateTime: creationDateTime,
    expiryDateTime: expiryDateTime,
    isExpired: remainingTime <= 0,
    remainingTimeMS: remainingTime,
    remainingDateTime: getTimeDiff(expiryDateTime),
    elapsedDateTime: getTimeDiff(creationDateTime),
    millisecondsOf1Day,
    millisecondsOf2Weeks,
  }
}