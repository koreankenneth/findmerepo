import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Alert } from 'react-native'
import Header from '../../components/findme/write/Header'
import Body1 from '../../components/findme/write/Body1'
import Body2 from '../../components/findme/write/Body2'
import Body3 from '../../components/findme/write/Body3'
import Body4 from '../../components/findme/write/Body4'
import Nav from '../../components/findme/write/Nav'
import Footer from '../../components/findme/write/Footer'
import { writeFindMeDraft } from '../../actions/app'
import { initFindMeDraft } from '../../utils/api'
import { AppLoading } from 'expo'

const validateData = (page, draft) => {
  // const componentName = 'Body' + page
  // if (draft) {
  //   const obj = draft[componentName]
  //   console.log(obj)
  //   if (Object.keys(obj).length > 0) {
  //     for (var key in obj) {
  //       if (obj[key] === 'undefined') return false
  //     }
  //     return true
  //   }
  // }

  // return false
  return true
}

class WriteScreen extends Component {
  state = {
    page: 1,
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
    this.setState({[area]: value})
  }

  submit = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false },
    )
  }

  close = () => {
    this.props.navigation.navigate(
      'FindMe',
    )
  }

  render() {
    const { ready } = this.state
    const page = this.state.page

    if (ready === false) {
      return <AppLoading />
    }

    let body
    switch (page) {
      case 1:
        body = <Body1 onChange={this.onChange} />
        break
      case 2:
        body = <Body2 onChange={this.onChange} />
        break
      case 3:
        body = <Body3 onChange={this.onChange} />
        break
      case 4:
        body = <Body4 onChange={this.onChange} />
        break
      default:
        body = <Body1 onChange={this.onChange} />
        break
    }

    return (
      <View style={styles.background}>
        <View style={styles.blankSpace} />
        <View style={styles.container}>
          {/* 헤더 */}
          <View style={styles.header}>
            <Header
              page={this.state.page}
              title={'공개 찾기'}
              goBack={this.goBack}
              close={this.close}
            />
          </View>
          {/* 네비게이션 */}
          <View style={styles.nav}>
            <Nav
              page={this.state.page}
              goPage={this.goPage}
            />
          </View>

          {/* 바디 */}

          <View style={styles.body}>
            {body}
          </View>

          {/* 푸터 */}
          <View style={styles.footer}>
            <Footer
              goNext={this.goNext}
              isActive={true}
              isFinal={this.state.page === 4}
              submit={this.submit}
            />
          </View>
        </View>
      </View>
    )
  }
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
})