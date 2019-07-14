import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { getPostDetail } from '../../utils/api'
import { AppLoading } from 'expo'
import Header from '../../components/findme/detail/Header'
import Body from '../../components/findme/detail/Body'
import Comment from '../../components/findme/detail/Comment'

export default class DetailScreen extends Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params
    getPostDetail(id)
      .then((postDetail) => this.setState({ postDetail, ready: true }))
  }

  render() {
    const { postDetail, ready } = this.state

    if (ready === false) {
      return <AppLoading />
    }
    
    return (
      <ScrollView style={styles.container}>

        {/* 헤더영역 */}
        <Header />

        {/* 바디영역 */}
        <Body 
          postDetail={postDetail}
        />

        {/* 댓글영역 */}

        {
          postDetail.replies.map((reply) => (
            <Comment 
              reply={reply}
            />
          ))
        }

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
