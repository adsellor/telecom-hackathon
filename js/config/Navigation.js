import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Drawer } from 'native-base';
import { Video } from 'expo';
import React from 'react';

import HomeScreen from '../screens/Home';
import SideBar from '../components/sideBar';
import MarketPlace from '../screens/MarketPlace/index';
import VideoScreen from '../screens/Video';

const MainScreen = new DrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Marketplace: {
        screen: MarketPlace
    },
    Video: {
        screen: VideoScreen
    }
}, {
    contentComponent: props => <SideBar {...props} />
})


export default MainScreen;
