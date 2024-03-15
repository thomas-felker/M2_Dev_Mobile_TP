import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReactNode } from "react";
import Home from "../components/pages/Home";
import Vue from "../components/pages/Vue";
import StateProps from "../components/pages/StateProps";
import { navigationTheme } from "../components/provider/PaperProviderTemplate";
import Amis from "../components/pages/Amis";

export type RootStackParamList = {
  Home: undefined;
  View: undefined;
  Amis: undefined;
  StateProps: { nom: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack(): ReactNode {
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: navigationTheme.colors.primary,
      },
      headerTintColor: navigationTheme.colors.text,
      headerTitleStyle: {fontSize: 20}
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="View" component={Vue} />
      <Stack.Screen name="StateProps" component={StateProps} />
      <Stack.Screen name="Amis" component={Amis} />
    </Stack.Navigator>
  );
}

export default RootStack;
