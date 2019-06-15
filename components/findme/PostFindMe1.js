import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity, Switch } from 'react-native'
import { initFindMePost, fillupFindMeIsSecret } from '../../actions/post'

class PostFindMe1 extends Component {
  state =  {
    isSecret: false
  }

  componentDidMount () {
    const { dispatch } = this.props

    dispatch(initFindMePost('nelo13'))
  }

  handleChange = (isSecret)  => {
    this.setState({isSecret})
  }

  render() {
    return (
      <View>
        <Text>
          Do you want your post to be hidden?
        </Text>
          <Switch 
            onValueChange = {(isSecret) => this.handleChange(isSecret)} 
            value = {this.state.isSecret}
          />
        <TouchableOpacity
          onPress={() => {
            const { dispatch } = this.props
            dispatch(fillupFindMeIsSecret(this.state.isSecret))
            this.props.navigation.navigate(
            'PostFindMe2'
          )}}
        >
          <Text>
            Go to PostFindMe2 >>> 
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps({ post }) {
  return {
    findMePost: post.findMePost
  }
}

export default connect(mapStateToProps)(PostFindMe1)