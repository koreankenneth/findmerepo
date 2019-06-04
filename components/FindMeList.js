import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FindMeItem from './FindMeItem'

class FindMe extends Component {

  render() {
    return (
      <View>
        <FindMeItem />
        <FindMeItem />
        <FindMeItem />
      </View>
    )
  }
}

export default FindMe