import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Drawer } from 'native-base';

import React from 'react';

import HomeScreen from '../screens/Home';
import SideBar from '../components/sideBar';
import MarketPlace from '../screens/MarketPlace/index';

const MainScreen = new DrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Marketplace: {
        screen: MarketPlace
    }
}, {
    contentComponent: props => <SideBar {...props} />
})


export default MainScreen;
