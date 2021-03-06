import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors'
import RoundButton from '../common/RoundButton'

export default function Footer({ goNext, submit, isActive, isFinal }) {
  return (
    <View style={styles.container}>
      <RoundButton
        height={60}
        text={isFinal ? '등록하기' : '다음으로'}
        isActive={isActive}
        onPress={isFinal ? submit : goNext}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    height: 60,
    borderRadius: 30,
    width: '105%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttonActive,
  },
  buttonInactive: {
    height: 60,
    borderRadius: 30,
    width: '105%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttonInactive,
  },
  buttonText: {
    color: Colors.tintColor,
    fontWeight: '600',
    fontSize: 15,
  }
})