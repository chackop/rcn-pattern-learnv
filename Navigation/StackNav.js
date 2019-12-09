import SignUpScreen from "../Screens/SignUpScreen";
import { TabNav } from './TabNav';


import { createStackNavigator } from "react-navigation-stack";

export const StackNav = createStackNavigator(
  {
    Home: {
      screen: TabNav
    },
    SignUp: {
      screen: SignUpScreen
    }
  },
  {
    initialRouteName: "SignUp",
    headerMode: "none"
  }
);