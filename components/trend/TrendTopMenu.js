import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native';

export default class TrendTopMenu  extends React.Component {
  state = {
    selected: 0,
  }
  _onPressMenu(itemIdx){
    this.setState({selected : itemIdx});
  }
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerMenu} >
          <View style={styles.innerMenuButton}>
            <TouchableOpacity onPress={() => this._onPressMenu(0)} >
              <Text style={
                      this.state.selected == 0
                        ? styles.text_active
                        : styles.text_inactive
                }
                >전체</Text>
            </TouchableOpacity>
            <View style={
                      this.state.selected == 0
                        ? styles.line_active
                        : styles.line_inactive
                }>
            </View>
          </View>
          <View style={styles.innerMenuButton}>
            <TouchableOpacity onPress={() => this._onPressMenu(1)} >
              <Text style={
                      this.state.selected == 1
                        ? styles.text_active
                        : styles.text_inactive
                }
                >골라줘</Text>
            </TouchableOpacity>
            <View style={
                      this.state.selected == 1
                        ? styles.line_active
                        : styles.line_inactive
                }>
            </View>
          </View>
          <View style={styles.innerMenuButton}>
            <TouchableOpacity onPress={() => this._onPressMenu(2)} >
              <Text style={
                      this.state.selected == 2
                        ? styles.text_active
                        : styles.text_inactive
                }
                >추천해줘</Text>
            </TouchableOpacity>
            <View style={
                      this.state.selected == 2
                        ? styles.line_active
                        : styles.line_inactive
                }>
            </View>
          </View>
          <View style={styles.innerMenuButton}>
            <TouchableOpacity onPress={() => this._onPressMenu(3)} >
              <Text style={
                      this.state.selected == 3
                        ? styles.text_active
                        : styles.text_inactive
                }
                >알려줘</Text>
            </TouchableOpacity>
            <View style={
                      this.state.selected == 3
                        ? styles.line_active
                        : styles.line_inactive
                }>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00000000',
    },
    innerMenu : {
      flex : 30,
      flexDirection: 'row'
    },
    line_inactive : {
      backgroundColor : '#00000000'
    },
    line_active : {
      height: 2.7,
      width:30,
      alignSelf: 'center',
      backgroundColor : '#121212',
      margin:0
    },
    innerMenuButton: {
      flex : 1,
      
    },
    text_active :{
      fontSize: 16.8,
      color : '#121212',
      textAlign : 'center',
      margin : 7,
      fontWeight: '700'
    },

    text_inactive :{
      fontSize: 16,
      color : '#12121264',
      textAlign : 'center',
      margin : 7,
      fontWeight: '500'
    },
  });