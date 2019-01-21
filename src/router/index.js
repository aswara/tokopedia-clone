import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import QuestionScreen from '../screens/Questions';
import ProfileScreen from '../screens/Profile';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import LoadingScreen from '../screens/Loading';

const AppNavigator = createStackNavigator({
    Category: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    Question: {
        screen: QuestionScreen
    },
});

const ProfileNavigator = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
});

AppNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

ProfileNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0 && navigation.state.index < 2) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

const TabNavigator = createBottomTabNavigator({
    Home: AppNavigator,
    Profile: ProfileNavigator,
});

const screenNavigator = createSwitchNavigator({
    Loading: LoadingScreen,
    App: TabNavigator
})


export default createAppContainer(screenNavigator);
