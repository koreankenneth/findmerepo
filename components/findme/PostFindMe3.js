import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'

class PostFindMe3 extends Component {
  render() {
    return (
      <View>
        <Text>
          PostFindMe3
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'PostFindMe4'
          )}
        >
          <Text>
            Go to PostFindMe4 >>> 
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

export default connect(mapStateToProps)(PostFindMe3)