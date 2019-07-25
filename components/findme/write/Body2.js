import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Colors from '../../../constants/Colors'
import { Feather } from '@expo/vector-icons'


class Body2 extends Component {
  state = {
    text: '',
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subjectArea}>
          <Text style={styles.title}>브랜드 선택</Text>
          <Text style={styles.guide}>브랜드는 정하셨어요?</Text>
          <View style={styles.contents}>
            <View style={styles.textarea}>
              <TextInput
                placeholder="발렌시아가"
                placeholderTextColor="#c2c2c2"
                style={styles.textinput}
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
              />
              <View style={styles.searchButtonArea}>
                <Feather style={styles.searchButton}
                  name='search'
                  size={21}
                  color={Colors.black}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.subjectArea}>
          <Text style={styles.title}>제품명 입력</Text>
          <Text style={styles.guide}>정확한 제품 이름을 아세요?</Text>
          <View style={styles.contents}>
            <View style={styles.textarea}>
              <TextInput
                placeholder="예) 19/SS RX DD003"
                placeholderTextColor="#c2c2c2"
                style={styles.textinput}
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
              />
              <View style={styles.searchButtonArea}>
                <Feather style={styles.searchButton}
                  name='search'
                  size={21}
                  color={Colors.black}
                />
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
  }
}

export default connect(mapStateToProps)(Body2)


const styles = StyleSheet.create({
  container: {
  },
  subjectArea: {
    marginTop: 30,
    marginBottom: 100,
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
  textarea: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    width: '100%',
    padding: 10,
  },
  textinput: {
    flex: 15,
    fontSize: 18,
  },
  searchButtonArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {

  },
})