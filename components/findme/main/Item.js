import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../../utils/constants'
import CountDownBar from '../common/CountDownBar'
import { formatDateTime } from '../../../utils/helper'


class Item extends Component {

  render() {
    const { findMeItem, navigation } = this.props

    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => navigation.navigate(
            'FindMeDetail',
            { id: findMeItem.id }
          )}
        >
          <View style={styles.postInfo}>
            <View style={styles.imageArea} >
              <Image
                style={styles.photo}
                source={{ url: findMeItem.images[0].link }}
              />
            </View>
            <View style={styles.textArea} >
              <View style={styles.textAreaHeader}>
                <View style={styles.textAreaHeaderLeft}>
                  <View style={styles.brandContainer}>
                    <Text style={styles.brandText} >{findMeItem.product.productBrand}</Text>
                  </View>
                  {findMeItem.exposureType !== 'PUBLIC' && <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_lock.png')} style={styles.secretIcon} />}
                </View>
                <View style={styles.textAreaHeaderRight}>
                  <Text style={styles.authorText}>{findMeItem.writer.name}</Text>
                </View>
              </View>
              <View style={styles.textAreaBody}>
                <Text style={styles.bodyText}>
                  {findMeItem.content}
                </Text>
              </View>
              <View style={styles.textAreaFooter}>
                <View style={styles.textAreaFooterLeft}>
                  <Text style={styles.timestamp} >{formatDateTime('YYYY.MM.DD', findMeItem.creationDateTime)}</Text>
                </View>
                <View style={styles.textAreaFooterRight}>
                  <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_metoo.png')} style={styles.footerIcons} />
                  <Text style={styles.footerTexts} >{findMeItem.replyCount}</Text>
                  <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_reply.png')} style={styles.footerIcons} />
                  <Text style={styles.footerTexts} >{findMeItem.findmeTooCount}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.countDownArea}>
            <CountDownBar timestamp={findMeItem.creationDateTime} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps({ findme }, { index }) {
  return {
    findMeItem: findme[index],
  }
}

export default connect(mapStateToProps)(Item)

const styles = StyleSheet.create({
  item: {
    width: '95%',
    height: 150,
    backgroundColor: '#ffffff',
    borderRadius: 11,
    borderWidth: 0.5,
    borderColor: '#c2c2c2',
    shadowRadius: 11,
    shadowOpacity: 0.4,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    backgroundColor: colors.white,
    padding: 10.3,
    margin: 6.7,
    justifyContent: 'center',
  },
  postInfo: {
    height: 100,
    flexDirection: 'row',
  },
  imageArea: {
    width: '28%',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#d8d8d8',
    backgroundColor: '#d8d8d8',
  },
  textArea: {
    width: '68%',
    marginLeft: 10,
  },
  textAreaHeader: {
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAreaHeaderLeft: {
    flex: 1,
    flexDirection: 'row',
  },
  textAreaHeaderRight: {
    flex: 1,
  },
  brandContainer: {
    height: 15,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: '#979797',
    justifyContent: 'center',
    alignContent: 'center',
  },
  brandText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#6f6f6f',
    letterSpacing: 1.22,
  },
  secretIcon: {
    width: 15,
    height: 15,
    marginLeft: 3.7,
  },
  authorContainer: {
    alignItems: 'flex-end',
  },
  authorText: {
    fontSize: 12,
    color: '#a6a6a6',
    fontWeight: '500',
    textAlign: 'right',
  },
  textAreaBody: {
    height: '50%',
    paddingTop: 3,
  },
  bodyText: {
    fontSize: 16,
    color: '#313131',
    letterSpacing: -0.3,
  },
  textAreaFooter: {
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAreaFooterLeft: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  timestamp: {
    width: 83,
    fontFamily: 'NotoSansCJKkr-Medium',
    fontSize: 12,
    color: '#a3a3a3',
    letterSpacing: 0,
    marginRight: 50,
  },
  textAreaFooterRight: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerIcons: {
    width: 17,
    height: 17,
    marginLeft: 16,
    marginRight: 3,
  },
  footerTexts: {
    fontSize: 10.7,
    color: '#a3a3a3',
    letterSpacing: 0,
  },
  countDownArea: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
})