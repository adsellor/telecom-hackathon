import React, { PureComponent } from 'react';
import Expo from 'expo';

import MainScreen from './js/config/Navigation'

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isReady: false
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    
    this.setState({ isReady: true })
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <MainScreen/>
  }
}

export default App;
