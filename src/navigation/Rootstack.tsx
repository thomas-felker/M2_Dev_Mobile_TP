import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReactNode } from "react";
import Home from "../components/pages/Home";
import Vue from "../components/pages/Vue";
import StateProps from "../components/pages/StateProps";

export type RootStackParamList = {
  Home: undefined;
  View: undefined;
  StateProps: { nom: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack(): ReactNode {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="View" component={Vue} />
      <Stack.Screen name="StateProps" component={StateProps} />
    </Stack.Navigator>
  );
}

export default RootStack;
