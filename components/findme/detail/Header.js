import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default class Header extends React.Component {
  render() {
    return (
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Feather
              name='arrow-left'
              size={24}
              onPress={this.props.goBack}
            />
          </View>
          <View style={styles.headerRight}>
            <Feather style={styles.headerIcons}
              name='share'
              size={21}
            />
            <Feather style={styles.headerIcons}
              name='heart'
              size={21}
            />
          </View>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    padding: 10,
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  headerIcons: {
    marginLeft: 10,
    marginRight: 10,
  },
})