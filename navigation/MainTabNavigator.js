import React from 'react';
import { Platform ,StyleSheet} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FindMeScreen from '../screens/findme/FindMeScreen';
import TrendScreen from '../screens/trend/TrendScreen';
import WritingScreen from '../screens/WritingScreen';
import RankingScreen from '../screens/RankingScreen';
import MyPageScreen from '../screens/MyPageScreen';

import FindMeDetail from '../components/findme/FindMeDetail';

const FindMeStack = createStackNavigator({
  FindMe: FindMeScreen,
  FindMeDetail: FindMeDetail,
});

FindMeStack.navigationOptions = {
  tabBarLabel: '파인드미',
  tabBarIcon: ({ focused }) => (
    focused ? <TabBarIcon
                focused={focused}
                imageUri={require('../assets/images/icoMenuFindme_active.png')}
              />
              :
              <TabBarIcon
                focused={focused}
                imageUri={require('../assets/images/icoMenuFindme_inactive.png')}
              />
  )
};

const TrendStack = createStackNavigator({
  Trend: TrendScreen,
});

TrendStack.navigationOptions = {
  tabBarLabel: '취향저격',
  tabBarIcon: ({ focused }) => (
    focused ? <TabBarIcon
                focused={focused}
                imageUri={require('../assets/images/icoMenuLike_active.png')}
              />
              :
              <TabBarIcon
                focused={focused}
                imageUri={require('../assets/images/icoMenuLike_inactive.png')}
              />
  )
};

const WritingStack = createStackNavigator({
  Writing: WritingScreen,
});

WritingStack.navigationOptions = {
  tabBarLabel: '글쓰기',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      imageUri= {require('../assets/images/icoMenuWrite.png')}
    />
  ),
};


const RankingStack = createStackNavigator({
  Ranking: RankingScreen,
});

RankingStack.navigationOptions = {
  tabBarLabel: '랭킹',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      imageUri= {require('../assets/images/icoMenuRanking.png')}
    />
  ),
};



const MyPageStack = createStackNavigator({
  MyPage: MyPageScreen,
});

MyPageStack.navigationOptions = {
  tabBarLabel: '내페이지',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      imageUri= {require('../assets/images/icoMenuMy.png')}
    />
  ),
};


export default createBottomTabNavigator({
  FindMeStack,
  TrendStack,
  WritingStack,
  RankingStack,
  MyPageStack,

}, {
  tabBarOptions: {
    showLabel: true,
    showIcon: true,
    style: {
      backgroundColor: 'black',
      height: 61,
    },
    labelStyle: {
        fontSize: 9.3,
        color: 'white',
        marginBottom : 9,
    },
    tabStyle: {}
  }
});


