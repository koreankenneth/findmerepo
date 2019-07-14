import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress'

export default function CountDownBar({timestamp}) {

  getTimeDiff = (timestamp) => {
    const creationDateTime = Date.parse(timestamp)
    const numberOfHours = Math.abs(Date.now() - creationDateTime) / 36e5;
    const Days = Math.floor(numberOfHours / 24)
    const Remainder = numberOfHours % 24
    const Hours = Math.floor(Remainder)
    const Minutes = Math.floor(60 * (Remainder - Hours))

    if (Days) return `${Days}일 ${Hours}시간 남음`
    if (Hours) return `${Hours}시간 ${Minutes}분 남음`
    return `${Minutes}분 남음`
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
    alignItems: 'center'
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
    fontSize: 10,
    fontWeight: '800',
    color: '#dd9031',
    letterSpacing: 0,
  },
})