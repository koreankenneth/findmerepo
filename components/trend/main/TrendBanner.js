import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';

import Swiper from 'react-native-swiper';

export default class TrendBanner  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            banners: [
                {
                  text: 'TV속 궁금한 제품,\n여기서 물어보세요!\n111111',
                  image: require('../../../assets/images/drawable-xxxhdpi/banner_1.png'),
                },
                {
                  text: 'TV속 궁금한 제품,\n여기서 물어보세요!\n22222222222222',
                  image: require('../../../assets/images/drawable-xxxhdpi/banner_2.png'),
                },
                {
                  text: 'TV속 궁금한 제품,\n여기서 물어보세요!\n3333333333',
                  image: require('../../../assets/images/drawable-xxxhdpi/banner_3.png'),
                }
            ]
        };
    }

    render() {
        return (
            <Swiper
                style={styles.wrapper}
                showsButtons={false} 
                autoplay={true} 
                dotStyle={styles.dotStyle} 
                activeDotStyle={styles.activeDotStyle}
                >
                <ImageBackground source={this.state.banners[0].image} style={styles.slide} resizeMode='cover' >
                   <Text style={styles.text}>{this.state.banners[0].text}</Text>
                </ImageBackground>
                <ImageBackground source={this.state.banners[1].image} style={styles.slide} resizeMode='cover'>
                    <Text style={styles.text}>{this.state.banners[1].text}</Text>
                </ImageBackground>
                <ImageBackground source={this.state.banners[2].image} style={styles.slide} resizeMode='cover'>
                    <Text style={styles.text}>{this.state.banners[2].text}</Text>
                </ImageBackground>
            </Swiper>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor:'white'
    },
    slide: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    text: {
        left : '10%',
        top : 15,
        color: '#000000',
        fontSize: 14.7,
    },
    activeDotStyle:{
        backgroundColor: 'black',
        width: 12,
        height: 6, 
        borderRadius: 3, 
        marginLeft: 2, 
        marginRight: 2, 
        marginTop: 2, 
        marginBottom: 2,
    },
    dotStyle:{
        backgroundColor: 'white',
        width: 6,
        height: 6, 
        borderRadius: 3, 
        marginLeft: 2, 
        marginRight: 2, 
        marginTop: 2, 
        marginBottom: 2,
    }
});

  