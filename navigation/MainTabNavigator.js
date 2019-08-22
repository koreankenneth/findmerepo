import React from 'react';
import { Platform ,StyleSheet} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FindMeMainScreen from '../screens/findme/MainScreen';
import FindMeDetailScreen from '../screens/findme/DetailScreen';
import FindMeReportScreen from '../screens/findme/ReportScreen';

import TrendScreen from '../screens/trend/TrendMainScreen';
import WritingScreen from '../screens/WritingScreen';
import RankingScreen from '../screens/RankingScreen';
import MyPageScreen from '../screens/MyPageScreen';

import TrendWriteScreen from '../screens/trend/TrendWriteScreen';
import CameraScreen from '../components/common/CameraScreen';

const FindMeStack = createStackNavigator(
  {
    FindMe: FindMeMainScreen,
    FindMeDetail: FindMeDetailScreen,
    FindMeReport: FindMeReportScreen,
    FindMeWriting: WritingScreen,
  },
  {
    navigationOptions: ({ navigation }) => {
      const tabBarLabel = ' '
      const lastLocation = navigation.state.routes.length - 1
      const { routeName } = navigation.state.routes[lastLocation]
      const tabBarVisible = routeName === 'FindMeDetail' || routeName === 'FindMeReport' ? false : true
      const tabBarIcon = ({ focused }) => (
        focused ? <TabBarIcon
          focused={focused}
          imageUri={require('../assets/images/icoMenuFindme_active.png')}
          text={'파인드미'}
        />
          :
          <TabBarIcon
            focused={focused}
            imageUri={require('../assets/images/icoMenuFindme_inactive.png')}
            text={'파인드미'}
          />
      )
      return {
        tabBarLabel,
        tabBarVisible,
        tabBarIcon,
      }
    }
  }
)
const TrendStack = createStackNavigator({
  Trend: TrendMainScreen,
});

TrendStack.navigationOptions = {
  tabBarLabel: ' ',
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
  Camera: CameraScreen,
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
  tabBarLabel: ' ',
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
  tabBarLabel: ' ',
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


