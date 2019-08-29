import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Colors from '../../../constants/Colors'
import CameraDialog from '../../common/CameraDialog'

import { AntDesign } from '@expo/vector-icons'

class TrendRecommendWriteBody2 extends Component {
  constructor(props) {
    super(props);
    
  }

  state = {
    images: ['undefined', 'undefined', 'undefined', 'undefined', 'undefined'],
    curIdx : 0,
    isDialogVisiable: false,
  }

  _setImageUri(uri){
    _images = this.state.images;
    _images[this.state.curIdx] = uri;
    this.props.onChange('TrendRecommendWriteBody2', 'images', _images);
    this.setState({ images: _images});
  }

  render() {
    const { curIdx, images, isDialogVisiable, text } = this.props.TrendRecommendWriteBody2

    return (
    
      <View style={styles.container}>
        {
          <CameraDialog 
          dismissDialog={() => {this.setState({ isDialogVisiable: false });}}
          pictureSelected={(uri) => {this._setImageUri(uri);}}
          visible={this.state.isDialogVisiable}
          navigation={this.props.navigation}/>
        }
        
          
        <View style={styles.subjectArea}>
          <Text style={styles.guide}>추천받고 싶은 아이템 이미지가 있나요?
          올려주시면 추천하는데 많은 도움이 돼요!</Text>

          <View style={styles.imageUploadArea}>
          <View style={styles.imageUploadAreaRow}>
            {/* 이미지 썸네일 */}
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton} 
              onPress={() => {this.setState({curIdx : 0});this.setState({ isDialogVisiable: true });}}>
                 {this.state.images[0] === 'undefined' ?
                <AntDesign style={styles.plusIcon}
                  name='plus'
                  size={30}
                  color={Colors.orange}
                />
                :
                <Image style={styles.imageArea} source={{uri:this.state.images[0]}} />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton} 
              onPress={() => {this.setState({curIdx : 1});this.setState({ isDialogVisiable: true });}}>
                {this.state.images[1] === 'undefined' ?
                <AntDesign style={styles.plusIcon}
                  name='plus'
                  size={30}
                  color={Colors.orange}
                />
                :
                <Image style={styles.imageArea} source={{uri:this.state.images[1]}} />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton} 
              onPress={() => {this.setState({curIdx : 2});this.setState({ isDialogVisiable: true });}}>
                {this.state.images[2] === 'undefined' ?
                <AntDesign style={styles.plusIcon}
                  name='plus'
                  size={30}
                  color={Colors.orange}
                />
                :
                <Image style={styles.imageArea} source={{uri:this.state.images[2]}} />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton} 
              onPress={() => {this.setState({curIdx : 3});this.setState({ isDialogVisiable: true });}}>
                {this.state.images[3] === 'undefined' ?
                <AntDesign style={styles.plusIcon}
                  name='plus'
                  size={30}
                  color={Colors.orange}
                />
                :
                <Image style={styles.imageArea} source={{uri:this.state.images[3]}} />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton} 
              onPress={() => {this.setState({curIdx : 4});this.setState({ isDialogVisiable: true });}}>
                {this.state.images[4] === 'undefined' ?
                <AntDesign style={styles.plusIcon}
                  name='plus'
                  size={30}
                  color={Colors.orange}
                />
                :
                <Image style={styles.imageArea} source={{uri:this.state.images[4]}} />
                }
              </TouchableOpacity>
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
    TrendRecommendWriteBody2: state.app.trendRecommendDraft.TrendRecommendWriteBody2,
  }
}

export default connect(mapStateToProps)(TrendRecommendWriteBody2)

const styles = StyleSheet.create({
  container: {
  },
  subjectArea: {
    marginTop : 30,
    marginBottom: 15,
  },
  title: {
    color: Colors.orange,
    fontSize: 14,
    marginBottom: 10,
  },
  guide: {
    fontSize: 18,
    fontWeight: '200',
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,

  },
  contents: {
    alignItems : 'center',
    alignSelf : 'center',
    justifyContent : 'center',
    marginTop : 40,
    borderRadius : 13,
    width : 153,
    height : 153,
    backgroundColor : '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconArea :{
    width: '100%',
    height : '100%',
    justifyContent: 'center',
  }, 
  imageArea : {
    borderRadius : 13,
    width: '100%',
    height : '100%',
    resizeMode: 'contain'
  },
  icon : {
      alignSelf : 'center',
      width : 24,
      height : 24,
  },
  iconText:{
    fontSize : 13,
    marginTop : 5,
    alignSelf : 'center',
  },imageUploadAreaRow: {
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
  imageArea : {
    width: '100%',
    height : '100%',
    resizeMode: 'contain'
  },

})