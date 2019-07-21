import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image} from 'react-native';

import TrendWriteBox from '../../components/trend/write/TrendWriteBox';

contentsData = [{
    image : require('../../assets/images/drawable-xxxhdpi/trend_write_pick_ico.png'),
    title : '골라줘',
    contents : '이미 어떤걸 사야할지 생각은 했는데,\n고를수가 없다면?',
    hint : '골라줄수 있는 최소 이미지 2장이 필요해요!',
},{
    image : require('../../assets/images/drawable-xxxhdpi/trend_write_know_ico.png'),
    title : '알려줘',
    contents : '어떤 브랜드인지, 어떤 제품인지 잘모르면\n알려줄게요!',
    hint : '최소 이미지1장이 필요해요!',
},{
    image : require('../../assets/images/drawable-xxxhdpi/trend_write_recommand_ico.png'),
    title : '추천해줘',
    contents : '가격대는 정했는데 어떤걸 사야할지\n잘 모르겠으면추천해 줄게요.',
    hint : '',
}]

export default class TrendWriteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
    this.onPressBox = this.onPressBox.bind(this);

  }

  onPressBox = (idx) => {
    console.log(idx);
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.iconArea}
          onPress={() => this.props.navigation.dismiss()}>
            <Image style={styles.closeIcon} source={require('../../assets/images/drawable-xxxhdpi/close.png')} />
        </TouchableOpacity>
        <View style={styles.boxArea}>
        { contentsData.map((data, index) => (
                        <TrendWriteBox
                            style={ styles.box }
                            data={data}
                            key={index}
                            onPressBox={(idx) => {this.onPressBox(idx);}}
                        />
                        ))}
        </View>
      </View>
    );
  }
}

TrendWriteScreen.navigationOptions = {
  title:'',
  headerStyle:{
    height:0,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconArea : {
    height : '10%',
    width : '100%',
    alignItems : 'flex-end',
  },
  closeIcon : {
    top : '5%',
    right : '2.7%',
    width : 20,
    height : 20,
  },
  boxArea : {
    height : '100%',
    width : '100%',
    top : '-10%',
    justifyContent : "center",
  },
  box : {
      width: '90%',
      height : '22%',
      margin : 15,
      justifyContent : "center",
  }
});
