import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default class FindMeHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerAreaLeft}>
          <Image source={require('../../../assets/images/drawable-xxxhdpi/img_logo.png')} style={styles.logo} />
        </View>
        <View style={styles.headerAreaRight}>
          <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_goldkey.png')} style={styles.goldkey} />
          <Image source={require('../../../assets/images/drawable-xxxhdpi/group.png')} style={styles.group} />
          <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_alarm.png')} style={styles.alarm} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28.7,
    marginTop: 10,
  },
  headerAreaLeft: {
    flex: 1,
  },
  headerAreaRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  logo: {
    width: 94,
    height: 16,
  },
  goldkey: {
    width: 20,
    height: 20,
  },
  group: {
    width: 20,
    height: 20,
    marginLeft: 18,
  },
  alarm: {
    width: 20,
    height: 20,
    marginLeft: 18,
  },
});