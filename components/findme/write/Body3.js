import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'


class Body3 extends Component {
  render () {
    return (
      <View>
        <Text>Body3</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Body3)
