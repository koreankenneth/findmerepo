import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Colors from '../../../constants/Colors'
import TrendWriteBox from './TrendWriteBox'

contentsData = [{
  image : require('../../../assets/images/drawable-xxxhdpi/trend_write_pick_ico.png'),
  title : '골라줘',
  contents : '이미 어떤걸 사야할지 생각은 했는데,\n고를수가 없다면?',
  hint : '골라줄수 있는 최소 이미지 2장이 필요해요!',
},{
  image : require('../../../assets/images/drawable-xxxhdpi/trend_write_know_ico.png'),
  title : '알려줘',
  contents : '어떤 브랜드인지, 어떤 제품인지 잘모르면\n알려줄게요!',
  hint : '최소 이미지1장이 필요해요!',
},{
  image : require('../../../assets/images/drawable-xxxhdpi/trend_write_recommand_ico.png'),
  title : '추천해줘',
  contents : '가격대는 정했는데 어떤걸 사야할지\n잘 모르겠으면추천해 줄게요.',
  hint : '',
}]


class TrendWriteIntro extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TrendWriteBox
            style={ styles.box }
            data={contentsData[0]}
            key={0}
            onPressBox={(idx) => {this.props.setDisplayType(idx);}}
        />
        <TrendWriteBox
            style={ styles.box }
            data={contentsData[1]}
            key={1}
            onPressBox={(idx) => {this.props.setDisplayType(idx);}}
        />
        <TrendWriteBox
            style={ styles.box }
            data={contentsData[2]}
            key={2}
            onPressBox={(idx) => {this.props.setDisplayType(idx);}}
        />
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(TrendWriteIntro)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxButton: {
    width: '100%',
    height: 170,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginBottom: 30,
    flexDirection: 'row',
    // 그림자관련
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  leftArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 60,
    height: 60,
  },
  rightArea: {
    flex: 7,
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 19,
    fontFamily: 'NotoSansCJKkr-Medium',
  },
  textBody: {
    marginTop: 10,
    fontSize: 12,
    color: '#a8a8a8',
    fontFamily: 'NotoSansCJKkr-Medium',
  },
})
