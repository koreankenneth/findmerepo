import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { getPostDetail } from '../../utils/api'
import { AppLoading } from 'expo'
import Header from '../../components/findme/detail/Header'
import Body from '../../components/findme/detail/Body'
import Comment from '../../components/findme/detail/Comment'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class DetailScreen extends Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params
    getPostDetail(id)
      .then((postDetail) => this.setState({ postDetail, ready: true }))
  }

  goBack = () => {
    this.props.navigation.navigate(
      'FindMeMain',
    )
  }

  render() {
    const { postDetail, ready } = this.state

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <ScrollView style={styles.container}>

        {/* 헤더영역 */}
        <Header 
          goBack={this.goBack}
        />

        {/* 바디영역 */}
        <Body
          postDetail={postDetail}
        />

        {/* 댓글영역 */}
        {
          postDetail.replies ? postDetail.replies.map((reply) => (
            <Comment
              reply={reply}
            />
          )) : null
        }
        
        {/* 제어영역 */}
        <View>
          <View style={styles.control}>
            <Text>수정하기</Text>
          </View>
          <View style={styles.control}>
            <Text>삭제하기</Text>
          </View>
          <TouchableOpacity 
            style={styles.control}
            onPress={() => this.props.navigation.navigate(
              'FindMeReport',
              { id: postDetail.id }
            )}
          >
            <Text>게시글 신고하기</Text>
          </TouchableOpacity>
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
    height: 60,
    color: '#474747',
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#c8c8c8',
    borderBottomWidth: 0.3,
  },
})
