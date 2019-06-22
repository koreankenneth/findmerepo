import React from 'react';
import { StyleSheet, Image, View,TouchableOpacity, } from 'react-native';

const ICO_WIDTH = 20;
const ICO_HEIGHT = 20;


export default class TrendHeader  extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <Image style={styles.backIcon} source={require('../../assets/images/drawable-xxxhdpi/fill_1.png')} />
                </View>
                <View style={{flex:1, flexDirection : 'row',justifyContent: 'flex-end'}}>
                    <Image style={styles.goldKeyIcon} source={require('../../assets/images/drawable-xxxhdpi/ico_goldkey_bl.png')} />
                    <Image style={styles.alarmIcon} source={require('../../assets/images/drawable-xxxhdpi/ico_alarm.png')} />
                </View>
                
                
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
    },
    backIcon:{
        width : ICO_WIDTH,
        height : ICO_HEIGHT,
        margin : 15,
        left : 0,
    },
    goldKeyIcon:{
        width : ICO_WIDTH,
        height : ICO_HEIGHT,
        margin : 15,
        
    },
    alarmIcon:{
        width : ICO_WIDTH,
        height : ICO_HEIGHT,
        margin : 15,
        right : 0,
    },

  });