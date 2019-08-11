import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export default function TabBarIcon(props) {
  return (
    <View style={styles.container}>

      <Image
        source={props.imageUri}
        size={26}
        style={{ marginBottom: 0, width: 22, height: 22, resizeMode: 'cover' }}
      />
      <Text style={styles.text}>
        {props.text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    color: 'white',
    fontSize: 11,
  },
})