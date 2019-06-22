import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const TrendCardView = ({data}) => (
    <View style={styles.CardContainer}>
        <View style={styles.TopBar}>
            <Text style={styles.CardType}>{data.type}</Text>
            <Text style={styles.CardWriter}>{data.writer}</Text>
            <Text style={styles.CardDate}>{data.date}</Text>
            <Text style={styles.CardD_day}>{data.d_day}</Text>
        </View>
        <Text style={styles.CardTitle}>{data.title}</Text>
        <View style={styles.line}>
        </View>
        <Text style={styles.CardBtn}>{data.btnText}</Text>

    </View>
)

const styles = StyleSheet.create({
    TopBar: {
        flexDirection: 'row'
    },
    CardContainer: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 20,
        marginTop: 20,
        margin: 10
    },
    CardTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 3
    },
    CardWriter: {
        width: '20%',
        fontWeight: 'bold',
        fontSize: 12,
        color : '#121212',
        marginTop: 4,
        marginLeft: 2,
    },
    CardContent: {
        width: '100%',
        fontSize: 20,
        padding: 5
    },
    CardType : {
        width: '20%',
        borderWidth: 1,
        borderColor: '#000', 
        borderRadius: 12, 
        textAlign : 'center',
        fontSize: 13,
        padding: 4
    },
    CardD_day : {
        width: '40%',
        textAlign:'right',
        color : 'orange',
        fontSize: 25,
        fontWeight: 'bold',
    },
    CardDate : {
        width: '20%',
        fontSize: 13,
        justifyContent: 'center', 
        alignItems: 'center',
        color : 'gray',
        marginTop: 4,
    },
    CardBtn: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#000', 
        borderRadius: 10, 
        textAlign : 'center',
        fontSize: 14,
        padding: 8
    },
    line : {
        height: 1,
        backgroundColor : '#c2c2c2',
        margin: 7
    },
});

export default TrendCardView;