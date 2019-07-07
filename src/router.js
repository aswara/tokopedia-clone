// @flow
import React from "react";
import { createStackNavigator, createDrawerNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import { Root } from "native-base";
import { Easing, Animated } from 'react-native';
import Login from "./screens/login";
import Home from "./screens/home";
import Sidebar from "./screens/sidebar";
import Product from './screens/product';


const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <Sidebar {...props} />
  }
);



const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    Product: { screen: Product }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX }] };
      },
    }),
  }
);



const AppContainer = createAppContainer(AppNavigator)

export default () => (
  <Root>
    <AppContainer />
  </Root>
);
