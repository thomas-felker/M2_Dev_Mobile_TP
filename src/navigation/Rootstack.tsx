import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReactNode } from 'react';
import Home from '../components/pages/Home';

export type RootStackParamList = {
    Home : undefined;
  };
  
  const Stack = createNativeStackNavigator<RootStackParamList>();
  
  function RootStack() : ReactNode {
    return (
        <Stack.Navigator
          initialRouteName='Home'>
            <Stack.Screen
              name='Home'
              component={Home}></Stack.Screen>
        </Stack.Navigator>
    );
  }
  
  export default RootStack;