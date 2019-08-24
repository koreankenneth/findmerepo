
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Colors from '../../../constants/Colors'
import { Feather, Ionicons } from '@expo/vector-icons'


class TrendWriteBody1 extends Component {
  state = {
    title: '',
    contents: '',
  }

  render() {
    const { contents, title } = this.props.TrendWriteBody1
    return (
      <View style={styles.container}>
        <View style={styles.subjectArea}>
          <Text style={styles.title}>제목 입력</Text>
          <Text style={styles.guide}>글 제목을 써주세요</Text>
          <View style={styles.contents}>
            {
              <View style={styles.textArea}>
                <TextInput
                  placeholder='예) 30대 남성 시계 골라주세요!'
                  placeholderTextColor='#c2c2c2'
                  style={styles.textInput}
                  onChangeText={(title) => this.props.onChange('TrendWriteBody1', 'title', title)}
                />
                <View style={styles.searchButtonArea}>
                  <Text style={styles.textlen}>({(title + '').length}/50)</Text>
                </View>
              </View>
            }
          </View>
        </View>
        <View style={styles.subjectArea}>
          <Text style={styles.title}>내용 입력</Text>
          <Text style={styles.guide}>내용을 입력해주세요</Text>
          <View style={styles.contents}>
            <View style={styles.textAreaContents}>
              <TextInput
                multiline 
                placeholder='예) 2019년, FW, SS 등 제품을 찾을 때 유의사항이 
                있으면 기재해주세요. 디테일한 정보는 제품을 찾는 데 
                많은 도움이 될 수있어요.'
                placeholderTextColor='#c2c2c2'
                style={styles.textInputContents}
                onChangeText={(contents) => this.props.onChange('TrendWriteBody1', 'contents', contents)}
                value={contents === 'undefined' ? '' : contents}
              />
              <View style={styles.searchButtonArea}>
                <Text style={styles.textlen}>({(contents + '').length}/150)</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    TrendWriteBody1: state.app.trendDraft.TrendWriteBody1,
  }
}

export default connect(mapStateToProps)(TrendWriteBody1)


const styles = StyleSheet.create({
  container: {
  },
  subjectArea: {
    marginTop: 25,
    marginBottom: 50,
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
  selectedBrandArea: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#979797',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandNameArea: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textArea: {
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    width: '100%',
    padding: 10,
  },
  textAreaContents:{
    height: 90,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    backgroundColor : '#ffffff',
  },
  brandLabel: {
  },
  brandName: {
    fontSize: 23,
    fontWeight: '300',
  },
  textInput: {
    flex: 15,
    fontSize: 21,
  },
  textInputContents : {
    flex: 15,
    
    fontSize: 12,
    backgroundColor : '#ffffff',
    textAlignVertical: 'top',

  },
  searchButtonArea: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  searchButton: {

  },
  textlen:{
    width : 50,
    color:'#c2c2c2',
    fontSize: 12,
  }
})