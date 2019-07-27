import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

export default class ListFilter extends React.Component {
  render() {
    return (
      <View style={styles.findMeOrder}>
        <TouchableOpacity style={styles.btnOrder}>
          <Text style={styles.orderText}>
            최신순
            </Text>
          <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_arrow_down.png')} style={styles.arrowDown} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  findMeOrder: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
    paddingRight: '4%',
  },
  btnOrder: {
    flexDirection: 'row',
  },
  orderText: {
    fontSize: 12,
    color: '#414141',
  },
  arrowDown: {
    width: 10,
    height: 10,
    marginTop: 3,
    marginLeft: 6,
    marginRight: 10,
  },
});