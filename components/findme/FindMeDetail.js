import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class FindMeDetail extends Component {
  render() {
    const { findme } = this.props
    const { id } = this.props.navigation.state.params

    return (
      <View>
        <Text>{findme[id].text}</Text>
      </View>
    )
  }
}

function mapStateToProps ({ findme }) {
  return {
    findme
  }
}

export default connect(mapStateToProps)(FindMeDetail)