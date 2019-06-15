import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { white } from '../../utils/colors'

class FindMeItem extends Component {
  render() {
    const { findMeItem, navigation } = this.props

    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => navigation.navigate(
            'FindMeDetail',
            { id: findMeItem.id }
          )}
        >
          <Text>{findMeItem.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps({ findme }, { id }) {
  return {
    findMeItem: findme[id]
  }
}

export default connect(mapStateToProps)(FindMeItem)

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: 16,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  text: {
    textAlign: 'center',
  }
});
