import React, { useState, Component } from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middlewares';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { AppLoading } from 'expo';

const store = createStore(reducer, middleware)

export default class App extends Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={loadResourcesAsync()}
          onFinish={() => this.setState({ isReady: true })}
          onError={handleLoadingError}
        />
      ); 
    }
    return (
      <Provider
        store={store}
        style={styles.container}
      >
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),Font.loadAsync({
      'Oswald-Light': require('./assets/fonts/Oswald-Light.ttf'),
      'Oswald-ExtraLight': require('./assets/fonts/Oswald-ExtraLight.ttf'),
    })
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});