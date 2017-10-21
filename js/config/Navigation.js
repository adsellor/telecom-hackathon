import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Drawer } from 'native-base';
import { Video } from 'expo';
import React from 'react';

import HomeScreen from '../screens/Home';
import SideBar from '../components/sideBar';
import MarketPlace from '../screens/MarketPlace/index';
import VideoScreen from '../screens/Video';
import AuthScreen from '../screens/AuthScreen/index'

const MainScreen = new DrawerNavigator({
    Exit: {
        screen: AuthScreen,
        navigationOptions: {
            drawerLockMode: 'locked-closed'
        }
    },
    Home: {
        screen: HomeScreen
    },
    Marketplace: {
        screen: MarketPlace
    },
    Video: {
        screen: VideoScreen,
        navigationOptions: {
            drawerLockMode: 'locked-closed'
        }
    }
}, {
    contentComponent: props => <SideBar {...props} />
})


export default MainScreen;
