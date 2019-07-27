import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress'

export default function CountDownBar({timestamp}) {
  getTimeDiff = (timestamp) => {
    const millisecondsOf1Day = 864e5 // 24 * 60 * 60 * 1000 = 86400000
    const millisecondsOf2Week = millisecondsOf1Day * 14
  
    // 1. timestamps를 ms로 전환
    const creationDateTime = Date.parse(timestamp)

    // 2. 14일 더하기
    const expiryDateTime = creationDateTime + millisecondsOf2Week

    // 3. 14일 더한 ms에서 오늘ms 빼기
    let remainingTime = expiryDateTime - Date.now()

    // 4-1. 뺀ms가 음수면? > 시간초과 > ms 를 파싱해서 초과된 시간으로 출력
    // 4-2. 뺀ms가 양수면? ms를 남은시간으로 파싱해서 남은시간으로 출력

    const numberOfHours = Math.abs(remainingTime) / 36e5;
    const Days = Math.floor(numberOfHours / 24)
    const Remainder = numberOfHours % 24
    const Hours = Math.floor(Remainder)
    const Minutes = Math.floor(60 * (Remainder - Hours))
   
    if (remainingTime > 0) {
      if (Days) return `${Days}일 ${Hours}시간 남음`
      if (Hours) return `${Hours}시간 ${Minutes}분 남음`
      return `${Minutes}분 남음`
    } else {
      if (Days) return `${Days}일 ${Hours}시간 초과`
      if (Hours) return `${Hours}시간 ${Minutes}분 초과`
      return `${Minutes}분 초과`
    }
  }

  return (
    <View style={styles.expContainer}>
      <View style={styles.expAreaLeft}>
        <Progress.Bar
          progress={(Math.abs(Date.now() - Date.parse(timestamp))) / (1000*60*60*24*14)}
          height={8}
          width={null}
          color={'#e79e44'}
          unfilledColor={'#eeeeee'}
          borderWidth={0}
        />
      </View>
      <View style={styles.expAreaRight}>
        <Text style={styles.expText}>{this.getTimeDiff(timestamp)}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  expContainer: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expAreaLeft: {
    width: '75%',
  },
  expAreaRight: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expText: {
    marginLeft: '10%',
    fontSize: 12,
    fontWeight: '600',
    color: '#dd9031',
    letterSpacing: 0,
  },
})