import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';


const MainScreen = new StackNavigator({
    Home: {
        screen: HomeScreen,
    }
}, {
    navegationOptions: {
        header: null,
    }
})

export default MainScreen;
