import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../../utils/constants'
import * as Progress from 'react-native-progress'
import CountDownBar from '../common/CountDownBar'


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
                source={{url:findMeItem.images[0].link}}
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
                <Text style={styles.timestamp} >{findMeItem.creationDateTime}</Text>
                <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_metoo.png')} style={styles.footerIcons} />
                <Text style={styles.footerTexts} >{findMeItem.replyCount}</Text>
                <Image source={require('../../../assets/images/drawable-xxxhdpi/ico_reply.png')} style={styles.footerIcons} />
                <Text style={styles.footerTexts} >{findMeItem.findmeTooCount}</Text>
              </View>
            </View>
          </View>
          <CountDownBar timestamp={findMeItem.creationDateTime} />
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
    height: 136,
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
    flexDirection: 'row',
    height: 85,
  },
  photo: {
    width: 83,
    height: 83,
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
    flexDirection: 'row',
    marginTop: 3,
  },
  textAreaHeaderLeft: {
    flex: 1,
    flexDirection: 'row',
  },
  textAreaHeaderRight: {
    flex: 1,
  },
  brandContainer: {
    height: 13,
    padding: 2,
    borderRadius: 8.8,
    borderWidth: 1,
    borderColor: '#979797',
    justifyContent: 'center',
  },
  brandText: {
    fontSize: 7.3,
    color: '#6f6f6f',
    letterSpacing: 1.22,
  },
  secretIcon: {
    width: 14,
    height: 14,
    marginLeft: 3.7,
  },
  authorContainer: {
    alignItems: 'flex-end',
  },
  authorText: {
    fontSize: 10,
    color: '#a6a6a6',
    textAlign: 'right',
  },
  textAreaBody: {
    height: 50,
    paddingTop: 6.7,
    paddingBottom: 6.7,
  },
  bodyText: {
    fontSize: 14,
    color: '#313131',
    letterSpacing: -0.3,
  },
  textAreaFooter: {
    flexDirection: 'row'
  },
  timestamp: {
    width: 83,
    fontSize: 10,
    color: '#a3a3a3',
    letterSpacing: 0,
    marginRight: 50,
  },
  footerIcons: {
    width: 15,
    height: 15,
    marginLeft: 16,
    marginRight: 3,
  },
  footerTexts: {
    fontSize: 10.7,
    color: '#a3a3a3',
    letterSpacing: 0,
  },
  expContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  expAreaLeft: {
    width:'75%',
  },
  expAreaRight: {
    width:'25%',
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
})