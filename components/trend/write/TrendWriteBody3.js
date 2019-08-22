import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors'
import Toast, {DURATION} from 'react-native-easy-toast'

const categories = {
  top: {
    line: 1,
    value: 'top',
    text: '상의, 자켓',
    uri: require('../../../assets/images/drawable-xxxhdpi/findme_write_ico_shirts.png'),
  },
  blouse: {
    line: 1,
    value: 'blouse',
    text: '자켓, 블라우스',
    uri: require('../../../assets/images/drawable-xxxhdpi/findme_write_ico_blouse.png'),
  },
  cap: {
    line: 1,
    value: 'cap',
    text: '모자',
    uri: require('../../../assets/images/drawable-xxxhdpi/findme_write_ico_cap.png'),
  },
  bag: {
    line: 2,
    value: 'bag',
    text: '가방, 지갑',
    uri: require('../../../assets/images/drawable-xxxhdpi/findme_write_ico_bag.png'),
  },
  jewel: {
    line: 2,
    value: 'jewel',
    text: '쥬얼리',
    uri: require('../../../assets/images/drawable-xxxhdpi/findme_write_ico_jewer.png'),
  },
  bottom: {
    line: 2,
    value: 'bottom',
    text: '치마, 바지',
    uri: require('../../../assets/images/drawable-xxxhdpi/findme_write_ico_skirt.png'),
  },
  glass: {
    line: 3,
    value: 'glass',
    text: '안경, 선글라스',
    uri: require('../../../assets/images/drawable-xxxhdpi/findme_write_ico_glass.png'),
  },
  shoes: {
    line: 3,
    value: 'shoes',
    text: '운동화, 구두',
    uri: require('../../../assets/images/drawable-xxxhdpi/findme_write_ico_shoes.png'),
  },
}

class TrendWriteBody3 extends Component {
  state = {
    selectedCategories: new Array(),
  }
  


  render() {
    const { selectedCategories } = this.props.TrendWriteBody3

      

    return (
      <View style={styles.container}>
        <View style={styles.subjectArea}>
        <Text style={styles.guide}>알고싶은 아이템의 카테고리를 선택해주세요. (최대3개)</Text>
          <View style={styles.contents}>
            <View style={styles.contentsRow}>

              {
                Object.keys(categories).map((key) => {
                  const { uri, text, value } = categories[key]
                  return (
                    <ShadowButton
                      image={uri}
                      text={text}
                      area={'selectedCategories'}
                      value={value}
                      selectedValue={selectedCategories}
                      onPress={this.props.onChange}
                      toast={()=>{this.refs.toast.show('3개 까지만 선택 가능 합니다',1000);}}
                    />
                  )
                })
              }
            </View>
          </View>
        </View>
        <Toast ref="toast" style={{backgroundColor:'red'}} position={'bottom'}/>
      </View>
    )
  }
  
  
}

function ShadowButton({ image, text, area, value, selectedValue, onPress,toast}) {
  
  
  function _onPress(area, value, selValue, toast){
    var isMax = selValue.length == 3;
    var idx = selValue.indexOf(value); 

    if(idx >= 0){
      selValue.splice(idx, 1);
      onPress('TrendWriteBody3', area, selValue);
    }else if(isMax){
      toast();
    }else {
      selValue.push(value);
      onPress('TrendWriteBody3', area, selValue);
    }
  }

  return (
    <TouchableOpacity
      style={selectedValue.indexOf(value) >= 0 ? [styles.shadowButton, styles.buttonSelected] : styles.shadowButton}
      onPress={() => { _onPress(area, value, selectedValue,toast)}}
    >
      {
        image && <Image source={image} style={styles.buttonIcon} />
      }
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

function mapStateToProps(state) {
  return {
    TrendWriteBody3: state.app.trendDraft.TrendWriteBody3,
  }
}

export default connect(mapStateToProps)(TrendWriteBody3)

const styles = StyleSheet.create({
  container: {
  },
  subjectArea: {
    marginBottom: 60,
  },
  title: {
    color: Colors.orange,
    fontSize: 14,
    marginBottom: 10,
  },
  guide: {
    fontSize: 25,
    fontWeight: '200',
    marginBottom: 20,
  },
  contents: {
  },
  contentsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  shadowButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  buttonSelected: {
    borderWidth: 2,
    borderColor: Colors.black,
  },
  buttonIcon: {
    width: 25,
    height: 25,
    marginRight: 6,
  },
})