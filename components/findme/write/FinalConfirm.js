import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'
import Colors from '../../../constants/Colors'
import RoundButton from '../common/RoundButton'
import { AntDesign } from '@expo/vector-icons'

export default class FinalConfirm extends Component {
  state = {
    checked: false,
  }
  render() {
    const { checked } = this.state
    const uri = checked
      ? require('../../../assets/images/drawable-xxxhdpi/ico_check_pre.png')
      : require('../../../assets/images/drawable-xxxhdpi/ico_check_nor.png')

    return (
      <View style={styles.background}>
        <View style={styles.popupbox}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={this.props.close}
          >
            <AntDesign 
              name='close'
              size={15}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>
              주의사항 공유 드립니다.
          </Text>
          </View>
          <View style={styles.orangeLine} />
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              {`- 찾은 물건에 대해 직거래를 유도하는 쪽지 혹은  댓글을 사용하실 경우 영구적으로 계정을 사용 할  수 없어요. 구매는 파인드미를 통해 해 주세요.

- 컨텐츠와 맞지 않은 글을 올리시면 신고대상이 될 수 있어요. 

- 상품의 정보가 모두 맞으면 동의 해 주시고  오른쪽상단 찾아주세요를 눌러주세요.`}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.confirm}
            onPress={() => this.setState({ checked: !checked })}
          >
            <Image source={uri} style={styles.check} />
            <Text style={styles.confirmText}>
              상기 주의사항에 대해 인지했습니다.
          </Text>
          </TouchableOpacity>
          <View style={styles.submit}>
            <RoundButton
              height={45}
              text={'완료'}
              isActive={checked}
              onPress={this.props.submit}
            />
          </View>
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  popupbox: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    marginBottom: 40,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    marginTop: 40,
    marginBottom: 12,
    marginLeft: 25,
    marginRight: 25,
  },
  titleText: {
    fontFamily: 'NotoSansCJKkr-Light',
    fontSize: 24,
  },
  orangeLine: {
    backgroundColor: Colors.orange,
    height: 3,
    width: 18,
    borderRadius: 1.5,
    marginLeft: 25,
  },
  body: {
    marginTop: 17,
    marginLeft: 25,
    marginRight: 25,
  },
  bodyText: {
    fontFamily: 'NotoSansCJKkr-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: '#9e9e9e',
  },
  confirm: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: '18%',
    marginTop: 30,
    marginLeft: 25,
    marginRight: 25,
  },
  check: {
    width: 24,
    height: 24,
  },
  confirmText: {
    marginLeft: 6,
    fontFamily: 'NotoSansCJKkr-Medium',
    fontSize: 15,
    lineHeight: 20,
  },
  submit: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '3%',
    paddingLeft: 20,
    paddingRight: 20,
  },
})