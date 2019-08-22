import React, { Component } from 'react';
import { connect } from 'react-redux'
import { AppState, Animated, View, StyleSheet, TouchableOpacity } from 'react-native'
import { setCurrentTap } from '../../actions/app'
import { colors } from '../../utils/constants'
import ParallaxScrollView from '../../components/ParallaxScroll'
import Header from '../../components/findme/main/Header'
import TopNav from '../../components/findme/main/TopNav'
import ListFilter from '../../components/findme/main/ListFilter'
import List from '../../components/findme/main/List'
import FloatingButton from '../../components/common/FloatingButton'


const CURRENT_TAP = 'FindMe'
const HEADER_HEIGHT = 70
const STICKY_HEADER_HEIGHT = 41
let PARALLAX_HEADER_HEIGHT = HEADER_HEIGHT + STICKY_HEADER_HEIGHT;

class FindMeScreen extends Component {
  state = {
    page: 'all',
    fadeAnim: new Animated.Value(1),  // Initial value for opacity: 0
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
    dispatch(setCurrentTap(CURRENT_TAP))
  }


  goPage = (page) => {
    this.setState({ page: page })
  }

  render() {
    const { page } = this.state
    const { navigation } = this.props


    return (
      <View style={styles.container}>
        <ParallaxScrollView
          onScrollBeginDrag={this.fadeIn}
          onScrollEndDrag={this.fadeOut}
          backgroundColor={colors.white}
          contentBackgroundColor={colors.white}
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
                <TopNav
                  page={page}
                  goPage={this.goPage}
                />
              </View>
            </View>
          )}>
          <View style={styles.listFilter}>
            <ListFilter />
          </View>
          <View style={styles.list}>
            <List
              page={page}
              navigation={navigation}
            />
          </View>
        </ParallaxScrollView>
        <Animated.View                 // Special animatable View
          style={[
            {
              opacity: this.state.fadeAnim,         // Bind opacity to animated value
            }
          ]
          }
        >
          <FloatingButton
            screen={CURRENT_TAP}
            navigation={navigation}
          />
        </Animated.View>
      </View>
    );
  }
}

FindMeScreen.navigationOptions = {
  title: '',
  headerStyle: {
    height: 0,
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(FindMeScreen)

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
    height: 35,
  },
  list: {
    flex: 8,
  },
  floatingButton: {
    backgroundColor: 'blue',
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
})