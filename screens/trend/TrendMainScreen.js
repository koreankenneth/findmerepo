import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View,  Text, } from 'react-native';
import ParallaxScrollView from '../../components/ParallaxScroll';
import TrendContainer from '../../components/trend/main/TrendContainer';
import TrendTopMenu from '../../components/trend/main/TrendTopMenu';
import TrendHeader from '../../components/trend/main/TrendHeader';
import TrendSearch from '../../components/trend/main/TrendSearch';
import TrendBanner from '../../components/trend/main/TrendBanner';

const STICKY_HEADER_HEIGHT = 41;

export default class TrendScreen extends Component {
  constructor(props) {
    super(props);
    
    //this.props.navigation.state.routeName = "TrendWriteScreen";
    this.state = {
      viewFilter: 0,
    };
    this.onPressViewFilter = this.onPressViewFilter.bind(this);
  }

  onPressViewFilter = (itemIdx) => {
    if(itemIdx != this.state.viewFilter)
      this.setState({viewFilter : itemIdx});
  }

  onScroll = () => {

  }  

  render() {
    return (
      <View style={styles.container}>
        <ParallaxScrollView
          onScroll={this.onScroll}
          backgroundColor="#cfe6f3"
          contentBackgroundColor="white"
          parallaxHeaderHeight={240}
          stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
          renderStickyHeader={() => (
            <View key="sticky-header" style={styles.stickySection}>
              <TrendTopMenu 
                onPressViewFilter={(idx) => {this.onPressViewFilter(idx);}}
                viewFilter={this.state.viewFilter}/>
              <View style={styles.line}></View>
            </View>
            
          )}
          renderForeground={() => (
            <View >
              <View style={styles.topHeader}>
                <TrendHeader/>
              </View>
              <View style={styles.topSearch}>
                <TrendSearch/>
              </View>
              <View style={styles.topMenu}>
                <TrendTopMenu 
                  onPressViewFilter={(idx) => {this.onPressViewFilter(idx);}}
                  viewFilter={this.state.viewFilter}/>
              </View>
              <View style={styles.topBanner}>
                <TrendBanner/>
              </View>
            </View>
            
          )}>
          <View style={styles.body} >
            <TrendContainer viewFilter={this.state.viewFilter}/>
          </View>
          

        </ParallaxScrollView>
      </View>
    );
  }
}

TrendScreen.navigationOptions = {
  //header: null,
  title:'',
  headerStyle:{
    height:0,
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerMenu : {
    flex : 30,
    flexDirection: 'row'
  },
  line : {
    height: 1,
    backgroundColor : '#c2c2c2'
  },
  innerMenuButton: {
    flex : 1,
    
  },
  topHeader:{
    height : 50,
  },
  topSearch:{
    height : 48,
  },
  topMenu:{
    height : STICKY_HEADER_HEIGHT,
  },
  topBanner:{
    height : 120,
    backgroundColor: 'white'
  },
  menuButton:{
    width : 10,
    backgroundColor : 'transparent'
  },
  innerMenuButtonText :{
    fontSize: 20,
    color : '#121212',
    textAlign : 'center',
    margin : 10,
  },
  body : {
    flex : 453,
    backgroundColor: 'blue',
  },
  stickySection: {
    backgroundColor : 'white',
    height: STICKY_HEADER_HEIGHT,
    justifyContent: 'flex-end'
  },
});
