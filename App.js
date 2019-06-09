import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import reducer from './reducers'
import middleware from './middlewares'
import FindMeList from './components/findme/FindMeList'
import FindMeDetail from './components/findme/FindMeDetail'
import PostItem from './components/PostItem'
import PostFindMe1 from './components/findme/PostFindMe1'
import PostFindMe2 from './components/findme/PostFindMe2'
import PostFindMe3 from './components/findme/PostFindMe3'
import PostFindMe4 from './components/findme/PostFindMe4'
import PostFindMe5 from './components/findme/PostFindMe5'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

class FindMeListScreen extends Component {
  render() {
    return (
      <FindMeList navigation={this.props.navigation} />
    )
  }
}

class PostItemScreen extends Component {
  render() {
    return (
      <PostItem navigation={this.props.navigation} />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  'Fine Me': FindMeListScreen,
  'Write': PostItemScreen,
})

const MainNavigator = createStackNavigator({
  Home: TabNavigator,
  FindMeDetail: FindMeDetail,
  PostFindMe1: PostFindMe1,
  PostFindMe2: PostFindMe2,
  PostFindMe3: PostFindMe3,
  PostFindMe4: PostFindMe4,
  PostFindMe5: PostFindMe5,
})

const AppContainer = createAppContainer(MainNavigator);

const store = createStore(reducer, middleware)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
