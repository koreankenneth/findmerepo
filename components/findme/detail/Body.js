import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import Swiper from 'react-native-swiper'
import CountDownBar from '../common/CountDownBar'
import { getAgeOfPost } from '../../../utils/helper'

export default function Body({ postDetail }) {

  return (
    <View style={styles.container}>

      {/* 프로필 */}

      <View style={styles.profile}>
        <View style={styles.profileLeft}>
          <Image
            style={styles.photo}
            source={{ url: 'https://pbs.twimg.com/profile_images/716487122224439296/HWPluyjs_400x400.jpg' }}
          />
          <Text style={styles.nickname}>
            {postDetail.writer.name}
          </Text>
          <Text style={styles.timing}>
            {getAgeOfPost(postDetail.creationDateTime)}
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

      {/* 아이템사진 */}

      <View style={styles.itemDisplay}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={false}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
        >
          {
            postDetail.images.map((image) => {
              return (
                <Image
                  style={styles.itemPhoto}
                  source={{ url: image.link }}
                  key={image.id} //iteration시, key값 없으면 렌더링 안됨
                />
              )
            })
          }
        </Swiper>
      </View>

      <View style={styles.grayLine} />

      {/* 아이템정보 */}

      <View style={styles.itemInfo}>
        <View style={styles.itemSummary}>
          <Text style={styles.brand}>{postDetail.product.productBrand}</Text>
          <View style={styles.itemTitleArea}>
            <Text style={styles.itemName}>{postDetail.title}</Text>
            {postDetail.exposureType !== 'PUBLIC' && <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_lock.png')} style={styles.secretIcon} />}
          </View>
          <CountDownBar timestamp={postDetail.creationDateTime} />
        </View>
        <View style={styles.itemDetail}>
          <View style={styles.itemDetailRow}>
            <Text style={styles.itemDetailKey}>
              카테고리
              </Text>
            <Text style={styles.itemDetailValue}>
              {postDetail.product.productType}
            </Text>
          </View>
          <View style={styles.itemDetailRow}>
            <Text style={styles.itemDetailKey}>
              컬러
              </Text>
            <Text style={styles.itemDetailValue}>
              {postDetail.product.productColor}
            </Text>
          </View>
          <View style={styles.itemDetailRow}>
            <Text style={styles.itemDetailKey}>
              사이즈
              </Text>
            <Text style={styles.itemDetailValue}>
              {postDetail.product.productSize}
            </Text>
          </View>
          <Text style={styles.text}>
            {postDetail.content}
          </Text>
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

      <View style={styles.grayLine} />

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
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
    height: 350,
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
  grayLine: {
    paddingBottom: 8,
    backgroundColor: '#efefef',
  },
  itemInfo: {
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
    fontSize: 13,
  },
  itemDetailValue: {
    flex: 2,
    color: '#7e7e7e',
    fontSize: 13,
  },
  text: {
    marginTop: 15,
    color: '#7e7e7e',
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
    fontWeight: '600',
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
    fontWeight: '600',
    color: 'red',
  },
  followerText: {
    marginLeft: 2,
    fontSize: 12,
  },
})