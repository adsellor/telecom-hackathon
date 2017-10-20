import { StackNavigator } from 'react-navigation';
import React from 'react';

import HomeScreen from '../screens/Home';


const MainScreen = new StackNavigator({
    Home: {
        screen: HomeScreen,
        
    },
}, {
    navigationOptions: {
        header: null
    }
})

export default MainScreen;
