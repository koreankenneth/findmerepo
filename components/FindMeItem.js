import React from 'react'
import { View, Text } from 'react-native'

export default function FindMeItem () {
  const post = {
    id: 'awoeifjawefij',
    author: 'nelo13',
    timestamp: '2019-03-04',
    text: 'Please, find this item asap. I need to prepare it before my anniversay date.',
    isSecret: true,
    item: {
      name: '18SS 골든구스 슈퍼스타 화이트',
      brand: 'Golden Goose',
      imageURL: '/images/goose.jpg',
    },
    comments: ['C19286398619283','C19286398619284','C19286398619285','C19286398619286'],
    followers: ['koreankenneth', 'ekei', 'heideson']
  }
  return (
    <View> 
      <Text>This is FindMeItem.</Text>
    </View>
  )
}