import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

export default class TopNav extends React.Component {
  state = {
    selected: 0,
  }
  _onPressMenu(itemIdx) {
    this.setState({ selected: itemIdx });
  }


  render() {
    return (
      <View style={styles.findMeNav}>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.navButton}>
            <Text>
              전체
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.navButtonSelected}>
            <Text>
              찾아주세요
          </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.navButton}>
            <Text>
              아직 못찾았어요
        </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.navButton}>
            <Text>
              찾았어요
        </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  findMeNav: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 3,
    borderBottomColor: '#c2c2c2',
    borderBottomWidth: 0.5,
  },
  btnContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  navButton: {
    height: '100%',
    fontSize: 13.3,
    color: '#121212',
    opacity: 0.6,
    justifyContent: 'center',
  },
  navButtonSelected: {
    height: '100%',
    fontSize: 14.7,
    color: '#121212',
    fontWeight: '900',
    borderBottomColor: '#000000',
    borderBottomWidth: 2.5,
    justifyContent: 'center',
  },
});