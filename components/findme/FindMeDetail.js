import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Feather, Ionicons } from '@expo/vector-icons'
import Swiper from 'react-native-swiper'
import * as Progress from 'react-native-progress'

class FindMeDetail extends Component {
  render() {
    const { findme } = this.props
    const { id } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        {/* 헤더영역 */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Feather
              name='arrow-left'
              size={18}
            />
          </View>
          <View style={styles.headerRight}>
            <Feather style={styles.headerIcons}
              name='share'
              size={18}
            />
            <Feather style={styles.headerIcons}
              name='heart'
              size={18}
            />
          </View>
        </View>

        {/* 프로필영역 */}

        <View style={styles.profile}>
          <View style={styles.profileLeft}>
            <Image
              style={styles.photo}
              source={{ url: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg' }}
            />
            <Text style={styles.nickname}>
              나무늘보
            </Text>
            <Text style={styles.timing}>
              11시간 전
            </Text>
          </View>
          <View style={styles.profileRight}>
            <Feather style={styles.profileIcons}
              name='more-vertical'
              size={17.3}
              color='#424242'
            />
          </View>
        </View>


        <View style={styles.itemDisplay}>

          {/* 아이템사진영역 */}
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            autoplay={false}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
          >
            <Image
              style={styles.itemPhoto}
              source={{ url: 'https://image.goat.com/attachments/product_template_pictures/images/008/654/602/original/162369_00.png.png' }}
            />
            <Image
              style={styles.itemPhoto}
              source={{ url: 'https://image.goat.com/attachments/product_template_pictures/images/020/869/562/original/432997_107.png.png' }}
            />
            <Image
              style={styles.itemPhoto}
              source={{ url: 'https://image.goat.com/240/attachments/product_template_pictures/images/014/957/822/original/G33MS590_L26.png.png' }}
            />
          </Swiper>

        </View>

        {/* 아이템정보영역 */}

        <View style={styles.itemInfo}>
          <View style={styles.itemSummary}>
            <Text style={styles.brand}>{findme[id].item.brand}</Text>
            <View style={styles.itemTitleArea}>
              <Text style={styles.itemName}>{findme[id].item.name}</Text>
              {findme[id].isSecret && <Image source={require('../../assets/images/drawable-xxxhdpi/ico_lock.png')} style={styles.secretIcon} />}
            </View>
            <View style={styles.expContainer}>
              <View style={styles.expAreaLeft}>
                <Progress.Bar
                  progress={0.8}
                  height={8}
                  width={null}
                  color={'#e79e44'}
                  unfilledColor={'#eeeeee'}
                  borderWidth={0}
                />
              </View>
              <View style={styles.expAreaRight}>
                <Text style={styles.expText}>12일 3시간 남음</Text>
              </View>
            </View>
          </View>
          <View style={styles.itemDetail}>
            <View style={styles.itemDetailRow}>
              <Text style={styles.itemDetailKey}>
                카테고리
              </Text>
              <Text style={styles.itemDetailValue}>
                가방
              </Text>
            </View>
            <View style={styles.itemDetailRow}>
              <Text style={styles.itemDetailKey}>
                컬러
              </Text>
              <Text style={styles.itemDetailValue}>
                Black
              </Text>
            </View>
            <View style={styles.itemDetailRow}>
              <Text style={styles.itemDetailKey}>
                사이즈
              </Text>
              <Text style={styles.itemDetailValue}>
                L
              </Text>
            </View>
          </View>
          <View style={styles.reactionArea}>
            <View style={styles.founder}>
              <Feather
                name='alert-circle'
                size={18}
                color='#c0c0c0'
              />
              <Text style={styles.founderNum}>
                5
              </Text>
              <Text style={styles.founderText}>
                명이 이 상품을 찾았어요!
              </Text>
            </View>
            <View style={styles.follower}>
              <Ionicons
                name='md-hand'
                size={18}
                color='#c0c0c0'
              />
              <Text style={styles.followerNum}>
                7
              </Text>
              <Text style={styles.followerText}>
                명도  상품을 찾아요!
              </Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.replies}>
          <Text>댓글</Text>
        </ScrollView>
        <View style={styles.control}>
          <Text>수정, 삭제, 신고하기 버튼</Text>
        </View>
      </View>
    )
  }
}

FindMeDetail.navigationOptions = {
  title:'',
  headerStyle:{
    height:0,
  }
  
}
function mapStateToProps({ findme }) {
  return {
    findme
  }
}

export default connect(mapStateToProps)(FindMeDetail)



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 38,
    flexDirection: 'row',
    padding: 10,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  headerIcons: {
    marginLeft: 10,
    marginRight: 10,
  },
  profile: {
    height: 40,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#c8c8c8',
  },
  profileLeft: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  profileRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  profileIcons: {
    marginLeft: 8,
    marginRight: 8,
  },
  photo: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  nickname: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  timing: {
    color: '#9d9d9d'
  },
  itemDisplay: {
    flex: 3,
    paddingBottom: 8,
    backgroundColor: '#efefef',
  },
  wrapper: {
    backgroundColor: '#ffffff',
  },
  itemPhoto: {
    flex: 1,
    margin: 50,
  },
  dotStyle: {
    backgroundColor: '#d8d8d8',
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 20,
  },
  activeDotStyle: {
    backgroundColor: '#ea9c0c',
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 20,
  },
  slide: {
    flex: 1,
  },
  itemInfo: {
    flex: 3,
    paddingBottom: 8,
    backgroundColor: '#efefef',
  },
  itemSummary: {
    padding: 18,
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
    borderColor: '#c8c8c8',
  },
  brand: {
    fontSize: 12,
    color: '#ea9c0c',
  },
  itemTitleArea: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  secretIcon: {
    width: 14,
    height: 14,
    marginLeft: 5.7,
  },
  itemName: {
    fontSize: 18,
  },
  expContainer: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  expAreaLeft: {
    width: '75%',
  },
  expAreaRight: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expText: {
    marginLeft: '10%',
    fontSize: 10,
    fontWeight: '800',
    color: '#dd9031',
    letterSpacing: 0,
  },
  itemDetail: {
    padding: 18,
    backgroundColor: '#ffffff',
    borderBottomWidth: 0.5,
    borderColor: '#c8c8c8',
  },
  itemDetailRow: {
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 2,
  },
  itemDetailKey: {
    flex: 1,
    fontSize: 12,
  },
  itemDetailValue: {
    flex: 2,
    color: '#7e7e7e',
    fontSize: 12,
  },
  reactionArea: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ffffff',
  },
  founder: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.5,
    borderColor: '#c8c8c8',
  },
  founderNum: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight:  600,
    color: 'red',
  },
  founderText: {
    marginLeft: 2,
    fontSize: 12,
    marginRight: 15,
  },
  follower: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followerNum: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight:  600,
    color: 'red',
  },
  followerText: {
    marginLeft: 2,
    fontSize: 12,
  },
  replies: {
  },
  control: {
    flex: 0.5,
  },
})