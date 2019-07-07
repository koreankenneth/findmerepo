import React, { Component } from 'react';
import { StyleSheet }     from 'react-native';
import { View }           from 'react-native';
import ParallaxScrollView from '../../components/ParallaxScroll';
import FindMeHeader       from '../../components/findme/main/FindMeHeader';
import FindMeTopMenu      from '../../components/findme/main/FindMeTopMenu';
import FindMeListFilter   from '../../components/findme/main/FindMeListFilter';
import FindMeList         from '../../components/findme/main/FindMeList';
import { white }          from '../../utils/colors'

const HEADER_HEIGHT = 70;
const STICKY_HEADER_HEIGHT = 41;
let PARALLAX_HEADER_HEIGHT = HEADER_HEIGHT + STICKY_HEADER_HEIGHT;

export default class FindMeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ParallaxScrollView
          backgroundColor={white}
          contentBackgroundColor={white}
          parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
          stickyHeaderHeight={STICKY_HEADER_HEIGHT}
          renderStickyHeader={() => (
            <View style={styles.findMeTopMenu}>
              <FindMeTopMenu />
            </View>
          )}
          renderForeground={() => (
            <View>
              <View style={styles.findMeHeader}>
                <FindMeHeader />
              </View>
              <View style={styles.findMeTopMenu}>
                <FindMeTopMenu />
              </View>
            </View>
          )}>
          <View style={styles.findMeListFilter}>
            <FindMeListFilter />
          </View>
          <View style={styles.findMeList}>
            <FindMeList navigation={this.props.navigation} />
          </View>
        </ParallaxScrollView>
      </View>
    );
  }

}

FindMeScreen.navigationOptions = {
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
  findMeHeader: {
    height: HEADER_HEIGHT,
  },
  findMeTopMenu: {
    height: STICKY_HEADER_HEIGHT,
  },
  findMeListFilter: {
    height: 25,
  },
  findMeList: {
    flex: 8,
  },
})