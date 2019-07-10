import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/findme/detail/Header'
import Body from '../../components/findme/detail/Body'
import Comment from '../../components/findme/detail/Comment'

export default class DetailScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        {/* 헤더영역 */}
        <Header />

        {/* 바디영역 */}
        <Body navigation={this.props.navigation} />

        {/* 댓글영역 */}
        <Comment navigation={this.props.navigation} />

        {/* 제어영역 */}
        <View style={styles.control}>
          <Text>수정, 삭제, 신고하기 버튼</Text>
        </View>
      </ScrollView>
    )
  }
}

DetailScreen.navigationOptions = {
  title: '',
  headerStyle: {
    height: 0,
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  control: {
  },
})
