import React, { Component } from 'react';
import { StyleSheet }       from 'react-native';
import { View }             from 'react-native';
import ParallaxScrollView   from '../../components/ParallaxScroll';
import Header               from '../../components/findme/main/Header';
import TopNav               from '../../components/findme/main/TopNav';
import ListFilter           from '../../components/findme/main/ListFilter';
import List                 from '../../components/findme/main/List';
import { white }            from '../../utils/colors'

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
            <View style={styles.topMenu}>
              <TopNav />
            </View>
          )}
          renderForeground={() => (
            <View>
              <View style={styles.header}>
                <Header />
              </View>
              <View style={styles.topMenu}>
                <TopNav />
              </View>
            </View>
          )}>
          <View style={styles.listFilter}>
            <ListFilter />
          </View>
          <View style={styles.list}>
            <List navigation={this.props.navigation} />
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
  header: {
    height: HEADER_HEIGHT,
  },
  topMenu: {
    height: STICKY_HEADER_HEIGHT,
  },
  listFilter: {
    height: 25,
  },
  list: {
    flex: 8,
  },
})