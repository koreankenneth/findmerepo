import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  BottomTabBar,
} from 'react-navigation';
import { Image } from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import TabBarWritingIcon from '../components/TabBarWritingIcon';

import FindMeMainScreen from '../screens/findme/MainScreen';
import FindMeDetailScreen from '../screens/findme/DetailScreen';
import FindMeReportScreen from '../screens/findme/ReportScreen';

import TrendScreen from '../screens/trend/TrendMainScreen';
import WritingScreen from '../screens/WritingScreen';
import RankingScreen from '../screens/RankingScreen';
import MyPageScreen from '../screens/MyPageScreen';

import TrendWriteScreen from '../screens/trend/TrendWriteScreen';

import Colors from '../constants/Colors'

const FindMeStack = createStackNavigator(
  {
    FindMe: FindMeMainScreen,
    FindMeDetail: FindMeDetailScreen,
    FindMeReport: FindMeReportScreen,
  },
  {
    navigationOptions: ({ navigation }) => {
      const tabBarLabel = '파인드미'
      const lastLocation = navigation.state.routes.length - 1
      const { routeName } = navigation.state.routes[lastLocation]
      const tabBarVisible = routeName === 'FindMeDetail' || routeName === 'FindMeReport' ? false : true
      const tabBarIcon = ({ focused }) => (
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
      return {
        tabBarLabel,
        tabBarVisible,
        tabBarIcon,
      }
    }
  }
)

const TrendStack = createStackNavigator({
  Trend: TrendScreen,
  TrendWrite: TrendWriteScreen,
});

TrendStack.navigationOptions = {
  tabBarLabel: '취향저격',
  tabBarIcon: ({ focused }) => (
    focused ? <TabBarIcon
      focused={focused}
      imageUri={require('../assets/images/icoMenuLike_active.png')}
      style={{paddingRight: 20}}
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
},
  {
    navigationOptions: ({ navigation }) => {
      const tabBarLabel = ' ';
      const tabBarVisible = false;
      const tabBarIcon = ({ focused }) => (
        <TabBarWritingIcon
          focused={focused}
          imageUri={require('../assets/images/icoMenuWrite.png')}
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

const RankingStack = createStackNavigator({
  Ranking: RankingScreen,
});

RankingStack.navigationOptions = {
  tabBarLabel: '랭킹',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      imageUri={require('../assets/images/icoMenuRanking.png')}
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
      imageUri={require('../assets/images/icoMenuMy.png')}
    />
  ),
};


export default createBottomTabNavigator({
  findme: FindMeStack,
  TrendStack,
  WritingStack,
  RankingStack,
  MyPageStack,

}, {
    tabBarOptions: {
      style: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0,
      },
      labelStyle: {
        fontSize: 11,
        color: Colors.white,
      },
      tabStyle: {
        borderWidth: 0,
        backgroundColor: 'transparent',
      }
    },

    tabBarComponent: props => {
      return (
        <React.Fragment>
          <Image
            source={require('../assets/images/drawable-xxxhdpi/menu_bg.png')}
            style={{
              height: 70, 
              width: '100%', 
              marginBottom: 20, 
              backgroundColor: 'transparent',
              borderWidth: 0,
            }}
          />
          <BottomTabBar {...props} />
        </React.Fragment>

      )
    }
  });

