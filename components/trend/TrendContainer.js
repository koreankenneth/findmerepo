import React from 'react';
import { StyleSheet, Picker, View, ScrollView } from 'react-native';
import TrendCardView from './TrendCardView';

export default class TrendContainer extends React.Component {
    state = {
        order: 'newer',
        data: [],
        isLoading: false
    }


    getPostData = async() => {
        const rtnData = await this.callPostData();
        this.setState({
            data: rtnData,
            isLoading: true
        })        
    }
  
    callPostData = async() => {
    //   return fetch('api주소')
    //   .then(request => request.json())
    //   .catch(err => console.log(err))
        return [{
            type: '골라줘',
            writer : '나불나불',
            date : '4시간 전',
            d_day : 'D-3',
            title : '30대 초 직장인 남친 상의 골라주세요\n급합니다ㅠㅠ',
            btnText : '골라주세요 골드키 1개를 드려요',
        },{
            type: '추천해줘',
            writer : '나불나불',
            date : '5시간 전',
            d_day : 'D-4',
            title : '남자친구가 카드지갑을 찾고있어요, 20만원대 추천좀 해주세요',
            btnText : '추천해주세요 골드키 1개를 드려요',
        },{
            type: '알려줘',
            writer : '나불나불',
            date : '4시간 전',
            d_day : '기간만료',
            title : '정려원이 입고나온 옷좀 알려주세요!',
            btnText : '알려주세요 골드키 1개를 드려요',
        },{
            type: '골라줘',
            writer : '나불나불',
            date : '4시간 전',
            d_day : 'D-3',
            title : '30대 초 직장인 남친 상의 골라주세요\n급합니다ㅠㅠ',
            btnText : '골라주세요 골드키 1개를 드려요',
        },{
            type: '추천해줘',
            writer : '나불나불',
            date : '5시간 전',
            d_day : 'D-4',
            title : '남자친구가 카드지갑을 찾고있어요, 20만원대 추천좀 해주세요',
            btnText : '추천해주세요 골드키 1개를 드려요',
        },{
            type: '알려줘',
            writer : '나불나불',
            date : '4시간 전',
            d_day : '기간만료',
            title : '정려원이 입고나온 옷좀 알려주세요!',
            btnText : '알려주세요 골드키 1개를 드려요',
        }]
        
    }

    componentDidMount(){
        this.getPostData();
    }
    
  
    render() {
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
            <View>
                {this.state.data.map((data, index) => (
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
        width:150,
    },

});