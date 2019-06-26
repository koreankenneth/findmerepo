import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, ScrollView } from 'react-native'
import FindMeItem from './FindMeItem'
import { loadFindMe } from '../../utils/api'
import { setFindMe } from '../../actions/findme'
import { AppLoading } from 'expo'

class FindMeContainer extends Component {
  state = {
    ready: false,
    order: 'latest',
  }

  componentDidMount() {
    const { dispatch } = this.props
    loadFindMe()
      .then((findme) => dispatch(setFindMe(findme)))
      .then(() => this.setState({ ready: true }))
  }


  render() {
    const { ready } = this.state
    const { findme, navigation } = this.props

    if (ready === false) {
      return <AppLoading />
    }

    return (
        <ScrollView style={styles.findMeList}>
          {
            Object.keys(findme).map((key) => {
              return (
                <FindMeItem
                  id={key}
                  navigation={navigation}
                />
              )
            })
          }
        </ScrollView>
    )
  }
}


function mapStateToProps(state) {
  return {
    findme: state.findme
  }
}

export default connect(mapStateToProps)(FindMeContainer)

const styles = StyleSheet.create({
  findMeList: {
    flex:1,
    alignItems: 'center',
  }
});