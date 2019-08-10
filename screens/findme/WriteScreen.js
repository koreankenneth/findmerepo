import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Alert } from 'react-native'
import Intro from '../../components/findme/write/Intro'
import Header from '../../components/findme/write/Header'
import Body1 from '../../components/findme/write/Body1'
import Body2 from '../../components/findme/write/Body2'
import Body3 from '../../components/findme/write/Body3'
import Body4 from '../../components/findme/write/Body4'
import Nav from '../../components/findme/write/Nav'
import Footer from '../../components/findme/write/Footer'
import { writeFindMeDraft } from '../../actions/app'
import { setFindMe } from '../../actions/findme'
import { initFindMeDraft, postFindMe, loadFindMe } from '../../utils/api'
import { AppLoading } from 'expo'
import BrandSearch from '../../components/findme/write/BrandSearch';

class WriteScreen extends Component {
  state = {
    displayType: 'undefined',
    page: 1,
    isOnBrandSearch: false,
    ready: false,
  }

  componentDidMount() {
    const { dispatch } = this.props
    initFindMeDraft()
      .then((draft) => dispatch(writeFindMeDraft(draft)))
      .then(() => this.setState({ ready: true }))
  }

  goBack = () => {
    const currentPage = this.state.page
    this.setState({ page: currentPage - 1 })
  }

  goNext = () => {
    const currentPage = this.state.page
    validateData(currentPage, this.props.findMeDraft)
      ? this.setState({ page: currentPage + 1 })
      : Alert.alert('Error', 'Please select all.')
  }

  goPage = (page) => {
    const currentPage = this.state.page
    validateData(currentPage, this.props.findMeDraft)
      ? this.setState({ page: page })
      : Alert.alert('Error', 'Please select all.')
  }

  goBrandSearch = () => {
    this.setState({ isOnBrandSearch: true })
  }

  onChange = (page, area, value) => {
    const { dispatch, findMeDraft } = this.props
    const draft = {
      ...findMeDraft,
      [page]: {
        ...findMeDraft[page],
        [area]: value,
      }
    }

    dispatch(writeFindMeDraft(draft))
    this.setState({ [area]: value })
  }

  setBrand = (brand) => {
    this.onChange('Body2', 'brand', brand)
    this.setState({ isOnBrandSearch: false })
  }

  setDisplayType = (displayType) => {
    this.onChange('Intro', 'displayType', displayType)
    this.setState({ displayType: displayType })
  }

  submit = () => {
    const { findMeDraft, dispatch } = this.props
    Alert.alert(
      '등록하기',
      '게시물을 등록하시겠습니까?',
      [
        {
          text: 'OK',
          onPress: () => {
            postFindMe(findMeDraft)
              .then(() => {
                initFindMeDraft()
                  .then((draft) => {
                    dispatch(writeFindMeDraft(draft))
                  })
                  .then(() =>
                    this.setState({
                      displayType: 'undefined',
                      page: 1,
                      isOnBrandSearch: false,
                    })
                  )
                loadFindMe()
                  .then((findme) => dispatch(setFindMe(findme)))
              })
            this.close()
          },
          style: 'default'
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true },
    )
  }

  close = () => {
    this.setState({ isOnBrandSearch: false })
    this.props.navigation.navigate(
      'FindMe',
    )
  }

  render() {
    const { ready, page, isOnBrandSearch, displayType } = this.state

    if (ready === false) {
      return <AppLoading />
    }

    let body
    switch (page) {
      case 1:
        body =
          <Body1
            onChange={this.onChange}
            navigation={this.props.navigation}
          />
        break
      case 2:
        if (isOnBrandSearch) {
          body = (
            <BrandSearch
              setBrand={this.setBrand}
            />
          )
        } else {
          body = (
            <Body2
              onChange={this.onChange}
              goBrandSearch={this.goBrandSearch}
              navigation={this.props.navigation}
            />
          )
        }
        break
      case 3:
        body =
          <Body3
            onChange={this.onChange}
            navigation={this.props.navigation}
          />
        break
      case 4:
        body =
          <Body4
            onChange={this.onChange}
            navigation={this.props.navigation}
          />
        break
      default:
        body =
          <Body1
            onChange={this.onChange}
            navigation={this.props.navigation}
          />
        break
    }

    return (
      <View style={styles.background}>
        <View style={styles.blankSpace} />
        {
          displayType === 'undefined'
            ? (

              <View style={styles.container}>
                <View style={styles.brandHeader}>
                  <Header
                    page={page}
                    title={'찾아주세요'}
                    isOnBrandSearch={isOnBrandSearch}
                    goBack={this.goBack}
                    close={this.close}
                  />
                </View>

                <View style={styles.brandBody}>
                  <Intro
                    setDisplayType={this.setDisplayType}
                  />
                </View>
              </View>
            )
            : isOnBrandSearch
              ? (
                <View style={styles.container}>
                  <View style={styles.brandHeader}>
                    <Header
                      page={page}
                      title={'브랜드 찾기'}
                      isOnBrandSearch={isOnBrandSearch}
                      goBack={this.goBack}
                      close={this.close}
                    />
                  </View>

                  <View style={styles.brandBody}>
                    {body}
                  </View>
                </View>
              )
              : (

                <View style={styles.container}>
                  <View style={styles.header}>
                    <Header
                      page={page}
                      title={displayType === 'public' ? '공개 찾기' : '비공개 찾기'}
                      isOnBrandSearch={isOnBrandSearch}
                      goBack={this.goBack}
                      close={this.close}
                    />
                  </View>

                  <View style={styles.nav}>
                    <Nav
                      page={page}
                      goPage={this.goPage}
                    />
                  </View>

                  <View style={styles.body}>
                    {body}
                  </View>

                  <View style={styles.footer}>
                    <Footer
                      goNext={this.goNext}
                      isActive={true}
                      isFinal={page === 4}
                      submit={this.submit}
                    />
                  </View>
                </View>
              )
        }
      </View>
    )
  }
}

const validateData = (page, draft) => {
  const componentName = 'Body' + page
  if (draft) {
    const obj = draft[componentName]
    if (Object.keys(obj).length > 0) {
      for (var key in obj) {
        if (obj[key] === 'undefined') return false
      }
      return true
    }
  }

  return false
  //return true
}

function mapStateToProps(state) {
  return {
    findMeDraft: state.app.findMeDraft
  }
}

export default connect(mapStateToProps)(WriteScreen)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  blankSpace: {
    flex: 1,
  },
  container: {
    flex: 19,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flex: 1,
  },
  nav: {
    flex: 1,
  },
  body: {
    flex: 7,
  },
  footer: {
    flex: 1,
  },
  brandHeader: {
    flex: 1,
  },
  brandBody: {
    flex: 12,
  },
})