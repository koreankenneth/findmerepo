import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors'
import { AntDesign } from '@expo/vector-icons'

const textPlaceholder = `예) 2019년, FW, SS 등 제품을 찾을 때 유의사항이 있으면 기재해주세요. 디테일한 정보는 제품을 찾는 데 많은 도움이 될 수있어요.`

class Body4 extends Component {
  state = {
    text: '',
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textArea}>
          <Text style={styles.guide}>더 알아야 할 내용이 있나요?</Text>
          <View style={styles.contents}>
            <TextInput
              style={styles.textinput}
              multiline={true}
              placeholder={textPlaceholder}
              placeholderTextColor="#c2c2c2"
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />
          </View>
        </View>
        <View style={styles.imageUploadArea}>
          <View style={styles.imageUploadAreaRow}>
            <Text style={styles.imageUploadTitle}>이미지 등록</Text>
            <Text style={styles.imageUploadGuide}>최소 1장의 이미지가 필요해요</Text>
          </View>
          <View style={styles.imageUploadAreaRow}>
            {/* 이미지 썸네일 */}
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton} >
                <AntDesign style={styles.plusIcon}
                  name='plus'
                  size={30}
                  color={Colors.orange}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton} >
                <AntDesign style={styles.plusIcon}
                  name='plus'
                  size={30}
                  color={Colors.orange}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton} >
                <AntDesign style={styles.plusIcon}
                  name='plus'
                  size={30}
                  color={Colors.orange}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton} >
                <AntDesign style={styles.plusIcon}
                  name='plus'
                  size={30}
                  color={Colors.orange}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton} >
                <AntDesign style={styles.plusIcon}
                  name='plus'
                  size={30}
                  color={Colors.orange}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Body4)

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  textArea: {
    marginTop: 30,
    marginBottom: 40,
  },
  guide: {
    fontSize: 25,
    fontWeight: '200',
    marginBottom: 40,
  },
  contents: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    width: '100%',
    height: 200,
    fontSize: 14,
    backgroundColor: Colors.white,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
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
  }
})