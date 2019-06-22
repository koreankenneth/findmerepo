import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

/*
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
>>>>>>> 79e71b7413b63b1f9a32caecbcb3176b3cdb9824
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/