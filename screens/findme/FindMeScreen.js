import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import FindMeList from '../../components/findme/FindMeList';
import FindMeListFilter from '../../components/findme/FindMeListFilter';
import FindMeTopMenu from '../../components/findme/FindMeTopMenu';
import FindMeHeader from '../../components/findme/FindMeHeader';


export default class FindMeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.findMeHeader}>
          <FindMeHeader />
        </View>
        <View style={styles.findMeTopMenu}>
          <FindMeTopMenu />
        </View>
        <View style={styles.findMeListFilter}>
          <FindMeListFilter />
        </View>
        <View style={styles.findMeList}>
          <FindMeList navigation={this.props.navigation} />
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  findMeHeader: {
    flex: 1,
  },
  findMeTopMenu: {
    flex: 0.5,
  },
  findMeListFilter: {
    flex: 0.5,
  },
  findMeList: {
    flex: 8,
  },
})