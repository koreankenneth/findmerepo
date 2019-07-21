import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors'

export default function Footer({ goNext, submit, isActive, isFinal }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={isActive ? styles.buttonActive : styles.buttonInactive}
        disabled={!isActive}
        onPress={isFinal? submit : goNext}
      >
        <Text
          style={styles.buttonText}
        >
          {isFinal ? '등록하기' : '다음으로'}
        </Text>
      </TouchableOpacity>
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