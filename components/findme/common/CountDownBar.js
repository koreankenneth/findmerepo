import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress'
import Colors from '../../../constants/Colors'

export default function CountDownBar({ postStatus }) {
const {isExpired, now, expiryDateTime, remainingDateTime } = postStatus
  return (
    <View style={styles.expContainer}>
      <View style={styles.expAreaLeft}>
        <Progress.Bar
          progress={isExpired ? 1: now / expiryDateTime}
          height={8}
          width={null}
          color={isExpired ? Colors.red : Colors.orange}
          unfilledColor={'#eeeeee'}
          borderWidth={0}
        />
      </View>
      <View style={styles.expAreaRight}>
        <Text style={[styles.expText, {color: isExpired ? Colors.red : Colors.orange}]}>{`${remainingDateTime.toString()} ${isExpired ? '초과' : '남음'}`}</Text>
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
    letterSpacing: 0,
  },
})