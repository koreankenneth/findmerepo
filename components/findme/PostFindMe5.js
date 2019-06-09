import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'

class PostFindMe5 extends Component {
  render() {
    return (
      <View>
        <Text>
          PostFindMe5
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'Home'
          )}
        >
          <Text>
            Finish 
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

export default connect(mapStateToProps)(PostFindMe5)