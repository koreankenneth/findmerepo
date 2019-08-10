import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import RoundButton from '../../components/findme/common/RoundButton'

class ReportScreen extends Component {
  state = {
    text: '',
    contentText: '',
    selectedReason: 0,
    reasons: {
      1: {
        value: '게시글에 맞지 않음',
        checked: false
      },
      2: {
        value: '욕설 / 비하발언',
        checked: false
      },
      3: {
        value
          : '직거래 혹은 개인거래 유도',
        checked: false
      },

      4: {
        value: '음란성',
        checked: false
      },
      5: {
        value: '게시글 및 댓글 도배',
        checked: false
      },

      6: {
        value: '홍보성 글',
        checked: false
      },

      7: {
        value: '기타',
        checked: false
      },
    }
  }

  onPress = () => {

  }
  render() {
    const { text, contentText, reasons, selectedReason } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.topArea}>

          <View style={styles.header}>
            <View style={styles.headerLeft} />
            <View style={styles.headerMid}>
              <Text style={styles.headerText}>
                신고하기
          </Text>
            </View>
            <View style={styles.headerRight}>
              <AntDesign style={styles.headerIcon}
                name='close'
                size={21}
              />
            </View>
          </View>
          <View style={styles.titleArea}>
            <TextInput
              style={styles.title}
              multiline={false}
              placeholder={`제목을 입력 해 주세요.`}
              placeholderTextColor="#c9c9c9"
              onChangeText={(text) => this.setState({ text })}
              value={text}
            />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyTitle}>
            <Text style={styles.bodyTitleText}>
              신고 사유
            </Text>
          </View>
          <View style={styles.bodyContent}>

            {
              Object.keys(reasons).map((key) =>
                <View style={styles.list}>
                  <CheckBox
                    title={reasons[key].value}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={key === selectedReason ? true : false}
                    onPress={() => this.setState({ selectedReason: key })}
                  />
                </View>
              )
            }

            <TextInput
              style={styles.contentText}
              multiline={true}
              placeholder={`사유를 입력 해 주세요.`}
              placeholderTextColor="#c9c9c9"
              onChangeText={(contentText) => this.setState({ contentText })}
              value={contentText}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <RoundButton
            height={60}
            text={'신고하기'}
            isActive={true}
            onPress={this.onPress}
          />
        </View>
      </View>
    )
  }

}

function mapStateToProps(state) {
  return {
    findme: state.findme
  }
}

ReportScreen.navigationOptions = {
  headerText: '',
  headerStyle: {
    height: 0,
  }

}

export default connect(mapStateToProps)(ReportScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    padding: 15,
  },
  headerLeft: {
    flex: 1,
  },
  headerMid: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
  },
  headerRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  titleArea: {
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#dadada',
  },

  title: {
    height: 50,
    width: '100%',
    backgroundColor: '#f5f3f1',
    paddingLeft: 15,
  },
  body: {
    flex: 1,
    padding: 15,
  },
  bodyTitleText: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  list: {
    marginTop: 5,
  },
  contentText: {
    borderWidth: 0.5,
    borderColor: '#979797',
    margin: 10,
    height: 70,
    padding: 10,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    padding: 15,
  },
})