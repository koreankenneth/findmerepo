import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import Colors from '../../../constants/Colors'
import { Feather } from '@expo/vector-icons'
import { AppLoading } from 'expo'
import { loadBrands } from '../../../utils/api'

class BrandSearch extends Component {
  state = {
    ready: false,
    searchText: '',
    manualBrand: '',
    brands: [],
    isOnWriting: false,
  }

  componentDidMount() {
    loadBrands()
      .then((brands) =>
        this.setState({
          brands: brands,
          ready: true,
        })
      )
  }

  onChangeSearch = (searchText) => {
    this.setState({
      searchText,
    })
  }
  onChangeBrand = (manualBrand) => {
    this.setState({
      manualBrand,
    })
  }

  render() {
    const { brands, ready, searchText, manualBrand, isOnWriting } = this.state

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        <View style={styles.textarea}>
          <TextInput
            placeholder='발렌시아가'
            placeholderTextColor='#c2c2c2'
            style={styles.textinput}
            value={this.state.searchText}
            onChangeText={this.onChangeSearch}
            onFocus={this.props.goBrandSearch}
          />
          <View style={styles.searchButtonArea}>
            <Feather style={styles.searchButton}
              name='search'
              size={21}
              color={Colors.black}
              onPress={this.props.goBrandSearch}
            />
          </View>
        </View>
        <View style={styles.brandList}>
          {
            brands.filter((brand) =>
              brand.keyWords.toLowerCase().includes(searchText.toLowerCase())
            ).length === 0
              ?

              <View style={styles.brandNotFound}>
                <View style={styles.brandItem}>
                  <Text style={styles.brandNameEnglish}>
                    브랜드 정보가 없습니다.
                </Text>
                </View>
                <View style={styles.brandManualInputArea}>
                  {
                    isOnWriting
                      ?
                      <View style={styles.brandWritingArea}>
                        <TextInput
                          placeholder='최대 16자로 입력해주세요'
                          placeholderTextColor='#c2c2c2'
                          style={styles.brandWritingInput}
                          value={this.state.text}
                          onChangeText={this.onChangeBrand}
                          onFocus={this.props.goBrandSearch}
                        />
                        <TouchableOpacity
                          style={styles.brandWritingButton}
                          onPress={() => this.props.setBrand(manualBrand)}
                        >
                          <Text>
                            입력
                          </Text>
                        </TouchableOpacity>
                      </View>
                      :
                      <TouchableOpacity
                        style={styles.brandInputButton}
                        onPress={() => this.setState({ isOnWriting: true })}
                      >
                        <Text>
                          브랜드 직접 입력
                        </Text>
                        <Image
                          source={require('../../../assets/images/drawable-xxxhdpi/ico_menu_write.png')}
                          style={styles.brandInputButtonIcon}
                        />
                      </TouchableOpacity>

                  }
                </View>
              </View>
              :
              brands.filter((brand) =>
                brand.keyWords.toLowerCase().includes(searchText.toLowerCase())
              )
                .map((brand) =>
                  < View style={styles.brandItem} >
                    <TouchableOpacity
                      style={styles.brandButton}
                      onPress={() => this.props.setBrand(brand.englishName)}
                    >
                      <Text style={styles.brandNameKorean}>
                        {brand.koreanName}
                      </Text>
                      <Text style={styles.brandNameEnglish}>
                        {brand.englishName}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
          }
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(BrandSearch)

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  textarea: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    width: '100%',
    padding: 10,
    marginBottom: 20,
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
  brandItem: {
    height: 42,
    justifyContent: 'center',
    borderTopWidth: 0.8,
    borderColor: '#eaeaea',
  },
  brandButton: {
    flexDirection: 'row',
  },
  brandNameKorean: {
    color: '#3e3e3e',
    fontSize: 14,
    marginLeft: 5,
  },
  brandNameEnglish: {
    color: '#a6a6a6',
    fontSize: 14,
    marginLeft: 5,
  },
  brandManualInputArea: {
    height: 80,
    borderTopWidth: 0.8,
    borderColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandWritingArea: {
    height: 36,
    width: '75%',
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: '#979797',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
  },
  brandWritingInput: {
    flex: 8,
  },
  brandWritingButton: {
    flex: 1,
  },
  brandInputButton: {
    height: 36,
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: '#979797',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
  },
  brandInputButtonText: {

  },
  brandInputButtonIcon: {
    height: 13,
    width: 13,
    marginLeft: 5,
    opacity: 0.4,
  },
})