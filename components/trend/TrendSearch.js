import React from 'react';
import { StyleSheet, Image, View,TextInput, } from 'react-native';


export default class TrendSearch  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            placeholder : '송혜교가 입은 블라우스 무엇?',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.searchIcon} source={require('../../assets/images/drawable-xxxhdpi/group.png')} />
                <TextInput
                    style={styles.searchText}
                    placeholder={this.state.placeholder}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        width: '90%',
        height : 41.7,
        borderRadius: 33.3,
        backgroundColor:'white',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    searchIcon : {
        width: 20,
        height: 20,
        left: 7,
        margin : 10.8,
    },
    searchText:{
        width: '80%',
        left: 8,
    },
  });