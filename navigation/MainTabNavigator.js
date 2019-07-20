import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FindMeMainScreen from '../screens/findme/MainScreen';

import TrendScreen from '../screens/trend/TrendMainScreen';
import WritingScreen from '../screens/WritingScreen';
import RankingScreen from '../screens/RankingScreen';
import MyPageScreen from '../screens/MyPageScreen';

import FindMeDetail from '../screens/findme/DetailScreen';
import TrendWriteScreen from '../screens/trend/TrendWriteScreen';

const FindMeStack = createStackNavigator(
  {
    FindMe: FindMeMainScreen,
    FindMeDetail: FindMeDetail,
  },
  {
    navigationOptions: ({ navigation }) => {
      const tabBarLabel   = '파인드미'
      const lastLocation  = navigation.state.routes.length -1
      const tabBarVisible = navigation.state.routes[lastLocation].routeName === 'FindMeDetail' ? false : true
      const tabBarIcon    = ({ focused }) => (
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
  TrendWrite : TrendWriteScreen,
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
    Writing: TrendWriteScreen,
  },
  {
    navigationOptions: ({ navigation }) => {
      const tabBarLabel   = '글쓰기';
      const tabBarVisible = false;
      const tabBarIcon    = ({ focused }) => (
          <TabBarIcon
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
);
/*
WritingStack.navigationOptions = {
  tabBarLabel: '글쓰기',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      imageUri={require('../assets/images/icoMenuWrite.png')}
    />
  ),
  visible: false
};
*/

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
        marginBottom: 9,
      },
      tabStyle: {}
    }
  });


