import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert} from 'react-native';
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import TrendWriteBody1 from '../../components/trend/write/TrendWriteBody1'
import TrendWriteBody2 from '../../components/trend/write/TrendWriteBody2'
import TrendWriteBody3 from '../../components/trend/write/TrendWriteBody3'
import TrendWriteBody4 from '../../components/trend/write/TrendWriteBody4'

import TrendRecommendWriteBody1 from '../../components/trend/write_recommend/TrendRecommendWriteBody1'
import TrendRecommendWriteBody2 from '../../components/trend/write_recommend/TrendRecommendWriteBody2'
import TrendRecommendWriteBody3 from '../../components/trend/write_recommend/TrendRecommendWriteBody3'
import TrendRecommendWriteBody4 from '../../components/trend/write_recommend/TrendRecommendWriteBody4'

import TrendWriteNav from '../../components/trend/write/TrendWriteNav'
import TrendWriteFooter from '../../components/trend/write/TrendWriteFooter'
import TrendWriteHeader from '../../components/trend/write/TrendWriteHeader'
import TrendWriteIntro from '../../components/trend/write/TrendWriteIntro'

import { writeTrendDraft } from '../../actions/app'
import { initTrendDraft } from '../../utils/api'

import { writeTrendRecommendDraft } from '../../actions/app'
import { initTrendRecommendDraft } from '../../utils/api'
import { USER_FACING_NOTIFICATIONS } from 'expo-permissions';



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

  fadeIn = () => {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0,
        duration: 200,
      }
    ).start();
  }

  fadeOut = () => {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 500,
      }
    ).start();
  }
  
  componentDidMount() {
    const { dispatch } = this.props
    initTrendDraft()
      .then((draft) => dispatch(writeTrendDraft(draft)))
      .then(() => this.setState({ ready: true }))

    initTrendRecommendDraft()
      .then((draft) => dispatch(writeTrendRecommendDraft(draft)))
      .then(() => this.setState({ ready: true }))
  }

  goBack = () => {
    const currentPage = this.state.page
    this.setState({ page: currentPage - 1 })
  }

  goNext = () => {
    const currentPage = this.state.page
    if(this.state.displayType === "골라줘"){
      //
    }else if(this.state.displayType === "알려줘"){
      validateData(currentPage, this.props.trendDraft, this.state.displayType)
      ? this.setState({ page: currentPage + 1 })
      : Alert.alert('Error', 'Please select all.')
    }else if(this.state.displayType === "추천해줘"){
      validateData(currentPage, this.props.trendRecommendDraft, this.state.displayType)
      ? this.setState({ page: currentPage + 1 })
      : Alert.alert('Error', 'Please select all.')
    }
    
  }

  goPage = (page) => {
    const currentPage = this.state.page
    if(this.state.displayType === "골라줘"){
      //
    }else if(this.state.displayType === "알려줘"){
      validateData(currentPage, this.props.trendDraft, this.state.displayType)
      ? this.setState({ page: currentPage + 1 })
      : Alert.alert('Error', 'Please select all.')
    }else if(this.state.displayType === "추천해줘"){
      validateData(currentPage, this.props.trendRecommendDraft, this.state.displayType)
      ? this.setState({ page: currentPage + 1 })
      : Alert.alert('Error', 'Please select all.')
    }
  }

  goBrandSearch = () => {
    this.setState({ isOnBrandSearch: true })
  }

  onChange = (page, area, value) => {
    if(this.state.displayType === "골라줘"){
      
    }else if(this.state.displayType === "알려줘"){
      const { dispatch, trendDraft } = this.props
      const draft = {
        ...trendDraft,
        [page]: {
          ...trendDraft[page],
          [area]: value,
        }
      }
      dispatch(writeTrendDraft(draft))
    }else if(this.state.displayType === "추천해줘"){
      const { dispatch, trendRecommendDraft } = this.props
      console.log(trendRecommendDraft)
      const draft = {
        ...trendRecommendDraft,
        [page]: {
          ...trendRecommendDraft[page],
          [area]: value,
        }
      }
      dispatch(writeTrendRecommendDraft(draft))
    }
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
    if(this.state.displayType === "골라줘"){
      return ""////
    }else if(this.state.displayType === "알려줘"){
      this.props.trendDraft.TrendWriteBody1.title;
    }else if(this.state.displayType === "추천해줘"){
      this.props.trendRecommendDraft.TrendRecommendWriteBody1.title;
    }
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
        if(displayType === "골라줘"){

        }else if (displayType === "알려줘"){
          body =
          <TrendWriteBody1
            onChange={this.onChange}
            navigation={this.props.navigation}
          />
        }else if (displayType === "추천해줘"){
          body =
          <TrendRecommendWriteBody1
            onChange={this.onChange}
            navigation={this.props.navigation}
          />
        }
        
        break
      case 2:
        if(displayType === "골라줘"){
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
        }else if (displayType === "알려줘"){
          body = (
            <TrendWriteBody2
              onChange={this.onChange}
              navigation={this.props.navigation}
            />
          )
        }else if (displayType === "추천해줘"){
          body = (
            <TrendRecommendWriteBody2
              onChange={this.onChange}
              navigation={this.props.navigation}
            />
          )
        }
        break
      case 3:
          if(displayType === "골라줘"){

          }else if (displayType === "알려줘"){
            body =
            <TrendWriteBody3
              onChange={this.onChange}
              navigation={this.props.navigation}
            />
          }else if (displayType === "추천해줘"){
            body =
            <TrendRecommendWriteBody3
              onChange={this.onChange}
              navigation={this.props.navigation}
            />
          }
        break
      case 4:
          if(displayType === "골라줘"){

          }else if (displayType === "알려줘"){
            body =
            <TrendWriteBody4
              onChange={this.onChange}
              navigation={this.props.navigation}
            />
          }else if (displayType === "추천해줘"){
            body =
            <TrendRecommendWriteBody4
              onChange={this.onChange}
              navigation={this.props.navigation}
            />
          }
        break
      default:
          if(displayType === "골라줘"){

          }else if (displayType === "알려줘"){
            body =
            <TrendWriteBody1
              onChange={this.onChange}
              navigation={this.props.navigation}
            />
          }else if (displayType === "추천해줘"){
            body =
            <TrendRecommendWriteBody1
              onChange={this.onChange}
              navigation={this.props.navigation}
            />
          }
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
                        displayType={displayType}
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
                        isFinal={ (displayType === "골라줘" && page === 4) ||
                                  (displayType === "알려줘" && page === 4) || 
                                  (displayType === "추천해줘" && page === 3)}
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


const validateData = (page, draft, displayType) => {
  if(displayType === "골라줘"){
    temp = 'TrendWriteBody' + page
  }else if(displayType === "알려줘"){
    temp = 'TrendWriteBody' + page
  }else if(displayType === "추천해줘"){
    temp = 'TrendRecommendWriteBody' + page
  }

  const componentName = temp
  if (draft) {
    const obj = draft[componentName]
    console.log(obj)
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
    trendDraft: state.app.trendDraft,
    trendRecommendDraft: state.app.trendRecommendDraft,
  
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
