import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { getTimeDiff } from '../../../utils/helper'

export default function Comment({ reply }) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.leftArea}>

          <Image
            style={styles.photo}
            source={{ url: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg' }}
          />
        </View>
        <View style={styles.middleArea}>
          <Text style={styles.name}>
            {reply.writer.nickName}
          </Text>
          <View style={styles.gradeContainer}>
            <Text style={styles.gradeText}>
              {reply.type}
            </Text>
          </View>
          <View style={styles.roundLabelContainer}>
            <Text style={styles.roundLabelText}>
              랭킹 1,201
            </Text>
          </View>
          <View style={styles.roundLabelContainer}>
            <Text style={styles.roundLabelText}>
              신뢰 80%
            </Text>
          </View>
        </View>
        <View style={styles.rightArea}>
          <View style={styles.moreActionButtonContainer}>
            <TouchableOpacity>
              <Feather style={styles.profileIcons}
                name='more-vertical'
                size={17.3}
                color='#424242'
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.leftArea}>
        </View>
        <View style={styles.middleArea}>
          <Text style={styles.content}>
            {reply.content}
          </Text>
        </View>
        <View style={styles.rightArea}>
        </View>
      </View>


      <View style={styles.reaction}>
        <View style={styles.leftArea}>
        </View>
        <View style={styles.middleArea}>
          <Text style={styles.timestamp}>
            {getTimeDiff(reply.creationDateTime).toString()} 전
          </Text>

          <Text style={styles.textSpacer}>·</Text>

          <View style={styles.commentButton}>
            <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_reply.png')} style={styles.reactionIcons} />
            <Text style={styles.commentText}>댓글 달기</Text>
          </View>

          <Text style={styles.textSpacer}>·</Text>
          <View style={styles.followButton}>
            <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_metoo.png')} style={styles.reactionIcons} />
            <Text style={styles.followText}>나도 찾아요</Text>
            <Text style={styles.followNumberText}>6</Text>
          </View>

        </View>
        <View style={styles.rightArea}>
        </View>
      </View>
      {/* 대댓글 영역 */}
      {
        reply.replies ? reply.replies.map((subReply) => (
          <View style={styles.replyContainer}>
            <View style={styles.profile}>
              <View style={styles.leftArea}>

                <Image
                  style={styles.photo}
                  source={{ url: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg' }}
                />
              </View>
              <View style={styles.middleArea}>
                <Text style={styles.name}>
                  {subReply.writer.nickName}
                </Text>
                <View style={styles.gradeContainer}>
                  <Text style={styles.gradeText}>
                    {subReply.type}
                  </Text>
                </View>
                <View style={styles.roundLabelContainer}>
                  <Text style={styles.roundLabelText}>
                    랭킹 1,201
                </Text>
                </View>
                <View style={styles.roundLabelContainer}>
                  <Text style={styles.roundLabelText}>
                    신뢰 80%
                </Text>
                </View>
              </View>
              <View style={styles.rightArea}>
                <View style={styles.moreActionButtonContainer}>
                  <TouchableOpacity>
                    <Feather style={styles.profileIcons}
                      name='more-vertical'
                      size={17.3}
                      color='#424242'
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.body}>
              <View style={styles.leftArea}>
              </View>
              <View style={styles.middleArea}>
                <Text style={styles.content}>
                  {subReply.content}
                </Text>
              </View>
              <View style={styles.rightArea}>
              </View>
            </View>


            <View style={styles.reaction}>
              <View style={styles.leftArea}>
              </View>
              <View style={styles.middleArea}>
                <Text style={styles.timestamp}>
                  {getTimeDiff(subReply.creationDateTime).toString()} 전
                </Text>
              </View>
              <View style={styles.rightArea}>
              </View>
            </View>
          </View>
        )) : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderColor: '#c8c8c8',
    borderBottomWidth: 0.5,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftArea: {
    flex: 2,
  },
  middleArea: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightArea: {
    flex: 2,
    alignItems: 'flex-end',
  },
  photo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  gradeContainer: {
    height: 16,
    borderRadius: 8,
    backgroundColor: '#d3ccc7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    paddingLeft: 6.7,
    paddingRight: 6.7,
  },
  gradeText: {
    fontSize: 8,
    color: '#ffffff',
  },
  roundLabelContainer: {
    height: 16,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#c5b4a4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    paddingLeft: 6.7,
    paddingRight: 6.7,
  },
  roundLabelText: {
    fontSize: 8,
    color: '#a78563',
  },
  moreActionButtonContainer: {
    justifyContent: 'flex-end',
  },
  body: {
    marginTop: 12,
    flex: 2,
    flexDirection: 'row',
  },
  content: {
    width: '100%',
    height: '100%',
    color: '#484848',
    fontSize: 14,
  },
  reaction: {
    flex: 1,
    height: 17.7,
    marginTop: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timestamp: {
    fontSize: 12,
    color: '#a5a5a5',

  },
  textSpacer: {
    width: 15,
    color: '#a5a5a5',
    textAlign: 'center',
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    fontSize: 12,
    color: '#a5a5a5',

  },
  followButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followText: {
    fontSize: 12,
    color: '#a5a5a5',

  },
  followNumberText: {
    marginLeft: 3,
    fontSize: 12,
    color: '#da5804',
  },
  reactionIcons: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  replyContainer: {
    borderColor: '#c8c8c8',
    borderTopWidth: 0.5,
    marginTop: 10,
    paddingTop: 10,
    paddingLeft: 40,
  },
})