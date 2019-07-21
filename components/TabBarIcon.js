import React from 'react';
import { Image } from 'react-native';

export default function TabBarIcon(props) {
  return (
    <Image
      source={props.imageUri}
      size={26}
      style={{ marginBottom: 0, width: 22, height:22, resizeMode:'cover' }}
    />
  );
}
