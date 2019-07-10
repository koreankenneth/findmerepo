import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/findme/detail/Header'
import Body from '../../components/findme/detail/Body'
import Comments from '../../components/findme/detail/Comments'

export default class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        {/* 헤더영역 */}
        <Header />

        {/* 바디영역 */}
        <Body navigation={this.props.navigation} />

        {/* 댓글영역 */}
        <Comments navigation={this.props.navigation} />

        {/* 제어영역 */}
        <View style={styles.control}>
          <Text>수정, 삭제, 신고하기 버튼</Text>
        </View>
      </View>
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