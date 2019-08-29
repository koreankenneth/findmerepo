import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  getActiveChildNavigationOptions,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FindMeMainScreen from '../screens/findme/MainScreen';
import FindMeDetailScreen from '../screens/findme/DetailScreen';
import FindMeReportScreen from '../screens/findme/ReportScreen';
import FindMeWriteScreen from '../screens/findme/WriteScreen';

import TrendMainScreen from '../screens/trend/TrendMainScreen';
import RankingScreen from '../screens/RankingScreen';
import MyPageScreen from '../screens/MyPageScreen';

import TrendWriteScreen from '../screens/trend/TrendWriteScreen';

const FindMeMainStack = createStackNavigator(
  {
    FindMeMain: FindMeMainScreen,
    FindMeWriting: FindMeWriteScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: ({ navigation }) => {
      const lastLocation = navigation.state.routes.length - 1
      const { routeName } = navigation.state.routes[lastLocation]
      const tabBarVisible = routeName === 'FindMeWriting' ? false : true
      return {
        tabBarVisible,
      }
    }
  }
)


const FindMeDetailStack = createStackNavigator(
  {
    FindMeDetail: FindMeDetailScreen,
    FindMeReport: FindMeReportScreen,
  },
  {
    mode: 'modal',
    navigationOptions: {
        tabBarVisible: false,
    }
  }
)

const FindMeStack = createStackNavigator(
  {
    FindMe: FindMeMainStack,
    FindMeDetail: FindMeDetailStack,
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => {
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
        tabBarLabel: ' ',
        tabBarIcon,
        ...getActiveChildNavigationOptions(navigation),
      }
    }
  }
)


const TrendStack = createStackNavigator({
  Trend: TrendMainScreen,

  TrendWriting: TrendWriteScreen,
});

TrendStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    focused ? <TabBarIcon
      focused={focused}
      imageUri={require('../assets/images/icoMenuLike_active.png')}
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

const RankingStack = createStackNavigator({
  Ranking: RankingScreen,
});

RankingStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      imageUri={require('../assets/images/drawable-xxxhdpi/ico_menu_shop.png')}
      text={'골드키샵'}
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
        marginBottom: 3,
      },
      tabStyle: {}
    }
  });


