import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class PostItem extends Component {
  render() {
    return (
      <View>
        <Text>
          Please choose which item you want to post.
      </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'PostFindMe1'
          )}
        >
          <Text>
            Find Me!
        </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default PostItem