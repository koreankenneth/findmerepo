import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default function TabBarWritingIcon(props) {
  return (
    <View style={styles.container}>
      <Image
        source={props.imageUri}
        size={26}
        style={{ marginBottom: 0, width: 22, height: 22, resizeMode: 'cover' }}
      />
      <Text style={styles.text}>찾아줘</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  text: {
    marginTop: 5,
    fontSize: 10,
  }
})
