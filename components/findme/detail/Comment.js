import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

class Comment extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            style={styles.photo}
            source={{ url: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg' }}
          />
          <Text style={styles.name}>JAY</Text>
          <View style={styles.gradeContainer}>
            <Text style={styles.gradeText}>
              Bronze
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

        <View style={styles.body}>
          <Text style={styles.content}>
            재고가 없네요!
            </Text>
        </View>


        <View style={styles.reaction}>
          <Text style={styles.timestamp}>이틀전</Text>

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
      </View>
    )
  }
}

function mapStateToProps({ findme }) {
  return {
    findme
  }
}

export default connect(mapStateToProps)(Comment)


const styles = StyleSheet.create({
  container: {
    height: 148,
    borderWidth: 0.5,
    borderColor: '#c8c8c8',
    padding: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  name: {
    fontSize: 13,
    fontWeight: '800',
    marginRight: 10,
  },
  gradeContainer: {
    height: 13.3,
    borderRadius: 6.5,
    backgroundColor: '#d3ccc7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    paddingLeft: 6.7,
    paddingRight: 6.7,
  },
  gradeText: {
    fontSize: 6.7,
    color: '#ffffff',
  },
  roundLabelContainer: {
    height: 13.3,
    borderRadius: 6.5,
    borderWidth: 0.5,
    borderColor: '#c5b4a4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    paddingLeft: 6.7,
    paddingRight: 6.7,
  },
  roundLabelText: {
    fontSize: 6,
    color: '#a78563',
  },
  moreActionButtonContainer: {
    justifyContent: 'flex-end',
  },
  body: {
    marginLeft: 40,
  },
  content: {
    color: '#484848',
    fontSize: 12,
  },
  reaction: {
    height: 17.7,
    marginLeft: 40,
    marginTop: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timestamp: {
    fontSize: 10,
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
    fontSize: 10,
    color: '#a5a5a5',

  },
  followButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followText: {
    fontSize: 10,
    color: '#a5a5a5',

  },
  followNumberText: {
    marginLeft: 3,
    fontSize: 10,
    color: '#da5804',
  },
  reactionIcons: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
})