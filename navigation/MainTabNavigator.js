import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FindMeScreen from '../screens/FindMeScreen';
import ShotMyTasteScreen from '../screens/ShotMyTasteScreen';
import WritingScreen from '../screens/WritingScreen';
import RankingScreen from '../screens/RankingScreen';
import MyPageScreen from '../screens/MyPageScreen';

const FindMeStack = createStackNavigator({
  FindMe: FindMeScreen,
});

FindMeStack.navigationOptions = {
  tabBarLabel: '파인드미',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      imageUri= {require('../assets/images/icoMenuFindme.png')}
    />
  )
};

const ShotMyTasteStack = createStackNavigator({
  ShotMyTaste: ShotMyTasteScreen,
});

ShotMyTasteStack.navigationOptions = {
  tabBarLabel: '취향저격',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      imageUri= {require('../assets/images/icoMenuLike.png')}
    />
  ),
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
  ShotMyTasteStack,
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

