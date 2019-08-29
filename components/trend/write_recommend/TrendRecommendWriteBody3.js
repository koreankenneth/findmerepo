import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors'

import { AntDesign } from '@expo/vector-icons'

class TrendRecommendWriteBody3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, contents } = this.props.TrendRecommendWriteBody1   
    const { images } = this.props.TrendRecommendWriteBody2
      
    console.log(images)
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
            {/* 이미지 썸네일 */}
            {images[0] === 'undefined' ?
              <View></View>
                :
              <View style={styles.imageUploadButtonArea}>
                <View style={styles.imageUploadButton}>
                  <Image style={styles.imageArea} source={{uri:images[0]}} />
                </View>
              </View>
            }
            {images[1] === 'undefined' ?
              <View></View>
                :
              <View style={styles.imageUploadButtonArea}>
                <View style={styles.imageUploadButton}>
                  <Image style={styles.imageArea} source={{uri:images[1]}} />
                </View>
              </View>
            
            }
            {images[2] === 'undefined' ?
              <View></View>
                :
              <View style={styles.imageUploadButtonArea}>
                <View style={styles.imageUploadButton}>
                  <Image style={styles.imageArea} source={{uri:images[2]}} />
                </View>
              </View>
            }
            {images[3] === 'undefined' ?
              <View></View>
                :
              <View style={styles.imageUploadButtonArea}>
                <View style={styles.imageUploadButton}>
                  <Image style={styles.imageArea} source={{uri:images[3]}} />
                </View>
              </View>
            }
            {images[4] === 'undefined' ?
            <View></View>
              :
            <View style={styles.imageUploadButtonArea}>
              <View style={styles.imageUploadButton}>
                <Image style={styles.imageArea} source={{uri:images[4]}} />
              </View>
            </View>
          }
          </View>
        </View>
      </View>
    )
  }
  
  
}


function mapStateToProps(state) {
  return {
    TrendRecommendWriteBody1: state.app.trendRecommendDraft.TrendRecommendWriteBody1,
    TrendRecommendWriteBody2: state.app.trendRecommendDraft.TrendRecommendWriteBody2,
    TrendRecommendWriteBody3: state.app.trendRecommendDraft.TrendRecommendWriteBody3,
  }
}

export default connect(mapStateToProps)(TrendRecommendWriteBody3)

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
  },imageUploadAreaRow: {
    alignItems: 'flex-start',
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
  imageArea : {
    width: '100%',
    height : '100%',
    resizeMode: 'contain'
  },

})