import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { loadFindMe } from '../../utils/api'
import { setFindMe } from '../../actions/findme'
import { AppLoading } from 'expo'

class Test extends Component {

  state = {
    ready: false,
  }
  componentDidMount() {
    const { dispatch } = this.props
    loadFindMe()
      .then((findme) => dispatch(setFindMe(findme)))
      .then(() => this.setState({ ready: true }))
  }

  render() {
    const { ready } = this.state
    const { findme } = this.props

    if (ready === false) {
      return <AppLoading />
    }
    console.log(findme ? 'true!!' : 'false!!')

    return (
      <View>
        {
          Object.keys(findme).map((key) => {
            return (
              <Text>{JSON.stringify(findme[key])}</Text>
            )
          })
        }
      </View>
    );
  }

}

function mapStateToProps(state) {
  return {
    findme: state.findme
  }
}

export default connect(mapStateToProps)(Test)
