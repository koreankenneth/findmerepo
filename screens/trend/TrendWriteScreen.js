import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert} from 'react-native';
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import TrendWriteBody1 from '../../components/trend/write/TrendWriteBody1'
import TrendWriteBody2 from '../../components/trend/write/TrendWriteBody2'
import TrendWriteBody3 from '../../components/trend/write/TrendWriteBody3'
import TrendWriteBody4 from '../../components/trend/write/TrendWriteBody4'
import TrendWriteNav from '../../components/trend/write/TrendWriteNav'
import TrendWriteFooter from '../../components/trend/write/TrendWriteFooter'
import TrendWriteHeader from '../../components/trend/write/TrendWriteHeader'
import TrendWriteIntro from '../../components/trend/write/TrendWriteIntro'

import { writeTrendDraft } from '../../actions/app'
import { initTrendDraft } from '../../utils/api'




class TrendWriteScreen extends Component {
  state = {
   
  }
  constructor(props) {
    super(props);
    this.state = { 
      displayType: 'undefined',
      page: 1,
      isOnBrandSearch: false,
      ready: false,
    };
    
    //this.onPressBox = this.onPressBox.bind(this);

  }

  
  componentDidMount() {
    const { dispatch } = this.props
    initTrendDraft()
      .then((draft) => dispatch(writeTrendDraft(draft)))
      .then(() => this.setState({ ready: true }))
  }

  goBack = () => {
    const currentPage = this.state.page
    this.setState({ page: currentPage - 1 })
  }

  goNext = () => {
    const currentPage = this.state.page
    validateData(currentPage, this.props.trendDraft)
      ? this.setState({ page: currentPage + 1 })
      : Alert.alert('Error', 'Please select all.')
  }

  goPage = (page) => {
    const currentPage = this.state.page
    validateData(currentPage, this.props.trendDraft)
      ? this.setState({ page: page })
      : Alert.alert('Error', 'Please select all.')
  }

  goBrandSearch = () => {
    this.setState({ isOnBrandSearch: true })
  }

  onChange = (page, area, value) => {
    const { dispatch, trendDraft } = this.props
    const draft = {
      ...trendDraft,
      [page]: {
        ...trendDraft[page],
        [area]: value,
      }
    }

    dispatch(writeTrendDraft(draft))
    this.setState({ [area]: value })
  }

  setBrand = (brand) => {
    this.onChange('TrendWriteBody2', 'brand', brand)
    this.setState({ isOnBrandSearch: false })
  }

  setDisplayType = (displayType) => {
    this.onChange('TrendWriteIntro', 'displayType', displayType)
    this.setState({ displayType: displayType })
  }
  
  getTitle = () => {
    return this.props.trendDraft.TrendWriteBody1.title;
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
    this.setState({ isOnBrandSearch: false, displayType : 'undefined' })
    this.props.navigation.navigate(
      'Trend',
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
          <TrendWriteBody1
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
            <TrendWriteBody2
              onChange={this.onChange}
              goBrandSearch={this.goBrandSearch}
              navigation={this.props.navigation}
            />
          )
        }
        break
      case 3:
        body =
          <TrendWriteBody3
            onChange={this.onChange}
            navigation={this.props.navigation}
          />
        break
      case 4:
        body =
          <TrendWriteBody4
            onChange={this.onChange}
            navigation={this.props.navigation}
          />
        break
      default:
        body =
          <TrendWriteBody1
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
                  <TrendWriteHeader
                    page={page}
                    title={'취향저격 글작성'}
                    isOnBrandSearch={isOnBrandSearch}
                    goBack={this.goBack}
                    close={this.close}
                  />
                </View>

                <View style={styles.brandBody}>
                  <TrendWriteIntro 
                    setDisplayType={this.setDisplayType}
                  />
                </View>
              </View>
            )
            : isOnBrandSearch
                ? (
                  <View style={styles.container}>
                    <View style={styles.brandHeader}>
                      <TrendWriteHeader
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
                      <TrendWriteHeader
                        page={page}
                        title={displayType}
                        isOnBrandSearch={isOnBrandSearch}
                        goBack={this.goBack}
                        close={this.close}
                      />
                    </View>

                    <View style={styles.nav}>
                      <TrendWriteNav
                        page={page}
                        goPage={this.goPage}
                      />
                    </View>

                    <View style={styles.body}>
                      {body}
                    </View>

                    <View style={styles.footer}>
                      <TrendWriteFooter
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
    );
  }
}


const validateData = (page, draft) => {
  const componentName = 'TrendWriteBody' + page
  if (draft) {
    const obj = draft[componentName]
    if (Object.keys(obj).length > 0) {
      for (var key in obj) {
        console.log(key)
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
    trendDraft: state.app.trendDraft
  }
}

TrendWriteScreen.navigationOptions = {
  title:'',
  headerStyle:{
    height:0,
  }
}

export default connect(mapStateToProps)(TrendWriteScreen)

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
