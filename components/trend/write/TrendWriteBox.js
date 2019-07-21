import React,{Component} from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

export default class TrendWriteBox  extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.boxContainer}
                onPress={() => {this.props.onPressBox(this.props.data.title);}}>
                <View style={styles.iconArea}>
                    <Image style={styles.icon} source={this.props.data.image} />
                </View>
                <View style={styles.textArea}>
                    <Text style={styles.title}>{this.props.data.title}</Text>
                    <Text style={styles.contents}>{this.props.data.contents}</Text>
                    <Text style={styles.hint}>{this.props.data.hint}</Text>
                </View>
            </TouchableOpacity> 
        );
    }
}
/*
const TrendWriteBox = ({data, key}) => (
    <TouchableOpacity style={styles.boxContainer}
        onPress= {this.props.onPressBox(key)}>
        <View style={styles.iconArea}>
            <Image style={styles.icon} source={data.image} />
        </View>
        <View style={styles.textArea}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.contents}>{data.contents}</Text>
            <Text style={styles.hint}>{data.hint}</Text>
        </View>
    </TouchableOpacity>
)*/

const styles = StyleSheet.create({
    boxContainer: {
        width:'90%',
        height : '23%',
        borderRadius:17.3,
        flexDirection : 'row',
        borderColor : 'white',
        backgroundColor:'white',
        shadowColor: "#26000000",
        shadowOffset: {
            width: 0,
            height:5,
        },
        shadowRadius: 3,
        elevation: 5,
        margin:10,
        alignSelf: 'center',
    },
    
    iconArea :{
        width: '35%',
        height : '100%',
        
        justifyContent: 'center',
    },
    icon : {
        alignSelf : 'center',
        width : 95,
        height : 80,
    },
    textArea :{
        width: '65%',
        height : '100%',
        alignItems : 'center',
        justifyContent: 'center',
    },
    title : {
        width : '100%',
        textAlign : 'left',
        fontWeight : 'bold',
        color : '#000000',
        fontSize : 20,
        
    },
    contents :{
        width : '100%',
        textAlign : 'left',
        color : '#000000',
        fontSize : 11,
        marginTop : 10,
    },

    hint:{
        width : '100%',
        textAlign : 'left',
        color : '#909090',
        fontSize : 11,
        marginTop : 10,
    }


});

//export default TrendWriteBox;