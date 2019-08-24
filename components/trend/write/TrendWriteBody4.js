import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors'
import { AntDesign } from '@expo/vector-icons'


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

class TrendWriteBody4 extends Component {
  
  render() {
    
    const { title, contents } = this.props.TrendWriteBody1   
    const { selectedCategories } = this.props.TrendWriteBody3

    return (
      <View style={styles.container}>
        <View style={styles.textArea}>
          <Text style={styles.guide}>{title}</Text>
          <View style={styles.contents}>
            <TextInput
              style={styles.textinput}
              multiline={true}
              value={contents}
            />
          </View>
        </View>
        <View style={styles.imageUploadArea}>
          <View style={styles.imageUploadAreaRow}>
            <Text style={styles.imageUploadTitle}>선택한 품목</Text>
          </View>
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
                    />
                  )
                })
              }
            </View>
        </View>
      </View>
    )
  }
}

function ShadowButton({ image, text, area, value, selectedValue}) {
  if(selectedValue.indexOf(value) >= 0){
    return(<View style={styles.shadowButton}>
      {
        image && <Image source={image} style={styles.buttonIcon} />
      }
      <Text>{text}</Text>
    </View>)
  }else{
    return (<View></View>)
  }
}

function mapStateToProps(state) {
  return {
    TrendWriteBody1: state.app.trendDraft.TrendWriteBody1,
    TrendWriteBody2: state.app.trendDraft.TrendWriteBody2,
    TrendWriteBody3: state.app.trendDraft.TrendWriteBody3,
    TrendWriteBody4: state.app.trendDraft.TrendWriteBody4,

  }
}

export default connect(mapStateToProps)(TrendWriteBody4)

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  textArea: {
    marginTop: 30,
    marginBottom: 60,
  },
  guide: {
    fontSize: 25,
    fontWeight: '200',
    marginBottom: 20,
  },
  contents: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    width: '100%',
    height: 110,
    fontSize: 12,
    textAlignVertical: 'top',
    backgroundColor: Colors.white,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
  
  contentsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageUploadAreaRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageUploadTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
  },
  imageUploadGuide: {
    fontSize: 12,
    fontWeight: '200',
  },
  imageUploadButtonArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  imageUploadButton: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shadowButtonHide:{
    display: 'none',
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
  buttonIcon: {
    width: 25,
    height: 25,
    marginRight: 6,
  },
})