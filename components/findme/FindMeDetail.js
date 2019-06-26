import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class FindMeDetail extends Component {
  render() {
    const { findme } = this.props
    const { id } = this.props.navigation.state.params

    return (
      <View>
        <View>
          <Text>Header</Text>
        </View>
        <View>
          <Text>사용자 정보</Text>
        </View>
        <View>
          <Text>제품 사진</Text>
        </View>
        <View>
          <Text>제품정보 + {findme[id].text}</Text>
        </View>
        <View>
          <Text>팔로워 정보</Text>
        </View>
        <View>
          <Text>댓글</Text>
        </View>
        <View>
          <Text>수정, 삭제, 신고하기 버튼</Text>
        </View>
      </View>
    )
  }
}

function mapStateToProps({ findme }) {
  return {
    findme
  }
}

export default connect(mapStateToProps)(FindMeDetail)