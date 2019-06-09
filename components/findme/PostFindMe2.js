import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'

class PostFindMe2 extends Component {
  render() {
    return (
      <View>
        <Text>
          PostFindMe2
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'PostFindMe3'
          )}
        >
          <Text>
            Go to PostFindMe3 >>> 
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(PostFindMe2)