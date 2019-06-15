import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View, TouchableOpacity, Text, } from 'react-native';

import ShotMyTasteContainer from '../components/ShotMyTasteContainer';

export default function ShotMyTasteScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.innerMenu} >
        <View style={styles.innerMenuButton}>
          <TouchableOpacity onPress={onPressLearnMore} >
            <Text style={styles.innerMenuButtonText}>전체</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerMenuButton}>
          <TouchableOpacity onPress={onPressLearnMore} >
            <Text style={styles.innerMenuButtonText}>골라줘</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerMenuButton}>
          <TouchableOpacity onPress={onPressLearnMore} >
            <Text style={styles.innerMenuButtonText}>추천해줘</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerMenuButton}>
          <TouchableOpacity onPress={onPressLearnMore} >
            <Text style={styles.innerMenuButtonText}>알려줘</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line}>
      </View>
      <View style={styles.body} >
        <ShotMyTasteContainer/>
      </View>
    </View>

    
  );
}

function onPressLearnMore(){

}

ShotMyTasteScreen.navigationOptions = {
  title: '취향저격',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerMenu : {
    flex : 30,
    flexDirection: 'row'
  },
  line : {
    height: 1,
    backgroundColor : '#c2c2c2'
  },
  innerMenuButton: {
    flex : 1,
    
  },
  
  menuButton:{
    width : 10,
    backgroundColor : 'transparent'
  },
  innerMenuButtonText :{
    fontSize: 20,
    color : '#121212',
    textAlign : 'center',
    margin : 10,
  },
  body : {
    flex : 453,
    backgroundColor: 'blue',
  }
});
