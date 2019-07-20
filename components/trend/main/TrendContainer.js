import React from 'react';
import { StyleSheet, Picker, View, ScrollView } from 'react-native';
import TrendCardView from './TrendCardView';
import { throwStatement } from '@babel/types';

export default class TrendContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 'newer',
            data: [],
            isReady: false
        }
    }

    
    prevData = [];

    getPostData() {
        rtnData = this.callPostData();

        //if(!(JSON.stringify(rtnData) === JSON.stringify(this.prevData) )){
            this.prevData = rtnData;
            this.setState({
                data: rtnData,
                isReady: true
            })
        //}
    }
  
    callPostData (){
    //   return fetch('api주소')
    //   .then(request => request.json())
    //   .catch(err => console.log(err))
        data = [{
            type: 0,
            writer : '나불나불',
            date : '4시간 전',
            d_day : 'D-3',
            title : '30대 초 직장인 남친 상의 골라주세요급합니다ㅠㅠ',
            areadyGetGoldkey : false,
            goldkeyCount : 2,
            itemId : 1,
        },{
            type: 1,
            writer : '나불나불',
            date : '5시간 전',
            d_day : 'D-4',
            title : '남자친구가 카드지갑을 찾고있어요, 20만원대 추천좀 해주세요',
            areadyGetGoldkey : true,
            goldkeyCount : 1,
            itemId : 2,
        },{
            type: 2,
            writer : '나불나불',
            date : '4시간 전',
            d_day : '기간만료',
            title : '정려원이 입고나온 옷좀 알려주세요!',
            areadyGetGoldkey : true,
            goldkeyCount : 2,
            itemId : 3,
        },{
            type: 0,
            writer : '나불나불',
            date : '4시간 전',
            d_day : 'D-3',
            title : '30대 초 직장인 남친 상의 골라주세요\n급합니다ㅠㅠ',
            areadyGetGoldkey : false,
            goldkeyCount : 3,
            itemId : 4,
        },{
            type: 1,
            writer : '나불나불',
            date : '5시간 전',
            d_day : 'D-4',
            title : '남자친구가 카드지갑을 찾고있어요, 20만원대 추천좀 해주세요',
            areadyGetGoldkey : false,
            goldkeyCount : 3,
            itemId : 5,
        },{
            type: 2,
            writer : '나불나불',
            date : '4시간 전',
            d_day : '기간만료',
            title : '정려원이 입고나온 옷좀 알려주세요!',
            areadyGetGoldkey : false,
            goldkeyCount : 3,
            itemId : 6,
        }];

        return data;
        
    }

    componentDidMount(){
        console.log("componentDidMount ")
        this.getPostData();
    }

    render() {
        if (this.state.data == undefined|| this.state.data.length == 0) {
            return (
                <ScrollView style={styles.container}>
                    <View style={styles.order}>
                        <Picker 
                            selectedValue={this.state.order}
                            style={styles.orderPicker}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({order: itemValue})
                            }>
                            <Picker.Item label="최신순" value="newer" />
                            <Picker.Item label="추천순" value="recommand" />
                        </Picker>
                    </View>
                </ScrollView>
            ); 
        }else {
            filteredData = this.state.data.filter(d => this.props.viewFilter == 0 || (d.type+1) == this.props.viewFilter);
            return (
                <ScrollView style={styles.container}>
                    <View style={styles.order}>
                        <Picker 
                            selectedValue={this.state.order}
                            style={styles.orderPicker}
                            mode="dropdown"
                            itemStyle={styles.itemStyle}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({order: itemValue})
                            }>
                            <Picker.Item style={styles.itemStyle} label="최신순" value="newer" />
                            <Picker.Item style={styles.itemStyle} label="추천순" value="recommand" />
                        </Picker>
                    </View>
                    <View>
                        { filteredData.map((data, index) => (
                        <TrendCardView
                                data={data}
                                key={index}
                        />
                        ))}
                    </View>
                </ScrollView>
            );
        }

        
    }
}

const styles = StyleSheet.create({
    header: {
    flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%'
    },
    order : {
        height : 12,
        alignItems: 'flex-end',
        marginBottom : 5
    },
    orderPicker : {
        width:120,
        padding:0,
        margin:0,
        top: -5,
        marginBottom : 5,
    },
    itemStyle:{
        textAlign: 'right',
    }

});