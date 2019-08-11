import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  BottomTabBar,
} from 'react-navigation';

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
  Trend: TrendScreen,
  TrendWrite: TrendWriteScreen,
});

TrendStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    focused ? <TabBarIcon
      focused={focused}
      imageUri={require('../assets/images/icoMenuLike_active.png')}
      style={{ paddingRight: 20 }}
      text={'취향저격'}
    />
      :
      <TabBarIcon
        focused={focused}
        imageUri={require('../assets/images/icoMenuLike_inactive.png')}
        text={'취향저격'}
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
          text={'글쓰기'}
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
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      imageUri={require('../assets/images/icoMenuRanking.png')}
      text={'랭킹'}
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
      imageUri={require('../assets/images/icoMenuMy.png')}
      text={'내페이지'}
    />
  ),
};


export default createBottomTabNavigator({
  findme: FindMeStack,
  TrendStack,
  RankingStack,
  MyPageStack,

}, {
    tabBarOptions: {
      style: {
        height: 70,
        backgroundColor: 'black',
      }
    },

    tabBarComponent: props => {
      return (
        <BottomTabBar {...props} />
      )
    }
  });

