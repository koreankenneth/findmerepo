import React, { useState, Component } from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middlewares';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

const store = createStore(reducer, middleware)

export default class App extends Component {
  render() {
    // const [isLoadingComplete, setLoadingComplete] = useState(false);
    // if (!isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={loadResourcesAsync}
    //       onError={handleLoadingError}
    //       onFinish={() => handleFinishLoading(setLoadingComplete)}
    //     />
    //   );
    // } else {
    return (
      <Provider
        store={store}
        style={styles.container}
      >
        {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />} */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});