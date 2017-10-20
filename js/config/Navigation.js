import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Drawer } from 'native-base';

import React from 'react';

import HomeScreen from '../screens/Home';
import SideBar from '../components/sideBar';

const MainScreen = new DrawerNavigator({
    Home: {
        screen: HomeScreen
    },
}, {
    contentComponent: props => <SideBar {...props} />
})


export default MainScreen;
