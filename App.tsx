import React from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Login from "./components/Login"
import ProfileScreen from "./components/Home"
import Register from './components/Register'

const AppNavigator = createStackNavigator(
    {
    Login: Login,
    Register: Register,
    Profile: ProfileScreen
    },
    {
      initialRouteName: 'Login'
    }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}