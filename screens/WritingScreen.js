import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import FindMeWriteScreen from './findme/WriteScreen'
import TrendWriteScreen from './trend/TrendWriteScreen'
import { tapNames } from '../utils/constants'

class WritingScreen extends Component {
  render() {
    const { currentTap } = this.props

    switch (currentTap) {
      case tapNames.FINDME:
        return (
          <View style={styles.container} >
            <FindMeWriteScreen navigation={this.props.navigation} />
          </View>
        )
      case tapNames.TREND:
        return (
          <View style={styles.container} >
            <TrendWriteScreen navigation={this.props.navigation} />
          </View>
        )
      default:
        return (
          <View style={styles.container} >
            <FindMeWriteScreen />
          </View>
        )
    }
  }
}

WritingScreen.navigationOptions = {
  title: '',
  headerStyle: {
    height: 0,
  }
}

function mapStateToProps(state) {
  return {
    currentTap: state.app.currentTap,
  }
}

export default connect(mapStateToProps)(WritingScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})