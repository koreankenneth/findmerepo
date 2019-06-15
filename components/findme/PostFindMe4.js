import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'

class PostFindMe4 extends Component {
  render() {
    return (
      <View>
        <Text>
          PostFindMe4
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'PostFindMe5'
          )}
        >
          <Text>
            Go to PostFindMe5 >>> 
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

export default connect(mapStateToProps)(PostFindMe4)