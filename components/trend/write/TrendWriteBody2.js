import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Colors from '../../../constants/Colors'
import CameraDialog from '../../common/CameraDialog'


class TrendWriteBody2 extends Component {
  constructor(props) {
    super(props);
    
  }

  state = {
    image: 'undefined',
    isDialogVisiable: false,
  }

  _setImageUri(uri){
    this.props.onChange('TrendWriteBody2', 'image', uri)
  }

  render() {
    const { image, isDialogVisiable } = this.props.TrendWriteBody2
    
    

    return (
      <View style={styles.container}>
        {
         // this.state.isDialogVisiable && 
          <CameraDialog 
          dismissDialog={() => {this.setState({ isDialogVisiable: false });}}
          pictureSelected={(uri) => {this._setImageUri(uri);this.setState({ image: uri});}}
          visible={this.state.isDialogVisiable}
          navigation={this.props.navigation}/>
        }
        
          
        <View style={styles.subjectArea}>
          <Text style={styles.guide}>알고싶은 아이템이 들어간사진을 1장 올려주세요.</Text>

          <View style={styles.contents}>
            {this.state.image === 'undefined' ?
              //이미지 선택 전
              <TouchableOpacity 
                style={styles.iconArea}
                onPress={() => {this.setState({ isDialogVisiable: true });}}>
                
                <Image style={styles.icon} source={require('../../../assets/images/drawable-xxxhdpi/trend_write_ico_plus.png')} />
                <Text style={styles.iconText}>이미지 등록</Text>
              </TouchableOpacity> 
              :
              //이미지 선택 후
              <TouchableOpacity 
              style={styles.iconArea}
              onPress={() => {this.setState({ isDialogVisiable: true });}}>
                <Image style={styles.imageArea} source={{uri:this.state.image}} />
              </TouchableOpacity>
            }            
          </View>
        </View>
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {
    TrendWriteBody2: state.app.trendDraft.TrendWriteBody2,
  }
}

export default connect(mapStateToProps)(TrendWriteBody2)

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
    fontSize: 25,
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
  }
})