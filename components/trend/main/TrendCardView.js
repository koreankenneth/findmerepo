import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ICO_WIDTH = 14;
const ICO_HEIGHT = 14;

const CardD_dayText_end = "기간만료";
const cardTypeText = ['골라줘', '알려줘', '추천해줘'];
const cardTypeColor = ['#ed340d', '#ed340d', '#31bef0'];
const cardTypeWidth = [50, 50, 57.5];

function getCardTypeStyle(cardType) {
    switch(cardType){
        case 0:
            return [styles.CardTypeCommon, styles.CardType1];
        case 1:
            return [styles.CardTypeCommon, styles.CardType2];
        case 2:
            return [styles.CardTypeCommon, styles.CardType3];
    }
    
    return [styles.CardTypeCommon, styles.CardType1];
}


function getCardD_dayStyle(d_day) {
    if(CardD_dayText_end.includes(d_day)){
        return [styles.CardD_day, styles.fontsize16_7];
    }else{
        return [styles.CardD_day, styles.fontsize25_3];
    }
}

function onClickChoice(itemId){
    console.log(itemId + "Clicked")
}

function getCardButton(areadyGetGoldkey, goldkeyCount, itemId){
    

    if(areadyGetGoldkey){
        return (<Text style={styles.CardBtnGet}>{"골든키 " + goldkeyCount + "개를 이미 획득했어요"}</Text>);
    }else{
        return (<TouchableOpacity style={styles.CardBtnNotGet} onPress={()=>onClickChoice(itemId)}>
                    <Text style={styles.CardBtnTextBlackBold}>{"골라주세요!"}</Text>
                    <Image style={styles.goldKeyIcon} source={require('../../../assets/images/drawable-xxxhdpi/ico_goldkey.png')} />
                    <Text style={styles.CardBtnTextBlack}>{"골든키 " + goldkeyCount + "개를 드려요"}</Text>
                </TouchableOpacity>);
    }

}

const TrendCardView = ({data}) => (
    <View style={styles.CardContainer}>
        <View style={styles.TopBar}>
            <Text style={getCardTypeStyle(data.type)}>{cardTypeText[data.type]}</Text>
            <Text style={getCardD_dayStyle(data.d_day)}>{data.d_day}</Text>
        </View>
        <Text style={styles.CardTitle}>{data.title}</Text>
        <View style={styles.bottomBar}>
            <View style={styles.writerView}>
                <Text style={styles.CardWriter}>{data.writer + "  ·  "} </Text>
                <Text style={styles.CardDate}>{data.date}</Text>
            </View>
            
            <View style={styles.replyView}>
                <Image style={styles.replyIcon} source={require('../../../assets/images/drawable-xxxhdpi/ico_reply.png')} />
                <Text style={styles.replyCount}>{data.replyCount}</Text>
            </View>
        </View>
        {getCardButton(data.areadyGetGoldkey, data.goldkeyCount, data.itemId)}
    </View>
)

const styles = StyleSheet.create({
    TopBar: {
        flexDirection: 'row',
    },
    CardContainer: {
        width:'92.5%',
        borderRadius:11,
        borderColor : 'white',
        backgroundColor:'white',
        shadowColor: "#23000000",
        shadowOffset: {
            width: 0,
            height:5,
        },
        shadowRadius: 5.46,
        elevation: 5,
        margin:10,
        marginTop :20,
        padding:15,
        alignSelf: 'center',
        
    },
    CardTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 3,
        margin : 8,
        marginTop: 6,
    },
    
    CardContent: {
        width: '100%',
        fontSize: 20,
        padding: 5
    },
    CardTypeCommon:{
        height:20,
        borderWidth: 1.5,
        borderRadius: 9.7, 
        textAlign : 'center',
        textAlignVertical: 'center',
        fontSize: 10,
    },
    CardType1 : {
        width: cardTypeWidth[0],
        color : cardTypeColor[0],
        borderColor: cardTypeColor[0], 
    },
    CardType2 : {
        width: cardTypeWidth[1],
        color : cardTypeColor[1],
        borderColor: cardTypeColor[1], 
    },
    CardType3 : {
        width: cardTypeWidth[2],
        color : cardTypeColor[2],
        borderColor: cardTypeColor[2], 
    },
    CardD_day : {
        textAlignVertical:'bottom',
        height:34,
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 0,
        bottom:0,
        marginTop : 15,
        color : 'orange',
        fontFamily: "Oswald-Light",
    },
    CardWriter: {
        //width: '20%',
        fontWeight: 'bold',
        fontSize: 10,
        color : '#a6a6a6',
        marginLeft: 11,
        marginBottom: 10,
    },
    CardDate : {
        width: '25%',
        fontSize: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        color : '#a6a6a6',
        marginLeft : 0,
        marginBottom: 10,
    },
    CardBtnTextBlackBold:{
        fontSize: 14,
        color : '#5c5c5c',
        fontWeight : 'bold',
    },
    CardBtnTextBlack:{
        fontSize: 14,
        color : '#5c5c5c',
    },

    CardBtnGet: {
        width: '100%',
        borderWidth: 0.3,
        borderColor: '#979797', 
        color : '#979797',
        borderRadius: 20, 
        textAlign : 'center',
        fontSize: 14,
        padding: 8
    },
    CardBtnNotGet: {
        width: '100%',
        borderWidth: 0.3,
        borderColor: '#5c5c5c', 
        borderRadius: 20, 
        textAlign : 'center',
        fontSize: 14,
        padding: 8,
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
    },
    bottomBar : {
        width :'100%',
        flexDirection: 'row',
    },
    fontsize25_3:{
        fontSize : 25.3,
    },
    fontsize16_7:{
        fontSize : 16.7,
    },
    goldKeyIcon:{
        width : ICO_WIDTH,
        height : ICO_HEIGHT,
        alignSelf :'center',
        margin : 4,
    },
    writerView : {
        width : '70%',
        alignItems : 'flex-start',
        alignSelf : 'flex-start',
        flexDirection: 'row',
    },
    replyView : {
        width : '30%',
        alignItems : 'flex-end',
        justifyContent : 'flex-end',
        flexDirection: 'row',
    },
    replyIcon:{
        width : 15,
        height : 15,
        margin : 0,
        padding: 0,
        marginBottom : 6,
    },
    replyCount:{
        height : 15,
        color:'#a3a3a3',
        fontSize : 11,
        textAlign : 'right',
        marginLeft : 5,
        marginBottom : 8,
        marginRight : 3,

    }
});

export default TrendCardView;