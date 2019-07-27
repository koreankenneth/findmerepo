import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, Image } from 'react-native'
import FindMeItem from './Item'
import { setFindMe } from '../../../actions/findme'
import { AppLoading } from 'expo'
import { loadFindMe } from '../../../utils/api'
import { getPostStatus } from '../../../utils/helper'

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
    const { findme, page, navigation } = this.props

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <ScrollView contentContainerStyle={styles.findMeList}>
        <Image source={require('../../../assets/images/drawable-xxxhdpi/img_banner_findme.png')} style={styles.banner} />
        {
          Object.keys(findme)
          .filter((key) => {
              switch (page) {
                case 'find':
                  return !getPostStatus(findme[key]).isExpired
                case 'notfound':
                  return getPostStatus(findme[key]).isExpired
                case 'found':
                  return false
                default:
                  return true
              }
            })
            .map((key) => {
              return (
                <FindMeItem
                  index={key}
                  navigation={navigation}
                />
              )
            })
        }
      </ScrollView>
    )
  }
}


function mapStateToProps(state, { page }) {
  return {
    findme: state.findme,
    page: page,
  }
}

export default connect(mapStateToProps)(FindMeContainer)

const styles = StyleSheet.create({
  banner: {
    width: '95%',
    height: 130,
    borderRadius: 11,
    resizeMode: 'contain',
  },
  findMeList: {
    flex: 1,
    alignItems: 'center',
  }
});